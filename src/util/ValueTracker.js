import includes from 'lodash-bound/includes';
import isArray  from 'lodash-bound/isArray';
import isString from 'lodash-bound/isString';
import set      from 'lodash-bound/set';
import entries  from 'lodash-bound/entries';

import _isEqual from 'lodash/isEqual';

import assert from 'power-assert';

import {Subject}              from 'rxjs/Subject';
import {BehaviorSubject}      from 'rxjs/BehaviorSubject';
import {never}                from 'rxjs/observable/never';
import {combineLatest}        from 'rxjs/observable/combineLatest';
import {distinctUntilChanged} from 'rxjs/operator/distinctUntilChanged';
import {filter}               from 'rxjs/operator/filter';
import {takeUntil}            from 'rxjs/operator/takeUntil';
import {skip}                 from 'rxjs/operator/skip';
import {map}                  from 'rxjs/operator/map';
import {withLatestFrom}       from 'rxjs/operator/withLatestFrom';
import 'rxjs/add/operator/do';
import {constraint} from "./misc";
import {humanMsg} from "./misc";

const $$events             = Symbol('$$events');
const $$properties         = Symbol('$$properties');
const $$settableProperties = Symbol('$$settableProperties');
const $$initialize         = Symbol('$$initialize');
const $$takeUntil          = Symbol('$$takeUntil');
const $$filterBy           = Symbol('$$filterBy');
const $$currentValues      = Symbol('$$currentValues');

/**
 * Use this as a subclass (or just mix it in) to provide support for
 * events and observable properties through Kefir.js.
 *
 * @export
 * @class ValueTracker
 */
export default class ValueTracker {

	[$$initialize]() {
		if (this[$$events]) { return }
		this[$$events]             = {};
		this[$$properties]         = {};
		this[$$settableProperties] = {};
		this[$$currentValues]      = {};

		/* add the events and properties added with ES7 annotations */
		for (let [key, options] of (this.constructor[$$events] || {})::entries()) {
			this.newEvent(key, options);
		}
		for (let [key, options] of (this.constructor[$$properties] || {})::entries()) {
			this.newProperty(key, options);
		}
	}
	
	constructor() {
		this[$$takeUntil] = never();
		this[$$filterBy]  = (()=>true);
	}
	
	setValueTrackerOptions({ takeUntil = never(), filterBy = (()=>true) }) {
		this[$$takeUntil] = takeUntil;
		this[$$filterBy]  = filterBy;
		this[$$initialize]();
	}
	
	/**
	 * Declares a new event stream for this object.
	 *
	 * @public
	 * @method
	 * @param  {String} name - the name of the event, used to trigger or subscribe to it
	 * @return {Subject} - the created event stream
	 */
	newEvent(name, {} = {}) {
		this[$$initialize]();

		/* is the event name already taken? */
		constraint(!this[$$events][name],
			`There is already an event '${name}' on this object.`);
		constraint(!this[$$properties][name],
			`There is already a property '${name}' on this object.`);
		
		this[$$events][name] = new Subject()
			::takeUntil(this[$$takeUntil])
			::filter   (this[$$filterBy] );
		
		return this[$$events][name];
	}

	/**
	 * This method defines a new property on this object.
	 *
	 * @public
	 * @method
	 * @param  {String}                   name            - the name of the new property
	 * @param  {Boolean}                 [readonly=false] - whether the value can be manually set
	 * @param  {function(*,*):Boolean}   [isEqual]        - a predicate function by which to test for duplicate values
	 * @param  {function(*):Boolean}     [isValid]        - a predicate function to validate a given value
	 * @param  {*}                       [initial]        - the initial value of this property
	 *
	 * @return {BehaviorSubject} - the property associated with the given name
	 */
	newProperty(name, {
		readonly = false,
		isEqual  = _isEqual,
		isValid  = ()=>true,
		initial
	} = {}) {
		this[$$initialize]();

		/* is the property name already taken? */
		constraint(!this[$$events][name],
			`There is already an event '${name}' on this object.`);
		constraint(!this[$$properties][name],
			`There is already a property '${name}' on this object.`);

		/* if isValid is an array, check for inclusion */
		if (isValid::isArray()) { isValid = isValid::includes }
		
		/* define the bus which manages the property */
		let subject = this[$$settableProperties][name] = new BehaviorSubject(initial)
			::filter              (this[$$filterBy] )
			::filter              (this::isValid    )
			::takeUntil           (this[$$takeUntil])
			::distinctUntilChanged(this::isEqual    );
		this[$$properties][name] = readonly ? subject.asObservable() : subject;
		
		/* keep track of current value */
		this[$$properties][name].subscribe((v) => {
			this[$$currentValues][name] = v;
		});
		
		/* create event version of the property */
		this[$$events][name] = subject.asObservable()
			::skip(1); // skip 'current value' on subscribe
		
		/* return property */
		return this[$$settableProperties][name];
	}

	/**
	 * Retrieve an event stream by name. If the name of a property is given, a stream
	 * based on changes to that property is returned.
	 *
	 * @public
	 * @method
	 * @param  {String}  name - the name of the event stream to retrieve
	 * @return {Observable} - the event stream associated with the given name
	 */
	e(name) {
		this[$$initialize]();
		return this[$$events][name] || never();
	}
	
	/**
	 * Retrieve a property by name.
	 *
	 * @public
	 * @method
	 * @param  {String|Array} nameOrDeps          - the name of the property to retrieve, or a list of active dependencies for a derived property
	 * @param  {Array?}       optionalPassiveDeps - an optional list of passive dependencies for a derived property
	 * @param  {Function?}    optionalTransformer - an optional function to map the dependencies to a new value for the derived property
	 * @return {BehaviorSubject | Observable} - the property associated with the given name or an observable of combined properties
	 */
	p(nameOrDeps, optionalPassiveDeps = [], optionalTransformer = (...args)=>args) {
		this[$$initialize]();
		if (nameOrDeps::isArray()) {
			return combineLatest(...nameOrDeps         .map(::this.p))
				::withLatestFrom(...optionalPassiveDeps.map(::this.p), // TODO: withLatestFrom doesn't work; provides old values
					(active, ...passive) => optionalTransformer(...active, ...passive));
		} else if (nameOrDeps::isString()) {
			if (!this[$$properties][nameOrDeps]) {
				const butEventExists = (this[$$events][nameOrDeps] ? humanMsg`
					But there is an event with that name, so
					you could use .e('${nameOrDeps}')
				` : '');
				throw new Error(humanMsg`
					No property '${nameOrDeps}' exists.
					${butEventExists}
				`);
			}
			return this[$$properties][nameOrDeps];
		}
	}
	
	/**
	 * Retrieve a property by name. This returns as a Subject
	 * regardless of 'readonly' option, only to be used by
	 * the 'owner' of the property.
	 *
	 * @public
	 * @method
	 * @param  {String} name     - the name of the property to retrieve
	 * @return {BehaviorSubject} - the property associated with the given name
	 */
	pSubject(name) {
		this[$$initialize]();
		return this[$$settableProperties][name];
	}

};

export const property = (options = {}) => (target, key) => {
	target::set(['constructor', $$properties, key], options);
	return {
		get() { return this[$$currentValues][key] },
		...(!options.readonly && {
			set(value) { this.p(key).next(value) }
		})
	};
};

export const event = (options = {}) => (target, key) => {
	let match = key.match(/^(\w+)Event$/);
	constraint(match,
		`@event() decorators require a name that ends in 'Event'.`);
	let name = match[1];
	target::set(['constructor', $$events, name], options);
	return { get() { return this.e(name) } };
};
