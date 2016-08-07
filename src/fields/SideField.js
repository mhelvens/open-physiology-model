import {filter}                   from 'rxjs/operator/filter';
import {pairwise}                 from 'rxjs/operator/pairwise'
import {startWith}                from 'rxjs/operator/startWith';
import 'rxjs/add/operator/do';

import isUndefined from 'lodash-bound/isUndefined';
import isNull      from 'lodash-bound/isNull';
import isObject    from 'lodash-bound/isObject';

import {defineProperty} from 'bound-native-methods';

import assert from 'power-assert';

import {humanMsg} from "../util/misc";

import {Field} from './Field';

import {
	$$registerFieldClass,
	$$owner,
	$$key,
	$$desc,
	$$initSet,
	$$entriesIn,
} from './symbols';


Field[$$registerFieldClass](class SideField extends Field {
	
	// this[$$owner] instanceof RelatedTo
	// this[$$key]   instanceof 1 | 2
	// this[$$value] instanceof Resource
	
	////////////
	// static //
	////////////
	
	static initClass({ cls, key, desc: {readonly} }) {
		assert(cls.isRelationship);
		if (cls.prototype.hasOwnProperty(key)) { return }
		cls.prototype::defineProperty(key, {
			get() { return this.fields[key].get() },
			...(readonly ? undefined : {
				set(val) { this.fields[key].set(val)}
			}),
			enumerable:   true,
			configurable: false
		});
	}
	
	static [$$entriesIn](cls) {
		if (!cls.isRelationship) { return [] }
		return [
			{ key: 1, cls, desc: cls.domainPairs[0][1], relatedKeys: [2] },
			{ key: 2, cls, desc: cls.domainPairs[0][2], relatedKeys: [1] }
		];
		// TODO: unify multiple overlapping domainPairs when needed
	}
	
	
	//////////////
	// instance //
	//////////////
	
	constructor(options) {
		super(options);
		const { owner, desc, key, initialValue, waitUntilConstructed } = options;
		
		/* set the initial value */
		this[$$initSet](
			[initialValue::isObject() || initialValue::isNull(), initialValue                     ],
			[desc.resourceClass.singleton,                       ::desc.resourceClass.getSingleton],
			[desc.options.auto,                                  ::desc.resourceClass.new         ]
		);
		
		/* if one side becomes null, then so does the other, */
		/* releasing the relationship                        */
		this.p('value')
			::waitUntilConstructed()
			::filter(v=>v===null)
			.subscribe(owner.fields[desc.codomain.keyInRelationship]);
		
		/* when a side changes, let the relevant resources know */
		this.p('value')
			::startWith(null)
			::waitUntilConstructed()
			::pairwise()
			.subscribe(([prev, curr]) => {
				if (desc.cardinality.max === 1) {
					if (prev) { prev.fields[desc.keyInResource].set(null)          }
					if (curr) { curr.fields[desc.keyInResource].set(this[$$owner]) }
				} else {
					if (prev) { prev.fields[desc.keyInResource].get().delete(this[$$owner]) }
					if (curr) { curr.fields[desc.keyInResource].get().add   (this[$$owner]) }
				}
			});
		
		
	}
	
	validate(val, stages = []) {
		
		const notGiven = val::isNull() || val::isUndefined();
		
		if (stages.includes('commit')) {
			/* if there's a minimum cardinality, a value must have been given */
			assert(!notGiven, humanMsg`
			    No resource specified for side ${this[$$key]} of
				this '${this[$$owner].constructor.name}'.
			`);
		}
		
		/* the value must be of the proper domain */
		if (!(notGiven || this[$$desc].resourceClass.hasInstance(val))) {
			throw new Error(humanMsg`
				Invalid value '${val}' given for ${this[$$owner].constructor.name}#${this[$$key]}.
			`);
		}
		
		// TODO: these should not be assertions, but proper constraint-checks,
		//     : recording errors, possibly allowing them temporarily, etc.
	}
	
});