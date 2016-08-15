(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["OpenPhysiologyModel"] = factory();
	else
		root["OpenPhysiologyModel"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(464);
	module.exports = __webpack_require__(212);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(64)
	  , hide      = __webpack_require__(30)
	  , redefine  = __webpack_require__(34)
	  , ctx       = __webpack_require__(68)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.sw = exports.humanMsg = exports.simpleSpaced = exports.arrayContainsValue = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); ////////////////////////////////////////////////////////////////////////////////
	// Schema Data Types                                                          //
	////////////////////////////////////////////////////////////////////////////////
	
	exports.mapOptionalArray = mapOptionalArray;
	exports.wrapInArray = wrapInArray;
	exports.parseCardinality = parseCardinality;
	exports.stringifyCardinality = stringifyCardinality;
	exports.normalizeToRange = normalizeToRange;
	exports.setDefault = setDefault;
	exports.definePropertyByValue = definePropertyByValue;
	exports.definePropertiesByValue = definePropertiesByValue;
	exports.callOrReturn = callOrReturn;
	exports.constraint = constraint;
	
	var _isUndefined = __webpack_require__(37);
	
	var _isUndefined2 = _interopRequireDefault(_isUndefined);
	
	var _trim = __webpack_require__(268);
	
	var _trim2 = _interopRequireDefault(_trim);
	
	var _isString = __webpack_require__(148);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	var _isArray = __webpack_require__(146);
	
	var _isArray2 = _interopRequireDefault(_isArray);
	
	var _isNumber = __webpack_require__(259);
	
	var _isNumber2 = _interopRequireDefault(_isNumber);
	
	var _isObject = __webpack_require__(72);
	
	var _isObject2 = _interopRequireDefault(_isObject);
	
	var _isFunction = __webpack_require__(105);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _isSet = __webpack_require__(260);
	
	var _isSet2 = _interopRequireDefault(_isSet);
	
	var _isWeakSet = __webpack_require__(261);
	
	var _isWeakSet2 = _interopRequireDefault(_isWeakSet);
	
	var _entries = __webpack_require__(17);
	
	var _entries2 = _interopRequireDefault(_entries);
	
	var _boundNativeMethods = __webpack_require__(10);
	
	var _zip2 = __webpack_require__(412);
	
	var _zip3 = _interopRequireDefault(_zip2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	////////////////////////////////////////////////////////////////////////////////
	
	var arrayContainsValue = exports.arrayContainsValue = function arrayContainsValue(array, value) {
		return array.includes(value);
	};
	
	var simpleSpaced = exports.simpleSpaced = function simpleSpaced(str) {
		return str.replace(/\s+/mg, ' ');
	};
	
	var humanMsg = exports.humanMsg = function humanMsg(strings) {
		var _context;
	
		for (var _len = arguments.length, vals = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			vals[_key - 1] = arguments[_key];
		}
	
		var result = strings[0];
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;
	
		try {
			for (var _iterator = (0, _zip3.default)(vals, strings.slice(1))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var _step$value = _slicedToArray(_step.value, 2);
	
				var val = _step$value[0];
				var str = _step$value[1];
	
				result += val + simpleSpaced(str);
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	
		return (_context = result, _trim2.default).call(_context);
	};
	
	function mapOptionalArray(val, fn) {
		var _context2;
	
		if ((_context2 = val, _isUndefined2.default).call(_context2)) {
			return [];
		}
		var isArr = (_context2 = val, _isArray2.default).call(_context2);
		val = (isArr ? val : [val]).map(fn);
		return isArr ? val : val[0];
	}
	
	function wrapInArray(val) {
		if (_isUndefined2.default.call(val)) {
			return [];
		}
		if (_isArray2.default.call(val) || _isSet2.default.call(val) || _isWeakSet2.default.call(val)) {
			return [].concat(_toConsumableArray(val));
		}
		return [val];
	}
	
	function parseCardinality(val) {
		var match = val.match(/^(\d+)\.\.(\d+|\*)$/);
	
		var _match = _slicedToArray(match, 3);
	
		var min = _match[1];
		var max = _match[2];
	
		if (max === '*') {
			max = Infinity;
		} else {
			max = parseInt(max, 10);
		}
		min = parseInt(min, 10);
		return { min: min, max: max };
	}
	
	function stringifyCardinality(cardinality) {
		var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
		var abbreviate = _ref.abbreviate;
	
		return cardinality.min === cardinality.max && abbreviate ? '   ' + cardinality.min : cardinality.min + '..' + (cardinality.max === Infinity ? '*' : cardinality.max);
	}
	
	function normalizeToRange(val) {
		var _context3;
	
		if ((_context3 = val, _isNumber2.default).call(_context3)) {
			val = { min: val, max: val };
		} else if (!(_context3 = val, _isObject2.default).call(_context3)) {
			val = {};
		}
		if (!(_context3 = val.min, _isNumber2.default).call(_context3)) {
			val.min = -Infinity;
		}
		if (!(_context3 = val.max, _isNumber2.default).call(_context3)) {
			val.max = Infinity;
		}
		return val;
	}
	
	function setDefault(obj, key, val) {
		var _context4;
	
		if ((_context4 = obj[key], _isUndefined2.default).call(_context4)) {
			obj[key] = val;
		}
	}
	
	var sw = exports.sw = function sw(val) {
		var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
		var _ref2$autoInvoke = _ref2.autoInvoke;
		var autoInvoke = _ref2$autoInvoke === undefined ? true : _ref2$autoInvoke;
		return function (map) {
			var _context5;
	
			var result = val in map ? map[val] : map.default;
			if (autoInvoke && (_context5 = result, _isFunction2.default).call(_context5)) {
				result = result();
			}
			return result;
		};
	};
	
	function definePropertyByValue(key, value) {
		var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
		_boundNativeMethods.defineProperty.call(this, key, _extends({}, options, { value: value }));
	}
	
	function definePropertiesByValue(obj) {
		var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;
	
		try {
			for (var _iterator2 = _entries2.default.call(obj)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var _step2$value = _slicedToArray(_step2.value, 2);
	
				var key = _step2$value[0];
				var value = _step2$value[1];
	
				definePropertyByValue.call(this, key, value, options);
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}
	}
	
	function callOrReturn(context) {
		return _isFunction2.default.call(this) ? this.call(context) : this;
	}
	
	function constraint(constraint, message) {
		if (!constraint) {
			throw new Error('Constraint Failure: ' + (message || '(no message)'));
		}
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(202)('wks')
	  , uid        = __webpack_require__(104)
	  , Symbol     = __webpack_require__(4).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(158),
	    baseKeys = __webpack_require__(301),
	    indexKeys = __webpack_require__(166),
	    isArrayLike = __webpack_require__(21),
	    isIndex = __webpack_require__(54),
	    isPrototype = __webpack_require__(81);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;
	
	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keys;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	var _object = __webpack_require__(223);
	
	_defaults(exports, _interopRequireWildcard(_object));
	
	var _symbolJs = __webpack_require__(224);
	
	_defaults(exports, _interopRequireWildcard(_symbolJs));
	
	var _numberJs = __webpack_require__(222);
	
	_defaults(exports, _interopRequireWildcard(_numberJs));
	
	var _mathJs = __webpack_require__(221);
	
	_defaults(exports, _interopRequireWildcard(_mathJs));
	
	var _dateJs = __webpack_require__(219);
	
	_defaults(exports, _interopRequireWildcard(_dateJs));
	
	var _arrayJs = __webpack_require__(218);
	
	_defaults(exports, _interopRequireWildcard(_arrayJs));
	
	var _arrayBufferJs = __webpack_require__(217);
	
	_defaults(exports, _interopRequireWildcard(_arrayBufferJs));
	
	var _jsonJs = __webpack_require__(220);
	
	_defaults(exports, _interopRequireWildcard(_jsonJs));

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(165);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isFunction_1 = __webpack_require__(189);
	var Subscription_1 = __webpack_require__(127);
	var Observer_1 = __webpack_require__(414);
	var rxSubscriber_1 = __webpack_require__(130);
	/**
	 * Implements the {@link Observer} interface and extends the
	 * {@link Subscription} class. While the {@link Observer} is the public API for
	 * consuming the values of an {@link Observable}, all Observers get converted to
	 * a Subscriber, in order to provide Subscription-like capabilities such as
	 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
	 * implementing operators, but it is rarely used as a public API.
	 *
	 * @class Subscriber<T>
	 */
	var Subscriber = (function (_super) {
	    __extends(Subscriber, _super);
	    /**
	     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
	     * defined Observer or a `next` callback function.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     */
	    function Subscriber(destinationOrNext, error, complete) {
	        _super.call(this);
	        this.syncErrorValue = null;
	        this.syncErrorThrown = false;
	        this.syncErrorThrowable = false;
	        this.isStopped = false;
	        switch (arguments.length) {
	            case 0:
	                this.destination = Observer_1.empty;
	                break;
	            case 1:
	                if (!destinationOrNext) {
	                    this.destination = Observer_1.empty;
	                    break;
	                }
	                if (typeof destinationOrNext === 'object') {
	                    if (destinationOrNext instanceof Subscriber) {
	                        this.destination = destinationOrNext;
	                        this.destination.add(this);
	                    }
	                    else {
	                        this.syncErrorThrowable = true;
	                        this.destination = new SafeSubscriber(this, destinationOrNext);
	                    }
	                    break;
	                }
	            default:
	                this.syncErrorThrowable = true;
	                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
	                break;
	        }
	    }
	    Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () { return this; };
	    /**
	     * A static factory for a Subscriber, given a (potentially partial) definition
	     * of an Observer.
	     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
	     * Observer represented by the given arguments.
	     */
	    Subscriber.create = function (next, error, complete) {
	        var subscriber = new Subscriber(next, error, complete);
	        subscriber.syncErrorThrowable = false;
	        return subscriber;
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `next` from
	     * the Observable, with a value. The Observable may call this method 0 or more
	     * times.
	     * @param {T} [value] The `next` value.
	     * @return {void}
	     */
	    Subscriber.prototype.next = function (value) {
	        if (!this.isStopped) {
	            this._next(value);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `error` from
	     * the Observable, with an attached {@link Error}. Notifies the Observer that
	     * the Observable has experienced an error condition.
	     * @param {any} [err] The `error` exception.
	     * @return {void}
	     */
	    Subscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._error(err);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive a valueless notification of type
	     * `complete` from the Observable. Notifies the Observer that the Observable
	     * has finished sending push-based notifications.
	     * @return {void}
	     */
	    Subscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._complete();
	        }
	    };
	    Subscriber.prototype.unsubscribe = function () {
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isStopped = true;
	        _super.prototype.unsubscribe.call(this);
	    };
	    Subscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    Subscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this.unsubscribe();
	    };
	    Subscriber.prototype._complete = function () {
	        this.destination.complete();
	        this.unsubscribe();
	    };
	    return Subscriber;
	}(Subscription_1.Subscription));
	exports.Subscriber = Subscriber;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SafeSubscriber = (function (_super) {
	    __extends(SafeSubscriber, _super);
	    function SafeSubscriber(_parent, observerOrNext, error, complete) {
	        _super.call(this);
	        this._parent = _parent;
	        var next;
	        var context = this;
	        if (isFunction_1.isFunction(observerOrNext)) {
	            next = observerOrNext;
	        }
	        else if (observerOrNext) {
	            context = observerOrNext;
	            next = observerOrNext.next;
	            error = observerOrNext.error;
	            complete = observerOrNext.complete;
	            if (isFunction_1.isFunction(context.unsubscribe)) {
	                this.add(context.unsubscribe.bind(context));
	            }
	            context.unsubscribe = this.unsubscribe.bind(this);
	        }
	        this._context = context;
	        this._next = next;
	        this._error = error;
	        this._complete = complete;
	    }
	    SafeSubscriber.prototype.next = function (value) {
	        if (!this.isStopped && this._next) {
	            var _parent = this._parent;
	            if (!_parent.syncErrorThrowable) {
	                this.__tryOrUnsub(this._next, value);
	            }
	            else if (this.__tryOrSetError(_parent, this._next, value)) {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._error) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._error, err);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._error, err);
	                    this.unsubscribe();
	                }
	            }
	            else if (!_parent.syncErrorThrowable) {
	                this.unsubscribe();
	                throw err;
	            }
	            else {
	                _parent.syncErrorValue = err;
	                _parent.syncErrorThrown = true;
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._complete) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._complete);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._complete);
	                    this.unsubscribe();
	                }
	            }
	            else {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            this.unsubscribe();
	            throw err;
	        }
	    };
	    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            parent.syncErrorValue = err;
	            parent.syncErrorThrown = true;
	            return true;
	        }
	        return false;
	    };
	    SafeSubscriber.prototype._unsubscribe = function () {
	        var _parent = this._parent;
	        this._context = null;
	        this._parent = null;
	        _parent.unsubscribe();
	    };
	    return SafeSubscriber;
	}(Subscriber));
	//# sourceMappingURL=Subscriber.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(5)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(2)
	  , IE8_DOM_DEFINE = __webpack_require__(445)
	  , toPrimitive    = __webpack_require__(66)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(14) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _schemas = __webpack_require__(32);
	
	var _Module = __webpack_require__(46);
	
	var _Module2 = _interopRequireDefault(_Module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Module2.default.create('resources', [], function (M) {
	
		var Resource = M.RESOURCE({ /////////////////////////////////////////////////////////////////
	
			name: 'Resource',
	
			abstract: true,
	
			properties: {
				'id': _extends({}, _schemas.idSchema, { readonly: true }),
				'href': _extends({}, _schemas.uriSchema, { readonly: true }),
				'class': _extends({}, _schemas.identifierSchema, { readonly: true }),
				'name': { type: 'string' }
			}
	
		}); //////////////////////////////////////////////////////////////////////////
	
	
		var IsRelatedTo = M.RELATIONSHIP({
	
			name: 'IsRelatedTo',
	
			abstract: true,
	
			singular: "is related to",
	
			1: [Resource, '0..*'],
			2: [Resource, '0..*'],
	
			properties: {
				'id': _extends({}, _schemas.idSchema, { readonly: true }),
				'href': _extends({}, _schemas.uriSchema, { readonly: true }),
				'class': _extends({}, _schemas.identifierSchema, { readonly: true })
			}
	
		});
	
		var ExternalResource = M.RESOURCE({ ///////////////////////////////////////
	
			name: 'ExternalResource',
	
			extends: Resource,
	
			singular: "external resource",
	
			properties: {
				'uri': _extends({}, _schemas.uriSchema, { required: true }),
				'type': { type: 'string' } // "fma" or "cocomac", etc.
			}
	
		}); /////////////////////////////////////////////////////////////////////////
	
	
		var IsExternallyRelatedTo = M.RELATIONSHIP({
	
			name: 'IsExternallyRelatedTo',
	
			extends: IsRelatedTo,
	
			singular: "is externally related to",
	
			1: [ExternalResource, '0..*'],
			2: [ExternalResource, '0..*'],
	
			properties: {
				'type': { type: 'string', required: true }
			}
	
		});
	
		var CorrespondsTo = M.RELATIONSHIP({
	
			name: 'CorrespondsTo',
	
			extends: IsRelatedTo,
	
			singular: "corresponds to",
	
			1: [Resource, '0..*', { anchors: true, key: 'externals' }],
			2: [ExternalResource, '0..*', { key: 'locals' }]
	
		});
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(380);
	
	module.exports = function entries() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports["default"] = function (object, names) {
	  var rename = arguments[2] === undefined ? {} : arguments[2];
	  return names.reduce(function (m, name) {
	    m[rename[name] || name] = function () {
	      for (var _len = arguments.length, s = Array(_len), _key = 0; _key < _len; _key++) {
	        s[_key] = arguments[_key];
	      }
	
	      return this.constructor === Array && object === Math ? object[name].apply(object, this.concat(s)) : object[name].apply(object, [this].concat(s));
	    };
	
	    return m;
	  }, {});
	};
	
	module.exports = exports["default"];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(93)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(334),
	    isFunction = __webpack_require__(84),
	    isLength = __webpack_require__(85);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(89);
	var toSubscriber_1 = __webpack_require__(434);
	var symbol_observable_1 = __webpack_require__(191);
	/**
	 * A representation of any set of values over any amount of time. This the most basic building block
	 * of RxJS.
	 *
	 * @class Observable<T>
	 */
	var Observable = (function () {
	    /**
	     * @constructor
	     * @param {Function} subscribe the function that is  called when the Observable is
	     * initially subscribed to. This function is given a Subscriber, to which new values
	     * can be `next`ed, or an `error` method can be called to raise an error, or
	     * `complete` can be called to notify of a successful completion.
	     */
	    function Observable(subscribe) {
	        this._isScalar = false;
	        if (subscribe) {
	            this._subscribe = subscribe;
	        }
	    }
	    /**
	     * Creates a new Observable, with this Observable as the source, and the passed
	     * operator defined as the new observable's operator.
	     * @method lift
	     * @param {Operator} operator the operator defining the operation to take on the observable
	     * @return {Observable} a new observable with the Operator applied
	     */
	    Observable.prototype.lift = function (operator) {
	        var observable = new Observable();
	        observable.source = this;
	        observable.operator = operator;
	        return observable;
	    };
	    /**
	     * Registers handlers for handling emitted values, error and completions from the observable, and
	     *  executes the observable's subscriber function, which will take action to set up the underlying data stream
	     * @method subscribe
	     * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
	     *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
	     * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
	     *  the error will be thrown as unhandled
	     * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
	     * @return {ISubscription} a subscription reference to the registered handlers
	     */
	    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
	        var operator = this.operator;
	        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
	        if (operator) {
	            operator.call(sink, this);
	        }
	        else {
	            sink.add(this._subscribe(sink));
	        }
	        if (sink.syncErrorThrowable) {
	            sink.syncErrorThrowable = false;
	            if (sink.syncErrorThrown) {
	                throw sink.syncErrorValue;
	            }
	        }
	        return sink;
	    };
	    /**
	     * @method forEach
	     * @param {Function} next a handler for each value emitted by the observable
	     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
	     * @return {Promise} a promise that either resolves on observable completion or
	     *  rejects with the handled error
	     */
	    Observable.prototype.forEach = function (next, PromiseCtor) {
	        var _this = this;
	        if (!PromiseCtor) {
	            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	                PromiseCtor = root_1.root.Rx.config.Promise;
	            }
	            else if (root_1.root.Promise) {
	                PromiseCtor = root_1.root.Promise;
	            }
	        }
	        if (!PromiseCtor) {
	            throw new Error('no Promise impl found');
	        }
	        return new PromiseCtor(function (resolve, reject) {
	            var subscription = _this.subscribe(function (value) {
	                if (subscription) {
	                    // if there is a subscription, then we can surmise
	                    // the next handling is asynchronous. Any errors thrown
	                    // need to be rejected explicitly and unsubscribe must be
	                    // called manually
	                    try {
	                        next(value);
	                    }
	                    catch (err) {
	                        reject(err);
	                        subscription.unsubscribe();
	                    }
	                }
	                else {
	                    // if there is NO subscription, then we're getting a nexted
	                    // value synchronously during subscription. We can just call it.
	                    // If it errors, Observable's `subscribe` imple will ensure the
	                    // unsubscription logic is called, then synchronously rethrow the error.
	                    // After that, Promise will trap the error and send it
	                    // down the rejection path.
	                    next(value);
	                }
	            }, reject, resolve);
	        });
	    };
	    Observable.prototype._subscribe = function (subscriber) {
	        return this.source.subscribe(subscriber);
	    };
	    /**
	     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
	     * @method Symbol.observable
	     * @return {Observable} this instance of the observable
	     */
	    Observable.prototype[symbol_observable_1.default] = function () {
	        return this;
	    };
	    // HACK: Since TypeScript inherits static properties too, we have to
	    // fight against TypeScript here so Subject can have a different static create signature
	    /**
	     * Creates a new cold Observable by calling the Observable constructor
	     * @static true
	     * @owner Observable
	     * @method create
	     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
	     * @return {Observable} a new cold observable
	     */
	    Observable.create = function (subscribe) {
	        return new Observable(subscribe);
	    };
	    return Observable;
	}());
	exports.Observable = Observable;
	//# sourceMappingURL=Observable.js.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(22);
	var do_1 = __webpack_require__(423);
	Observable_1.Observable.prototype.do = do_1._do;
	//# sourceMappingURL=do.js.map

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(49);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.RelField = exports.Field = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _dec2, _dec3, _dec4, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _dec5, _desc2, _value2, _class3, _descriptor5;
	
	var _templateObject = _taggedTemplateLiteral(['\n\t\t\t\tTried to set the readonly field\n\t\t\t\t\'', '#', '\'.\n\t\t\t'], ['\n\t\t\t\tTried to set the readonly field\n\t\t\t\t\'', '#', '\'.\n\t\t\t']);
	
	var _Subject = __webpack_require__(59);
	
	var _map = __webpack_require__(42);
	
	var _concat = __webpack_require__(183);
	
	__webpack_require__(23);
	
	var _pick = __webpack_require__(266);
	
	var _pick2 = _interopRequireDefault(_pick);
	
	var _isFunction = __webpack_require__(105);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _isUndefined = __webpack_require__(37);
	
	var _isUndefined2 = _interopRequireDefault(_isUndefined);
	
	var _values = __webpack_require__(108);
	
	var _values2 = _interopRequireDefault(_values);
	
	var _boundNativeMethods = __webpack_require__(10);
	
	var _ValueTracker2 = __webpack_require__(140);
	
	var _ValueTracker3 = _interopRequireDefault(_ValueTracker2);
	
	var _misc = __webpack_require__(3);
	
	var _symbols = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return _instanceof(left, right); } }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	function _initDefineProp(target, property, descriptor, context) {
		if (!descriptor) return;
		Object.defineProperty(target, property, {
			enumerable: descriptor.enumerable,
			configurable: descriptor.configurable,
			writable: descriptor.writable,
			value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
		});
	}
	
	function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
		var desc = {};
		Object['ke' + 'ys'](descriptor).forEach(function (key) {
			desc[key] = descriptor[key];
		});
		desc.enumerable = !!desc.enumerable;
		desc.configurable = !!desc.configurable;
	
		if ('value' in desc || desc.initializer) {
			desc.writable = true;
		}
	
		desc = decorators.slice().reverse().reduce(function (desc, decorator) {
			return decorator(target, property, desc) || desc;
		}, desc);
	
		if (context && desc.initializer !== void 0) {
			desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
			desc.initializer = undefined;
		}
	
		if (desc.initializer === void 0) {
			Object['define' + 'Property'](target, property, desc);
			desc = null;
		}
	
		return desc;
	}
	
	function _initializerWarningHelper(descriptor, context) {
		throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}
	
	var Field = exports.Field = (_dec = (0, _ValueTracker2.event)(), _dec2 = (0, _ValueTracker2.event)(), _dec3 = (0, _ValueTracker2.property)({ initial: true, readonly: true }), _dec4 = (0, _ValueTracker2.property)(), (_class = function (_ValueTracker) {
		_inherits(Field, _ValueTracker);
	
		_createClass(Field, [{
			key: Symbol.toStringTag,
	
	
			//////////////
			// instance //
			//////////////
	
			//noinspection JSDuplicatedDeclaration // (to suppress Webstorm bug)
			get: function get() {
				return 'Field: ' + this[_symbols.$$owner].constructor.name + '#' + this[_symbols.$$key];
			}
		}], [{
			key: _symbols.$$registerFieldClass,
	
	
			////////////
			// static //
			////////////
	
			value: function value(FieldClass) {
				if (!this[_symbols.$$fieldClasses]) {
					this[_symbols.$$fieldClasses] = new Set();
				}
				this[_symbols.$$fieldClasses].add(FieldClass);
			}
		}, {
			key: 'augmentClass',
			value: function augmentClass(cls, onlyForKey) {
				if (!this[_symbols.$$fieldClasses]) {
					this[_symbols.$$fieldClasses] = new Set();
				}
	
				/* allow each kind of field to perform its initializations */
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;
	
				try {
					for (var _iterator = this[_symbols.$$fieldClasses][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var FieldClass = _step.value;
						var _iteratorNormalCompletion2 = true;
						var _didIteratorError2 = false;
						var _iteratorError2 = undefined;
	
						try {
							for (var _iterator2 = FieldClass[_symbols.$$entriesIn](cls)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
								var _step2$value = _step2.value;
								var key = _step2$value.key;
								var desc = _step2$value.desc;
	
								if (!onlyForKey || onlyForKey === key) {
									FieldClass.initClass({ cls: cls, key: key, desc: desc });
								}
							}
						} catch (err) {
							_didIteratorError2 = true;
							_iteratorError2 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion2 && _iterator2.return) {
									_iterator2.return();
								}
							} finally {
								if (_didIteratorError2) {
									throw _iteratorError2;
								}
							}
						}
					}
	
					/* only initialize a class once */
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
	
				if (cls[_symbols.$$initialized]) {
					return;
				}
				cls[_symbols.$$initialized] = true;
			}
		}, {
			key: 'initializeEntity',
			value: function initializeEntity(owner, initialValues) {
				if (owner.fields) {
					return;
				}
				_boundNativeMethods.defineProperty.call(owner, 'fields', { value: {} });
	
				/* allow specific field-init code to wait until all fields are initialized */
				var constructingOwner = new _Subject.Subject();
				var waitUntilConstructed = function waitUntilConstructed() {
					return (0, _concat.concat)(constructingOwner, this);
				};
	
				/* initialize all fields */
				var keyDescs = {};
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;
	
				try {
					for (var _iterator3 = this[_symbols.$$fieldClasses][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var FieldClass = _step3.value;
						var _iteratorNormalCompletion6 = true;
						var _didIteratorError6 = false;
						var _iteratorError6 = undefined;
	
						try {
							for (var _iterator6 = FieldClass[_symbols.$$entriesIn](owner.constructor)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
								var entry = _step6.value;
								var key = entry.key;
	
								keyDescs[key] = _extends({}, entry, {
									waitUntilConstructed: waitUntilConstructed,
									constructingOwner: constructingOwner,
									owner: owner,
									key: key,
									initialValue: initialValues[key],
									FieldClass: FieldClass
								});
							}
						} catch (err) {
							_didIteratorError6 = true;
							_iteratorError6 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion6 && _iterator6.return) {
									_iterator6.return();
								}
							} finally {
								if (_didIteratorError6) {
									throw _iteratorError6;
								}
							}
						}
					}
	
					/* add related descriptions to each description */
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}
	
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;
	
				try {
					for (var _iterator4 = _values2.default.call(keyDescs)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var _entry = _step4.value;
	
						_entry.related = _pick2.default.call(keyDescs, _entry.relatedKeys);
					}
	
					/* create a field for each description */
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4.return) {
							_iterator4.return();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}
	
				var _iteratorNormalCompletion5 = true;
				var _didIteratorError5 = false;
				var _iteratorError5 = undefined;
	
				try {
					for (var _iterator5 = _values2.default.call(keyDescs)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
						var _entry2 = _step5.value;
						var _FieldClass = _entry2.FieldClass;
	
						delete _entry2.FieldClass;
						delete _entry2.relatedKeys;
						new _FieldClass(_entry2);
					}
	
					/* notify completion of field initialization */
				} catch (err) {
					_didIteratorError5 = true;
					_iteratorError5 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion5 && _iterator5.return) {
							_iterator5.return();
						}
					} finally {
						if (_didIteratorError5) {
							throw _iteratorError5;
						}
					}
				}
	
				constructingOwner.complete();
			}
		}, {
			key: 'isEqual',
			value: function isEqual(a, b) {
				return a === b;
			}
	
			/////////////////////////
			// events & properties //
			/////////////////////////
	
		}]);
	
		function Field(_ref) {
			var _context;
	
			var owner = _ref.owner;
			var key = _ref.key;
			var desc = _ref.desc;
			var _ref$setValueThroughS = _ref.setValueThroughSignal;
			var setValueThroughSignal = _ref$setValueThroughS === undefined ? true : _ref$setValueThroughS;
	
			_classCallCheck(this, Field);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Field).call(this));
	
			_initDefineProp(_this, 'commitEvent', _descriptor, _this);
	
			_initDefineProp(_this, 'rollbackEvent', _descriptor2, _this);
	
			_initDefineProp(_this, 'isPristine', _descriptor3, _this);
	
			_initDefineProp(_this, 'value', _descriptor4, _this);
	
			owner.fields[key] = _this;
			_this[_symbols.$$owner] = owner;
			_this[_symbols.$$key] = key;
			_this[_symbols.$$desc] = desc;
			if (setValueThroughSignal) {
				// allow signal-push to change value
				_this.p('value').subscribe(_this.set.bind(_this));
			}
			(_context = _this.p('value'), _map.map).call(_context, function (v) {
				return _this.constructor.isEqual(v, _this[_symbols.$$pristine]);
			}).subscribe(_this.pSubject('isPristine'));
			return _this;
		}
	
		//noinspection JSDuplicatedDeclaration // (to suppress warning due to Webstorm bug)
	
	
		_createClass(Field, [{
			key: 'get',
			value: function get() {
				return this[_symbols.$$value];
			}
		}, {
			key: 'set',
			value: function set(val) {
				var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
				var _ref2$ignoreReadonly = _ref2.ignoreReadonly;
				var ignoreReadonly = _ref2$ignoreReadonly === undefined ? false : _ref2$ignoreReadonly;
				var _ref2$ignoreValidatio = _ref2.ignoreValidation;
				var ignoreValidation = _ref2$ignoreValidatio === undefined ? false : _ref2$ignoreValidatio;
				var _ref2$updatePristine = _ref2.updatePristine;
				var updatePristine = _ref2$updatePristine === undefined ? false : _ref2$updatePristine;
	
				if (!this.constructor.isEqual(this[_symbols.$$value], val)) {
					(0, _misc.constraint)(ignoreReadonly || !this[_symbols.$$desc].readonly, (0, _misc.humanMsg)(_templateObject, this[_symbols.$$owner].constructor.name, this[_symbols.$$key]));
					if (!ignoreValidation) {
						this.validate(val, ['set']);
					}
					if (updatePristine) {
						this[_symbols.$$pristine] = val;
					}
					this[_symbols.$$value] = val;
					this.pSubject('value').next(val);
				}
			}
		}, {
			key: _symbols.$$initSet,
			value: function value() {
				for (var _len = arguments.length, alternatives = Array(_len), _key = 0; _key < _len; _key++) {
					alternatives[_key] = arguments[_key];
				}
	
				var _iteratorNormalCompletion7 = true;
				var _didIteratorError7 = false;
				var _iteratorError7 = undefined;
	
				try {
	
					for (var _iterator7 = alternatives[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
						var _step7$value = _slicedToArray(_step7.value, 2);
	
						var guard = _step7$value[0];
						var value = _step7$value[1];
	
						if (_isFunction2.default.call(guard) ? guard() : guard) {
							if (_isUndefined2.default.call(value)) {
								return;
							}
							var val = _isFunction2.default.call(value) ? value() : value;
							if (this.constructor.isEqual(this[_symbols.$$value], val)) {
								return;
							}
							this.validate(val, ['initialize', 'set']);
							this.set(val, {
								ignoreReadonly: true,
								ignoreValidation: true,
								updatePristine: true
							});
							return;
						}
					}
				} catch (err) {
					_didIteratorError7 = true;
					_iteratorError7 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion7 && _iterator7.return) {
							_iterator7.return();
						}
					} finally {
						if (_didIteratorError7) {
							throw _iteratorError7;
						}
					}
				}
			}
		}, {
			key: 'isInvalid',
			value: function isInvalid(val) {
				try {
					var valueToValidate = _isUndefined2.default.call(val) ? this[_symbols.$$value] : val;
					this.validate(valueToValidate, ['set', 'commit']);
					return false;
				} catch (err) {
					return err;
				}
			}
		}, {
			key: 'validate',
			value: function validate(val) {
				var stages = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
			}
		}, {
			key: 'commit',
			value: function () {
				var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
					return regeneratorRuntime.wrap(function _callee$(_context2) {
						while (1) {
							switch (_context2.prev = _context2.next) {
								case 0:
									this.validate(this[_symbols.$$value], ['commit']);
									this[_symbols.$$pristine] = this[_symbols.$$value];
									this.pSubject('isPristine').next(true);
	
								case 3:
								case 'end':
									return _context2.stop();
							}
						}
					}, _callee, this);
				}));
	
				function commit() {
					return _ref3.apply(this, arguments);
				}
	
				return commit;
			}()
		}, {
			key: 'rollback',
			value: function rollback() {
				this.set(this[_symbols.$$pristine]);
			}
		}]);
	
		return Field;
	}(_ValueTracker3.default), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'commitEvent', [_dec], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'rollbackEvent', [_dec2], {
		enumerable: true,
		initializer: null
	}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'isPristine', [_dec3], {
		enumerable: true,
		initializer: null
	}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'value', [_dec4], {
		enumerable: true,
		initializer: null
	})), _class));
	var RelField = exports.RelField = (_dec5 = (0, _ValueTracker2.property)({ readonly: true }), (_class3 = function (_Field) {
		_inherits(RelField, _Field);
	
		//////////////
		// instance //
		//////////////
	
		function RelField(options) {
			_classCallCheck(this, RelField);
	
			var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(RelField).call(this, options));
	
			_initDefineProp(_this2, 'possibleValues', _descriptor5, _this2);
	
			var desc = options.desc;
	
			/* manage the 'possibleValues' property */
	
			desc.codomain.resourceClass.p('all').subscribe(_this2.pSubject('possibleValues'));
			return _this2;
		}
	
		return RelField;
	}(Field), (_descriptor5 = _applyDecoratedDescriptor(_class3.prototype, 'possibleValues', [_dec5], {
		enumerable: true,
		initializer: null
	})), _class3));

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var $$registerFieldClass = exports.$$registerFieldClass = Symbol('$$registerFieldClass');
	var $$fieldClasses = exports.$$fieldClasses = Symbol('$$fieldClasses');
	var $$owner = exports.$$owner = Symbol('$$owner');
	var $$key = exports.$$key = Symbol('$$key');
	var $$desc = exports.$$desc = Symbol('$$key');
	var $$value = exports.$$value = Symbol('$$value');
	var $$pristine = exports.$$pristine = Symbol('$$pristine');
	var $$initSet = exports.$$initSet = Symbol('$$initSet');
	var $$entriesIn = exports.$$entriesIn = Symbol('$$entriesIn');
	var $$initialized = exports.$$initialized = Symbol('$$initialized');

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _templateObject = _taggedTemplateLiteral(['\n\t\t\t\t\tA type must be created with its definition\n\t\t\t\t\timmediately.\n\t\t\t\t'], ['\n\t\t\t\t\tA type must be created with its definition\n\t\t\t\t\timmediately.\n\t\t\t\t']);
	
	var _schemas = __webpack_require__(32);
	
	var _Module = __webpack_require__(46);
	
	var _Module2 = _interopRequireDefault(_Module);
	
	var _resources = __webpack_require__(16);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _misc = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	exports.default = _Module2.default.create('typed', [_resources2.default], function (M, _ref) {
		var Resource = _ref.Resource;
		var IsRelatedTo = _ref.IsRelatedTo;
	
	
		var Type = M.RESOURCE({ ///////////////////////////////////////////////////
	
			name: 'Type',
	
			extends: Resource,
	
			singular: "type",
	
			behavior: {
				new: function _new(vals, options) {
					var sc = vals.definition;
					var rel = vals['<--DefinesType'];
	
					(0, _misc.constraint)(Template.hasInstance(sc) || DefinesType.hasInstance(rel), (0, _misc.humanMsg)(_templateObject));
					if (rel) {
						sc = rel[1];
					}
					return sc.constructor.Type.new(vals, options);
				}
			}
	
		}); /////////////////////////////////////////////////////////////////////////
	
	
		var IsSubtypeOf = M.RELATIONSHIP({
	
			name: 'IsSubtypeOf',
	
			extends: IsRelatedTo,
	
			singular: "is subtype of",
	
			1: [Type, '0..*', { key: 'subtypes' }],
			2: [Type, '0..*', { anchors: true, key: 'supertypes' }],
	
			noCycles: true
	
		});
	
		var Template = M.RESOURCE({ ///////////////////////////////////////////////
	
			name: 'Template',
	
			abstract: true,
	
			extends: Resource,
	
			singular: "template",
	
			properties: {
				'cardinalityBase': {
					oneOf: [_extends({}, _schemas.distributionSchema), { type: 'integer', minimum: 1 }],
					default: 1
				},
				'species': {
					type: 'string',
					isRefinement: function isRefinement(a, b) {
						return !a || a === b;
					}
				}
			}
	
		}); /////////////////////////////////////////////////////////////////////////
	
		_misc.definePropertyByValue.call(Template, 'Type', Type);
		_misc.definePropertyByValue.call(Type, 'Template', Template);
	
		var HasCardinalityMultipliedByThatOf = M.RELATIONSHIP({
	
			name: 'HasCardinalityMultipliedByThatOf',
	
			extends: IsRelatedTo,
	
			singular: "has cardinality multiplied by that of",
	
			1: [Template, '0..*', { anchors: true, key: 'cardinalityMultipliers' }],
			2: [Template, '0..*'],
	
			noCycles: true
	
		});
	
		var HasType = M.RELATIONSHIP({
	
			name: 'HasType',
	
			extends: IsRelatedTo,
	
			singular: "has type",
	
			1: [Template, '0..*', { anchors: true, key: 'types' }],
			2: [Type, '0..*']
	
		});
	
		var DefinesType = M.RELATIONSHIP({
	
			name: 'DefinesType',
	
			extends: HasType,
	
			singular: "defines type",
	
			1: [Template, '0..1', { anchors: true }],
			2: [Type, '1..1', { anchors: true, key: 'definition' }]
	
		});
	
		var PullsIntoTypeDefinition = M.RELATIONSHIP({
	
			name: 'PullsIntoTypeDefinition',
	
			abstract: true,
	
			extends: IsRelatedTo,
	
			singular: "pulls into type definition",
			plural: "pull into type definition",
	
			1: [Template, '0..*'],
			2: [Template, '0..*']
	
		});
	
		var Has = M.RELATIONSHIP({
	
			name: 'Has',
	
			abstract: true,
	
			extends: PullsIntoTypeDefinition,
	
			singular: "has",
			plural: "have",
	
			1: [Template, '0..*', { anchors: true, key: 'children' }],
			2: [Template, '0..1', { key: 'parent' }],
	
			noCycles: true
	
		});
	});

/***/ },
/* 28 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(13);
	/**
	 * Filter items emitted by the source Observable by only emitting those that
	 * satisfy a specified predicate.
	 *
	 * <span class="informal">Like
	 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
	 * it only emits a value from the source if it passes a criterion function.</span>
	 *
	 * <img src="./img/filter.png" width="100%">
	 *
	 * Similar to the well-known `Array.prototype.filter` method, this operator
	 * takes values from the source Observable, passes them through a `predicate`
	 * function and only emits those values that yielded `true`.
	 *
	 * @example <caption>Emit only click events whose target was a DIV element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
	 * clicksOnDivs.subscribe(x => console.log(x));
	 *
	 * @see {@link distinct}
	 * @see {@link distinctKey}
	 * @see {@link distinctUntilChanged}
	 * @see {@link distinctUntilKeyChanged}
	 * @see {@link ignoreElements}
	 * @see {@link partition}
	 * @see {@link skip}
	 *
	 * @param {function(value: T, index: number): boolean} predicate A function that
	 * evaluates each value emitted by the source Observable. If it returns `true`,
	 * the value is emitted, if `false` the value is not passed to the output
	 * Observable. The `index` parameter is the number `i` for the i-th source
	 * emission that has happened since the subscription, starting from the number
	 * `0`.
	 * @param {any} [thisArg] An optional argument to determine the value of `this`
	 * in the `predicate` function.
	 * @return {Observable} An Observable of values from the source that were
	 * allowed by the `predicate` function.
	 * @method filter
	 * @owner Observable
	 */
	function filter(predicate, thisArg) {
	    return this.lift(new FilterOperator(predicate, thisArg));
	}
	exports.filter = filter;
	var FilterOperator = (function () {
	    function FilterOperator(predicate, thisArg) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	    }
	    FilterOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
	    };
	    return FilterOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FilterSubscriber = (function (_super) {
	    __extends(FilterSubscriber, _super);
	    function FilterSubscriber(destination, predicate, thisArg) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.count = 0;
	        this.predicate = predicate;
	    }
	    // the try catch block below is left specifically for
	    // optimization and perf reasons. a tryCatcher is not necessary here.
	    FilterSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.predicate.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this.destination.next(value);
	        }
	    };
	    return FilterSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=filter.js.map

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(15)
	  , createDesc = __webpack_require__(92);
	module.exports = __webpack_require__(14) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Module2 = __webpack_require__(46);
	
	var _Module3 = _interopRequireDefault(_Module2);
	
	var _misc = __webpack_require__(3);
	
	var _defaults = __webpack_require__(71);
	
	var _defaults2 = _interopRequireDefault(_defaults);
	
	var _mapValues = __webpack_require__(262);
	
	var _mapValues2 = _interopRequireDefault(_mapValues);
	
	var _omitBy = __webpack_require__(264);
	
	var _omitBy2 = _interopRequireDefault(_omitBy);
	
	var _map = __webpack_require__(106);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _memoize = __webpack_require__(174);
	
	var _memoize2 = _interopRequireDefault(_memoize);
	
	var _boundNativeMethods = __webpack_require__(10);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return _instanceof(left, right); } }
	
	function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Typed Modules allow to more easily create related
	 * Type, Template and HasType classes. For example,
	 * to create LyphType and LyphTemplate resources and
	 * their HasType relationship from one description.
	 **/
	var TypedModule = function (_Module) {
		_inherits(TypedModule, _Module);
	
		function TypedModule() {
			_classCallCheck(this, TypedModule);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(TypedModule).apply(this, arguments));
		}
	
		_createClass(TypedModule, [{
			key: 'TYPED_RESOURCE',
			value: function TYPED_RESOURCE(config) {
				var _this2 = this;
	
				return (0, _misc.mapOptionalArray)(config, function (conf) {
	
					_this2.basicNormalization(conf);
	
					var superClasses = (0, _misc.wrapInArray)(conf.extends || [_this2.classes.vertexValue('Template')]);
					var subClasses = (0, _misc.wrapInArray)(conf.extendedBy || []);
	
					/* handling properties */
					_defaults2.default.call(conf, {
						properties: {},
						patternProperties: {}
					});
	
					/* Template class */
					var NewTemplateClass = _this2.RESOURCE({
	
						name: conf.name,
	
						extends: superClasses,
						extendedBy: subClasses,
	
						singular: conf.singular,
	
						properties: conf.properties,
						patternProperties: conf.patternProperties,
	
						behavior: conf.behavior
	
					});
	
					/* Type class */
					var NewTypeClass = _this2.RESOURCE({
	
						name: conf.name + 'Type',
	
						extends: _map2.default.call(superClasses, function (c) {
							return c.Type;
						}),
						extendedBy: _map2.default.call(subClasses, function (c) {
							return c.Type;
						}),
	
						singular: conf.singular + ' type',
	
						notExported: true
	
					});
	
					_misc.definePropertyByValue.call(NewTemplateClass, 'Type', NewTypeClass);
					_misc.definePropertyByValue.call(NewTypeClass, 'Template', NewTemplateClass);
	
					_this2.RELATIONSHIP({
	
						name: 'HasType',
	
						1: [NewTemplateClass, '0..*', { anchors: true, key: 'types' }],
						2: [NewTypeClass, '0..*']
	
					});
	
					_this2.RELATIONSHIP({
	
						name: 'DefinesType',
	
						1: [NewTemplateClass, '0..1', { anchors: true }],
						2: [NewTypeClass, '1..1', { anchors: true, key: 'definition' }]
	
					});
	
					/* register and return */
					return NewTemplateClass;
				});
			}
		}]);
	
		return TypedModule;
	}(_Module3.default);
	
	exports.default = TypedModule;

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var identifierRegex = exports.identifierRegex = '^[a-zA-Z_][a-zA-Z0-9_]*$';
	
	var qualitySchema = exports.qualitySchema = {
		type: 'string'
	};
	
	var identifierSchema = exports.identifierSchema = {
		type: 'string',
		pattern: '^[a-zA-Z_][a-zA-Z0-9_]*$'
	};
	
	var uriSchema = exports.uriSchema = {
		type: 'string',
		format: 'uri'
	};
	
	var idSchema = exports.idSchema = {
		type: 'integer'
	};
	
	var enumSchema = exports.enumSchema = function enumSchema() {
		for (var _len = arguments.length, candidates = Array(_len), _key = 0; _key < _len; _key++) {
			candidates[_key] = arguments[_key];
		}
	
		return {
			type: 'string',
			enum: candidates
		};
	};
	
	var enumArraySchema = exports.enumArraySchema = function enumArraySchema() {
		return {
			type: 'array',
			items: _extends({}, enumSchema.apply(undefined, arguments)),
			uniqueItems: true,
			maxItems: arguments.length
		};
	};
	
	var minusPlusSchema = exports.minusPlusSchema = enumSchema('minus', 'plus');
	
	var innerOuterSchema = exports.innerOuterSchema = enumSchema('inner', 'outer');
	
	var lyphDirectionSchema = exports.lyphDirectionSchema = enumSchema.apply(undefined, _toConsumableArray(minusPlusSchema.enum).concat(_toConsumableArray(innerOuterSchema.enum)));
	
	var oneOf = exports.oneOf = function oneOf() {
		for (var _len2 = arguments.length, schemas = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			schemas[_key2] = arguments[_key2];
		}
	
		return { oneOf: schemas };
	};
	
	var rationalNumberSchema = exports.rationalNumberSchema = oneOf({
		// TODO: specify format (https://github.com/infusion/Fraction.js)
		type: 'object',
		properties: {
			'n': { type: 'integer', minimum: 0, required: true }, // numerator
			'd': { type: 'integer', minimum: 1, default: 1, required: true }, // denominator
			's': { type: 'integer', enum: [-1, 1], default: 1, required: true } // sign
		}
	}, { type: 'number' }, { type: 'string' });
	
	var angleSchema = exports.angleSchema = {
		type: 'number',
		minimum: 0, exclusiveMinimum: false,
		maximum: 360, exclusiveMaximum: true
	};
	
	var rangeSchema = exports.rangeSchema = {
		type: 'object',
		properties: {
			'min': { type: 'number', required: true },
			'max': { type: 'number', required: true }
		}
	};
	
	var universalDistanceRange = exports.universalDistanceRange = {
		'min': 0,
		'max': Infinity
	};
	
	var normalDistributionSchema = exports.normalDistributionSchema = {
		type: 'object',
		properties: {
			'distribution': { value: 'normal' },
			'mean': { type: 'number', required: true },
			'std': { type: 'number', required: true }
		}
	};
	
	var boundedNormalDistributionSchema = exports.boundedNormalDistributionSchema = {
		type: 'object',
		properties: {
			'distribution': { value: 'bounded-normal' },
			'mean': { type: 'number', required: true },
			'std': { type: 'number', required: true },
			'min': { type: 'number', required: true },
			'max': { type: 'number', required: true }
		}
	};
	
	var uniformDistributionSchema = exports.uniformDistributionSchema = {
		type: 'object',
		properties: {
			'distribution': { value: 'uniform' },
			'min': { type: 'number', required: true },
			'max': { type: 'number', required: true }
		}
	};
	
	var distributionSchema = exports.distributionSchema = {
		oneOf: [_extends({}, normalDistributionSchema), _extends({}, boundedNormalDistributionSchema), _extends({}, uniformDistributionSchema)]
	};
	
	var distributionSchemaOr = exports.distributionSchemaOr = function distributionSchemaOr(otherSchema) {
		return {
			oneOf: [boundedNormalDistributionSchema, uniformDistributionSchema, otherSchema]
		};
	};
	
	var dimensionalitySchema = exports.dimensionalitySchema = {
		type: 'object',
		patternProperties: {
			'[a-zA-Z0-9 ]+': { type: 'integer' }
		}
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , hide      = __webpack_require__(30)
	  , has       = __webpack_require__(28)
	  , SRC       = __webpack_require__(104)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(64).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1)
	  , fails   = __webpack_require__(5)
	  , defined = __webpack_require__(49)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(141)
	  , defined = __webpack_require__(49);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(392);
	
	module.exports = function isUndefined() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(153);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}
	
	module.exports = baseRest;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(298),
	    getValue = __webpack_require__(337);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(58);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = toKey;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(13);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var OuterSubscriber = (function (_super) {
	    __extends(OuterSubscriber, _super);
	    function OuterSubscriber() {
	        _super.apply(this, arguments);
	    }
	    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(innerValue);
	    };
	    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
	        this.destination.error(error);
	    };
	    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.destination.complete();
	    };
	    return OuterSubscriber;
	}(Subscriber_1.Subscriber));
	exports.OuterSubscriber = OuterSubscriber;
	//# sourceMappingURL=OuterSubscriber.js.map

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(13);
	/**
	 * Applies a given `project` function to each value emitted by the source
	 * Observable, and emits the resulting values as an Observable.
	 *
	 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
	 * it passes each source value through a transformation function to get
	 * corresponding output values.</span>
	 *
	 * <img src="./img/map.png" width="100%">
	 *
	 * Similar to the well known `Array.prototype.map` function, this operator
	 * applies a projection to each value and emits that projection in the output
	 * Observable.
	 *
	 * @example <caption>Map every every click to the clientX position of that click</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks.map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link mapTo}
	 * @see {@link pluck}
	 *
	 * @param {function(value: T, index: number): R} project The function to apply
	 * to each `value` emitted by the source Observable. The `index` parameter is
	 * the number `i` for the i-th emission that has happened since the
	 * subscription, starting from the number `0`.
	 * @param {any} [thisArg] An optional argument to define what `this` is in the
	 * `project` function.
	 * @return {Observable<R>} An Observable that emits the values from the source
	 * Observable transformed by the given `project` function.
	 * @method map
	 * @owner Observable
	 */
	function map(project, thisArg) {
	    if (typeof project !== 'function') {
	        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
	    }
	    return this.lift(new MapOperator(project, thisArg));
	}
	exports.map = map;
	var MapOperator = (function () {
	    function MapOperator(project, thisArg) {
	        this.project = project;
	        this.thisArg = thisArg;
	    }
	    MapOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
	    };
	    return MapOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MapSubscriber = (function (_super) {
	    __extends(MapSubscriber, _super);
	    function MapSubscriber(destination, project, thisArg) {
	        _super.call(this, destination);
	        this.project = project;
	        this.count = 0;
	        this.thisArg = thisArg || this;
	    }
	    // NOTE: This looks unoptimized, but it's actually purposefully NOT
	    // using try/catch optimizations.
	    MapSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.project.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return MapSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=map.js.map

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(89);
	var isArray_1 = __webpack_require__(88);
	var isPromise_1 = __webpack_require__(431);
	var Observable_1 = __webpack_require__(22);
	var iterator_1 = __webpack_require__(427);
	var InnerSubscriber_1 = __webpack_require__(413);
	var symbol_observable_1 = __webpack_require__(191);
	function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
	    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
	    if (destination.isUnsubscribed) {
	        return;
	    }
	    if (result instanceof Observable_1.Observable) {
	        if (result._isScalar) {
	            destination.next(result.value);
	            destination.complete();
	            return;
	        }
	        else {
	            return result.subscribe(destination);
	        }
	    }
	    if (isArray_1.isArray(result)) {
	        for (var i = 0, len = result.length; i < len && !destination.isUnsubscribed; i++) {
	            destination.next(result[i]);
	        }
	        if (!destination.isUnsubscribed) {
	            destination.complete();
	        }
	    }
	    else if (isPromise_1.isPromise(result)) {
	        result.then(function (value) {
	            if (!destination.isUnsubscribed) {
	                destination.next(value);
	                destination.complete();
	            }
	        }, function (err) { return destination.error(err); })
	            .then(null, function (err) {
	            // Escaping the Promise trap: globally throw unhandled errors
	            root_1.root.setTimeout(function () { throw err; });
	        });
	        return destination;
	    }
	    else if (typeof result[iterator_1.$$iterator] === 'function') {
	        for (var _i = 0, _a = result; _i < _a.length; _i++) {
	            var item = _a[_i];
	            destination.next(item);
	            if (destination.isUnsubscribed) {
	                break;
	            }
	        }
	        if (!destination.isUnsubscribed) {
	            destination.complete();
	        }
	    }
	    else if (typeof result[symbol_observable_1.default] === 'function') {
	        var obs = result[symbol_observable_1.default]();
	        if (typeof obs.subscribe !== 'function') {
	            destination.error('invalid observable');
	        }
	        else {
	            return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
	        }
	    }
	    else {
	        destination.error(new TypeError('unknown type returned'));
	    }
	}
	exports.subscribeToResult = subscribeToResult;
	//# sourceMappingURL=subscribeToResult.js.map

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(142)
	  , createDesc     = __webpack_require__(92)
	  , toIObject      = __webpack_require__(36)
	  , toPrimitive    = __webpack_require__(66)
	  , has            = __webpack_require__(28)
	  , IE8_DOM_DEFINE = __webpack_require__(445)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(14) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(28)
	  , toObject    = __webpack_require__(24)
	  , IE_PROTO    = __webpack_require__(240)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _templateObject = _taggedTemplateLiteral(['\n\t\t\t\t\t\t\t', '\n\t\t\t\t\t\t\t(', ')\n\t\t\t\t\t\t\t', '\n\t\t\t\t\t\t'], ['\n\t\t\t\t\t\t\t', '\n\t\t\t\t\t\t\t(', ')\n\t\t\t\t\t\t\t', '\n\t\t\t\t\t\t']),
	    _templateObject2 = _taggedTemplateLiteral(['\n\t\t\t\tA subclass cycle has been introduced while registering\n\t\t\t\tthe ', ' class:\n\t\t\t\t', '.\n\t\t\t'], ['\n\t\t\t\tA subclass cycle has been introduced while registering\n\t\t\t\tthe ', ' class:\n\t\t\t\t', '.\n\t\t\t']),
	    _templateObject3 = _taggedTemplateLiteral(['\n\t\t\t\t\t\t\tCannot merge ', '.', ' = ', '\n\t\t\t\t\t\t\t        with ', '.\n\t\t\t\t\t\t'], ['\n\t\t\t\t\t\t\tCannot merge ', '.', ' = ', '\n\t\t\t\t\t\t\t        with ', '.\n\t\t\t\t\t\t']);
	
	var _isUndefined = __webpack_require__(37);
	
	var _isUndefined2 = _interopRequireDefault(_isUndefined);
	
	var _isInteger = __webpack_require__(258);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	var _defaults = __webpack_require__(71);
	
	var _defaults2 = _interopRequireDefault(_defaults);
	
	var _assignWith = __webpack_require__(252);
	
	var _assignWith2 = _interopRequireDefault(_assignWith);
	
	var _keys = __webpack_require__(149);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _values = __webpack_require__(108);
	
	var _values2 = _interopRequireDefault(_values);
	
	var _entries = __webpack_require__(17);
	
	var _entries2 = _interopRequireDefault(_entries);
	
	var _fromPairs = __webpack_require__(256);
	
	var _fromPairs2 = _interopRequireDefault(_fromPairs);
	
	var _map = __webpack_require__(106);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _at = __webpack_require__(253);
	
	var _at2 = _interopRequireDefault(_at);
	
	var _uniq = __webpack_require__(269);
	
	var _uniq2 = _interopRequireDefault(_uniq);
	
	var _flatten = __webpack_require__(255);
	
	var _flatten2 = _interopRequireDefault(_flatten);
	
	var _isEqual2 = __webpack_require__(172);
	
	var _isEqual3 = _interopRequireDefault(_isEqual2);
	
	var _graph = __webpack_require__(143);
	
	var _graph2 = _interopRequireDefault(_graph);
	
	var _boundNativeMethods = __webpack_require__(10);
	
	var _misc = __webpack_require__(3);
	
	var _Entity = __webpack_require__(204);
	
	var _Entity2 = _interopRequireDefault(_Entity);
	
	var _fields = __webpack_require__(138);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return _instanceof(left, right); } }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var $$processedFor = Symbol('$$processedFor');
	var $$relationshipSpecs = Symbol('$$relationshipSpecs');
	var $$relevantDomains = Symbol('$$relevantDomains');
	var $$processRelationshipDomain = Symbol('$$processRelationshipDomain');
	
	////////////////////////////////////////////////////////////////////////////////
	// Module / Resource / Relationship Factory                                   //
	////////////////////////////////////////////////////////////////////////////////
	
	// TODO: folding same-name classes
	// TODO: folding properties into subclasses
	// TODO: folding multiple 1,2 pairs into same-name relationships and subclass relationships
	
	
	var Module = function () {
		_createClass(Module, null, [{
			key: 'create',
			value: function create(name, dependencies, fn) {
				var _this = this;
	
				var moduleFactory = function moduleFactory() {
					var memory = arguments.length <= 0 || arguments[0] === undefined ? {
						modules: new Map(),
						classes: new _graph2.default()
					} : arguments[0];
	
					if (!memory.modules.has(name)) {
						var module = new _this(name, dependencies.map(function (m) {
							return m(memory);
						}), memory.classes);
						memory.modules.set(name, module);
						if (fn) {
							var _context;
	
							fn(module, (_context = [].concat(_toConsumableArray(module.classes.vertices())), _fromPairs2.default).call(_context));
						}
					}
					return memory.modules.get(name);
				};
				return moduleFactory;
			}
		}]);
	
		// vertices: name                   -> class
		// edges:    [superclass, subclass] -> undefined
	
		function Module(name) {
			var dependencies = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
			var graph = arguments.length <= 2 || arguments[2] === undefined ? new _graph2.default() : arguments[2];
	
			_classCallCheck(this, Module);
	
			/* set storage graph */
			this.classes = graph;
	
			/* store the module name */
			this.name = name;
		}
	
		_createClass(Module, [{
			key: 'OBJECT',
			value: function OBJECT(config) {
				var _this2 = this;
	
				return (0, _misc.mapOptionalArray)(config, function (conf) {
					conf.module = _this2;
					_this2.basicNormalization(conf);
					_this2.register(conf);
					return conf;
				});
			}
		}, {
			key: 'RESOURCE',
			value: function RESOURCE(config) {
				var _this3 = this;
	
				return (0, _misc.mapOptionalArray)(config, function (conf) {
					conf.isResource = true;
					conf.module = _this3;
					_this3.basicNormalization(conf);
					var constructor = _this3.mergeSameNameResources(_Entity2.default.createClass(conf));
					_this3.register(constructor);
					_this3.mergeSuperclassFields(constructor);
					// jsonSchemaConfig                          (constructor             ); // TODO
					_fields.Field.augmentClass(constructor);
					return constructor;
				});
			}
		}, {
			key: 'RELATIONSHIP',
			value: function RELATIONSHIP(config) {
				var _this4 = this;
	
				return (0, _misc.mapOptionalArray)(config, function (conf) {
					conf.isRelationship = true;
					conf.module = _this4;
					_this4.basicNormalization(conf);
					var constructor = _Entity2.default.createClass(conf);
					_this4.normalizeRelationshipSides(constructor);
					constructor = _this4.mergeSameNameRelationships(constructor);
					_this4.register(constructor);
					_this4.mergeSuperclassFields(constructor);
					// jsonSchemaConfig                          (constructor); // TODO
					_this4.resolveRelationshipDomains(constructor);
					_fields.Field.augmentClass(constructor);
					return constructor;
				});
			}
	
			////////////////////////////////////////////////////////////////////////////
	
		}, {
			key: 'basicNormalization',
			value: function basicNormalization(config) {
				/* normalizing grammar stuff */
				if (config.singular && !config.plural) {
					if (config.isResource) {
						config.plural = config.singular + 's';
					} else {
						var match = config.singular.match(/^(.+)s$/);
						if (match) {
							config.plural = match[1];
						}
					}
				}
	
				_defaults2.default.call(config, {
					behavior: {}
				});
	
				if (config.isResource) {
					_defaults2.default.call(config, {
						relationships: {},
						relationshipShortcuts: {}
					});
				}
	
				/* normalizing extends/extendedBy */
				var _arr = ['extends', 'extendedBy'];
				for (var _i = 0; _i < _arr.length; _i++) {
					var key = _arr[_i];
					_defaults2.default.call(config, _defineProperty({}, key, []));
					config[key] = new Set((0, _misc.wrapInArray)(config[key]));
				}
	
				/* normalize properties */
				var _arr2 = [['properties', 'key'], ['patternProperties', 'pattern']];
				for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
					var _arr2$_i = _slicedToArray(_arr2[_i2], 2);
	
					var pKey = _arr2$_i[0];
					var kKey = _arr2$_i[1];
	
					_defaults2.default.call(config, _defineProperty({}, pKey, {}));
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;
	
					try {
						for (var _iterator = (_context2 = config[pKey], _entries2.default).call(_context2)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var _context2;
	
							var _step$value = _slicedToArray(_step.value, 2);
	
							var k = _step$value[0];
							var desc = _step$value[1];
	
							desc[kKey] = k;
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
				}
	
				/* sanity checks */
				var _arr3 = ['extends', 'extendedBy'];
				for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
					var _key = _arr3[_i3];var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;
	
					try {
						for (var _iterator2 = config[_key][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var other = _step2.value;
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}
				}
			}
		}, {
			key: 'normalizeRelationshipSides',
			value: function normalizeRelationshipSides(cls) {
	
				/* normalize domainPairs array */
				if (!cls.domainPairs) {
					cls.domainPairs = [];
				}
				// - 1 is left-hand side, and
				// - 2 is right-hand side of the relationship;
				// these can be given directly, or multiple
				// can be grouped in a 'domainPairs' array;
				// here, we'll normalize them into a 'domainPairs' array
	
				if (cls[1] && cls[2]) {
					var _cls$domainPairs$push;
	
					cls.domainPairs.push((_cls$domainPairs$push = {}, _defineProperty(_cls$domainPairs$push, 1, cls[1]), _defineProperty(_cls$domainPairs$push, 2, cls[2]), _cls$domainPairs$push));
				}
	
				/* indices for shorthand array notation and side keys */
				var CLASS = 0,
				    CARDINALITY = 1,
				    OPTIONS = 2;
	
				/* normalizing all domainPairs */
				cls.keyInResource = {
					1: '-->' + cls.name,
					2: '<--' + cls.name
				};
				cls.domainPairs = cls.domainPairs.map(function (givenDomainPair) {
					var _pair;
	
					var pair = (_pair = {}, _defineProperty(_pair, 1, {}), _defineProperty(_pair, 2, {}), _pair);
					var _arr4 = [[[1, pair[1]], [2, pair[2]]], [[2, pair[2]], [1, pair[1]]]];
					for (var _i4 = 0; _i4 < _arr4.length; _i4++) {
						var _arr4$_i = _slicedToArray(_arr4[_i4], 2);
	
						var _arr4$_i$ = _slicedToArray(_arr4$_i[0], 2);
	
						var domainKey = _arr4$_i$[0];
						var domain = _arr4$_i$[1];
	
						var _arr4$_i$2 = _slicedToArray(_arr4$_i[1], 2);
	
						var codomainKey = _arr4$_i$2[0];
						var codomain = _arr4$_i$2[1];
	
						var _givenDomainPair$doma = _slicedToArray(givenDomainPair[domainKey], 3);
	
						var resourceClass = _givenDomainPair$doma[0];
						var cardinality = _givenDomainPair$doma[1];
						var _givenDomainPair$doma2 = _givenDomainPair$doma[2];
						var options = _givenDomainPair$doma2 === undefined ? {} : _givenDomainPair$doma2;
	
						_misc.definePropertiesByValue.call(domain, {
							codomain: codomain,
	
							relationshipClass: cls,
							keyInRelationship: domainKey,
	
							resourceClass: resourceClass,
							keyInResource: cls.keyInResource[domainKey],
	
							cardinality: (0, _misc.parseCardinality)(cardinality),
							options: options,
	
							shortcutKey: options.key
						});
						_boundNativeMethods.defineProperty.call(domain, Symbol.toStringTag, {
							get: function get() {
								return (0, _misc.humanMsg)(_templateObject, this.resourceClass.name, this.keyInResource, this.codomain.resourceClass.name);
							}
						});
					}
					return pair;
				});
				delete cls[1];
				delete cls[2];
			}
		}, {
			key: 'resolveRelationshipDomains',
			value: function resolveRelationshipDomains(cls) {
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;
	
				try {
					for (var _iterator3 = cls.domainPairs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var domainPair = _step3.value;
						var _iteratorNormalCompletion4 = true;
						var _didIteratorError4 = false;
						var _iteratorError4 = undefined;
	
						try {
							for (var _iterator4 = _values2.default.call(domainPair)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
								var domain = _step4.value;
	
								this[$$processRelationshipDomain](domain);
							}
						} catch (err) {
							_didIteratorError4 = true;
							_iteratorError4 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion4 && _iterator4.return) {
									_iterator4.return();
								}
							} finally {
								if (_didIteratorError4) {
									throw _iteratorError4;
								}
							}
						}
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}
			}
		}, {
			key: $$processRelationshipDomain,
			value: function value(referenceDomain) {
				var resourceClass = referenceDomain.resourceClass;
				var relationshipClass = referenceDomain.relationshipClass;
				var keyInRelationship = referenceDomain.keyInRelationship;
				var keyInResource = referenceDomain.keyInResource;
				var shortcutKey = referenceDomain.shortcutKey;
	
				// const relSinks = relationshipClass::(function findSinks() {
				// 	if (this.extendedBy::size() === 0) { return [this] }
				// 	return union(...[...this.extendedBy].map(c => c::findSinks()));
				// })();
				//
				// let hierarchy = new Graph();
				// // ^ In this graph: super --> sub
				//
				// const process = (CurrentRelClass, RelSubclass) => {
				// 	/* find all domains relevant to this resource class + field key combo */
				// 	const relevantDomains = CurrentRelClass[$$relevantDomains] = CurrentRelClass.domainPairs
				// 		::map(keyInRelationship)
				//        ::filter(d => (d.resourceClass).hasSubclass(resourceClass)       ||
				//                      (resourceClass)       .hasSubclass(d.resourceClass) )
				// 		::groupBy('resourceClass.name')
				// 		::_values()
				// 		::map(0); // for now, only using one domain-pair per ResourceClass+RelationshipClass combination
				// 	// TODO: ^ don't use only a[0]; this is just for now, to simplify
				// 	//     :   we still manually have to manually create common superclasses
				// 	//     :   for stuff (examples: MeasurableLocation, NodeLocation)
				//
				// 	/* register domain */
				// 	for (let domain of relevantDomains) {
				// 		hierarchy.addVertex(domain, domain);
				// 	}
				// 	/* register domain ordering by (sub/super) relationship class */
				// 	for (let domain of relevantDomains) {
				// 		if (RelSubclass) {
				// 			for (let subDomain of RelSubclass[$$relevantDomains]) {
				// 				hierarchy.spanEdge(domain, subDomain);
				// 			}
				// 		}
				// 	}
				// 	/* register domain ordering by (sub/super) resource class */
				// 	for (let domain of relevantDomains) {
				// 		for (let otherDomain of relevantDomains::without(domain)) {
				// 			assert(domain.resourceClass !== otherDomain.resourceClass);
				// 			// ^ (because `::groupBy('resourceClass.name')` above)
				// 			if (otherDomain.resourceClass.hasSubclass(domain.resourceClass)) {
				// 				hierarchy.spanEdge(otherDomain, domain);
				// 			}
				// 		}
				// 	}
				// 	/* recurse to relationship superclass */
				// 	for (let RelSuperclass of CurrentRelClass.extends) {
				// 		process(RelSuperclass, CurrentRelClass);
				// 	}
				// };
				// relSinks.forEach(process);
				//
				// hierarchy = hierarchy.transitiveReduction();
	
	
				// TODO: fix bug in the code below (the commented code above already works)
				/* from the graph of relevant domains for this field (domain), craft one specifically for each ResourceClass */
				// let resourceHasField = (resCls) => (!!resCls.properties[referenceDomain.keyInResource]);
				// console.log(this.classes.hasVertex(referenceDomain.resourceClass.name), referenceDomain.resourceClass.name, [...this.classes.vertices()]::map(v=>v[1].name));
				// for (let referenceResource of union(
				// 	[...this.classes.verticesWithPathFrom(referenceDomain.resourceClass.name)]::map(([,r])=>r)::filter(resourceHasField),
				// 	[...this.classes.verticesWithPathTo  (referenceDomain.resourceClass.name)]::map(([,r])=>r)::filter(resourceHasField),
				// 	[referenceDomain.resourceClass]
				// )) {
				// 	let candidateDomains = [...hierarchy.sinks()]::map(([,d])=>d)::(function pinpoint() {
				// 		let result = new Set();
				// 		for (let domain of this) {
				// 			const relationshipFits = (referenceDomain.relationshipClass.hasSubclass(domain.relationshipClass));
				// 			const resourceFits     = (referenceResource                .hasSubclass(domain.resourceClass    ));
				// 			if (relationshipFits && resourceFits) {
				// 				result.add(domain);
				// 			} else {
				// 				for (let superDomain of [...hierarchy.verticesTo(domain)]::map(([,d])=>d)) {
				// 					[superDomain]::pinpoint().forEach(::result.add);
				// 				}
				// 			}
				// 		}
				// 		return result;
				// 	})();
				// }
	
				/* put back-reference in classes */
	
				resourceClass.relationships[keyInResource] = referenceDomain;
				_fields.Field.augmentClass(resourceClass, keyInResource);
				if (shortcutKey) {
					resourceClass.relationshipShortcuts[shortcutKey] = referenceDomain;
					_fields.Field.augmentClass(resourceClass, shortcutKey);
				}
			}
		}, {
			key: 'register',
			value: function register(cls) {
				/* register the class in this module */
				this.classes.ensureVertex(cls.name, cls);
				if (!cls.notExported) {
					this.classes[cls.name] = cls;
				}
	
				/* add subclassing edges and cross-register sub/superclasses */
				var _iteratorNormalCompletion5 = true;
				var _didIteratorError5 = false;
				var _iteratorError5 = undefined;
	
				try {
					for (var _iterator5 = (cls.extends || [])[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
						var extendee = _step5.value;
	
						this.classes.addEdge(extendee.name, cls.name);
						extendee.extendedBy.add(cls);
					}
				} catch (err) {
					_didIteratorError5 = true;
					_iteratorError5 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion5 && _iterator5.return) {
							_iterator5.return();
						}
					} finally {
						if (_didIteratorError5) {
							throw _iteratorError5;
						}
					}
				}
	
				var _iteratorNormalCompletion6 = true;
				var _didIteratorError6 = false;
				var _iteratorError6 = undefined;
	
				try {
					for (var _iterator6 = (cls.extendedBy || [])[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
						var extender = _step6.value;
	
						this.classes.addEdge(cls.name, extender.name);
						extender.extends.add(cls);
					}
	
					/* check for cycles */
				} catch (err) {
					_didIteratorError6 = true;
					_iteratorError6 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion6 && _iterator6.return) {
							_iterator6.return();
						}
					} finally {
						if (_didIteratorError6) {
							throw _iteratorError6;
						}
					}
				}
	
				var cycle = this.classes.cycle();
				if (cycle) {
					throw new Error((0, _misc.humanMsg)(_templateObject2, cls.name, [].concat(_toConsumableArray(cycle), [cycle[0]]).join(' --> ')));
				}
	
				return cls;
			}
		}, {
			key: 'mergeSuperclassFields',
			value: function mergeSuperclassFields(cls) {
				var mergeFieldKind = function mergeFieldKind(cls, newCls, kind, customMerge) {
					var _context3;
	
					if ((_context3 = cls[kind], _isUndefined2.default).call(_context3)) {
						return;
					}
	
					if (!cls[$$processedFor]) {
						cls[$$processedFor] = {};
					}
					if (!cls[$$processedFor][kind]) {
						cls[$$processedFor][kind] = new WeakSet();
					}
					if (cls[$$processedFor][kind].has(newCls)) {
						return;
					}
					cls[$$processedFor][kind].add(newCls);
	
					function mergeBetween(superCls, subCls) {
						var _iteratorNormalCompletion7 = true;
						var _didIteratorError7 = false;
						var _iteratorError7 = undefined;
	
						try {
							for (var _iterator7 = (_context4 = superCls[kind], _keys2.default).call(_context4)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
								var _context4;
	
								var key = _step7.value;
	
								var superDesc = superCls[kind][key];
								var subDesc = subCls[kind][key];
								if (_isUndefined2.default.call(subDesc)) {
									subCls[kind][key] = superDesc;
									_fields.Field.augmentClass(subCls, key);
								} else if ((0, _isEqual3.default)(subDesc, superDesc)) {
									continue;
								} else {
									subCls[kind][key] = customMerge(superDesc, subDesc);
								}
							}
						} catch (err) {
							_didIteratorError7 = true;
							_iteratorError7 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion7 && _iterator7.return) {
									_iterator7.return();
								}
							} finally {
								if (_didIteratorError7) {
									throw _iteratorError7;
								}
							}
						}
					}
	
					var _iteratorNormalCompletion8 = true;
					var _didIteratorError8 = false;
					var _iteratorError8 = undefined;
	
					try {
						for (var _iterator8 = cls.extends[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
							var superCls = _step8.value;
	
							mergeFieldKind(superCls, newCls, kind, customMerge);
							mergeBetween(superCls, cls);
						}
					} catch (err) {
						_didIteratorError8 = true;
						_iteratorError8 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion8 && _iterator8.return) {
								_iterator8.return();
							}
						} finally {
							if (_didIteratorError8) {
								throw _iteratorError8;
							}
						}
					}
	
					var _iteratorNormalCompletion9 = true;
					var _didIteratorError9 = false;
					var _iteratorError9 = undefined;
	
					try {
						for (var _iterator9 = cls.extendedBy[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
							var subCls = _step9.value;
	
							mergeBetween(cls, subCls);
							mergeFieldKind(subCls, newCls, kind, customMerge);
						}
					} catch (err) {
						_didIteratorError9 = true;
						_iteratorError9 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion9 && _iterator9.return) {
								_iterator9.return();
							}
						} finally {
							if (_didIteratorError9) {
								throw _iteratorError9;
							}
						}
					}
				};
	
				mergeFieldKind(cls, cls, 'properties', function (superDesc, subDesc) {
					var _context5;
	
					// We're assuming that the only kind of non-trivial merging
					// right now is to give a property a specific constant value
					// in the subclass, which has to be checked in the superclass.
					// TODO: use actual json-schema validation to validate value
					var singleSuperDesc = void 0;
					if ((_context5 = superDesc.type, _isUndefined2.default).call(_context5) && superDesc.oneOf) {
						var _iteratorNormalCompletion10 = true;
						var _didIteratorError10 = false;
						var _iteratorError10 = undefined;
	
						try {
							for (var _iterator10 = superDesc.oneOf[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
								var _context6;
	
								var disjunct = _step10.value;
	
								if (_typeof(subDesc.value) === disjunct.type || (_context6 = subDesc.value, _isInteger2.default).call(_context6) && disjunct.type === 'integer' || (0, _isEqual3.default)(subDesc.value, disjunct.value)) {
									singleSuperDesc = _extends({}, superDesc, disjunct);
									delete singleSuperDesc.oneOf;
									delete singleSuperDesc.default;
								}
							}
						} catch (err) {
							_didIteratorError10 = true;
							_iteratorError10 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion10 && _iterator10.return) {
									_iterator10.return();
								}
							} finally {
								if (_didIteratorError10) {
									throw _iteratorError10;
								}
							}
						}
					} else {
						singleSuperDesc = _extends({}, superDesc);
					}
					return singleSuperDesc;
				});
	
				mergeFieldKind(cls, cls, 'relationships', function (superDesc, subDesc) {
					return subDesc;
				});
	
				mergeFieldKind(cls, cls, 'relationshipShortcuts', function (superDesc, subDesc) {
					return subDesc;
				});
	
				// TODO: for sides of a relationship (after splitting / merging all relevant domainPairs)
			}
		}, {
			key: 'mergeSameNameResources',
			value: function mergeSameNameResources(NewClass) {
				var OldClass = this.classes.vertexValue(NewClass.name);
				if (!OldClass) {
					return NewClass;
				}
				return _assignWith2.default.call(OldClass, NewClass, function (vOld, vNew, key) {
					var _context7;
	
					switch (key) {
						case 'module':
							return vOld;
						case 'extends':
						case 'extendedBy':
							return new Set([].concat(_toConsumableArray(vOld), _toConsumableArray(vNew)));
						case 'properties':
						case 'patternProperties':
							return (_context7 = {}, _assignWith2.default).call(_context7, vOld, vNew, function (pOld, pNew, pKey) {
								return _isUndefined2.default.call(pOld) ? pNew : pOld;
							});
						default:
							{
								if (!_isUndefined2.default.call(vOld) && !_isUndefined2.default.call(vNew) && !(0, _isEqual3.default)(vOld, vNew)) {
									throw new Error((0, _misc.humanMsg)(_templateObject3, OldClass.name, key, JSON.stringify(vOld), JSON.stringify(vNew)));
								}
								return _isUndefined2.default.call(vOld) ? vNew : vOld;
							}
					}
				});
			}
		}, {
			key: 'mergeSameNameRelationships',
			value: function mergeSameNameRelationships(NewClass) {
				var OldClass = this.classes.vertexValue(NewClass.name);
				if (!OldClass) {
					return NewClass;
				}
				return _assignWith2.default.call(OldClass, NewClass, function (vOld, vNew, key) {
					var _context8;
	
					switch (key) {
						case 'module':
							return vOld;
						case 'extends':
						case 'extendedBy':
							return new Set([].concat(_toConsumableArray(vOld), _toConsumableArray(vNew)));
						case 'domainPairs':
							return [].concat(_toConsumableArray(vOld), _toConsumableArray(vNew));
						case 'properties':
						case 'patternProperties':
							return (_context8 = {}, _assignWith2.default).call(_context8, vOld, vNew, function (pOld, pNew, pKey) {
								return _isUndefined2.default.call(pOld) ? pNew : pOld;
							});
						default:
							{
								return _isUndefined2.default.call(vOld) ? vNew : vOld;
							}
					}
				});
			}
		}]);
	
		return Module;
	}();
	
	////////////////////////////////////////////////////////////
	// RESOURCE({
	//
	//     name: 'ResourceName',
	//
	//     extends: <superclass>,
	//     abstract: <true/false>,
	//
	//     singular: 'singular name',
	//     plural:   'plural names',
	//
	//     properties: {
	//         ...properties
	//     },
	//     patternProperties: {
	//         ...patternProperties
	//     },
	//     ...options
	// })
	////////////////////////////////////////////////////////////
	
	////////////////////////////////////////////////////////////
	// RELATIONSHIP({
	//
	//     name: 'RelationshipName',
	//
	//     extends: <superclass>,
	//     abstract: <true/false>,
	//
	//     1: [ ResourceType1, [c1min, c1max], { ...options1to2 } ],
	//     2: [ ResourceType2, [c2min, c2max], { ...options2to1 } ],
	//
	//     properties: {
	//         ...properties
	//     },
	//
	//     ...options
	// })
	//
	// This means that RelationshipName is a type of c1-to-c2 relationship
	// (c stands for cardinality: many-to-many, one-to-many, etc. both sides
	// have a min and max) between ResourceType1 resources and ResourceType2 resources.
	// So: "a ResourceType1 resource can be related to 'c1' ResourceType2 resource(s),
	//      exposed through through the key 'options1to2.key' in that resource"
	// and vice versa, if a key field is present, which is not mandatory.
	//
	// A couple of possible options:
	// - options1to2.sustains:     when the last related ResourceType1 instance is deleted,
	//                             the ResourceType2 instance that is being sustained by it is deleted automatically
	// - options1to2.anchors:      a ResourceType2 instance cannot be deleted
	//                             while there are still ResourceType1 instances related with it
	// - options1to2.implicit:     (only when c1min > 0) a new ResourceType2 instance, plus this kind of relationship,
	//                             is automatically created for a new ResourceType1 instance;
	// - options1to2.getSummary:   a human-readable explanation of the corresponding REST endpoint for HTTP GET
	// - options1to2.putSummary:   a human-readable explanation of the corresponding REST endpoint for HTTP PUT
	// - options1to2.deleteSummary:a human-readable explanation of the corresponding REST endpoint for HTTP DELETE
	// - options.readOnly:         this relationship type is managed programmatically, not to be exposed through the API directly
	// - options.noCycles:         no cycles of this relationship type are allowed
	// - options.symmetric:        this relationship type is bidirectional, 1->2 always implies 2->1; TODO: implement when needed
	// - options.antiReflexive:    a resource may not be related to itself with this type;            TODO: implement when needed
	////////////////////////////////////////////////////////////
	
	
	// TODO: reintroduce json schema processor
	//
	// function jsonSchemaConfig(config) {
	// 	let result = {
	// 		...config,
	// 		allProperties: { ...config.properties }
	// 	};
	//
	// 	if (isFunction(config.extends)) {
	// 		/* merge each property with properties of the same name in the superclass */
	// 		for (let key of Object.keys(config.extends.allProperties)) {
	// 			// TODO: check for conflicts
	// 			// TODO: merge certain sub-items (e.g., enums can be made narrower)
	// 			result.allProperties[key] = {
	// 				...config.extends.allProperties[key],
	// 				...result.allProperties[key]
	// 			};
	// 		}
	// 	}
	//
	// 	/* folding superclass properties into one object */
	// 	Object.assign(result.allProperties, config.extends && config.extends.allProperties);
	//
	// 	return result;
	//
	// 	// return {
	// 	// 	...config,
	// 	// 	schema: {
	// 	// 		$schema:             'http://json-schema.org/draft-04/schema#',
	// 	// 		type:                'Object',
	// 	// 		properties:           { ...(config.properties || {})         },
	// 	// 		patternProperties:    { ...(config.patternProperties || {})  },
	// 	// 		additionalProperties: ( config.additionalProperties === true )  // default: no additional properties allowed
	// 	//
	// 	// 		// TODO: have this object conform to json schema syntax
	// 	// 		//     : - add 'required' field?
	// 	// 		//     : - sanitize config.properties
	// 	// 		//     : - add properties '1' and '2' to it (if config.isRelationship)
	// 	//
	// 	// 		// TODO: fold superclass properties, patternProperties, etc. into this
	// 	// 		//     : - fold property flags into each other
	// 	// 	}
	// 	// };
	// }
	
	
	exports.default = Module;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _TypedModule = __webpack_require__(31);
	
	var _TypedModule2 = _interopRequireDefault(_TypedModule);
	
	var _misc = __webpack_require__(3);
	
	var _schemas = __webpack_require__(32);
	
	var _resources = __webpack_require__(16);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _typed = __webpack_require__(27);
	
	var _typed2 = _interopRequireDefault(_typed);
	
	var _ObservableSet = __webpack_require__(67);
	
	var _union = __webpack_require__(409);
	
	var _union2 = _interopRequireDefault(_union);
	
	var _uniqueId = __webpack_require__(179);
	
	var _uniqueId2 = _interopRequireDefault(_uniqueId);
	
	var _defaults = __webpack_require__(71);
	
	var _defaults2 = _interopRequireDefault(_defaults);
	
	var _assign = __webpack_require__(251);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _entries = __webpack_require__(17);
	
	var _entries2 = _interopRequireDefault(_entries);
	
	var _parseInt = __webpack_require__(265);
	
	var _parseInt2 = _interopRequireDefault(_parseInt);
	
	var _max = __webpack_require__(263);
	
	var _max2 = _interopRequireDefault(_max);
	
	var _map = __webpack_require__(106);
	
	var _map2 = _interopRequireDefault(_map);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	exports.default = _TypedModule2.default.create('lyphs', [_resources2.default, _typed2.default], function (M, _ref) {
		var Resource = _ref.Resource;
		var IsRelatedTo = _ref.IsRelatedTo;
		var Template = _ref.Template;
		var PullsIntoTypeDefinition = _ref.PullsIntoTypeDefinition;
		var Has = _ref.Has;
	
	
		var Material = M.TYPED_RESOURCE({ /////////////////////////////////////////
	
			name: 'Material',
	
			extends: Template,
	
			singular: "material"
	
		}); /////////////////////////////////////////////////////////////////////////
	
	
		var ContainsMaterial = M.RELATIONSHIP({
	
			name: 'ContainsMaterial',
	
			extends: IsRelatedTo,
	
			singular: "has material",
	
			1: [Material, '0..*', { anchors: true, key: 'materials' }],
			2: [Material.Type, '0..*'],
	
			noCycles: true
	
		});
	
		var Lyph = M.TYPED_RESOURCE({ /////////////////////////////////////////////
	
			name: 'Lyph',
	
			extends: Material,
	
			singular: "lyph",
	
			properties: {
				'thickness': _extends({}, (0, _schemas.oneOf)({ type: 'number' }, _extends({}, _schemas.rangeSchema), _extends({}, _schemas.distributionSchema)), {
					default: _schemas.universalDistanceRange,
					isRefinement: function isRefinement(a, b) {
						a = (0, _misc.normalizeToRange)(a);
						b = (0, _misc.normalizeToRange)(b);
						return a.min <= b.min && b.max <= a.max;
					}
				}),
				'length': _extends({}, (0, _schemas.oneOf)({ type: 'number' }, _extends({}, _schemas.rangeSchema), _extends({}, _schemas.distributionSchema)), {
					default: _schemas.universalDistanceRange,
					isRefinement: function isRefinement(a, b) {
						a = (0, _misc.normalizeToRange)(a);
						b = (0, _misc.normalizeToRange)(b);
						return a.min <= b.min && b.max <= a.max;
					}
				})
			},
	
			behavior: {
				new: function _new() {
					var _context;
	
					var vals = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
					var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
					if (options.customLyphBehaviorDone) {
						return;
					}
	
					vals = _extends({}, vals);
					(_context = vals, _defaults2.default).call(_context, {
						longitudinalBorders: [],
						radialBorders: [],
						axis: null
					});
					if (options.createAxis) {
						var _context2;
	
						var axis = Border.new();
						(_context2 = vals, _assign2.default).call(_context2, { axis: axis });
					}
					if (vals.axis) {
						vals.longitudinalBorders = (0, _union2.default)([].concat(_toConsumableArray(vals.longitudinalBorders)), [vals.axis]);
					}
					if (options.createRadialBorders) {
						if (options.createRadialBorders === true) {
							options.createRadialBorders = 2;
						}
						var nr = Math.min(options.createRadialBorders, 2);
						for (var i = vals.radialBorders.length; i < nr; ++i) {
							vals.radialBorders.push(Border.new());
						}
					}
					return Lyph.new(vals, _extends({}, options, { customLyphBehaviorDone: true }));
				}
			}
	
		}); /////////////////////////////////////////////////////////////////////////
	
	
		var HasPart = M.RELATIONSHIP({
	
			name: 'HasPart',
	
			extends: Has,
	
			singular: "has part",
	
			1: [Lyph, '0..*', { anchors: true, key: 'parts' }],
			2: [Lyph, '0..1'],
	
			noCycles: true
	
		});
	
		var HasLayer = M.RELATIONSHIP({
	
			name: 'HasLayer',
	
			extends: Has,
	
			singular: "has layer",
	
			1: [Lyph, '0..*', { anchors: true, key: 'layers' }],
			2: [Lyph, '0..1'],
	
			properties: {
				'relativePosition': {
					type: 'number',
					required: true,
					default: function _default() {
						var _context3;
	
						return (_context3 = (_context3 = [].concat(_toConsumableArray(this[1]['-->HasLayer'])), _map2.default).call(_context3, 'relativePosition').concat([0]), _max2.default).call(_context3) + 1;
					}
				}
				// TODO: CONSTRAINT - two layers of the same lyph cannot have the same relativePosition
			},
	
			noCycles: true
	
		});
	
		var HasPatch = M.RELATIONSHIP({
	
			name: 'HasPatch',
	
			extends: HasPart,
	
			singular: "has part",
	
			1: [Lyph, '0..*', { anchors: true, key: 'patches' }],
			2: [Lyph, '0..1'],
	
			properties: {
				'patchMap': { type: 'string' }
			},
	
			noCycles: true
	
		});
	
		var HasSegment = M.RELATIONSHIP({
	
			name: 'HasSegment',
	
			extends: HasPatch,
	
			singular: "has segment",
	
			1: [Lyph, '0..*', { anchors: true, key: 'segments' }],
			2: [Lyph, '0..1'],
	
			properties: {
				'relativePosition': {
					type: 'number',
					required: true,
					default: function _default() {
						var _context4;
	
						return (_context4 = (_context4 = [].concat(_toConsumableArray(this[1]['-->HasSegment'])), _map2.default).call(_context4, 'relativePosition').concat([0]), _max2.default).call(_context4) + 1;
					}
				}
				// TODO: CONSTRAINT - two segments of the same lyph cannot have the same relativePosition
			},
	
			noCycles: true
	
			// Note that two segments can only be formally adjacent if they share
			// a radial border (which must therefore exist; used to be enforced with the Cylindrical)
	
		});
	
		var Border = M.TYPED_RESOURCE({ ///////////////////////////////////////////
	
			name: 'Border',
	
			extends: Template,
	
			singular: "border",
	
			properties: {
				nature: _extends({}, (0, _schemas.oneOf)(_extends({}, (0, _schemas.enumArraySchema)('open', 'closed')), _extends({}, (0, _schemas.enumSchema)('open', 'closed'))), {
					default: ['open', 'closed'],
					required: true,
					isRefinement: function isRefinement(a, b) {
						a = new Set(a ? (0, _misc.wrapInArray)(a) : []);
						b = new Set(b ? (0, _misc.wrapInArray)(b) : []);
						return !(b.has('open') && !a.has('open')) && !(b.has('closed') && !a.has('closed'));
					}
				})
			}
	
		}); /////////////////////////////////////////////////////////////////////////
	
		var borderRel = function borderRel(name, Superclass, cardinality, key, singular) {
			var flags = arguments.length <= 5 || arguments[5] === undefined ? {} : arguments[5];
			var options = arguments.length <= 6 || arguments[6] === undefined ? {} : arguments[6];
			return M.RELATIONSHIP(_extends({
	
				name: name,
	
				extends: Superclass,
	
				singular: singular
	
			}, flags, {
	
				1: [Lyph, cardinality, _extends({}, options, { sustains: true, anchors: true, expand: true, key: key })],
				2: [Border, '1..1']
	
			}));
		};
	
		//// //// //// //// ////
		// We're using a cylindrical coordinate system:
		// + https://en.wikipedia.org/wiki/Cylindrical_coordinate_system
		// + longitudinal dimension = 'length' dimension
		// +              borders   = inner & outer borders
		// + radial dimension       = 'thickness' dimension
		// +        borders         = minus & plus borders
		//// //// //// //// ////
	
		/* 4 borders maximum; at least two longitudinal borders; optionally one or two radial borders */
		var HasBorder = borderRel('HasBorder', Has, '0..4', 'borders', 'has border', { abstract: true });
		var HasLongitudinalBorder = borderRel('HasLongitudinalBorder', HasBorder, '2..2', 'longitudinalBorders', 'has longitudinal border', {}, { auto: true, readonly: true });
		var HasRadialBorder = borderRel('HasRadialBorder', HasBorder, '0..2', 'radialBorders', 'has radial border');
	
		/* one of the longitudinal borders can be an axis */
		var HasAxis = borderRel('HasAxis', HasLongitudinalBorder, '0..1', 'axis', 'has axis');
	
		var CoalescenceScenario = M.TYPED_RESOURCE({ //////////////////////////////
	
			name: 'CoalescenceScenario',
	
			extends: Template,
	
			singular: "coalescence scenario"
	
		}); /////////////////////////////////////////////////////////////////////////
	
	
		var JoinsLyph = M.RELATIONSHIP({
	
			name: 'JoinsLyph',
	
			extends: PullsIntoTypeDefinition,
	
			singular: "joins lyph",
	
			1: [CoalescenceScenario, '2..2', { anchors: true, key: 'lyphs' }],
			2: [Lyph, '0..*']
	
		});
	
		var Coalescence = M.RESOURCE({ ////////////////////////////////////////////
	
			name: 'Coalescence',
	
			extends: Resource,
	
			singular: "coalescence"
	
			// coalescence between two or more lyph templates means
			// that at least one lyph from each participating lyph template
			// shares its outer layer with the other participating lyphs
	
		}); /////////////////////////////////////////////////////////////////////////
	
	
		var Coalesces = M.RELATIONSHIP({
	
			name: 'Coalesces',
	
			extends: IsRelatedTo,
	
			singular: "coalesces",
	
			1: [Coalescence, '2..2', { anchors: true, key: 'lyphs' }],
			2: [Lyph, '0..*', { key: 'coalescences' }]
	
		});
	
		var CoalescesLike = M.RELATIONSHIP({
	
			name: 'CoalescesLike',
	
			extends: IsRelatedTo,
	
			singular: "coalesces through",
	
			1: [Coalescence, '0..*', { anchors: true, key: 'scenarios' }],
			2: [CoalescenceScenario, '0..*']
	
		});
	
		var Node = M.TYPED_RESOURCE({ /////////////////////////////////////////////
	
			name: 'Node',
	
			extends: Template,
	
			singular: "node"
	
		}); /////////////////////////////////////////////////////////////////////////
	
	
		var NodeLocation = M.TYPED_RESOURCE({ /////////////////////////////////////
	
			name: 'NodeLocation',
	
			abstract: true,
	
			extends: Template,
			extendedBy: [Lyph, Border],
	
			singular: "node location"
	
		}); /////////////////////////////////////////////////////////////////////////
	
	
		var ContainsNode = M.RELATIONSHIP({
	
			name: 'ContainsNode',
	
			singular: "contains node",
	
			extends: PullsIntoTypeDefinition,
	
			1: [NodeLocation, '0..*'],
			2: [Node, '0..*', { anchors: true, key: 'locations' }]
	
		});
	});

/***/ },
/* 48 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(5);
	
	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(75);
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	
	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;
	
	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}
	
	module.exports = copyObject;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(270),
	    Map = __webpack_require__(109),
	    Promise = __webpack_require__(272),
	    Set = __webpack_require__(150),
	    WeakMap = __webpack_require__(274),
	    baseGetTag = __webpack_require__(291),
	    toSource = __webpack_require__(170);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;


/***/ },
/* 54 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(8),
	    isSymbol = __webpack_require__(58);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	module.exports = isKey;


/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(8),
	    isObjectLike = __webpack_require__(18);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}
	
	module.exports = isString;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(18);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(22);
	var Subscriber_1 = __webpack_require__(13);
	var Subscription_1 = __webpack_require__(127);
	var ObjectUnsubscribedError_1 = __webpack_require__(188);
	var SubjectSubscription_1 = __webpack_require__(415);
	var rxSubscriber_1 = __webpack_require__(130);
	/**
	 * @class SubjectSubscriber<T>
	 */
	var SubjectSubscriber = (function (_super) {
	    __extends(SubjectSubscriber, _super);
	    function SubjectSubscriber(destination) {
	        _super.call(this, destination);
	        this.destination = destination;
	    }
	    return SubjectSubscriber;
	}(Subscriber_1.Subscriber));
	exports.SubjectSubscriber = SubjectSubscriber;
	/**
	 * @class Subject<T>
	 */
	var Subject = (function (_super) {
	    __extends(Subject, _super);
	    function Subject() {
	        _super.call(this);
	        this.observers = [];
	        this.isUnsubscribed = false;
	        this.isStopped = false;
	        this.hasError = false;
	        this.thrownError = null;
	    }
	    Subject.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
	        return new SubjectSubscriber(this);
	    };
	    Subject.prototype.lift = function (operator) {
	        var subject = new AnonymousSubject(this, this);
	        subject.operator = operator;
	        return subject;
	    };
	    Subject.prototype.next = function (value) {
	        if (this.isUnsubscribed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        }
	        if (!this.isStopped) {
	            var observers = this.observers;
	            var len = observers.length;
	            var copy = observers.slice();
	            for (var i = 0; i < len; i++) {
	                copy[i].next(value);
	            }
	        }
	    };
	    Subject.prototype.error = function (err) {
	        if (this.isUnsubscribed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        }
	        this.hasError = true;
	        this.thrownError = err;
	        this.isStopped = true;
	        var observers = this.observers;
	        var len = observers.length;
	        var copy = observers.slice();
	        for (var i = 0; i < len; i++) {
	            copy[i].error(err);
	        }
	        this.observers.length = 0;
	    };
	    Subject.prototype.complete = function () {
	        if (this.isUnsubscribed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        }
	        this.isStopped = true;
	        var observers = this.observers;
	        var len = observers.length;
	        var copy = observers.slice();
	        for (var i = 0; i < len; i++) {
	            copy[i].complete();
	        }
	        this.observers.length = 0;
	    };
	    Subject.prototype.unsubscribe = function () {
	        this.isStopped = true;
	        this.isUnsubscribed = true;
	        this.observers = null;
	    };
	    Subject.prototype._subscribe = function (subscriber) {
	        if (this.isUnsubscribed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        }
	        else if (this.hasError) {
	            subscriber.error(this.thrownError);
	            return Subscription_1.Subscription.EMPTY;
	        }
	        else if (this.isStopped) {
	            subscriber.complete();
	            return Subscription_1.Subscription.EMPTY;
	        }
	        else {
	            this.observers.push(subscriber);
	            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
	        }
	    };
	    Subject.prototype.asObservable = function () {
	        var observable = new Observable_1.Observable();
	        observable.source = this;
	        return observable;
	    };
	    Subject.create = function (destination, source) {
	        return new AnonymousSubject(destination, source);
	    };
	    return Subject;
	}(Observable_1.Observable));
	exports.Subject = Subject;
	/**
	 * @class AnonymousSubject<T>
	 */
	var AnonymousSubject = (function (_super) {
	    __extends(AnonymousSubject, _super);
	    function AnonymousSubject(destination, source) {
	        _super.call(this);
	        this.destination = destination;
	        this.source = source;
	    }
	    AnonymousSubject.prototype.next = function (value) {
	        var destination = this.destination;
	        if (destination && destination.next) {
	            destination.next(value);
	        }
	    };
	    AnonymousSubject.prototype.error = function (err) {
	        var destination = this.destination;
	        if (destination && destination.error) {
	            this.destination.error(err);
	        }
	    };
	    AnonymousSubject.prototype.complete = function () {
	        var destination = this.destination;
	        if (destination && destination.complete) {
	            this.destination.complete();
	        }
	    };
	    AnonymousSubject.prototype._subscribe = function (subscriber) {
	        var source = this.source;
	        if (source) {
	            return this.source.subscribe(subscriber);
	        }
	        else {
	            return Subscription_1.Subscription.EMPTY;
	        }
	    };
	    return AnonymousSubject;
	}(Subject));
	exports.AnonymousSubject = AnonymousSubject;
	//# sourceMappingURL=Subject.js.map

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(22);
	var ScalarObservable_1 = __webpack_require__(181);
	var EmptyObservable_1 = __webpack_require__(128);
	var isScheduler_1 = __webpack_require__(62);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ArrayObservable = (function (_super) {
	    __extends(ArrayObservable, _super);
	    function ArrayObservable(array, scheduler) {
	        _super.call(this);
	        this.array = array;
	        this.scheduler = scheduler;
	        if (!scheduler && array.length === 1) {
	            this._isScalar = true;
	            this.value = array[0];
	        }
	    }
	    ArrayObservable.create = function (array, scheduler) {
	        return new ArrayObservable(array, scheduler);
	    };
	    /**
	     * Creates an Observable that emits some values you specify as arguments,
	     * immediately one after the other, and then emits a complete notification.
	     *
	     * <span class="informal">Emits the arguments you provide, then completes.
	     * </span>
	     *
	     * <img src="./img/of.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the arguments given, and the complete notification thereafter. It can
	     * be used for composing with other Observables, such as with {@link concat}.
	     * By default, it uses a `null` Scheduler, which means the `next`
	     * notifications are sent synchronously, although with a different Scheduler
	     * it is possible to determine when those notifications will be delivered.
	     *
	     * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
	     * var numbers = Rx.Observable.of(10, 20, 30);
	     * var letters = Rx.Observable.of('a', 'b', 'c');
	     * var interval = Rx.Observable.interval(1000);
	     * var result = numbers.concat(letters).concat(interval);
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link never}
	     * @see {@link throw}
	     *
	     * @param {...T} values Arguments that represent `next` values to be emitted.
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emissions of the `next` notifications.
	     * @return {Observable<T>} An Observable that emits each given input value.
	     * @static true
	     * @name of
	     * @owner Observable
	     */
	    ArrayObservable.of = function () {
	        var array = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            array[_i - 0] = arguments[_i];
	        }
	        var scheduler = array[array.length - 1];
	        if (isScheduler_1.isScheduler(scheduler)) {
	            array.pop();
	        }
	        else {
	            scheduler = null;
	        }
	        var len = array.length;
	        if (len > 1) {
	            return new ArrayObservable(array, scheduler);
	        }
	        else if (len === 1) {
	            return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
	        }
	        else {
	            return new EmptyObservable_1.EmptyObservable(scheduler);
	        }
	    };
	    ArrayObservable.dispatch = function (state) {
	        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
	        if (index >= count) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(array[index]);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var array = this.array;
	        var count = array.length;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ArrayObservable.dispatch, 0, {
	                array: array, index: index, count: count, subscriber: subscriber
	            });
	        }
	        else {
	            for (var i = 0; i < count && !subscriber.isUnsubscribed; i++) {
	                subscriber.next(array[i]);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayObservable;
	}(Observable_1.Observable));
	exports.ArrayObservable = ArrayObservable;
	//# sourceMappingURL=ArrayObservable.js.map

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(60);
	var ScalarObservable_1 = __webpack_require__(181);
	var EmptyObservable_1 = __webpack_require__(128);
	var concat_1 = __webpack_require__(184);
	var isScheduler_1 = __webpack_require__(62);
	/**
	 * Returns an Observable that emits the items in a specified Iterable before it begins to emit items emitted by the
	 * source Observable.
	 *
	 * <img src="./img/startWith.png" width="100%">
	 *
	 * @param {Values} an Iterable that contains the items you want the modified Observable to emit first.
	 * @return {Observable} an Observable that emits the items in the specified Iterable and then emits the items
	 * emitted by the source Observable.
	 * @method startWith
	 * @owner Observable
	 */
	function startWith() {
	    var array = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        array[_i - 0] = arguments[_i];
	    }
	    var scheduler = array[array.length - 1];
	    if (isScheduler_1.isScheduler(scheduler)) {
	        array.pop();
	    }
	    else {
	        scheduler = null;
	    }
	    var len = array.length;
	    if (len === 1) {
	        return concat_1.concatStatic(new ScalarObservable_1.ScalarObservable(array[0], scheduler), this);
	    }
	    else if (len > 1) {
	        return concat_1.concatStatic(new ArrayObservable_1.ArrayObservable(array, scheduler), this);
	    }
	    else {
	        return concat_1.concatStatic(new EmptyObservable_1.EmptyObservable(scheduler), this);
	    }
	}
	exports.startWith = startWith;
	//# sourceMappingURL=startWith.js.map

/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";
	function isScheduler(value) {
	    return value && typeof value.schedule === 'function';
	}
	exports.isScheduler = isScheduler;
	//# sourceMappingURL=isScheduler.js.map

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(68)
	  , IObject  = __webpack_require__(141)
	  , toObject = __webpack_require__(24)
	  , toLength = __webpack_require__(20)
	  , asc      = __webpack_require__(467);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(1)
	  , core    = __webpack_require__(64)
	  , fails   = __webpack_require__(5);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(6);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _templateObject = _taggedTemplateLiteral(["\n\t\t\t\tThe ", " event does not exist.\n\t\t\t"], ["\n\t\t\t\tThe ", " event does not exist.\n\t\t\t"]),
	    _templateObject2 = _taggedTemplateLiteral(["\n\t\t\t\tThe ", " property does not exist.\n\t\t\t"], ["\n\t\t\t\tThe ", " property does not exist.\n\t\t\t"]);
	
	exports.setEquals = setEquals;
	exports.copySetContent = copySetContent;
	
	var _Subject2 = __webpack_require__(59);
	
	var _BehaviorSubject = __webpack_require__(126);
	
	var _merge = __webpack_require__(185);
	
	var _map = __webpack_require__(42);
	
	var _misc = __webpack_require__(3);
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	function _extendableBuiltin(cls) {
		function ExtendableBuiltin() {
			var instance = Reflect.construct(cls, Array.from(arguments));
			Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
			return instance;
		}
	
		ExtendableBuiltin.prototype = Object.create(cls.prototype, {
			constructor: {
				value: cls,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
	
		if (Object.setPrototypeOf) {
			Object.setPrototypeOf(ExtendableBuiltin, cls);
		} else {
			ExtendableBuiltin.__proto__ = cls;
		}
	
		return ExtendableBuiltin;
	}
	
	function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return _instanceof(left, right); } }
	
	function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var $$set = Symbol('$$set');
	var $$addSubject = Symbol('$$addSubject');
	var $$deleteSubject = Symbol('$$deleteSubject');
	var $$valueObservable = Symbol('$$valueObservable');
	var $$disableNextReplay = Symbol('$$disableNextReplay');
	
	var AddReplaySubject = function (_Subject) {
		_inherits(AddReplaySubject, _Subject);
	
		function AddReplaySubject(initialSet) {
			_classCallCheck(this, AddReplaySubject);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddReplaySubject).call(this));
	
			_this._setReference = initialSet;
			return _this;
		}
	
		_createClass(AddReplaySubject, [{
			key: "normalSubscribe",
			value: function normalSubscribe() {
				this[$$disableNextReplay] = true;
				return this.subscribe.apply(this, arguments);
			}
			// noinspection JSDuplicatedDeclaration
	
		}, {
			key: "_subscribe",
			value: function _subscribe(subscriber) {
				var subscription = _get(Object.getPrototypeOf(AddReplaySubject.prototype), "_subscribe", this).call(this, subscriber);
				if (subscription && !subscription.isUnsubscribed && !this[$$disableNextReplay]) {
					this._setReference.forEach(subscriber.next.bind(subscriber));
				}
				this[$$disableNextReplay] = false;
				return subscription;
			}
		}]);
	
		return AddReplaySubject;
	}(_Subject2.Subject);
	
	var ObservableSet = function (_extendableBuiltin2) {
		_inherits(ObservableSet, _extendableBuiltin2);
	
		function ObservableSet() {
			var initialContent = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	
			_classCallCheck(this, ObservableSet);
	
			var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(ObservableSet).call(this));
	
			_this2[$$addSubject] = new AddReplaySubject(_this2);
			_this2[$$addSubject].normalSubscribe(_this2.add.bind(_this2));
	
			_this2[$$deleteSubject] = new _Subject2.Subject();
			_this2[$$deleteSubject].subscribe(_this2.delete.bind(_this2));
	
			initialContent.forEach(_this2.add.bind(_this2));
	
			var valueSubject = new _BehaviorSubject.BehaviorSubject(new Set(_this2));
			_this2[$$addSubject].normalSubscribe(function () {
				valueSubject.next(new Set(_this2));
			});
			_this2[$$deleteSubject].subscribe(function () {
				valueSubject.next(new Set(_this2));
			});
			_this2[$$valueObservable] = valueSubject.asObservable();
			return _this2;
		}
	
		_createClass(ObservableSet, [{
			key: "e",
			value: function e(op) {
				switch (op) {
					case 'add':
						{
							return this[$$addSubject];
						}
					case 'delete':
						{
							return this[$$deleteSubject];
						}
					default:
						(0, _misc.constraint)(false, (0, _misc.humanMsg)(_templateObject, op));
				}
			}
		}, {
			key: "p",
			value: function p(name) {
				switch (name) {
					case 'value':
						{
							return this[$$valueObservable];
						}
					default:
						(0, _misc.constraint)(false, (0, _misc.humanMsg)(_templateObject2, name));
				}
			}
		}, {
			key: "add",
			value: function add(obj) {
				if (!this.has(obj)) {
					_get(Object.getPrototypeOf(ObservableSet.prototype), "add", this).call(this, obj);
					this.e('add').next(obj);
				}
				return this;
			}
		}, {
			key: "delete",
			value: function _delete(obj) {
				if (this.has(obj)) {
					_get(Object.getPrototypeOf(ObservableSet.prototype), "delete", this).call(this, obj);
					this.e('delete').next(obj);
					return true;
				}
				return false;
			}
		}, {
			key: "clear",
			value: function clear() {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;
	
				try {
					for (var _iterator = this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var value = _step.value;
						this.delete(value);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
	
				return this;
			}
		}]);
	
		return ObservableSet;
	}(_extendableBuiltin(Set));
	
	exports.default = ObservableSet;
	function setEquals(setA, setB) {
		setA = new Set(setA);
		setB = new Set(setB);
		if (setA.size !== setB.size) return false;
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;
	
		try {
			for (var _iterator2 = setA[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var a = _step2.value;
				if (!setB.has(a)) return false;
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}
	
		return true;
	}
	
	function copySetContent(reference, newContent) {
		newContent = new Set(newContent);
		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;
	
		try {
			for (var _iterator3 = reference[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var e = _step3.value;
	
				if (!newContent.has(e)) {
					reference.delete(e);
				}
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}
	
		var _iteratorNormalCompletion4 = true;
		var _didIteratorError4 = false;
		var _iteratorError4 = undefined;
	
		try {
			for (var _iterator4 = newContent[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
				var _e = _step4.value;
	
				if (!reference.has(_e)) {
					reference.add(_e);
				}
			}
		} catch (err) {
			_didIteratorError4 = true;
			_iteratorError4 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion4 && _iterator4.return) {
					_iterator4.return();
				}
			} finally {
				if (_didIteratorError4) {
					throw _iteratorError4;
				}
			}
		}
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(33);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(460)
	  , $export = __webpack_require__(1)
	  , shared  = __webpack_require__(202)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(463)));
	
	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};
	
	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(14)){
	  var LIBRARY             = __webpack_require__(97)
	    , global              = __webpack_require__(4)
	    , fails               = __webpack_require__(5)
	    , $export             = __webpack_require__(1)
	    , $typed              = __webpack_require__(203)
	    , $buffer             = __webpack_require__(247)
	    , ctx                 = __webpack_require__(68)
	    , anInstance          = __webpack_require__(90)
	    , propertyDesc        = __webpack_require__(92)
	    , hide                = __webpack_require__(30)
	    , redefineAll         = __webpack_require__(101)
	    , isInteger           = __webpack_require__(234)
	    , toInteger           = __webpack_require__(93)
	    , toLength            = __webpack_require__(20)
	    , toIndex             = __webpack_require__(103)
	    , toPrimitive         = __webpack_require__(66)
	    , has                 = __webpack_require__(28)
	    , same                = __webpack_require__(457)
	    , classof             = __webpack_require__(134)
	    , isObject            = __webpack_require__(6)
	    , toObject            = __webpack_require__(24)
	    , isArrayIter         = __webpack_require__(232)
	    , create              = __webpack_require__(98)
	    , getPrototypeOf      = __webpack_require__(45)
	    , gOPN                = __webpack_require__(99).f
	    , isIterable          = __webpack_require__(474)
	    , getIterFn           = __webpack_require__(249)
	    , uid                 = __webpack_require__(104)
	    , wks                 = __webpack_require__(7)
	    , createArrayMethod   = __webpack_require__(63)
	    , createArrayIncludes = __webpack_require__(192)
	    , speciesConstructor  = __webpack_require__(241)
	    , ArrayIterators      = __webpack_require__(250)
	    , Iterators           = __webpack_require__(96)
	    , $iterDetect         = __webpack_require__(198)
	    , setSpecies          = __webpack_require__(102)
	    , arrayFill           = __webpack_require__(225)
	    , arrayCopyWithin     = __webpack_require__(438)
	    , $DP                 = __webpack_require__(15)
	    , $GOPD               = __webpack_require__(44)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });
	
	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };
	
	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };
	
	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };
	
	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };
	
	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });
	
	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };
	
	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };
	
	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };
	
	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });
	
	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });
	
	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });
	
	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});
	
	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});
	
	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(379);
	
	module.exports = function defaults() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(12);
	
	module.exports = function isObject() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(352),
	    listCacheDelete = __webpack_require__(353),
	    listCacheGet = __webpack_require__(354),
	    listCacheHas = __webpack_require__(355),
	    listCacheSet = __webpack_require__(356);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(11);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(56);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}
	
	module.exports = assignValue;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(56);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(112),
	    isFlattenable = __webpack_require__(347);
	
	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;
	
	  predicate || (predicate = isFlattenable);
	  result || (result = []);
	
	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = baseFlatten;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(289),
	    baseIsNaN = __webpack_require__(297);
	
	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return baseFindIndex(array, baseIsNaN, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseIndexOf;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(304),
	    baseMatchesProperty = __webpack_require__(305),
	    identity = __webpack_require__(171),
	    isArray = __webpack_require__(8),
	    property = __webpack_require__(403);
	
	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}
	
	module.exports = baseIteratee;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(349);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ },
/* 81 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(39);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ },
/* 83 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 85 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(161);
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(13);
	/**
	 * Groups pairs of consecutive emissions together and emits them as an array of
	 * two values.
	 *
	 * <span class="informal">Puts the current value and previous value together as
	 * an array, and emits that.</span>
	 *
	 * <img src="./img/pairwise.png" width="100%">
	 *
	 * The Nth emission from the source Observable will cause the output Observable
	 * to emit an array [(N-1)th, Nth] of the previous and the current value, as a
	 * pair. For this reason, `pairwise` emits on the second and subsequent
	 * emissions from the source Observable, but not on the first emission, because
	 * there is no previous value in that case.
	 *
	 * @example <caption>On every click (starting from the second), emit the relative distance to the previous click</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var pairs = clicks.pairwise();
	 * var distance = pairs.map(pair => {
	 *   var x0 = pair[0].clientX;
	 *   var y0 = pair[0].clientY;
	 *   var x1 = pair[1].clientX;
	 *   var y1 = pair[1].clientY;
	 *   return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
	 * });
	 * distance.subscribe(x => console.log(x));
	 *
	 * @see {@link buffer}
	 * @see {@link bufferCount}
	 *
	 * @return {Observable<Array<T>>} An Observable of pairs (as arrays) of
	 * consecutive values from the source Observable.
	 * @method pairwise
	 * @owner Observable
	 */
	function pairwise() {
	    return this.lift(new PairwiseOperator());
	}
	exports.pairwise = pairwise;
	var PairwiseOperator = (function () {
	    function PairwiseOperator() {
	    }
	    PairwiseOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new PairwiseSubscriber(subscriber));
	    };
	    return PairwiseOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var PairwiseSubscriber = (function (_super) {
	    __extends(PairwiseSubscriber, _super);
	    function PairwiseSubscriber(destination) {
	        _super.call(this, destination);
	        this.hasPrev = false;
	    }
	    PairwiseSubscriber.prototype._next = function (value) {
	        if (this.hasPrev) {
	            this.destination.next([this.prev, value]);
	        }
	        else {
	            this.hasPrev = true;
	        }
	        this.prev = value;
	    };
	    return PairwiseSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=pairwise.js.map

/***/ },
/* 88 */
/***/ function(module, exports) {

	"use strict";
	exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
	//# sourceMappingURL=isArray.js.map

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {"use strict";
	var objectTypes = {
	    'boolean': false,
	    'function': true,
	    'object': true,
	    'number': false,
	    'string': false,
	    'undefined': false
	};
	exports.root = (objectTypes[typeof self] && self) || (objectTypes[typeof window] && window);
	/* tslint:disable:no-unused-variable */
	var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
	var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
	var freeGlobal = objectTypes[typeof global] && global;
	if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
	    exports.root = freeGlobal;
	}
	//# sourceMappingURL=root.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(132)(module), (function() { return this; }())))

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(104)('meta')
	  , isObject = __webpack_require__(6)
	  , has      = __webpack_require__(28)
	  , setDesc  = __webpack_require__(15).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(5)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 93 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _schemas = __webpack_require__(32);
	
	var _TypedModule = __webpack_require__(31);
	
	var _TypedModule2 = _interopRequireDefault(_TypedModule);
	
	var _resources = __webpack_require__(16);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _typed = __webpack_require__(27);
	
	var _typed2 = _interopRequireDefault(_typed);
	
	var _lyphs = __webpack_require__(47);
	
	var _lyphs2 = _interopRequireDefault(_lyphs);
	
	var _processes = __webpack_require__(95);
	
	var _processes2 = _interopRequireDefault(_processes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _TypedModule2.default.create('measurables', [_resources2.default, _typed2.default, _lyphs2.default, _processes2.default], function (M, _ref) {
		var Resource = _ref.Resource;
		var IsRelatedTo = _ref.IsRelatedTo;
		var Template = _ref.Template;
		var Lyph = _ref.Lyph;
		var Material = _ref.Material;
		var Border = _ref.Border;
		var Node = _ref.Node;
		var Process = _ref.Process;
		var Has = _ref.Has;
		var PullsIntoTypeDefinition = _ref.PullsIntoTypeDefinition;
	
	
		var Measurable = M.TYPED_RESOURCE({ ///////////////////////////////////////
	
			name: 'Measurable',
	
			extends: Template,
	
			singular: "measurable",
	
			properties: {
				'quality': {
					type: 'string',
					isRefinement: function isRefinement(a, b) {
						return !a || a === b;
					}
				}
			}
	
		}); /////////////////////////////////////////////////////////////////////////
	
	
		var MeasuresMaterial = M.RELATIONSHIP({
	
			name: 'MeasuresMaterial',
	
			extends: PullsIntoTypeDefinition,
	
			singular: "measures material",
	
			1: [Measurable, '0..*', { anchors: true, key: 'materials' }],
			2: [Material, '0..*'],
	
			properties: {
				'dimensionality': _extends({}, _schemas.dimensionalitySchema)
			}
	
		});
	
		var MeasurableLocation = M.TYPED_RESOURCE({ ///////////////////////////////
	
			name: 'MeasurableLocation',
	
			abstract: true,
	
			extends: Template,
	
			extendedBy: [Lyph, Border, Node, Process],
	
			singular: "measurable location"
	
		}); /////////////////////////////////////////////////////////////////////////
	
	
		var HasMeasurable = M.RELATIONSHIP({
	
			name: 'HasMeasurable',
	
			extends: Has,
	
			singular: "has measurable",
	
			1: [MeasurableLocation, '0..*', { anchors: true, sustains: true, key: 'measurables' }],
			2: [Measurable, '0..1', { key: 'location' }]
	
		});
	
		var Causality = M.TYPED_RESOURCE({ ////////////////////////////////////////
	
			name: 'Causality',
	
			extends: Template,
	
			singular: "causality",
			plural: "causalities"
	
		}); /////////////////////////////////////////////////////////////////////////
	
	
		var _M$RELATIONSHIP = M.RELATIONSHIP([{
	
			name: 'Causes',
	
			extends: PullsIntoTypeDefinition,
	
			singular: "causes",
	
			1: [Measurable, '0..*', { key: 'effects' }],
			2: [Causality, '1..1', { anchors: true, key: 'cause' }]
	
		}, {
	
			name: 'Causes',
	
			extends: PullsIntoTypeDefinition,
	
			1: [Causality, '1..1', { anchors: true, key: 'effect' }],
			2: [Measurable, '0..*', { key: 'causes' }]
	
		}]);
	
		var _M$RELATIONSHIP2 = _slicedToArray(_M$RELATIONSHIP, 1);
	
		var Causes = _M$RELATIONSHIP2[0];
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _TypedModule = __webpack_require__(31);
	
	var _TypedModule2 = _interopRequireDefault(_TypedModule);
	
	var _misc = __webpack_require__(3);
	
	var _schemas = __webpack_require__(32);
	
	var _resources = __webpack_require__(16);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _typed = __webpack_require__(27);
	
	var _typed2 = _interopRequireDefault(_typed);
	
	var _lyphs = __webpack_require__(47);
	
	var _lyphs2 = _interopRequireDefault(_lyphs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _TypedModule2.default.create('processes', [_resources2.default, _typed2.default, _lyphs2.default], function (M, _ref) {
		var IsRelatedTo = _ref.IsRelatedTo;
		var Template = _ref.Template;
		var Material = _ref.Material;
		var Lyph = _ref.Lyph;
		var Node = _ref.Node;
		var Has = _ref.Has;
		var PullsIntoTypeDefinition = _ref.PullsIntoTypeDefinition;
	
	
		var Process = M.TYPED_RESOURCE({ //////////////////////////////////////////
	
			name: 'Process',
	
			extends: Template,
	
			singular: "process",
			plural: "processes",
	
			properties: {
				'transportPhenomenon': _extends({}, (0, _schemas.oneOf)(_extends({}, (0, _schemas.enumArraySchema)('advection', 'diffusion')), _extends({}, (0, _schemas.enumSchema)('advection', 'diffusion'))), {
					default: ['advection', 'diffusion'],
					required: true,
					isRefinement: function isRefinement(a, b) {
						a = new Set(a ? (0, _misc.wrapInArray)(a) : []);
						b = new Set(b ? (0, _misc.wrapInArray)(b) : []);
						return !(b.has('advection') && !a.has('advection')) && !(b.has('diffusion') && !a.has('diffusion'));
					}
				})
			}
	
		}); /////////////////////////////////////////////////////////////////////////
	
	
		var _M$RELATIONSHIP = M.RELATIONSHIP([{
	
			name: 'FlowsTo',
	
			extends: PullsIntoTypeDefinition,
	
			singular: "flows to",
	
			1: [Node, '0..*', { key: 'outgoingProcesses' }],
			2: [Process, '0..1', { anchors: true, key: 'source' }]
	
		}, {
	
			name: 'FlowsTo',
	
			extends: PullsIntoTypeDefinition,
	
			singular: "flows to",
	
			1: [Process, '0..1', { anchors: true, key: 'target' }],
			2: [Node, '0..*', { key: 'incomingProcesses' }]
	
		}]);
	
		var _M$RELATIONSHIP2 = _slicedToArray(_M$RELATIONSHIP, 1);
	
		var FlowsTo = _M$RELATIONSHIP2[0];
	
		var _M$RELATIONSHIP3 = M.RELATIONSHIP([{
	
			name: 'provisional_FlowsTo',
	
			extends: PullsIntoTypeDefinition,
	
			singular: "flows to",
	
			1: [Lyph, '0..*', { key: 'outgoingProcesses' }],
			2: [Process, '0..1', { anchors: true, key: 'sourceLyph' }]
	
		}, {
	
			name: 'provisional_FlowsTo',
	
			extends: PullsIntoTypeDefinition,
	
			singular: "flows to",
	
			1: [Process, '0..1', { anchors: true, key: 'targetLyph' }],
			2: [Lyph, '0..*', { key: 'incomingProcesses' }]
	
		}]);
	
		var _M$RELATIONSHIP4 = _slicedToArray(_M$RELATIONSHIP3, 1);
	
		var provisional_FlowsTo = _M$RELATIONSHIP4[0];
	
	
		var ConveysProcess = M.RELATIONSHIP({
	
			name: 'ConveysProcess',
	
			extends: Has,
	
			singular: "conveys process",
	
			1: [Lyph, '0..*', { anchors: true, key: 'processes' }],
			2: [Process, '0..1', { key: 'conveyingLyph' }]
	
		});
	
		var TransportsMaterial = M.RELATIONSHIP({
	
			name: 'TransportsMaterial',
	
			extends: Has,
	
			singular: "transports material",
	
			1: [Process, '0..*', { anchors: true, key: 'materials' }],
			2: [Material, '0..1']
	
		});
	
		var HasSegment = M.RELATIONSHIP({
	
			name: 'HasSegment',
	
			extends: Has,
	
			singular: "has segment",
	
			1: [Process, '0..*', { anchors: true, key: 'segments' }],
			2: [Process, '0..1']
	
		});
	
		var _M$RELATIONSHIP5 = M.RELATIONSHIP([Process, Node].map(function (Class) {
			return {
	
				name: 'HasChannel',
	
				extends: Has,
	
				singular: "has channel",
	
				1: [Class, '0..*', { anchors: true, key: 'channels' }],
				2: [Class, '0..1']
	
			};
		}));
	
		var _M$RELATIONSHIP6 = _slicedToArray(_M$RELATIONSHIP5, 1);
	
		var HasChannel = _M$RELATIONSHIP6[0];
	});

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(2)
	  , dPs         = __webpack_require__(450)
	  , enumBugKeys = __webpack_require__(228)
	  , IE_PROTO    = __webpack_require__(240)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(227)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(230).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(452)
	  , hiddenKeys = __webpack_require__(228).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(452)
	  , enumBugKeys = __webpack_require__(228);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(34);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(4)
	  , dP          = __webpack_require__(15)
	  , DESCRIPTORS = __webpack_require__(14)
	  , SPECIES     = __webpack_require__(7)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(93)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 104 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(84);
	
	module.exports = function isFunction() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(394);
	
	module.exports = function map() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(405);
	
	module.exports = function size() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(180);
	
	module.exports = function values() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(39),
	    root = __webpack_require__(11);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(357),
	    mapCacheDelete = __webpack_require__(358),
	    mapCacheGet = __webpack_require__(359),
	    mapCacheHas = __webpack_require__(360),
	    mapCacheSet = __webpack_require__(361);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(73),
	    stackClear = __webpack_require__(366),
	    stackDelete = __webpack_require__(367),
	    stackGet = __webpack_require__(368),
	    stackHas = __webpack_require__(369),
	    stackSet = __webpack_require__(370);
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;


/***/ },
/* 112 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(295),
	    isObject = __webpack_require__(12),
	    isObjectLike = __webpack_require__(18);
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}
	
	module.exports = baseIsEqual;


/***/ },
/* 114 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(8),
	    stringToPath = __webpack_require__(373);
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}
	
	module.exports = castPath;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(152);
	
	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}
	
	module.exports = cloneArrayBuffer;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(38),
	    isIterateeCall = __webpack_require__(348);
	
	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;
	
	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;
	
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(122);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;
	
	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	var getPrototype = overArg(nativeGetPrototype, Object);
	
	module.exports = getPrototype;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(122),
	    stubArray = __webpack_require__(175);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
	
	module.exports = getSymbols;


/***/ },
/* 120 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	module.exports = isHostObject;


/***/ },
/* 121 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;


/***/ },
/* 122 */
/***/ function(module, exports) {

	/**
	 * Creates a function that invokes `func` with its first argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(156);
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(125);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	module.exports = isArguments;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(21),
	    isObjectLike = __webpack_require__(18);
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	module.exports = isArrayLikeObject;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(59);
	var throwError_1 = __webpack_require__(433);
	var ObjectUnsubscribedError_1 = __webpack_require__(188);
	/**
	 * @class BehaviorSubject<T>
	 */
	var BehaviorSubject = (function (_super) {
	    __extends(BehaviorSubject, _super);
	    function BehaviorSubject(_value) {
	        _super.call(this);
	        this._value = _value;
	    }
	    BehaviorSubject.prototype.getValue = function () {
	        if (this.hasError) {
	            throwError_1.throwError(this.thrownError);
	        }
	        else if (this.isUnsubscribed) {
	            throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
	        }
	        else {
	            return this._value;
	        }
	    };
	    Object.defineProperty(BehaviorSubject.prototype, "value", {
	        get: function () {
	            return this.getValue();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    BehaviorSubject.prototype._subscribe = function (subscriber) {
	        var subscription = _super.prototype._subscribe.call(this, subscriber);
	        if (subscription && !subscription.isUnsubscribed) {
	            subscriber.next(this._value);
	        }
	        return subscription;
	    };
	    BehaviorSubject.prototype.next = function (value) {
	        _super.prototype.next.call(this, this._value = value);
	    };
	    return BehaviorSubject;
	}(Subject_1.Subject));
	exports.BehaviorSubject = BehaviorSubject;
	//# sourceMappingURL=BehaviorSubject.js.map

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isArray_1 = __webpack_require__(88);
	var isObject_1 = __webpack_require__(430);
	var isFunction_1 = __webpack_require__(189);
	var tryCatch_1 = __webpack_require__(190);
	var errorObject_1 = __webpack_require__(131);
	var UnsubscriptionError_1 = __webpack_require__(429);
	/**
	 * Represents a disposable resource, such as the execution of an Observable. A
	 * Subscription has one important method, `unsubscribe`, that takes no argument
	 * and just disposes the resource held by the subscription.
	 *
	 * Additionally, subscriptions may be grouped together through the `add()`
	 * method, which will attach a child Subscription to the current Subscription.
	 * When a Subscription is unsubscribed, all its children (and its grandchildren)
	 * will be unsubscribed as well.
	 *
	 * @class Subscription
	 */
	var Subscription = (function () {
	    /**
	     * @param {function(): void} [unsubscribe] A function describing how to
	     * perform the disposal of resources when the `unsubscribe` method is called.
	     */
	    function Subscription(unsubscribe) {
	        /**
	         * A flag to indicate whether this Subscription has already been unsubscribed.
	         * @type {boolean}
	         */
	        this.isUnsubscribed = false;
	        if (unsubscribe) {
	            this._unsubscribe = unsubscribe;
	        }
	    }
	    /**
	     * Disposes the resources held by the subscription. May, for instance, cancel
	     * an ongoing Observable execution or cancel any other type of work that
	     * started when the Subscription was created.
	     * @return {void}
	     */
	    Subscription.prototype.unsubscribe = function () {
	        var hasErrors = false;
	        var errors;
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isUnsubscribed = true;
	        var _a = this, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
	        this._subscriptions = null;
	        if (isFunction_1.isFunction(_unsubscribe)) {
	            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
	            if (trial === errorObject_1.errorObject) {
	                hasErrors = true;
	                (errors = errors || []).push(errorObject_1.errorObject.e);
	            }
	        }
	        if (isArray_1.isArray(_subscriptions)) {
	            var index = -1;
	            var len = _subscriptions.length;
	            while (++index < len) {
	                var sub = _subscriptions[index];
	                if (isObject_1.isObject(sub)) {
	                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
	                    if (trial === errorObject_1.errorObject) {
	                        hasErrors = true;
	                        errors = errors || [];
	                        var err = errorObject_1.errorObject.e;
	                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
	                            errors = errors.concat(err.errors);
	                        }
	                        else {
	                            errors.push(err);
	                        }
	                    }
	                }
	            }
	        }
	        if (hasErrors) {
	            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
	        }
	    };
	    /**
	     * Adds a tear down to be called during the unsubscribe() of this
	     * Subscription.
	     *
	     * If the tear down being added is a subscription that is already
	     * unsubscribed, is the same reference `add` is being called on, or is
	     * `Subscription.EMPTY`, it will not be added.
	     *
	     * If this subscription is already in an `isUnsubscribed` state, the passed
	     * tear down logic will be executed immediately.
	     *
	     * @param {TeardownLogic} teardown The additional logic to execute on
	     * teardown.
	     * @return {Subscription} Returns the Subscription used or created to be
	     * added to the inner subscriptions list. This Subscription can be used with
	     * `remove()` to remove the passed teardown logic from the inner subscriptions
	     * list.
	     */
	    Subscription.prototype.add = function (teardown) {
	        if (!teardown || (teardown === this) || (teardown === Subscription.EMPTY)) {
	            return;
	        }
	        var sub = teardown;
	        switch (typeof teardown) {
	            case 'function':
	                sub = new Subscription(teardown);
	            case 'object':
	                if (sub.isUnsubscribed || typeof sub.unsubscribe !== 'function') {
	                    break;
	                }
	                else if (this.isUnsubscribed) {
	                    sub.unsubscribe();
	                }
	                else {
	                    (this._subscriptions || (this._subscriptions = [])).push(sub);
	                }
	                break;
	            default:
	                throw new Error('Unrecognized teardown ' + teardown + ' added to Subscription.');
	        }
	        return sub;
	    };
	    /**
	     * Removes a Subscription from the internal list of subscriptions that will
	     * unsubscribe during the unsubscribe process of this Subscription.
	     * @param {Subscription} subscription The subscription to remove.
	     * @return {void}
	     */
	    Subscription.prototype.remove = function (subscription) {
	        // HACK: This might be redundant because of the logic in `add()`
	        if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
	            return;
	        }
	        var subscriptions = this._subscriptions;
	        if (subscriptions) {
	            var subscriptionIndex = subscriptions.indexOf(subscription);
	            if (subscriptionIndex !== -1) {
	                subscriptions.splice(subscriptionIndex, 1);
	            }
	        }
	    };
	    Subscription.EMPTY = (function (empty) {
	        empty.isUnsubscribed = true;
	        return empty;
	    }(new Subscription()));
	    return Subscription;
	}());
	exports.Subscription = Subscription;
	//# sourceMappingURL=Subscription.js.map

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(22);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var EmptyObservable = (function (_super) {
	    __extends(EmptyObservable, _super);
	    function EmptyObservable(scheduler) {
	        _super.call(this);
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer and immediately
	     * emits a complete notification.
	     *
	     * <span class="informal">Just emits 'complete', and nothing else.
	     * </span>
	     *
	     * <img src="./img/empty.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the complete notification. It can be used for composing with other
	     * Observables, such as in a {@link mergeMap}.
	     *
	     * @example <caption>Emit the number 7, then complete.</caption>
	     * var result = Rx.Observable.empty().startWith(7);
	     * result.subscribe(x => console.log(x));
	     *
	     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
	     * var interval = Rx.Observable.interval(1000);
	     * var result = interval.mergeMap(x =>
	     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
	     * );
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link never}
	     * @see {@link of}
	     * @see {@link throw}
	     *
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emission of the complete notification.
	     * @return {Observable} An "empty" Observable: emits only the complete
	     * notification.
	     * @static true
	     * @name empty
	     * @owner Observable
	     */
	    EmptyObservable.create = function (scheduler) {
	        return new EmptyObservable(scheduler);
	    };
	    EmptyObservable.dispatch = function (arg) {
	        var subscriber = arg.subscriber;
	        subscriber.complete();
	    };
	    EmptyObservable.prototype._subscribe = function (subscriber) {
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
	        }
	        else {
	            subscriber.complete();
	        }
	    };
	    return EmptyObservable;
	}(Observable_1.Observable));
	exports.EmptyObservable = EmptyObservable;
	//# sourceMappingURL=EmptyObservable.js.map

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(41);
	var subscribeToResult_1 = __webpack_require__(43);
	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable, emitting values only from the most recently projected Observable.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link switch}.</span>
	 *
	 * <img src="./img/switchMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an (so-called "inner") Observable. Each time it observes one of these
	 * inner Observables, the output Observable begins emitting the items emitted by
	 * that inner Observable. When a new inner Observable is emitted, `switchMap`
	 * stops emitting items from the earlier-emitted inner Observable and begins
	 * emitting items from the new one. It continues to behave like this for
	 * subsequent inner Observables.
	 *
	 * @example <caption>Rerun an interval Observable on every click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMap}
	 * @see {@link exhaustMap}
	 * @see {@link mergeMap}
	 * @see {@link switch}
	 * @see {@link switchMapTo}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and taking only the values from the most recently
	 * projected inner Observable.
	 * @method switchMap
	 * @owner Observable
	 */
	function switchMap(project, resultSelector) {
	    return this.lift(new SwitchMapOperator(project, resultSelector));
	}
	exports.switchMap = switchMap;
	var SwitchMapOperator = (function () {
	    function SwitchMapOperator(project, resultSelector) {
	        this.project = project;
	        this.resultSelector = resultSelector;
	    }
	    SwitchMapOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
	    };
	    return SwitchMapOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SwitchMapSubscriber = (function (_super) {
	    __extends(SwitchMapSubscriber, _super);
	    function SwitchMapSubscriber(destination, project, resultSelector) {
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.index = 0;
	    }
	    SwitchMapSubscriber.prototype._next = function (value) {
	        var result;
	        var index = this.index++;
	        try {
	            result = this.project(value, index);
	        }
	        catch (error) {
	            this.destination.error(error);
	            return;
	        }
	        this._innerSub(result, value, index);
	    };
	    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	        }
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
	    };
	    SwitchMapSubscriber.prototype._complete = function () {
	        var innerSubscription = this.innerSubscription;
	        if (!innerSubscription || innerSubscription.isUnsubscribed) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapSubscriber.prototype._unsubscribe = function () {
	        this.innerSubscription = null;
	    };
	    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.remove(innerSub);
	        this.innerSubscription = null;
	        if (this.isStopped) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (this.resultSelector) {
	            this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            this.destination.next(innerValue);
	        }
	    };
	    SwitchMapSubscriber.prototype._tryNotifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var result;
	        try {
	            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return SwitchMapSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=switchMap.js.map

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(89);
	var Symbol = root_1.root.Symbol;
	exports.$$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
	    Symbol.for('rxSubscriber') : '@@rxSubscriber';
	//# sourceMappingURL=rxSubscriber.js.map

/***/ },
/* 131 */
/***/ function(module, exports) {

	"use strict";
	// typeof any so that it we don't have to cast when comparing a result to the error object
	exports.errorObject = { e: {} };
	//# sourceMappingURL=errorObject.js.map

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(7)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(30)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(48)
	  , TAG = __webpack_require__(7)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(68)
	  , call        = __webpack_require__(446)
	  , isArrayIter = __webpack_require__(232)
	  , anObject    = __webpack_require__(2)
	  , toLength    = __webpack_require__(20)
	  , getIterFn   = __webpack_require__(249)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(15).f
	  , has = __webpack_require__(28)
	  , TAG = __webpack_require__(7)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1)
	  , defined = __webpack_require__(49)
	  , fails   = __webpack_require__(5)
	  , spaces  = __webpack_require__(245)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Field = undefined;
	
	var _Field = __webpack_require__(25);
	
	Object.defineProperty(exports, 'Field', {
	  enumerable: true,
	  get: function get() {
	    return _Field.Field;
	  }
	});
	
	__webpack_require__(206);
	
	__webpack_require__(211);
	
	__webpack_require__(208);
	
	__webpack_require__(210);
	
	__webpack_require__(207);
	
	__webpack_require__(209);

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _TypedModule = __webpack_require__(31);
	
	var _TypedModule2 = _interopRequireDefault(_TypedModule);
	
	var _resources = __webpack_require__(16);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _typed = __webpack_require__(27);
	
	var _typed2 = _interopRequireDefault(_typed);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _TypedModule2.default.create('groups', [_resources2.default, _typed2.default], function (M, _ref) {
		var IsRelatedTo = _ref.IsRelatedTo;
		var Template = _ref.Template;
		var PullsIntoTypeDefinition = _ref.PullsIntoTypeDefinition;
	
	
		var Group = M.TYPED_RESOURCE({ /////////////////////////////////////////
	
			name: 'Group',
	
			extends: Template,
	
			singular: "group"
	
		}); /////////////////////////////////////////////////////////////////////////////
	
	
		var IncludesElement = M.RELATIONSHIP({
	
			name: 'IncludesElement',
	
			extends: PullsIntoTypeDefinition,
	
			singular: "includes element",
	
			1: [Group, '0..*', { anchors: true, key: 'elements' }],
			2: [Template, '0..*']
	
		});
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.event = exports.property = exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _templateObject = _taggedTemplateLiteral(['\n\t\t\t\t\tBut there is an event with that name, so\n\t\t\t\t\tyou could use .e(\'', '\')\n\t\t\t\t'], ['\n\t\t\t\t\tBut there is an event with that name, so\n\t\t\t\t\tyou could use .e(\'', '\')\n\t\t\t\t']),
	    _templateObject2 = _taggedTemplateLiteral(['\n\t\t\t\t\tNo property \'', '\' exists.\n\t\t\t\t\t', '\n\t\t\t\t'], ['\n\t\t\t\t\tNo property \'', '\' exists.\n\t\t\t\t\t', '\n\t\t\t\t']);
	
	var _includes = __webpack_require__(257);
	
	var _includes2 = _interopRequireDefault(_includes);
	
	var _isArray = __webpack_require__(146);
	
	var _isArray2 = _interopRequireDefault(_isArray);
	
	var _isString = __webpack_require__(148);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	var _set = __webpack_require__(267);
	
	var _set2 = _interopRequireDefault(_set);
	
	var _entries = __webpack_require__(17);
	
	var _entries2 = _interopRequireDefault(_entries);
	
	var _isEqual2 = __webpack_require__(172);
	
	var _isEqual3 = _interopRequireDefault(_isEqual2);
	
	var _Subject = __webpack_require__(59);
	
	var _BehaviorSubject = __webpack_require__(126);
	
	var _never = __webpack_require__(420);
	
	var _combineLatest = __webpack_require__(182);
	
	var _distinctUntilChanged = __webpack_require__(422);
	
	var _filter = __webpack_require__(29);
	
	var _takeUntil = __webpack_require__(187);
	
	var _skip = __webpack_require__(424);
	
	var _map = __webpack_require__(42);
	
	var _withLatestFrom = __webpack_require__(426);
	
	__webpack_require__(23);
	
	var _misc = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return _instanceof(left, right); } }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }
	
	function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var $$events = Symbol('$$events');
	var $$properties = Symbol('$$properties');
	var $$settableProperties = Symbol('$$settableProperties');
	var $$initialize = Symbol('$$initialize');
	var $$takeUntil = Symbol('$$takeUntil');
	var $$filterBy = Symbol('$$filterBy');
	var $$currentValues = Symbol('$$currentValues');
	
	/**
	 * Use this as a subclass (or just mix it in) to provide support for
	 * events and observable properties through Kefir.js.
	 *
	 * @export
	 * @class ValueTracker
	 */
	
	var ValueTracker = function () {
		_createClass(ValueTracker, [{
			key: $$initialize,
			value: function value() {
				if (this[$$events]) {
					return;
				}
				this[$$events] = {};
				this[$$properties] = {};
				this[$$settableProperties] = {};
				this[$$currentValues] = {};
	
				/* add the events and properties added with ES7 annotations */
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;
	
				try {
					for (var _iterator = (_context = this.constructor[$$events] || {}, _entries2.default).call(_context)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var _context;
	
						var _step$value = _slicedToArray(_step.value, 2);
	
						var key = _step$value[0];
						var options = _step$value[1];
	
						this.newEvent(key, options);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
	
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;
	
				try {
					for (var _iterator2 = (_context2 = this.constructor[$$properties] || {}, _entries2.default).call(_context2)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var _context2;
	
						var _step2$value = _slicedToArray(_step2.value, 2);
	
						var key = _step2$value[0];
						var options = _step2$value[1];
	
						this.newProperty(key, options);
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			}
		}]);
	
		function ValueTracker() {
			_classCallCheck(this, ValueTracker);
	
			this[$$takeUntil] = (0, _never.never)();
			this[$$filterBy] = function () {
				return true;
			};
		}
	
		_createClass(ValueTracker, [{
			key: 'setValueTrackerOptions',
			value: function setValueTrackerOptions(_ref) {
				var _ref$takeUntil = _ref.takeUntil;
				var takeUntil = _ref$takeUntil === undefined ? (0, _never.never)() : _ref$takeUntil;
				var _ref$filterBy = _ref.filterBy;
				var filterBy = _ref$filterBy === undefined ? function () {
					return true;
				} : _ref$filterBy;
	
				this[$$takeUntil] = takeUntil;
				this[$$filterBy] = filterBy;
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
	
		}, {
			key: 'newEvent',
			value: function newEvent(name) {
				var _context3;
	
				var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
				_objectDestructuringEmpty(_ref2);
	
				this[$$initialize]();
	
				/* is the event name already taken? */
				(0, _misc.constraint)(!this[$$events][name], 'There is already an event \'' + name + '\' on this object.');
				(0, _misc.constraint)(!this[$$properties][name], 'There is already a property \'' + name + '\' on this object.');
	
				this[$$events][name] = (_context3 = (_context3 = new _Subject.Subject(), _takeUntil.takeUntil).call(_context3, this[$$takeUntil]), _filter.filter).call(_context3, this[$$filterBy]);
	
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
	
		}, {
			key: 'newProperty',
			value: function newProperty(name) {
				var _context4,
				    _this = this;
	
				var _ref3 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
				var _ref3$readonly = _ref3.readonly;
				var readonly = _ref3$readonly === undefined ? false : _ref3$readonly;
				var _ref3$isEqual = _ref3.isEqual;
				var isEqual = _ref3$isEqual === undefined ? _isEqual3.default : _ref3$isEqual;
				var _ref3$isValid = _ref3.isValid;
				var isValid = _ref3$isValid === undefined ? function () {
					return true;
				} : _ref3$isValid;
				var initial = _ref3.initial;
	
				this[$$initialize]();
	
				/* is the property name already taken? */
				(0, _misc.constraint)(!this[$$events][name], 'There is already an event \'' + name + '\' on this object.');
				(0, _misc.constraint)(!this[$$properties][name], 'There is already a property \'' + name + '\' on this object.');
	
				/* if isValid is an array, check for inclusion */
				if ((_context4 = isValid, _isArray2.default).call(_context4)) {
					var _context5;
	
					isValid = (_context5 = isValid, _includes2.default).bind(_context5);
				}
	
				/* define the bus which manages the property */
				var subject = this[$$settableProperties][name] = (_context4 = (_context4 = (_context4 = (_context4 = new _BehaviorSubject.BehaviorSubject(initial), _filter.filter).call(_context4, this[$$filterBy]), _filter.filter).call(_context4, isValid.bind(this)), _takeUntil.takeUntil).call(_context4, this[$$takeUntil]), _distinctUntilChanged.distinctUntilChanged).call(_context4, isEqual.bind(this));
				this[$$properties][name] = readonly ? subject.asObservable() : subject;
	
				/* keep track of current value */
				this[$$properties][name].subscribe(function (v) {
					_this[$$currentValues][name] = v;
				});
	
				/* create event version of the property */
				this[$$events][name] = (_context4 = subject.asObservable(), _skip.skip).call(_context4, 1); // skip 'current value' on subscribe
	
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
	
		}, {
			key: 'e',
			value: function e(name) {
				this[$$initialize]();
				return this[$$events][name] || (0, _never.never)();
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
	
		}, {
			key: 'p',
			value: function p(nameOrDeps) {
				var optionalPassiveDeps = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
				var optionalTransformer = arguments.length <= 2 || arguments[2] === undefined ? function () {
					for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
					}
	
					return args;
				} : arguments[2];
	
				this[$$initialize]();
				if (_isArray2.default.call(nameOrDeps)) {
					var _context6, _ref4;
	
					return (_ref4 = (_context6 = _combineLatest.combineLatest.apply(undefined, _toConsumableArray(nameOrDeps.map(this.p.bind(this)))), _withLatestFrom.withLatestFrom)).call.apply(_ref4, [_context6].concat(_toConsumableArray(optionalPassiveDeps.map(this.p.bind(this))), [// TODO: withLatestFrom doesn't work; provides old values
					function (active) {
						for (var _len2 = arguments.length, passive = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
							passive[_key2 - 1] = arguments[_key2];
						}
	
						return optionalTransformer.apply(undefined, _toConsumableArray(active).concat(passive));
					}]));
				} else if (_isString2.default.call(nameOrDeps)) {
					if (!this[$$properties][nameOrDeps]) {
						var butEventExists = this[$$events][nameOrDeps] ? (0, _misc.humanMsg)(_templateObject, nameOrDeps) : '';
						throw new Error((0, _misc.humanMsg)(_templateObject2, nameOrDeps, butEventExists));
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
	
		}, {
			key: 'pSubject',
			value: function pSubject(name) {
				this[$$initialize]();
				return this[$$settableProperties][name];
			}
		}]);
	
		return ValueTracker;
	}();
	
	exports.default = ValueTracker;
	;
	
	var property = exports.property = function property() {
		var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		return function (target, key) {
			_set2.default.call(target, ['constructor', $$properties, key], options);
			return _extends({
				get: function get() {
					return this[$$currentValues][key];
				}
			}, !options.readonly && {
				set: function set(value) {
					this.p(key).next(value);
				}
			});
		};
	};
	
	var event = exports.event = function event() {
		var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		return function (target, key) {
			var match = key.match(/^(\w+)Event$/);
			(0, _misc.constraint)(match, '@event() decorators require a name that ends in \'Event\'.');
			var name = match[1];
			_set2.default.call(target, ['constructor', $$events, name], options);
			return {
				get: function get() {
					return this.e(name);
				}
			};
		};
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(48);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 142 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["Graph"] = factory();
		else
			root["Graph"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ({
	
	/***/ 0:
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(49);
	
	
	/***/ },
	
	/***/ 49:
	/***/ function(module, exports) {
	
		'use strict';
		
		//  ////////////////////////////////////////////////////////////////////////////////////////////////
		//  // Symbols for private members /////////////////////////////////////////////////////////////////
		//  ////////////////////////////////////////////////////////////////////////////////////////////////
		
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _bind = Function.prototype.bind;
		
		var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();
		
		var _get = function get(_x9, _x10, _x11) { var _again = true; _function: while (_again) { var object = _x9, property = _x10, receiver = _x11; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x9 = parent; _x10 = property; _x11 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
		
		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
		
		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
		
		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		var _vertices = Symbol("vertices");
		var _edges = Symbol("edges");
		var _reverseEdges = Symbol("reverse edges");
		var _sources = Symbol("sources");
		var _sinks = Symbol("sinks");
		var _edgeCount = Symbol("edge count");
		
		var _listeners = Symbol("listeners");
		var _trigger = Symbol("trigger");
		
		var _verticesFrom = Symbol("vertices from");
		var _verticesTo = Symbol("vertices to");
		var _verticesWithPathTo = Symbol("vertices with path to");
		var _verticesWithPathFrom = Symbol("vertices with path from");
		var _paths = Symbol("paths");
		
		var _expectVertices = Symbol("expect vertices");
		var _expectVerticesAbsent = Symbol("expect vertex absent");
		var _expectEdges = Symbol("expect edge");
		var _expectEdgesAbsent = Symbol("expect edge absent");
		var _expectNoConnectedEdges = Symbol("expect no connected edges");
		
		//  ////////////////////////////////////////////////////////////////////////////////////////////////
		//  // Graph class /////////////////////////////////////////////////////////////////////////////////
		//  ////////////////////////////////////////////////////////////////////////////////////////////////
		
		/**
		 * @class Graph
		 * @classdesc The main class of this library, to be used for representing a mathematical (di)graph.
		 *
		 * @description Constructor arguments can be used to supply initial vertices and edges.
		 * @param ...parts {Array.<Array>}
		 *        a short notation for vertices and edges to initially add to the graph;
		 *        A vertex should be an array of the form `[key, value]`.
		 *        An edge should be an array of the form `[[from, to], value]`.
		 *        Later values of vertices or edges in this list will overwrite earlier
		 *        values, but vertices need not precede their edges. Vertices that are
		 *        connected but store no value need not be listed at all.
		 * @example
		 * var map = new Graph(
		 *     ['Amsterdam',             { population: 825000 }], // vertex
		 *     ['Leiden',                { population: 122000 }], // vertex
		 *     [['Amsterdam', 'Leiden'], { distance:   "40km" }]  // edge
		 * );
		 */
		
		var Graph = (function () {
			function Graph() {
				_classCallCheck(this, Graph);
		
				/* storage */
				this[_vertices] = new Map(); // Map.< string, * >
				this[_edges] = new Map(); // Map.< string, Map.<string, *> >
		
				/* bookkeeping */
				this[_reverseEdges] = new Map(); // Map.< string, Set.<*> >
				this[_sources] = new Set(); // Set.< string >
				this[_sinks] = new Set(); // Set.< string >
				this[_edgeCount] = 0;
		
				/* listeners */
				this[_listeners] = new Map();
		
				/* add vertices and values from constructor arguments */
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;
		
				try {
					for (var _len = arguments.length, parts = Array(_len), _key = 0; _key < _len; _key++) {
						parts[_key] = arguments[_key];
					}
		
					for (var _iterator = parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var _step$value = _slicedToArray(_step.value, 2);
		
						var key = _step$value[0];
						var value = _step$value[1];
		
						if (Array.isArray(key)) {
							/////////////// an edge
		
							var _key2 = _slicedToArray(key, 2);
		
							var from = _key2[0];
							var to = _key2[1];
		
							this.createEdge(from, to, value);
						} else {
							//////////////////////////////// a vertex
							this.addVertex(key, value);
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator["return"]) {
							_iterator["return"]();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
		
			//  ////////////////////////////////////////////////////////////////////////////////////////////////
			//  // Errors //////////////////////////////////////////////////////////////////////////////////////
			//  ////////////////////////////////////////////////////////////////////////////////////////////////
		
			/**
		  * @class
		  * @classdesc This type of error is thrown when specific vertices are expected not to exist, but do.
		  * @extends Error
		  */
		
			/////////////////////////////////////
			////////// Event Handling //////////
			/////////////////////////////////////
		
			/**
		  * Register an event handler.
		  * @param event   {string}   the event to listen for
		  * @param handler {Function} the function to call for each such event fired, receiving its corresponding value
		  */
		
			_createClass(Graph, [{
				key: "on",
				value: function on(event, handler) {
					if (!this[_listeners].has(event)) {
						this[_listeners].set(event, new Set());
					}
					this[_listeners].get(event).add(handler);
				}
		
				/**
		   * Deregister a previously registered event handler.
		   * @param event   {string}   the event used to originally register a handler
		   * @param handler {Function} the handler originally registered
		   */
			}, {
				key: "off",
				value: function off(event, handler) {
					if (this[_listeners].has(event)) {
						this[_listeners].get(event)["delete"](handler);
					}
				}
			}, {
				key: _trigger,
				value: function value(event, _value) {
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;
		
					try {
						for (var _iterator2 = (this[_listeners].get(event) || [])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var handler = _step2.value;
		
							handler(_value);
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
								_iterator2["return"]();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}
				}
		
				/**
		   * An event that is triggered just after a vertex is added to this graph.
		   * Handlers receive the new vertex `[key, value]` as an argument.
		   * @event vertex-added
		   * @memberof Graph
		   * @instance
		   * @see {@link Graph#on}
		   * @see {@link Graph#off}
		   */
				/**
		   * An event that is triggered just after a vertex is removed from this graph.
		   * Handlers receive the vertex key as an argument.
		   * @event vertex-removed
		   * @memberof Graph
		   * @instance
		   * @see {@link Graph#on}
		   * @see {@link Graph#off}
		   */
				/**
		   * An event that is triggered after a vertex in this graph is modified.
		   * It is also triggered after any {@link #Graph#event_vertex-added|"vertex-added"} event.
		   * Handlers receive the vertex `[key, value]` as an argument.
		   * @event vertex-modified
		   * @memberof Graph
		   * @instance
		   * @see {@link Graph#on}
		   * @see {@link Graph#off}
		   */
				/**
		   * An event that is triggered just after an edge is added to this graph.
		   * Handlers receive the new edge `[[from, to], value]` as an argument.
		   * @event edge-added
		   * @memberof Graph
		   * @instance
		   * @see {@link Graph#on}
		   * @see {@link Graph#off}
		   */
				/**
		   * An event that is triggered just after an edge is removed from this graph.
		   * Handlers receive the edge key `[from, to]` as an argument.
		   * @event edge-removed
		   * @memberof Graph
		   * @instance
		   * @see {@link Graph#on}
		   * @see {@link Graph#off}
		   */
				/**
		   * An event that is triggered after an edge in this graph is modified.
		   * It is also triggered after any {@link #Graph#event_edge-added|"edge-added"} event.
		   * Handlers receive the edge `[[from, to], value]` as an argument.
		   * @event edge-modified
		   * @memberof Graph
		   * @instance
		   * @see {@link Graph#on}
		   * @see {@link Graph#off}
		   */
		
				//////////////////////////////
				////////// Vertices //////////
				//////////////////////////////
		
				////////// creating them //////////
		
				/**
		   * Add a new vertex to this graph.
		   * @throws {Graph.VertexExistsError} if a vertex with this key already exists
		   * @param  key    {string} the key with which to refer to this new vertex
		   * @param [value] {*}      the value to store in this new vertex
		   */
			}, {
				key: "addNewVertex",
				value: function addNewVertex(key, value) {
					this[_expectVerticesAbsent](key);
					this[_vertices].set(key, value);
					this[_edges].set(key, new Map());
					this[_reverseEdges].set(key, new Set());
					this[_sources].add(key);
					this[_sinks].add(key);
					this[_trigger]('vertex-added', [key, value]);
					this[_trigger]('vertex-modified', [key, value]);
				}
		
				/**
		   * Set the value of an existing vertex in this graph.
		   * @throws {Graph.VertexNotExistsError} if a vertex with this key does not exist
		   * @param  key    {string} the key belonging to the vertex
		   * @param [value] {*}      the value to store in this vertex
		   */
			}, {
				key: "setVertex",
				value: function setVertex(key, value) {
					this[_expectVertices](key);
					this[_vertices].set(key, value);
					this[_trigger]('vertex-modified', [key, value]);
				}
		
				/**
		   * Make sure a vertex with a specific key exists in this graph. If it already exists,
		   * do nothing. If it does not yet exist, add a new vertex with the given value.
		   * @param  key    {string} the key for the vertex
		   * @param [value] {*}      the value to store if a new vertex is added
		   */
			}, {
				key: "ensureVertex",
				value: function ensureVertex(key, value) {
					if (!this.hasVertex(key)) {
						this.addNewVertex(key, value);
					}
				}
		
				/**
		   * Add a new vertex to this graph. If a vertex with this key already exists,
		   * the value of that vertex is overwritten.
		   * @param  key    {string} the key with which to refer to this new vertex
		   * @param [value] {*}      the value to store in this new vertex
		   */
			}, {
				key: "addVertex",
				value: function addVertex(key, value) {
					if (this.hasVertex(key)) {
						this.setVertex(key, value);
					} else {
						this.addNewVertex(key, value);
					}
				}
		
				////////// removing them //////////
		
				/**
		   * Remove an existing vertex from this graph.
		   * @throws {Graph.VertexNotExistsError} if a vertex with this key does not exist
		   * @throws {Graph.HasConnectedEdgesError} if there are still edges connected to this vertex
		   * @param key {string} the key of the vertex to remove
		   */
			}, {
				key: "removeExistingVertex",
				value: function removeExistingVertex(key) {
					this[_expectVertices](key);
					this[_expectNoConnectedEdges](key);
					this[_vertices]["delete"](key);
					this[_sources]["delete"](key);
					this[_sinks]["delete"](key);
					this[_trigger]('vertex-removed', key);
				}
		
				/**
		   * Remove an existing vertex from this graph, as well as all edges connected to it.
		   * @throws {Graph.VertexNotExistsError} if a vertex with this key does not exist
		   * @param key {string} the key of the vertex to remove
		   */
			}, {
				key: "destroyExistingVertex",
				value: function destroyExistingVertex(key) {
					this[_expectVertices](key);
					var _iteratorNormalCompletion3 = true;
					var _didIteratorError3 = false;
					var _iteratorError3 = undefined;
		
					try {
						for (var _iterator3 = this.verticesFrom(key)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
							var _step3$value = _slicedToArray(_step3.value, 1);
		
							var to = _step3$value[0];
							this.removeEdge(key, to);
						}
					} catch (err) {
						_didIteratorError3 = true;
						_iteratorError3 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
								_iterator3["return"]();
							}
						} finally {
							if (_didIteratorError3) {
								throw _iteratorError3;
							}
						}
					}
		
					var _iteratorNormalCompletion4 = true;
					var _didIteratorError4 = false;
					var _iteratorError4 = undefined;
		
					try {
						for (var _iterator4 = this.verticesTo(key)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
							var _step4$value = _slicedToArray(_step4.value, 1);
		
							var from = _step4$value[0];
							this.removeEdge(from, key);
						}
					} catch (err) {
						_didIteratorError4 = true;
						_iteratorError4 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
								_iterator4["return"]();
							}
						} finally {
							if (_didIteratorError4) {
								throw _iteratorError4;
							}
						}
					}
		
					this.removeExistingVertex(key);
				}
		
				/**
		   * Remove an existing vertex from this graph.
		   * If a vertex with this key does not exist, nothing happens.
		   * @throws {Graph.HasConnectedEdgesError} if there are still edges connected to this vertex
		   * @param key {string} the key of the vertex to remove
		   */
			}, {
				key: "removeVertex",
				value: function removeVertex(key) {
					if (this.hasVertex(key)) {
						this.removeExistingVertex(key);
					}
				}
		
				/**
		   * Remove a vertex from this graph, as well as all edges connected to it.
		   * If a vertex with this key does not exist, nothing happens.
		   * @param key {string} the key of the vertex to remove
		   */
			}, {
				key: "destroyVertex",
				value: function destroyVertex(key) {
					if (this.hasVertex(key)) {
						this.destroyExistingVertex(key);
					}
				}
		
				////////// querying them //////////
		
				/**
		   * @returns {number} the number of vertices in the whole graph
		   */
			}, {
				key: "vertexCount",
				value: function vertexCount() {
					return this[_vertices].size;
				}
		
				/**
		   * Ask whether a vertex with a given key exists.
		   * @param key {string} the key to query
		   * @returns {boolean} whether there is a vertex with the given key
		   */
			}, {
				key: "hasVertex",
				value: function hasVertex(key) {
					return this[_vertices].has(key);
				}
		
				/**
		   * Get the value associated with the vertex of a given key.
		   * @param key {string} the key to query
		   * @returns {*} the value associated with the vertex of the given key.
		   * Note that a return value of `undefined` can mean
		   *
		   * 1. that there is no such vertex, or
		   * 2. that the stored value is actually `undefined`.
		   *
		   * Use {@link Graph#hasVertex} to distinguish these cases.
		   */
			}, {
				key: "vertexValue",
				value: function vertexValue(key) {
					return this[_vertices].get(key);
				}
		
				///////////////////////////
				////////// Edges //////////
				///////////////////////////
		
				////////// adding them //////////
		
				/**
		   * Add a new edge to this graph.
		   * @throws {Graph.EdgeExistsError} if an edge between `from` and `to` already exists
		   * @throws {Graph.VertexNotExistsError} if the `from` and/or `to` vertices do not yet exist in the graph
		   * @param  from   {string} the key for the originating vertex
		   * @param  to     {string} the key for the terminating vertex
		   * @param [value] {*}      the value to store in this new edge
		   */
			}, {
				key: "addNewEdge",
				value: function addNewEdge(from, to, value) {
					this[_expectEdgesAbsent]([from, to]);
					this[_expectVertices](from, to);
					this[_edges].get(from).set(to, value);
					this[_reverseEdges].get(to).add(from);
					this[_edgeCount] += 1;
					this[_sources]["delete"](to);
					this[_sinks]["delete"](from);
					this[_trigger]('edge-added', [[from, to], value]);
					this[_trigger]('edge-modified', [[from, to], value]);
				}
		
				/**
		   * Add a new edge to this graph. If the `from` and/or `to` vertices do not yet exist
		   * in the graph, they are implicitly added with an `undefined` value.
		   * @throws {Graph.EdgeExistsError} if an edge between `from` and `to` already exists
		   * @param  from   {string} the key for the originating vertex
		   * @param  to     {string} the key for the terminating vertex
		   * @param [value] {*}      the value to store in this new edge
		   */
			}, {
				key: "createNewEdge",
				value: function createNewEdge(from, to, value) {
					this[_expectEdgesAbsent]([from, to]);
					this.ensureVertex(from);
					this.ensureVertex(to);
					this.addNewEdge(from, to, value);
				}
		
				/**
		   * Set the value of an existing edge in this graph.
		   * @throws {Graph.EdgeNotExistsError} if an edge between `from` and `to` does not yet exist
		   * @param  from   {string} the key for the originating vertex
		   * @param  to     {string} the key for the terminating vertex
		   * @param [value] {*}      the value to store in this edge
		   */
			}, {
				key: "setEdge",
				value: function setEdge(from, to, value) {
					this[_expectEdges]([from, to]);
					this[_edges].get(from).set(to, value);
					this[_trigger]('edge-modified', [[from, to], value]);
				}
		
				/**
		   * Make sure an edge between the `from` and `to` vertices in this graph.
		   * If one already exists, nothing is done.
		   * If one does not yet exist, a new edge is added with the given value.
		   * @throws {Graph.VertexNotExistsError} if the `from` and/or `to` vertices do not yet exist in the graph
		   * @param  from   {string} the key for the originating vertex
		   * @param  to     {string} the key for the terminating vertex
		   * @param [value] {*}      the value to store if a new edge is added
		   */
			}, {
				key: "spanEdge",
				value: function spanEdge(from, to, value) {
					this[_expectVertices](from, to);
					if (!this.hasEdge(from, to)) {
						this.addNewEdge(from, to, value);
					}
				}
		
				/**
		   * Add a new edge to this graph. If an edge between `from` and `to` already exists,
		   * the value of that edge is overwritten.
		   * @throws {Graph.VertexNotExistsError} if the `from` and/or `to` vertices do not yet exist in the graph
		   * @param  from   {string} the key for the originating vertex
		   * @param  to     {string} the key for the terminating vertex
		   * @param [value] {*}      the value to store in this new edge
		   */
			}, {
				key: "addEdge",
				value: function addEdge(from, to, value) {
					if (this.hasEdge(from, to)) {
						this.setEdge(from, to, value);
					} else {
						this.addNewEdge(from, to, value);
					}
				}
		
				/**
		   * Make sure an edge between the `from` and `to` vertices exists in this graph.
		   * If it already exists, nothing is done.
		   * If it does not yet exist, a new edge is added with the given value.
		   * If the `from` and/or `to` vertices do not yet exist
		   * in the graph, they are implicitly added with an `undefined` value.
		   * @param  from   {string} the key for the originating vertex
		   * @param  to     {string} the key for the terminating vertex
		   * @param [value] {*}      the value to store if a new edge is added
		   */
			}, {
				key: "ensureEdge",
				value: function ensureEdge(from, to, value) {
					if (!this.hasEdge(from, to)) {
						this.createNewEdge(from, to, value);
					}
				}
		
				/**
		   * Add a new edge to this graph. If an edge between the `from` and `to`
		   * vertices already exists, the value of that edge is overwritten.
		   * If the `from` and/or `to` vertices do not yet exist
		   * in the graph, they are implicitly added with an `undefined` value.
		   * @param  from   {string} the key for the originating vertex
		   * @param  to     {string} the key for the terminating vertex
		   * @param [value] {*}      the value to store if a new edge is added
		   */
			}, {
				key: "createEdge",
				value: function createEdge(from, to, value) {
					if (this.hasEdge(from, to)) {
						this.setEdge(from, to, value);
					} else {
						this.createNewEdge(from, to, value);
					}
				}
		
				////////// removing them //////////
		
				/**
		   * Remove an existing edge from this graph.
		   * @throws {Graph.EdgeNotExistsError} if an edge between the `from` and `to` vertices doesn't exist
		   * @param from {string} the key for the originating vertex
		   * @param to   {string} the key for the terminating vertex
		   */
			}, {
				key: "removeExistingEdge",
				value: function removeExistingEdge(from, to) {
					this[_expectEdges]([from, to]);
					this[_edges].get(from)["delete"](to);
					this[_reverseEdges].get(to)["delete"](from);
					this[_edgeCount] -= 1;
					if (this.inDegree(to) === 0) {
						this[_sources].add(to);
					}
					if (this.outDegree(from) === 0) {
						this[_sinks].add(from);
					}
					this[_trigger]('edge-removed', [from, to]);
				}
		
				/**
		   * Remove an edge from this graph.
		   * If an edge between the `from` and `to` vertices doesn't exist, nothing happens.
		   * @param from {string} the key for the originating vertex
		   * @param to   {string} the key for the terminating vertex
		   */
			}, {
				key: "removeEdge",
				value: function removeEdge(from, to) {
					if (this.hasEdge(from, to)) {
						this.removeExistingEdge(from, to);
					}
				}
		
				////////// querying them //////////
		
				/**
		   * @returns {number} the number of edges in the whole graph
		   */
			}, {
				key: "edgeCount",
				value: function edgeCount() {
					return this[_edgeCount];
				}
		
				/**
		   * Ask whether an edge between given `from` and `to` vertices exist.
		   * @param from {string} the key for the originating vertex
		   * @param to   {string} the key for the terminating vertex
		   * @returns {boolean} whether there is an edge between the given `from` and `to` vertices
		   */
			}, {
				key: "hasEdge",
				value: function hasEdge(from, to) {
					return this.hasVertex(from) && this.hasVertex(to) && this[_edges].has(from) && this[_edges].get(from).has(to);
				}
		
				/**
		   * Get the value associated with the edge between given `from` and `to` vertices.
		   * @param from {string} the key for the originating vertex
		   * @param to   {string} the key for the terminating vertex
		   * @returns {*} the value associated with the edge between the given `from` and `to` vertices
		   * Note that a return value of `undefined` can mean
		   *
		   * 1. that there is no such edge, or
		   * 2. that the stored value is actually `undefined`.
		   *
		   * Use {@link Graph#hasEdge} to distinguish these cases.
		   */
			}, {
				key: "edgeValue",
				value: function edgeValue(from, to) {
					return this.hasEdge(from, to) ? this[_edges].get(from).get(to) : undefined;
				}
		
				///////////////////////////////////////////////
				//////////// ES6 Iterable interfaces //////////
				///////////////////////////////////////////////
		
				/**
		   * Iterate over all vertices of the graph, in no particular order.
		   * @returns { Iterator.<string, *> } an object conforming to the {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol|ES6 iterator protocol}
		   * @example
		   * for (var it = graph.vertices(), kv; !(kv = it.next()).done;) {
		   *     var key   = kv.value[0],
		   *         value = kv.value[1];
		   *     // iterates over all vertices of the graph
		   * }
		   * @example
		   * // in ECMAScript 6, you can use a for..of loop
		   * for (let [key, value] of graph.vertices()) {
		   *     // iterates over all vertices of the graph
		   * }
		   * @see {@link Graph#@@iterator}
		   */
			}, {
				key: "vertices",
				value: regeneratorRuntime.mark(function vertices() {
					var done, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, _step5$value, key, value;
		
					return regeneratorRuntime.wrap(function vertices$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								done = new Set();
								_iteratorNormalCompletion5 = true;
								_didIteratorError5 = false;
								_iteratorError5 = undefined;
								context$2$0.prev = 4;
								_iterator5 = this[_vertices][Symbol.iterator]();
		
							case 6:
								if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
									context$2$0.next = 17;
									break;
								}
		
								_step5$value = _slicedToArray(_step5.value, 2);
								key = _step5$value[0];
								value = _step5$value[1];
		
								if (!(this.hasVertex(key) && !done.has(key))) {
									context$2$0.next = 14;
									break;
								}
		
								done.add(key);
								context$2$0.next = 14;
								return [key, value];
		
							case 14:
								_iteratorNormalCompletion5 = true;
								context$2$0.next = 6;
								break;
		
							case 17:
								context$2$0.next = 23;
								break;
		
							case 19:
								context$2$0.prev = 19;
								context$2$0.t0 = context$2$0["catch"](4);
								_didIteratorError5 = true;
								_iteratorError5 = context$2$0.t0;
		
							case 23:
								context$2$0.prev = 23;
								context$2$0.prev = 24;
		
								if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
									_iterator5["return"]();
								}
		
							case 26:
								context$2$0.prev = 26;
		
								if (!_didIteratorError5) {
									context$2$0.next = 29;
									break;
								}
		
								throw _iteratorError5;
		
							case 29:
								return context$2$0.finish(26);
		
							case 30:
								return context$2$0.finish(23);
		
							case 31:
							case "end":
								return context$2$0.stop();
						}
					}, vertices, this, [[4, 19, 23, 31], [24,, 26, 30]]);
				})
		
				/**
		   * A {@link Graph} object is itself {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol|iterable},
		   * and serves as a short notation in ECMAScript 6 to iterate over all vertices in the graph, in no particular order.
		   * @method Graph#@@iterator
		   * @returns { Iterator.<string, *> } an object conforming to the {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol|ES6 iterator protocol}
		   * @example
		   * for (let [key, value] of graph) {
		   *     // iterates over all vertices of the graph
		   * }
		   * @see {@link Graph#vertices}
		   */
			}, {
				key: Symbol.iterator,
				value: function value() {
					return this.vertices();
				}
		
				/**
		   * Iterate over all edges of the graph, in no particular order.
		   * @returns { Iterator.<string, string, *> } an object conforming to the {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol|ES6 iterator protocol}
		   * @example
		   * for (var it = graph.edges(), kv; !(kv = it.next()).done;) {
		   *     var from  = kv.value[0],
		   *         to    = kv.value[1],
		   *         value = kv.value[2];
		   *     // iterates over all edges of the graph
		   * }
		   * @example
		   * // in ECMAScript 6, you can use a for..of loop
		   * for (let [from, to, value] of graph.edges()) {
		   *     // iterates over all vertices of the graph
		   * }
		   */
			}, {
				key: "edges",
				value: regeneratorRuntime.mark(function edges() {
					var done, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, from, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, to;
		
					return regeneratorRuntime.wrap(function edges$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								done = new Map();
								_iteratorNormalCompletion6 = true;
								_didIteratorError6 = false;
								_iteratorError6 = undefined;
								context$2$0.prev = 4;
								_iterator6 = this[_edges].keys()[Symbol.iterator]();
		
							case 6:
								if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
									context$2$0.next = 40;
									break;
								}
		
								from = _step6.value;
		
								done.set(from, new Set());
								_iteratorNormalCompletion7 = true;
								_didIteratorError7 = false;
								_iteratorError7 = undefined;
								context$2$0.prev = 12;
								_iterator7 = this[_edges].get(from).keys()[Symbol.iterator]();
		
							case 14:
								if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
									context$2$0.next = 23;
									break;
								}
		
								to = _step7.value;
		
								if (!(this.hasEdge(from, to) && !done.get(from).has(to))) {
									context$2$0.next = 20;
									break;
								}
		
								done.get(from).add(to);
								context$2$0.next = 20;
								return [from, to, this[_edges].get(from).get(to)];
		
							case 20:
								_iteratorNormalCompletion7 = true;
								context$2$0.next = 14;
								break;
		
							case 23:
								context$2$0.next = 29;
								break;
		
							case 25:
								context$2$0.prev = 25;
								context$2$0.t0 = context$2$0["catch"](12);
								_didIteratorError7 = true;
								_iteratorError7 = context$2$0.t0;
		
							case 29:
								context$2$0.prev = 29;
								context$2$0.prev = 30;
		
								if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
									_iterator7["return"]();
								}
		
							case 32:
								context$2$0.prev = 32;
		
								if (!_didIteratorError7) {
									context$2$0.next = 35;
									break;
								}
		
								throw _iteratorError7;
		
							case 35:
								return context$2$0.finish(32);
		
							case 36:
								return context$2$0.finish(29);
		
							case 37:
								_iteratorNormalCompletion6 = true;
								context$2$0.next = 6;
								break;
		
							case 40:
								context$2$0.next = 46;
								break;
		
							case 42:
								context$2$0.prev = 42;
								context$2$0.t1 = context$2$0["catch"](4);
								_didIteratorError6 = true;
								_iteratorError6 = context$2$0.t1;
		
							case 46:
								context$2$0.prev = 46;
								context$2$0.prev = 47;
		
								if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
									_iterator6["return"]();
								}
		
							case 49:
								context$2$0.prev = 49;
		
								if (!_didIteratorError6) {
									context$2$0.next = 52;
									break;
								}
		
								throw _iteratorError6;
		
							case 52:
								return context$2$0.finish(49);
		
							case 53:
								return context$2$0.finish(46);
		
							case 54:
							case "end":
								return context$2$0.stop();
						}
					}, edges, this, [[4, 42, 46, 54], [12, 25, 29, 37], [30,, 32, 36], [47,, 49, 53]]);
				})
		
				/**
		   * Iterate over the outgoing edges of a given vertex in the graph, in no particular order.
		   * @throws {Graph.VertexNotExistsError} if a vertex with the given `from` key does not exist
		   * @param from {string} the key of the vertex to take the outgoing edges from
		   * @returns { Iterator.<string, *, *> } an object conforming to the {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol|ES6 iterator protocol}
		   * @example
		   * for (var it = graph.verticesFrom(from), kv; !(kv = it.next()).done;) {
		   *     var to          = kv.value[0],
		   *         vertexValue = kv.value[1],
		   *         edgeValue   = kv.value[2];
		   *     // iterates over all outgoing vertices of the `from` vertex
		   * }
		   * @example
		   * // in ECMAScript 6, you can use a for..of loop
		   * for (let [to, vertexValue, edgeValue] of graph.verticesFrom(from)) {
		   *     // iterates over all outgoing edges of the `from` vertex
		   * }
		   */
			}, {
				key: "verticesFrom",
				value: function verticesFrom(from) {
					this[_expectVertices](from);
					return this[_verticesFrom](from);
				}
			}, {
				key: _verticesFrom,
				value: regeneratorRuntime.mark(function value(from) {
					var done, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, to;
		
					return regeneratorRuntime.wrap(function value$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								done = new Set();
								_iteratorNormalCompletion8 = true;
								_didIteratorError8 = false;
								_iteratorError8 = undefined;
								context$2$0.prev = 4;
								_iterator8 = this[_edges].get(from).keys()[Symbol.iterator]();
		
							case 6:
								if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
									context$2$0.next = 15;
									break;
								}
		
								to = _step8.value;
		
								if (!(this.hasEdge(from, to) && !done.has(to))) {
									context$2$0.next = 12;
									break;
								}
		
								done.add(to);
								context$2$0.next = 12;
								return [to, this[_vertices].get(to), this[_edges].get(from).get(to)];
		
							case 12:
								_iteratorNormalCompletion8 = true;
								context$2$0.next = 6;
								break;
		
							case 15:
								context$2$0.next = 21;
								break;
		
							case 17:
								context$2$0.prev = 17;
								context$2$0.t0 = context$2$0["catch"](4);
								_didIteratorError8 = true;
								_iteratorError8 = context$2$0.t0;
		
							case 21:
								context$2$0.prev = 21;
								context$2$0.prev = 22;
		
								if (!_iteratorNormalCompletion8 && _iterator8["return"]) {
									_iterator8["return"]();
								}
		
							case 24:
								context$2$0.prev = 24;
		
								if (!_didIteratorError8) {
									context$2$0.next = 27;
									break;
								}
		
								throw _iteratorError8;
		
							case 27:
								return context$2$0.finish(24);
		
							case 28:
								return context$2$0.finish(21);
		
							case 29:
							case "end":
								return context$2$0.stop();
						}
					}, value, this, [[4, 17, 21, 29], [22,, 24, 28]]);
				})
		
				/**
		   * Iterate over the incoming edges of a given vertex in the graph, in no particular order.
		   * @throws {Graph.VertexNotExistsError} if a vertex with the given `to` key does not exist
		   * @param to {string} the key of the vertex to take the incoming edges from
		   * @returns { Iterator.<string, *, *> } an object conforming to the {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol|ES6 iterator protocol}
		   * @example
		   * for (var it = graph.verticesTo(to), kv; !(kv = it.next()).done;) {
		   *     var from        = kv.value[0],
		   *         vertexValue = kv.value[1],
		   *         edgeValue   = kv.value[2];
		   *     // iterates over all outgoing vertices of the `from` vertex
		   * }
		   * @example
		   * // in ECMAScript 6, you can use a for..of loop
		   * for (let [from, vertexValue, edgeValue] of graph.verticesTo(to)) {
		   *     // iterates over all incoming edges of the `to` vertex
		   * }
		   */
			}, {
				key: "verticesTo",
				value: function verticesTo(to) {
					this[_expectVertices](to);
					return this[_verticesTo](to);
				}
			}, {
				key: _verticesTo,
				value: regeneratorRuntime.mark(function value(to) {
					var done, _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, from;
		
					return regeneratorRuntime.wrap(function value$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								done = new Set();
								_iteratorNormalCompletion9 = true;
								_didIteratorError9 = false;
								_iteratorError9 = undefined;
								context$2$0.prev = 4;
								_iterator9 = this[_reverseEdges].get(to)[Symbol.iterator]();
		
							case 6:
								if (_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done) {
									context$2$0.next = 15;
									break;
								}
		
								from = _step9.value;
		
								if (!(this.hasEdge(from, to) && !done.has(from))) {
									context$2$0.next = 12;
									break;
								}
		
								done.add(from);
								context$2$0.next = 12;
								return [from, this[_vertices].get(from), this[_edges].get(from).get(to)];
		
							case 12:
								_iteratorNormalCompletion9 = true;
								context$2$0.next = 6;
								break;
		
							case 15:
								context$2$0.next = 21;
								break;
		
							case 17:
								context$2$0.prev = 17;
								context$2$0.t0 = context$2$0["catch"](4);
								_didIteratorError9 = true;
								_iteratorError9 = context$2$0.t0;
		
							case 21:
								context$2$0.prev = 21;
								context$2$0.prev = 22;
		
								if (!_iteratorNormalCompletion9 && _iterator9["return"]) {
									_iterator9["return"]();
								}
		
							case 24:
								context$2$0.prev = 24;
		
								if (!_didIteratorError9) {
									context$2$0.next = 27;
									break;
								}
		
								throw _iteratorError9;
		
							case 27:
								return context$2$0.finish(24);
		
							case 28:
								return context$2$0.finish(21);
		
							case 29:
							case "end":
								return context$2$0.stop();
						}
					}, value, this, [[4, 17, 21, 29], [22,, 24, 28]]);
				})
		
				/**
		   * Iterate over all vertices reachable from a given vertex in the graph, in no particular order.
		   * @throws {Graph.VertexNotExistsError} if a vertex with the given `from` key does not exist
		   * @param from {string} the key of the vertex to take the reachable vertices from
		   * @returns { Iterator.<string, *> } an object conforming to the {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol|ES6 iterator protocol}
		   * @example
		   * for (var it = graph.verticesWithPathFrom(from), kv; !(kv = it.next()).done;) {
		   *     var key   = kv.value[0],
		   *         value = kv.value[1];
		   *     // iterates over all vertices reachable from `from`
		   * }
		   * @example
		   * // in ECMAScript 6, you can use a for..of loop
		   * for (let [key, value] of graph.verticesWithPathFrom(from)) {
		   *     // iterates over all vertices reachable from `from`
		   * }
		   */
			}, {
				key: "verticesWithPathFrom",
				value: function verticesWithPathFrom(from) {
					this[_expectVertices](from);
					return this[_verticesWithPathFrom](from, new Set());
				}
			}, {
				key: _verticesWithPathFrom,
				value: regeneratorRuntime.mark(function value(from, done) {
					var _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, to;
		
					return regeneratorRuntime.wrap(function value$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								_iteratorNormalCompletion10 = true;
								_didIteratorError10 = false;
								_iteratorError10 = undefined;
								context$2$0.prev = 3;
								_iterator10 = this[_edges].get(from).keys()[Symbol.iterator]();
		
							case 5:
								if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
									context$2$0.next = 15;
									break;
								}
		
								to = _step10.value;
		
								if (!(this.hasEdge(from, to) && !done.has(to))) {
									context$2$0.next = 12;
									break;
								}
		
								done.add(to);
								context$2$0.next = 11;
								return [to, this[_vertices].get(to)];
		
							case 11:
								return context$2$0.delegateYield(this[_verticesWithPathFrom](to, done), "t0", 12);
		
							case 12:
								_iteratorNormalCompletion10 = true;
								context$2$0.next = 5;
								break;
		
							case 15:
								context$2$0.next = 21;
								break;
		
							case 17:
								context$2$0.prev = 17;
								context$2$0.t1 = context$2$0["catch"](3);
								_didIteratorError10 = true;
								_iteratorError10 = context$2$0.t1;
		
							case 21:
								context$2$0.prev = 21;
								context$2$0.prev = 22;
		
								if (!_iteratorNormalCompletion10 && _iterator10["return"]) {
									_iterator10["return"]();
								}
		
							case 24:
								context$2$0.prev = 24;
		
								if (!_didIteratorError10) {
									context$2$0.next = 27;
									break;
								}
		
								throw _iteratorError10;
		
							case 27:
								return context$2$0.finish(24);
		
							case 28:
								return context$2$0.finish(21);
		
							case 29:
							case "end":
								return context$2$0.stop();
						}
					}, value, this, [[3, 17, 21, 29], [22,, 24, 28]]);
				})
		
				/**
		   * Iterate over all vertices from which a given vertex in the graph can be reached, in no particular order.
		   * @throws {Graph.VertexNotExistsError} if a vertex with the given `to` key does not exist
		   * @param to {string} the key of the vertex to take the reachable vertices from
		   * @returns { Iterator.<string, *> } an object conforming to the {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol|ES6 iterator protocol}
		   * @example
		   * for (var it = graph.verticesWithPathTo(to), kv; !(kv = it.next()).done;) {
		   *     var key   = kv.value[0],
		   *         value = kv.value[1];
		   *     // iterates over all vertices from which `to` can be reached
		   * }
		   * @example
		   * // in ECMAScript 6, you can use a for..of loop
		   * for (let [key, value] of graph.verticesWithPathTo(to)) {
		   *     // iterates over all vertices from which `to` can be reached
		   * }
		   */
			}, {
				key: "verticesWithPathTo",
				value: function verticesWithPathTo(to) {
					this[_expectVertices](to);
					return this[_verticesWithPathTo](to, new Set());
				}
			}, {
				key: _verticesWithPathTo,
				value: regeneratorRuntime.mark(function value(to, done) {
					var _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, from;
		
					return regeneratorRuntime.wrap(function value$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								_iteratorNormalCompletion11 = true;
								_didIteratorError11 = false;
								_iteratorError11 = undefined;
								context$2$0.prev = 3;
								_iterator11 = this[_reverseEdges].get(to)[Symbol.iterator]();
		
							case 5:
								if (_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done) {
									context$2$0.next = 15;
									break;
								}
		
								from = _step11.value;
		
								if (!(this.hasEdge(from, to) && !done.has(from))) {
									context$2$0.next = 12;
									break;
								}
		
								done.add(from);
								context$2$0.next = 11;
								return [from, this[_vertices].get(from)];
		
							case 11:
								return context$2$0.delegateYield(this[_verticesWithPathTo](from, done), "t0", 12);
		
							case 12:
								_iteratorNormalCompletion11 = true;
								context$2$0.next = 5;
								break;
		
							case 15:
								context$2$0.next = 21;
								break;
		
							case 17:
								context$2$0.prev = 17;
								context$2$0.t1 = context$2$0["catch"](3);
								_didIteratorError11 = true;
								_iteratorError11 = context$2$0.t1;
		
							case 21:
								context$2$0.prev = 21;
								context$2$0.prev = 22;
		
								if (!_iteratorNormalCompletion11 && _iterator11["return"]) {
									_iterator11["return"]();
								}
		
							case 24:
								context$2$0.prev = 24;
		
								if (!_didIteratorError11) {
									context$2$0.next = 27;
									break;
								}
		
								throw _iteratorError11;
		
							case 27:
								return context$2$0.finish(24);
		
							case 28:
								return context$2$0.finish(21);
		
							case 29:
							case "end":
								return context$2$0.stop();
						}
					}, value, this, [[3, 17, 21, 29], [22,, 24, 28]]);
				})
		
				/**
		   * Iterate over all vertices that have no incoming edges, in no particular order.
		   * @returns { Iterator.<string, *> } an object conforming to the {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol|ES6 iterator protocol}
		   * @example
		   * for (var it = graph.sources(), kv; !(kv = it.next()).done;) {
		   *     var key   = kv.value[0],
		   *         value = kv.value[1];
		   *     // iterates over all vertices with no incoming edges
		   * }
		   * @example
		   * // in ECMAScript 6, you can use a for..of loop
		   * for (let [key, value] of graph.sources()) {
		   *     // iterates over all vertices with no incoming edges
		   * }
		   */
			}, {
				key: "sources",
				value: regeneratorRuntime.mark(function sources() {
					var done, _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, key;
		
					return regeneratorRuntime.wrap(function sources$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								done = new Set();
								_iteratorNormalCompletion12 = true;
								_didIteratorError12 = false;
								_iteratorError12 = undefined;
								context$2$0.prev = 4;
								_iterator12 = this[_sources][Symbol.iterator]();
		
							case 6:
								if (_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done) {
									context$2$0.next = 15;
									break;
								}
		
								key = _step12.value;
		
								if (!(this.hasVertex(key) && !done.has(key))) {
									context$2$0.next = 12;
									break;
								}
		
								done.add(key);
								context$2$0.next = 12;
								return [key, this.vertexValue(key)];
		
							case 12:
								_iteratorNormalCompletion12 = true;
								context$2$0.next = 6;
								break;
		
							case 15:
								context$2$0.next = 21;
								break;
		
							case 17:
								context$2$0.prev = 17;
								context$2$0.t0 = context$2$0["catch"](4);
								_didIteratorError12 = true;
								_iteratorError12 = context$2$0.t0;
		
							case 21:
								context$2$0.prev = 21;
								context$2$0.prev = 22;
		
								if (!_iteratorNormalCompletion12 && _iterator12["return"]) {
									_iterator12["return"]();
								}
		
							case 24:
								context$2$0.prev = 24;
		
								if (!_didIteratorError12) {
									context$2$0.next = 27;
									break;
								}
		
								throw _iteratorError12;
		
							case 27:
								return context$2$0.finish(24);
		
							case 28:
								return context$2$0.finish(21);
		
							case 29:
							case "end":
								return context$2$0.stop();
						}
					}, sources, this, [[4, 17, 21, 29], [22,, 24, 28]]);
				})
		
				/**
		   * Iterate over all vertices that have no outgoing edges, in no particular order.
		   * @returns { Iterator.<string, *> } an object conforming to the {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol|ES6 iterator protocol}
		   * @example
		   * for (var it = graph.sinks(), kv; !(kv = it.next()).done;) {
		   *     var key   = kv.value[0],
		   *         value = kv.value[1];
		   *     // iterates over all vertices with no outgoing edges
		   * }
		   * @example
		   * // in ECMAScript 6, you can use a for..of loop
		   * for (let [key, value] of graph.sinks()) {
		   *     // iterates over all vertices with no outgoing edges
		   * }
		   */
			}, {
				key: "sinks",
				value: regeneratorRuntime.mark(function sinks() {
					var done, _iteratorNormalCompletion13, _didIteratorError13, _iteratorError13, _iterator13, _step13, key;
		
					return regeneratorRuntime.wrap(function sinks$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								done = new Set();
								_iteratorNormalCompletion13 = true;
								_didIteratorError13 = false;
								_iteratorError13 = undefined;
								context$2$0.prev = 4;
								_iterator13 = this[_sinks][Symbol.iterator]();
		
							case 6:
								if (_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done) {
									context$2$0.next = 15;
									break;
								}
		
								key = _step13.value;
		
								if (!(this.hasVertex(key) && !done.has(key))) {
									context$2$0.next = 12;
									break;
								}
		
								done.add(key);
								context$2$0.next = 12;
								return [key, this.vertexValue(key)];
		
							case 12:
								_iteratorNormalCompletion13 = true;
								context$2$0.next = 6;
								break;
		
							case 15:
								context$2$0.next = 21;
								break;
		
							case 17:
								context$2$0.prev = 17;
								context$2$0.t0 = context$2$0["catch"](4);
								_didIteratorError13 = true;
								_iteratorError13 = context$2$0.t0;
		
							case 21:
								context$2$0.prev = 21;
								context$2$0.prev = 22;
		
								if (!_iteratorNormalCompletion13 && _iterator13["return"]) {
									_iterator13["return"]();
								}
		
							case 24:
								context$2$0.prev = 24;
		
								if (!_didIteratorError13) {
									context$2$0.next = 27;
									break;
								}
		
								throw _iteratorError13;
		
							case 27:
								return context$2$0.finish(24);
		
							case 28:
								return context$2$0.finish(21);
		
							case 29:
							case "end":
								return context$2$0.stop();
						}
					}, sinks, this, [[4, 17, 21, 29], [22,, 24, 28]]);
				})
		
				/**
		   * Iterate over all vertices of the graph in topological order.
		   * @returns { Iterator.<string, *> } an object conforming to the {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol|ES6 iterator protocol}
		   * @example
		   * for (var it = graph.vertices_topologically(), kv; !(kv = it.next()).done;) {
		   *     var key   = kv.value[0],
		   *         value = kv.value[1];
		   *     // iterates over all vertices of the graph in topological order
		   * }
		   * @example
		   * // in ECMAScript 6, you can use a for..of loop
		   * for (let [key, value] of graph.vertices_topologically()) {
		   *     // iterates over all vertices of the graph in topological order
		   * }
		   */
			}, {
				key: "vertices_topologically",
				value: regeneratorRuntime.mark(function vertices_topologically() {
					var marked2$0, visited, handled, _this, visit, _iteratorNormalCompletion15, _didIteratorError15, _iteratorError15, _iterator15, _step15, _step15$value, a;
		
					return regeneratorRuntime.wrap(function vertices_topologically$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								visit = function visit(a) {
									var i, cycle, _iteratorNormalCompletion14, _didIteratorError14, _iteratorError14, _iterator14, _step14, _step14$value, b;
		
									return regeneratorRuntime.wrap(function visit$(context$3$0) {
										while (1) switch (context$3$0.prev = context$3$0.next) {
											case 0:
												visited.push(a);
												i = visited.indexOf(a);
		
												if (!(i !== visited.length - 1)) {
													context$3$0.next = 5;
													break;
												}
		
												cycle = visited.slice(i + 1).reverse();
												throw new Graph.CycleError(cycle);
		
											case 5:
												if (handled.has(a)) {
													context$3$0.next = 36;
													break;
												}
		
												_iteratorNormalCompletion14 = true;
												_didIteratorError14 = false;
												_iteratorError14 = undefined;
												context$3$0.prev = 9;
												_iterator14 = _this.verticesTo(a)[Symbol.iterator]();
		
											case 11:
												if (_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done) {
													context$3$0.next = 18;
													break;
												}
		
												_step14$value = _slicedToArray(_step14.value, 1);
												b = _step14$value[0];
												return context$3$0.delegateYield(visit(b), "t0", 15);
		
											case 15:
												_iteratorNormalCompletion14 = true;
												context$3$0.next = 11;
												break;
		
											case 18:
												context$3$0.next = 24;
												break;
		
											case 20:
												context$3$0.prev = 20;
												context$3$0.t1 = context$3$0["catch"](9);
												_didIteratorError14 = true;
												_iteratorError14 = context$3$0.t1;
		
											case 24:
												context$3$0.prev = 24;
												context$3$0.prev = 25;
		
												if (!_iteratorNormalCompletion14 && _iterator14["return"]) {
													_iterator14["return"]();
												}
		
											case 27:
												context$3$0.prev = 27;
		
												if (!_didIteratorError14) {
													context$3$0.next = 30;
													break;
												}
		
												throw _iteratorError14;
		
											case 30:
												return context$3$0.finish(27);
		
											case 31:
												return context$3$0.finish(24);
		
											case 32:
												if (!_this.hasVertex(a)) {
													context$3$0.next = 35;
													break;
												}
		
												context$3$0.next = 35;
												return [a, _this[_vertices].get(a)];
		
											case 35:
												handled.add(a);
		
											case 36:
												visited.pop();
		
											case 37:
											case "end":
												return context$3$0.stop();
										}
									}, marked2$0[0], this, [[9, 20, 24, 32], [25,, 27, 31]]);
								};
		
								marked2$0 = [visit].map(regeneratorRuntime.mark);
								visited = [];
								handled = new Set();
								_this = this;
								_iteratorNormalCompletion15 = true;
								_didIteratorError15 = false;
								_iteratorError15 = undefined;
								context$2$0.prev = 8;
								_iterator15 = this.vertices()[Symbol.iterator]();
		
							case 10:
								if (_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done) {
									context$2$0.next = 18;
									break;
								}
		
								_step15$value = _slicedToArray(_step15.value, 1);
								a = _step15$value[0];
		
								if (handled.has(a)) {
									context$2$0.next = 15;
									break;
								}
		
								return context$2$0.delegateYield(visit(a), "t0", 15);
		
							case 15:
								_iteratorNormalCompletion15 = true;
								context$2$0.next = 10;
								break;
		
							case 18:
								context$2$0.next = 24;
								break;
		
							case 20:
								context$2$0.prev = 20;
								context$2$0.t1 = context$2$0["catch"](8);
								_didIteratorError15 = true;
								_iteratorError15 = context$2$0.t1;
		
							case 24:
								context$2$0.prev = 24;
								context$2$0.prev = 25;
		
								if (!_iteratorNormalCompletion15 && _iterator15["return"]) {
									_iterator15["return"]();
								}
		
							case 27:
								context$2$0.prev = 27;
		
								if (!_didIteratorError15) {
									context$2$0.next = 30;
									break;
								}
		
								throw _iteratorError15;
		
							case 30:
								return context$2$0.finish(27);
		
							case 31:
								return context$2$0.finish(24);
		
							case 32:
							case "end":
								return context$2$0.stop();
						}
					}, vertices_topologically, this, [[8, 20, 24, 32], [25,, 27, 31]]);
				})
		
				//////////////////////////////
				////////// Clearing //////////
				//////////////////////////////
		
				/**
		   * Remove all edges from the graph, but leave the vertices intact.
		   */
			}, {
				key: "clearEdges",
				value: function clearEdges() {
					var _iteratorNormalCompletion16 = true;
					var _didIteratorError16 = false;
					var _iteratorError16 = undefined;
		
					try {
						for (var _iterator16 = this.edges()[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
							var _step16$value = _slicedToArray(_step16.value, 2);
		
							var from = _step16$value[0];
							var to = _step16$value[1];
							this.removeEdge(from, to);
						}
					} catch (err) {
						_didIteratorError16 = true;
						_iteratorError16 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion16 && _iterator16["return"]) {
								_iterator16["return"]();
							}
						} finally {
							if (_didIteratorError16) {
								throw _iteratorError16;
							}
						}
					}
				}
		
				/**
		   * Remove all edges and vertices from the graph, putting it back in its initial state.
		   */
			}, {
				key: "clear",
				value: function clear() {
					var _iteratorNormalCompletion17 = true;
					var _didIteratorError17 = false;
					var _iteratorError17 = undefined;
		
					try {
						for (var _iterator17 = this.vertices()[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
							var _step17$value = _slicedToArray(_step17.value, 1);
		
							var v = _step17$value[0];
							this.destroyVertex(v);
						}
					} catch (err) {
						_didIteratorError17 = true;
						_iteratorError17 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion17 && _iterator17["return"]) {
								_iterator17["return"]();
							}
						} finally {
							if (_didIteratorError17) {
								throw _iteratorError17;
							}
						}
					}
				}
		
				////////////////////////////////////////
				////////// (Advanced) Queries //////////
				////////////////////////////////////////
		
				/**
		   * Ask whether `this` graph and a given `other` graph are equal.
		   * Two graphs are equal if they have the same vertices and the same edges.
		   * @param other {Graph} the other graph to compare to `this` one
		   * @param [eqV] {function(*, *, string): boolean}
		   *     a custom equality function for values stored in vertices;
		   *     defaults to `===` comparison; The first two arguments are the
		   *     values to compare. The third is the corresponding `key`.
		   * @param [eqE] {function(*, *, string, string): boolean}
		   *     a custom equality function for values stored in edges;
		   *     defaults to the function given for `trV`; The first two arguments
		   *     are the values to compare. The third and fourth are the `from`
		   *     and `to` keys respectively.
		   * @returns {boolean} `true` if the two graphs are equal; `false` otherwise
		   */
			}, {
				key: "equals",
				value: function equals(other) {
					var eqV = arguments.length <= 1 || arguments[1] === undefined ? function (x, y) {
						return x === y;
					} : arguments[1];
					var eqE = arguments.length <= 2 || arguments[2] === undefined ? eqV : arguments[2];
					return (function () {
						if (!(other instanceof Graph)) {
							return false;
						}
						if (this.vertexCount() !== other.vertexCount()) {
							return false;
						}
						if (this.edgeCount() !== other.edgeCount()) {
							return false;
						}
						var _iteratorNormalCompletion18 = true;
						var _didIteratorError18 = false;
						var _iteratorError18 = undefined;
		
						try {
							for (var _iterator18 = this.vertices()[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
								var _step18$value = _slicedToArray(_step18.value, 2);
		
								var key = _step18$value[0];
								var value = _step18$value[1];
		
								if (!other.hasVertex(key)) {
									return false;
								}
								if (!eqV(value, other.vertexValue(key), key)) {
									return false;
								}
							}
						} catch (err) {
							_didIteratorError18 = true;
							_iteratorError18 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion18 && _iterator18["return"]) {
									_iterator18["return"]();
								}
							} finally {
								if (_didIteratorError18) {
									throw _iteratorError18;
								}
							}
						}
		
						var _iteratorNormalCompletion19 = true;
						var _didIteratorError19 = false;
						var _iteratorError19 = undefined;
		
						try {
							for (var _iterator19 = this.edges()[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
								var _step19$value = _slicedToArray(_step19.value, 3);
		
								var from = _step19$value[0];
								var to = _step19$value[1];
								var value = _step19$value[2];
		
								if (!other.hasEdge(from, to)) {
									return false;
								}
								if (!eqE(value, other.edgeValue(from, to), from, to)) {
									return false;
								}
							}
						} catch (err) {
							_didIteratorError19 = true;
							_iteratorError19 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion19 && _iterator19["return"]) {
									_iterator19["return"]();
								}
							} finally {
								if (_didIteratorError19) {
									throw _iteratorError19;
								}
							}
						}
		
						return true;
					}).apply(this, arguments);
				}
		
				/**
		   * Iterate over all simple directed cycles in this graph, in no particular order.
		   * If you mutate the graph in between iterations, behavior of the iterator
		   * becomes unspecified. (So, don't.)
		   * @returns { Iterator.< Array.<string> > }
		   *          an object conforming to the {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol|ES6 iterator protocol}.
		   *          Each iterated value is an array containing the vertex keys describing the cycle.
		   *          These arrays will contain each vertex key only once — even the first/last one.
		   * @example
		   * for (var it = graph.cycles(), kv; !(kv = it.next()).done;) {
		   *     var cycle = kv.value;
		   *     // iterates over all cycles of the graph
		   * }
		   * @example
		   * // in ECMAScript 6, you can use a for..of loop
		   * for (let cycle of graph.cycles()) {
		   *     // iterates over all cycles of the graph
		   * }
		   */
			}, {
				key: "cycles",
				value: regeneratorRuntime.mark(function cycles() {
					var marked2$0, pointStack, markedStack, mark, _this, backtrack, _iteratorNormalCompletion20, _didIteratorError20, _iteratorError20, _iterator20, _step20, _step20$value, a;
		
					return regeneratorRuntime.wrap(function cycles$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								backtrack = function backtrack(v) {
									var out = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
		
									var _arr, _i, _arr$_i, w, o, u;
		
									return regeneratorRuntime.wrap(function backtrack$(context$3$0) {
										while (1) switch (context$3$0.prev = context$3$0.next) {
											case 0:
												pointStack.push(v);
												mark.add(v);
												markedStack.push(v);
												_arr = [].concat(_toConsumableArray(_this.verticesFrom(v)));
												_i = 0;
		
											case 5:
												if (!(_i < _arr.length)) {
													context$3$0.next = 23;
													break;
												}
		
												_arr$_i = _slicedToArray(_arr[_i], 1);
												w = _arr$_i[0];
		
												if (!(w < pointStack[0])) {
													context$3$0.next = 10;
													break;
												}
		
												return context$3$0.abrupt("continue", 20);
		
											case 10:
												if (!(w === pointStack[0])) {
													context$3$0.next = 16;
													break;
												}
		
												context$3$0.next = 13;
												return [].concat(pointStack);
		
											case 13:
												out.found = true;
												context$3$0.next = 20;
												break;
		
											case 16:
												if (mark.has(w)) {
													context$3$0.next = 20;
													break;
												}
		
												o = {};
												return context$3$0.delegateYield(backtrack(w, o), "t0", 19);
		
											case 19:
												out.found = out.found || o.found;
		
											case 20:
												_i++;
												context$3$0.next = 5;
												break;
		
											case 23:
												if (out.found) {
													u = undefined;
		
													do {
														u = markedStack.pop();
														mark["delete"](u);
													} while (u !== v);
												}
												pointStack.pop();
		
											case 25:
											case "end":
												return context$3$0.stop();
										}
									}, marked2$0[0], this);
								};
		
								marked2$0 = [backtrack].map(regeneratorRuntime.mark);
								pointStack = [];
								markedStack = undefined, mark = undefined;
								_this = this;
								_iteratorNormalCompletion20 = true;
								_didIteratorError20 = false;
								_iteratorError20 = undefined;
								context$2$0.prev = 8;
								_iterator20 = this.vertices()[Symbol.iterator]();
		
							case 10:
								if (_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done) {
									context$2$0.next = 19;
									break;
								}
		
								_step20$value = _slicedToArray(_step20.value, 1);
								a = _step20$value[0];
		
								markedStack = [];
								mark = new Set();
								return context$2$0.delegateYield(backtrack(a), "t0", 16);
		
							case 16:
								_iteratorNormalCompletion20 = true;
								context$2$0.next = 10;
								break;
		
							case 19:
								context$2$0.next = 25;
								break;
		
							case 21:
								context$2$0.prev = 21;
								context$2$0.t1 = context$2$0["catch"](8);
								_didIteratorError20 = true;
								_iteratorError20 = context$2$0.t1;
		
							case 25:
								context$2$0.prev = 25;
								context$2$0.prev = 26;
		
								if (!_iteratorNormalCompletion20 && _iterator20["return"]) {
									_iterator20["return"]();
								}
		
							case 28:
								context$2$0.prev = 28;
		
								if (!_didIteratorError20) {
									context$2$0.next = 31;
									break;
								}
		
								throw _iteratorError20;
		
							case 31:
								return context$2$0.finish(28);
		
							case 32:
								return context$2$0.finish(25);
		
							case 33:
							case "end":
								return context$2$0.stop();
						}
					}, cycles, this, [[8, 21, 25, 33], [26,, 28, 32]]);
				})
		
				/**
		   * Find any directed cycle in this graph.
		   * @returns {?Array} an array containing the vertex keys describing the cycle; `null`, if there is no cycle;
		   *                   The array will contain each vertex key only once — even the first/last one.
		   */
			}, {
				key: "cycle",
				value: function cycle() {
					var result = this.cycles().next();
					return result.done ? null : result.value;
				}
		
				/**
		   * Test whether this graph contains a directed cycle.
		   * @returns {boolean} whether this graph contains any directed cycle
		   */
			}, {
				key: "hasCycle",
				value: function hasCycle() {
					return !this.cycles().next().done;
				}
		
				/**
		   * Iterate over all paths between two given keys in this graph, in no particular order.
		   * If you mutate the graph in between iterations, behavior of the iterator
		   * becomes unspecified. (So, don't.)
		   * @param from {string} the key for the originating vertex
		   * @param to   {string} the key for the terminating vertex
		   * @throws {Graph.VertexNotExistsError} if the `from` and/or `to` vertices do not yet exist in the graph
		   * @returns { Iterator.< Array.<string> > }
		   *          an object conforming to the {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol|ES6 iterator protocol}.
		   *          Each iterated value is an array containing the vertex-keys describing the path.
		   * @example
		   * for (var it = graph.paths(), kv; !(kv = it.next()).done;) {
		   *     var path = kv.value;
		   *     // iterates over all paths between `from` and `to` in the graph
		   * }
		   * @example
		   * // in ECMAScript 6, you can use a for..of loop
		   * for (let path of graph.paths()) {
		   *     // iterates over all paths between `from` and `to` in the graph
		   * }
		   */
			}, {
				key: "paths",
				value: function paths(from, to) {
					this[_expectVertices](from, to);
					return this[_paths](from, to);
				}
			}, {
				key: _paths,
				value: regeneratorRuntime.mark(function value(from, to) {
					var marked2$0, stack, _this, pathsFromPrefix;
		
					return regeneratorRuntime.wrap(function value$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								pathsFromPrefix = function pathsFromPrefix(current) {
									var _iteratorNormalCompletion21, _didIteratorError21, _iteratorError21, _iterator21, _step21, _step21$value, next;
		
									return regeneratorRuntime.wrap(function pathsFromPrefix$(context$3$0) {
										while (1) switch (context$3$0.prev = context$3$0.next) {
											case 0:
												stack.push(current);
												_iteratorNormalCompletion21 = true;
												_didIteratorError21 = false;
												_iteratorError21 = undefined;
												context$3$0.prev = 4;
												_iterator21 = _this.verticesFrom(current)[Symbol.iterator]();
		
											case 6:
												if (_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done) {
													context$3$0.next = 19;
													break;
												}
		
												_step21$value = _slicedToArray(_step21.value, 1);
												next = _step21$value[0];
		
												if (!(next === to)) {
													context$3$0.next = 14;
													break;
												}
		
												context$3$0.next = 12;
												return [].concat(stack, [to]);
		
											case 12:
												context$3$0.next = 16;
												break;
		
											case 14:
												if (!(stack.indexOf(next) === -1)) {
													context$3$0.next = 16;
													break;
												}
		
												return context$3$0.delegateYield(pathsFromPrefix(next), "t0", 16);
		
											case 16:
												_iteratorNormalCompletion21 = true;
												context$3$0.next = 6;
												break;
		
											case 19:
												context$3$0.next = 25;
												break;
		
											case 21:
												context$3$0.prev = 21;
												context$3$0.t1 = context$3$0["catch"](4);
												_didIteratorError21 = true;
												_iteratorError21 = context$3$0.t1;
		
											case 25:
												context$3$0.prev = 25;
												context$3$0.prev = 26;
		
												if (!_iteratorNormalCompletion21 && _iterator21["return"]) {
													_iterator21["return"]();
												}
		
											case 28:
												context$3$0.prev = 28;
		
												if (!_didIteratorError21) {
													context$3$0.next = 31;
													break;
												}
		
												throw _iteratorError21;
		
											case 31:
												return context$3$0.finish(28);
		
											case 32:
												return context$3$0.finish(25);
		
											case 33:
												stack.pop();
		
											case 34:
											case "end":
												return context$3$0.stop();
										}
									}, marked2$0[0], this, [[4, 21, 25, 33], [26,, 28, 32]]);
								};
		
								marked2$0 = [pathsFromPrefix].map(regeneratorRuntime.mark);
								stack = [];
								_this = this;
								return context$2$0.delegateYield(pathsFromPrefix(from), "t0", 5);
		
							case 5:
							case "end":
								return context$2$0.stop();
						}
					}, value, this);
				})
		
				/**
		   * Find any path between a given pair of keys.
		   * @param from {string} the originating vertex
		   * @param to   {string} the terminating vertex
		   * @throws {Graph.VertexNotExistsError} if the `from` and/or `to` vertices do not yet exist in the graph
		   * @returns {?Array} an array with the keys of the path found between the two vertices,
		   *                   including those two vertices themselves; `null` if no such path exists
		   */
			}, {
				key: "path",
				value: function path(from, to) {
					var result = this.paths(from, to).next();
					return result.done ? null : result.value;
				}
		
				/**
		   * Test whether there is a directed path between a given pair of keys.
		   * @param from {string} the originating vertex
		   * @param to   {string} the terminating vertex
		   * @throws {Graph.VertexNotExistsError} if the `from` and/or `to` vertices do not yet exist in the graph
		   * @returns {boolean} whether such a path exists
		   */
			}, {
				key: "hasPath",
				value: function hasPath(from, to) {
					return !this.paths(from, to).next().done;
				}
		
				/**
		   * Get the number of edges going out of a given vertex.
		   * @throws {Graph.VertexNotExistsError} if a vertex with this key does not exist
		   * @param key {string} the key of the vertex to query
		   * @returns {number} the number of edges going out of the `key` vertex
		   */
			}, {
				key: "outDegree",
				value: function outDegree(key) {
					this[_expectVertices](key);
					return this[_edges].get(key).size;
				}
		
				/**
		   * Get the number of edges coming into a given vertex.
		   * @throws {Graph.VertexNotExistsError} if a vertex with this key does not exist
		   * @param key {string} the key of the vertex to query
		   * @returns {number} the number of edges coming into the `key` vertex
		   */
			}, {
				key: "inDegree",
				value: function inDegree(key) {
					this[_expectVertices](key);
					return this[_reverseEdges].get(key).size;
				}
		
				/**
		   * Get the number of edges connected to a given vertex.
		   * @throws {Graph.VertexNotExistsError} if a vertex with this key does not exist
		   * @param key {string} the key of the vertex to query
		   * @returns {number} the number of edges connected to the `key` vertex
		   */
			}, {
				key: "degree",
				value: function degree(key) {
					return this.outDegree(key) + this.inDegree(key);
				}
		
				///////////////////////////////////////
				////////// Cloning and stuff //////////
				///////////////////////////////////////
		
				/**
		   * Merge another graph into this graph.
		   * @param other {Graph} the other graph to merge into this one
		   * @param [mV] {function(*, *, string): *}
		   *     a custom merge function for values stored in vertices;
		   *     defaults to whichever of the two values is not `undefined`,
		   *     giving preference to that of the other graph; The first and
		   *     second arguments are the vertex values of `this` graph and the
		   *     `other` graph respectively. The third is the corresponding `key`.
		   * @param [mE] {function(*, *, string, string): *}
		   *     a custom merge function for values stored in edges;
		   *     defaults to whichever of the two values is not `undefined`,
		   *     giving preference to that of the other graph; The first and
		   *     second arguments are the edge values of `this` graph and the
		   *     `other` graph respectively. The third and fourth are the
		   *     corresponding `from` and `to` keys.
		   */
			}, {
				key: "mergeIn",
				value: function mergeIn(other, mV, mE) {
					if (!mV) {
						mV = function (v1, v2) {
							return typeof v2 === 'undefined' ? v1 : v2;
						};
					}
					if (!mE) {
						mE = mV;
					}
					var _iteratorNormalCompletion22 = true;
					var _didIteratorError22 = false;
					var _iteratorError22 = undefined;
		
					try {
						for (var _iterator22 = other.vertices()[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
							var _step22$value = _slicedToArray(_step22.value, 1);
		
							var key = _step22$value[0];
		
							this.addVertex(key, mV(this.vertexValue(key), other.vertexValue(key), key));
						}
					} catch (err) {
						_didIteratorError22 = true;
						_iteratorError22 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion22 && _iterator22["return"]) {
								_iterator22["return"]();
							}
						} finally {
							if (_didIteratorError22) {
								throw _iteratorError22;
							}
						}
					}
		
					var _iteratorNormalCompletion23 = true;
					var _didIteratorError23 = false;
					var _iteratorError23 = undefined;
		
					try {
						for (var _iterator23 = other.edges()[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
							var _step23$value = _slicedToArray(_step23.value, 2);
		
							var from = _step23$value[0];
							var to = _step23$value[1];
		
							this.addEdge(from, to, mE(this.edgeValue(from, to), other.edgeValue(from, to), from, to));
						}
					} catch (err) {
						_didIteratorError23 = true;
						_iteratorError23 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion23 && _iterator23["return"]) {
								_iterator23["return"]();
							}
						} finally {
							if (_didIteratorError23) {
								throw _iteratorError23;
							}
						}
					}
				}
		
				/**
		   * Create a clone of this graph.
		   * @param [trV] {function(*, string): *}
		   *     a custom transformation function for values stored in vertices;
		   *     defaults to the identity function; The first argument is the
		   *     value to clone. The second is the corresponding `key`.
		   * @param [trE] {function(*, string, string): *}
		   *     a custom transformation function for values stored in edges;
		   *     defaults to the function given for `trV`; The first argument
		   *     is the value to clone. The second and third are the `from`
		   *     and `to` keys respectively.
		   * @returns {Graph} a clone of this graph
		   */
			}, {
				key: "clone",
				value: function clone() {
					var trV = arguments.length <= 0 || arguments[0] === undefined ? function (v) {
						return v;
					} : arguments[0];
					var trE = arguments.length <= 1 || arguments[1] === undefined ? trV : arguments[1];
					return (function () {
						var result = new Graph();
						result.mergeIn(this, function (v1, v2, key) {
							return trV(v2, key);
						}, function (v1, v2, from, to) {
							return trE(v2, from, to);
						});
						return result;
					}).apply(this, arguments);
				}
		
				/**
		   * Create a clone of this graph, but without any transitive edges.
		   * @param [trV] {function(*, string): *}
		   *     a custom transformation function for values stored in vertices;
		   *     defaults to the identity function; The first argument is the
		   *     value to clone. The second is the corresponding `key`.
		   * @param [trE] {function(*, string, string): *}
		   *     a custom transformation function for values stored in edges;
		   *     defaults to the function given for `trV`; The first argument
		   *     is the value to clone. The second and third are the `from`
		   *     and `to` keys respectively.
		   * @returns {Graph} a clone of this graph with all transitive edges removed
		   */
			}, {
				key: "transitiveReduction",
				value: function transitiveReduction(trV, trE) {
					// argument defaults are handled in `clone`
					var result = this.clone(trV, trE);
					var _iteratorNormalCompletion24 = true;
					var _didIteratorError24 = false;
					var _iteratorError24 = undefined;
		
					try {
						for (var _iterator24 = this.vertices()[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
							var _step24$value = _slicedToArray(_step24.value, 1);
		
							var x = _step24$value[0];
							var _iteratorNormalCompletion25 = true;
							var _didIteratorError25 = false;
							var _iteratorError25 = undefined;
		
							try {
								for (var _iterator25 = this.vertices()[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
									var _step25$value = _slicedToArray(_step25.value, 1);
		
									var y = _step25$value[0];
		
									if (result.hasEdge(x, y)) {
										var _iteratorNormalCompletion26 = true;
										var _didIteratorError26 = false;
										var _iteratorError26 = undefined;
		
										try {
											for (var _iterator26 = this.vertices()[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
												var _step26$value = _slicedToArray(_step26.value, 1);
		
												var z = _step26$value[0];
		
												if (result.hasPath(y, z)) result.removeEdge(x, z);
											}
										} catch (err) {
											_didIteratorError26 = true;
											_iteratorError26 = err;
										} finally {
											try {
												if (!_iteratorNormalCompletion26 && _iterator26["return"]) {
													_iterator26["return"]();
												}
											} finally {
												if (_didIteratorError26) {
													throw _iteratorError26;
												}
											}
										}
									}
								}
							} catch (err) {
								_didIteratorError25 = true;
								_iteratorError25 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion25 && _iterator25["return"]) {
										_iterator25["return"]();
									}
								} finally {
									if (_didIteratorError25) {
										throw _iteratorError25;
									}
								}
							}
						}
					} catch (err) {
						_didIteratorError24 = true;
						_iteratorError24 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion24 && _iterator24["return"]) {
								_iterator24["return"]();
							}
						} finally {
							if (_didIteratorError24) {
								throw _iteratorError24;
							}
						}
					}
		
					return result;
				}
		
				/**
		   * This method replaces stretches of non-branching directed pathway into single edges.
		   * More specifically, it identifies all 'nexus' vertices in the graph and preserves them.
		   * It then removes all other vertices and all edges from the graph, then inserts edges
		   * between nexuses that summarize the connectivity that was there before.
		   *
		   * A nexus is any vertex that is *not* characterized by '1 edge in, 1 edge out'.
		   * A custom `isNexus` function may be provided to manually select additional vertices
		   * that should be preserved as nexus.
		   * @param [isNexus] {function(string, *): boolean}
		   *                  a predicate for identifying additional vertices that should be treated as nexus;
		   *                  It receives a `key` and `value` associated to a vertex and should return
		   *                  true if and only if that vertex should be a nexus.
		   * @throws {Graph.BranchlessCycleError} if the graph contains a cycle with no branches or nexuses
		   */
			}, {
				key: "contractPaths",
				value: function contractPaths() {
					var _this2 = this;
		
					var isNexus = arguments.length <= 0 || arguments[0] === undefined ? function () {
						return false;
					} : arguments[0];
		
					/* what makes a a vertex a nexus (start/end-point) */
					var nexuses = new Set([].concat(_toConsumableArray(this.vertices())).filter(function (_ref) {
						var _ref2 = _slicedToArray(_ref, 2);
		
						var key = _ref2[0];
						var val = _ref2[1];
						return _this2.outDegree(key) !== 1 || _this2.inDegree(key) !== 1 || isNexus(key, val);
					}).map(function (_ref3) {
						var _ref32 = _slicedToArray(_ref3, 1);
		
						var key = _ref32[0];
						return key;
					}));
		
					/* error if there is a branch-less cycle */
					{
						var _iteratorNormalCompletion29;
		
						var _didIteratorError29;
		
						var _iteratorError29;
		
						var _iterator29, _step29;
		
						(function () {
							var unhandledVertices = new Set([].concat(_toConsumableArray(_this2.vertices())).map(function (_ref4) {
								var _ref42 = _slicedToArray(_ref4, 1);
		
								var key = _ref42[0];
								return key;
							}));
							var checkForBlCycle = function checkForBlCycle(key) {
								if (!unhandledVertices.has(key)) {
									return;
								}
								unhandledVertices["delete"](key);
								var _iteratorNormalCompletion27 = true;
								var _didIteratorError27 = false;
								var _iteratorError27 = undefined;
		
								try {
									for (var _iterator27 = _this2.verticesFrom(key)[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
										var _step27$value = _slicedToArray(_step27.value, 1);
		
										var next = _step27$value[0];
										checkForBlCycle(next);
									}
								} catch (err) {
									_didIteratorError27 = true;
									_iteratorError27 = err;
								} finally {
									try {
										if (!_iteratorNormalCompletion27 && _iterator27["return"]) {
											_iterator27["return"]();
										}
									} finally {
										if (_didIteratorError27) {
											throw _iteratorError27;
										}
									}
								}
		
								var _iteratorNormalCompletion28 = true;
								var _didIteratorError28 = false;
								var _iteratorError28 = undefined;
		
								try {
									for (var _iterator28 = _this2.verticesTo(key)[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
										var _step28$value = _slicedToArray(_step28.value, 1);
		
										var next = _step28$value[0];
										checkForBlCycle(next);
									}
								} catch (err) {
									_didIteratorError28 = true;
									_iteratorError28 = err;
								} finally {
									try {
										if (!_iteratorNormalCompletion28 && _iterator28["return"]) {
											_iterator28["return"]();
										}
									} finally {
										if (_didIteratorError28) {
											throw _iteratorError28;
										}
									}
								}
							};
							_iteratorNormalCompletion29 = true;
							_didIteratorError29 = false;
							_iteratorError29 = undefined;
		
							try {
								for (_iterator29 = nexuses[Symbol.iterator](); !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
									var key = _step29.value;
									checkForBlCycle(key);
								}
							} catch (err) {
								_didIteratorError29 = true;
								_iteratorError29 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion29 && _iterator29["return"]) {
										_iterator29["return"]();
									}
								} finally {
									if (_didIteratorError29) {
										throw _iteratorError29;
									}
								}
							}
		
							if (unhandledVertices.size > 0) {
								var startingKey = unhandledVertices.values().next().value,
								    cycle = [],
								    current = startingKey;
								do {
									cycle.push(current);
									current = _this2.verticesFrom(current).next().value[0];
								} while (current !== startingKey);
								throw new Graph.BranchlessCycleError(cycle);
							}
						})();
					}
		
					/* bookkeeping */
					var contractionsToAdd = new Map();
		
					/* register the path starting with the given edge */
					var startPath = function startPath(start, next, backwards) {
						/* functions to help branch on `backwards` */
						var fromTo = function fromTo() {
							var strt = arguments.length <= 0 || arguments[0] === undefined ? start : arguments[0];
							var nxt = arguments.length <= 1 || arguments[1] === undefined ? next : arguments[1];
							return backwards ? [nxt, strt] : [strt, nxt];
						};
						var verticesNext = function verticesNext(v) {
							return backwards ? _this2.verticesTo(v) : _this2.verticesFrom(v);
						};
		
						/* bookkeeping */
						var verticesToRemove = new Set();
						var edgesToRemove = new Set();
						var path = new Graph();
		
						/* process the start of the path */
						path.addVertex(start, _this2.vertexValue(start));
						path.addVertex(next, _this2.vertexValue(next));
						path.addNewEdge.apply(path, _toConsumableArray(fromTo()).concat([_this2.edgeValue.apply(_this2, _toConsumableArray(fromTo()))]));
						edgesToRemove.add(fromTo());
		
						/* process as [current, next] moves across the path */
						var current = undefined;
						while (!nexuses.has(next)) {
							var _ref5 = [next, verticesNext(next).next().value[0]];
							current = _ref5[0];
							next = _ref5[1];
		
							path.addVertex(next, _this2.vertexValue(next));
							path.addNewEdge.apply(path, _toConsumableArray(fromTo(current, next)).concat([_this2.edgeValue.apply(_this2, _toConsumableArray(fromTo(current, next)))]));
							verticesToRemove.add(current);
							edgesToRemove.add(fromTo(current, next));
						}
		
						/* register new path contraction */
						if (!contractionsToAdd.get(fromTo()[0])) {
							contractionsToAdd.set(fromTo()[0], new Map());
						}
						if (!contractionsToAdd.get(fromTo()[0]).get(fromTo()[1])) {
							contractionsToAdd.get(fromTo()[0]).set(fromTo()[1], new Graph());
						}
						contractionsToAdd.get(fromTo()[0]).get(fromTo()[1]).mergeIn(path);
		
						/* remove old edges and vertices */
						var _iteratorNormalCompletion30 = true;
						var _didIteratorError30 = false;
						var _iteratorError30 = undefined;
		
						try {
							for (var _iterator30 = edgesToRemove[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
								var key = _step30.value;
								_this2.removeExistingEdge.apply(_this2, _toConsumableArray(key));
							}
						} catch (err) {
							_didIteratorError30 = true;
							_iteratorError30 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion30 && _iterator30["return"]) {
									_iterator30["return"]();
								}
							} finally {
								if (_didIteratorError30) {
									throw _iteratorError30;
								}
							}
						}
		
						var _iteratorNormalCompletion31 = true;
						var _didIteratorError31 = false;
						var _iteratorError31 = undefined;
		
						try {
							for (var _iterator31 = verticesToRemove[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
								var key = _step31.value;
								_this2.destroyExistingVertex(key);
							}
						} catch (err) {
							_didIteratorError31 = true;
							_iteratorError31 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion31 && _iterator31["return"]) {
									_iterator31["return"]();
								}
							} finally {
								if (_didIteratorError31) {
									throw _iteratorError31;
								}
							}
						}
					};
		
					/* process paths starting at all nexus points */
					var _iteratorNormalCompletion32 = true;
					var _didIteratorError32 = false;
					var _iteratorError32 = undefined;
		
					try {
						for (var _iterator32 = nexuses[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
							var first = _step32.value;
							var _iteratorNormalCompletion34 = true;
							var _didIteratorError34 = false;
							var _iteratorError34 = undefined;
		
							try {
								for (var _iterator34 = this.verticesFrom(first)[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
									var _step34$value = _slicedToArray(_step34.value, 1);
		
									var next = _step34$value[0];
									startPath(first, next, false);
								}
							} catch (err) {
								_didIteratorError34 = true;
								_iteratorError34 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion34 && _iterator34["return"]) {
										_iterator34["return"]();
									}
								} finally {
									if (_didIteratorError34) {
										throw _iteratorError34;
									}
								}
							}
		
							var _iteratorNormalCompletion35 = true;
							var _didIteratorError35 = false;
							var _iteratorError35 = undefined;
		
							try {
								for (var _iterator35 = this.verticesTo(first)[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
									var _step35$value = _slicedToArray(_step35.value, 1);
		
									var next = _step35$value[0];
									startPath(first, next, true);
								}
							} catch (err) {
								_didIteratorError35 = true;
								_iteratorError35 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion35 && _iterator35["return"]) {
										_iterator35["return"]();
									}
								} finally {
									if (_didIteratorError35) {
										throw _iteratorError35;
									}
								}
							}
						}
		
						/* add the replacement edges */
					} catch (err) {
						_didIteratorError32 = true;
						_iteratorError32 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion32 && _iterator32["return"]) {
								_iterator32["return"]();
							}
						} finally {
							if (_didIteratorError32) {
								throw _iteratorError32;
							}
						}
					}
		
					var _iteratorNormalCompletion33 = true;
					var _didIteratorError33 = false;
					var _iteratorError33 = undefined;
		
					try {
						for (var _iterator33 = contractionsToAdd[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
							var _step33$value = _slicedToArray(_step33.value, 2);
		
							var from = _step33$value[0];
							var toVal = _step33$value[1];
							var _iteratorNormalCompletion36 = true;
							var _didIteratorError36 = false;
							var _iteratorError36 = undefined;
		
							try {
								for (var _iterator36 = toVal[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
									var _step36$value = _slicedToArray(_step36.value, 2);
		
									var to = _step36$value[0];
									var rememberedPath = _step36$value[1];
		
									this.addNewEdge(from, to, rememberedPath);
								}
							} catch (err) {
								_didIteratorError36 = true;
								_iteratorError36 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion36 && _iterator36["return"]) {
										_iterator36["return"]();
									}
								} finally {
									if (_didIteratorError36) {
										throw _iteratorError36;
									}
								}
							}
						}
					} catch (err) {
						_didIteratorError33 = true;
						_iteratorError33 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion33 && _iterator33["return"]) {
								_iterator33["return"]();
							}
						} finally {
							if (_didIteratorError33) {
								throw _iteratorError33;
							}
						}
					}
				}
		
				////////////////////////////////
				////////// Assertions //////////
				////////////////////////////////
		
			}, {
				key: _expectVertices,
				value: function value() {
					var _this3 = this;
		
					for (var _len2 = arguments.length, keys = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
						keys[_key3] = arguments[_key3];
					}
		
					var missingVertices = keys.filter(function (k) {
						return !_this3.hasVertex(k);
					});
					if (missingVertices.length) {
						throw new (_bind.apply(Graph.VertexNotExistsError, [null].concat(_toConsumableArray(missingVertices))))();
					}
				}
			}, {
				key: _expectVerticesAbsent,
				value: function value() {
					var _this4 = this;
		
					for (var _len3 = arguments.length, keys = Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
						keys[_key4] = arguments[_key4];
					}
		
					var presentVertices = keys.filter(function (k) {
						return _this4.hasVertex(k);
					});
					if (presentVertices.length) {
						throw new (_bind.apply(Graph.VertexExistsError, [null].concat(_toConsumableArray(presentVertices.map(function (k) {
							return [k, _this4.vertexValue(k)];
						})))))();
					}
				}
			}, {
				key: _expectEdges,
				value: function value() {
					var _this5 = this;
		
					for (var _len4 = arguments.length, keys = Array(_len4), _key5 = 0; _key5 < _len4; _key5++) {
						keys[_key5] = arguments[_key5];
					}
		
					var absentEdges = keys.filter(function (k) {
						return !_this5.hasEdge.apply(_this5, _toConsumableArray(k));
					});
					if (absentEdges.length) {
						throw new (_bind.apply(Graph.EdgeNotExistsError, [null].concat(_toConsumableArray(absentEdges))))();
					}
				}
			}, {
				key: _expectEdgesAbsent,
				value: function value() {
					var _this6 = this;
		
					for (var _len5 = arguments.length, keys = Array(_len5), _key6 = 0; _key6 < _len5; _key6++) {
						keys[_key6] = arguments[_key6];
					}
		
					var presentEdges = keys.filter(function (k) {
						return _this6.hasEdge.apply(_this6, _toConsumableArray(k));
					});
					if (presentEdges.length) {
						throw new (_bind.apply(Graph.EdgeExistsError, [null].concat(_toConsumableArray(presentEdges.map(function (k) {
							return [k, _this6.edgeValue.apply(_this6, _toConsumableArray(k))];
						})))))();
					}
				}
			}, {
				key: _expectNoConnectedEdges,
				value: function value(key) {
					var edges = [];
					var _iteratorNormalCompletion37 = true;
					var _didIteratorError37 = false;
					var _iteratorError37 = undefined;
		
					try {
						for (var _iterator37 = this.verticesFrom(key)[Symbol.iterator](), _step37; !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
							var _step37$value = _slicedToArray(_step37.value, 1);
		
							var to = _step37$value[0];
							edges.push([[key, to], this.edgeValue(key, to)]);
						}
					} catch (err) {
						_didIteratorError37 = true;
						_iteratorError37 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion37 && _iterator37["return"]) {
								_iterator37["return"]();
							}
						} finally {
							if (_didIteratorError37) {
								throw _iteratorError37;
							}
						}
					}
		
					var _iteratorNormalCompletion38 = true;
					var _didIteratorError38 = false;
					var _iteratorError38 = undefined;
		
					try {
						for (var _iterator38 = this.verticesTo(key)[Symbol.iterator](), _step38; !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
							var _step38$value = _slicedToArray(_step38.value, 1);
		
							var from = _step38$value[0];
							edges.push([[from, key], this.edgeValue(from, key)]);
						}
					} catch (err) {
						_didIteratorError38 = true;
						_iteratorError38 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion38 && _iterator38["return"]) {
								_iterator38["return"]();
							}
						} finally {
							if (_didIteratorError38) {
								throw _iteratorError38;
							}
						}
					}
		
					if (edges.length) {
						throw new (_bind.apply(Graph.HasConnectedEdgesError, [null].concat([key], edges)))();
					}
				}
			}]);
		
			return Graph;
		})();
		
		exports["default"] = Graph;
		Graph.VertexExistsError = (function (_Error) {
			_inherits(VertexExistsError, _Error);
		
			function VertexExistsError() {
				_classCallCheck(this, VertexExistsError);
		
				_get(Object.getPrototypeOf(VertexExistsError.prototype), "constructor", this).call(this);
				/**
		   * the set of relevant vertices as `[key, value]` shaped arrays
		   * @public
		   * @constant vertices
		   * @memberof Graph.VertexExistsError
		   * @instance
		   * @type {Set.<Array>}
		   */
		
				for (var _len6 = arguments.length, vertices = Array(_len6), _key7 = 0; _key7 < _len6; _key7++) {
					vertices[_key7] = arguments[_key7];
				}
		
				this.vertices = new Set(vertices);
				this.message = "This graph has " + (this.vertices.size === 1 ? "a vertex" : "vertices") + " '" + [].concat(_toConsumableArray(this.vertices)).map(function (_ref6) {
					var _ref62 = _slicedToArray(_ref6, 1);
		
					var key = _ref62[0];
					return key;
				}).join("', '") + "'";
			}
		
			return VertexExistsError;
		})(Error);
		
		/**
		 * @class
		 * @classdesc This type of error is thrown when specific vertices are expected to exist, but don't.
		 * @extends Error
		 */
		Graph.VertexNotExistsError = (function (_Error2) {
			_inherits(VertexNotExistsError, _Error2);
		
			function VertexNotExistsError() {
				_classCallCheck(this, VertexNotExistsError);
		
				_get(Object.getPrototypeOf(VertexNotExistsError.prototype), "constructor", this).call(this);
				/**
		   * the set of relevant vertex keys
		   * @public
		   * @constant vertices
		   * @memberof Graph.VertexNotExistsError
		   * @instance
		   * @type {Set.<string>}
		   */
		
				for (var _len7 = arguments.length, keys = Array(_len7), _key8 = 0; _key8 < _len7; _key8++) {
					keys[_key8] = arguments[_key8];
				}
		
				this.vertices = new Set(keys);
				this.message = "This graph does not have " + (this.vertices.size === 1 ? "a vertex" : "vertices") + " '" + [].concat(_toConsumableArray(this.vertices)).join("', '") + "'";
			}
		
			return VertexNotExistsError;
		})(Error);
		
		/**
		 * @class
		 * @classdesc This type of error is thrown when specific edges are expected not to exist, but do.
		 * @extends Error
		 */
		Graph.EdgeExistsError = (function (_Error3) {
			_inherits(EdgeExistsError, _Error3);
		
			function EdgeExistsError() {
				_classCallCheck(this, EdgeExistsError);
		
				_get(Object.getPrototypeOf(EdgeExistsError.prototype), "constructor", this).call(this);
				/**
		   * the set of relevant edges as `[[from, to], value]` shaped arrays
		   * @public
		   * @constant edges
		   * @memberof Graph.EdgeExistsError
		   * @instance
		   * @type {Set.<Array>}
		   */
		
				for (var _len8 = arguments.length, edges = Array(_len8), _key9 = 0; _key9 < _len8; _key9++) {
					edges[_key9] = arguments[_key9];
				}
		
				this.edges = new Set(edges);
				this.message = "This graph has " + (this.edges.size === 1 ? "an edge" : "edges") + " " + [].concat(_toConsumableArray(this.edges)).map(function (_ref7) {
					var _ref72 = _slicedToArray(_ref7, 1);
		
					var _ref72$0 = _slicedToArray(_ref72[0], 2);
		
					var from = _ref72$0[0];
					var to = _ref72$0[1];
					return "['" + from + "', '" + to + "']";
				}).join(", ");
			}
		
			return EdgeExistsError;
		})(Error);
		
		/**
		 * @class
		 * @classdesc This type of error is thrown when specific edges are expected to exist, but don't.
		 * @extends Error
		 */
		Graph.EdgeNotExistsError = (function (_Error4) {
			_inherits(EdgeNotExistsError, _Error4);
		
			function EdgeNotExistsError() {
				_classCallCheck(this, EdgeNotExistsError);
		
				_get(Object.getPrototypeOf(EdgeNotExistsError.prototype), "constructor", this).call(this);
				/**
		   * the set of relevant edge keys as `[from, to]` shaped arrays
		   * @public
		   * @constant edges
		   * @memberof Graph.EdgeNotExistsError
		   * @instance
		   * @type {Set.<Array.<string>>}
		   */
		
				for (var _len9 = arguments.length, edges = Array(_len9), _key10 = 0; _key10 < _len9; _key10++) {
					edges[_key10] = arguments[_key10];
				}
		
				this.edges = new Set(edges);
				this.message = "This graph does not have " + (this.edges.size === 1 ? "an edge" : "edges") + " " + [].concat(_toConsumableArray(this.edges)).map(function (_ref8) {
					var _ref82 = _slicedToArray(_ref8, 2);
		
					var from = _ref82[0];
					var to = _ref82[1];
					return "['" + from + "', '" + to + "']";
				}).join(", ");
			}
		
			return EdgeNotExistsError;
		})(Error);
		
		/**
		 * @class
		 * @classdesc This type of error is thrown when a vertex is expected not to have any connected edges, but does.
		 * @extends Graph.EdgeExistsError
		 */
		Graph.HasConnectedEdgesError = (function (_Graph$EdgeExistsError) {
			_inherits(HasConnectedEdgesError, _Graph$EdgeExistsError);
		
			function HasConnectedEdgesError(key) {
				_classCallCheck(this, HasConnectedEdgesError);
		
				for (var _len10 = arguments.length, edges = Array(_len10 > 1 ? _len10 - 1 : 0), _key11 = 1; _key11 < _len10; _key11++) {
					edges[_key11 - 1] = arguments[_key11];
				}
		
				_get(Object.getPrototypeOf(HasConnectedEdgesError.prototype), "constructor", this).apply(this, edges);
				/**
		   * the key of the vertex that has connected edges
		   * @public
		   * @constant vertex
		   * @memberof Graph.HasConnectedEdgesError
		   * @instance
		   * @type {string}
		   */
				this.vertex = key;
				this.message = "The '" + key + "' vertex has connected " + (this.edges.size === 1 ? "an edge" : "edges") + " " + [].concat(_toConsumableArray(this.edges)).map(function (_ref9) {
					var _ref92 = _slicedToArray(_ref9, 1);
		
					var _ref92$0 = _slicedToArray(_ref92[0], 2);
		
					var from = _ref92$0[0];
					var to = _ref92$0[1];
					return "['" + from + "', '" + to + "']";
				}).join(", ");
			}
		
			return HasConnectedEdgesError;
		})(Graph.EdgeExistsError);
		
		/**
		 * @class
		 * @classdesc This type of error is thrown when a graph is expected not to have a directed cycle, but does.
		 * @extends Error
		 */
		Graph.CycleError = (function (_Error5) {
			_inherits(CycleError, _Error5);
		
			function CycleError(cycle) {
				_classCallCheck(this, CycleError);
		
				_get(Object.getPrototypeOf(CycleError.prototype), "constructor", this).call(this);
				/**
		   * the vertices involved in the cycle, in order but with an unspecified starting point
		   * @public
		   * @constant cycle
		   * @memberof Graph.CycleError
		   * @instance
		   * @type {Array.<string>}
		   */
				this.cycle = cycle;
				this.message = "This graph contains a cycle: " + cycle;
			}
		
			return CycleError;
		})(Error);
		
		/**
		 * @class
		 * @classdesc This type of error is thrown when a graph is expected not to have a branch-less directed cycle, but does.
		 * @extends Graph.CycleError
		 */
		Graph.BranchlessCycleError = (function (_Graph$CycleError) {
			_inherits(BranchlessCycleError, _Graph$CycleError);
		
			function BranchlessCycleError(cycle) {
				_classCallCheck(this, BranchlessCycleError);
		
				_get(Object.getPrototypeOf(BranchlessCycleError.prototype), "constructor", this).call(this, cycle);
				this.message = "This graph contains a branch-less cycle: " + cycle;
			}
		
			return BranchlessCycleError;
		})(Graph.CycleError);
		module.exports = exports["default"];
		// stack
	
		// This algorithm is based on the following article:
		// Enumeration of the elementary circuits of a directed graph
		// R. Tarjan, SIAM Journal on Computing, 2 (1973), pp. 211-216
		// http://dx.doi.org/10.1137/0202017
		// -----
		// TODO: implement the improved version as defined by Johnson:
		// Finding all the elementary circuits of a directed graph.
		// D. B. Johnson, SIAM Journal on Computing 4, no. 1, 77-84, 1975.
		// http://dx.doi.org/10.1137/0204007
	
		/* bookkeeping */
	
		/* the main recursive backtracking algorithm */
		// if a simple cycle continuing the partial path on the pointStack has been found
	
		/* start backtracking from each vertex in the graph */
	
	/***/ }
	
	/******/ })
	});
	;
	//# sourceMappingURL=graph.js.map

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(123);
	
	module.exports = function get() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(384);
	
	module.exports = function inRange() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(8);
	
	module.exports = function isArray() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(388);
	
	module.exports = function isNull() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(57);
	
	module.exports = function isString() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(9);
	
	module.exports = function keys() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(39),
	    root = __webpack_require__(11);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(110),
	    setCacheAdd = __webpack_require__(363),
	    setCacheHas = __webpack_require__(364);
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	module.exports = SetCache;


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(11);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;


/***/ },
/* 153 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	module.exports = apply;


/***/ },
/* 154 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}
	
	module.exports = arrayReduce;


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(290),
	    keys = __webpack_require__(9);
	
	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(115),
	    isKey = __webpack_require__(55),
	    toKey = __webpack_require__(40);
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(112),
	    isArray = __webpack_require__(8);
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	module.exports = baseGetAllKeys;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(118);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return object != null &&
	    (hasOwnProperty.call(object, key) ||
	      (typeof object == 'object' && key in object && getPrototype(object) === null));
	}
	
	module.exports = baseHas;


/***/ },
/* 159 */
/***/ function(module, exports) {

	/**
	 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property identifiers to pick from.
	 * @param {Function} predicate The function invoked per property.
	 * @returns {Object} Returns the new object.
	 */
	function basePickBy(object, props, predicate) {
	  var index = -1,
	      length = props.length,
	      result = {};
	
	  while (++index < length) {
	    var key = props[index],
	        value = object[key];
	
	    if (predicate(value, key)) {
	      result[key] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = basePickBy;


/***/ },
/* 160 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(74),
	    isSymbol = __webpack_require__(58);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = baseToString;


/***/ },
/* 162 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(151),
	    arrayIncludes = __webpack_require__(279),
	    arrayIncludesWith = __webpack_require__(280),
	    cacheHas = __webpack_require__(312),
	    createSet = __webpack_require__(328),
	    setToArray = __webpack_require__(83);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;
	
	  if (comparator) {
	    isCommon = false;
	    includes = arrayIncludesWith;
	  }
	  else if (length >= LARGE_ARRAY_SIZE) {
	    var set = iteratee ? null : createSet(array);
	    if (set) {
	      return setToArray(set);
	    }
	    isCommon = false;
	    includes = cacheHas;
	    seen = new SetCache;
	  }
	  else {
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;
	
	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseUniq;


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(151),
	    arraySome = __webpack_require__(281);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;
	
	  stack.set(array, other);
	  stack.set(other, array);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!seen.has(othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.add(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalArrays;


/***/ },
/* 165 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(160),
	    isArguments = __webpack_require__(124),
	    isArray = __webpack_require__(8),
	    isLength = __webpack_require__(85),
	    isString = __webpack_require__(57);
	
	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) &&
	      (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}
	
	module.exports = indexKeys;


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ },
/* 168 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}
	
	module.exports = matchesStrictComparable;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(165);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(132)(module)))

/***/ },
/* 170 */
/***/ function(module, exports) {

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ },
/* 171 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(113);
	
	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are **not** supported.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent,
	 *  else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}
	
	module.exports = isEqual;


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var baseKeysIn = __webpack_require__(302),
	    indexKeys = __webpack_require__(166),
	    isIndex = __webpack_require__(54),
	    isPrototype = __webpack_require__(81);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  var index = -1,
	      isProto = isPrototype(object),
	      props = baseKeysIn(object),
	      propsLength = props.length,
	      indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if (!(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(110);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;
	
	module.exports = memoize;


/***/ },
/* 175 */
/***/ function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	module.exports = stubArray;


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(178);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;
	
	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}
	
	module.exports = toFinite;


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(176);
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;
	
	  return result === result ? (remainder ? result - remainder : result) : 0;
	}
	
	module.exports = toInteger;


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(84),
	    isObject = __webpack_require__(12),
	    isSymbol = __webpack_require__(58);
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = toNumber;


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(86);
	
	/** Used to generate unique IDs. */
	var idCounter = 0;
	
	/**
	 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {string} [prefix=''] The value to prefix the ID with.
	 * @returns {string} Returns the unique ID.
	 * @example
	 *
	 * _.uniqueId('contact_');
	 * // => 'contact_104'
	 *
	 * _.uniqueId();
	 * // => '105'
	 */
	function uniqueId(prefix) {
	  var id = ++idCounter;
	  return toString(prefix) + id;
	}
	
	module.exports = uniqueId;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var baseValues = __webpack_require__(311),
	    keys = __webpack_require__(9);
	
	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return object ? baseValues(object, keys(object)) : [];
	}
	
	module.exports = values;


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(22);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ScalarObservable = (function (_super) {
	    __extends(ScalarObservable, _super);
	    function ScalarObservable(value, scheduler) {
	        _super.call(this);
	        this.value = value;
	        this.scheduler = scheduler;
	        this._isScalar = true;
	        if (scheduler) {
	            this._isScalar = false;
	        }
	    }
	    ScalarObservable.create = function (value, scheduler) {
	        return new ScalarObservable(value, scheduler);
	    };
	    ScalarObservable.dispatch = function (state) {
	        var done = state.done, value = state.value, subscriber = state.subscriber;
	        if (done) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(value);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.done = true;
	        this.schedule(state);
	    };
	    ScalarObservable.prototype._subscribe = function (subscriber) {
	        var value = this.value;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ScalarObservable.dispatch, 0, {
	                done: false, value: value, subscriber: subscriber
	            });
	        }
	        else {
	            subscriber.next(value);
	            if (!subscriber.isUnsubscribed) {
	                subscriber.complete();
	            }
	        }
	    };
	    return ScalarObservable;
	}(Observable_1.Observable));
	exports.ScalarObservable = ScalarObservable;
	//# sourceMappingURL=ScalarObservable.js.map

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isScheduler_1 = __webpack_require__(62);
	var isArray_1 = __webpack_require__(88);
	var ArrayObservable_1 = __webpack_require__(60);
	var combineLatest_1 = __webpack_require__(421);
	/* tslint:enable:max-line-length */
	/**
	 * Combines multiple Observables to create an Observable whose values are
	 * calculated from the latest values of each of its input Observables.
	 *
	 * <span class="informal">Whenever any input Observable emits a value, it
	 * computes a formula using the latest values from all the inputs, then emits
	 * the output of that formula.</span>
	 *
	 * <img src="./img/combineLatest.png" width="100%">
	 *
	 * `combineLatest` combines the values from all the Observables passed as
	 * arguments. This is done by subscribing to each Observable, in order, and
	 * collecting an array of each of the most recent values any time any of the
	 * input Observables emits, then either taking that array and passing it as
	 * arguments to an optional `project` function and emitting the return value of
	 * that, or just emitting the array of recent values directly if there is no
	 * `project` function.
	 *
	 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
	 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
	 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
	 * var bmi = Rx.Observable.combineLatest(weight, height, (w, h) => w / (h * h));
	 * bmi.subscribe(x => console.log('BMI is ' + x));
	 *
	 * @see {@link combineAll}
	 * @see {@link merge}
	 * @see {@link withLatestFrom}
	 *
	 * @param {Observable} observable1 An input Observable to combine with the
	 * source Observable.
	 * @param {Observable} observable2 An input Observable to combine with the
	 * source Observable. More than one input Observables may be given as argument.
	 * @param {function} [project] An optional function to project the values from
	 * the combined latest values into a new value on the output Observable.
	 * @param {Scheduler} [scheduler=null] The Scheduler to use for subscribing to
	 * each input Observable.
	 * @return {Observable} An Observable of projected values from the most recent
	 * values from each input Observable, or an array of the most recent values from
	 * each input Observable.
	 * @static true
	 * @name combineLatest
	 * @owner Observable
	 */
	function combineLatest() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var project = null;
	    var scheduler = null;
	    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
	        scheduler = observables.pop();
	    }
	    if (typeof observables[observables.length - 1] === 'function') {
	        project = observables.pop();
	    }
	    // if the first and only other argument besides the resultSelector is an array
	    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
	    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
	        observables = observables[0];
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new combineLatest_1.CombineLatestOperator(project));
	}
	exports.combineLatest = combineLatest;
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var concat_1 = __webpack_require__(184);
	exports.concat = concat_1.concatStatic;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isScheduler_1 = __webpack_require__(62);
	var ArrayObservable_1 = __webpack_require__(60);
	var mergeAll_1 = __webpack_require__(186);
	/**
	 * Creates an output Observable which sequentially emits all values from every
	 * given input Observable after the current Observable.
	 *
	 * <span class="informal">Concatenates multiple Observables together by
	 * sequentially emitting their values, one Observable after the other.</span>
	 *
	 * <img src="./img/concat.png" width="100%">
	 *
	 * Joins this Observable with multiple other Observables by subscribing to them
	 * one at a time, starting with the source, and merging their results into the
	 * output Observable. Will wait for each Observable to complete before moving
	 * on to the next.
	 *
	 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
	 * var timer = Rx.Observable.interval(1000).take(4);
	 * var sequence = Rx.Observable.range(1, 10);
	 * var result = timer.concat(sequence);
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Concatenate 3 Observables</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var result = timer1.concat(timer2, timer3);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatAll}
	 * @see {@link concatMap}
	 * @see {@link concatMapTo}
	 *
	 * @param {Observable} other An input Observable to concatenate after the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
	 * Observable subscription on.
	 * @return {Observable} All values of each passed Observable merged into a
	 * single Observable, in order, in serial fashion.
	 * @method concat
	 * @owner Observable
	 */
	function concat() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    return concatStatic.apply(void 0, [this].concat(observables));
	}
	exports.concat = concat;
	/* tslint:enable:max-line-length */
	/**
	 * Creates an output Observable which sequentially emits all values from every
	 * given input Observable after the current Observable.
	 *
	 * <span class="informal">Concatenates multiple Observables together by
	 * sequentially emitting their values, one Observable after the other.</span>
	 *
	 * <img src="./img/concat.png" width="100%">
	 *
	 * Joins multiple Observables together by subscribing to them one at a time and
	 * merging their results into the output Observable. Will wait for each
	 * Observable to complete before moving on to the next.
	 *
	 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
	 * var timer = Rx.Observable.interval(1000).take(4);
	 * var sequence = Rx.Observable.range(1, 10);
	 * var result = Rx.Observable.concat(timer, sequence);
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Concatenate 3 Observables</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var result = Rx.Observable.concat(timer1, timer2, timer3);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatAll}
	 * @see {@link concatMap}
	 * @see {@link concatMapTo}
	 *
	 * @param {Observable} input1 An input Observable to concatenate with others.
	 * @param {Observable} input2 An input Observable to concatenate with others.
	 * More than one input Observables may be given as argument.
	 * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
	 * Observable subscription on.
	 * @return {Observable} All values of each passed Observable merged into a
	 * single Observable, in order, in serial fashion.
	 * @static true
	 * @name concat
	 * @owner Observable
	 */
	function concatStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var scheduler = null;
	    var args = observables;
	    if (isScheduler_1.isScheduler(args[observables.length - 1])) {
	        scheduler = args.pop();
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(1));
	}
	exports.concatStatic = concatStatic;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(60);
	var mergeAll_1 = __webpack_require__(186);
	var isScheduler_1 = __webpack_require__(62);
	/**
	 * Creates an output Observable which concurrently emits all values from every
	 * given input Observable.
	 *
	 * <span class="informal">Flattens multiple Observables together by blending
	 * their values into one Observable.</span>
	 *
	 * <img src="./img/merge.png" width="100%">
	 *
	 * `merge` subscribes to each given input Observable (either the source or an
	 * Observable given as argument), and simply forwards (without doing any
	 * transformation) all the values from all the input Observables to the output
	 * Observable. The output Observable only completes once all input Observables
	 * have completed. Any error delivered by an input Observable will be immediately
	 * emitted on the output Observable.
	 *
	 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var clicksOrTimer = clicks.merge(timer);
	 * clicksOrTimer.subscribe(x => console.log(x));
	 *
	 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var concurrent = 2; // the argument
	 * var merged = timer1.merge(timer2, timer3, concurrent);
	 * merged.subscribe(x => console.log(x));
	 *
	 * @see {@link mergeAll}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 *
	 * @param {Observable} other An input Observable to merge with the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
	 * concurrency of input Observables.
	 * @return {Observable} an Observable that emits items that are the result of
	 * every input Observable.
	 * @method merge
	 * @owner Observable
	 */
	function merge() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    observables.unshift(this);
	    return mergeStatic.apply(this, observables);
	}
	exports.merge = merge;
	/* tslint:enable:max-line-length */
	/**
	 * Creates an output Observable which concurrently emits all values from every
	 * given input Observable.
	 *
	 * <span class="informal">Flattens multiple Observables together by blending
	 * their values into one Observable.</span>
	 *
	 * <img src="./img/merge.png" width="100%">
	 *
	 * `merge` subscribes to each given input Observable (as arguments), and simply
	 * forwards (without doing any transformation) all the values from all the input
	 * Observables to the output Observable. The output Observable only completes
	 * once all input Observables have completed. Any error delivered by an input
	 * Observable will be immediately emitted on the output Observable.
	 *
	 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var clicksOrTimer = Rx.Observable.merge(clicks, timer);
	 * clicksOrTimer.subscribe(x => console.log(x));
	 *
	 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var concurrent = 2; // the argument
	 * var merged = Rx.Observable.merge(timer1, timer2, timer3, concurrent);
	 * merged.subscribe(x => console.log(x));
	 *
	 * @see {@link mergeAll}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 *
	 * @param {Observable} input1 An input Observable to merge with others.
	 * @param {Observable} input2 An input Observable to merge with others.
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
	 * concurrency of input Observables.
	 * @return {Observable} an Observable that emits items that are the result of
	 * every input Observable.
	 * @static true
	 * @name merge
	 * @owner Observable
	 */
	function mergeStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var concurrent = Number.POSITIVE_INFINITY;
	    var scheduler = null;
	    var last = observables[observables.length - 1];
	    if (isScheduler_1.isScheduler(last)) {
	        scheduler = observables.pop();
	        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
	            concurrent = observables.pop();
	        }
	    }
	    else if (typeof last === 'number') {
	        concurrent = observables.pop();
	    }
	    if (observables.length === 1) {
	        return observables[0];
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(concurrent));
	}
	exports.mergeStatic = mergeStatic;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(41);
	var subscribeToResult_1 = __webpack_require__(43);
	/**
	 * Converts a higher-order Observable into a first-order Observable which
	 * concurrently delivers all values that are emitted on the inner Observables.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables.</span>
	 *
	 * <img src="./img/mergeAll.png" width="100%">
	 *
	 * `mergeAll` subscribes to an Observable that emits Observables, also known as
	 * a higher-order Observable. Each time it observes one of these emitted inner
	 * Observables, it subscribes to that and delivers all the values from the
	 * inner Observable on the output Observable. The output Observable only
	 * completes once all inner Observables have completed. Any error delivered by
	 * a inner Observable will be immediately emitted on the output Observable.
	 *
	 * @example <caption>Spawn a new interval Observable for each click event, and blend their outputs as one Observable</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
	 * var firstOrder = higherOrder.mergeAll();
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @example <caption>Count from 0 to 9 every second for each click, but only allow 2 concurrent timers</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
	 * var firstOrder = higherOrder.mergeAll(2);
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @see {@link combineAll}
	 * @see {@link concatAll}
	 * @see {@link exhaust}
	 * @see {@link merge}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 * @see {@link switch}
	 * @see {@link zipAll}
	 *
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of inner
	 * Observables being subscribed to concurrently.
	 * @return {Observable} An Observable that emits values coming from all the
	 * inner Observables emitted by the source Observable.
	 * @method mergeAll
	 * @owner Observable
	 */
	function mergeAll(concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    return this.lift(new MergeAllOperator(concurrent));
	}
	exports.mergeAll = mergeAll;
	var MergeAllOperator = (function () {
	    function MergeAllOperator(concurrent) {
	        this.concurrent = concurrent;
	    }
	    MergeAllOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new MergeAllSubscriber(observer, this.concurrent));
	    };
	    return MergeAllOperator;
	}());
	exports.MergeAllOperator = MergeAllOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MergeAllSubscriber = (function (_super) {
	    __extends(MergeAllSubscriber, _super);
	    function MergeAllSubscriber(destination, concurrent) {
	        _super.call(this, destination);
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	    }
	    MergeAllSubscriber.prototype._next = function (observable) {
	        if (this.active < this.concurrent) {
	            this.active++;
	            this.add(subscribeToResult_1.subscribeToResult(this, observable));
	        }
	        else {
	            this.buffer.push(observable);
	        }
	    };
	    MergeAllSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeAllSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeAllSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeAllSubscriber = MergeAllSubscriber;
	//# sourceMappingURL=mergeAll.js.map

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(41);
	var subscribeToResult_1 = __webpack_require__(43);
	/**
	 * Emits the values emitted by the source Observable until a `notifier`
	 * Observable emits a value.
	 *
	 * <span class="informal">Lets values pass until a second Observable,
	 * `notifier`, emits something. Then, it completes.</span>
	 *
	 * <img src="./img/takeUntil.png" width="100%">
	 *
	 * `takeUntil` subscribes and begins mirroring the source Observable. It also
	 * monitors a second Observable, `notifier` that you provide. If the `notifier`
	 * emits a value or a complete notification, the output Observable stops
	 * mirroring the source Observable and completes.
	 *
	 * @example <caption>Tick every second until the first click happens</caption>
	 * var interval = Rx.Observable.interval(1000);
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = interval.takeUntil(clicks);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link take}
	 * @see {@link takeLast}
	 * @see {@link takeWhile}
	 * @see {@link skip}
	 *
	 * @param {Observable} notifier The Observable whose first emitted value will
	 * cause the output Observable of `takeUntil` to stop emitting values from the
	 * source Observable.
	 * @return {Observable<T>} An Observable that emits the values from the source
	 * Observable until such time as `notifier` emits its first value.
	 * @method takeUntil
	 * @owner Observable
	 */
	function takeUntil(notifier) {
	    return this.lift(new TakeUntilOperator(notifier));
	}
	exports.takeUntil = takeUntil;
	var TakeUntilOperator = (function () {
	    function TakeUntilOperator(notifier) {
	        this.notifier = notifier;
	    }
	    TakeUntilOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TakeUntilSubscriber(subscriber, this.notifier));
	    };
	    return TakeUntilOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TakeUntilSubscriber = (function (_super) {
	    __extends(TakeUntilSubscriber, _super);
	    function TakeUntilSubscriber(destination, notifier) {
	        _super.call(this, destination);
	        this.notifier = notifier;
	        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
	    }
	    TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.complete();
	    };
	    TakeUntilSubscriber.prototype.notifyComplete = function () {
	        // noop
	    };
	    return TakeUntilSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=takeUntil.js.map

/***/ },
/* 188 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when an action is invalid because the object has been
	 * unsubscribed.
	 *
	 * @see {@link Subject}
	 * @see {@link BehaviorSubject}
	 *
	 * @class ObjectUnsubscribedError
	 */
	var ObjectUnsubscribedError = (function (_super) {
	    __extends(ObjectUnsubscribedError, _super);
	    function ObjectUnsubscribedError() {
	        var err = _super.call(this, 'object unsubscribed');
	        this.name = err.name = 'ObjectUnsubscribedError';
	        this.stack = err.stack;
	        this.message = err.message;
	    }
	    return ObjectUnsubscribedError;
	}(Error));
	exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
	//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ },
/* 189 */
/***/ function(module, exports) {

	"use strict";
	function isFunction(x) {
	    return typeof x === 'function';
	}
	exports.isFunction = isFunction;
	//# sourceMappingURL=isFunction.js.map

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var errorObject_1 = __webpack_require__(131);
	var tryCatchTarget;
	function tryCatcher() {
	    try {
	        return tryCatchTarget.apply(this, arguments);
	    }
	    catch (e) {
	        errorObject_1.errorObject.e = e;
	        return errorObject_1.errorObject;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}
	exports.tryCatch = tryCatch;
	;
	//# sourceMappingURL=tryCatch.js.map

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(435);


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(36)
	  , toLength  = __webpack_require__(20)
	  , toIndex   = __webpack_require__(103);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , $export           = __webpack_require__(1)
	  , redefine          = __webpack_require__(34)
	  , redefineAll       = __webpack_require__(101)
	  , meta              = __webpack_require__(91)
	  , forOf             = __webpack_require__(135)
	  , anInstance        = __webpack_require__(90)
	  , isObject          = __webpack_require__(6)
	  , fails             = __webpack_require__(5)
	  , $iterDetect       = __webpack_require__(198)
	  , setToStringTag    = __webpack_require__(136)
	  , inheritIfRequired = __webpack_require__(231);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(30)
	  , redefine = __webpack_require__(34)
	  , fails    = __webpack_require__(5)
	  , defined  = __webpack_require__(49)
	  , wks      = __webpack_require__(7);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(2);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 196 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(6)
	  , cof      = __webpack_require__(48)
	  , MATCH    = __webpack_require__(7)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(7)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(97)|| !__webpack_require__(5)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(4)[K];
	});

/***/ },
/* 200 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(6)
	  , anObject = __webpack_require__(2);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(68)(Function.call, __webpack_require__(44).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , hide   = __webpack_require__(30)
	  , uid    = __webpack_require__(104)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;
	
	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');
	
	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class2, _temp, _initialiseProps, _assign$call;
	
	var _templateObject = _taggedTemplateLiteral(['\n\t\t\t\t\t\t\tThe ', ' property does not exist on ', '.\n\t\t\t\t\t\t'], ['\n\t\t\t\t\t\t\tThe ', ' property does not exist on ', '.\n\t\t\t\t\t\t']),
	    _templateObject2 = _taggedTemplateLiteral(['\n\t\t\tThe entity at \'', '\'\n\t\t\tis not of class \'', '\'\n\t\t\tbut of class \'', '\'.\n\t\t'], ['\n\t\t\tThe entity at \'', '\'\n\t\t\tis not of class \'', '\'\n\t\t\tbut of class \'', '\'.\n\t\t']),
	    _templateObject3 = _taggedTemplateLiteral(['\n\t\t\tThe \'', '\' class is not a singleton class.\n\t\t'], ['\n\t\t\tThe \'', '\' class is not a singleton class.\n\t\t']),
	    _templateObject4 = _taggedTemplateLiteral(['\n\t\t\tDo not use \'new ', '(...args)\'.\n\t\t\tInstead, use \'', '.new(...args)\'.\n\t\t'], ['\n\t\t\tDo not use \'new ', '(...args)\'.\n\t\t\tInstead, use \'', '.new(...args)\'.\n\t\t']),
	    _templateObject5 = _taggedTemplateLiteral(['\n\t\t\t\tCannot instantiate the abstract\n\t\t\t\tclass ', '.\n\t\t\t'], ['\n\t\t\t\tCannot instantiate the abstract\n\t\t\t\tclass ', '.\n\t\t\t']);
	
	var _isObject = __webpack_require__(72);
	
	var _isObject2 = _interopRequireDefault(_isObject);
	
	var _defaults = __webpack_require__(71);
	
	var _defaults2 = _interopRequireDefault(_defaults);
	
	var _size = __webpack_require__(107);
	
	var _size2 = _interopRequireDefault(_size);
	
	var _keys = __webpack_require__(149);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _values = __webpack_require__(108);
	
	var _values2 = _interopRequireDefault(_values);
	
	var _isFunction = __webpack_require__(105);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _uniqueId2 = __webpack_require__(179);
	
	var _uniqueId3 = _interopRequireDefault(_uniqueId2);
	
	var _ObservableSet = __webpack_require__(67);
	
	var _ObservableSet2 = _interopRequireDefault(_ObservableSet);
	
	var _misc = __webpack_require__(3);
	
	var _fields = __webpack_require__(138);
	
	var _ValueTracker2 = __webpack_require__(140);
	
	var _ValueTracker3 = _interopRequireDefault(_ValueTracker2);
	
	var _Change = __webpack_require__(205);
	
	var _BehaviorSubject = __webpack_require__(126);
	
	var _filter = __webpack_require__(29);
	
	var _merge = __webpack_require__(419);
	
	var _map = __webpack_require__(42);
	
	var _combineLatest = __webpack_require__(182);
	
	__webpack_require__(23);
	
	var _boundNativeMethods = __webpack_require__(10);
	
	var _babelHelpers = __webpack_require__(216);
	
	var _babelHelpers2 = _interopRequireDefault(_babelHelpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return _instanceof(left, right); } }
	
	function _initDefineProp(target, property, descriptor, context) {
		if (!descriptor) return;
		Object.defineProperty(target, property, {
			enumerable: descriptor.enumerable,
			configurable: descriptor.configurable,
			writable: descriptor.writable,
			value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
		});
	}
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
		var desc = {};
		Object['ke' + 'ys'](descriptor).forEach(function (key) {
			desc[key] = descriptor[key];
		});
		desc.enumerable = !!desc.enumerable;
		desc.configurable = !!desc.configurable;
	
		if ('value' in desc || desc.initializer) {
			desc.writable = true;
		}
	
		desc = decorators.slice().reverse().reduce(function (desc, decorator) {
			return decorator(target, property, desc) || desc;
		}, desc);
	
		if (context && desc.initializer !== void 0) {
			desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
			desc.initializer = undefined;
		}
	
		if (desc.initializer === void 0) {
			Object['define' + 'Property'](target, property, desc);
			desc = null;
		}
	
		return desc;
	}
	
	function _initializerWarningHelper(descriptor, context) {
		throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}
	
	var $$committedEntitiesByHref = Symbol('$$committedEntitiesByHref');
	var $$committedEntities = Symbol('$$committedEntities');
	var $$entities = Symbol('$$allEntities');
	var $$singletonObject = Symbol('$$singletonObject');
	var $$newEntitySubject = Symbol('$$newEntitySubject');
	var $$deleted = Symbol('$$deleted');
	var $$entitiesSubject = Symbol('$$allSubject');
	var $$committedEntitiesSubject = Symbol('$$allCommittedSubject');
	var $$set = Symbol('$$set');
	var $$PreferredClass = Symbol('$$PreferredClass');
	
	////////////////////////////////////////////////////////////////////////////////
	
	var Entity = (_dec = (0, _ValueTracker2.event)(), _dec2 = (0, _ValueTracker2.event)(), _dec3 = (0, _ValueTracker2.event)(), _dec4 = (0, _ValueTracker2.property)({ initial: false, readonly: true }), _dec5 = (0, _ValueTracker2.property)({ initial: true, readonly: true }), _dec6 = (0, _ValueTracker2.property)({ initial: false, readonly: true }), (_class = (_temp = _class2 = function (_ValueTracker) {
		_inherits(Entity, _ValueTracker);
	
		_createClass(Entity, [{
			key: Symbol.toStringTag,
	
	
			///////////////////////////////
			////////// INSTANCES //////////
			///////////////////////////////
	
			//noinspection JSDuplicatedDeclaration // hiding warning due to Webstorm bug
			get: function get() {
				return this.constructor.name;
			}
		}], [{
			key: 'createClass',
	
	
			////////////////////////////////////////////////////////////
			////////// STATIC (building Entity-based classes) //////////
			////////////////////////////////////////////////////////////
	
			value: function createClass(config) {
				var _defineProperties$cal;
	
				/* create the class with the right name, constructor and static content */
				var name = config.name;
	
				var rest = _objectWithoutProperties(config, ['name']);
	
				/* create the new class */
				// using Function constructor to give the class a dynamic name
				// http://stackoverflow.com/a/9947842/681588
				// (and using babel-technique to build it, rather than using class
				// expression, so that it can be extended by babel-compiled code)
	
	
				var EntitySubclass = new Function('Entity', '\n\t\t\t\'use strict\';\n\t\t\t' + _babelHelpers2.default + ';\n\t\t\treturn function (_Entity) {\n\t\t\t\t_inherits(' + name + ', _Entity);\n\t\t\t\tfunction ' + name + '() {\n\t\t\t\t\t_classCallCheck(this, ' + name + ');\n\t\t\t\t\treturn _possibleConstructorReturn(this, Object.getPrototypeOf(' + name + ').apply(this, arguments));\n\t\t\t\t}\n\t\t\t\treturn ' + name + ';\n\t\t\t}(Entity);\n\t\t')(Entity);
				// const EntitySubclass = class extends Entity {};
	
				/* populate it with the necessary data and behavior */
				_boundNativeMethods.assign.call(EntitySubclass, rest);
				_boundNativeMethods.defineProperties.call(EntitySubclass, (_defineProperties$cal = {
					name: { value: name }
				}, _defineProperty(_defineProperties$cal, Symbol.hasInstance, {
					value: function value(instance) {
						return this.hasInstance(instance);
					}
				}), _defineProperty(_defineProperties$cal, 'hasInstance', {
					value: function value(instance) {
						if (!instance) {
							return false;
						}
						return this.hasSubclass(instance.constructor);
					}
				}), _defineProperty(_defineProperties$cal, 'hasSubclass', {
					value: function value(otherClass) {
						// For both sides of this, there are two possibilities:
						// 1) the class is derived by this library
						// 2) the class is an extension of such
						// We need to check both possibilities.
						// We assume there is no subclass cycle.
						var isExtension = function isExtension(c) {
							return c && c.__proto__ !== Entity;
						};
						if (isExtension(this)) {
							// 'this' is an extension
							while (isExtension(otherClass) && otherClass !== this) {
								otherClass = otherClass.__proto__;
							}
							return otherClass === this;
						} else {
							while (isExtension(otherClass)) {
								// 'otherClass' is an extension
								otherClass = otherClass.__proto__;
							}
							if (!otherClass) {
								return false;
							}
							// both 'this' and 'otherClass' are library-derived
							if (otherClass === this) {
								return true;
							}
							var _iteratorNormalCompletion = true;
							var _didIteratorError = false;
							var _iteratorError = undefined;
	
							try {
								for (var _iterator = this.extendedBy[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
									var SubClass = _step.value;
	
									if (SubClass.hasSubclass(otherClass)) {
										return true;
									}
								}
							} catch (err) {
								_didIteratorError = true;
								_iteratorError = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion && _iterator.return) {
										_iterator.return();
									}
								} finally {
									if (_didIteratorError) {
										throw _iteratorError;
									}
								}
							}
	
							return false;
						}
					}
				}), _defineProperty(_defineProperties$cal, 'p', {
					value: function value(name) {
						switch (name) {
							case 'all':
								return this[$$entitiesSubject];
							case 'allCommitted':
								return this[$$committedEntitiesSubject];
							default:
								(0, _misc.constraint)(false, (0, _misc.humanMsg)(_templateObject, name, this.name));
						}
					}
				}), _defineProperty(_defineProperties$cal, 'supersede', {
					value: function value(factory) {
						return EntitySubclass[$$PreferredClass] = factory(EntitySubclass[$$PreferredClass] || EntitySubclass);
					}
				}), _defineProperties$cal));
	
				/* maintaining <Class>.p('all') and <Class>.p('allCommitted') */
				var _arr = [[$$entities, $$entitiesSubject], [$$committedEntities, $$committedEntitiesSubject]];
				for (var _i = 0; _i < _arr.length; _i++) {
					var _context;
	
					var _arr$_i = _slicedToArray(_arr[_i], 2);
	
					var _$$set = _arr$_i[0];
					var $$subject = _arr$_i[1];
	
					var localSet = new _ObservableSet2.default();
					(_context = Entity[_$$set].e('add'), _filter.filter).call(_context, EntitySubclass.hasInstance.bind(EntitySubclass)).subscribe(localSet.e('add'));
					(_context = Entity[_$$set].e('delete'), _filter.filter).call(_context, EntitySubclass.hasInstance.bind(EntitySubclass)).subscribe(localSet.e('delete'));
					_boundNativeMethods.defineProperty.call(EntitySubclass, $$subject, { value: localSet.p('value') });
				}
	
				return EntitySubclass;
			}
	
			/////////////////////////////////////////////////////////////////////
			////////// STATIC (creating / caching / finding instances) //////////
			/////////////////////////////////////////////////////////////////////
	
	
		}, {
			key: 'new',
			value: function _new() {
				var vals = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
				var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
				return new this.Change_new(this, vals, options).run();
			}
		}, {
			key: 'get',
			value: function get(href) {
				var _context2;
	
				var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
				if ((_context2 = href, _isObject2.default).call(_context2)) {
					href = { href: href };
				}
				var entity = void 0;
				if (href in Entity[$$committedEntitiesByHref]) {
					entity = Entity[$$committedEntitiesByHref][href];
				} else {
					// We're assuming that this is solely a synchronous method call,
					// so we can't query the server here.
					return null;
				}
				(0, _misc.constraint)(this.hasInstance(entity), (0, _misc.humanMsg)(_templateObject2, JSON.stringify(href), this.name, entity.constructor.name));
				return entity;
			}
		}, {
			key: 'getAll',
			value: function getAll() {
				return new Set([].concat(_toConsumableArray(this[$$entities])).filter(this.hasInstance.bind(this)));
			}
		}, {
			key: 'getAllCommitted',
			value: function getAllCommitted() {
				return new Set([].concat(_toConsumableArray(this[$$committedEntities])).filter(this.hasInstance.bind(this)));
			}
		}, {
			key: 'newOrSingleton',
			value: function newOrSingleton() {
				return this.singleton ? this.getSingleton() : this.new();
			}
		}, {
			key: 'getSingleton',
			value: function getSingleton() {
				(0, _misc.constraint)(this.singleton, (0, _misc.humanMsg)(_templateObject3, this.name));
				if (!this[$$singletonObject]) {
					this[$$singletonObject] = this.new({
						name: this.singular
					});
					this[$$singletonObject].commit();
					// TODO: make sure that the singleton object is always loaded,
					//     : so this can be done synchronously
				}
				return this[$$singletonObject];
			}
		}, {
			key: 'load',
			value: function () {
				var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(href) {
					var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
					return regeneratorRuntime.wrap(function _callee$(_context3) {
						while (1) {
							switch (_context3.prev = _context3.next) {
								case 0:
								case 'end':
									return _context3.stop();
							}
						}
					}, _callee, this);
				}));
	
				function load(_x4, _x5) {
					return _ref.apply(this, arguments);
				}
	
				return load;
			}()
		}]);
	
		function Entity() {
			var _context4;
	
			var initialValues = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
			var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
			var _ref2$allowInvokingCo = _ref2.allowInvokingConstructor;
			var allowInvokingConstructor = _ref2$allowInvokingCo === undefined ? false : _ref2$allowInvokingCo;
	
			_classCallCheck(this, Entity);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Entity).call(this));
	
			/* initialize value tracking */
	
	
			_initialiseProps.call(_this);
	
			_get(Object.getPrototypeOf(Entity.prototype), 'setValueTrackerOptions', _this).call(_this, {
				takeUntil: (_context4 = (0, _combineLatest.combineLatest)(_this.p('isDeleted'), _this.p('isPristine'), _this.p('isNew'), function (isDeleted, isPristine, isNew) {
					return isDeleted && (isPristine || isNew);
				}), _filter.filter).call(_context4, function (isGone) {
					return isGone;
				}),
				filterAllBy: function filterAllBy() {
					return _this.isDeleted.getValue();
				}
			});
	
			/* make sure this constructor was invoked under proper conditions */
			(0, _misc.constraint)(allowInvokingConstructor, (0, _misc.humanMsg)(_templateObject4, _this.constructor.name, _this.constructor.name));
	
	
			/* Treating singleton classes specially? Or do we double-check singleton-ness here? */
			if (_this.constructor.singleton) {}
			// TODO
	
	
			/* set defaults for the core initial field values */
			_defaults2.default.call(initialValues, {
				id: null,
				href: null,
				class: _this.constructor.name
			});
	
			/* initialize all fields in this entity */
			_fields.Field.initializeEntity(_this, initialValues);
	
			/* entity is pristine if all its fields are pristine */
			_combineLatest.combineLatest.apply(undefined, _toConsumableArray((_context4 = _this.fields, _values2.default).call(_context4).map(function (f) {
				return f.p('isPristine');
			})).concat([function () {
				for (var _len = arguments.length, fieldPristines = Array(_len), _key = 0; _key < _len; _key++) {
					fieldPristines[_key] = arguments[_key];
				}
	
				return fieldPristines.every(function (v) {
					return !!v;
				});
			}])).subscribe(_this.pSubject('isPristine'));
	
			/* register this entity */
			Entity[$$entities].add(_this);
	
			// TODO: CHECK CROSS-PROPERTY CONSTRAINTS?
	
			return _this;
		}
	
		_createClass(Entity, [{
			key: 'delete',
			value: function _delete() {
				// TODO: this is the synchronous delete operation;
				//     : a `.commit()` call is required before it
				//     : is actually deleted from asynchronous storage.
				//     : That means we need to be able to rollback a deletion.
				//     : We need to create a partially ordered
				//     : log of performed actions (since last commit),
				//     : that also allows undo. This will replace storing 'pristine' ops.
				//     : (This is the Command design pattern.)
	
				if (this.isDeleted) {
					return;
				}
				this.pSubject('isDeleted').next(true);
				this.pSubject('isPristine').next(false);
				Entity[$$entities].delete(this);
			}
		}, {
			key: 'undelete',
			value: function undelete() {
				if (!this.isDeleted) {
					return;
				}
				this.pSubject('isDeleted').next(false);
				this.pSubject('isPristine').next(false);
				Entity[$$entities].add(this);
			}
	
			//noinspection JSDuplicatedDeclaration // temporary, to suppress warning due to Webstorm bug; TODO: report bug
	
		}, {
			key: 'get',
			value: function get(key) {
				return this.fields[key].get();
			}
		}, {
			key: 'set',
			value: function set(key, val, options) {
				return this.fields[key].set(val, options);
			}
		}, {
			key: 'commit',
			value: function () {
				var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
					var _context5,
					    _this2 = this;
	
					for (var _len2 = arguments.length, keysToCommit = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
						keysToCommit[_key2] = arguments[_key2];
					}
	
					var _context6, newId, newHref, opts;
	
					return regeneratorRuntime.wrap(function _callee2$(_context7) {
						while (1) {
							switch (_context7.prev = _context7.next) {
								case 0:
									if (this.isDeleted) {}
									// TODO
	
	
									/* commit each field individually */ // TODO: commit all in a single transaction?
									if ((_context5 = keysToCommit, _size2.default).call(_context5) === 0) {
										keysToCommit = (_context6 = this.fields, _keys2.default).call(_context6);
									}
									_context7.next = 4;
									return Promise.all(keysToCommit.map(function (key) {
										return _this2.fields[key].commit();
									}));
	
								case 4:
	
									/* setting up as a committed entity */
									// TODO: remove when the server actually does this
									if (this.get('id') === null) {
										/* id and href are set here until actual server communication is set up */
										newId = parseInt((0, _uniqueId3.default)());
										newHref = 'cache://' + newId;
										opts = { ignoreReadonly: true, updatePristine: true };
	
										this.set('id', newId, opts);
										this.set('href', newHref, opts);
	
										/* after it's first committed, it's no longer new */
										this.pSubject('isNew').next(false);
	
										/* maintain caches */
										Entity[$$committedEntitiesByHref][newHref] = this;
										Entity[$$committedEntities].add(this);
									}
	
									/* directly after a commit, it's pristine */
									this.pSubject('isPristine').next(true);
	
								case 6:
								case 'end':
									return _context7.stop();
							}
						}
					}, _callee2, this);
				}));
	
				function commit(_x9) {
					return _ref3.apply(this, arguments);
				}
	
				return commit;
			}()
		}, {
			key: 'rollback',
			value: function rollback() {
				var _context8,
				    _this3 = this;
	
				for (var _len3 = arguments.length, keysToRollback = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
					keysToRollback[_key3] = arguments[_key3];
				}
	
				if ((_context8 = keysToRollback, _size2.default).call(_context8) === 0) {
					var _context9;
	
					keysToRollback = (_context9 = this.fields, _keys2.default).call(_context9);
				}
				keysToRollback.map(function (key) {
					_this3.fields[key].rollback();
				});
				this.e('rollback').next(this);
			}
		}, {
			key: 'p',
			value: function p(key, t) {
				// Provide easier access to field property observables
				return this.fields && this.fields[key] ? this.fields[key].p('value', t) : _get(Object.getPrototypeOf(Entity.prototype), 'p', this).call(this, key, t);
			}
		}]);
	
		return Entity;
	}(_ValueTracker3.default), _class2.Change_new = function (_tracker$Change) {
		_inherits(_class3, _tracker$Change);
	
		function _class3(context) {
			var initialValues = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
			var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
			_classCallCheck(this, _class3);
	
			var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(_class3).call(this, options));
	
			_this4.context = context;
			_this4.initialValues = initialValues;
			_this4.options = options;
			return _this4;
		}
	
		_createClass(_class3, [{
			key: 'run',
			value: function run() {
				var _context10;
	
				if ((_context10 = this.context.behavior.new, _isFunction2.default).call(_context10)) {
					var customResult = this.context.behavior.new(_extends({}, this.initialValues), _extends({}, this.options));
					if (customResult) {
						return customResult;
					}
				}
				(0, _misc.constraint)(!this.context.abstract, (0, _misc.humanMsg)(_templateObject5, this.context.name));
				return new (this.context[$$PreferredClass] || this.context)(_extends({}, this.initialValues), _extends({}, this.options, { allowInvokingConstructor: true, new: true }));
			}
		}, {
			key: 'commit',
			value: function () {
				var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
					return regeneratorRuntime.wrap(function _callee3$(_context11) {
						while (1) {
							switch (_context11.prev = _context11.next) {
								case 0:
								case 'end':
									return _context11.stop();
							}
						}
					}, _callee3, this);
				}));
	
				function commit() {
					return _ref4.apply(this, arguments);
				}
	
				return commit;
			}()
		}, {
			key: 'rollback',
			value: function rollback() {
				// TODO
			}
		}]);
	
		return _class3;
	}(_Change.tracker.Change), _initialiseProps = function _initialiseProps() {
		_initDefineProp(this, 'deleteEvent', _descriptor, this);
	
		_initDefineProp(this, 'commitEvent', _descriptor2, this);
	
		_initDefineProp(this, 'rollbackEvent', _descriptor3, this);
	
		_initDefineProp(this, 'isDeleted', _descriptor4, this);
	
		_initDefineProp(this, 'isPristine', _descriptor5, this);
	
		_initDefineProp(this, 'isNew', _descriptor6, this);
	}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'deleteEvent', [_dec], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'commitEvent', [_dec2], {
		enumerable: true,
		initializer: null
	}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'rollbackEvent', [_dec3], {
		enumerable: true,
		initializer: null
	}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'isDeleted', [_dec4], {
		enumerable: true,
		initializer: null
	}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'isPristine', [_dec5], {
		enumerable: true,
		initializer: null
	}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'isNew', [_dec6], {
		enumerable: true,
		initializer: null
	})), _class));
	exports.default = Entity;
	
	
	_boundNativeMethods.assign.call(Entity, (_assign$call = {}, _defineProperty(_assign$call, $$entities, new _ObservableSet2.default()), _defineProperty(_assign$call, $$entitiesSubject, new _BehaviorSubject.BehaviorSubject(new Set())), _defineProperty(_assign$call, $$committedEntities, new _ObservableSet2.default()), _defineProperty(_assign$call, $$committedEntitiesSubject, new _BehaviorSubject.BehaviorSubject(new Set())), _defineProperty(_assign$call, $$committedEntitiesByHref, {}), _assign$call));

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.tracker = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _graph = __webpack_require__(143);
	
	var _graph2 = _interopRequireDefault(_graph);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return _instanceof(left, right); } }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var $$changes = Symbol('$$changes');
	
	var $$class = Symbol('$$class');
	var $$props = Symbol('$$props');
	var $$revDeps = Symbol('$$revDeps');
	var $$causes = Symbol('$$causes');
	var $$Change = Symbol('$$Change');
	
	var $$commitUpToHere = Symbol('$$commitUpToHere');
	var $$commitForcedFromHere = Symbol('$$commitForcedFromHere');
	
	var ChangeT = function ChangeT(tracker) {
		return function () {
			function Change() {
				var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
				var _ref$changeDependenci = _ref.changeDependencies;
				var changeDependencies = _ref$changeDependenci === undefined ? [] : _ref$changeDependenci;
				var _ref$changeCauses = _ref.changeCauses;
				var changeCauses = _ref$changeCauses === undefined ? [] : _ref$changeCauses;
	
				_classCallCheck(this, Change);
	
				var g = tracker[$$changes];
				g.addVertex(this, this);
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;
	
				try {
					for (var _iterator = changeDependencies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var dep = _step.value;
						g.addEdge(this, dep, {});
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
	
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;
	
				try {
					for (var _iterator2 = changeCauses[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var _dep = _step2.value;
						g.addEdge(this, _dep, { forced: true });
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			}
	
			_createClass(Change, [{
				key: 'run',
				value: function run() {}
			}, {
				key: 'commit',
				value: function () {
					var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
						return regeneratorRuntime.wrap(function _callee$(_context) {
							while (1) {
								switch (_context.prev = _context.next) {
									case 0:
										this.committed = true;
	
									case 1:
									case 'end':
										return _context.stop();
								}
							}
						}, _callee, this);
					}));
	
					function commit() {
						return _ref2.apply(this, arguments);
					}
	
					return commit;
				}()
			}, {
				key: 'rollback',
				value: function rollback() {}
			}, {
				key: 'commitUpToHere',
				value: function () {
					var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
						return regeneratorRuntime.wrap(function _callee2$(_context2) {
							while (1) {
								switch (_context2.prev = _context2.next) {
									case 0:
										if (this.committed) {
											_context2.next = 5;
											break;
										}
	
										_context2.next = 3;
										return this[$$commitUpToHere]();
	
									case 3:
										_context2.next = 5;
										return this.commit();
	
									case 5:
										_context2.next = 7;
										return this[$$commitForcedFromHere]();
	
									case 7:
									case 'end':
										return _context2.stop();
								}
							}
						}, _callee2, this);
					}));
	
					function commitUpToHere() {
						return _ref3.apply(this, arguments);
					}
	
					return commitUpToHere;
				}()
			}, {
				key: $$commitUpToHere,
				value: function () {
					var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
						var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _step3$value, dep;
	
						return regeneratorRuntime.wrap(function _callee3$(_context3) {
							while (1) {
								switch (_context3.prev = _context3.next) {
									case 0:
										_iteratorNormalCompletion3 = true;
										_didIteratorError3 = false;
										_iteratorError3 = undefined;
										_context3.prev = 3;
										_iterator3 = tracker[$$changes].verticesTo(this)[Symbol.iterator]();
	
									case 5:
										if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
											_context3.next = 16;
											break;
										}
	
										_step3$value = _slicedToArray(_step3.value, 1);
										dep = _step3$value[0];
	
										if (dep.committed) {
											_context3.next = 13;
											break;
										}
	
										_context3.next = 11;
										return dep[$$commitUpToHere]();
	
									case 11:
										_context3.next = 13;
										return dep.commit();
	
									case 13:
										_iteratorNormalCompletion3 = true;
										_context3.next = 5;
										break;
	
									case 16:
										_context3.next = 22;
										break;
	
									case 18:
										_context3.prev = 18;
										_context3.t0 = _context3['catch'](3);
										_didIteratorError3 = true;
										_iteratorError3 = _context3.t0;
	
									case 22:
										_context3.prev = 22;
										_context3.prev = 23;
	
										if (!_iteratorNormalCompletion3 && _iterator3.return) {
											_iterator3.return();
										}
	
									case 25:
										_context3.prev = 25;
	
										if (!_didIteratorError3) {
											_context3.next = 28;
											break;
										}
	
										throw _iteratorError3;
	
									case 28:
										return _context3.finish(25);
	
									case 29:
										return _context3.finish(22);
	
									case 30:
									case 'end':
										return _context3.stop();
								}
							}
						}, _callee3, this, [[3, 18, 22, 30], [23,, 25, 29]]);
					}));
	
					function value() {
						return _ref4.apply(this, arguments);
					}
	
					return value;
				}()
			}, {
				key: $$commitForcedFromHere,
				value: function () {
					var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
						var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, _step4$value, rdep, forced;
	
						return regeneratorRuntime.wrap(function _callee4$(_context4) {
							while (1) {
								switch (_context4.prev = _context4.next) {
									case 0:
										_iteratorNormalCompletion4 = true;
										_didIteratorError4 = false;
										_iteratorError4 = undefined;
										_context4.prev = 3;
										_iterator4 = tracker[$$changes].verticesFrom(this)[Symbol.iterator]();
	
									case 5:
										if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
											_context4.next = 18;
											break;
										}
	
										_step4$value = _slicedToArray(_step4.value, 3);
										rdep = _step4$value[0];
										forced = _step4$value[2].forced;
	
										if (!forced) {
											_context4.next = 15;
											break;
										}
	
										if (rdep.committed) {
											_context4.next = 13;
											break;
										}
	
										_context4.next = 13;
										return rdep.commit();
	
									case 13:
										_context4.next = 15;
										return rdep[$$commitForcedFromHere]();
	
									case 15:
										_iteratorNormalCompletion4 = true;
										_context4.next = 5;
										break;
	
									case 18:
										_context4.next = 24;
										break;
	
									case 20:
										_context4.prev = 20;
										_context4.t0 = _context4['catch'](3);
										_didIteratorError4 = true;
										_iteratorError4 = _context4.t0;
	
									case 24:
										_context4.prev = 24;
										_context4.prev = 25;
	
										if (!_iteratorNormalCompletion4 && _iterator4.return) {
											_iterator4.return();
										}
	
									case 27:
										_context4.prev = 27;
	
										if (!_didIteratorError4) {
											_context4.next = 30;
											break;
										}
	
										throw _iteratorError4;
	
									case 30:
										return _context4.finish(27);
	
									case 31:
										return _context4.finish(24);
	
									case 32:
									case 'end':
										return _context4.stop();
								}
							}
						}, _callee4, this, [[3, 20, 24, 32], [25,, 27, 31]]);
					}));
	
					function value() {
						return _ref5.apply(this, arguments);
					}
	
					return value;
				}()
			}, {
				key: 'rollbackToHere',
				value: function rollbackToHere() {}
			}]);
	
			return Change;
		}();
	};
	
	var ChangeTracker = function () {
		_createClass(ChangeTracker, [{
			key: 'Change',
			get: function get() {
				if (!this[$$Change]) {
					this[$$Change] = ChangeT(this);
				}
				return this[$$Change];
			}
		}]);
	
		function ChangeTracker() {
			_classCallCheck(this, ChangeTracker);
	
			this[$$changes] = new _graph2.default();
		}
	
		return ChangeTracker;
	}();
	
	var tracker = exports.tracker = new ChangeTracker();
	
	// export class CreateEntity extends Change {
	//
	// 	constructor(cls, props = {}, options = {}) {
	// 		super(options);
	// 		this[$$class] = cls;
	// 		this[$$props] = props;
	// 	}
	//
	// 	run() {
	//
	// 	}
	//
	// 	commit() {
	//
	// 	}
	//
	// 	rollback() {
	//
	// 	}
	//
	// }
	//
	// export class DeleteEntity extends Change {}
	//
	// export class SetPropertyField extends Change {}
	//
	// export class SetSideField extends Change {}
	//
	// export class SetRel1Field extends Change {}
	//
	// export class SetRel1ShortcutField extends Change {}
	//
	// export class SetRel$Field extends Change {}
	//
	// export class SetRel$ShortcutField extends Change {}

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _templateObject = _taggedTemplateLiteral(['\n\t\t\tYou tried to manually assign a value ', '\n\t\t\tto ', '#', ',\n\t\t\tbut it already has a fixed value of ', '.\n\t\t'], ['\n\t\t\tYou tried to manually assign a value ', '\n\t\t\tto ', '#', ',\n\t\t\tbut it already has a fixed value of ', '.\n\t\t']),
	    _templateObject2 = _taggedTemplateLiteral(['\n\t\t\t    No value given for required field\n\t\t\t    \'', '#', '\'.\n\t\t\t'], ['\n\t\t\t    No value given for required field\n\t\t\t    \'', '#', '\'.\n\t\t\t']);
	
	var _isUndefined = __webpack_require__(37);
	
	var _isUndefined2 = _interopRequireDefault(_isUndefined);
	
	var _entries = __webpack_require__(17);
	
	var _entries2 = _interopRequireDefault(_entries);
	
	var _cloneDeep = __webpack_require__(254);
	
	var _cloneDeep2 = _interopRequireDefault(_cloneDeep);
	
	var _boundNativeMethods = __webpack_require__(10);
	
	var _misc = __webpack_require__(3);
	
	var _Field2 = __webpack_require__(25);
	
	var _symbols = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return _instanceof(left, right); } }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	_Field2.Field[_symbols.$$registerFieldClass](function (_Field) {
		_inherits(PropertyField, _Field);
	
		_createClass(PropertyField, null, [{
			key: 'initClass',
	
	
			//////////////////
			// Change class //
			//////////////////
	
	
			// this[$$owner] instanceof RelatedTo | Resource
			// this[$$key]   instanceof "name" | "class" | "href" | ...
			// this[$$value] instanceof any
	
			////////////
			// static //
			////////////
	
			value: function initClass(_ref) {
				var _context;
	
				var cls = _ref.cls;
				var key = _ref.key;
				var readonly = _ref.desc.readonly;
	
				if (cls.prototype.hasOwnProperty(key)) {
					return;
				}
				(_context = cls.prototype, _boundNativeMethods.defineProperty).call(_context, key, _extends({
					get: function get() {
						return this.fields[key].get();
					}
				}, readonly ? undefined : {
					set: function set(val) {
						this.fields[key].set(val);
					}
				}, {
					enumerable: true,
					configurable: false
				}));
			}
		}, {
			key: _symbols.$$entriesIn,
			value: function value(cls) {
				var _context2;
	
				return (_context2 = cls.properties, _entries2.default).call(_context2).map(function (_ref2) {
					var _ref3 = _slicedToArray(_ref2, 2);
	
					var key = _ref3[0];
					var desc = _ref3[1];
					return {
						key: key,
						desc: desc,
						relatedKeys: []
					};
				});
			}
	
			//////////////
			// instance //
			//////////////
	
		}]);
	
		function PropertyField(options) {
			var _context3;
	
			_classCallCheck(this, PropertyField);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PropertyField).call(this, options));
	
			var owner = options.owner;
			var key = options.key;
			var desc = options.desc;
			var initialValue = options.initialValue;
	
			/* sanity checks */
	
			(0, _misc.constraint)((_context3 = desc.value, _isUndefined2.default).call(_context3) || _isUndefined2.default.call(initialValue), (0, _misc.humanMsg)(_templateObject, JSON.stringify(initialValue), owner.constructor.name, key, JSON.stringify(desc.value)));
	
			/* set the initial value */
			_this[_symbols.$$initSet]([!_isUndefined2.default.call(initialValue), (_context3 = _misc.callOrReturn.call(initialValue, owner), _cloneDeep2.default).call(_context3)], ['default' in desc, (_context3 = (_context3 = desc.default, _misc.callOrReturn).call(_context3, owner), _cloneDeep2.default).call(_context3)], ['value' in desc, (_context3 = (_context3 = desc.value, _misc.callOrReturn).call(_context3, owner), _cloneDeep2.default).call(_context3)], [!desc.required]);
			return _this;
		}
	
		_createClass(PropertyField, [{
			key: 'validate',
			value: function validate(val) {
				var stages = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	
				if (stages.includes('commit')) {
					(0, _misc.constraint)(!this[_symbols.$$desc].required || !_isUndefined2.default.call(val), (0, _misc.humanMsg)(_templateObject2, this[_symbols.$$owner].constructor.name, this[_symbols.$$key]));
				}
	
				// TODO: CHECK CONSTRAINT: given property value conforms to JSON schema
				// TODO: CHECK ADDITIONAL (PROPERTY-SPECIFIC) CONSTRAINTS: e.g., if this
				//     : is a template, does it conform to its corresponding type?
			}
		}]);
	
		return PropertyField;
	}(_Field2.Field));

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _templateObject = _taggedTemplateLiteral(['\n\t\t\tThe value ', ' given for ', '#', '\n\t\t\tis not an iterable collection (like array or set).\n\t\t'], ['\n\t\t\tThe value ', ' given for ', '#', '\n\t\t\tis not an iterable collection (like array or set).\n\t\t']),
	    _templateObject2 = _taggedTemplateLiteral(['\n\t\t\t\tInvalid value ', ' given as element for\n\t\t\t\t', '#', '.\n\t\t\t'], ['\n\t\t\t\tInvalid value ', ' given as element for\n\t\t\t\t', '#', '.\n\t\t\t']);
	
	var _map = __webpack_require__(42);
	
	var _filter = __webpack_require__(29);
	
	var _switchMap = __webpack_require__(129);
	
	var _startWith = __webpack_require__(61);
	
	var _pairwise = __webpack_require__(87);
	
	var _concat = __webpack_require__(183);
	
	var _Subject = __webpack_require__(59);
	
	__webpack_require__(23);
	
	var _inRange = __webpack_require__(145);
	
	var _inRange2 = _interopRequireDefault(_inRange);
	
	var _get = __webpack_require__(144);
	
	var _get2 = _interopRequireDefault(_get);
	
	var _size = __webpack_require__(107);
	
	var _size2 = _interopRequireDefault(_size);
	
	var _entries = __webpack_require__(17);
	
	var _entries2 = _interopRequireDefault(_entries);
	
	var _boundNativeMethods = __webpack_require__(10);
	
	var _ObservableSet = __webpack_require__(67);
	
	var _ObservableSet2 = _interopRequireDefault(_ObservableSet);
	
	var _misc = __webpack_require__(3);
	
	var _Field = __webpack_require__(25);
	
	var _symbols = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return _instanceof(left, right); } }
	
	function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	_Field.Field[_symbols.$$registerFieldClass](function (_RelField) {
		_inherits(Rel$Field, _RelField);
	
		_createClass(Rel$Field, null, [{
			key: 'initClass',
	
	
			// this[$$owner] instanceof Resource
			// this[$$key]   instanceof "-->ContainsMaterial" | "-->HasPart" | "<--FlowsTo" | ...
			// this[$$value] instanceof Set<IsRelatedTo>
	
			////////////
			// static //
			////////////
	
			value: function initClass(_ref) {
				var _context;
	
				var cls = _ref.cls;
				var key = _ref.key;
				var readonly = _ref.desc.readonly;
	
				if (cls.prototype.hasOwnProperty(key)) {
					return;
				}
				(_context = cls.prototype, _boundNativeMethods.defineProperty).call(_context, key, _extends({
					get: function get() {
						return this.fields[key].get();
					}
				}, readonly ? undefined : {
					set: function set(val) {
						this.fields[key].set(val);
					}
				}, {
					enumerable: true,
					configurable: false
				}));
			}
		}, {
			key: _symbols.$$entriesIn,
			value: function value(cls) {
				var _context2;
	
				if (!cls.isResource) {
					return [];
				}
				return (_context2 = cls.relationships, _entries2.default).call(_context2).filter(function (_ref2) {
					var _ref3 = _slicedToArray(_ref2, 2);
	
					var rel = _ref3[1];
					return rel.cardinality.max > 1;
				}).map(function (_ref4) {
					var _ref5 = _slicedToArray(_ref4, 2);
	
					var key = _ref5[0];
					var desc = _ref5[1];
					return {
						key: key,
						desc: desc,
						relatedKeys: desc.shortcutKey ? [desc.shortcutKey] : []
					};
				});
			}
		}]);
	
		//////////////
		// instance //
		//////////////
	
		function Rel$Field(options) {
			var _context4;
	
			_classCallCheck(this, Rel$Field);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Rel$Field).call(this, _extends({}, options, { setValueThroughSignal: false })));
	
			var owner = options.owner;
			var desc = options.desc;
			var initialValue = options.initialValue;
			var waitUntilConstructed = options.waitUntilConstructed;
			var constructingOwner = options.constructingOwner;
			var related = options.related;
	
	
			_boundNativeMethods.defineProperty.call(_this, _symbols.$$pristine, { value: new Set() });
			_boundNativeMethods.defineProperty.call(_this, _symbols.$$value, { value: new _ObservableSet2.default() });
	
			/* mirror stuff that happens in sub-fields */
	
			constructingOwner.subscribe({ complete: function complete() {
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;
	
					try {
						for (var _iterator = desc.relationshipClass.extendedBy[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var subCls = _step.value;
	
							var subFieldKey = subCls.keyInResource[desc.keyInRelationship];
							var subField = owner.fields[subFieldKey];
							if (!subField) {
								continue;
							}
							if (_instanceof(subField, Rel$Field)) {
								subField.get().e('add').subscribe(_this.get().e('add'));
								subField.get().e('delete').subscribe(_this.get().e('delete'));
							} else {
								var _context3;
	
								// Rel1Field
								(_context3 = (_context3 = subField.p('value'), _startWith.startWith).call(_context3, null), _pairwise.pairwise).call(_context3).subscribe(function (_ref6) {
									var _ref7 = _slicedToArray(_ref6, 2);
	
									var prev = _ref7[0];
									var curr = _ref7[1];
	
									if (prev) {
										_this.get().delete(prev);
									}
									if (curr) {
										_this.get().add(curr);
									}
								});
							}
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
				} });
	
			/* update relationships that are added or deleted here */
			(_context4 = _this[_symbols.$$value].e('add'), waitUntilConstructed).call(_context4).subscribe(function (rel) {
				rel.fields[desc.keyInRelationship].set(_this[_symbols.$$owner]);
			});
			(_context4 = _this[_symbols.$$value].e('delete'), waitUntilConstructed).call(_context4).subscribe(function (rel) {
				rel.delete();
			});
	
			/* decouple a relationship when it decouples from this resource */
			(_context4 = (_context4 = _this[_symbols.$$value].e('add'), waitUntilConstructed).call(_context4), _switchMap.switchMap).call(_context4, function (newRel) {
				var _context5;
	
				return (_context5 = (_context5 = newRel.fields[desc.keyInRelationship].p('value'), _filter.filter).call(_context5, function (res) {
					return res !== owner;
				}), _map.map).call(_context5, function () {
					return newRel;
				});
			}).subscribe(_this.get().e('delete'));
	
			/* handle initial values */
			if (initialValue && initialValue[Symbol.iterator]) {
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;
	
				try {
					for (var _iterator2 = initialValue[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var rel = _step2.value;
	
						if (!rel.fields[desc.keyInRelationship].get()) {
							rel.fields[desc.keyInRelationship].set(_this);
						}
	
	
						_this[_symbols.$$pristine].add(rel);
						_this[_symbols.$$value].add(rel);
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			} else if (_get2.default.call(related, [desc.shortcutKey, 'initialValue'])) {
				// OK, a shortcut was given
			} else if (desc.cardinality.min === 0) {}
			// OK, this field is optional
	
	
			/* fill up missing required values with 'auto'matic ones */
			if (desc.options.auto) {
				var shortcutInitial = _get2.default.call(related, [desc.shortcutKey, 'initialValue']);
				for (var i = (_context6 = _this[_symbols.$$value], _size2.default).call(_context6) + _size2.default.call(shortcutInitial); i < desc.cardinality.min; ++i) {
					var _context6, _desc$relationshipCla;
	
					var _rel = desc.relationshipClass.new((_desc$relationshipCla = {}, _defineProperty(_desc$relationshipCla, desc.keyInRelationship, _this[_symbols.$$owner]), _defineProperty(_desc$relationshipCla, desc.codomain.keyInRelationship, desc.codomain.resourceClass.newOrSingleton()), _desc$relationshipCla));
					_this[_symbols.$$pristine].add(_rel);
					_this[_symbols.$$value].add(_rel);
				}
			}
	
			/* emit 'value' signals (but note that setValueThroughSignal = false) */
			(_context4 = _this[_symbols.$$value].p('value'), waitUntilConstructed).call(_context4).subscribe(_this.p('value'));
			return _this;
		}
	
		_createClass(Rel$Field, [{
			key: 'set',
			value: function set(newValue) {
				var _ref8 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
				var _ref8$ignoreReadonly = _ref8.ignoreReadonly;
				var ignoreReadonly = _ref8$ignoreReadonly === undefined ? false : _ref8$ignoreReadonly;
				var _ref8$ignoreValidatio = _ref8.ignoreValidation;
				var ignoreValidation = _ref8$ignoreValidatio === undefined ? false : _ref8$ignoreValidatio;
				var _ref8$updatePristine = _ref8.updatePristine;
				var updatePristine = _ref8$updatePristine === undefined ? false : _ref8$updatePristine;
	
				(0, _misc.constraint)(ignoreReadonly || !this[_symbols.$$desc].readonly);
				if (!ignoreValidation) {
					this.validate(newValue, ['set']);
				}
				if (updatePristine) {
					(0, _ObservableSet.copySetContent)(this[_symbols.$$pristine], newValue);
				}
				(0, _ObservableSet.copySetContent)(this[_symbols.$$value], newValue);
			}
		}, {
			key: 'validate',
			value: function validate(val) {
				var stages = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
				(0, _misc.constraint)(val[Symbol.iterator], (0, _misc.humanMsg)(_templateObject, val, this[_symbols.$$owner].constructor.name, this[_symbols.$$key]));
				if (stages.includes('commit')) {
					var _context7;
	
					var _$$desc$cardinality = this[_symbols.$$desc].cardinality;
					var min = _$$desc$cardinality.min;
					var max = _$$desc$cardinality.max;
	
					(0, _misc.constraint)((_context7 = val.size, _inRange2.default).call(_context7, min, max + 1), '\n\t\t\t\tThe number of values in field ' + this[_symbols.$$owner].constructor.name + '#' + this[_symbols.$$key] + '\n\t\t\t\tis not within the expected range [' + min + ', ' + max + '].\n\t\t\t');
				}
				val.forEach(this.validateElement.bind(this));
			}
		}, {
			key: 'validateElement',
			value: function validateElement(element) {
				/* the value must be of the proper domain */
				if (!this[_symbols.$$desc].relationshipClass.hasInstance(element)) {
					throw new Error((0, _misc.humanMsg)(_templateObject2, element, this[_symbols.$$owner].constructor.name, this[_symbols.$$key]));
				}
			}
		}, {
			key: 'commit',
			value: function () {
				var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
					return regeneratorRuntime.wrap(function _callee$(_context8) {
						while (1) {
							switch (_context8.prev = _context8.next) {
								case 0:
									this.validate(this[_symbols.$$value], ['commit']);
									(0, _ObservableSet.copySetContent)(this[_symbols.$$pristine], this[_symbols.$$value]);
									this.e('commit').next(this[_symbols.$$value]);
	
								case 3:
								case 'end':
									return _context8.stop();
							}
						}
					}, _callee, this);
				}));
	
				function commit() {
					return _ref9.apply(this, arguments);
				}
	
				return commit;
			}()
		}, {
			key: 'rollback',
			value: function rollback() {
				(0, _ObservableSet.copySetContent)(this[_symbols.$$value], this[_symbols.$$pristine]);
				this.e('rollback').next(this[_symbols.$$value]);
			}
		}]);
	
		return Rel$Field;
	}(_Field.RelField));

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _templateObject = _taggedTemplateLiteral(['\n\t\t\tYou cannot set the fields \'', '\' and \'', '\'\n\t\t\tat the same time for a ', '.\n\t\t'], ['\n\t\t\tYou cannot set the fields \'', '\' and \'', '\'\n\t\t\tat the same time for a ', '.\n\t\t']),
	    _templateObject2 = _taggedTemplateLiteral(['\n\t\t\t\tNo value given for required field\n\t\t\t\t', '#', '.\n\t\t\t'], ['\n\t\t\t\tNo value given for required field\n\t\t\t\t', '#', '.\n\t\t\t']),
	    _templateObject3 = _taggedTemplateLiteral(['\n\t\t\tInvalid value \'', '\' given for field ', '#', '.\n\t\t'], ['\n\t\t\tInvalid value \'', '\' given for field ', '#', '.\n\t\t']);
	
	var _map = __webpack_require__(42);
	
	var _filter = __webpack_require__(29);
	
	var _pairwise = __webpack_require__(87);
	
	var _switchMap = __webpack_require__(129);
	
	var _startWith = __webpack_require__(61);
	
	__webpack_require__(23);
	
	var _get = __webpack_require__(144);
	
	var _get2 = _interopRequireDefault(_get);
	
	var _isUndefined = __webpack_require__(37);
	
	var _isUndefined2 = _interopRequireDefault(_isUndefined);
	
	var _isNull = __webpack_require__(147);
	
	var _isNull2 = _interopRequireDefault(_isNull);
	
	var _entries = __webpack_require__(17);
	
	var _entries2 = _interopRequireDefault(_entries);
	
	var _isObject2 = __webpack_require__(12);
	
	var _isObject3 = _interopRequireDefault(_isObject2);
	
	var _boundNativeMethods = __webpack_require__(10);
	
	var _misc = __webpack_require__(3);
	
	var _Field = __webpack_require__(25);
	
	var _symbols = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return _instanceof(left, right); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	_Field.Field[_symbols.$$registerFieldClass](function (_RelField) {
		_inherits(Rel1Field, _RelField);
	
		_createClass(Rel1Field, null, [{
			key: 'initClass',
	
	
			// this[$$owner] instanceof Resource
			// this[$$key]   instanceof "-->HasInnerBorder" | "<--HasPlusBorder" | ...
			// this[$$value] instanceof IsRelatedTo
	
			////////////
			// static //
			////////////
	
			value: function initClass(_ref) {
				var _context;
	
				var cls = _ref.cls;
				var key = _ref.key;
				var readonly = _ref.desc.readonly;
	
				if (cls.prototype.hasOwnProperty(key)) {
					return;
				}
				(_context = cls.prototype, _boundNativeMethods.defineProperty).call(_context, key, _extends({
					get: function get() {
						return this.fields[key].get();
					}
				}, readonly ? undefined : {
					set: function set(val) {
						this.fields[key].set(val);
					}
				}, {
					enumerable: true,
					configurable: false
				}));
			}
		}, {
			key: _symbols.$$entriesIn,
			value: function value(cls) {
				var _context2;
	
				if (!cls.isResource) {
					return [];
				}
				return (_context2 = cls.relationships, _entries2.default).call(_context2).filter(function (_ref2) {
					var _ref3 = _slicedToArray(_ref2, 2);
	
					var desc = _ref3[1];
					return desc.cardinality.max === 1;
				}).map(function (_ref4) {
					var _ref5 = _slicedToArray(_ref4, 2);
	
					var key = _ref5[0];
					var desc = _ref5[1];
					return {
						key: key,
						desc: desc,
						relatedKeys: desc.shortcutKey ? [desc.shortcutKey] : []
					};
				});
			}
	
			//////////////
			// instance //
			//////////////
	
		}]);
	
		function Rel1Field(options) {
			var _context4;
	
			_classCallCheck(this, Rel1Field);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Rel1Field).call(this, options));
	
			var owner = options.owner;
			var key = options.key;
			var desc = options.desc;
			var initialValue = options.initialValue;
			var waitUntilConstructed = options.waitUntilConstructed;
			var constructingOwner = options.constructingOwner;
			var related = options.related;
	
			/* you cannot give a value as an actual relation and as a shortcut at the same time */
	
			var givenShortcutInitialValue = _get2.default.call(related, [desc.shortcutKey, 'initialValue']);
			(0, _misc.constraint)(!initialValue || !givenShortcutInitialValue, (0, _misc.humanMsg)(_templateObject, key, desc.shortcutKey, _this.constructor.singular));
	
			/* set the initial value */
			_this[_symbols.$$initSet]([initialValue, initialValue], [givenShortcutInitialValue], [desc.options.auto, function () {
				var _desc$relationshipCla;
	
				return desc.relationshipClass.new((_desc$relationshipCla = {}, _defineProperty(_desc$relationshipCla, desc.keyInRelationship, _this[_symbols.$$owner]), _defineProperty(_desc$relationshipCla, desc.codomain.keyInRelationship, desc.codomain.resourceClass.newOrSingleton()), _desc$relationshipCla));
			}], [desc.options.default, function () {
				var _context3, _desc$relationshipCla2;
	
				return desc.relationshipClass.new((_desc$relationshipCla2 = {}, _defineProperty(_desc$relationshipCla2, desc.keyInRelationship, _this[_symbols.$$owner]), _defineProperty(_desc$relationshipCla2, desc.codomain.keyInRelationship, (_context3 = desc.options.default, _misc.callOrReturn).call(_context3)), _desc$relationshipCla2));
			}], [desc.cardinality.min === 0, null]);
	
			/* pull in values set in sub-fields */
			constructingOwner.subscribe({ complete: function complete() {
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;
	
					try {
						for (var _iterator = desc.relationshipClass.extendedBy[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var subCls = _step.value;
	
							var subFieldKey = subCls.keyInResource[desc.keyInRelationship];
							var subField = owner.fields[subFieldKey];
							if (!subField) {
								continue;
							}
							subField.p('value').subscribe(_this.p('value'));
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
				} });
	
			/* keep the relationship up to date with changes here */
			(_context4 = (_context4 = (_context4 = _this.p('value'), waitUntilConstructed).call(_context4), _startWith.startWith).call(_context4, null), _pairwise.pairwise).call(_context4).subscribe(function (_ref6) {
				var _ref7 = _slicedToArray(_ref6, 2);
	
				var prev = _ref7[0];
				var curr = _ref7[1];
	
				if (prev) {
					prev.fields[desc.keyInRelationship].set(null);
				}
				if (curr) {
					curr.fields[desc.keyInRelationship].set(_this[_symbols.$$owner]);
				}
			});
	
			/* set the value of this field to null when the relationship replaces this resource */
			(_context4 = (_context4 = (_context4 = (_context4 = (_context4 = _this.p('value'), waitUntilConstructed).call(_context4), _filter.filter).call(_context4, _isObject3.default), _switchMap.switchMap).call(_context4, function (newRel) {
				return newRel.fields[desc.keyInRelationship].p('value');
			}), _filter.filter).call(_context4, function (res) {
				return res !== owner;
			}), _map.map).call(_context4, function () {
				return null;
			}).subscribe(_this.p('value'));
			return _this;
		}
	
		_createClass(Rel1Field, [{
			key: 'validate',
			value: function validate(val) {
				var stages = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	
				var notGiven = _isNull2.default.call(val) || _isUndefined2.default.call(val);
	
				if (stages.includes('commit')) {
					/* if there's a minimum cardinality, a value must have been given */
					(0, _misc.constraint)(!notGiven || this[_symbols.$$desc].cardinality.min === 0, (0, _misc.humanMsg)(_templateObject2, this[_symbols.$$owner].constructor.name, this[_symbols.$$key]));
				}
	
				/* the value must be of the proper domain */
				(0, _misc.constraint)(notGiven || this[_symbols.$$desc].relationshipClass.hasInstance(val), (0, _misc.humanMsg)(_templateObject3, val, this[_symbols.$$owner].constructor.name, this[_symbols.$$key]));
	
				// TODO: these should not be assertions, but proper constraint-checks,
				//     : recording errors, possibly allowing them temporarily, etc.
			}
		}]);
	
		return Rel1Field;
	}(_Field.RelField));

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _templateObject = _taggedTemplateLiteral(['\n\t\t\tYou\'re trying to set a readonly field ', '#', '.\n\t\t'], ['\n\t\t\tYou\'re trying to set a readonly field ', '#', '.\n\t\t']),
	    _templateObject2 = _taggedTemplateLiteral(['\n\t\t\tThe value ', ' given for ', '#', '\n\t\t\tis not an iterable collection (like array or set).\n\t\t'], ['\n\t\t\tThe value ', ' given for ', '#', '\n\t\t\tis not an iterable collection (like array or set).\n\t\t']),
	    _templateObject3 = _taggedTemplateLiteral(['\n\t\t\t\tThe number of values in field ', '#', '\n\t\t\t\tis not within the expected range [', ', ', '].\n\t\t\t'], ['\n\t\t\t\tThe number of values in field ', '#', '\n\t\t\t\tis not within the expected range [', ', ', '].\n\t\t\t']),
	    _templateObject4 = _taggedTemplateLiteral(['\n\t\t\t\tInvalid value ', ' given as element for\n\t\t\t\t', '#', '.\n\t\t\t'], ['\n\t\t\t\tInvalid value ', ' given as element for\n\t\t\t\t', '#', '.\n\t\t\t']);
	
	var _filter = __webpack_require__(29);
	
	var _pairwise = __webpack_require__(87);
	
	var _takeUntil = __webpack_require__(187);
	
	var _take = __webpack_require__(425);
	
	var _startWith = __webpack_require__(61);
	
	__webpack_require__(23);
	
	var _inRange = __webpack_require__(145);
	
	var _inRange2 = _interopRequireDefault(_inRange);
	
	var _size = __webpack_require__(107);
	
	var _size2 = _interopRequireDefault(_size);
	
	var _entries = __webpack_require__(17);
	
	var _entries2 = _interopRequireDefault(_entries);
	
	var _boundNativeMethods = __webpack_require__(10);
	
	var _ObservableSet = __webpack_require__(67);
	
	var _ObservableSet2 = _interopRequireDefault(_ObservableSet);
	
	var _misc = __webpack_require__(3);
	
	var _Field = __webpack_require__(25);
	
	var _symbols = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return _instanceof(left, right); } }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	_Field.Field[_symbols.$$registerFieldClass](function (_RelField) {
		_inherits(RelShortcut$Field, _RelField);
	
		_createClass(RelShortcut$Field, null, [{
			key: 'initClass',
	
	
			// this[$$owner] instanceof Resource
			// this[$$key]   instanceof "materials" | "parts" | "incomingProcesses" | ...
			// this[$$value] instanceof Set<Resource>
	
			////////////
			// static //
			////////////
	
			value: function initClass(_ref) {
				var _context;
	
				var key = _ref.key;
				var cls = _ref.cls;
				var readonly = _ref.desc.readonly;
	
				if (cls.prototype.hasOwnProperty(key)) {
					return;
				}
				(_context = cls.prototype, _boundNativeMethods.defineProperty).call(_context, key, _extends({
					get: function get() {
						return this.fields[key].get();
					}
				}, readonly ? undefined : {
					set: function set(val) {
						this.fields[key].set(val);
					}
				}, {
					enumerable: true,
					configurable: false
				}));
			}
		}, {
			key: _symbols.$$entriesIn,
			value: function value(cls) {
				var _context2;
	
				if (!cls.isResource) {
					return [];
				}
				return (_context2 = cls.relationshipShortcuts, _entries2.default).call(_context2).filter(function (_ref2) {
					var _ref3 = _slicedToArray(_ref2, 2);
	
					var rel = _ref3[1];
					return rel.cardinality.max > 1;
				}).map(function (_ref4) {
					var _ref5 = _slicedToArray(_ref4, 2);
	
					var key = _ref5[0];
					var desc = _ref5[1];
					return {
						key: key,
						desc: desc,
						relatedKeys: desc.keyInResource ? [desc.keyInResource] : []
					};
				});
			}
		}]);
	
		//////////////
		// instance //
		//////////////
	
		function RelShortcut$Field(options) {
			var _context3;
	
			_classCallCheck(this, RelShortcut$Field);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RelShortcut$Field).call(this, _extends({}, options, { setValueThroughSignal: false })));
	
			var owner = options.owner;
			var desc = options.desc;
			var initialValue = options.initialValue;
			var waitUntilConstructed = options.waitUntilConstructed;
			var related = options.related;
	
	
			_boundNativeMethods.defineProperty.call(_this, _symbols.$$pristine, { value: new Set() });
			_boundNativeMethods.defineProperty.call(_this, _symbols.$$value, { value: new _ObservableSet2.default() });
	
			/* syncing with relationship field */
			var correspondingRelField = owner.fields[desc.keyInResource][_symbols.$$value];
			(_context3 = correspondingRelField.e('add'), waitUntilConstructed).call(_context3).subscribe(function (newRel) {
				var _context4;
	
				var newRelDisconnected = (_context4 = (_context4 = newRel.fields[desc.keyInRelationship].p('value'), _filter.filter).call(_context4, function (v) {
					return v !== owner;
				}), _take.take).call(_context4, 1);
				(_context4 = (_context4 = (_context4 = newRel.fields[desc.codomain.keyInRelationship].p('value'), _takeUntil.takeUntil).call(_context4, newRelDisconnected), _startWith.startWith).call(_context4, null), _pairwise.pairwise).call(_context4).subscribe(function (_ref6) {
					var _ref7 = _slicedToArray(_ref6, 2);
	
					var prev = _ref7[0];
					var curr = _ref7[1];
	
					if (prev) {
						_this[_symbols.$$value].delete(prev);
					}
					if (curr) {
						_this[_symbols.$$value].add(curr);
					}
				});
				newRelDisconnected.subscribe(function () {
					_this[_symbols.$$value].delete(newRel.fields[desc.codomain.keyInRelationship][_symbols.$$value]);
				});
			});
	
			/* syncing with relationship field */
			(_context3 = _this[_symbols.$$value].e('add'), waitUntilConstructed).call(_context3).subscribe(function (newRes) {
				var rel = [].concat(_toConsumableArray(correspondingRelField)).find(function (rel) {
					return rel.fields[desc.keyInRelationship].get() === owner && rel.fields[desc.codomain.keyInRelationship].get() === newRes;
				});
				if (!rel) {
					var _desc$relationshipCla;
	
					correspondingRelField.add(desc.relationshipClass.new((_desc$relationshipCla = {}, _defineProperty(_desc$relationshipCla, desc.keyInRelationship, owner), _defineProperty(_desc$relationshipCla, desc.codomain.keyInRelationship, newRes), _desc$relationshipCla)));
				}
			});
	
			/* handle initial values */
			if (initialValue !== undefined) {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;
	
				try {
					for (var _iterator = initialValue[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var res = _step.value;
	
						// TODO: - rel may be a reference to an existing resource;
						//     :   then go get it
						//     : - It may also be a description of a new resource;
						//     :   then create it
						_this[_symbols.$$pristine].add(res);
						_this[_symbols.$$value].add(res);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
	
			/* emit 'value' signals (but note that setValueThroughSignal = false) */
			(_context3 = _this[_symbols.$$value].p('value'), waitUntilConstructed).call(_context3).subscribe(_this.p('value'));
	
			return _this;
		}
	
		_createClass(RelShortcut$Field, [{
			key: 'set',
			value: function set(newValue) {
				var _ref8 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
				var _ref8$ignoreReadonly = _ref8.ignoreReadonly;
				var ignoreReadonly = _ref8$ignoreReadonly === undefined ? false : _ref8$ignoreReadonly;
				var _ref8$ignoreValidatio = _ref8.ignoreValidation;
				var ignoreValidation = _ref8$ignoreValidatio === undefined ? false : _ref8$ignoreValidatio;
				var _ref8$updatePristine = _ref8.updatePristine;
				var updatePristine = _ref8$updatePristine === undefined ? false : _ref8$updatePristine;
	
				(0, _misc.constraint)(ignoreReadonly || !this[_symbols.$$desc].readonly, (0, _misc.humanMsg)(_templateObject, this[_symbols.$$owner].constructor.name, this[_symbols.$$key]));
				if (!ignoreValidation) {
					this.validate(newValue, ['set']);
				}
				if (updatePristine) {
					(0, _ObservableSet.copySetContent)(this[_symbols.$$pristine], newValue);
				}
				(0, _ObservableSet.copySetContent)(this[_symbols.$$value], newValue);
			}
		}, {
			key: 'validate',
			value: function validate(val) {
				var stages = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
				(0, _misc.constraint)(val[Symbol.iterator], (0, _misc.humanMsg)(_templateObject2, val, this[_symbols.$$owner].constructor.name, this[_symbols.$$key]));
				if (stages.includes('commit')) {
					var _context5;
	
					var _$$desc$cardinality = this[_symbols.$$desc].cardinality;
					var min = _$$desc$cardinality.min;
					var max = _$$desc$cardinality.max;
	
					(0, _misc.constraint)((_context5 = _size2.default.call(val), _inRange2.default).call(_context5, min, max + 1), (0, _misc.humanMsg)(_templateObject3, this[_symbols.$$owner].constructor.name, this[_symbols.$$key], min, max));
				}
				val.forEach(this.validateElement.bind(this));
			}
		}, {
			key: 'validateElement',
			value: function validateElement(element) {
				/* the value must be of the proper domain */
				if (!this[_symbols.$$desc].codomain.resourceClass.hasInstance(element)) {
					throw new Error((0, _misc.humanMsg)(_templateObject4, element, this[_symbols.$$owner].constructor.name, this[_symbols.$$key]));
				}
			}
		}, {
			key: 'commit',
			value: function () {
				var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
					return regeneratorRuntime.wrap(function _callee$(_context6) {
						while (1) {
							switch (_context6.prev = _context6.next) {
								case 0:
									this.validate(this[_symbols.$$value], ['commit']);
									(0, _ObservableSet.copySetContent)(this[_symbols.$$pristine], this[_symbols.$$value]);
									this.e('commit').next(this[_symbols.$$value]);
	
								case 3:
								case 'end':
									return _context6.stop();
							}
						}
					}, _callee, this);
				}));
	
				function commit() {
					return _ref9.apply(this, arguments);
				}
	
				return commit;
			}()
		}, {
			key: 'rollback',
			value: function rollback() {
				(0, _ObservableSet.copySetContent)(this[_symbols.$$value], this[_symbols.$$pristine]);
				this.e('rollback').next(this[_symbols.$$value]);
			}
		}]);
	
		return RelShortcut$Field;
	}(_Field.RelField));

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _templateObject = _taggedTemplateLiteral(['\n\t\t\t\tNo value given for required field ', '#', '.\n\t\t\t'], ['\n\t\t\t\tNo value given for required field ', '#', '.\n\t\t\t']),
	    _templateObject2 = _taggedTemplateLiteral(['\n\t\t\tInvalid value \'', '\' given for field ', '#', '.\n\t\t'], ['\n\t\t\tInvalid value \'', '\' given for field ', '#', '.\n\t\t']);
	
	var _filter = __webpack_require__(29);
	
	var _switchMap = __webpack_require__(129);
	
	var _startWith = __webpack_require__(61);
	
	var _defer = __webpack_require__(418);
	
	__webpack_require__(23);
	
	var _entries = __webpack_require__(17);
	
	var _entries2 = _interopRequireDefault(_entries);
	
	var _isObject = __webpack_require__(72);
	
	var _isObject2 = _interopRequireDefault(_isObject);
	
	var _boundNativeMethods = __webpack_require__(10);
	
	var _misc = __webpack_require__(3);
	
	var _Field = __webpack_require__(25);
	
	var _symbols = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return _instanceof(left, right); } }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	_Field.Field[_symbols.$$registerFieldClass](function (_RelField) {
		_inherits(RelShortcut1Field, _RelField);
	
		_createClass(RelShortcut1Field, null, [{
			key: 'initClass',
	
	
			// this[$$owner] instanceof Resource
			// this[$$key]   instanceof "innerBorder" | "plusBorder" | ...
			// this[$$value] instanceof Resource
	
			////////////
			// static //
			////////////
	
			value: function initClass(_ref) {
				var _context;
	
				var key = _ref.key;
				var cls = _ref.cls;
				var readonly = _ref.desc.readonly;
	
				if (cls.prototype.hasOwnProperty(key)) {
					return;
				}
				(_context = cls.prototype, _boundNativeMethods.defineProperty).call(_context, key, _extends({
					get: function get() {
						return this.fields[key].get();
					}
				}, readonly ? {} : {
					set: function set(val) {
						this.fields[key].set(val);
					}
				}, {
					enumerable: true,
					configurable: false
				}));
			}
		}, {
			key: _symbols.$$entriesIn,
			value: function value(cls) {
				var _context2;
	
				if (!cls.isResource) {
					return [];
				}
				return (_context2 = cls.relationshipShortcuts, _entries2.default).call(_context2).filter(function (_ref2) {
					var _ref3 = _slicedToArray(_ref2, 2);
	
					var rel = _ref3[1];
					return rel.cardinality.max === 1;
				}).map(function (_ref4) {
					var _ref5 = _slicedToArray(_ref4, 2);
	
					var key = _ref5[0];
					var desc = _ref5[1];
					return {
						key: key,
						desc: desc,
						relatedKeys: desc.keyInResource ? [desc.keyInResource] : []
					};
				});
			}
	
			//////////////
			// instance //
			//////////////
	
		}]);
	
		function RelShortcut1Field(options) {
			var _context3;
	
			_classCallCheck(this, RelShortcut1Field);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RelShortcut1Field).call(this, options));
	
			var owner = options.owner;
			var key = options.key;
			var desc = options.desc;
			var initialValue = options.initialValue;
			var waitUntilConstructed = options.waitUntilConstructed;
			var related = options.related;
	
			/* set the initial value */
			// shortcuts are only initialized with explicit initial values;
			// all the fallback options are left to the actual relationship field,
			// so that the two don't compete. Therefore, this constructor is very
			// forgiving. The constraint checks are done on the other constructor.
	
			_this[_symbols.$$initSet]([initialValue, initialValue], [true]);
	
			var correspondingRelValue = (_context3 = (0, _defer.defer)(function () {
				return owner.fields[desc.keyInResource].p('value');
			}), waitUntilConstructed).call(_context3);
	
			/* keep this value up to date with new sides of new relationships */
			(_context3 = _filter.filter.call(correspondingRelValue, function (v) {
				return v;
			}), _switchMap.switchMap).call(_context3, function (rel) {
				return rel.fields[desc.codomain.keyInRelationship].p('value');
			}).subscribe(_this.p('value'));
	
			/* keep the relationship up to date */
			(_context3 = _this.p('value'), waitUntilConstructed).call(_context3).subscribe(function (scValue) {
				var relValue = owner.fields[desc.keyInResource].get();
				if (relValue) {
					relValue.fields[desc.codomain.keyInRelationship].set(scValue || null);
				} else if (scValue) {
					var _desc$relationshipCla;
	
					owner.fields[desc.keyInResource].set(desc.relationshipClass.new((_desc$relationshipCla = {}, _defineProperty(_desc$relationshipCla, desc.keyInRelationship, owner), _defineProperty(_desc$relationshipCla, desc.codomain.keyInRelationship, scValue), _desc$relationshipCla)));
				}
			});
			return _this;
		}
	
		_createClass(RelShortcut1Field, [{
			key: 'validate',
			value: function validate(val) {
				var stages = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	
				if (stages.includes('commit')) {
					/* if there's a minimum cardinality, a value must have been given */
					(0, _misc.constraint)(_isObject2.default.call(val) || this[_symbols.$$desc].cardinality.min === 0, (0, _misc.humanMsg)(_templateObject, this[_symbols.$$owner].constructor.name, this[_symbols.$$key]));
				}
	
				/* a given value must always be of the proper domain */
				(0, _misc.constraint)(!_isObject2.default.call(val) || this[_symbols.$$desc].codomain.resourceClass.hasInstance(val), (0, _misc.humanMsg)(_templateObject2, val, this[_symbols.$$owner].constructor.name, this[_symbols.$$key]));
	
				// TODO: these should not be assertions, but proper constraint-checks,
				//     : recording errors, possibly allowing them temporarily, etc.
			}
		}]);
	
		return RelShortcut1Field;
	}(_Field.RelField));

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _templateObject = _taggedTemplateLiteral(['\n\t\t\t    No resource specified for side ', ' of\n\t\t\t\tthis \'', '\'.\n\t\t\t'], ['\n\t\t\t    No resource specified for side ', ' of\n\t\t\t\tthis \'', '\'.\n\t\t\t']),
	    _templateObject2 = _taggedTemplateLiteral(['\n\t\t\tInvalid value \'', '\' given for ', '#', '.\n\t\t'], ['\n\t\t\tInvalid value \'', '\' given for ', '#', '.\n\t\t']);
	
	var _filter = __webpack_require__(29);
	
	var _pairwise = __webpack_require__(87);
	
	var _startWith = __webpack_require__(61);
	
	__webpack_require__(23);
	
	var _isUndefined = __webpack_require__(37);
	
	var _isUndefined2 = _interopRequireDefault(_isUndefined);
	
	var _isNull = __webpack_require__(147);
	
	var _isNull2 = _interopRequireDefault(_isNull);
	
	var _isObject = __webpack_require__(72);
	
	var _isObject2 = _interopRequireDefault(_isObject);
	
	var _boundNativeMethods = __webpack_require__(10);
	
	var _misc = __webpack_require__(3);
	
	var _Field2 = __webpack_require__(25);
	
	var _symbols = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return _instanceof(left, right); } }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	_Field2.Field[_symbols.$$registerFieldClass](function (_Field) {
		_inherits(SideField, _Field);
	
		_createClass(SideField, null, [{
			key: 'initClass',
	
	
			// this[$$owner] instanceof RelatedTo
			// this[$$key]   instanceof 1 | 2
			// this[$$value] instanceof Resource
	
			////////////
			// static //
			////////////
	
			value: function initClass(_ref) {
				var _context;
	
				var cls = _ref.cls;
				var key = _ref.key;
				var readonly = _ref.desc.readonly;
	
				if (cls.prototype.hasOwnProperty(key)) {
					return;
				}
				(_context = cls.prototype, _boundNativeMethods.defineProperty).call(_context, key, _extends({
					get: function get() {
						return this.fields[key].get();
					}
				}, readonly ? undefined : {
					set: function set(val) {
						this.fields[key].set(val);
					}
				}, {
					enumerable: true,
					configurable: false
				}));
			}
		}, {
			key: _symbols.$$entriesIn,
			value: function value(cls) {
				if (!cls.isRelationship) {
					return [];
				}
				return [{ key: 1, cls: cls, desc: cls.domainPairs[0][1], relatedKeys: [2] }, { key: 2, cls: cls, desc: cls.domainPairs[0][2], relatedKeys: [1] }];
				// TODO: unify multiple overlapping domainPairs when needed
			}
	
			//////////////
			// instance //
			//////////////
	
		}]);
	
		function SideField(options) {
			var _context2;
	
			_classCallCheck(this, SideField);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SideField).call(this, options));
	
			var owner = options.owner;
			var desc = options.desc;
			var key = options.key;
			var initialValue = options.initialValue;
			var waitUntilConstructed = options.waitUntilConstructed;
	
			/* set the initial value */
	
			_this[_symbols.$$initSet]([_isObject2.default.call(initialValue) || _isNull2.default.call(initialValue), initialValue], [desc.resourceClass.singleton, (_context2 = desc.resourceClass).getSingleton.bind(_context2)], [desc.options.auto, (_context2 = desc.resourceClass).new.bind(_context2)]);
	
			/* if one side becomes null, then so does the other, */
			/* releasing the relationship                        */
			(_context2 = (_context2 = _this.p('value'), waitUntilConstructed).call(_context2), _filter.filter).call(_context2, function (v) {
				return v === null;
			}).subscribe(owner.fields[desc.codomain.keyInRelationship]);
	
			/* when a side changes, let the relevant resources know */
			(_context2 = (_context2 = (_context2 = _this.p('value'), _startWith.startWith).call(_context2, null), waitUntilConstructed).call(_context2), _pairwise.pairwise).call(_context2).subscribe(function (_ref2) {
				var _ref3 = _slicedToArray(_ref2, 2);
	
				var prev = _ref3[0];
				var curr = _ref3[1];
	
				if (desc.cardinality.max === 1) {
					if (prev) {
						prev.fields[desc.keyInResource].set(null);
					}
					if (curr) {
						curr.fields[desc.keyInResource].set(_this[_symbols.$$owner]);
					}
				} else {
					if (prev) {
						prev.fields[desc.keyInResource].get().delete(_this[_symbols.$$owner]);
					}
					if (curr) {
						curr.fields[desc.keyInResource].get().add(_this[_symbols.$$owner]);
					}
				}
			});
	
			return _this;
		}
	
		_createClass(SideField, [{
			key: 'validate',
			value: function validate(val) {
				var stages = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	
				var notGiven = _isNull2.default.call(val) || _isUndefined2.default.call(val);
	
				if (stages.includes('commit')) {
					/* if there's a minimum cardinality, a value must have been given */
					(0, _misc.constraint)(!notGiven, (0, _misc.humanMsg)(_templateObject, this[_symbols.$$key], this[_symbols.$$owner].constructor.name));
				}
	
				/* the value must be of the proper domain */
				(0, _misc.constraint)(notGiven || this[_symbols.$$desc].resourceClass.hasInstance(val), (0, _misc.humanMsg)(_templateObject2, val, this[_symbols.$$owner].constructor.name, this[_symbols.$$key]));
	
				// TODO: these should not be assertions, but proper constraint-checks,
				//     : recording errors, possibly allowing them temporarily, etc.
			}
		}]);
	
		return SideField;
	}(_Field2.Field));

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _resources = __webpack_require__(16);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _typed = __webpack_require__(27);
	
	var _typed2 = _interopRequireDefault(_typed);
	
	var _lyphs = __webpack_require__(47);
	
	var _lyphs2 = _interopRequireDefault(_lyphs);
	
	var _groups = __webpack_require__(139);
	
	var _groups2 = _interopRequireDefault(_groups);
	
	var _measurables = __webpack_require__(94);
	
	var _measurables2 = _interopRequireDefault(_measurables);
	
	var _omegaTrees = __webpack_require__(213);
	
	var _omegaTrees2 = _interopRequireDefault(_omegaTrees);
	
	var _processes = __webpack_require__(95);
	
	var _processes2 = _interopRequireDefault(_processes);
	
	var _research = __webpack_require__(214);
	
	var _research2 = _interopRequireDefault(_research);
	
	var _visualisations = __webpack_require__(215);
	
	var _visualisations2 = _interopRequireDefault(_visualisations);
	
	var _Module = __webpack_require__(46);
	
	var _Module2 = _interopRequireDefault(_Module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Module2.default.create('all', [_resources2.default, _typed2.default, _lyphs2.default, _groups2.default, _measurables2.default, _omegaTrees2.default, _processes2.default, _research2.default, _visualisations2.default]);

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _TypedModule = __webpack_require__(31);
	
	var _TypedModule2 = _interopRequireDefault(_TypedModule);
	
	var _resources = __webpack_require__(16);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _typed = __webpack_require__(27);
	
	var _typed2 = _interopRequireDefault(_typed);
	
	var _groups = __webpack_require__(139);
	
	var _groups2 = _interopRequireDefault(_groups);
	
	var _lyphs = __webpack_require__(47);
	
	var _lyphs2 = _interopRequireDefault(_lyphs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _TypedModule2.default.create('omegaTrees', [_resources2.default, _typed2.default, _groups2.default, _lyphs2.default], function (M, _ref) {
		var IsRelatedTo = _ref.IsRelatedTo;
		var Template = _ref.Template;
		var Group = _ref.Group;
		var Lyph = _ref.Lyph;
		var Node = _ref.Node;
		var Has = _ref.Has;
		var PullsIntoTypeDefinition = _ref.PullsIntoTypeDefinition;
	
	
		var OmegaTree = M.TYPED_RESOURCE({ ////////////////////////////////////////
	
			name: 'OmegaTree',
	
			extends: Group,
	
			singular: "omega tree"
	
		}); /////////////////////////////////////////////////////////////////////////
	
	
		var HasAsRoot = M.RELATIONSHIP({
	
			name: 'HasAsRoot',
	
			extends: PullsIntoTypeDefinition,
	
			singular: "has as root",
	
			1: [OmegaTree, '0..*', { anchors: true, key: 'root' }],
			2: [Node, '0..*']
	
		});
	
		var OmegaTreePart = M.TYPED_RESOURCE({ ////////////////////////////////////
	
			name: 'OmegaTreePart',
	
			abstract: true,
	
			extends: Template,
			extendedBy: [Lyph, OmegaTree],
	
			singular: "omega tree part"
	
		}); /////////////////////////////////////////////////////////////////////////
	
	
		var HasTreeChildren = M.RELATIONSHIP({
	
			name: 'HasTreeChildren',
	
			extends: PullsIntoTypeDefinition,
	
			singular: "has tree-children",
	
			1: [OmegaTreePart, '0..*', { key: 'treeChildren' }],
			2: [OmegaTreePart, '0..1', { key: 'treeParent' }],
	
			noCycles: true
	
		});
	
		var HasTreePart = M.RELATIONSHIP({
	
			name: 'HasTreePart',
	
			extends: PullsIntoTypeDefinition,
	
			singular: "has tree-part",
	
			1: [OmegaTree, '0..*', { anchors: true, key: 'parts' }],
			2: [OmegaTreePart, '0..*']
	
		});
	});

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Module = __webpack_require__(46);
	
	var _Module2 = _interopRequireDefault(_Module);
	
	var _resources = __webpack_require__(16);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _measurables = __webpack_require__(94);
	
	var _measurables2 = _interopRequireDefault(_measurables);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Module2.default.create('research', [_resources2.default, _measurables2.default], function (M, _ref) {
		var Resource = _ref.Resource;
		var IsRelatedTo = _ref.IsRelatedTo;
		var Measurable = _ref.Measurable;
	
	
		var Correlation = M.RESOURCE({ ////////////////////////////////////////////
	
			name: 'Correlation',
	
			extends: Resource,
	
			singular: "correlation",
	
			properties: {
				'comment': { type: 'string' }
			}
	
		}); /////////////////////////////////////////////////////////////////////////
	
	
		var InvolvesMeasurable = M.RELATIONSHIP({
	
			name: 'InvolvesMeasurable',
	
			extends: IsRelatedTo,
	
			singular: "involves measurable",
	
			1: [Correlation, '0..*', { anchors: true, key: 'measurables' }],
			2: [Measurable, '0..*']
	
		});
	
		var ClinicalIndex = M.RESOURCE({ ///////////////////////////////////////////
	
			name: 'ClinicalIndex',
	
			extends: Resource,
	
			singular: "clinical index",
			plural: "clinical indices"
	
		}); /////////////////////////////////////////////////////////////////////////
	
	
		var EncompassesClinicalIndex = M.RELATIONSHIP({
	
			name: 'EncompassesClinicalIndex',
	
			extends: IsRelatedTo,
	
			singular: "encompasses clinical index",
	
			1: [ClinicalIndex, '0..*', { anchors: true, key: 'children' }],
			2: [ClinicalIndex, '0..1', { key: 'parent' }],
	
			noCycles: true
	
		});
	
		var InvolvesClinicalIndex = M.RELATIONSHIP({
	
			name: 'InvolvesClinicalIndex',
	
			extends: IsRelatedTo,
	
			singular: "involves clinical index",
	
			1: [Correlation, '0..*', { anchors: true, key: 'clinicalIndices' }],
			2: [ClinicalIndex, '0..*']
	
		});
	
		var Publication = M.RESOURCE({ ////////////////////////////////////////////
	
			name: 'Publication',
	
			extends: Resource,
	
			singular: "publication"
	
		}); /////////////////////////////////////////////////////////////////////////
	
	
		var InvolvesPublication = M.RELATIONSHIP({
	
			name: 'InvolvesPublication',
	
			extends: IsRelatedTo,
	
			singular: "involves publication",
	
			1: [Correlation, '0..1', { anchors: true, key: 'publication' }],
			2: [Publication, '0..*']
	
		});
	});

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _TypedModule = __webpack_require__(31);
	
	var _TypedModule2 = _interopRequireDefault(_TypedModule);
	
	var _schemas = __webpack_require__(32);
	
	var _resources = __webpack_require__(16);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _lyphs = __webpack_require__(47);
	
	var _lyphs2 = _interopRequireDefault(_lyphs);
	
	var _typed = __webpack_require__(27);
	
	var _typed2 = _interopRequireDefault(_typed);
	
	var _processes = __webpack_require__(95);
	
	var _processes2 = _interopRequireDefault(_processes);
	
	var _measurables = __webpack_require__(94);
	
	var _measurables2 = _interopRequireDefault(_measurables);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.default = _TypedModule2.default.create('visualisations', [_resources2.default, _lyphs2.default, _typed2.default, _processes2.default, _measurables2.default], function (M, _ref) {
		var Resource = _ref.Resource;
		var IsRelatedTo = _ref.IsRelatedTo;
		var Material = _ref.Material;
		var Lyph = _ref.Lyph;
		var Border = _ref.Border;
		var Coalescence = _ref.Coalescence;
		var Node = _ref.Node;
		var Template = _ref.Template;
		var Process = _ref.Process;
		var Measurable = _ref.Measurable;
		var Causality = _ref.Causality;
	
	
		var Theme = M.RESOURCE({ //////////////////////////////////////////////////
	
			name: 'Theme',
	
			extends: Resource,
	
			singular: "theme"
	
		}); /////////////////////////////////////////////////////////////////////////
	
	
		var PrescribesStyleFor = M.RELATIONSHIP({
	
			name: 'PrescribesStyleFor',
	
			extends: IsRelatedTo,
	
			singular: "prescribes style for",
	
			1: [Theme, '0..*', { key: 'resources' }],
			2: [Resource, '0..*', { key: 'themes' }],
	
			patternProperties: _defineProperty({}, _schemas.identifierRegex, { type: 'string', minLength: 1 })
	
		});
	
		////////////////////////////
		//// Artefact Hierarchy ////
		////////////////////////////
	
		var Artefact = M.RESOURCE({ ///////////////////////////////////////////////
	
			name: 'Artefact',
	
			extends: Resource,
			abstract: true,
	
			singular: "artefact"
	
		}); /////////////////////////////////////////////////////////////////////////
	
		var Dim2Artefact = M.RESOURCE({ ///////////////////////////////////////////
	
			name: 'Dim2Artefact',
	
			extends: Artefact,
			abstract: true,
	
			singular: "2-dimensional artefact"
	
		}); /////////////////////////////////////////////////////////////////////////
	
		var Dim1Artefact = M.RESOURCE({ ///////////////////////////////////////////
	
			name: 'Dim1Artefact',
	
			extends: Dim2Artefact,
			abstract: true,
	
			singular: "1-dimensional artefact"
	
		}); /////////////////////////////////////////////////////////////////////////
	
		var Dim0Artefact = M.RESOURCE({ ///////////////////////////////////////////
	
			name: 'Dim0Artefact',
	
			extends: Dim1Artefact,
			abstract: true,
	
			singular: "0-dimensional artefact"
	
		}); /////////////////////////////////////////////////////////////////////////
	
	
		//////////////////////////////////////
		//// Artefact Container Hierarchy ////
		//////////////////////////////////////
	
		var ArtefactContainer = M.RESOURCE({ //////////////////////////////////////
	
			name: 'ArtefactContainer',
	
			abstract: true,
	
			extends: Artefact,
	
			singular: "artefact container"
	
		}); /////////////////////////////////////////////////////////////////////////
	
		var Dim2Container = M.RESOURCE({ //////////////////////////////////////////
	
			name: 'Dim2Container',
	
			extends: [ArtefactContainer, Dim2Artefact],
			abstract: true,
	
			singular: "2-dimensional container"
	
		}); /////////////////////////////////////////////////////////////////////////
	
		var Dim1Container = M.RESOURCE({ //////////////////////////////////////////
	
			name: 'Dim1Container',
	
			extends: [ArtefactContainer, Dim1Artefact],
			abstract: true,
	
			singular: "1-dimensional container"
	
		}); /////////////////////////////////////////////////////////////////////////
	
		var Dim0Container = M.RESOURCE({ //////////////////////////////////////////
	
			name: 'Dim0Container',
	
			extends: [ArtefactContainer, Dim0Artefact],
			abstract: true,
	
			singular: "0-dimensional container"
	
		}); /////////////////////////////////////////////////////////////////////////
	
	
		/////////////////////////////////////////////////////
		//// Artefact Containment Relationship Hierarchy ////
		/////////////////////////////////////////////////////
	
		var ContainsArtefact = M.RELATIONSHIP({
	
			name: 'ContainsArtefact',
	
			abstract: true,
	
			extends: IsRelatedTo,
	
			singular: "contains artefact",
	
			1: [ArtefactContainer, '0..*', { anchors: true, key: 'children' }],
			2: [Artefact, '0..1', { key: 'parent' }]
	
		});
	
		/* in 2-dimensional containers */
		var ContainsArtefact_22 = M.RELATIONSHIP({
	
			name: 'ContainsArtefact_22',
	
			extends: ContainsArtefact,
	
			1: [Dim2Container, '0..*', { anchors: true, key: 'children' }],
			2: [Dim2Artefact, '0..1', { key: 'parent' }],
	
			properties: {
				'x': _extends({}, _schemas.rationalNumberSchema, { required: true }),
				'y': _extends({}, _schemas.rationalNumberSchema, { required: true }),
				'rotation': _extends({}, _schemas.angleSchema, { default: 0, required: true }),
				'width': _extends({}, _schemas.rationalNumberSchema, { required: true }),
				'height': _extends({}, _schemas.rationalNumberSchema, { required: true })
			}
	
		});
		var ContainsArtefact_21 = M.RELATIONSHIP({
	
			name: 'ContainsArtefact_21',
	
			extends: ContainsArtefact_22,
	
			1: [Dim2Container, '0..*', { anchors: true, key: 'children' }],
			2: [Dim1Artefact, '0..1', { key: 'parent' }],
	
			properties: { 'height': { value: 0 } }
	
		});
		var ContainsArtefact_20 = M.RELATIONSHIP({
	
			name: 'ContainsArtefact_20',
	
			extends: ContainsArtefact_21,
	
			1: [Dim2Container, '0..*', { anchors: true, key: 'children' }],
			2: [Dim0Artefact, '0..1', { key: 'parent' }],
	
			properties: { 'width': { value: 0 } }
	
		});
	
		/* in 1-dimensional containers */
		var ContainsArtefact_11 = M.RELATIONSHIP({
	
			name: 'ContainsArtefact_11',
	
			extends: ContainsArtefact,
	
			1: [Dim1Container, '0..*', { anchors: true, key: 'children' }],
			2: [Dim1Artefact, '0..1', { key: 'parent' }],
	
			properties: {
				'x': _extends({}, _schemas.rationalNumberSchema, { required: true }),
				'width': _extends({}, _schemas.rationalNumberSchema, { required: true })
			}
	
		});
		var ContainsArtefact_10 = M.RELATIONSHIP({
	
			name: 'ContainsArtefact_10',
	
			extends: ContainsArtefact_11,
	
			1: [Dim1Container, '0..*', { anchors: true, key: 'children' }],
			2: [Dim0Artefact, '0..1', { key: 'parent' }],
	
			properties: { 'width': { value: 0 } }
	
		});
	
		/* containment in 0-dimensional containers */
		var ContainsArtefact_00 = M.RELATIONSHIP({
	
			name: 'ContainsArtefact_00',
	
			extends: ContainsArtefact,
	
			1: [Dim0Container, '0..*', { anchors: true, key: 'children' }],
			2: [Dim0Artefact, '0..1', { key: 'parent' }]
	
		});
	
		////////////////////////////
		//// Specific Artefacts ////
		////////////////////////////
	
		var LyphCanvas = M.RESOURCE({ /////////////////////////////////////////////
	
			name: 'LyphCanvas',
	
			extends: Dim2Container,
	
			singular: "lyph canvas",
			plural: "lyph canvases"
	
		}); /////////////////////////////////////////////////////////////////////////
	
		var MaterialGlyph = M.RESOURCE({ //////////////////////////////////////////
	
			name: 'MaterialGlyph',
	
			extends: Dim0Artefact,
	
			singular: "material glyph"
	
		}); /////////////////////////////////////////////////////////////////////////
	
		var LyphRectangle = M.RESOURCE({ //////////////////////////////////////////
	
			name: 'LyphRectangle',
	
			extends: Dim2Container,
	
			singular: "lyph rectangle"
	
		}); /////////////////////////////////////////////////////////////////////////
	
		var LyphArtefact = M.RESOURCE({ ///////////////////////////////////////////
	
			name: 'LyphArtefact',
	
			extends: Dim2Container,
			extendedBy: [LyphCanvas, LyphRectangle],
	
			singular: "lyph artefact"
	
		}); /////////////////////////////////////////////////////////////////////////
	
		var BorderLine = M.RESOURCE({ /////////////////////////////////////////////
	
			name: 'BorderLine',
	
			extends: Dim1Container,
	
			singular: "border line"
	
		}); /////////////////////////////////////////////////////////////////////////
	
		var CoalescenceRectangle = M.RESOURCE({ ///////////////////////////////////
	
			name: 'CoalescenceRectangle',
	
			extends: Dim2Container,
	
			singular: "coalescence rectangle"
	
		}); /////////////////////////////////////////////////////////////////////////
	
		var NodeGlyph = M.RESOURCE({ //////////////////////////////////////////////
	
			name: 'NodeGlyph',
	
			extends: Dim0Container,
	
			singular: "node glyph"
	
		}); /////////////////////////////////////////////////////////////////////////
	
		var ProcessEdge = M.RESOURCE({ ////////////////////////////////////////////
	
			name: 'ProcessEdge',
	
			extends: Dim1Container,
	
			singular: "process edge"
	
		}); /////////////////////////////////////////////////////////////////////////
	
		var MeasurableGlyph = M.RESOURCE({ ////////////////////////////////////////
	
			name: 'MeasurableGlyph',
	
			extends: Dim0Artefact,
	
			singular: "measurable glyph"
	
		}); /////////////////////////////////////////////////////////////////////////
	
		var CausalityArrow = M.RESOURCE({ /////////////////////////////////////////
	
			name: 'CausalityArrow',
	
			extends: Dim1Artefact,
	
			singular: "causality arrow"
	
		}); /////////////////////////////////////////////////////////////////////////
	
	
		////////////////////////////////////////
		//// Model - Artefact Relationships ////
		////////////////////////////////////////
	
		var _M$RELATIONSHIP = M.RELATIONSHIP([[Artefact, Template], [MaterialGlyph, Material], [LyphArtefact, Lyph], [BorderLine, Border], [NodeGlyph, Node], [ProcessEdge, Process], [MeasurableGlyph, Measurable], [CausalityArrow, Causality], [CoalescenceRectangle, Coalescence]].map(function (_ref2) {
			var _ref3 = _slicedToArray(_ref2, 2);
	
			var ArtefactClass = _ref3[0];
			var ModelClass = _ref3[1];
			return {
	
				name: 'PresentsModel',
	
				extends: IsRelatedTo,
	
				singular: "presents model",
	
				1: [ArtefactClass, '1..1', { anchors: true, key: 'model' }],
				2: [ModelClass, '0..*']
	
			};
		}));
	
		var _M$RELATIONSHIP2 = _slicedToArray(_M$RELATIONSHIP, 1);
	
		var PresentsModel = _M$RELATIONSHIP2[0];
	});

/***/ },
/* 216 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = "\n\tfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\t\n\tfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\t\n\tfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n";

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _functionGenerator = __webpack_require__(19);
	
	var _functionGenerator2 = _interopRequireDefault(_functionGenerator);
	
	exports['default'] = (0, _functionGenerator2['default'])(ArrayBuffer, ['isView', 'transfer']);
	module.exports = exports['default'];

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _functionGenerator = __webpack_require__(19);
	
	var _functionGenerator2 = _interopRequireDefault(_functionGenerator);
	
	exports['default'] = (0, _functionGenerator2['default'])(Array, ['isArray', 'observe']);
	module.exports = exports['default'];

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _functionGenerator = __webpack_require__(19);
	
	var _functionGenerator2 = _interopRequireDefault(_functionGenerator);
	
	exports['default'] = (0, _functionGenerator2['default'])(Date, ['parse'], {
	  parse: 'toUnixOffset'
	});
	module.exports = exports['default'];

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _functionGenerator = __webpack_require__(19);
	
	var _functionGenerator2 = _interopRequireDefault(_functionGenerator);
	
	exports['default'] = (0, _functionGenerator2['default'])(JSON, ['parse', 'stringify'], {
	  parse: 'toObject',
	  stringify: 'toJSON'
	});
	module.exports = exports['default'];

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _functionGenerator = __webpack_require__(19);
	
	var _functionGenerator2 = _interopRequireDefault(_functionGenerator);
	
	exports['default'] = (0, _functionGenerator2['default'])(Math, ['abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', 'atanh', 'cbrt', 'ceil', 'clz32', 'cos', 'cosh', 'exp', 'expm1', 'floor', 'fround', 'hypot', 'imul', 'log', 'log10', 'log1p', 'log2', 'max', 'min', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc']);
	module.exports = exports['default'];

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _functionGenerator = __webpack_require__(19);
	
	var _functionGenerator2 = _interopRequireDefault(_functionGenerator);
	
	exports['default'] = (0, _functionGenerator2['default'])(Number, ['isFinite', 'isInteger', 'isNaN', 'isSafeInteger', 'parseFloat', 'parseInt'], {
	  parseFloat: 'toFloat',
	  parseInt: 'toInt'
	});
	module.exports = exports['default'];

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _functionGenerator = __webpack_require__(19);
	
	var _functionGenerator2 = _interopRequireDefault(_functionGenerator);
	
	exports['default'] = (0, _functionGenerator2['default'])(Object, ['assign', 'create', 'defineProperties', 'defineProperty', 'freeze', 'getOwnPropertyDescriptor', 'getOwnPropertyNames', 'getOwnPropertySymbols', 'getPrototypeOf', 'is', 'isExtensible', 'isFrozen', 'isSealed', 'keys', 'observe', 'preventExtensions', 'seal', 'setPrototypeOf'], {
	  getPrototypeOf: 'getPrototype',
	  setPrototypeOf: 'setPrototype'
	});
	module.exports = exports['default'];

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _functionGenerator = __webpack_require__(19);
	
	var _functionGenerator2 = _interopRequireDefault(_functionGenerator);
	
	exports['default'] = (0, _functionGenerator2['default'])(Symbol, ['for', 'keyFor'], {
	  'for': 'toSymbol',
	  keyFor: 'key'
	});
	module.exports = exports['default'];

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(24)
	  , toIndex  = __webpack_require__(103)
	  , toLength = __webpack_require__(20);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(15)
	  , createDesc      = __webpack_require__(92);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6)
	  , document = __webpack_require__(4).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 228 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(7)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4).document && document.documentElement;

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(6)
	  , setPrototypeOf = __webpack_require__(201).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(96)
	  , ITERATOR   = __webpack_require__(7)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(48);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(6)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(98)
	  , descriptor     = __webpack_require__(92)
	  , setToStringTag = __webpack_require__(136)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(30)(IteratorPrototype, __webpack_require__(7)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(97)
	  , $export        = __webpack_require__(1)
	  , redefine       = __webpack_require__(34)
	  , hide           = __webpack_require__(30)
	  , has            = __webpack_require__(28)
	  , Iterators      = __webpack_require__(96)
	  , $iterCreate    = __webpack_require__(235)
	  , setToStringTag = __webpack_require__(136)
	  , getPrototypeOf = __webpack_require__(45)
	  , ITERATOR       = __webpack_require__(7)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 237 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 238 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , macrotask = __webpack_require__(246).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(48)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(202)('keys')
	  , uid    = __webpack_require__(104);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(2)
	  , aFunction = __webpack_require__(33)
	  , SPECIES   = __webpack_require__(7)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(93)
	  , defined   = __webpack_require__(49);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(197)
	  , defined  = __webpack_require__(49);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(93)
	  , defined   = __webpack_require__(49);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 245 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(68)
	  , invoke             = __webpack_require__(196)
	  , html               = __webpack_require__(230)
	  , cel                = __webpack_require__(227)
	  , global             = __webpack_require__(4)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(48)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(4)
	  , DESCRIPTORS    = __webpack_require__(14)
	  , LIBRARY        = __webpack_require__(97)
	  , $typed         = __webpack_require__(203)
	  , hide           = __webpack_require__(30)
	  , redefineAll    = __webpack_require__(101)
	  , fails          = __webpack_require__(5)
	  , anInstance     = __webpack_require__(90)
	  , toInteger      = __webpack_require__(93)
	  , toLength       = __webpack_require__(20)
	  , gOPN           = __webpack_require__(99).f
	  , dP             = __webpack_require__(15).f
	  , arrayFill      = __webpack_require__(225)
	  , setToStringTag = __webpack_require__(136)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , parseInt       = global.parseInt
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , min            = Math.min
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};
	
	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};
	
	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};
	
	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};
	
	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};
	
	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(4)
	  , core           = __webpack_require__(64)
	  , LIBRARY        = __webpack_require__(97)
	  , wksExt         = __webpack_require__(459)
	  , defineProperty = __webpack_require__(15).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(134)
	  , ITERATOR  = __webpack_require__(7)('iterator')
	  , Iterators = __webpack_require__(96);
	module.exports = __webpack_require__(64).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(133)
	  , step             = __webpack_require__(447)
	  , Iterators        = __webpack_require__(96)
	  , toIObject        = __webpack_require__(36);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(236)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(374);
	
	module.exports = function assign() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(376);
	
	module.exports = function assignWith() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(377);
	
	module.exports = function at() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(378);
	
	module.exports = function cloneDeep() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(381);
	
	module.exports = function flatten() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(382);
	
	module.exports = function fromPairs() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(385);
	
	module.exports = function includes() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(387);
	
	module.exports = function isInteger() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(389);
	
	module.exports = function isNumber() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(390);
	
	module.exports = function isSet() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(393);
	
	module.exports = function isWeakSet() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(395);
	
	module.exports = function mapValues() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(396);
	
	module.exports = function max() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(399);
	
	module.exports = function omitBy() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(400);
	
	module.exports = function parseInt() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(401);
	
	module.exports = function pick() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(404);
	
	module.exports = function set() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(408);
	
	module.exports = function trim() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fn = __webpack_require__(410);
	
	module.exports = function uniq() {
	  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
	};


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(39),
	    root = __webpack_require__(11);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(339),
	    hashDelete = __webpack_require__(340),
	    hashGet = __webpack_require__(341),
	    hashHas = __webpack_require__(342),
	    hashSet = __webpack_require__(343);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(39),
	    root = __webpack_require__(11);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(11);
	
	/** Built-in value references. */
	var Reflect = root.Reflect;
	
	module.exports = Reflect;


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(39),
	    root = __webpack_require__(11);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ },
/* 275 */
/***/ function(module, exports) {

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}
	
	module.exports = addMapEntry;


/***/ },
/* 276 */
/***/ function(module, exports) {

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}
	
	module.exports = addSetEntry;


/***/ },
/* 277 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 278 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = arrayFilter;


/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(78);
	
	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to search.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array ? array.length : 0;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}
	
	module.exports = arrayIncludes;


/***/ },
/* 280 */
/***/ function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to search.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arrayIncludesWith;


/***/ },
/* 281 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(56);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used by `_.defaults` to customize its `_.assignIn` use.
	 *
	 * @private
	 * @param {*} objValue The destination value.
	 * @param {*} srcValue The source value.
	 * @param {string} key The key of the property to assign.
	 * @param {Object} object The parent object of `objValue`.
	 * @returns {*} Returns the value to assign.
	 */
	function assignInDefaults(objValue, srcValue, key, object) {
	  if (objValue === undefined ||
	      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
	    return srcValue;
	  }
	  return objValue;
	}
	
	module.exports = assignInDefaults;


/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(52),
	    keys = __webpack_require__(9);
	
	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}
	
	module.exports = baseAssign;


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var get = __webpack_require__(123);
	
	/**
	 * The base implementation of `_.at` without support for individual paths.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {string[]} paths The property paths of elements to pick.
	 * @returns {Array} Returns the picked elements.
	 */
	function baseAt(object, paths) {
	  var index = -1,
	      isNil = object == null,
	      length = paths.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = isNil ? undefined : get(object, paths[index]);
	  }
	  return result;
	}
	
	module.exports = baseAt;


/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(111),
	    arrayEach = __webpack_require__(277),
	    assignValue = __webpack_require__(75),
	    baseAssign = __webpack_require__(283),
	    cloneBuffer = __webpack_require__(316),
	    copyArray = __webpack_require__(323),
	    copySymbols = __webpack_require__(324),
	    getAllKeys = __webpack_require__(332),
	    getTag = __webpack_require__(53),
	    initCloneArray = __webpack_require__(344),
	    initCloneByTag = __webpack_require__(345),
	    initCloneObject = __webpack_require__(346),
	    isArray = __webpack_require__(8),
	    isBuffer = __webpack_require__(386),
	    isHostObject = __webpack_require__(120),
	    isObject = __webpack_require__(12),
	    keys = __webpack_require__(9);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;
	
	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);
	
	  if (!isArr) {
	    var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}
	
	module.exports = baseClone;


/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12);
	
	/** Built-in value references. */
	var objectCreate = Object.create;
	
	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}
	
	module.exports = baseCreate;


/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(155),
	    createBaseEach = __webpack_require__(326);
	
	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);
	
	module.exports = baseEach;


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(58);
	
	/**
	 * The base implementation of methods like `_.max` and `_.min` which accepts a
	 * `comparator` to determine the extremum value.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The iteratee invoked per iteration.
	 * @param {Function} comparator The comparator used to compare values.
	 * @returns {*} Returns the extremum value.
	 */
	function baseExtremum(array, iteratee, comparator) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    var value = array[index],
	        current = iteratee(value);
	
	    if (current != null && (computed === undefined
	          ? (current === current && !isSymbol(current))
	          : comparator(current, computed)
	        )) {
	      var computed = current,
	          result = value;
	    }
	  }
	  return result;
	}
	
	module.exports = baseExtremum;


/***/ },
/* 289 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseFindIndex;


/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(327);
	
	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 291 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}
	
	module.exports = baseGetTag;


/***/ },
/* 292 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.gt` which doesn't coerce arguments.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if `value` is greater than `other`,
	 *  else `false`.
	 */
	function baseGt(value, other) {
	  return value > other;
	}
	
	module.exports = baseGt;


/***/ },
/* 293 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}
	
	module.exports = baseHasIn;


/***/ },
/* 294 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * The base implementation of `_.inRange` which doesn't coerce arguments.
	 *
	 * @private
	 * @param {number} number The number to check.
	 * @param {number} start The start of the range.
	 * @param {number} end The end of the range.
	 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	 */
	function baseInRange(number, start, end) {
	  return number >= nativeMin(start, end) && number < nativeMax(start, end);
	}
	
	module.exports = baseInRange;


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(111),
	    equalArrays = __webpack_require__(164),
	    equalByTag = __webpack_require__(330),
	    equalObjects = __webpack_require__(331),
	    getTag = __webpack_require__(53),
	    isArray = __webpack_require__(8),
	    isHostObject = __webpack_require__(120),
	    isTypedArray = __webpack_require__(391);
	
	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}
	
	module.exports = baseIsEqualDeep;


/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(111),
	    baseIsEqual = __webpack_require__(113);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ },
/* 297 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}
	
	module.exports = baseIsNaN;


/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(84),
	    isHostObject = __webpack_require__(120),
	    isMasked = __webpack_require__(350),
	    isObject = __webpack_require__(12),
	    toSource = __webpack_require__(170);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	var getTag = __webpack_require__(53),
	    isObjectLike = __webpack_require__(18);
	
	/** `Object#toString` result references. */
	var setTag = '[object Set]';
	
	/**
	 * The base implementation of `_.isSet` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 */
	function baseIsSet(value) {
	  return isObjectLike(value) && getTag(value) == setTag;
	}
	
	module.exports = baseIsSet;


/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(85),
	    isObjectLike = __webpack_require__(18);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(122);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;
	
	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	var baseKeys = overArg(nativeKeys, Object);
	
	module.exports = baseKeys;


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	var Reflect = __webpack_require__(273),
	    iteratorToArray = __webpack_require__(351);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Built-in value references. */
	var enumerate = Reflect ? Reflect.enumerate : undefined,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * The base implementation of `_.keysIn` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  object = object == null ? object : Object(object);
	
	  var result = [];
	  for (var key in object) {
	    result.push(key);
	  }
	  return result;
	}
	
	// Fallback for IE < 9 with es6-shim.
	if (enumerate && !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf')) {
	  baseKeysIn = function(object) {
	    return iteratorToArray(enumerate(object));
	  };
	}
	
	module.exports = baseKeysIn;


/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(287),
	    isArrayLike = __webpack_require__(21);
	
	/**
	 * The base implementation of `_.map` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike(collection) ? Array(collection.length) : [];
	
	  baseEach(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}
	
	module.exports = baseMap;


/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(296),
	    getMatchData = __webpack_require__(335),
	    matchesStrictComparable = __webpack_require__(168);
	
	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(113),
	    get = __webpack_require__(123),
	    hasIn = __webpack_require__(383),
	    isKey = __webpack_require__(55),
	    isStrictComparable = __webpack_require__(167),
	    matchesStrictComparable = __webpack_require__(168),
	    toKey = __webpack_require__(40);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	var basePickBy = __webpack_require__(159);
	
	/**
	 * The base implementation of `_.pick` without support for individual
	 * property identifiers.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property identifiers to pick.
	 * @returns {Object} Returns the new object.
	 */
	function basePick(object, props) {
	  object = Object(object);
	  return basePickBy(object, props, function(value, key) {
	    return key in object;
	  });
	}
	
	module.exports = basePick;


/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(156);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(75),
	    castPath = __webpack_require__(115),
	    isIndex = __webpack_require__(54),
	    isKey = __webpack_require__(55),
	    isObject = __webpack_require__(12),
	    toKey = __webpack_require__(40);
	
	/**
	 * The base implementation of `_.set`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @param {Function} [customizer] The function to customize path creation.
	 * @returns {Object} Returns `object`.
	 */
	function baseSet(object, path, value, customizer) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var index = -1,
	      length = path.length,
	      lastIndex = length - 1,
	      nested = object;
	
	  while (nested != null && ++index < length) {
	    var key = toKey(path[index]);
	    if (isObject(nested)) {
	      var newValue = value;
	      if (index != lastIndex) {
	        var objValue = nested[key];
	        newValue = customizer ? customizer(objValue, key, nested) : undefined;
	        if (newValue === undefined) {
	          newValue = objValue == null
	            ? (isIndex(path[index + 1]) ? [] : {})
	            : objValue;
	        }
	      }
	      assignValue(nested, key, newValue);
	    }
	    nested = nested[key];
	  }
	  return object;
	}
	
	module.exports = baseSet;


/***/ },
/* 309 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;
	
	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;
	
	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}
	
	module.exports = baseSlice;


/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(51);
	
	/**
	 * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
	 * of key-value pairs for `object` corresponding to the property names of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the key-value pairs.
	 */
	function baseToPairs(object, props) {
	  return arrayMap(props, function(key) {
	    return [key, object[key]];
	  });
	}
	
	module.exports = baseToPairs;


/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(51);
	
	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  return arrayMap(props, function(key) {
	    return object[key];
	  });
	}
	
	module.exports = baseValues;


/***/ },
/* 312 */
/***/ function(module, exports) {

	/**
	 * Checks if a cache value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}
	
	module.exports = cacheHas;


/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	var baseSlice = __webpack_require__(309);
	
	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : baseSlice(array, start, end);
	}
	
	module.exports = castSlice;


/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(78);
	
	/**
	 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
	 * that is not found in the character symbols.
	 *
	 * @private
	 * @param {Array} strSymbols The string symbols to inspect.
	 * @param {Array} chrSymbols The character symbols to find.
	 * @returns {number} Returns the index of the last unmatched string symbol.
	 */
	function charsEndIndex(strSymbols, chrSymbols) {
	  var index = strSymbols.length;
	
	  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	  return index;
	}
	
	module.exports = charsEndIndex;


/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(78);
	
	/**
	 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
	 * that is not found in the character symbols.
	 *
	 * @private
	 * @param {Array} strSymbols The string symbols to inspect.
	 * @param {Array} chrSymbols The character symbols to find.
	 * @returns {number} Returns the index of the first unmatched string symbol.
	 */
	function charsStartIndex(strSymbols, chrSymbols) {
	  var index = -1,
	      length = strSymbols.length;
	
	  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	  return index;
	}
	
	module.exports = charsStartIndex;


/***/ },
/* 316 */
/***/ function(module, exports) {

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var result = new buffer.constructor(buffer.length);
	  buffer.copy(result);
	  return result;
	}
	
	module.exports = cloneBuffer;


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(116);
	
	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}
	
	module.exports = cloneDataView;


/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	var addMapEntry = __webpack_require__(275),
	    arrayReduce = __webpack_require__(154),
	    mapToArray = __webpack_require__(121);
	
	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}
	
	module.exports = cloneMap;


/***/ },
/* 319 */
/***/ function(module, exports) {

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;
	
	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}
	
	module.exports = cloneRegExp;


/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	var addSetEntry = __webpack_require__(276),
	    arrayReduce = __webpack_require__(154),
	    setToArray = __webpack_require__(83);
	
	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}
	
	module.exports = cloneSet;


/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(74);
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}
	
	module.exports = cloneSymbol;


/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(116);
	
	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}
	
	module.exports = cloneTypedArray;


/***/ },
/* 323 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	module.exports = copyArray;


/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(52),
	    getSymbols = __webpack_require__(119);
	
	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}
	
	module.exports = copySymbols;


/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(11);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(21);
	
	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}
	
	module.exports = createBaseEach;


/***/ },
/* 327 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(150),
	    noop = __webpack_require__(398),
	    setToArray = __webpack_require__(83);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Creates a set object of `values`.
	 *
	 * @private
	 * @param {Array} values The values to add to the set.
	 * @returns {Object} Returns the new set.
	 */
	var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
	  return new Set(values);
	};
	
	module.exports = createSet;


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	var baseToPairs = __webpack_require__(310),
	    getTag = __webpack_require__(53),
	    mapToArray = __webpack_require__(121),
	    setToPairs = __webpack_require__(365);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    setTag = '[object Set]';
	
	/**
	 * Creates a `_.toPairs` or `_.toPairsIn` function.
	 *
	 * @private
	 * @param {Function} keysFunc The function to get the keys of a given object.
	 * @returns {Function} Returns the new pairs function.
	 */
	function createToPairs(keysFunc) {
	  return function(object) {
	    var tag = getTag(object);
	    if (tag == mapTag) {
	      return mapToArray(object);
	    }
	    if (tag == setTag) {
	      return setToPairs(object);
	    }
	    return baseToPairs(object, keysFunc(object));
	  };
	}
	
	module.exports = createToPairs;


/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(74),
	    Uint8Array = __webpack_require__(152),
	    eq = __webpack_require__(56),
	    equalArrays = __webpack_require__(164),
	    mapToArray = __webpack_require__(121),
	    setToArray = __webpack_require__(83);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;
	
	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(158),
	    keys = __webpack_require__(9);
	
	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : baseHas(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalObjects;


/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(157),
	    getSymbols = __webpack_require__(119),
	    keys = __webpack_require__(9);
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	module.exports = getAllKeys;


/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(157),
	    getSymbolsIn = __webpack_require__(336),
	    keysIn = __webpack_require__(173);
	
	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}
	
	module.exports = getAllKeysIn;


/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(114);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(167),
	    keys = __webpack_require__(9);
	
	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;
	
	  while (length--) {
	    var key = result[length],
	        value = object[key];
	
	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(112),
	    getPrototype = __webpack_require__(118),
	    getSymbols = __webpack_require__(119),
	    stubArray = __webpack_require__(175);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own and inherited enumerable symbol properties
	 * of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
	  var result = [];
	  while (object) {
	    arrayPush(result, getSymbols(object));
	    object = getPrototype(object);
	  }
	  return result;
	};
	
	module.exports = getSymbolsIn;


/***/ },
/* 337 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(115),
	    isArguments = __webpack_require__(124),
	    isArray = __webpack_require__(8),
	    isIndex = __webpack_require__(54),
	    isKey = __webpack_require__(55),
	    isLength = __webpack_require__(85),
	    isString = __webpack_require__(57),
	    toKey = __webpack_require__(40);
	
	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var result,
	      index = -1,
	      length = path.length;
	
	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isString(object) || isArguments(object));
	}
	
	module.exports = hasPath;


/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(82);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}
	
	module.exports = hashClear;


/***/ },
/* 340 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}
	
	module.exports = hashDelete;


/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(82);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(82);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(82);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ },
/* 344 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);
	
	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}
	
	module.exports = initCloneArray;


/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(116),
	    cloneDataView = __webpack_require__(317),
	    cloneMap = __webpack_require__(318),
	    cloneRegExp = __webpack_require__(319),
	    cloneSet = __webpack_require__(320),
	    cloneSymbol = __webpack_require__(321),
	    cloneTypedArray = __webpack_require__(322);
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);
	
	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);
	
	    case dataViewTag:
	      return cloneDataView(object, isDeep);
	
	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);
	
	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);
	
	    case numberTag:
	    case stringTag:
	      return new Ctor(object);
	
	    case regexpTag:
	      return cloneRegExp(object);
	
	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);
	
	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}
	
	module.exports = initCloneByTag;


/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(286),
	    getPrototype = __webpack_require__(118),
	    isPrototype = __webpack_require__(81);
	
	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}
	
	module.exports = initCloneObject;


/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(74),
	    isArguments = __webpack_require__(124),
	    isArray = __webpack_require__(8);
	
	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
	
	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}
	
	module.exports = isFlattenable;


/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(56),
	    isArrayLike = __webpack_require__(21),
	    isIndex = __webpack_require__(54),
	    isObject = __webpack_require__(12);
	
	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 349 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(325);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	module.exports = isMasked;


/***/ },
/* 351 */
/***/ function(module, exports) {

	/**
	 * Converts `iterator` to an array.
	 *
	 * @private
	 * @param {Object} iterator The iterator to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function iteratorToArray(iterator) {
	  var data,
	      result = [];
	
	  while (!(data = iterator.next()).done) {
	    result.push(data.value);
	  }
	  return result;
	}
	
	module.exports = iteratorToArray;


/***/ },
/* 352 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}
	
	module.exports = listCacheClear;


/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(76);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(76);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(76);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(76);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(271),
	    ListCache = __webpack_require__(73),
	    Map = __webpack_require__(109);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(80);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}
	
	module.exports = mapCacheDelete;


/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(80);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(80);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(80);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ },
/* 362 */
/***/ function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0',
	    rsVarRange = '\\ufe0e\\ufe0f';
	
	/** Used to compose unicode capture groups. */
	var rsZWJ = '\\u200d';
	
	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasComplexSymbol = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');
	
	module.exports = reHasComplexSymbol;


/***/ },
/* 363 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	module.exports = setCacheAdd;


/***/ },
/* 364 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	module.exports = setCacheHas;


/***/ },
/* 365 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to its value-value pairs.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the value-value pairs.
	 */
	function setToPairs(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = [value, value];
	  });
	  return result;
	}
	
	module.exports = setToPairs;


/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(73);
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}
	
	module.exports = stackClear;


/***/ },
/* 367 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}
	
	module.exports = stackDelete;


/***/ },
/* 368 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	module.exports = stackGet;


/***/ },
/* 369 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	module.exports = stackHas;


/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(73),
	    Map = __webpack_require__(109),
	    MapCache = __webpack_require__(110);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}
	
	module.exports = stackSet;


/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	var reHasComplexSymbol = __webpack_require__(362);
	
	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0',
	    rsVarRange = '\\ufe0e\\ufe0f';
	
	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange + ']',
	    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ = '\\u200d';
	
	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
	
	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reComplexSymbol = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
	
	/**
	 * Gets the number of symbols in `string`.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {number} Returns the string size.
	 */
	function stringSize(string) {
	  if (!(string && reHasComplexSymbol.test(string))) {
	    return string.length;
	  }
	  var result = reComplexSymbol.lastIndex = 0;
	  while (reComplexSymbol.test(string)) {
	    result++;
	  }
	  return result;
	}
	
	module.exports = stringSize;


/***/ },
/* 372 */
/***/ function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0',
	    rsVarRange = '\\ufe0e\\ufe0f';
	
	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange + ']',
	    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ = '\\u200d';
	
	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
	
	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reComplexSymbol = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
	
	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return string.match(reComplexSymbol);
	}
	
	module.exports = stringToArray;


/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(174),
	    toString = __webpack_require__(86);
	
	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  string = toString(string);
	
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	module.exports = stringToPath;


/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(75),
	    copyObject = __webpack_require__(52),
	    createAssigner = __webpack_require__(117),
	    isArrayLike = __webpack_require__(21),
	    isPrototype = __webpack_require__(81),
	    keys = __webpack_require__(9);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');
	
	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});
	
	module.exports = assign;


/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(52),
	    createAssigner = __webpack_require__(117),
	    keysIn = __webpack_require__(173);
	
	/**
	 * This method is like `_.assignIn` except that it accepts `customizer`
	 * which is invoked to produce the assigned values. If `customizer` returns
	 * `undefined`, assignment is handled by the method instead. The `customizer`
	 * is invoked with five arguments: (objValue, srcValue, key, object, source).
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias extendWith
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} sources The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 * @see _.assignWith
	 * @example
	 *
	 * function customizer(objValue, srcValue) {
	 *   return _.isUndefined(objValue) ? srcValue : objValue;
	 * }
	 *
	 * var defaults = _.partialRight(_.assignInWith, customizer);
	 *
	 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	 * // => { 'a': 1, 'b': 2 }
	 */
	var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
	  copyObject(source, keysIn(source), object, customizer);
	});
	
	module.exports = assignInWith;


/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(52),
	    createAssigner = __webpack_require__(117),
	    keys = __webpack_require__(9);
	
	/**
	 * This method is like `_.assign` except that it accepts `customizer`
	 * which is invoked to produce the assigned values. If `customizer` returns
	 * `undefined`, assignment is handled by the method instead. The `customizer`
	 * is invoked with five arguments: (objValue, srcValue, key, object, source).
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} sources The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 * @see _.assignInWith
	 * @example
	 *
	 * function customizer(objValue, srcValue) {
	 *   return _.isUndefined(objValue) ? srcValue : objValue;
	 * }
	 *
	 * var defaults = _.partialRight(_.assignWith, customizer);
	 *
	 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	 * // => { 'a': 1, 'b': 2 }
	 */
	var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
	  copyObject(source, keys(source), object, customizer);
	});
	
	module.exports = assignWith;


/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	var baseAt = __webpack_require__(284),
	    baseFlatten = __webpack_require__(77),
	    baseRest = __webpack_require__(38);
	
	/**
	 * Creates an array of values corresponding to `paths` of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {...(string|string[])} [paths] The property paths of elements to pick.
	 * @returns {Array} Returns the picked values.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
	 *
	 * _.at(object, ['a[0].b.c', 'a[1]']);
	 * // => [3, 4]
	 */
	var at = baseRest(function(object, paths) {
	  return baseAt(object, baseFlatten(paths, 1));
	});
	
	module.exports = at;


/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(285);
	
	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return baseClone(value, true, true);
	}
	
	module.exports = cloneDeep;


/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(153),
	    assignInDefaults = __webpack_require__(282),
	    assignInWith = __webpack_require__(375),
	    baseRest = __webpack_require__(38);
	
	/**
	 * Assigns own and inherited enumerable string keyed properties of source
	 * objects to the destination object for all destination properties that
	 * resolve to `undefined`. Source objects are applied from left to right.
	 * Once a property is set, additional values of the same property are ignored.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.defaultsDeep
	 * @example
	 *
	 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	 * // => { 'a': 1, 'b': 2 }
	 */
	var defaults = baseRest(function(args) {
	  args.push(undefined, assignInDefaults);
	  return apply(assignInWith, undefined, args);
	});
	
	module.exports = defaults;


/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(407);


/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(77);
	
	/**
	 * Flattens `array` a single level deep.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to flatten.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * _.flatten([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, [3, [4]], 5]
	 */
	function flatten(array) {
	  var length = array ? array.length : 0;
	  return length ? baseFlatten(array, 1) : [];
	}
	
	module.exports = flatten;


/***/ },
/* 382 */
/***/ function(module, exports) {

	/**
	 * The inverse of `_.toPairs`; this method returns an object composed
	 * from key-value `pairs`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Array
	 * @param {Array} pairs The key-value pairs.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * _.fromPairs([['a', 1], ['b', 2]]);
	 * // => { 'a': 1, 'b': 2 }
	 */
	function fromPairs(pairs) {
	  var index = -1,
	      length = pairs ? pairs.length : 0,
	      result = {};
	
	  while (++index < length) {
	    var pair = pairs[index];
	    result[pair[0]] = pair[1];
	  }
	  return result;
	}
	
	module.exports = fromPairs;


/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(293),
	    hasPath = __webpack_require__(338);
	
	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}
	
	module.exports = hasIn;


/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	var baseInRange = __webpack_require__(294),
	    toFinite = __webpack_require__(176),
	    toNumber = __webpack_require__(178);
	
	/**
	 * Checks if `n` is between `start` and up to, but not including, `end`. If
	 * `end` is not specified, it's set to `start` with `start` then set to `0`.
	 * If `start` is greater than `end` the params are swapped to support
	 * negative ranges.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.3.0
	 * @category Number
	 * @param {number} number The number to check.
	 * @param {number} [start=0] The start of the range.
	 * @param {number} end The end of the range.
	 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	 * @see _.range, _.rangeRight
	 * @example
	 *
	 * _.inRange(3, 2, 4);
	 * // => true
	 *
	 * _.inRange(4, 8);
	 * // => true
	 *
	 * _.inRange(4, 2);
	 * // => false
	 *
	 * _.inRange(2, 2);
	 * // => false
	 *
	 * _.inRange(1.2, 2);
	 * // => true
	 *
	 * _.inRange(5.2, 4);
	 * // => false
	 *
	 * _.inRange(-3, -2, -6);
	 * // => true
	 */
	function inRange(number, start, end) {
	  start = toFinite(start);
	  if (end === undefined) {
	    end = start;
	    start = 0;
	  } else {
	    end = toFinite(end);
	  }
	  number = toNumber(number);
	  return baseInRange(number, start, end);
	}
	
	module.exports = inRange;


/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(78),
	    isArrayLike = __webpack_require__(21),
	    isString = __webpack_require__(57),
	    toInteger = __webpack_require__(177),
	    values = __webpack_require__(180);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Checks if `value` is in `collection`. If `collection` is a string, it's
	 * checked for a substring of `value`, otherwise
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * is used for equality comparisons. If `fromIndex` is negative, it's used as
	 * the offset from the end of `collection`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to search.
	 * @param {*} value The value to search for.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	 * @returns {boolean} Returns `true` if `value` is found, else `false`.
	 * @example
	 *
	 * _.includes([1, 2, 3], 1);
	 * // => true
	 *
	 * _.includes([1, 2, 3], 1, 2);
	 * // => false
	 *
	 * _.includes({ 'a': 1, 'b': 2 }, 1);
	 * // => true
	 *
	 * _.includes('abcd', 'bc');
	 * // => true
	 */
	function includes(collection, value, fromIndex, guard) {
	  collection = isArrayLike(collection) ? collection : values(collection);
	  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;
	
	  var length = collection.length;
	  if (fromIndex < 0) {
	    fromIndex = nativeMax(length + fromIndex, 0);
	  }
	  return isString(collection)
	    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
	    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
	}
	
	module.exports = includes;


/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(11),
	    stubFalse = __webpack_require__(406);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(132)(module)))

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(177);
	
	/**
	 * Checks if `value` is an integer.
	 *
	 * **Note:** This method is based on
	 * [`Number.isInteger`](https://mdn.io/Number/isInteger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
	 * @example
	 *
	 * _.isInteger(3);
	 * // => true
	 *
	 * _.isInteger(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isInteger(Infinity);
	 * // => false
	 *
	 * _.isInteger('3');
	 * // => false
	 */
	function isInteger(value) {
	  return typeof value == 'number' && value == toInteger(value);
	}
	
	module.exports = isInteger;


/***/ },
/* 388 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	 * @example
	 *
	 * _.isNull(null);
	 * // => true
	 *
	 * _.isNull(void 0);
	 * // => false
	 */
	function isNull(value) {
	  return value === null;
	}
	
	module.exports = isNull;


/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(18);
	
	/** `Object#toString` result references. */
	var numberTag = '[object Number]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Number` primitive or object.
	 *
	 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	 * classified as numbers, use the `_.isFinite` method.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
	 * @example
	 *
	 * _.isNumber(3);
	 * // => true
	 *
	 * _.isNumber(Number.MIN_VALUE);
	 * // => true
	 *
	 * _.isNumber(Infinity);
	 * // => true
	 *
	 * _.isNumber('3');
	 * // => false
	 */
	function isNumber(value) {
	  return typeof value == 'number' ||
	    (isObjectLike(value) && objectToString.call(value) == numberTag);
	}
	
	module.exports = isNumber;


/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsSet = __webpack_require__(299),
	    baseUnary = __webpack_require__(162),
	    nodeUtil = __webpack_require__(169);
	
	/* Node.js helper references. */
	var nodeIsSet = nodeUtil && nodeUtil.isSet;
	
	/**
	 * Checks if `value` is classified as a `Set` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 * @example
	 *
	 * _.isSet(new Set);
	 * // => true
	 *
	 * _.isSet(new WeakSet);
	 * // => false
	 */
	var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
	
	module.exports = isSet;


/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(300),
	    baseUnary = __webpack_require__(162),
	    nodeUtil = __webpack_require__(169);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;


/***/ },
/* 392 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is `undefined`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	 * @example
	 *
	 * _.isUndefined(void 0);
	 * // => true
	 *
	 * _.isUndefined(null);
	 * // => false
	 */
	function isUndefined(value) {
	  return value === undefined;
	}
	
	module.exports = isUndefined;


/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(18);
	
	/** `Object#toString` result references. */
	var weakSetTag = '[object WeakSet]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `WeakSet` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
	 * @example
	 *
	 * _.isWeakSet(new WeakSet);
	 * // => true
	 *
	 * _.isWeakSet(new Set);
	 * // => false
	 */
	function isWeakSet(value) {
	  return isObjectLike(value) && objectToString.call(value) == weakSetTag;
	}
	
	module.exports = isWeakSet;


/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(51),
	    baseIteratee = __webpack_require__(79),
	    baseMap = __webpack_require__(303),
	    isArray = __webpack_require__(8);
	
	/**
	 * Creates an array of values by running each element in `collection` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, index|key, collection).
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	 *
	 * The guarded methods are:
	 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * _.map([4, 8], square);
	 * // => [16, 64]
	 *
	 * _.map({ 'a': 4, 'b': 8 }, square);
	 * // => [16, 64] (iteration order is not guaranteed)
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.map(users, 'user');
	 * // => ['barney', 'fred']
	 */
	function map(collection, iteratee) {
	  var func = isArray(collection) ? arrayMap : baseMap;
	  return func(collection, baseIteratee(iteratee, 3));
	}
	
	module.exports = map;


/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(155),
	    baseIteratee = __webpack_require__(79);
	
	/**
	 * Creates an object with the same keys as `object` and values generated
	 * by running each own enumerable string keyed property of `object` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, key, object).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Object} Returns the new mapped object.
	 * @see _.mapKeys
	 * @example
	 *
	 * var users = {
	 *   'fred':    { 'user': 'fred',    'age': 40 },
	 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	 * };
	 *
	 * _.mapValues(users, function(o) { return o.age; });
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.mapValues(users, 'age');
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 */
	function mapValues(object, iteratee) {
	  var result = {};
	  iteratee = baseIteratee(iteratee, 3);
	
	  baseForOwn(object, function(value, key, object) {
	    result[key] = iteratee(value, key, object);
	  });
	  return result;
	}
	
	module.exports = mapValues;


/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	var baseExtremum = __webpack_require__(288),
	    baseGt = __webpack_require__(292),
	    identity = __webpack_require__(171);
	
	/**
	 * Computes the maximum value of `array`. If `array` is empty or falsey,
	 * `undefined` is returned.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Math
	 * @param {Array} array The array to iterate over.
	 * @returns {*} Returns the maximum value.
	 * @example
	 *
	 * _.max([4, 2, 8, 6]);
	 * // => 8
	 *
	 * _.max([]);
	 * // => undefined
	 */
	function max(array) {
	  return (array && array.length)
	    ? baseExtremum(array, identity, baseGt)
	    : undefined;
	}
	
	module.exports = max;


/***/ },
/* 397 */
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that negates the result of the predicate `func`. The
	 * `func` predicate is invoked with the `this` binding and arguments of the
	 * created function.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Function
	 * @param {Function} predicate The predicate to negate.
	 * @returns {Function} Returns the new negated function.
	 * @example
	 *
	 * function isEven(n) {
	 *   return n % 2 == 0;
	 * }
	 *
	 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	 * // => [1, 3, 5]
	 */
	function negate(predicate) {
	  if (typeof predicate != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  return function() {
	    var args = arguments;
	    switch (args.length) {
	      case 0: return !predicate.call(this);
	      case 1: return !predicate.call(this, args[0]);
	      case 2: return !predicate.call(this, args[0], args[1]);
	      case 3: return !predicate.call(this, args[0], args[1], args[2]);
	    }
	    return !predicate.apply(this, args);
	  };
	}
	
	module.exports = negate;


/***/ },
/* 398 */
/***/ function(module, exports) {

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}
	
	module.exports = noop;


/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	var baseIteratee = __webpack_require__(79),
	    negate = __webpack_require__(397),
	    pickBy = __webpack_require__(402);
	
	/**
	 * The opposite of `_.pickBy`; this method creates an object composed of
	 * the own and inherited enumerable string keyed properties of `object` that
	 * `predicate` doesn't return truthy for. The predicate is invoked with two
	 * arguments: (value, key).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {Function} [predicate=_.identity] The function invoked per property.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.omitBy(object, _.isNumber);
	 * // => { 'b': '2' }
	 */
	function omitBy(object, predicate) {
	  return pickBy(object, negate(baseIteratee(predicate)));
	}
	
	module.exports = omitBy;


/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(11),
	    toString = __webpack_require__(86);
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect hexadecimal string values. */
	var reHasHexPrefix = /^0x/i;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeParseInt = root.parseInt;
	
	/**
	 * Converts `string` to an integer of the specified radix. If `radix` is
	 * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
	 * hexadecimal, in which case a `radix` of `16` is used.
	 *
	 * **Note:** This method aligns with the
	 * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category String
	 * @param {string} string The string to convert.
	 * @param {number} [radix=10] The radix to interpret `value` by.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.parseInt('08');
	 * // => 8
	 *
	 * _.map(['6', '08', '10'], _.parseInt);
	 * // => [6, 8, 10]
	 */
	function parseInt(string, radix, guard) {
	  // Chrome fails to trim leading <BOM> whitespace characters.
	  // See https://bugs.chromium.org/p/v8/issues/detail?id=3109 for more details.
	  if (guard || radix == null) {
	    radix = 0;
	  } else if (radix) {
	    radix = +radix;
	  }
	  string = toString(string).replace(reTrim, '');
	  return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
	}
	
	module.exports = parseInt;


/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(51),
	    baseFlatten = __webpack_require__(77),
	    basePick = __webpack_require__(306),
	    baseRest = __webpack_require__(38),
	    toKey = __webpack_require__(40);
	
	/**
	 * Creates an object composed of the picked `object` properties.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {...(string|string[])} [props] The property identifiers to pick.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.pick(object, ['a', 'c']);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var pick = baseRest(function(object, props) {
	  return object == null ? {} : basePick(object, arrayMap(baseFlatten(props, 1), toKey));
	});
	
	module.exports = pick;


/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	var baseIteratee = __webpack_require__(79),
	    basePickBy = __webpack_require__(159),
	    getAllKeysIn = __webpack_require__(333);
	
	/**
	 * Creates an object composed of the `object` properties `predicate` returns
	 * truthy for. The predicate is invoked with two arguments: (value, key).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {Function} [predicate=_.identity] The function invoked per property.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.pickBy(object, _.isNumber);
	 * // => { 'a': 1, 'c': 3 }
	 */
	function pickBy(object, predicate) {
	  return object == null ? {} : basePickBy(object, getAllKeysIn(object), baseIteratee(predicate));
	}
	
	module.exports = pickBy;


/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(114),
	    basePropertyDeep = __webpack_require__(307),
	    isKey = __webpack_require__(55),
	    toKey = __webpack_require__(40);
	
	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	var baseSet = __webpack_require__(308);
	
	/**
	 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	 * it's created. Arrays are created for missing index properties while objects
	 * are created for all other missing properties. Use `_.setWith` to customize
	 * `path` creation.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.set(object, 'a[0].b.c', 4);
	 * console.log(object.a[0].b.c);
	 * // => 4
	 *
	 * _.set(object, ['x', '0', 'y', 'z'], 5);
	 * console.log(object.x[0].y.z);
	 * // => 5
	 */
	function set(object, path, value) {
	  return object == null ? object : baseSet(object, path, value);
	}
	
	module.exports = set;


/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	var getTag = __webpack_require__(53),
	    isArrayLike = __webpack_require__(21),
	    isObjectLike = __webpack_require__(18),
	    isString = __webpack_require__(57),
	    keys = __webpack_require__(9),
	    stringSize = __webpack_require__(371);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    setTag = '[object Set]';
	
	/**
	 * Gets the size of `collection` by returning its length for array-like
	 * values or the number of own enumerable string keyed properties for objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to inspect.
	 * @returns {number} Returns the collection size.
	 * @example
	 *
	 * _.size([1, 2, 3]);
	 * // => 3
	 *
	 * _.size({ 'a': 1, 'b': 2 });
	 * // => 2
	 *
	 * _.size('pebbles');
	 * // => 7
	 */
	function size(collection) {
	  if (collection == null) {
	    return 0;
	  }
	  if (isArrayLike(collection)) {
	    var result = collection.length;
	    return (result && isString(collection)) ? stringSize(collection) : result;
	  }
	  if (isObjectLike(collection)) {
	    var tag = getTag(collection);
	    if (tag == mapTag || tag == setTag) {
	      return collection.size;
	    }
	  }
	  return keys(collection).length;
	}
	
	module.exports = size;


/***/ },
/* 406 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	var createToPairs = __webpack_require__(329),
	    keys = __webpack_require__(9);
	
	/**
	 * Creates an array of own enumerable string keyed-value pairs for `object`
	 * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
	 * entries are returned.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias entries
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the key-value pairs.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.toPairs(new Foo);
	 * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
	 */
	var toPairs = createToPairs(keys);
	
	module.exports = toPairs;


/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(161),
	    castSlice = __webpack_require__(313),
	    charsEndIndex = __webpack_require__(314),
	    charsStartIndex = __webpack_require__(315),
	    stringToArray = __webpack_require__(372),
	    toString = __webpack_require__(86);
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/**
	 * Removes leading and trailing whitespace or specified characters from `string`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to trim.
	 * @param {string} [chars=whitespace] The characters to trim.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {string} Returns the trimmed string.
	 * @example
	 *
	 * _.trim('  abc  ');
	 * // => 'abc'
	 *
	 * _.trim('-_-abc-_-', '_-');
	 * // => 'abc'
	 *
	 * _.map(['  foo  ', '  bar  '], _.trim);
	 * // => ['foo', 'bar']
	 */
	function trim(string, chars, guard) {
	  string = toString(string);
	  if (string && (guard || chars === undefined)) {
	    return string.replace(reTrim, '');
	  }
	  if (!string || !(chars = baseToString(chars))) {
	    return string;
	  }
	  var strSymbols = stringToArray(string),
	      chrSymbols = stringToArray(chars),
	      start = charsStartIndex(strSymbols, chrSymbols),
	      end = charsEndIndex(strSymbols, chrSymbols) + 1;
	
	  return castSlice(strSymbols, start, end).join('');
	}
	
	module.exports = trim;


/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(77),
	    baseRest = __webpack_require__(38),
	    baseUniq = __webpack_require__(163),
	    isArrayLikeObject = __webpack_require__(125);
	
	/**
	 * Creates an array of unique values, in order, from all given arrays using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of combined values.
	 * @example
	 *
	 * _.union([2], [1, 2]);
	 * // => [2, 1]
	 */
	var union = baseRest(function(arrays) {
	  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
	});
	
	module.exports = union;


/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	var baseUniq = __webpack_require__(163);
	
	/**
	 * Creates a duplicate-free version of an array, using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons, in which only the first occurrence of each
	 * element is kept.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @returns {Array} Returns the new duplicate free array.
	 * @example
	 *
	 * _.uniq([2, 1, 2]);
	 * // => [2, 1]
	 */
	function uniq(array) {
	  return (array && array.length)
	    ? baseUniq(array)
	    : [];
	}
	
	module.exports = uniq;


/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(278),
	    arrayMap = __webpack_require__(51),
	    baseProperty = __webpack_require__(114),
	    baseTimes = __webpack_require__(160),
	    isArrayLikeObject = __webpack_require__(125);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * This method is like `_.zip` except that it accepts an array of grouped
	 * elements and creates an array regrouping the elements to their pre-zip
	 * configuration.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.2.0
	 * @category Array
	 * @param {Array} array The array of grouped elements to process.
	 * @returns {Array} Returns the new array of regrouped elements.
	 * @example
	 *
	 * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
	 * // => [['a', 1, true], ['b', 2, false]]
	 *
	 * _.unzip(zipped);
	 * // => [['a', 'b'], [1, 2], [true, false]]
	 */
	function unzip(array) {
	  if (!(array && array.length)) {
	    return [];
	  }
	  var length = 0;
	  array = arrayFilter(array, function(group) {
	    if (isArrayLikeObject(group)) {
	      length = nativeMax(group.length, length);
	      return true;
	    }
	  });
	  return baseTimes(length, function(index) {
	    return arrayMap(array, baseProperty(index));
	  });
	}
	
	module.exports = unzip;


/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(38),
	    unzip = __webpack_require__(411);
	
	/**
	 * Creates an array of grouped elements, the first of which contains the
	 * first elements of the given arrays, the second of which contains the
	 * second elements of the given arrays, and so on.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to process.
	 * @returns {Array} Returns the new array of grouped elements.
	 * @example
	 *
	 * _.zip(['a', 'b'], [1, 2], [true, false]);
	 * // => [['a', 1, true], ['b', 2, false]]
	 */
	var zip = baseRest(unzip);
	
	module.exports = zip;


/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(13);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var InnerSubscriber = (function (_super) {
	    __extends(InnerSubscriber, _super);
	    function InnerSubscriber(parent, outerValue, outerIndex) {
	        _super.call(this);
	        this.parent = parent;
	        this.outerValue = outerValue;
	        this.outerIndex = outerIndex;
	        this.index = 0;
	    }
	    InnerSubscriber.prototype._next = function (value) {
	        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
	    };
	    InnerSubscriber.prototype._error = function (error) {
	        this.parent.notifyError(error, this);
	        this.unsubscribe();
	    };
	    InnerSubscriber.prototype._complete = function () {
	        this.parent.notifyComplete(this);
	        this.unsubscribe();
	    };
	    return InnerSubscriber;
	}(Subscriber_1.Subscriber));
	exports.InnerSubscriber = InnerSubscriber;
	//# sourceMappingURL=InnerSubscriber.js.map

/***/ },
/* 414 */
/***/ function(module, exports) {

	"use strict";
	exports.empty = {
	    isUnsubscribed: true,
	    next: function (value) { },
	    error: function (err) { throw err; },
	    complete: function () { }
	};
	//# sourceMappingURL=Observer.js.map

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(127);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SubjectSubscription = (function (_super) {
	    __extends(SubjectSubscription, _super);
	    function SubjectSubscription(subject, subscriber) {
	        _super.call(this);
	        this.subject = subject;
	        this.subscriber = subscriber;
	        this.isUnsubscribed = false;
	    }
	    SubjectSubscription.prototype.unsubscribe = function () {
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isUnsubscribed = true;
	        var subject = this.subject;
	        var observers = subject.observers;
	        this.subject = null;
	        if (!observers || observers.length === 0 || subject.isStopped || subject.isUnsubscribed) {
	            return;
	        }
	        var subscriberIndex = observers.indexOf(this.subscriber);
	        if (subscriberIndex !== -1) {
	            observers.splice(subscriberIndex, 1);
	        }
	    };
	    return SubjectSubscription;
	}(Subscription_1.Subscription));
	exports.SubjectSubscription = SubjectSubscription;
	//# sourceMappingURL=SubjectSubscription.js.map

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(22);
	var subscribeToResult_1 = __webpack_require__(43);
	var OuterSubscriber_1 = __webpack_require__(41);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var DeferObservable = (function (_super) {
	    __extends(DeferObservable, _super);
	    function DeferObservable(observableFactory) {
	        _super.call(this);
	        this.observableFactory = observableFactory;
	    }
	    /**
	     * Creates an Observable that, on subscribe, calls an Observable factory to
	     * make an Observable for each new Observer.
	     *
	     * <span class="informal">Creates the Observable lazily, that is, only when it
	     * is subscribed.
	     * </span>
	     *
	     * <img src="./img/defer.png" width="100%">
	     *
	     * `defer` allows you to create the Observable only when the Observer
	     * subscribes, and create a fresh Observable for each Observer. It waits until
	     * an Observer subscribes to it, and then it generates an Observable,
	     * typically with an Observable factory function. It does this afresh for each
	     * subscriber, so although each subscriber may think it is subscribing to the
	     * same Observable, in fact each subscriber gets its own individual
	     * Observable.
	     *
	     * @example <caption>Subscribe to either an Observable of clicks or an Observable of interval, at random</caption>
	     * var clicksOrInterval = Rx.Observable.defer(function () {
	     *   if (Math.random() > 0.5) {
	     *     return Rx.Observable.fromEvent(document, 'click');
	     *   } else {
	     *     return Rx.Observable.interval(1000);
	     *   }
	     * });
	     * clicksOrInterval.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     *
	     * @param {function(): Observable|Promise} observableFactory The Observable
	     * factory function to invoke for each Observer that subscribes to the output
	     * Observable. May also return a Promise, which will be converted on the fly
	     * to an Observable.
	     * @return {Observable} An Observable whose Observers' subscriptions trigger
	     * an invocation of the given Observable factory function.
	     * @static true
	     * @name defer
	     * @owner Observable
	     */
	    DeferObservable.create = function (observableFactory) {
	        return new DeferObservable(observableFactory);
	    };
	    DeferObservable.prototype._subscribe = function (subscriber) {
	        return new DeferSubscriber(subscriber, this.observableFactory);
	    };
	    return DeferObservable;
	}(Observable_1.Observable));
	exports.DeferObservable = DeferObservable;
	var DeferSubscriber = (function (_super) {
	    __extends(DeferSubscriber, _super);
	    function DeferSubscriber(destination, factory) {
	        _super.call(this, destination);
	        this.factory = factory;
	        this.tryDefer();
	    }
	    DeferSubscriber.prototype.tryDefer = function () {
	        try {
	            this._callFactory();
	        }
	        catch (err) {
	            this._error(err);
	        }
	    };
	    DeferSubscriber.prototype._callFactory = function () {
	        var result = this.factory();
	        if (result) {
	            this.add(subscribeToResult_1.subscribeToResult(this, result));
	        }
	    };
	    return DeferSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=DeferObservable.js.map

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(22);
	var noop_1 = __webpack_require__(432);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var NeverObservable = (function (_super) {
	    __extends(NeverObservable, _super);
	    function NeverObservable() {
	        _super.call(this);
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer.
	     *
	     * <span class="informal">An Observable that never emits anything.</span>
	     *
	     * <img src="./img/never.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that emits
	     * neither values nor errors nor the completion notification. It can be used
	     * for testing purposes or for composing with other Observables. Please not
	     * that by never emitting a complete notification, this Observable keeps the
	     * subscription from being disposed automatically. Subscriptions need to be
	     * manually disposed.
	     *
	     * @example <caption>Emit the number 7, then never emit anything else (not even complete).</caption>
	     * function info() {
	     *   console.log('Will not be called');
	     * }
	     * var result = Rx.Observable.never().startWith(7);
	     * result.subscribe(x => console.log(x), info, info);
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link of}
	     * @see {@link throw}
	     *
	     * @return {Observable} A "never" Observable: never emits anything.
	     * @static true
	     * @name never
	     * @owner Observable
	     */
	    NeverObservable.create = function () {
	        return new NeverObservable();
	    };
	    NeverObservable.prototype._subscribe = function (subscriber) {
	        noop_1.noop();
	    };
	    return NeverObservable;
	}(Observable_1.Observable));
	exports.NeverObservable = NeverObservable;
	//# sourceMappingURL=NeverObservable.js.map

/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var DeferObservable_1 = __webpack_require__(416);
	exports.defer = DeferObservable_1.DeferObservable.create;
	//# sourceMappingURL=defer.js.map

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var merge_1 = __webpack_require__(185);
	exports.merge = merge_1.mergeStatic;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var NeverObservable_1 = __webpack_require__(417);
	exports.never = NeverObservable_1.NeverObservable.create;
	//# sourceMappingURL=never.js.map

/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ArrayObservable_1 = __webpack_require__(60);
	var isArray_1 = __webpack_require__(88);
	var OuterSubscriber_1 = __webpack_require__(41);
	var subscribeToResult_1 = __webpack_require__(43);
	var none = {};
	/**
	 * Combines multiple Observables to create an Observable whose values are
	 * calculated from the latest values of each of its input Observables.
	 *
	 * <span class="informal">Whenever any input Observable emits a value, it
	 * computes a formula using the latest values from all the inputs, then emits
	 * the output of that formula.</span>
	 *
	 * <img src="./img/combineLatest.png" width="100%">
	 *
	 * `combineLatest` combines the values from this Observable with values from
	 * Observables passed as arguments. This is done by subscribing to each
	 * Observable, in order, and collecting an array of each of the most recent
	 * values any time any of the input Observables emits, then either taking that
	 * array and passing it as arguments to an optional `project` function and
	 * emitting the return value of that, or just emitting the array of recent
	 * values directly if there is no `project` function.
	 *
	 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
	 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
	 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
	 * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
	 * bmi.subscribe(x => console.log('BMI is ' + x));
	 *
	 * @see {@link combineAll}
	 * @see {@link merge}
	 * @see {@link withLatestFrom}
	 *
	 * @param {Observable} other An input Observable to combine with the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {function} [project] An optional function to project the values from
	 * the combined latest values into a new value on the output Observable.
	 * @return {Observable} An Observable of projected values from the most recent
	 * values from each input Observable, or an array of the most recent values from
	 * each input Observable.
	 * @method combineLatest
	 * @owner Observable
	 */
	function combineLatest() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var project = null;
	    if (typeof observables[observables.length - 1] === 'function') {
	        project = observables.pop();
	    }
	    // if the first and only other argument besides the resultSelector is an array
	    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
	    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
	        observables = observables[0];
	    }
	    observables.unshift(this);
	    return new ArrayObservable_1.ArrayObservable(observables).lift(new CombineLatestOperator(project));
	}
	exports.combineLatest = combineLatest;
	/* tslint:enable:max-line-length */
	var CombineLatestOperator = (function () {
	    function CombineLatestOperator(project) {
	        this.project = project;
	    }
	    CombineLatestOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new CombineLatestSubscriber(subscriber, this.project));
	    };
	    return CombineLatestOperator;
	}());
	exports.CombineLatestOperator = CombineLatestOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var CombineLatestSubscriber = (function (_super) {
	    __extends(CombineLatestSubscriber, _super);
	    function CombineLatestSubscriber(destination, project) {
	        _super.call(this, destination);
	        this.project = project;
	        this.active = 0;
	        this.values = [];
	        this.observables = [];
	    }
	    CombineLatestSubscriber.prototype._next = function (observable) {
	        this.values.push(none);
	        this.observables.push(observable);
	    };
	    CombineLatestSubscriber.prototype._complete = function () {
	        var observables = this.observables;
	        var len = observables.length;
	        if (len === 0) {
	            this.destination.complete();
	        }
	        else {
	            this.active = len;
	            this.toRespond = len;
	            for (var i = 0; i < len; i++) {
	                var observable = observables[i];
	                this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
	            }
	        }
	    };
	    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
	        if ((this.active -= 1) === 0) {
	            this.destination.complete();
	        }
	    };
	    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var values = this.values;
	        var oldVal = values[outerIndex];
	        var toRespond = !this.toRespond
	            ? 0
	            : oldVal === none ? --this.toRespond : this.toRespond;
	        values[outerIndex] = innerValue;
	        if (toRespond === 0) {
	            if (this.project) {
	                this._tryProject(values);
	            }
	            else {
	                this.destination.next(values);
	            }
	        }
	    };
	    CombineLatestSubscriber.prototype._tryProject = function (values) {
	        var result;
	        try {
	            result = this.project.apply(this, values);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return CombineLatestSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.CombineLatestSubscriber = CombineLatestSubscriber;
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(13);
	var tryCatch_1 = __webpack_require__(190);
	var errorObject_1 = __webpack_require__(131);
	/**
	 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
	 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
	 * If a comparator function is not provided, an equality check is used by default.
	 * @param {function} [compare] optional comparison function called to test if an item is distinct from the previous item in the source.
	 * @return {Observable} an Observable that emits items from the source Observable with distinct values.
	 * @method distinctUntilChanged
	 * @owner Observable
	 */
	function distinctUntilChanged(compare, keySelector) {
	    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
	}
	exports.distinctUntilChanged = distinctUntilChanged;
	var DistinctUntilChangedOperator = (function () {
	    function DistinctUntilChangedOperator(compare, keySelector) {
	        this.compare = compare;
	        this.keySelector = keySelector;
	    }
	    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
	    };
	    return DistinctUntilChangedOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DistinctUntilChangedSubscriber = (function (_super) {
	    __extends(DistinctUntilChangedSubscriber, _super);
	    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
	        _super.call(this, destination);
	        this.keySelector = keySelector;
	        this.hasKey = false;
	        if (typeof compare === 'function') {
	            this.compare = compare;
	        }
	    }
	    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
	        return x === y;
	    };
	    DistinctUntilChangedSubscriber.prototype._next = function (value) {
	        var keySelector = this.keySelector;
	        var key = value;
	        if (keySelector) {
	            key = tryCatch_1.tryCatch(this.keySelector)(value);
	            if (key === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        }
	        var result = false;
	        if (this.hasKey) {
	            result = tryCatch_1.tryCatch(this.compare)(this.key, key);
	            if (result === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        }
	        else {
	            this.hasKey = true;
	        }
	        if (Boolean(result) === false) {
	            this.key = key;
	            this.destination.next(value);
	        }
	    };
	    return DistinctUntilChangedSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(13);
	/**
	 * Perform a side effect for every emission on the source Observable, but return
	 * an Observable that is identical to the source.
	 *
	 * <span class="informal">Intercepts each emission on the source and runs a
	 * function, but returns an output which is identical to the source.</span>
	 *
	 * <img src="./img/do.png" width="100%">
	 *
	 * Returns a mirrored Observable of the source Observable, but modified so that
	 * the provided Observer is called to perform a side effect for every value,
	 * error, and completion emitted by the source. Any errors that are thrown in
	 * the aforementioned Observer or handlers are safely sent down the error path
	 * of the output Observable.
	 *
	 * This operator is useful for debugging your Observables for the correct values
	 * or performing other side effects.
	 *
	 * Note: this is different to a `subscribe` on the Observable. If the Observable
	 * returned by `do` is not subscribed, the side effects specified by the
	 * Observer will never happen. `do` therefore simply spies on existing
	 * execution, it does not trigger an execution to happen like `subscribe` does.
	 *
	 * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks
	 *   .do(ev => console.log(ev))
	 *   .map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 * @see {@link subscribe}
	 *
	 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
	 * callback for `next`.
	 * @param {function} [error] Callback for errors in the source.
	 * @param {function} [complete] Callback for the completion of the source.
	 * @return {Observable} An Observable identical to the source, but runs the
	 * specified Observer or callback(s) for each item.
	 * @method do
	 * @name do
	 * @owner Observable
	 */
	function _do(nextOrObserver, error, complete) {
	    return this.lift(new DoOperator(nextOrObserver, error, complete));
	}
	exports._do = _do;
	var DoOperator = (function () {
	    function DoOperator(nextOrObserver, error, complete) {
	        this.nextOrObserver = nextOrObserver;
	        this.error = error;
	        this.complete = complete;
	    }
	    DoOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
	    };
	    return DoOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DoSubscriber = (function (_super) {
	    __extends(DoSubscriber, _super);
	    function DoSubscriber(destination, nextOrObserver, error, complete) {
	        _super.call(this, destination);
	        var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	        safeSubscriber.syncErrorThrowable = true;
	        this.add(safeSubscriber);
	        this.safeSubscriber = safeSubscriber;
	    }
	    DoSubscriber.prototype._next = function (value) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.next(value);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.next(value);
	        }
	    };
	    DoSubscriber.prototype._error = function (err) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.error(err);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.error(err);
	        }
	    };
	    DoSubscriber.prototype._complete = function () {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.complete();
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.complete();
	        }
	    };
	    return DoSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=do.js.map

/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(13);
	/**
	 * Returns an Observable that skips `n` items emitted by an Observable.
	 *
	 * <img src="./img/skip.png" width="100%">
	 *
	 * @param {Number} the `n` of times, items emitted by source Observable should be skipped.
	 * @return {Observable} an Observable that skips values emitted by the source Observable.
	 *
	 * @method skip
	 * @owner Observable
	 */
	function skip(total) {
	    return this.lift(new SkipOperator(total));
	}
	exports.skip = skip;
	var SkipOperator = (function () {
	    function SkipOperator(total) {
	        this.total = total;
	    }
	    SkipOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SkipSubscriber(subscriber, this.total));
	    };
	    return SkipOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SkipSubscriber = (function (_super) {
	    __extends(SkipSubscriber, _super);
	    function SkipSubscriber(destination, total) {
	        _super.call(this, destination);
	        this.total = total;
	        this.count = 0;
	    }
	    SkipSubscriber.prototype._next = function (x) {
	        if (++this.count > this.total) {
	            this.destination.next(x);
	        }
	    };
	    return SkipSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=skip.js.map

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(13);
	var ArgumentOutOfRangeError_1 = __webpack_require__(428);
	var EmptyObservable_1 = __webpack_require__(128);
	/**
	 * Emits only the first `count` values emitted by the source Observable.
	 *
	 * <span class="informal">Takes the first `count` values from the source, then
	 * completes.</span>
	 *
	 * <img src="./img/take.png" width="100%">
	 *
	 * `take` returns an Observable that emits only the first `count` values emitted
	 * by the source Observable. If the source emits fewer than `count` values then
	 * all of its values are emitted. After that, it completes, regardless if the
	 * source completes.
	 *
	 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
	 * var interval = Rx.Observable.interval(1000);
	 * var five = interval.take(5);
	 * five.subscribe(x => console.log(x));
	 *
	 * @see {@link takeLast}
	 * @see {@link takeUntil}
	 * @see {@link takeWhile}
	 * @see {@link skip}
	 *
	 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
	 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
	 *
	 * @param {number} count The maximum number of `next` values to emit.
	 * @return {Observable<T>} An Observable that emits only the first `count`
	 * values emitted by the source Observable, or all of the values from the source
	 * if the source emits fewer than `count` values.
	 * @method take
	 * @owner Observable
	 */
	function take(count) {
	    if (count === 0) {
	        return new EmptyObservable_1.EmptyObservable();
	    }
	    else {
	        return this.lift(new TakeOperator(count));
	    }
	}
	exports.take = take;
	var TakeOperator = (function () {
	    function TakeOperator(total) {
	        this.total = total;
	        if (this.total < 0) {
	            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
	        }
	    }
	    TakeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TakeSubscriber(subscriber, this.total));
	    };
	    return TakeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TakeSubscriber = (function (_super) {
	    __extends(TakeSubscriber, _super);
	    function TakeSubscriber(destination, total) {
	        _super.call(this, destination);
	        this.total = total;
	        this.count = 0;
	    }
	    TakeSubscriber.prototype._next = function (value) {
	        var total = this.total;
	        if (++this.count <= total) {
	            this.destination.next(value);
	            if (this.count === total) {
	                this.destination.complete();
	                this.unsubscribe();
	            }
	        }
	    };
	    return TakeSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=take.js.map

/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(41);
	var subscribeToResult_1 = __webpack_require__(43);
	/**
	 * Combines the source Observable with other Observables to create an Observable
	 * whose values are calculated from the latest values of each, only when the
	 * source emits.
	 *
	 * <span class="informal">Whenever the source Observable emits a value, it
	 * computes a formula using that value plus the latest values from other input
	 * Observables, then emits the output of that formula.</span>
	 *
	 * <img src="./img/withLatestFrom.png" width="100%">
	 *
	 * `withLatestFrom` combines each value from the source Observable (the
	 * instance) with the latest values from the other input Observables only when
	 * the source emits a value, optionally using a `project` function to determine
	 * the value to be emitted on the output Observable. All input Observables must
	 * emit at least one value before the output Observable will emit a value.
	 *
	 * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var result = clicks.withLatestFrom(timer);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link combineLatest}
	 *
	 * @param {Observable} other An input Observable to combine with the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {Function} [project] Projection function for combining values
	 * together. Receives all values in order of the Observables passed, where the
	 * first parameter is a value from the source Observable. (e.g.
	 * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
	 * passed, arrays will be emitted on the output Observable.
	 * @return {Observable} An Observable of projected values from the most recent
	 * values from each input Observable, or an array of the most recent values from
	 * each input Observable.
	 * @method withLatestFrom
	 * @owner Observable
	 */
	function withLatestFrom() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i - 0] = arguments[_i];
	    }
	    var project;
	    if (typeof args[args.length - 1] === 'function') {
	        project = args.pop();
	    }
	    var observables = args;
	    return this.lift(new WithLatestFromOperator(observables, project));
	}
	exports.withLatestFrom = withLatestFrom;
	/* tslint:enable:max-line-length */
	var WithLatestFromOperator = (function () {
	    function WithLatestFromOperator(observables, project) {
	        this.observables = observables;
	        this.project = project;
	    }
	    WithLatestFromOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
	    };
	    return WithLatestFromOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var WithLatestFromSubscriber = (function (_super) {
	    __extends(WithLatestFromSubscriber, _super);
	    function WithLatestFromSubscriber(destination, observables, project) {
	        _super.call(this, destination);
	        this.observables = observables;
	        this.project = project;
	        this.toRespond = [];
	        var len = observables.length;
	        this.values = new Array(len);
	        for (var i = 0; i < len; i++) {
	            this.toRespond.push(i);
	        }
	        for (var i = 0; i < len; i++) {
	            var observable = observables[i];
	            this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
	        }
	    }
	    WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.values[outerIndex] = innerValue;
	        var toRespond = this.toRespond;
	        if (toRespond.length > 0) {
	            var found = toRespond.indexOf(outerIndex);
	            if (found !== -1) {
	                toRespond.splice(found, 1);
	            }
	        }
	    };
	    WithLatestFromSubscriber.prototype.notifyComplete = function () {
	        // noop
	    };
	    WithLatestFromSubscriber.prototype._next = function (value) {
	        if (this.toRespond.length === 0) {
	            var args = [value].concat(this.values);
	            if (this.project) {
	                this._tryProject(args);
	            }
	            else {
	                this.destination.next(args);
	            }
	        }
	    };
	    WithLatestFromSubscriber.prototype._tryProject = function (args) {
	        var result;
	        try {
	            result = this.project.apply(this, args);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return WithLatestFromSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(89);
	var Symbol = root_1.root.Symbol;
	if (typeof Symbol === 'function') {
	    if (Symbol.iterator) {
	        exports.$$iterator = Symbol.iterator;
	    }
	    else if (typeof Symbol.for === 'function') {
	        exports.$$iterator = Symbol.for('iterator');
	    }
	}
	else {
	    if (root_1.root.Set && typeof new root_1.root.Set()['@@iterator'] === 'function') {
	        // Bug for mozilla version
	        exports.$$iterator = '@@iterator';
	    }
	    else if (root_1.root.Map) {
	        // es6-shim specific logic
	        var keys = Object.getOwnPropertyNames(root_1.root.Map.prototype);
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (key !== 'entries' && key !== 'size' && root_1.root.Map.prototype[key] === root_1.root.Map.prototype['entries']) {
	                exports.$$iterator = key;
	                break;
	            }
	        }
	    }
	    else {
	        exports.$$iterator = '@@iterator';
	    }
	}
	//# sourceMappingURL=iterator.js.map

/***/ },
/* 428 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when an element was queried at a certain index of an
	 * Observable, but no such index or position exists in that sequence.
	 *
	 * @see {@link elementAt}
	 * @see {@link take}
	 * @see {@link takeLast}
	 *
	 * @class ArgumentOutOfRangeError
	 */
	var ArgumentOutOfRangeError = (function (_super) {
	    __extends(ArgumentOutOfRangeError, _super);
	    function ArgumentOutOfRangeError() {
	        var err = _super.call(this, 'argument out of range');
	        this.name = err.name = 'ArgumentOutOfRangeError';
	        this.stack = err.stack;
	        this.message = err.message;
	    }
	    return ArgumentOutOfRangeError;
	}(Error));
	exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
	//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ },
/* 429 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when one or more errors have occurred during the
	 * `unsubscribe` of a {@link Subscription}.
	 */
	var UnsubscriptionError = (function (_super) {
	    __extends(UnsubscriptionError, _super);
	    function UnsubscriptionError(errors) {
	        _super.call(this);
	        this.errors = errors;
	        var err = Error.call(this, errors ?
	            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
	        this.name = err.name = 'UnsubscriptionError';
	        this.stack = err.stack;
	        this.message = err.message;
	    }
	    return UnsubscriptionError;
	}(Error));
	exports.UnsubscriptionError = UnsubscriptionError;
	//# sourceMappingURL=UnsubscriptionError.js.map

/***/ },
/* 430 */
/***/ function(module, exports) {

	"use strict";
	function isObject(x) {
	    return x != null && typeof x === 'object';
	}
	exports.isObject = isObject;
	//# sourceMappingURL=isObject.js.map

/***/ },
/* 431 */
/***/ function(module, exports) {

	"use strict";
	function isPromise(value) {
	    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
	}
	exports.isPromise = isPromise;
	//# sourceMappingURL=isPromise.js.map

/***/ },
/* 432 */
/***/ function(module, exports) {

	"use strict";
	/* tslint:disable:no-empty */
	function noop() { }
	exports.noop = noop;
	//# sourceMappingURL=noop.js.map

/***/ },
/* 433 */
/***/ function(module, exports) {

	"use strict";
	function throwError(e) { throw e; }
	exports.throwError = throwError;
	//# sourceMappingURL=throwError.js.map

/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subscriber_1 = __webpack_require__(13);
	var rxSubscriber_1 = __webpack_require__(130);
	function toSubscriber(nextOrObserver, error, complete) {
	    if (nextOrObserver) {
	        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
	            return nextOrObserver;
	        }
	        if (nextOrObserver[rxSubscriber_1.$$rxSubscriber]) {
	            return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
	        }
	    }
	    if (!nextOrObserver && !error && !complete) {
	        return new Subscriber_1.Subscriber();
	    }
	    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	}
	exports.toSubscriber = toSubscriber;
	//# sourceMappingURL=toSubscriber.js.map

/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ponyfill = __webpack_require__(436);
	
	var _ponyfill2 = _interopRequireDefault(_ponyfill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var root = undefined; /* global window */
	
	if (typeof global !== 'undefined') {
		root = global;
	} else if (typeof window !== 'undefined') {
		root = window;
	}
	
	var result = (0, _ponyfill2.default)(root);
	exports.default = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 436 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;
	
		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(48);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(24)
	  , toIndex  = __webpack_require__(103)
	  , toLength = __webpack_require__(20);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(135);
	
	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(33)
	  , toObject  = __webpack_require__(24)
	  , IObject   = __webpack_require__(141)
	  , toLength  = __webpack_require__(20);
	
	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(33)
	  , isObject   = __webpack_require__(6)
	  , invoke     = __webpack_require__(196)
	  , arraySlice = [].slice
	  , factories  = {};
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(15).f
	  , create      = __webpack_require__(98)
	  , hide        = __webpack_require__(30)
	  , redefineAll = __webpack_require__(101)
	  , ctx         = __webpack_require__(68)
	  , anInstance  = __webpack_require__(90)
	  , defined     = __webpack_require__(49)
	  , forOf       = __webpack_require__(135)
	  , $iterDefine = __webpack_require__(236)
	  , step        = __webpack_require__(447)
	  , setSpecies  = __webpack_require__(102)
	  , DESCRIPTORS = __webpack_require__(14)
	  , fastKey     = __webpack_require__(91).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(134)
	  , from    = __webpack_require__(439);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(101)
	  , getWeak           = __webpack_require__(91).getWeak
	  , anObject          = __webpack_require__(2)
	  , isObject          = __webpack_require__(6)
	  , anInstance        = __webpack_require__(90)
	  , forOf             = __webpack_require__(135)
	  , createArrayMethod = __webpack_require__(63)
	  , $has              = __webpack_require__(28)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(14) && !__webpack_require__(5)(function(){
	  return Object.defineProperty(__webpack_require__(227)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(2);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 447 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 448 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(100)
	  , gOPS     = __webpack_require__(200)
	  , pIE      = __webpack_require__(142)
	  , toObject = __webpack_require__(24)
	  , IObject  = __webpack_require__(141)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(5)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(15)
	  , anObject = __webpack_require__(2)
	  , getKeys  = __webpack_require__(100);
	
	module.exports = __webpack_require__(14) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(36)
	  , gOPN      = __webpack_require__(99).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(28)
	  , toIObject    = __webpack_require__(36)
	  , arrayIndexOf = __webpack_require__(192)(false)
	  , IE_PROTO     = __webpack_require__(240)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(100)
	  , toIObject = __webpack_require__(36)
	  , isEnum    = __webpack_require__(142).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(99)
	  , gOPS     = __webpack_require__(200)
	  , anObject = __webpack_require__(2)
	  , Reflect  = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(4).parseFloat
	  , $trim       = __webpack_require__(137).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(245) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(4).parseInt
	  , $trim     = __webpack_require__(137).trim
	  , ws        = __webpack_require__(245)
	  , hex       = /^[\-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 457 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(20)
	  , repeat   = __webpack_require__(244)
	  , defined  = __webpack_require__(49);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(7);

/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(442);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(193)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(14) && /./g.flags != 'g')__webpack_require__(15).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(195)
	});

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(442);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(193)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(63)(0)
	  , redefine     = __webpack_require__(34)
	  , meta         = __webpack_require__(91)
	  , assign       = __webpack_require__(449)
	  , weak         = __webpack_require__(444)
	  , isObject     = __webpack_require__(6)
	  , has          = __webpack_require__(28)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;
	
	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(193)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(646);
	
	__webpack_require__(648);
	
	__webpack_require__(465);
	
	/* eslint max-len: 0 */
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
	// Should be removed in the next major release:
	
	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}
	
	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);
	
	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(475);
	module.exports = __webpack_require__(64).RegExp.escape;

/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6)
	  , isArray  = __webpack_require__(233)
	  , SPECIES  = __webpack_require__(7)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(466);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(2)
	  , toPrimitive = __webpack_require__(66)
	  , NUMBER      = 'number';
	
	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(100)
	  , gOPS    = __webpack_require__(200)
	  , pIE     = __webpack_require__(142);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(100)
	  , toIObject = __webpack_require__(36);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(472)
	  , invoke    = __webpack_require__(196)
	  , aFunction = __webpack_require__(33);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 472 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);

/***/ },
/* 473 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(134)
	  , ITERATOR  = __webpack_require__(7)('iterator')
	  , Iterators = __webpack_require__(96);
	module.exports = __webpack_require__(64).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(1)
	  , $re     = __webpack_require__(473)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(1);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(438)});
	
	__webpack_require__(133)('copyWithin');

/***/ },
/* 477 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $every  = __webpack_require__(63)(4);
	
	$export($export.P + $export.F * !__webpack_require__(50)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(1);
	
	$export($export.P, 'Array', {fill: __webpack_require__(225)});
	
	__webpack_require__(133)('fill');

/***/ },
/* 479 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $filter = __webpack_require__(63)(2);
	
	$export($export.P + $export.F * !__webpack_require__(50)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(1)
	  , $find   = __webpack_require__(63)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(133)(KEY);

/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(1)
	  , $find   = __webpack_require__(63)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(133)(KEY);

/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(1)
	  , $forEach = __webpack_require__(63)(0)
	  , STRICT   = __webpack_require__(50)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 483 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(68)
	  , $export        = __webpack_require__(1)
	  , toObject       = __webpack_require__(24)
	  , call           = __webpack_require__(446)
	  , isArrayIter    = __webpack_require__(232)
	  , toLength       = __webpack_require__(20)
	  , createProperty = __webpack_require__(226)
	  , getIterFn      = __webpack_require__(249);
	
	$export($export.S + $export.F * !__webpack_require__(198)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 484 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(1)
	  , $indexOf      = __webpack_require__(192)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(50)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Array', {isArray: __webpack_require__(233)});

/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(1)
	  , toIObject = __webpack_require__(36)
	  , arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(141) != Object || !__webpack_require__(50)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(1)
	  , toIObject     = __webpack_require__(36)
	  , toInteger     = __webpack_require__(93)
	  , toLength      = __webpack_require__(20)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(50)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $map    = __webpack_require__(63)(1);
	
	$export($export.P + $export.F * !__webpack_require__(50)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(1)
	  , createProperty = __webpack_require__(226);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(5)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 490 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $reduce = __webpack_require__(440);
	
	$export($export.P + $export.F * !__webpack_require__(50)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 491 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $reduce = __webpack_require__(440);
	
	$export($export.P + $export.F * !__webpack_require__(50)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(1)
	  , html       = __webpack_require__(230)
	  , cof        = __webpack_require__(48)
	  , toIndex    = __webpack_require__(103)
	  , toLength   = __webpack_require__(20)
	  , arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(5)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 493 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $some   = __webpack_require__(63)(3);
	
	$export($export.P + $export.F * !__webpack_require__(50)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(1)
	  , aFunction = __webpack_require__(33)
	  , toObject  = __webpack_require__(24)
	  , fails     = __webpack_require__(5)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(50)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(102)('Array');

/***/ },
/* 496 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 497 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(1)
	  , fails   = __webpack_require__(5)
	  , getTime = Date.prototype.getTime;
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 498 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(1)
	  , toObject    = __webpack_require__(24)
	  , toPrimitive = __webpack_require__(66);
	
	$export($export.P + $export.F * __webpack_require__(5)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 499 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(7)('toPrimitive')
	  , proto        = Date.prototype;
	
	if(!(TO_PRIMITIVE in proto))__webpack_require__(30)(proto, TO_PRIMITIVE, __webpack_require__(468));

/***/ },
/* 500 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(34)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 501 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(1);
	
	$export($export.P, 'Function', {bind: __webpack_require__(441)});

/***/ },
/* 502 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(6)
	  , getPrototypeOf = __webpack_require__(45)
	  , HAS_INSTANCE   = __webpack_require__(7)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(15).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 503 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(15).f
	  , createDesc = __webpack_require__(92)
	  , has        = __webpack_require__(28)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(14) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 504 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(1)
	  , log1p   = __webpack_require__(448)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 505 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(1)
	  , $asinh  = Math.asinh;
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 506 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(1)
	  , $atanh  = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 507 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(1)
	  , sign    = __webpack_require__(238);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 508 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 509 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(1)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 510 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(1)
	  , $expm1  = __webpack_require__(237);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 511 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(1)
	  , sign      = __webpack_require__(238)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 512 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(1)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 513 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(1)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(5)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 514 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 515 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(448)});

/***/ },
/* 516 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 517 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {sign: __webpack_require__(238)});

/***/ },
/* 518 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(1)
	  , expm1   = __webpack_require__(237)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(5)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 519 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(1)
	  , expm1   = __webpack_require__(237)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 520 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 521 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , has               = __webpack_require__(28)
	  , cof               = __webpack_require__(48)
	  , inheritIfRequired = __webpack_require__(231)
	  , toPrimitive       = __webpack_require__(66)
	  , fails             = __webpack_require__(5)
	  , gOPN              = __webpack_require__(99).f
	  , gOPD              = __webpack_require__(44).f
	  , dP                = __webpack_require__(15).f
	  , $trim             = __webpack_require__(137).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(98)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(14) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(34)(global, NUMBER, $Number);
	}

/***/ },
/* 522 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 523 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(1)
	  , _isFinite = __webpack_require__(4).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 524 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(234)});

/***/ },
/* 525 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 526 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(1)
	  , isInteger = __webpack_require__(234)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 527 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 528 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 529 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(1)
	  , $parseFloat = __webpack_require__(455);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 530 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(1)
	  , $parseInt = __webpack_require__(456);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 531 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(1)
	  , anInstance   = __webpack_require__(90)
	  , toInteger    = __webpack_require__(93)
	  , aNumberValue = __webpack_require__(437)
	  , repeat       = __webpack_require__(244)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';
	
	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(5)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 532 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(1)
	  , $fails       = __webpack_require__(5)
	  , aNumberValue = __webpack_require__(437)
	  , $toPrecision = 1..toPrecision;
	
	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 533 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(1);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(449)});

/***/ },
/* 534 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(98)});

/***/ },
/* 535 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(14), 'Object', {defineProperties: __webpack_require__(450)});

/***/ },
/* 536 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(14), 'Object', {defineProperty: __webpack_require__(15).f});

/***/ },
/* 537 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(6)
	  , meta     = __webpack_require__(91).onFreeze;
	
	__webpack_require__(65)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 538 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(36)
	  , $getOwnPropertyDescriptor = __webpack_require__(44).f;
	
	__webpack_require__(65)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 539 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(65)('getOwnPropertyNames', function(){
	  return __webpack_require__(451).f;
	});

/***/ },
/* 540 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(24)
	  , $getPrototypeOf = __webpack_require__(45);
	
	__webpack_require__(65)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 541 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(6);
	
	__webpack_require__(65)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 542 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(6);
	
	__webpack_require__(65)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 543 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(6);
	
	__webpack_require__(65)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 544 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(1);
	$export($export.S, 'Object', {is: __webpack_require__(457)});

/***/ },
/* 545 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(24)
	  , $keys    = __webpack_require__(100);
	
	__webpack_require__(65)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 546 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(6)
	  , meta     = __webpack_require__(91).onFreeze;
	
	__webpack_require__(65)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 547 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(6)
	  , meta     = __webpack_require__(91).onFreeze;
	
	__webpack_require__(65)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 548 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(1);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(201).set});

/***/ },
/* 549 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(134)
	  , test    = {};
	test[__webpack_require__(7)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(34)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 550 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(1)
	  , $parseFloat = __webpack_require__(455);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 551 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(1)
	  , $parseInt = __webpack_require__(456);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 552 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(97)
	  , global             = __webpack_require__(4)
	  , ctx                = __webpack_require__(68)
	  , classof            = __webpack_require__(134)
	  , $export            = __webpack_require__(1)
	  , isObject           = __webpack_require__(6)
	  , anObject           = __webpack_require__(2)
	  , aFunction          = __webpack_require__(33)
	  , anInstance         = __webpack_require__(90)
	  , forOf              = __webpack_require__(135)
	  , setProto           = __webpack_require__(201).set
	  , speciesConstructor = __webpack_require__(241)
	  , task               = __webpack_require__(246).set
	  , microtask          = __webpack_require__(239)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(7)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(101)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(136)($Promise, PROMISE);
	__webpack_require__(102)(PROMISE);
	Wrapper = __webpack_require__(64)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(198)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 553 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(1)
	  , aFunction = __webpack_require__(33)
	  , anObject  = __webpack_require__(2)
	  , _apply    = Function.apply;
	
	$export($export.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(aFunction(target), thisArgument, anObject(argumentsList));
	  }
	});

/***/ },
/* 554 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export   = __webpack_require__(1)
	  , create    = __webpack_require__(98)
	  , aFunction = __webpack_require__(33)
	  , anObject  = __webpack_require__(2)
	  , isObject  = __webpack_require__(6)
	  , bind      = __webpack_require__(441);
	
	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$export($export.S + $export.F * __webpack_require__(5)(function(){
	  function F(){}
	  return !(Reflect.construct(function(){}, [], F) instanceof F);
	}), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 555 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(15)
	  , $export     = __webpack_require__(1)
	  , anObject    = __webpack_require__(2)
	  , toPrimitive = __webpack_require__(66);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(5)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 556 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(1)
	  , gOPD     = __webpack_require__(44).f
	  , anObject = __webpack_require__(2);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 557 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(1)
	  , anObject = __webpack_require__(2);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(235)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 558 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(44)
	  , $export  = __webpack_require__(1)
	  , anObject = __webpack_require__(2);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 559 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(1)
	  , getProto = __webpack_require__(45)
	  , anObject = __webpack_require__(2);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 560 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(44)
	  , getPrototypeOf = __webpack_require__(45)
	  , has            = __webpack_require__(28)
	  , $export        = __webpack_require__(1)
	  , isObject       = __webpack_require__(6)
	  , anObject       = __webpack_require__(2);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 561 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 562 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(1)
	  , anObject      = __webpack_require__(2)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 563 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(454)});

/***/ },
/* 564 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(1)
	  , anObject           = __webpack_require__(2)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 565 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(1)
	  , setProto = __webpack_require__(201);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 566 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(15)
	  , gOPD           = __webpack_require__(44)
	  , getPrototypeOf = __webpack_require__(45)
	  , has            = __webpack_require__(28)
	  , $export        = __webpack_require__(1)
	  , createDesc     = __webpack_require__(92)
	  , anObject       = __webpack_require__(2)
	  , isObject       = __webpack_require__(6);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 567 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(4)
	  , inheritIfRequired = __webpack_require__(231)
	  , dP                = __webpack_require__(15).f
	  , gOPN              = __webpack_require__(99).f
	  , isRegExp          = __webpack_require__(197)
	  , $flags            = __webpack_require__(195)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(14) && (!CORRECT_NEW || __webpack_require__(5)(function(){
	  re2[__webpack_require__(7)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(34)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(102)('RegExp');

/***/ },
/* 568 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(194)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 569 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(194)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 570 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(194)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 571 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(194)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(197)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 572 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(461);
	var anObject    = __webpack_require__(2)
	  , $flags      = __webpack_require__(195)
	  , DESCRIPTORS = __webpack_require__(14)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];
	
	var define = function(fn){
	  __webpack_require__(34)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(5)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 573 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(35)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 574 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(35)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 575 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(35)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 576 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(35)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 577 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $at     = __webpack_require__(242)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 578 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(1)
	  , toLength  = __webpack_require__(20)
	  , context   = __webpack_require__(243)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(229)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 579 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(35)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 580 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(35)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 581 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(35)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 582 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(1)
	  , toIndex        = __webpack_require__(103)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 583 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(1)
	  , context  = __webpack_require__(243)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(229)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 584 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(35)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 585 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(242)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(236)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 586 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(35)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 587 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(1)
	  , toIObject = __webpack_require__(36)
	  , toLength  = __webpack_require__(20);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 588 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(244)
	});

/***/ },
/* 589 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(35)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 590 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(1)
	  , toLength    = __webpack_require__(20)
	  , context     = __webpack_require__(243)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(229)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 591 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(35)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 592 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(35)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 593 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(35)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 594 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(137)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 595 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(4)
	  , has            = __webpack_require__(28)
	  , DESCRIPTORS    = __webpack_require__(14)
	  , $export        = __webpack_require__(1)
	  , redefine       = __webpack_require__(34)
	  , META           = __webpack_require__(91).KEY
	  , $fails         = __webpack_require__(5)
	  , shared         = __webpack_require__(202)
	  , setToStringTag = __webpack_require__(136)
	  , uid            = __webpack_require__(104)
	  , wks            = __webpack_require__(7)
	  , wksExt         = __webpack_require__(459)
	  , wksDefine      = __webpack_require__(248)
	  , keyOf          = __webpack_require__(470)
	  , enumKeys       = __webpack_require__(469)
	  , isArray        = __webpack_require__(233)
	  , anObject       = __webpack_require__(2)
	  , toIObject      = __webpack_require__(36)
	  , toPrimitive    = __webpack_require__(66)
	  , createDesc     = __webpack_require__(92)
	  , _create        = __webpack_require__(98)
	  , gOPNExt        = __webpack_require__(451)
	  , $GOPD          = __webpack_require__(44)
	  , $DP            = __webpack_require__(15)
	  , $keys          = __webpack_require__(100)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(99).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(142).f  = $propertyIsEnumerable;
	  __webpack_require__(200).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(97)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(30)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 596 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(1)
	  , $typed       = __webpack_require__(203)
	  , buffer       = __webpack_require__(247)
	  , anObject     = __webpack_require__(2)
	  , toIndex      = __webpack_require__(103)
	  , toLength     = __webpack_require__(20)
	  , isObject     = __webpack_require__(6)
	  , TYPED_ARRAY  = __webpack_require__(7)('typed_array')
	  , ArrayBuffer  = __webpack_require__(4).ArrayBuffer
	  , speciesConstructor = __webpack_require__(241)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(5)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});
	
	__webpack_require__(102)(ARRAY_BUFFER);

/***/ },
/* 597 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1);
	$export($export.G + $export.W + $export.F * !__webpack_require__(203).ABV, {
	  DataView: __webpack_require__(247).DataView
	});

/***/ },
/* 598 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 599 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 600 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 601 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 602 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 603 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 604 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 605 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 606 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 607 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(444);
	
	// 23.4 WeakSet Objects
	__webpack_require__(193)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 608 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(1)
	  , $includes = __webpack_require__(192)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(133)('includes');

/***/ },
/* 609 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(1)
	  , microtask = __webpack_require__(239)()
	  , process   = __webpack_require__(4).process
	  , isNode    = __webpack_require__(48)(process) == 'process';
	
	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 610 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(1)
	  , cof     = __webpack_require__(48);
	
	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 611 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(1);
	
	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(443)('Map')});

/***/ },
/* 612 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 613 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 614 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 615 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 616 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(1)
	  , toObject        = __webpack_require__(24)
	  , aFunction       = __webpack_require__(33)
	  , $defineProperty = __webpack_require__(15);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(14) && $export($export.P + __webpack_require__(199), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 617 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(1)
	  , toObject        = __webpack_require__(24)
	  , aFunction       = __webpack_require__(33)
	  , $defineProperty = __webpack_require__(15);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(14) && $export($export.P + __webpack_require__(199), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 618 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(1)
	  , $entries = __webpack_require__(453)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 619 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(1)
	  , ownKeys        = __webpack_require__(454)
	  , toIObject      = __webpack_require__(36)
	  , gOPD           = __webpack_require__(44)
	  , createProperty = __webpack_require__(226);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key, D;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 620 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(1)
	  , toObject                 = __webpack_require__(24)
	  , toPrimitive              = __webpack_require__(66)
	  , getPrototypeOf           = __webpack_require__(45)
	  , getOwnPropertyDescriptor = __webpack_require__(44).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(14) && $export($export.P + __webpack_require__(199), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 621 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(1)
	  , toObject                 = __webpack_require__(24)
	  , toPrimitive              = __webpack_require__(66)
	  , getPrototypeOf           = __webpack_require__(45)
	  , getOwnPropertyDescriptor = __webpack_require__(44).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(14) && $export($export.P + __webpack_require__(199), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 622 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(1)
	  , $values = __webpack_require__(453)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 623 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(1)
	  , global      = __webpack_require__(4)
	  , core        = __webpack_require__(64)
	  , microtask   = __webpack_require__(239)()
	  , OBSERVABLE  = __webpack_require__(7)('observable')
	  , aFunction   = __webpack_require__(33)
	  , anObject    = __webpack_require__(2)
	  , anInstance  = __webpack_require__(90)
	  , redefineAll = __webpack_require__(101)
	  , hide        = __webpack_require__(30)
	  , forOf       = __webpack_require__(135)
	  , RETURN      = forOf.RETURN;
	
	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};
	
	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};
	
	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};
	
	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};
	
	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};
	
	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});
	
	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};
	
	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});
	
	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};
	
	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});
	
	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});
	
	hide($Observable.prototype, OBSERVABLE, function(){ return this; });
	
	$export($export.G, {Observable: $Observable});
	
	__webpack_require__(102)('Observable');

/***/ },
/* 624 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(69)
	  , anObject                  = __webpack_require__(2)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 625 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(69)
	  , anObject               = __webpack_require__(2)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;
	
	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 626 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(462)
	  , from                    = __webpack_require__(439)
	  , metadata                = __webpack_require__(69)
	  , anObject                = __webpack_require__(2)
	  , getPrototypeOf          = __webpack_require__(45)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};
	
	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 627 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(69)
	  , anObject               = __webpack_require__(2)
	  , getPrototypeOf         = __webpack_require__(45)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};
	
	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 628 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(69)
	  , anObject                = __webpack_require__(2)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 629 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(69)
	  , anObject               = __webpack_require__(2)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 630 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(69)
	  , anObject               = __webpack_require__(2)
	  , getPrototypeOf         = __webpack_require__(45)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};
	
	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 631 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(69)
	  , anObject               = __webpack_require__(2)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 632 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(69)
	  , anObject                  = __webpack_require__(2)
	  , aFunction                 = __webpack_require__(33)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 633 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(1);
	
	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(443)('Set')});

/***/ },
/* 634 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(1)
	  , $at     = __webpack_require__(242)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 635 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(1)
	  , defined     = __webpack_require__(49)
	  , toLength    = __webpack_require__(20)
	  , isRegExp    = __webpack_require__(197)
	  , getFlags    = __webpack_require__(195)
	  , RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(235)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});
	
	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 636 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(1)
	  , $pad    = __webpack_require__(458);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 637 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(1)
	  , $pad    = __webpack_require__(458);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 638 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(137)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 639 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(137)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 640 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(248)('asyncIterator');

/***/ },
/* 641 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(248)('observable');

/***/ },
/* 642 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(1);
	
	$export($export.S, 'System', {global: __webpack_require__(4)});

/***/ },
/* 643 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(250)
	  , redefine      = __webpack_require__(34)
	  , global        = __webpack_require__(4)
	  , hide          = __webpack_require__(30)
	  , Iterators     = __webpack_require__(96)
	  , wks           = __webpack_require__(7)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 644 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1)
	  , $task   = __webpack_require__(246);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 645 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(4)
	  , $export    = __webpack_require__(1)
	  , invoke     = __webpack_require__(196)
	  , partial    = __webpack_require__(471)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 646 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(595);
	__webpack_require__(534);
	__webpack_require__(536);
	__webpack_require__(535);
	__webpack_require__(538);
	__webpack_require__(540);
	__webpack_require__(545);
	__webpack_require__(539);
	__webpack_require__(537);
	__webpack_require__(547);
	__webpack_require__(546);
	__webpack_require__(542);
	__webpack_require__(543);
	__webpack_require__(541);
	__webpack_require__(533);
	__webpack_require__(544);
	__webpack_require__(548);
	__webpack_require__(549);
	__webpack_require__(501);
	__webpack_require__(503);
	__webpack_require__(502);
	__webpack_require__(551);
	__webpack_require__(550);
	__webpack_require__(521);
	__webpack_require__(531);
	__webpack_require__(532);
	__webpack_require__(522);
	__webpack_require__(523);
	__webpack_require__(524);
	__webpack_require__(525);
	__webpack_require__(526);
	__webpack_require__(527);
	__webpack_require__(528);
	__webpack_require__(529);
	__webpack_require__(530);
	__webpack_require__(504);
	__webpack_require__(505);
	__webpack_require__(506);
	__webpack_require__(507);
	__webpack_require__(508);
	__webpack_require__(509);
	__webpack_require__(510);
	__webpack_require__(511);
	__webpack_require__(512);
	__webpack_require__(513);
	__webpack_require__(514);
	__webpack_require__(515);
	__webpack_require__(516);
	__webpack_require__(517);
	__webpack_require__(518);
	__webpack_require__(519);
	__webpack_require__(520);
	__webpack_require__(582);
	__webpack_require__(587);
	__webpack_require__(594);
	__webpack_require__(585);
	__webpack_require__(577);
	__webpack_require__(578);
	__webpack_require__(583);
	__webpack_require__(588);
	__webpack_require__(590);
	__webpack_require__(573);
	__webpack_require__(574);
	__webpack_require__(575);
	__webpack_require__(576);
	__webpack_require__(579);
	__webpack_require__(580);
	__webpack_require__(581);
	__webpack_require__(584);
	__webpack_require__(586);
	__webpack_require__(589);
	__webpack_require__(591);
	__webpack_require__(592);
	__webpack_require__(593);
	__webpack_require__(496);
	__webpack_require__(498);
	__webpack_require__(497);
	__webpack_require__(500);
	__webpack_require__(499);
	__webpack_require__(485);
	__webpack_require__(483);
	__webpack_require__(489);
	__webpack_require__(486);
	__webpack_require__(492);
	__webpack_require__(494);
	__webpack_require__(482);
	__webpack_require__(488);
	__webpack_require__(479);
	__webpack_require__(493);
	__webpack_require__(477);
	__webpack_require__(491);
	__webpack_require__(490);
	__webpack_require__(484);
	__webpack_require__(487);
	__webpack_require__(476);
	__webpack_require__(478);
	__webpack_require__(481);
	__webpack_require__(480);
	__webpack_require__(495);
	__webpack_require__(250);
	__webpack_require__(567);
	__webpack_require__(572);
	__webpack_require__(461);
	__webpack_require__(568);
	__webpack_require__(569);
	__webpack_require__(570);
	__webpack_require__(571);
	__webpack_require__(552);
	__webpack_require__(460);
	__webpack_require__(462);
	__webpack_require__(463);
	__webpack_require__(607);
	__webpack_require__(596);
	__webpack_require__(597);
	__webpack_require__(602);
	__webpack_require__(605);
	__webpack_require__(606);
	__webpack_require__(600);
	__webpack_require__(603);
	__webpack_require__(601);
	__webpack_require__(604);
	__webpack_require__(598);
	__webpack_require__(599);
	__webpack_require__(553);
	__webpack_require__(554);
	__webpack_require__(555);
	__webpack_require__(556);
	__webpack_require__(557);
	__webpack_require__(560);
	__webpack_require__(558);
	__webpack_require__(559);
	__webpack_require__(561);
	__webpack_require__(562);
	__webpack_require__(563);
	__webpack_require__(564);
	__webpack_require__(566);
	__webpack_require__(565);
	__webpack_require__(608);
	__webpack_require__(634);
	__webpack_require__(637);
	__webpack_require__(636);
	__webpack_require__(638);
	__webpack_require__(639);
	__webpack_require__(635);
	__webpack_require__(640);
	__webpack_require__(641);
	__webpack_require__(619);
	__webpack_require__(622);
	__webpack_require__(618);
	__webpack_require__(616);
	__webpack_require__(617);
	__webpack_require__(620);
	__webpack_require__(621);
	__webpack_require__(611);
	__webpack_require__(633);
	__webpack_require__(642);
	__webpack_require__(610);
	__webpack_require__(612);
	__webpack_require__(614);
	__webpack_require__(613);
	__webpack_require__(615);
	__webpack_require__(624);
	__webpack_require__(625);
	__webpack_require__(627);
	__webpack_require__(626);
	__webpack_require__(629);
	__webpack_require__(628);
	__webpack_require__(630);
	__webpack_require__(631);
	__webpack_require__(632);
	__webpack_require__(609);
	__webpack_require__(623);
	__webpack_require__(645);
	__webpack_require__(644);
	__webpack_require__(643);
	module.exports = __webpack_require__(64);

/***/ },
/* 647 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 648 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(647)))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=open-physiology-model.js.map