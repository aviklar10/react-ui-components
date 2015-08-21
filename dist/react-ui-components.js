(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("fixed-data-table"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "fixedDataTable"], factory);
	else if(typeof exports === 'object')
		exports["RUC"] = factory(require("react"), require("fixed-data-table"));
	else
		root["RUC"] = factory(root["React"], root["FixedDataTable"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_80__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

		DropdownList: __webpack_require__(1),
		DataTable: __webpack_require__(79)
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	__webpack_require__(2);

	var React = __webpack_require__(6),
	    ReactWidgets = __webpack_require__(7),
	    RUCList = __webpack_require__(78);

	var RUCDropdownList = React.createClass({
		displayName: 'RUCDropdownList',

		getInitialState: function getInitialState() {
			return {
				disabledItems: this.props.disabledItems
			};
		},

		componentWillReceiveProps: function componentWillReceiveProps(props) {

			this.setState({
				disabledItems: props.disabledItems
			});
		},

		render: function render() {
			var disabled = this.props.disabled,
			    disabledItems = Array.isArray(this.state.disabledItems) ? this.state.disabledItems : [];

			return React.createElement(ReactWidgets.DropdownList, _extends({}, this.props, {
				disabled: disabled,
				disabledItems: disabledItems,
				listComponent: RUCList }));
		}
	});

	module.exports = RUCDropdownList;

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	var invariant = __webpack_require__(9);

	if ("production" !== process.env.NODE_ENV) {
	  [Array.prototype.some, Array.prototype.filter, Array.prototype.reduce].forEach(function (method) {
	    if (!method) throw new Error("One or more ES5 features is not available to ReactWidgets: http://jquense.github.io/react-widgets/docs/#/getting-started/browser");
	  });
	}

	module.exports = {

	  DropdownList: __webpack_require__(10),
	  Combobox: __webpack_require__(48),

	  Calendar: __webpack_require__(53),
	  DateTimePicker: __webpack_require__(67),

	  NumberPicker: __webpack_require__(71),

	  Multiselect: __webpack_require__(73),
	  SelectList: __webpack_require__(76),

	  configure: __webpack_require__(77),

	  utils: {
	    ReplaceTransitionGroup: __webpack_require__(66),
	    SlideTransition: __webpack_require__(65) }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
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
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
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
	        setTimeout(drainQueue, 0);
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

	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if ("production" !== process.env.NODE_ENV) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6),
	    _ = __webpack_require__(12),
	    cx = __webpack_require__(14),
	    compat = __webpack_require__(15),
	    CustomPropTypes = __webpack_require__(16),
	    Popup = __webpack_require__(17),
	    PlainList = __webpack_require__(34),
	    GroupableList = __webpack_require__(39),
	    validateList = __webpack_require__(40),
	    createUncontrolledWidget = __webpack_require__(41);

	var propTypes = {
	  //-- controlled props -----------
	  value: React.PropTypes.any,
	  onChange: React.PropTypes.func,
	  open: React.PropTypes.bool,
	  onToggle: React.PropTypes.func,
	  //------------------------------------

	  data: React.PropTypes.array,
	  valueField: React.PropTypes.string,
	  textField: React.PropTypes.string,

	  valueComponent: CustomPropTypes.elementType,
	  itemComponent: CustomPropTypes.elementType,
	  listComponent: CustomPropTypes.elementType,

	  groupComponent: CustomPropTypes.elementType,
	  groupBy: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.string]),

	  onSelect: React.PropTypes.func,

	  busy: React.PropTypes.bool,

	  delay: React.PropTypes.number,

	  dropUp: React.PropTypes.bool,
	  duration: React.PropTypes.number, //popup

	  disabled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.oneOf(["disabled"])]),

	  readOnly: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.oneOf(["readOnly"])]),

	  messages: React.PropTypes.shape({
	    open: React.PropTypes.string })
	};

	var DropdownList = React.createClass({

	  displayName: "DropdownList",

	  mixins: [__webpack_require__(35), __webpack_require__(43), __webpack_require__(44), __webpack_require__(36), __webpack_require__(45), __webpack_require__(47)],

	  propTypes: propTypes,

	  getInitialState: function () {
	    var initialIdx = this._dataIndexOf(this.props.data, this.props.value);

	    return {
	      selectedItem: this.props.data[initialIdx],
	      focusedItem: this.props.data[initialIdx] || this.props.data[0] };
	  },

	  getDefaultProps: function () {
	    return {
	      delay: 500,
	      value: "",
	      open: false,
	      data: [],
	      messages: {
	        open: "open dropdown"
	      }
	    };
	  },

	  componentDidMount: function () {
	    validateList(this.refs.list);
	  },

	  componentWillReceiveProps: function (props) {
	    if (_.isShallowEqual(props.value, this.props.value) && props.data === this.props.data) return;

	    var idx = this._dataIndexOf(props.data, props.value);

	    this.setState({
	      selectedItem: props.data[idx],
	      focusedItem: props.data[! ~idx ? 0 : idx]
	    });
	  },

	  render: function () {
	    var _this = this;

	    var _$omit = _.omit(this.props, Object.keys(propTypes));

	    var className = _$omit.className;
	    var props = babelHelpers.objectWithoutProperties(_$omit, ["className"]);
	    var ValueComponent = this.props.valueComponent;
	    var valueItem = this._dataItem(this._data(), this.props.value);
	    var optID = this._id("_option");
	    var dropUp = this.props.dropUp;
	    var List = this.props.listComponent || this.props.groupBy && GroupableList || PlainList;

	    return React.createElement(
	      "div",
	      babelHelpers._extends({}, props, {
	        ref: "element",
	        onKeyDown: this._maybeHandle(this._keyDown),
	        onClick: this._maybeHandle(this.toggle),
	        onFocus: this._maybeHandle(this._focus.bind(null, true), true),
	        onBlur: this._focus.bind(null, false),
	        "aria-expanded": this.props.open,
	        "aria-haspopup": true,
	        "aria-busy": !!this.props.busy,
	        "aria-activedescendent": this.props.open ? optID : undefined,
	        "aria-disabled": this.props.disabled,
	        "aria-readonly": this.props.readOnly,
	        tabIndex: this.props.disabled ? "-1" : "0",
	        className: cx(className, "rw-dropdownlist", "rw-widget", (function () {
	          var _cx = {};
	          _cx["rw-state-disabled"] = _this.props.disabled;
	          _cx["rw-state-readonly"] = _this.props.readOnly;
	          _cx["rw-state-focus"] = _this.state.focused;
	          _cx["rw-rtl"] = _this.isRtl();
	          _cx["rw-open" + (dropUp ? "-up" : "")] = _this.props.open;
	          return _cx;
	        })()) }),
	      React.createElement(
	        "span",
	        { className: "rw-dropdownlist-picker rw-select rw-btn" },
	        React.createElement(
	          "i",
	          { className: "rw-i rw-i-caret-down" + (this.props.busy ? " rw-loading" : "") },
	          React.createElement(
	            "span",
	            { className: "rw-sr" },
	            this.props.messages.open
	          )
	        )
	      ),
	      React.createElement(
	        "div",
	        { className: "rw-input" },
	        this.props.valueComponent ? React.createElement(ValueComponent, { item: valueItem }) : this._dataText(valueItem)
	      ),
	      React.createElement(
	        Popup,
	        babelHelpers._extends({}, _.pick(this.props, Object.keys(compat.type(Popup).propTypes)), {
	          onOpening: function () {
	            return _this.refs.list.forceUpdate();
	          },
	          onRequestClose: this.close }),
	        React.createElement(
	          "div",
	          null,
	          React.createElement(List, babelHelpers._extends({ ref: "list"
	          }, _.pick(this.props, Object.keys(compat.type(List).propTypes)), {
	            optID: optID,
	            "aria-hidden": !this.props.open,
	            selected: this.state.selectedItem,
	            focused: this.props.open ? this.state.focusedItem : null,
	            onSelect: this._maybeHandle(this._onSelect),
	            onMove: this._scrollTo }))
	        )
	      )
	    );
	  },

	  _focus: function (focused, e) {
	    var _this = this;

	    this.setTimeout("focus", function () {

	      if (focused) compat.findDOMNode(_this).focus();else _this.close();

	      if (focused !== _this.state.focused) {
	        _this.notify(focused ? "onFocus" : "onBlur", e);
	        _this.setState({ focused: focused });
	      }
	    });
	  },

	  _onSelect: function (data) {
	    this.close();
	    this.notify("onSelect", data);
	    this.change(data);
	  },

	  _keyDown: function (e) {
	    var _this = this;

	    var self = this,
	        key = e.key,
	        alt = e.altKey,
	        list = this.refs.list,
	        focusedItem = this.state.focusedItem,
	        selectedItem = this.state.selectedItem,
	        isOpen = this.props.open;

	    if (key === "End") {
	      if (isOpen) this.setState({ focusedItem: list.last() });else change(list.last());
	      e.preventDefault();
	    } else if (key === "Home") {
	      if (isOpen) this.setState({ focusedItem: list.first() });else change(list.first());
	      e.preventDefault();
	    } else if (key === "Escape" && isOpen) {
	      this.close();
	    } else if ((key === "Enter" || key === " ") && isOpen) {
	      change(this.state.focusedItem, true);
	    } else if (key === "ArrowDown") {
	      if (alt) this.open();else if (isOpen) this.setState({ focusedItem: list.next(focusedItem) });else change(list.next(selectedItem));
	      e.preventDefault();
	    } else if (key === "ArrowUp") {
	      if (alt) this.close();else if (isOpen) this.setState({ focusedItem: list.prev(focusedItem) });else change(list.prev(selectedItem));
	      e.preventDefault();
	    } else this.search(String.fromCharCode(e.keyCode), function (item) {
	      isOpen ? _this.setState({ focusedItem: item }) : change(item);
	    });

	    this.notify("onKeyDown", [e]);

	    function change(item, fromList) {
	      if (!item) return;
	      if (fromList) self.notify("onSelect", item);

	      self.change(item);
	    }
	  },

	  change: function (data) {
	    if (!_.isShallowEqual(data, this.props.value)) {
	      this.notify("onChange", data);
	      this.close();
	    }
	  },

	  _data: function () {
	    return this.props.data;
	  },

	  search: function (character, cb) {
	    var _this = this;

	    var word = ((this._searchTerm || "") + character).toLowerCase();

	    this._searchTerm = word;

	    this.setTimeout("search", function () {
	      var list = _this.refs.list,
	          key = _this.props.open ? "focusedItem" : "selectedItem",
	          item = list.next(_this.state[key], word);

	      _this._searchTerm = "";
	      if (item) cb(item);
	    }, this.props.delay);
	  },

	  open: function () {
	    this.notify("onToggle", true);
	  },

	  close: function () {
	    this.notify("onToggle", false);
	  },

	  toggle: function (e) {
	    this.props.open ? this.close() : this.open();
	  }

	});

	module.exports = createUncontrolledWidget(DropdownList, { open: "onToggle", value: "onChange" });

	module.exports.BaseDropdownList = DropdownList;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === "object") {
	    factory(exports);
	  } else {
	    factory(root.babelHelpers = {});
	  }
	})(this, function (global) {
	  var babelHelpers = global;

	  babelHelpers.objectWithoutProperties = function (obj, keys) {
	    var target = {};

	    for (var i in obj) {
	      if (keys.indexOf(i) >= 0) continue;
	      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	      target[i] = obj[i];
	    }

	    return target;
	  };

	  babelHelpers._extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };
	})

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var idCount = 0;

	var _ = module.exports = {

	  has: has,

	  assign: __webpack_require__(13),

	  isShallowEqual: function (a, b) {
	    if (a === b) return true;
	    if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();

	    if (typeof a != "object" && typeof b != "object") return a === b;

	    if (typeof a != typeof b) return false;

	    return shallowEqual(a, b);
	  },

	  transform: function (obj, cb, seed) {
	    _.each(obj, cb.bind(null, seed = seed || (Array.isArray(obj) ? [] : {})));
	    return seed;
	  },

	  each: function (obj, cb, thisArg) {
	    if (Array.isArray(obj)) return obj.forEach(cb, thisArg);

	    for (var key in obj) if (has(obj, key)) cb.call(thisArg, obj[key], key, obj);
	  },

	  // object: function(arr){
	  //   return _.transform(arr,
	  //     (obj, val) => obj[val[0]] = val[1], {})
	  // },

	  pick: function (obj, keys) {
	    keys = [].concat(keys);
	    return _.transform(obj, function (mapped, val, key) {
	      if (keys.indexOf(key) !== -1) mapped[key] = val;
	    }, {});
	  },

	  omit: function (obj, keys) {
	    keys = [].concat(keys);
	    return _.transform(obj, function (mapped, val, key) {
	      if (keys.indexOf(key) === -1) mapped[key] = val;
	    }, {});
	  },

	  find: function (arr, cb, thisArg) {
	    var result;
	    if (Array.isArray(arr)) {
	      arr.every(function (val, idx) {
	        if (cb.call(thisArg, val, idx, arr)) return (result = val, false);
	        return true;
	      });
	      return result;
	    } else for (var key in arr) if (has(arr, key)) if (cb.call(thisArg, arr[key], key, arr)) return arr[key];
	  },

	  chunk: function (array, chunkSize) {
	    var index = 0,
	        length = array ? array.length : 0,
	        result = [];

	    chunkSize = Math.max(+chunkSize || 1, 1);

	    while (index < length) result.push(array.slice(index, index += chunkSize));

	    return result;
	  },

	  splat: function (obj) {
	    return obj == null ? [] : [].concat(obj);
	  },

	  noop: function () {},

	  uniqueId: function (prefix) {
	    return "" + ((prefix == null ? "" : prefix) + ++idCount);
	  },

	  ifNotDisabled: function (disabledOnly, fn) {
	    if (argument.length === 1) fn = disabledOnly, disabledOnly = false;

	    return function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      if (!(this.isDisabled() || !disabledOnly && this.isReadOnly())) return;

	      return fn.apply(this, args);
	    };
	  }
	};

	function has(o, k) {
	  return o ? Object.prototype.hasOwnProperty.call(o, k) : false;
	}

	function shallowEqual(objA, objB) {
	  var key;

	  for (key in objA) if (has(objA, key) && (!has(objB, key) || !eql(objA[key], objB[key]))) return false;

	  for (key in objB) if (has(objB, key) && !has(objA, key)) return false;

	  return true;
	}

	function eql(a, b) {

	  return a === b;
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Object.assign
	 */

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

	'use strict';

	function assign(target, sources) {
	  if (target == null) {
	    throw new TypeError('Object.assign target cannot be null or undefined');
	  }

	  var to = Object(target);
	  var hasOwnProperty = Object.prototype.hasOwnProperty;

	  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	    var nextSource = arguments[nextIndex];
	    if (nextSource == null) {
	      continue;
	    }

	    var from = Object(nextSource);

	    // We don't currently support accessors nor proxies. Therefore this
	    // copy cannot throw. If we ever supported this then we must handle
	    // exceptions and side-effects. We don't support symbols so they won't
	    // be transferred.

	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	  }

	  return to;
	}

	module.exports = assign;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	function classNames() {
		var classes = '';
		var arg;

		for (var i = 0; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) {
				continue;
			}

			if ('string' === typeof arg || 'number' === typeof arg) {
				classes += ' ' + arg;
			} else if (Object.prototype.toString.call(arg) === '[object Array]') {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === typeof arg) {
				for (var key in arg) {
					if (!arg.hasOwnProperty(key) || !arg[key]) {
						continue;
					}
					classes += ' ' + key;
				}
			}
		}
		return classes.substr(1);
	}

	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}

	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(6),
	    _ = __webpack_require__(12),
	    version = React.version.split(".").map(parseFloat);

	var compat = module.exports = {

	  version: function () {
	    return version;
	  },

	  type: function (component) {
	    if (version[0] === 0 && version[1] >= 13) return component;

	    return component.type;
	  },

	  findDOMNode: function (component) {
	    if (React.findDOMNode) return React.findDOMNode(component);

	    return component.getDOMNode();
	  },

	  cloneElement: function (child, props) {
	    if (React.cloneElement) return React.cloneElement(child, props);

	    //just mutate if pre 0.13
	    _.each(props, function (value, prop) {
	      return child.props[prop] = value;
	    });

	    return child;
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(6);

	module.exports = {

	  elementType: createChainableTypeChecker(function (props, propName, componentName, location) {

	    if (typeof props[propName] !== "function") {
	      if (React.isValidElement(props[propName])) return new Error("Invalid prop `" + propName + "` specified in  `" + componentName + "`." + " Expected an Element `type`, not an actual Element");

	      if (typeof props[propName] !== "string") return new Error("Invalid prop `" + propName + "` specified in  `" + componentName + "`." + " Expected an Element `type` such as a tag name or return value of React.createClass(...)");
	    }
	    return true;
	  }),

	  localeFormat: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]) };

	function createChainableTypeChecker(validate) {

	  function checkType(isRequired, props, propName, componentName, location) {
	    componentName = componentName || "<<anonymous>>";
	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error("Required prop `" + propName + "` was not specified in  `" + componentName + "`.");
	      }
	    } else return validate(props, propName, componentName, location);
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6),
	    $ = __webpack_require__(18),
	    config = __webpack_require__(32),
	    cn = __webpack_require__(14),
	    compat = __webpack_require__(15);

	var PopupContent = React.createClass({
	  displayName: "PopupContent",

	  render: function () {
	    var child = React.Children.only(this.props.children);

	    return compat.cloneElement(child, {
	      className: cn(child.props.className, "rw-popup rw-widget")
	    });
	  }
	});

	module.exports = React.createClass({
	  displayName: "exports",

	  propTypes: {
	    open: React.PropTypes.bool,
	    dropUp: React.PropTypes.bool,
	    duration: React.PropTypes.number,

	    onRequestClose: React.PropTypes.func.isRequired,
	    onClosing: React.PropTypes.func,
	    onOpening: React.PropTypes.func,
	    onClose: React.PropTypes.func,
	    onOpen: React.PropTypes.func
	  },

	  getDefaultProps: function () {
	    return {
	      duration: 200,
	      open: false,
	      onClosing: function () {},
	      onOpening: function () {},
	      onClose: function () {},
	      onOpen: function () {} };
	  },

	  componentDidMount: function () {
	    !this.props.open && this.close(0);
	  },

	  componentWillReceiveProps: function (nextProps) {
	    this.setState({
	      contentChanged: childKey(nextProps.children) !== childKey(this.props.children)
	    });
	  },

	  componentDidUpdate: function (pvProps, pvState) {
	    var closing = pvProps.open && !this.props.open,
	        opening = !pvProps.open && this.props.open;

	    if (opening) this.open();else if (closing) this.close();
	  },

	  render: function () {
	    var _props = this.props;
	    var className = _props.className;
	    var open = _props.open;
	    var dropUp = _props.dropUp;
	    var props = babelHelpers.objectWithoutProperties(_props, ["className", "open", "dropUp"]);

	    return React.createElement(
	      "div",
	      babelHelpers._extends({}, props, { className: cn(className, "rw-popup-container", { "rw-dropup": dropUp }) }),
	      React.createElement(
	        PopupContent,
	        { ref: "content" },
	        this.props.children
	      )
	    );
	  },

	  dimensions: function () {
	    var el = compat.findDOMNode(this),
	        content = compat.findDOMNode(this.refs.content),
	        margin = parseInt($.css(content, "margin-top"), 10) + parseInt($.css(content, "margin-bottom"), 10);

	    el.style.display = "block";
	    el.style.height = $.height(content) + (isNaN(margin) ? 0 : margin) + "px";
	  },

	  open: function () {
	    var self = this,
	        anim = compat.findDOMNode(this),
	        el = compat.findDOMNode(this.refs.content);

	    this.ORGINAL_POSITION = $.css(el, "position");

	    this._isOpening = true;
	    this.dimensions();
	    this.props.onOpening();

	    anim.className += " rw-popup-animating";
	    el.style.position = "absolute";

	    config.animate(el, { top: 0 }, self.props.duration, "ease", function () {
	      if (!self._isOpening) return;

	      anim.className = anim.className.replace(/ ?rw-popup-animating/g, "");

	      el.style.position = self.ORGINAL_POSITION;
	      anim.style.overflow = "visible";
	      self.ORGINAL_POSITION = null;

	      self.props.onOpen();
	    });
	  },

	  close: function (dur) {
	    var self = this,
	        el = compat.findDOMNode(this.refs.content),
	        anim = compat.findDOMNode(this);

	    this.ORGINAL_POSITION = $.css(el, "position");

	    this._isOpening = false;
	    this.dimensions();
	    this.props.onClosing();

	    anim.style.overflow = "hidden";
	    anim.className += " rw-popup-animating";
	    el.style.position = "absolute";

	    config.animate(el, { top: this.props.dropUp ? "100%" : "-100%" }, dur === undefined ? this.props.duration : dur, "ease", function () {
	      if (self._isOpening) return;

	      el.style.position = self.ORGINAL_POSITION;
	      anim.className = anim.className.replace(/ ?rw-popup-animating/g, "");

	      anim.style.display = "none";
	      self.ORGINAL_POSITION = null;
	      self.props.onClose();
	    });
	  }

	});

	function childKey(children) {
	  var nextChildMapping = React.Children.map(children, function (c) {
	    return c;
	  });
	  for (var key in nextChildMapping) return key;
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _require = __webpack_require__(19);

	var on = _require.on;
	var off = _require.off;

	var _require2 = __webpack_require__(20);

	var height = _require2.height;
	var width = _require2.width;
	var offset = _require2.offset;

	module.exports = {

	  height: height,

	  width: width,

	  offset: offset,

	  on: on,

	  off: off,

	  css: __webpack_require__(23),

	  contains: __webpack_require__(21),

	  scrollParent: __webpack_require__(28),

	  scrollTop: __webpack_require__(29),

	  raf: __webpack_require__(30),

	  animate: __webpack_require__(31) };

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {

	  on: function (node, eventName, handler) {
	    if (node.addEventListener) node.addEventListener(eventName, handler, false);else if (node.attachEvent) node.attachEvent("on" + eventName, handler);
	  },

	  off: function (node, eventName, handler) {
	    if (node.addEventListener) node.removeEventListener(eventName, handler, false);else if (node.attachEvent) node.detachEvent("on" + eventName, handler);
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var contains = __webpack_require__(21);

	function offset(node) {
	  var doc = node.ownerDocument,
	      docElem = doc && doc.documentElement,
	      box = { top: 0, left: 0, height: 0, width: 0 };

	  if (!docElem) return;

	  if (!contains(docElem, node)) return box;

	  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();

	  return {
	    top: box.top + window.pageYOffset - docElem.clientTop,
	    left: box.left + window.pageXOffset - docElem.clientLeft,
	    width: box.width || node.offsetWidth,
	    height: box.height || node.offsetHeight };
	}

	module.exports = {

	  width: function (node, client) {
	    var win = getWindow(node);
	    return win ? win.innerWidth : client ? node.clientWidth : offset(node).width;
	  },

	  height: function (node, client) {
	    var win = getWindow(node);
	    return win ? win.innerHeight : client ? node.clientHeight : offset(node).height;
	  },

	  offset: offset

	};

	function getWindow(node) {
	  return node === node.window ? node : node.nodeType === 9 && node.defaultView;
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var canUseDOM = __webpack_require__(22).canUseDOM;

	var contains = (function () {
	  var root = canUseDOM && document.documentElement;

	  return root && root.contains ? function (context, node) {
	    return context.contains(node);
	  } : root && root.compareDocumentPosition ? function (context, node) {
	    return context === node || !!(context.compareDocumentPosition(node) & 16);
	  } : function (context, node) {
	    if (node) do {
	      if (node === context) return true;
	    } while (node = node.parentNode);

	    return false;
	  };
	})();

	module.exports = contains;

/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */

	/*jslint evil: true */

	"use strict";

	var canUseDOM = !!(
	  (typeof window !== 'undefined' &&
	  window.document && window.document.createElement)
	);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners:
	    canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var camelize = __webpack_require__(24),
	    hyphenate = __webpack_require__(26),
	    has = Object.prototype.hasOwnProperty;

	module.exports = function cssFn(node, property, value) {
	  var css = "",
	      props = property;

	  if (typeof property === "string") {
	    if (value === undefined) return node.style[camelize(property)] || _getComputedStyle(node).getPropertyValue(property);else (props = {})[property] = value;
	  }

	  for (var key in props) if (has.call(props, key)) {
	    !props[key] && props[key] !== 0 ? removeStyle(node.style, hyphenate(key)) : css += hyphenate(key) + ":" + props[key] + ";";
	  }

	  node.style.cssText += ";" + css;
	};

	function removeStyle(styles, key) {
	  return "removeProperty" in styles ? styles.removeProperty(key) : styles.removeAttribute(key);
	}

	function _getComputedStyle(node) {
	  if (!node) throw new Error();
	  var doc = node.ownerDocument;

	  return "defaultView" in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : { //ie 8 "magic"
	    getPropertyValue: function (prop) {
	      var re = /(\-([a-z]){1})/g;
	      if (prop == "float") prop = "styleFloat";
	      if (re.test(prop)) prop = prop.replace(re, function () {
	        return arguments[2].toUpperCase();
	      });

	      return node.currentStyle[prop] || null;
	    }
	  };
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelizeStyleName
	 * @typechecks
	 */

	"use strict";

	var camelize = __webpack_require__(25);

	var msPattern = /^-ms-/;

	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}

	module.exports = camelizeStyleName;


/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelize
	 * @typechecks
	 */

	var _hyphenPattern = /-(.)/g;

	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function(_, character) {
	    return character.toUpperCase();
	  });
	}

	module.exports = camelize;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule hyphenateStyleName
	 * @typechecks
	 */

	"use strict";

	var hyphenate = __webpack_require__(27);

	var msPattern = /^ms-/;

	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}

	module.exports = hyphenateStyleName;


/***/ },
/* 27 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule hyphenate
	 * @typechecks
	 */

	var _uppercasePattern = /([A-Z])/g;

	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}

	module.exports = hyphenate;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var css = __webpack_require__(23);

	var _require = __webpack_require__(20);

	var height = _require.height;

	module.exports = function scrollPrarent(node) {
	  var position = css(node, "position"),
	      excludeStatic = position === "absolute",
	      ownerDoc = node.ownerDocument;

	  if (position === "fixed") return ownerDoc || document;

	  while ((node = node.parentNode) && node.nodeType !== 9) {

	    var isStatic = excludeStatic && css(node, "position") === "static",
	        style = css(node, "overflow") + css(node, "overflow-y") + css(node, "overflow-x");

	    if (isStatic) continue;

	    if (/(auto|scroll)/.test(style) && height(node) < node.scrollHeight) return node;
	  }

	  return document;
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function scrollTop(node, val) {
	  var win = node === node.window ? node : node.nodeType === 9 && node.defaultView;

	  if (val === undefined) return win ? "pageYOffset" in win ? win.pageYOffset : win.document.documentElement.scrollTop : node.scrollTop;

	  if (win) win.scrollTo("pageXOffset" in win ? win.pageXOffset : win.document.documentElement.scrollLeft, val);else node.scrollTop = val;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var canUseDOM = __webpack_require__(22).canUseDOM,
	    cancel = "clearTimeout",
	    raf = fallback,
	    compatRaf;

	var keys = ["cancelAnimationFrame", "webkitCancelAnimationFrame", "mozCancelAnimationFrame", "oCancelAnimationFrame", "msCancelAnimationFrame"];

	compatRaf = function (cb) {
	  return raf(cb);
	};
	compatRaf.cancel = function (id) {
	  return window[cancel](id);
	};

	module.exports = compatRaf;

	if (canUseDOM) {
	  raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || fallback;

	  for (var i = 0; i < keys.length; i++) if (keys[i] in window) {
	    cancel = keys[i];
	    break;
	  }
	}

	/* https://github.com/component/raf */
	var prev = new Date().getTime();

	function fallback(fn) {
	  var curr = new Date().getTime(),
	      ms = Math.max(0, 16 - (curr - prev)),
	      req = setTimeout(fn, ms);
	  prev = curr;
	  return req;
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var canUseDOM = __webpack_require__(22).canUseDOM;
	var hyphenate = __webpack_require__(26);
	var has = Object.prototype.hasOwnProperty;
	var css = __webpack_require__(23);

	var _require = __webpack_require__(19);

	var on = _require.on;
	var off = _require.off;

	var TRANSLATION_MAP = {
	  left: "translateX", right: "translateX",
	  top: "translateY", bottom: "translateY" };

	var reset = {},
	    transform = "transform",
	    transition = {},
	    transitionTiming,
	    transitionDuration,
	    transitionProperty,
	    transitionDelay;

	if (canUseDOM) {
	  transition = getTransitionProperties();

	  transform = transition.prefix + transform;

	  reset[transitionProperty = transition.prefix + "transition-property"] = reset[transitionDuration = transition.prefix + "transition-duration"] = reset[transitionDelay = transition.prefix + "transition-delay"] = reset[transitionTiming = transition.prefix + "transition-timing-function"] = "";
	}

	animate.endEvent = transition.endEvent;

	module.exports = animate;

	/* code in part from: Zepto 1.1.4 | zeptojs.com/license */
	// super lean animate function for transitions
	// doesn't support all translations to keep it matching the jquery API
	function animate(node, properties, duration, easing, callback) {
	  var cssProperties = [],
	      fakeEvent = { target: node, currentTarget: node },
	      cssValues = {},
	      transforms = "",
	      fired;

	  if (typeof easing === "function") callback = easing, easing = null;

	  if (!transition.endEvent) duration = 0;
	  if (duration === undefined) duration = 200;

	  for (var key in properties) if (has.call(properties, key)) {
	    if (/(top|bottom)/.test(key)) transforms += TRANSLATION_MAP[key] + "(" + properties[key] + ") ";else {
	      cssValues[key] = properties[key];
	      cssProperties.push(hyphenate(key));
	    }
	  }

	  if (transforms) {
	    cssValues[transform] = transforms;
	    cssProperties.push(transform);
	  }

	  if (duration > 0) {
	    cssValues[transitionProperty] = cssProperties.join(", ");
	    cssValues[transitionDuration] = duration / 1000 + "s";
	    cssValues[transitionDelay] = 0 + "s";
	    cssValues[transitionTiming] = easing || "linear";

	    on(node, transition.endEvent, done);

	    setTimeout(function () {
	      if (!fired) done(fakeEvent);
	    }, duration + 500);
	  }

	  // trigger page reflow
	  node.clientLeft;
	  css(node, cssValues);

	  if (duration <= 0) setTimeout(done.bind(null, fakeEvent), 0);

	  function done(event) {
	    if (event.target !== event.currentTarget) return;

	    fired = true;
	    off(event.target, transition.endEvent, done);

	    css(node, reset);

	    callback && callback.call(this);
	  }
	}

	function getTransitionProperties() {
	  var endEvent,
	      prefix = "",
	      transitions = {
	    O: "otransitionend",
	    Moz: "transitionend",
	    Webkit: "webkitTransitionEnd"
	  };

	  var element = document.createElement("div");

	  for (var vendor in transitions) if (has.call(transitions, vendor)) {
	    if (element.style[vendor + "TransitionProperty"] !== undefined) {
	      prefix = "-" + vendor.toLowerCase() + "-";
	      endEvent = transitions[vendor];
	      break;
	    }
	  }

	  if (!endEvent && element.style.transitionProperty !== undefined) endEvent = "transitionend";

	  return { endEvent: endEvent, prefix: prefix };
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = {

	  globalize: __webpack_require__(33),

	  animate: __webpack_require__(31)
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Globalize
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright Software Freedom Conservancy, Inc.
	 * Dual licensed under the MIT or GPL Version 2 licenses.
	 * http://jquery.org/license
	 */

	(function( window, undefined ) {

	var Globalize,
		// private variables
		regexHex,
		regexInfinity,
		regexParseFloat,
		regexTrim,
		// private JavaScript utility functions
		arrayIndexOf,
		endsWith,
		extend,
		isArray,
		isFunction,
		isObject,
		startsWith,
		trim,
		truncate,
		zeroPad,
		// private Globalization utility functions
		appendPreOrPostMatch,
		expandFormat,
		formatDate,
		formatNumber,
		getTokenRegExp,
		getEra,
		getEraYear,
		parseExact,
		parseNegativePattern;

	// Global variable (Globalize) or CommonJS module (globalize)
	Globalize = function( cultureSelector ) {
		return new Globalize.prototype.init( cultureSelector );
	};

	if ( true ) {
		// Assume CommonJS
		module.exports = Globalize;
	} else {
		// Export as global variable
		window.Globalize = Globalize;
	}

	Globalize.cultures = {};

	Globalize.prototype = {
		constructor: Globalize,
		init: function( cultureSelector ) {
			this.cultures = Globalize.cultures;
			this.cultureSelector = cultureSelector;

			return this;
		}
	};
	Globalize.prototype.init.prototype = Globalize.prototype;

	// 1. When defining a culture, all fields are required except the ones stated as optional.
	// 2. Each culture should have a ".calendars" object with at least one calendar named "standard"
	//    which serves as the default calendar in use by that culture.
	// 3. Each culture should have a ".calendar" object which is the current calendar being used,
	//    it may be dynamically changed at any time to one of the calendars in ".calendars".
	Globalize.cultures[ "default" ] = {
		// A unique name for the culture in the form <language code>-<country/region code>
		name: "en",
		// the name of the culture in the english language
		englishName: "English",
		// the name of the culture in its own language
		nativeName: "English",
		// whether the culture uses right-to-left text
		isRTL: false,
		// "language" is used for so-called "specific" cultures.
		// For example, the culture "es-CL" means "Spanish, in Chili".
		// It represents the Spanish-speaking culture as it is in Chili,
		// which might have different formatting rules or even translations
		// than Spanish in Spain. A "neutral" culture is one that is not
		// specific to a region. For example, the culture "es" is the generic
		// Spanish culture, which may be a more generalized version of the language
		// that may or may not be what a specific culture expects.
		// For a specific culture like "es-CL", the "language" field refers to the
		// neutral, generic culture information for the language it is using.
		// This is not always a simple matter of the string before the dash.
		// For example, the "zh-Hans" culture is netural (Simplified Chinese).
		// And the "zh-SG" culture is Simplified Chinese in Singapore, whose lanugage
		// field is "zh-CHS", not "zh".
		// This field should be used to navigate from a specific culture to it's
		// more general, neutral culture. If a culture is already as general as it
		// can get, the language may refer to itself.
		language: "en",
		// numberFormat defines general number formatting rules, like the digits in
		// each grouping, the group separator, and how negative numbers are displayed.
		numberFormat: {
			// [negativePattern]
			// Note, numberFormat.pattern has no "positivePattern" unlike percent and currency,
			// but is still defined as an array for consistency with them.
			//   negativePattern: one of "(n)|-n|- n|n-|n -"
			pattern: [ "-n" ],
			// number of decimal places normally shown
			decimals: 2,
			// string that separates number groups, as in 1,000,000
			",": ",",
			// string that separates a number from the fractional portion, as in 1.99
			".": ".",
			// array of numbers indicating the size of each number group.
			// TODO: more detailed description and example
			groupSizes: [ 3 ],
			// symbol used for positive numbers
			"+": "+",
			// symbol used for negative numbers
			"-": "-",
			// symbol used for NaN (Not-A-Number)
			"NaN": "NaN",
			// symbol used for Negative Infinity
			negativeInfinity: "-Infinity",
			// symbol used for Positive Infinity
			positiveInfinity: "Infinity",
			percent: {
				// [negativePattern, positivePattern]
				//   negativePattern: one of "-n %|-n%|-%n|%-n|%n-|n-%|n%-|-% n|n %-|% n-|% -n|n- %"
				//   positivePattern: one of "n %|n%|%n|% n"
				pattern: [ "-n %", "n %" ],
				// number of decimal places normally shown
				decimals: 2,
				// array of numbers indicating the size of each number group.
				// TODO: more detailed description and example
				groupSizes: [ 3 ],
				// string that separates number groups, as in 1,000,000
				",": ",",
				// string that separates a number from the fractional portion, as in 1.99
				".": ".",
				// symbol used to represent a percentage
				symbol: "%"
			},
			currency: {
				// [negativePattern, positivePattern]
				//   negativePattern: one of "($n)|-$n|$-n|$n-|(n$)|-n$|n-$|n$-|-n $|-$ n|n $-|$ n-|$ -n|n- $|($ n)|(n $)"
				//   positivePattern: one of "$n|n$|$ n|n $"
				pattern: [ "($n)", "$n" ],
				// number of decimal places normally shown
				decimals: 2,
				// array of numbers indicating the size of each number group.
				// TODO: more detailed description and example
				groupSizes: [ 3 ],
				// string that separates number groups, as in 1,000,000
				",": ",",
				// string that separates a number from the fractional portion, as in 1.99
				".": ".",
				// symbol used to represent currency
				symbol: "$"
			}
		},
		// calendars defines all the possible calendars used by this culture.
		// There should be at least one defined with name "standard", and is the default
		// calendar used by the culture.
		// A calendar contains information about how dates are formatted, information about
		// the calendar's eras, a standard set of the date formats,
		// translations for day and month names, and if the calendar is not based on the Gregorian
		// calendar, conversion functions to and from the Gregorian calendar.
		calendars: {
			standard: {
				// name that identifies the type of calendar this is
				name: "Gregorian_USEnglish",
				// separator of parts of a date (e.g. "/" in 11/05/1955)
				"/": "/",
				// separator of parts of a time (e.g. ":" in 05:44 PM)
				":": ":",
				// the first day of the week (0 = Sunday, 1 = Monday, etc)
				firstDay: 0,
				days: {
					// full day names
					names: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
					// abbreviated day names
					namesAbbr: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
					// shortest day names
					namesShort: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ]
				},
				months: {
					// full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
					names: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "" ],
					// abbreviated month names
					namesAbbr: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "" ]
				},
				// AM and PM designators in one of these forms:
				// The usual view, and the upper and lower case versions
				//   [ standard, lowercase, uppercase ]
				// The culture does not use AM or PM (likely all standard date formats use 24 hour time)
				//   null
				AM: [ "AM", "am", "AM" ],
				PM: [ "PM", "pm", "PM" ],
				eras: [
					// eras in reverse chronological order.
					// name: the name of the era in this culture (e.g. A.D., C.E.)
					// start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
					// offset: offset in years from gregorian calendar
					{
						"name": "A.D.",
						"start": null,
						"offset": 0
					}
				],
				// when a two digit year is given, it will never be parsed as a four digit
				// year greater than this year (in the appropriate era for the culture)
				// Set it as a full year (e.g. 2029) or use an offset format starting from
				// the current year: "+19" would correspond to 2029 if the current year 2010.
				twoDigitYearMax: 2029,
				// set of predefined date and time patterns used by the culture
				// these represent the format someone in this culture would expect
				// to see given the portions of the date that are shown.
				patterns: {
					// short date pattern
					d: "M/d/yyyy",
					// long date pattern
					D: "dddd, MMMM dd, yyyy",
					// short time pattern
					t: "h:mm tt",
					// long time pattern
					T: "h:mm:ss tt",
					// long date, short time pattern
					f: "dddd, MMMM dd, yyyy h:mm tt",
					// long date, long time pattern
					F: "dddd, MMMM dd, yyyy h:mm:ss tt",
					// month/day pattern
					M: "MMMM dd",
					// month/year pattern
					Y: "yyyy MMMM",
					// S is a sortable format that does not vary by culture
					S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss"
				}
				// optional fields for each calendar:
				/*
				monthsGenitive:
					Same as months but used when the day preceeds the month.
					Omit if the culture has no genitive distinction in month names.
					For an explaination of genitive months, see http://blogs.msdn.com/michkap/archive/2004/12/25/332259.aspx
				convert:
					Allows for the support of non-gregorian based calendars. This convert object is used to
					to convert a date to and from a gregorian calendar date to handle parsing and formatting.
					The two functions:
						fromGregorian( date )
							Given the date as a parameter, return an array with parts [ year, month, day ]
							corresponding to the non-gregorian based year, month, and day for the calendar.
						toGregorian( year, month, day )
							Given the non-gregorian year, month, and day, return a new Date() object
							set to the corresponding date in the gregorian calendar.
				*/
			}
		},
		// For localized strings
		messages: {}
	};

	Globalize.cultures[ "default" ].calendar = Globalize.cultures[ "default" ].calendars.standard;

	Globalize.cultures.en = Globalize.cultures[ "default" ];

	Globalize.cultureSelector = "en";

	//
	// private variables
	//

	regexHex = /^0x[a-f0-9]+$/i;
	regexInfinity = /^[+\-]?infinity$/i;
	regexParseFloat = /^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/;
	regexTrim = /^\s+|\s+$/g;

	//
	// private JavaScript utility functions
	//

	arrayIndexOf = function( array, item ) {
		if ( array.indexOf ) {
			return array.indexOf( item );
		}
		for ( var i = 0, length = array.length; i < length; i++ ) {
			if ( array[i] === item ) {
				return i;
			}
		}
		return -1;
	};

	endsWith = function( value, pattern ) {
		return value.substr( value.length - pattern.length ) === pattern;
	};

	extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !isFunction(target) ) {
			target = {};
		}

		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( isObject(copy) || (copyIsArray = isArray(copy)) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];

						} else {
							clone = src && isObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	isArray = Array.isArray || function( obj ) {
		return Object.prototype.toString.call( obj ) === "[object Array]";
	};

	isFunction = function( obj ) {
		return Object.prototype.toString.call( obj ) === "[object Function]";
	};

	isObject = function( obj ) {
		return Object.prototype.toString.call( obj ) === "[object Object]";
	};

	startsWith = function( value, pattern ) {
		return value.indexOf( pattern ) === 0;
	};

	trim = function( value ) {
		return ( value + "" ).replace( regexTrim, "" );
	};

	truncate = function( value ) {
		if ( isNaN( value ) ) {
			return NaN;
		}
		return Math[ value < 0 ? "ceil" : "floor" ]( value );
	};

	zeroPad = function( str, count, left ) {
		var l;
		for ( l = str.length; l < count; l += 1 ) {
			str = ( left ? ("0" + str) : (str + "0") );
		}
		return str;
	};

	//
	// private Globalization utility functions
	//

	appendPreOrPostMatch = function( preMatch, strings ) {
		// appends pre- and post- token match strings while removing escaped characters.
		// Returns a single quote count which is used to determine if the token occurs
		// in a string literal.
		var quoteCount = 0,
			escaped = false;
		for ( var i = 0, il = preMatch.length; i < il; i++ ) {
			var c = preMatch.charAt( i );
			switch ( c ) {
				case "\'":
					if ( escaped ) {
						strings.push( "\'" );
					}
					else {
						quoteCount++;
					}
					escaped = false;
					break;
				case "\\":
					if ( escaped ) {
						strings.push( "\\" );
					}
					escaped = !escaped;
					break;
				default:
					strings.push( c );
					escaped = false;
					break;
			}
		}
		return quoteCount;
	};

	expandFormat = function( cal, format ) {
		// expands unspecified or single character date formats into the full pattern.
		format = format || "F";
		var pattern,
			patterns = cal.patterns,
			len = format.length;
		if ( len === 1 ) {
			pattern = patterns[ format ];
			if ( !pattern ) {
				throw "Invalid date format string \'" + format + "\'.";
			}
			format = pattern;
		}
		else if ( len === 2 && format.charAt(0) === "%" ) {
			// %X escape format -- intended as a custom format string that is only one character, not a built-in format.
			format = format.charAt( 1 );
		}
		return format;
	};

	formatDate = function( value, format, culture ) {
		var cal = culture.calendar,
			convert = cal.convert,
			ret;

		if ( !format || !format.length || format === "i" ) {
			if ( culture && culture.name.length ) {
				if ( convert ) {
					// non-gregorian calendar, so we cannot use built-in toLocaleString()
					ret = formatDate( value, cal.patterns.F, culture );
				}
				else {
					var eraDate = new Date( value.getTime() ),
						era = getEra( value, cal.eras );
					eraDate.setFullYear( getEraYear(value, cal, era) );
					ret = eraDate.toLocaleString();
				}
			}
			else {
				ret = value.toString();
			}
			return ret;
		}

		var eras = cal.eras,
			sortable = format === "s";
		format = expandFormat( cal, format );

		// Start with an empty string
		ret = [];
		var hour,
			zeros = [ "0", "00", "000" ],
			foundDay,
			checkedDay,
			dayPartRegExp = /([^d]|^)(d|dd)([^d]|$)/g,
			quoteCount = 0,
			tokenRegExp = getTokenRegExp(),
			converted;

		function padZeros( num, c ) {
			var r, s = num + "";
			if ( c > 1 && s.length < c ) {
				r = ( zeros[c - 2] + s);
				return r.substr( r.length - c, c );
			}
			else {
				r = s;
			}
			return r;
		}

		function hasDay() {
			if ( foundDay || checkedDay ) {
				return foundDay;
			}
			foundDay = dayPartRegExp.test( format );
			checkedDay = true;
			return foundDay;
		}

		function getPart( date, part ) {
			if ( converted ) {
				return converted[ part ];
			}
			switch ( part ) {
				case 0:
					return date.getFullYear();
				case 1:
					return date.getMonth();
				case 2:
					return date.getDate();
				default:
					throw "Invalid part value " + part;
			}
		}

		if ( !sortable && convert ) {
			converted = convert.fromGregorian( value );
		}

		for ( ; ; ) {
			// Save the current index
			var index = tokenRegExp.lastIndex,
				// Look for the next pattern
				ar = tokenRegExp.exec( format );

			// Append the text before the pattern (or the end of the string if not found)
			var preMatch = format.slice( index, ar ? ar.index : format.length );
			quoteCount += appendPreOrPostMatch( preMatch, ret );

			if ( !ar ) {
				break;
			}

			// do not replace any matches that occur inside a string literal.
			if ( quoteCount % 2 ) {
				ret.push( ar[0] );
				continue;
			}

			var current = ar[ 0 ],
				clength = current.length;

			switch ( current ) {
				case "ddd":
					//Day of the week, as a three-letter abbreviation
				case "dddd":
					// Day of the week, using the full name
					var names = ( clength === 3 ) ? cal.days.namesAbbr : cal.days.names;
					ret.push( names[value.getDay()] );
					break;
				case "d":
					// Day of month, without leading zero for single-digit days
				case "dd":
					// Day of month, with leading zero for single-digit days
					foundDay = true;
					ret.push(
						padZeros( getPart(value, 2), clength )
					);
					break;
				case "MMM":
					// Month, as a three-letter abbreviation
				case "MMMM":
					// Month, using the full name
					var part = getPart( value, 1 );
					ret.push(
						( cal.monthsGenitive && hasDay() ) ?
						( cal.monthsGenitive[ clength === 3 ? "namesAbbr" : "names" ][ part ] ) :
						( cal.months[ clength === 3 ? "namesAbbr" : "names" ][ part ] )
					);
					break;
				case "M":
					// Month, as digits, with no leading zero for single-digit months
				case "MM":
					// Month, as digits, with leading zero for single-digit months
					ret.push(
						padZeros( getPart(value, 1) + 1, clength )
					);
					break;
				case "y":
					// Year, as two digits, but with no leading zero for years less than 10
				case "yy":
					// Year, as two digits, with leading zero for years less than 10
				case "yyyy":
					// Year represented by four full digits
					part = converted ? converted[ 0 ] : getEraYear( value, cal, getEra(value, eras), sortable );
					if ( clength < 4 ) {
						part = part % 100;
					}
					ret.push(
						padZeros( part, clength )
					);
					break;
				case "h":
					// Hours with no leading zero for single-digit hours, using 12-hour clock
				case "hh":
					// Hours with leading zero for single-digit hours, using 12-hour clock
					hour = value.getHours() % 12;
					if ( hour === 0 ) hour = 12;
					ret.push(
						padZeros( hour, clength )
					);
					break;
				case "H":
					// Hours with no leading zero for single-digit hours, using 24-hour clock
				case "HH":
					// Hours with leading zero for single-digit hours, using 24-hour clock
					ret.push(
						padZeros( value.getHours(), clength )
					);
					break;
				case "m":
					// Minutes with no leading zero for single-digit minutes
				case "mm":
					// Minutes with leading zero for single-digit minutes
					ret.push(
						padZeros( value.getMinutes(), clength )
					);
					break;
				case "s":
					// Seconds with no leading zero for single-digit seconds
				case "ss":
					// Seconds with leading zero for single-digit seconds
					ret.push(
						padZeros( value.getSeconds(), clength )
					);
					break;
				case "t":
					// One character am/pm indicator ("a" or "p")
				case "tt":
					// Multicharacter am/pm indicator
					part = value.getHours() < 12 ? ( cal.AM ? cal.AM[0] : " " ) : ( cal.PM ? cal.PM[0] : " " );
					ret.push( clength === 1 ? part.charAt(0) : part );
					break;
				case "f":
					// Deciseconds
				case "ff":
					// Centiseconds
				case "fff":
					// Milliseconds
					ret.push(
						padZeros( value.getMilliseconds(), 3 ).substr( 0, clength )
					);
					break;
				case "z":
					// Time zone offset, no leading zero
				case "zz":
					// Time zone offset with leading zero
					hour = value.getTimezoneOffset() / 60;
					ret.push(
						( hour <= 0 ? "+" : "-" ) + padZeros( Math.floor(Math.abs(hour)), clength )
					);
					break;
				case "zzz":
					// Time zone offset with leading zero
					hour = value.getTimezoneOffset() / 60;
					ret.push(
						( hour <= 0 ? "+" : "-" ) + padZeros( Math.floor(Math.abs(hour)), 2 ) +
						// Hard coded ":" separator, rather than using cal.TimeSeparator
						// Repeated here for consistency, plus ":" was already assumed in date parsing.
						":" + padZeros( Math.abs(value.getTimezoneOffset() % 60), 2 )
					);
					break;
				case "g":
				case "gg":
					if ( cal.eras ) {
						ret.push(
							cal.eras[ getEra(value, eras) ].name
						);
					}
					break;
			case "/":
				ret.push( cal["/"] );
				break;
			default:
				throw "Invalid date format pattern \'" + current + "\'.";
			}
		}
		return ret.join( "" );
	};

	// formatNumber
	(function() {
		var expandNumber;

		expandNumber = function( number, precision, formatInfo ) {
			var groupSizes = formatInfo.groupSizes,
				curSize = groupSizes[ 0 ],
				curGroupIndex = 1,
				factor = Math.pow( 10, precision ),
				rounded = Math.round( number * factor ) / factor;

			if ( !isFinite(rounded) ) {
				rounded = number;
			}
			number = rounded;

			var numberString = number+"",
				right = "",
				split = numberString.split( /e/i ),
				exponent = split.length > 1 ? parseInt( split[1], 10 ) : 0;
			numberString = split[ 0 ];
			split = numberString.split( "." );
			numberString = split[ 0 ];
			right = split.length > 1 ? split[ 1 ] : "";

			var l;
			if ( exponent > 0 ) {
				right = zeroPad( right, exponent, false );
				numberString += right.slice( 0, exponent );
				right = right.substr( exponent );
			}
			else if ( exponent < 0 ) {
				exponent = -exponent;
				numberString = zeroPad( numberString, exponent + 1, true );
				right = numberString.slice( -exponent, numberString.length ) + right;
				numberString = numberString.slice( 0, -exponent );
			}

			if ( precision > 0 ) {
				right = formatInfo[ "." ] +
					( (right.length > precision) ? right.slice(0, precision) : zeroPad(right, precision) );
			}
			else {
				right = "";
			}

			var stringIndex = numberString.length - 1,
				sep = formatInfo[ "," ],
				ret = "";

			while ( stringIndex >= 0 ) {
				if ( curSize === 0 || curSize > stringIndex ) {
					return numberString.slice( 0, stringIndex + 1 ) + ( ret.length ? (sep + ret + right) : right );
				}
				ret = numberString.slice( stringIndex - curSize + 1, stringIndex + 1 ) + ( ret.length ? (sep + ret) : "" );

				stringIndex -= curSize;

				if ( curGroupIndex < groupSizes.length ) {
					curSize = groupSizes[ curGroupIndex ];
					curGroupIndex++;
				}
			}

			return numberString.slice( 0, stringIndex + 1 ) + sep + ret + right;
		};

		formatNumber = function( value, format, culture ) {
			if ( !isFinite(value) ) {
				if ( value === Infinity ) {
					return culture.numberFormat.positiveInfinity;
				}
				if ( value === -Infinity ) {
					return culture.numberFormat.negativeInfinity;
				}
				return culture.numberFormat[ "NaN" ];
			}
			if ( !format || format === "i" ) {
				return culture.name.length ? value.toLocaleString() : value.toString();
			}
			format = format || "D";

			var nf = culture.numberFormat,
				number = Math.abs( value ),
				precision = -1,
				pattern;
			if ( format.length > 1 ) precision = parseInt( format.slice(1), 10 );

			var current = format.charAt( 0 ).toUpperCase(),
				formatInfo;

			switch ( current ) {
				case "D":
					pattern = "n";
					number = truncate( number );
					if ( precision !== -1 ) {
						number = zeroPad( "" + number, precision, true );
					}
					if ( value < 0 ) number = "-" + number;
					break;
				case "N":
					formatInfo = nf;
					/* falls through */
				case "C":
					formatInfo = formatInfo || nf.currency;
					/* falls through */
				case "P":
					formatInfo = formatInfo || nf.percent;
					pattern = value < 0 ? formatInfo.pattern[ 0 ] : ( formatInfo.pattern[1] || "n" );
					if ( precision === -1 ) precision = formatInfo.decimals;
					number = expandNumber( number * (current === "P" ? 100 : 1), precision, formatInfo );
					break;
				default:
					throw "Bad number format specifier: " + current;
			}

			var patternParts = /n|\$|-|%/g,
				ret = "";
			for ( ; ; ) {
				var index = patternParts.lastIndex,
					ar = patternParts.exec( pattern );

				ret += pattern.slice( index, ar ? ar.index : pattern.length );

				if ( !ar ) {
					break;
				}

				switch ( ar[0] ) {
					case "n":
						ret += number;
						break;
					case "$":
						ret += nf.currency.symbol;
						break;
					case "-":
						// don't make 0 negative
						if ( /[1-9]/.test(number) ) {
							ret += nf[ "-" ];
						}
						break;
					case "%":
						ret += nf.percent.symbol;
						break;
				}
			}

			return ret;
		};

	}());

	getTokenRegExp = function() {
		// regular expression for matching date and time tokens in format strings.
		return (/\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g);
	};

	getEra = function( date, eras ) {
		if ( !eras ) return 0;
		var start, ticks = date.getTime();
		for ( var i = 0, l = eras.length; i < l; i++ ) {
			start = eras[ i ].start;
			if ( start === null || ticks >= start ) {
				return i;
			}
		}
		return 0;
	};

	getEraYear = function( date, cal, era, sortable ) {
		var year = date.getFullYear();
		if ( !sortable && cal.eras ) {
			// convert normal gregorian year to era-shifted gregorian
			// year by subtracting the era offset
			year -= cal.eras[ era ].offset;
		}
		return year;
	};

	// parseExact
	(function() {
		var expandYear,
			getDayIndex,
			getMonthIndex,
			getParseRegExp,
			outOfRange,
			toUpper,
			toUpperArray;

		expandYear = function( cal, year ) {
			// expands 2-digit year into 4 digits.
			if ( year < 100 ) {
				var now = new Date(),
					era = getEra( now ),
					curr = getEraYear( now, cal, era ),
					twoDigitYearMax = cal.twoDigitYearMax;
				twoDigitYearMax = typeof twoDigitYearMax === "string" ? new Date().getFullYear() % 100 + parseInt( twoDigitYearMax, 10 ) : twoDigitYearMax;
				year += curr - ( curr % 100 );
				if ( year > twoDigitYearMax ) {
					year -= 100;
				}
			}
			return year;
		};

		getDayIndex = function	( cal, value, abbr ) {
			var ret,
				days = cal.days,
				upperDays = cal._upperDays;
			if ( !upperDays ) {
				cal._upperDays = upperDays = [
					toUpperArray( days.names ),
					toUpperArray( days.namesAbbr ),
					toUpperArray( days.namesShort )
				];
			}
			value = toUpper( value );
			if ( abbr ) {
				ret = arrayIndexOf( upperDays[1], value );
				if ( ret === -1 ) {
					ret = arrayIndexOf( upperDays[2], value );
				}
			}
			else {
				ret = arrayIndexOf( upperDays[0], value );
			}
			return ret;
		};

		getMonthIndex = function( cal, value, abbr ) {
			var months = cal.months,
				monthsGen = cal.monthsGenitive || cal.months,
				upperMonths = cal._upperMonths,
				upperMonthsGen = cal._upperMonthsGen;
			if ( !upperMonths ) {
				cal._upperMonths = upperMonths = [
					toUpperArray( months.names ),
					toUpperArray( months.namesAbbr )
				];
				cal._upperMonthsGen = upperMonthsGen = [
					toUpperArray( monthsGen.names ),
					toUpperArray( monthsGen.namesAbbr )
				];
			}
			value = toUpper( value );
			var i = arrayIndexOf( abbr ? upperMonths[1] : upperMonths[0], value );
			if ( i < 0 ) {
				i = arrayIndexOf( abbr ? upperMonthsGen[1] : upperMonthsGen[0], value );
			}
			return i;
		};

		getParseRegExp = function( cal, format ) {
			// converts a format string into a regular expression with groups that
			// can be used to extract date fields from a date string.
			// check for a cached parse regex.
			var re = cal._parseRegExp;
			if ( !re ) {
				cal._parseRegExp = re = {};
			}
			else {
				var reFormat = re[ format ];
				if ( reFormat ) {
					return reFormat;
				}
			}

			// expand single digit formats, then escape regular expression characters.
			var expFormat = expandFormat( cal, format ).replace( /([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1" ),
				regexp = [ "^" ],
				groups = [],
				index = 0,
				quoteCount = 0,
				tokenRegExp = getTokenRegExp(),
				match;

			// iterate through each date token found.
			while ( (match = tokenRegExp.exec(expFormat)) !== null ) {
				var preMatch = expFormat.slice( index, match.index );
				index = tokenRegExp.lastIndex;

				// don't replace any matches that occur inside a string literal.
				quoteCount += appendPreOrPostMatch( preMatch, regexp );
				if ( quoteCount % 2 ) {
					regexp.push( match[0] );
					continue;
				}

				// add a regex group for the token.
				var m = match[ 0 ],
					len = m.length,
					add;
				switch ( m ) {
					case "dddd": case "ddd":
					case "MMMM": case "MMM":
					case "gg": case "g":
						add = "(\\D+)";
						break;
					case "tt": case "t":
						add = "(\\D*)";
						break;
					case "yyyy":
					case "fff":
					case "ff":
					case "f":
						add = "(\\d{" + len + "})";
						break;
					case "dd": case "d":
					case "MM": case "M":
					case "yy": case "y":
					case "HH": case "H":
					case "hh": case "h":
					case "mm": case "m":
					case "ss": case "s":
						add = "(\\d\\d?)";
						break;
					case "zzz":
						add = "([+-]?\\d\\d?:\\d{2})";
						break;
					case "zz": case "z":
						add = "([+-]?\\d\\d?)";
						break;
					case "/":
						add = "(\\/)";
						break;
					default:
						throw "Invalid date format pattern \'" + m + "\'.";
				}
				if ( add ) {
					regexp.push( add );
				}
				groups.push( match[0] );
			}
			appendPreOrPostMatch( expFormat.slice(index), regexp );
			regexp.push( "$" );

			// allow whitespace to differ when matching formats.
			var regexpStr = regexp.join( "" ).replace( /\s+/g, "\\s+" ),
				parseRegExp = { "regExp": regexpStr, "groups": groups };

			// cache the regex for this format.
			return re[ format ] = parseRegExp;
		};

		outOfRange = function( value, low, high ) {
			return value < low || value > high;
		};

		toUpper = function( value ) {
			// "he-IL" has non-breaking space in weekday names.
			return value.split( "\u00A0" ).join( " " ).toUpperCase();
		};

		toUpperArray = function( arr ) {
			var results = [];
			for ( var i = 0, l = arr.length; i < l; i++ ) {
				results[ i ] = toUpper( arr[i] );
			}
			return results;
		};

		parseExact = function( value, format, culture ) {
			// try to parse the date string by matching against the format string
			// while using the specified culture for date field names.
			value = trim( value );
			var cal = culture.calendar,
				// convert date formats into regular expressions with groupings.
				// use the regexp to determine the input format and extract the date fields.
				parseInfo = getParseRegExp( cal, format ),
				match = new RegExp( parseInfo.regExp ).exec( value );
			if ( match === null ) {
				return null;
			}
			// found a date format that matches the input.
			var groups = parseInfo.groups,
				era = null, year = null, month = null, date = null, weekDay = null,
				hour = 0, hourOffset, min = 0, sec = 0, msec = 0, tzMinOffset = null,
				pmHour = false;
			// iterate the format groups to extract and set the date fields.
			for ( var j = 0, jl = groups.length; j < jl; j++ ) {
				var matchGroup = match[ j + 1 ];
				if ( matchGroup ) {
					var current = groups[ j ],
						clength = current.length,
						matchInt = parseInt( matchGroup, 10 );
					switch ( current ) {
						case "dd": case "d":
							// Day of month.
							date = matchInt;
							// check that date is generally in valid range, also checking overflow below.
							if ( outOfRange(date, 1, 31) ) return null;
							break;
						case "MMM": case "MMMM":
							month = getMonthIndex( cal, matchGroup, clength === 3 );
							if ( outOfRange(month, 0, 11) ) return null;
							break;
						case "M": case "MM":
							// Month.
							month = matchInt - 1;
							if ( outOfRange(month, 0, 11) ) return null;
							break;
						case "y": case "yy":
						case "yyyy":
							year = clength < 4 ? expandYear( cal, matchInt ) : matchInt;
							if ( outOfRange(year, 0, 9999) ) return null;
							break;
						case "h": case "hh":
							// Hours (12-hour clock).
							hour = matchInt;
							if ( hour === 12 ) hour = 0;
							if ( outOfRange(hour, 0, 11) ) return null;
							break;
						case "H": case "HH":
							// Hours (24-hour clock).
							hour = matchInt;
							if ( outOfRange(hour, 0, 23) ) return null;
							break;
						case "m": case "mm":
							// Minutes.
							min = matchInt;
							if ( outOfRange(min, 0, 59) ) return null;
							break;
						case "s": case "ss":
							// Seconds.
							sec = matchInt;
							if ( outOfRange(sec, 0, 59) ) return null;
							break;
						case "tt": case "t":
							// AM/PM designator.
							// see if it is standard, upper, or lower case PM. If not, ensure it is at least one of
							// the AM tokens. If not, fail the parse for this format.
							pmHour = cal.PM && ( matchGroup === cal.PM[0] || matchGroup === cal.PM[1] || matchGroup === cal.PM[2] );
							if (
								!pmHour && (
									!cal.AM || ( matchGroup !== cal.AM[0] && matchGroup !== cal.AM[1] && matchGroup !== cal.AM[2] )
								)
							) return null;
							break;
						case "f":
							// Deciseconds.
						case "ff":
							// Centiseconds.
						case "fff":
							// Milliseconds.
							msec = matchInt * Math.pow( 10, 3 - clength );
							if ( outOfRange(msec, 0, 999) ) return null;
							break;
						case "ddd":
							// Day of week.
						case "dddd":
							// Day of week.
							weekDay = getDayIndex( cal, matchGroup, clength === 3 );
							if ( outOfRange(weekDay, 0, 6) ) return null;
							break;
						case "zzz":
							// Time zone offset in +/- hours:min.
							var offsets = matchGroup.split( /:/ );
							if ( offsets.length !== 2 ) return null;
							hourOffset = parseInt( offsets[0], 10 );
							if ( outOfRange(hourOffset, -12, 13) ) return null;
							var minOffset = parseInt( offsets[1], 10 );
							if ( outOfRange(minOffset, 0, 59) ) return null;
							tzMinOffset = ( hourOffset * 60 ) + ( startsWith(matchGroup, "-") ? -minOffset : minOffset );
							break;
						case "z": case "zz":
							// Time zone offset in +/- hours.
							hourOffset = matchInt;
							if ( outOfRange(hourOffset, -12, 13) ) return null;
							tzMinOffset = hourOffset * 60;
							break;
						case "g": case "gg":
							var eraName = matchGroup;
							if ( !eraName || !cal.eras ) return null;
							eraName = trim( eraName.toLowerCase() );
							for ( var i = 0, l = cal.eras.length; i < l; i++ ) {
								if ( eraName === cal.eras[i].name.toLowerCase() ) {
									era = i;
									break;
								}
							}
							// could not find an era with that name
							if ( era === null ) return null;
							break;
					}
				}
			}
			var result = new Date(), defaultYear, convert = cal.convert;
			defaultYear = convert ? convert.fromGregorian( result )[ 0 ] : result.getFullYear();
			if ( year === null ) {
				year = defaultYear;
			}
			else if ( cal.eras ) {
				// year must be shifted to normal gregorian year
				// but not if year was not specified, its already normal gregorian
				// per the main if clause above.
				year += cal.eras[( era || 0 )].offset;
			}
			// set default day and month to 1 and January, so if unspecified, these are the defaults
			// instead of the current day/month.
			if ( month === null ) {
				month = 0;
			}
			if ( date === null ) {
				date = 1;
			}
			// now have year, month, and date, but in the culture's calendar.
			// convert to gregorian if necessary
			if ( convert ) {
				result = convert.toGregorian( year, month, date );
				// conversion failed, must be an invalid match
				if ( result === null ) return null;
			}
			else {
				// have to set year, month and date together to avoid overflow based on current date.
				result.setFullYear( year, month, date );
				// check to see if date overflowed for specified month (only checked 1-31 above).
				if ( result.getDate() !== date ) return null;
				// invalid day of week.
				if ( weekDay !== null && result.getDay() !== weekDay ) {
					return null;
				}
			}
			// if pm designator token was found make sure the hours fit the 24-hour clock.
			if ( pmHour && hour < 12 ) {
				hour += 12;
			}
			result.setHours( hour, min, sec, msec );
			if ( tzMinOffset !== null ) {
				// adjust timezone to utc before applying local offset.
				var adjustedMin = result.getMinutes() - ( tzMinOffset + result.getTimezoneOffset() );
				// Safari limits hours and minutes to the range of -127 to 127.  We need to use setHours
				// to ensure both these fields will not exceed this range.	adjustedMin will range
				// somewhere between -1440 and 1500, so we only need to split this into hours.
				result.setHours( result.getHours() + parseInt(adjustedMin / 60, 10), adjustedMin % 60 );
			}
			return result;
		};
	}());

	parseNegativePattern = function( value, nf, negativePattern ) {
		var neg = nf[ "-" ],
			pos = nf[ "+" ],
			ret;
		switch ( negativePattern ) {
			case "n -":
				neg = " " + neg;
				pos = " " + pos;
				/* falls through */
			case "n-":
				if ( endsWith(value, neg) ) {
					ret = [ "-", value.substr(0, value.length - neg.length) ];
				}
				else if ( endsWith(value, pos) ) {
					ret = [ "+", value.substr(0, value.length - pos.length) ];
				}
				break;
			case "- n":
				neg += " ";
				pos += " ";
				/* falls through */
			case "-n":
				if ( startsWith(value, neg) ) {
					ret = [ "-", value.substr(neg.length) ];
				}
				else if ( startsWith(value, pos) ) {
					ret = [ "+", value.substr(pos.length) ];
				}
				break;
			case "(n)":
				if ( startsWith(value, "(") && endsWith(value, ")") ) {
					ret = [ "-", value.substr(1, value.length - 2) ];
				}
				break;
		}
		return ret || [ "", value ];
	};

	//
	// public instance functions
	//

	Globalize.prototype.findClosestCulture = function( cultureSelector ) {
		return Globalize.findClosestCulture.call( this, cultureSelector );
	};

	Globalize.prototype.format = function( value, format, cultureSelector ) {
		return Globalize.format.call( this, value, format, cultureSelector );
	};

	Globalize.prototype.localize = function( key, cultureSelector ) {
		return Globalize.localize.call( this, key, cultureSelector );
	};

	Globalize.prototype.parseInt = function( value, radix, cultureSelector ) {
		return Globalize.parseInt.call( this, value, radix, cultureSelector );
	};

	Globalize.prototype.parseFloat = function( value, radix, cultureSelector ) {
		return Globalize.parseFloat.call( this, value, radix, cultureSelector );
	};

	Globalize.prototype.culture = function( cultureSelector ) {
		return Globalize.culture.call( this, cultureSelector );
	};

	//
	// public singleton functions
	//

	Globalize.addCultureInfo = function( cultureName, baseCultureName, info ) {

		var base = {},
			isNew = false;

		if ( typeof cultureName !== "string" ) {
			// cultureName argument is optional string. If not specified, assume info is first
			// and only argument. Specified info deep-extends current culture.
			info = cultureName;
			cultureName = this.culture().name;
			base = this.cultures[ cultureName ];
		} else if ( typeof baseCultureName !== "string" ) {
			// baseCultureName argument is optional string. If not specified, assume info is second
			// argument. Specified info deep-extends specified culture.
			// If specified culture does not exist, create by deep-extending default
			info = baseCultureName;
			isNew = ( this.cultures[ cultureName ] == null );
			base = this.cultures[ cultureName ] || this.cultures[ "default" ];
		} else {
			// cultureName and baseCultureName specified. Assume a new culture is being created
			// by deep-extending an specified base culture
			isNew = true;
			base = this.cultures[ baseCultureName ];
		}

		this.cultures[ cultureName ] = extend(true, {},
			base,
			info
		);
		// Make the standard calendar the current culture if it's a new culture
		if ( isNew ) {
			this.cultures[ cultureName ].calendar = this.cultures[ cultureName ].calendars.standard;
		}
	};

	Globalize.findClosestCulture = function( name ) {
		var match;
		if ( !name ) {
			return this.findClosestCulture( this.cultureSelector ) || this.cultures[ "default" ];
		}
		if ( typeof name === "string" ) {
			name = name.split( "," );
		}
		if ( isArray(name) ) {
			var lang,
				cultures = this.cultures,
				list = name,
				i, l = list.length,
				prioritized = [];
			for ( i = 0; i < l; i++ ) {
				name = trim( list[i] );
				var pri, parts = name.split( ";" );
				lang = trim( parts[0] );
				if ( parts.length === 1 ) {
					pri = 1;
				}
				else {
					name = trim( parts[1] );
					if ( name.indexOf("q=") === 0 ) {
						name = name.substr( 2 );
						pri = parseFloat( name );
						pri = isNaN( pri ) ? 0 : pri;
					}
					else {
						pri = 1;
					}
				}
				prioritized.push({ lang: lang, pri: pri });
			}
			prioritized.sort(function( a, b ) {
				if ( a.pri < b.pri ) {
					return 1;
				} else if ( a.pri > b.pri ) {
					return -1;
				}
				return 0;
			});
			// exact match
			for ( i = 0; i < l; i++ ) {
				lang = prioritized[ i ].lang;
				match = cultures[ lang ];
				if ( match ) {
					return match;
				}
			}

			// neutral language match
			for ( i = 0; i < l; i++ ) {
				lang = prioritized[ i ].lang;
				do {
					var index = lang.lastIndexOf( "-" );
					if ( index === -1 ) {
						break;
					}
					// strip off the last part. e.g. en-US => en
					lang = lang.substr( 0, index );
					match = cultures[ lang ];
					if ( match ) {
						return match;
					}
				}
				while ( 1 );
			}

			// last resort: match first culture using that language
			for ( i = 0; i < l; i++ ) {
				lang = prioritized[ i ].lang;
				for ( var cultureKey in cultures ) {
					var culture = cultures[ cultureKey ];
					if ( culture.language == lang ) {
						return culture;
					}
				}
			}
		}
		else if ( typeof name === "object" ) {
			return name;
		}
		return match || null;
	};

	Globalize.format = function( value, format, cultureSelector ) {
		var culture = this.findClosestCulture( cultureSelector );
		if ( value instanceof Date ) {
			value = formatDate( value, format, culture );
		}
		else if ( typeof value === "number" ) {
			value = formatNumber( value, format, culture );
		}
		return value;
	};

	Globalize.localize = function( key, cultureSelector ) {
		return this.findClosestCulture( cultureSelector ).messages[ key ] ||
			this.cultures[ "default" ].messages[ key ];
	};

	Globalize.parseDate = function( value, formats, culture ) {
		culture = this.findClosestCulture( culture );

		var date, prop, patterns;
		if ( formats ) {
			if ( typeof formats === "string" ) {
				formats = [ formats ];
			}
			if ( formats.length ) {
				for ( var i = 0, l = formats.length; i < l; i++ ) {
					var format = formats[ i ];
					if ( format ) {
						date = parseExact( value, format, culture );
						if ( date ) {
							break;
						}
					}
				}
			}
		} else {
			patterns = culture.calendar.patterns;
			for ( prop in patterns ) {
				date = parseExact( value, patterns[prop], culture );
				if ( date ) {
					break;
				}
			}
		}

		return date || null;
	};

	Globalize.parseInt = function( value, radix, cultureSelector ) {
		return truncate( Globalize.parseFloat(value, radix, cultureSelector) );
	};

	Globalize.parseFloat = function( value, radix, cultureSelector ) {
		// radix argument is optional
		if ( typeof radix !== "number" ) {
			cultureSelector = radix;
			radix = 10;
		}

		var culture = this.findClosestCulture( cultureSelector );
		var ret = NaN,
			nf = culture.numberFormat;

		if ( value.indexOf(culture.numberFormat.currency.symbol) > -1 ) {
			// remove currency symbol
			value = value.replace( culture.numberFormat.currency.symbol, "" );
			// replace decimal seperator
			value = value.replace( culture.numberFormat.currency["."], culture.numberFormat["."] );
		}

		//Remove percentage character from number string before parsing
		if ( value.indexOf(culture.numberFormat.percent.symbol) > -1){
			value = value.replace( culture.numberFormat.percent.symbol, "" );
		}

		// remove spaces: leading, trailing and between - and number. Used for negative currency pt-BR
		value = value.replace( / /g, "" );

		// allow infinity or hexidecimal
		if ( regexInfinity.test(value) ) {
			ret = parseFloat( value );
		}
		else if ( !radix && regexHex.test(value) ) {
			ret = parseInt( value, 16 );
		}
		else {

			// determine sign and number
			var signInfo = parseNegativePattern( value, nf, nf.pattern[0] ),
				sign = signInfo[ 0 ],
				num = signInfo[ 1 ];

			// #44 - try parsing as "(n)"
			if ( sign === "" && nf.pattern[0] !== "(n)" ) {
				signInfo = parseNegativePattern( value, nf, "(n)" );
				sign = signInfo[ 0 ];
				num = signInfo[ 1 ];
			}

			// try parsing as "-n"
			if ( sign === "" && nf.pattern[0] !== "-n" ) {
				signInfo = parseNegativePattern( value, nf, "-n" );
				sign = signInfo[ 0 ];
				num = signInfo[ 1 ];
			}

			sign = sign || "+";

			// determine exponent and number
			var exponent,
				intAndFraction,
				exponentPos = num.indexOf( "e" );
			if ( exponentPos < 0 ) exponentPos = num.indexOf( "E" );
			if ( exponentPos < 0 ) {
				intAndFraction = num;
				exponent = null;
			}
			else {
				intAndFraction = num.substr( 0, exponentPos );
				exponent = num.substr( exponentPos + 1 );
			}
			// determine decimal position
			var integer,
				fraction,
				decSep = nf[ "." ],
				decimalPos = intAndFraction.indexOf( decSep );
			if ( decimalPos < 0 ) {
				integer = intAndFraction;
				fraction = null;
			}
			else {
				integer = intAndFraction.substr( 0, decimalPos );
				fraction = intAndFraction.substr( decimalPos + decSep.length );
			}
			// handle groups (e.g. 1,000,000)
			var groupSep = nf[ "," ];
			integer = integer.split( groupSep ).join( "" );
			var altGroupSep = groupSep.replace( /\u00A0/g, " " );
			if ( groupSep !== altGroupSep ) {
				integer = integer.split( altGroupSep ).join( "" );
			}
			// build a natively parsable number string
			var p = sign + integer;
			if ( fraction !== null ) {
				p += "." + fraction;
			}
			if ( exponent !== null ) {
				// exponent itself may have a number patternd
				var expSignInfo = parseNegativePattern( exponent, nf, "-n" );
				p += "e" + ( expSignInfo[0] || "+" ) + expSignInfo[ 1 ];
			}
			if ( regexParseFloat.test(p) ) {
				ret = parseFloat( p );
			}
		}
		return ret;
	};

	Globalize.culture = function( cultureSelector ) {
		// setter
		if ( typeof cultureSelector !== "undefined" ) {
			this.cultureSelector = cultureSelector;
		}
		// getter
		return this.findClosestCulture( cultureSelector ) || this.cultures[ "default" ];
	};

	}( this ));


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6),
	    CustomPropTypes = __webpack_require__(16),
	    compat = __webpack_require__(15),
	    cx = __webpack_require__(14),
	    _ = __webpack_require__(12),
	    $ = __webpack_require__(18);

	module.exports = React.createClass({

	  displayName: "List",

	  mixins: [__webpack_require__(35), __webpack_require__(36), __webpack_require__(37)],

	  propTypes: {
	    data: React.PropTypes.array,
	    onSelect: React.PropTypes.func,
	    onMove: React.PropTypes.func,
	    itemComponent: CustomPropTypes.elementType,

	    selectedIndex: React.PropTypes.number,
	    focusedIndex: React.PropTypes.number,
	    valueField: React.PropTypes.string,
	    textField: React.PropTypes.string,

	    optID: React.PropTypes.string,

	    messages: React.PropTypes.shape({
	      emptyList: React.PropTypes.string
	    }) },

	  getDefaultProps: function () {
	    return {
	      optID: "",
	      onSelect: function () {},
	      data: [],
	      messages: {
	        emptyList: "There are no items in this list"
	      }
	    };
	  },

	  getInitialState: function () {
	    return {};
	  },

	  componentDidMount: function () {
	    this.move();
	  },

	  componentDidUpdate: function (prevProps) {
	    this.move();
	  },

	  render: function () {
	    var _this = this;

	    var _$omit = _.omit(this.props, ["data"]);

	    var className = _$omit.className;
	    var props = babelHelpers.objectWithoutProperties(_$omit, ["className"]);
	    var ItemComponent = this.props.itemComponent;
	    var items;

	    items = !this.props.data.length ? React.createElement(
	      "li",
	      null,
	      this.props.messages.emptyList
	    ) : this.props.data.map(function (item, idx) {
	      var focused = item === _this.props.focused,
	          selected = item === _this.props.selected;

	      return React.createElement(
	        "li",
	        {
	          tabIndex: "-1",
	          key: "item_" + idx,
	          role: "option",
	          id: focused ? _this.props.optID : undefined,
	          "aria-selected": selected,
	          className: cx({
	            "rw-list-option": true,
	            "rw-state-focus": focused,
	            "rw-state-selected": selected }),
	          onClick: _this.props.onSelect.bind(null, item) },
	        ItemComponent ? React.createElement(ItemComponent, { item: item }) : _this._dataText(item)
	      );
	    });

	    return React.createElement(
	      "ul",
	      babelHelpers._extends({}, props, {
	        className: (className || "") + " rw-list",
	        ref: "scrollable",
	        role: "listbox" }),
	      items
	    );
	  },

	  _data: function () {
	    return this.props.data;
	  },

	  move: function () {
	    var list = compat.findDOMNode(this),
	        idx = this._data().indexOf(this.props.focused),
	        selected = list.children[idx];

	    if (!selected) return;

	    this.notify("onMove", [selected, list, this.props.focused]);
	  }

	});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(6),
	    _ = __webpack_require__(12); //uniqueID

	module.exports = {

	  propTypes: {

	    disabled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.oneOf(["disabled"])]),

	    readOnly: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.oneOf(["readOnly"])]) },

	  isDisabled: function () {
	    return this.props.disabled === true || this.props.disabled === "disabled";
	  },

	  isReadOnly: function () {
	    return this.props.readOnly === true || this.props.readOnly === "readonly";
	  },

	  notify: function (handler, args) {
	    this.props[handler] && this.props[handler].apply(null, [].concat(args));
	  },

	  _id: function (suffix) {
	    this._id_ || (this._id_ = _.uniqueId("rw_"));
	    return (this.props.id || this._id_) + suffix;
	  },

	  _maybeHandle: function (handler, disabledOnly) {
	    if (!(this.isDisabled() || !disabledOnly && this.isReadOnly())) return handler;
	    return function () {};
	  } };

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(6),
	    _ = __webpack_require__(12);

	module.exports = {

	  propTypes: {
	    valueField: React.PropTypes.string,
	    textField: React.PropTypes.string },

	  _dataValue: function (item) {
	    var field = this.props.valueField;

	    return field && item && _.has(item, field) ? item[field] : item;
	  },

	  _dataText: function (item) {
	    var field = this.props.textField;

	    return (field && item && _.has(item, field) ? item[field] : item) + "";
	  },

	  _dataIndexOf: function (data, item) {
	    var _this = this;

	    var idx = -1,
	        len = data.length,
	        finder = function (datum) {
	      return _this._valueMatcher(item, datum);
	    };

	    while (++idx < len) if (finder(data[idx])) return idx;

	    return -1;
	  },

	  _valueMatcher: function (a, b) {
	    return _.isShallowEqual(this._dataValue(a), this._dataValue(b));
	  },

	  _dataItem: function (data, item) {
	    var first = data[0],
	        field = this.props.valueField,
	        idx;

	    // make an attempt to see if we were passed in dataItem vs just a valueField value
	    // either an object with the right prop, or a primitive
	    // { valueField: 5 } || "hello" [ "hello" ]
	    if (_.has(item, field) || typeof first === typeof val) return item;

	    idx = this._dataIndexOf(data, this._dataValue(item));

	    if (idx !== -1) return data[idx];

	    return item;
	  }
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(6),
	    _ = __webpack_require__(12),
	    filter = __webpack_require__(38),
	    helper = __webpack_require__(36);

	module.exports = {

	  propTypes: {
	    textField: React.PropTypes.string },

	  first: function () {
	    return this._data()[0];
	  },

	  last: function () {
	    var data = this._data();
	    return data[data.length - 1];
	  },

	  prev: function (item, word) {
	    var data = this._data(),
	        idx = data.indexOf(item);

	    if (idx === -1) idx = data.length;

	    return word ? findPrevInstance(this, data, word, idx) : --idx < 0 ? data[0] : data[idx];
	  },

	  next: function (item, word) {
	    var data = this._data(),
	        idx = data.indexOf(item);

	    return word ? findNextInstance(this, data, word, idx) : ++idx === data.length ? data[data.length - 1] : data[idx];
	  }

	};

	function findNextInstance(ctx, data, word, startIndex) {
	  var matches = filter.startsWith,
	      idx = -1,
	      len = data.length,
	      foundStart,
	      itemText;

	  word = word.toLowerCase();

	  while (++idx < len) {
	    foundStart = foundStart || idx > startIndex;
	    itemText = foundStart && helper._dataText.call(ctx, data[idx]).toLowerCase();

	    if (foundStart && matches(itemText, word)) return data[idx];
	  }
	}

	function findPrevInstance(ctx, data, word, startIndex) {
	  var matches = filter.startsWith,
	      idx = data.length,
	      foundStart,
	      itemText;

	  word = word.toLowerCase();

	  while (--idx >= 0) {
	    foundStart = foundStart || idx < startIndex;
	    itemText = foundStart && helper._dataText.call(ctx, data[idx]).toLowerCase();

	    if (foundStart && matches(itemText, word)) return data[idx];
	  }
	}

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";

	var common = {
	  eq: function (a, b) {
	    return a === b;
	  },
	  neq: function (a, b) {
	    return a !== b;
	  },
	  gt: function (a, b) {
	    return a > b;
	  },
	  gte: function (a, b) {
	    return a >= b;
	  },
	  lt: function (a, b) {
	    return a < b;
	  },
	  lte: function (a, b) {
	    return a <= b;
	  },

	  contains: function (a, b) {
	    return a.indexOf(b) !== -1;
	  },

	  startsWith: function (a, b) {
	    return a.lastIndexOf(b, 0) === 0;
	  },

	  endsWith: function (a, b) {
	    var pos = a.length - b.length,
	        lastIndex = a.indexOf(b, pos);

	    return lastIndex !== -1 && lastIndex === pos;
	  }
	};

	module.exports = common;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6),
	    CustomPropTypes = __webpack_require__(16),
	    compat = __webpack_require__(15),
	    cx = __webpack_require__(14),
	    _ = __webpack_require__(12);

	module.exports = React.createClass({

	  displayName: "List",

	  mixins: [__webpack_require__(35), __webpack_require__(36), __webpack_require__(37)],

	  propTypes: {
	    data: React.PropTypes.array,
	    onSelect: React.PropTypes.func,
	    onMove: React.PropTypes.func,

	    itemComponent: CustomPropTypes.elementType,
	    groupComponent: CustomPropTypes.elementType,

	    selected: React.PropTypes.any,
	    focused: React.PropTypes.any,

	    valueField: React.PropTypes.string,
	    textField: React.PropTypes.string,

	    optID: React.PropTypes.string,

	    groupBy: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.string]),

	    messages: React.PropTypes.shape({
	      emptyList: React.PropTypes.string
	    }) },

	  getDefaultProps: function () {
	    return {
	      optID: "",
	      onSelect: function () {},
	      data: [],
	      messages: {
	        emptyList: "There are no items in this list"
	      }
	    };
	  },

	  getInitialState: function () {
	    var keys = [];

	    return {
	      groups: this._group(this.props.groupBy, this.props.data, keys),

	      sortedKeys: keys
	    };
	  },

	  componentWillReceiveProps: function (nextProps) {
	    var keys = [];

	    if (nextProps.data !== this.props.data || nextProps.groupBy !== this.props.groupBy) this.setState({
	      groups: this._group(nextProps.groupBy, nextProps.data, keys),
	      sortedKeys: keys
	    });
	  },

	  componentDidMount: function (prevProps, prevState) {
	    this.move();
	  },

	  componentDidUpdate: function (prevProps) {
	    this.move();
	  },

	  render: function () {
	    var _this = this;

	    var _$omit = _.omit(this.props, ["data", "selectedIndex"]);

	    var className = _$omit.className;
	    var props = babelHelpers.objectWithoutProperties(_$omit, ["className"]);
	    var groups = this.state.groups;
	    var items = [];
	    var idx = -1;
	    var group;

	    if (this.props.data.length) {
	      items = this.state.sortedKeys.reduce(function (items, key) {
	        group = groups[key];
	        items.push(_this._renderGroupHeader(key));

	        for (var itemIdx = 0; itemIdx < group.length; itemIdx++) items.push(_this._renderItem(key, group[itemIdx], ++idx));

	        return items;
	      }, []);
	    } else items = React.createElement(
	      "li",
	      null,
	      this.props.messages.emptyList
	    );

	    return React.createElement(
	      "ul",
	      babelHelpers._extends({}, props, {
	        className: (className || "") + " rw-list  rw-list-grouped",
	        ref: "scrollable",
	        role: "listbox" }),
	      items
	    );
	  },

	  _renderGroupHeader: function (group) {
	    var ItemComponent = this.props.groupComponent;

	    return React.createElement(
	      "li",
	      {
	        key: "item_" + group,
	        tabIndex: "-1",
	        role: "separator",
	        className: "rw-list-optgroup" },
	      ItemComponent ? React.createElement(ItemComponent, { item: group }) : group
	    );
	  },

	  _renderItem: function (group, item, idx) {
	    var focused = this.props.focused === item,
	        selected = this.props.selected === item,
	        ItemComponent = this.props.itemComponent;

	    //console.log('hi')
	    return React.createElement(
	      "li",
	      {
	        key: "item_" + group + "_" + idx,
	        role: "option",
	        id: focused ? this.props.optID : undefined,
	        "aria-selected": selected,
	        onClick: this.props.onSelect.bind(null, item),
	        className: cx({
	          "rw-state-focus": focused,
	          "rw-state-selected": selected,
	          "rw-list-option": true
	        }) },
	      ItemComponent ? React.createElement(ItemComponent, { item: item }) : this._dataText(item)
	    );
	  },

	  _isIndexOf: function (idx, item) {
	    return this.props.data[idx] === item;
	  },

	  _group: function (groupBy, data, keys) {
	    var iter = typeof groupBy === "function" ? groupBy : function (item) {
	      return item[groupBy];
	    };

	    // the keys array ensures that groups are rendered in the order they came in
	    // which means that if you sort the data array it will render sorted,
	    // so long as you also sorted by group
	    keys = keys || [];

	    return data.reduce(function (grps, item) {
	      var group = iter(item);

	      _.has(grps, group) ? grps[group].push(item) : (keys.push(group), grps[group] = [item]);

	      return grps;
	    }, {});
	  },

	  _data: function () {
	    var groups = this.state.groups;

	    return this.state.sortedKeys.reduce(function (flat, grp) {
	      return flat.concat(groups[grp]);
	    }, []);
	  },

	  move: function () {
	    var selected = this.getItemDOMNode(this.props.focused);

	    if (!selected) return;

	    this.notify("onMove", [selected, compat.findDOMNode(this), this.props.focused]);
	  },

	  getItemDOMNode: function (item) {
	    var list = compat.findDOMNode(this),
	        groups = this.state.groups,
	        idx = -1,
	        itemIdx,
	        child;

	    this.state.sortedKeys.some(function (group) {
	      itemIdx = groups[group].indexOf(item);
	      idx++;

	      if (itemIdx !== -1) return !!(child = list.children[idx + itemIdx + 1]);

	      idx += groups[group].length;
	    });

	    return child;
	  }

	});

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	var METHODS = ["next", "prev", "first", "last"];

	module.exports = function validateListComponent(list) {

	  if ("production" !== process.env.NODE_ENV) {
	    METHODS.forEach(function (method) {
	      return assert(typeof list[method] === "function", "List components must implement a `" + method + "()` method");
	    });
	  }
	};

	function assert(condition, msg) {
	  var error;

	  if (!condition) {
	    error = new Error(msg);
	    error.framesToPop = 1;
	    throw error;
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	var babelHelpers = __webpack_require__(42);
	var React = __webpack_require__(6);
	var invariant = __webpack_require__(9);

	function customPropType(handler, propType, name) {

	  return function (props, propName, componentName, location) {

	    if (props[propName] !== undefined) {
	      if (!props[handler]) return new Error("You have provided a `" + propName + "` prop to " + "`" + name + "` without an `" + handler + "` handler. This will render a read-only field. " + "If the field should be mutable use `" + defaultKey(propName) + "`. Otherwise, set `" + handler + "`");

	      return propType && propType(props, propName, name, location);
	    }
	  };
	}

	var version = React.version.split(".").map(parseFloat);

	function getType(component) {
	  if (version[0] === 0 && version[1] >= 13) return component;

	  return component.type;
	}

	function getLinkName(name) {
	  return name === "value" ? "valueLink" : name === "checked" ? "checkedLink" : null;
	}

	module.exports = function (Component, controlledValues, taps) {
	  var name = Component.displayName || Component.name || "Component",
	      types = {};

	  if (process.env.NODE_ENV !== "production" && getType(Component).propTypes) {
	    types = transform(controlledValues, function (obj, handler, prop) {
	      var type = getType(Component).propTypes[prop];

	      invariant(typeof handler === "string" && handler.trim().length, "Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable", Component.displayName, prop);

	      obj[prop] = customPropType(handler, type, Component.displayName);
	      if (type !== undefined) {
	        obj[defaultKey(prop)] = type;
	      }
	    }, {});
	  }

	  name = name[0].toUpperCase() + name.substr(1);

	  taps = taps || {};

	  return React.createClass({

	    displayName: "Uncontrolled" + name,

	    propTypes: types,

	    getInitialState: function () {
	      var props = this.props,
	          keys = Object.keys(controlledValues);

	      return transform(keys, function (state, key) {
	        state[key] = props[defaultKey(key)];
	      }, {});
	    },

	    shouldComponentUpdate: function () {
	      //let the setState trigger the update
	      return !this._notifying;
	    },

	    render: function () {
	      var _this = this;

	      var newProps = {};
	      var _props = this.props;
	      var valueLink = _props.valueLink;
	      var checkedLink = _props.checkedLink;
	      var props = babelHelpers.objectWithoutProperties(_props, ["valueLink", "checkedLink"]);

	      each(controlledValues, function (handle, propName) {
	        var linkPropName = getLinkName(propName),
	            prop = _this.props[propName];

	        if (linkPropName && !isProp(_this.props, propName) && isProp(_this.props, linkPropName)) {
	          prop = _this.props[linkPropName].value;
	        }

	        newProps[propName] = prop !== undefined ? prop : _this.state[propName];

	        newProps[handle] = setAndNotify.bind(_this, propName);
	      });

	      newProps = babelHelpers._extends({}, props, newProps);

	      //console.log('props: ', newProps)
	      each(taps, function (val, key) {
	        return newProps[key] = chain(_this, val, newProps[key]);
	      });

	      return React.createElement(Component, newProps);
	    }
	  });

	  function setAndNotify(propName, value) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }

	    var linkName = getLinkName(propName),
	        handler = this.props[controlledValues[propName]];
	    //, controlled = handler && isProp(this.props, propName);

	    if (linkName && isProp(this.props, linkName) && !handler) {
	      handler = this.props[linkName].requestChange
	      //propName = propName === 'valueLink' ? 'value' : 'checked'
	      ;
	    }

	    if (handler) {
	      this._notifying = true;
	      handler.call.apply(handler, [this, value].concat(args));
	      this._notifying = false;
	    }

	    this.setState((function () {
	      var _setState = {};
	      _setState[propName] = value;
	      return _setState;
	    })());
	  }

	  function isProp(props, prop) {
	    return props[prop] !== undefined;
	  }
	};

	function defaultKey(key) {
	  return "default" + key.charAt(0).toUpperCase() + key.substr(1);
	}

	function chain(thisArg, a, b) {
	  return function chainedFunction() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    a && a.call.apply(a, [thisArg].concat(args));
	    b && b.call.apply(b, [thisArg].concat(args));
	  };
	}

	function transform(obj, cb, seed) {
	  each(obj, cb.bind(null, seed = seed || (Array.isArray(obj) ? [] : {})));
	  return seed;
	}

	function each(obj, cb, thisArg) {
	  if (Array.isArray(obj)) return obj.forEach(cb, thisArg);

	  for (var key in obj) if (has(obj, key)) cb.call(thisArg, obj[key], key, obj);
	}

	function has(o, k) {
	  return o ? Object.prototype.hasOwnProperty.call(o, k) : false;
	}
	//return !controlled
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === "object") {
	    factory(exports);
	  } else {
	    factory(root.babelHelpers = {});
	  }
	})(this, function (global) {
	  var babelHelpers = global;

	  babelHelpers.objectWithoutProperties = function (obj, keys) {
	    var target = {};

	    for (var i in obj) {
	      if (keys.indexOf(i) >= 0) continue;
	      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	      target[i] = obj[i];
	    }

	    return target;
	  };

	  babelHelpers._extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };
	})

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _require = __webpack_require__(12);

	var has = _require.has;

	module.exports = {

	  componentWillUnmount: function () {
	    var timers = this._timers || {};

	    this._unmounted = true;

	    for (var k in timers) if (has(timers, k)) clearTimeout(timers[k]);
	  },

	  setTimeout: function (key, cb, duration) {
	    var timers = this._timers || (this._timers = Object.create(null));

	    if (this._unmounted) return;

	    clearTimeout(timers[key]);
	    timers[key] = setTimeout(cb, duration);
	  }

	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _ = __webpack_require__(12);

	//backport PureRenderEqual
	module.exports = {

	  shouldComponentUpdate: function (nextProps, nextState) {
	    return !_.isShallowEqual(this.props, nextProps) || !_.isShallowEqual(this.state, nextState);
	  }
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var scrollTo = __webpack_require__(46);

	module.exports = {

	  _scrollTo: function (selected, list, focused) {
	    var state = this._scrollState || (this._scrollState = {}),
	        handler = this.props.onMove,
	        lastVisible = state.visible,
	        lastItem = state.focused,
	        shown,
	        changed;

	    state.visible = !(!list.offsetWidth || !list.offsetHeight);
	    state.focused = focused;

	    changed = lastItem !== focused;
	    shown = state.visible && !lastVisible;

	    if (shown || state.visible && changed) {
	      if (handler) handler(selected, list, focused);else {
	        state.scrollCancel && state.scrollCancel();
	        state.scrollCancel = scrollTo(selected, list);
	      }
	    }
	  } };

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _require = __webpack_require__(20);

	var getOffset = _require.offset;
	var height = _require.height;
	var getScrollParent = __webpack_require__(28);
	var scrollTop = __webpack_require__(29);
	var raf = __webpack_require__(30);

	module.exports = function scrollTo(selected, scrollParent) {
	    var offset = getOffset(selected),
	        poff = { top: 0, left: 0 },
	        list,
	        listScrollTop,
	        selectedTop,
	        isWin,
	        selectedHeight,
	        listHeight,
	        bottom;

	    if (!selected) return;

	    list = scrollParent || getScrollParent(selected);
	    isWin = getWindow(list);
	    listScrollTop = scrollTop(list);

	    listHeight = height(list, true);
	    isWin = getWindow(list);

	    if (!isWin) poff = getOffset(list);

	    offset = {
	        top: offset.top - poff.top,
	        left: offset.left - poff.left,
	        height: offset.height,
	        width: offset.width
	    };

	    selectedHeight = offset.height;
	    selectedTop = offset.top + (isWin ? 0 : listScrollTop);
	    bottom = selectedTop + selectedHeight;

	    listScrollTop = listScrollTop > selectedTop ? selectedTop : bottom > listScrollTop + listHeight ? bottom - listHeight : listScrollTop;

	    var id = raf(function () {
	        return scrollTop(list, listScrollTop);
	    });

	    return function () {
	        return raf.cancel(id);
	    };
	};

	function getWindow(node) {
	    return node === node.window ? node : node.nodeType === 9 && node.defaultView;
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(6);

	module.exports = {

	  propTypes: {
	    isRtl: React.PropTypes.bool
	  },

	  contextTypes: {
	    isRtl: React.PropTypes.bool
	  },

	  childContextTypes: {
	    isRtl: React.PropTypes.bool
	  },

	  getChildContext: function () {
	    return {
	      isRtl: this.props.isRtl || this.context && this.context.isRtl
	    };
	  },

	  isRtl: function () {
	    return !!(this.props.isRtl || this.context && this.context.isRtl);
	  }

	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6),
	    cx = __webpack_require__(14),
	    _ = __webpack_require__(12),
	    filter = __webpack_require__(38),
	    Popup = __webpack_require__(17),
	    Btn = __webpack_require__(49),
	    Input = __webpack_require__(50),
	    compat = __webpack_require__(15),
	    CustomPropTypes = __webpack_require__(16),
	    PlainList = __webpack_require__(34),
	    GroupableList = __webpack_require__(39),
	    validateList = __webpack_require__(40),
	    createUncontrolledWidget = __webpack_require__(41);

	var propTypes = {
	  //-- controlled props -----------
	  value: React.PropTypes.any,
	  onChange: React.PropTypes.func,
	  open: React.PropTypes.bool,
	  onToggle: React.PropTypes.func,
	  //------------------------------------

	  itemComponent: CustomPropTypes.elementType,
	  listComponent: CustomPropTypes.elementType,

	  groupComponent: CustomPropTypes.elementType,
	  groupBy: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.string]),

	  data: React.PropTypes.array,
	  valueField: React.PropTypes.string,
	  textField: React.PropTypes.string,
	  name: React.PropTypes.string,

	  onSelect: React.PropTypes.func,

	  disabled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.oneOf(["disabled"])]),

	  readOnly: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.oneOf(["readOnly"])]),

	  suggest: React.PropTypes.bool,
	  busy: React.PropTypes.bool,

	  dropUp: React.PropTypes.bool,
	  duration: React.PropTypes.number, //popup

	  placeholder: React.PropTypes.string,

	  messages: React.PropTypes.shape({
	    open: React.PropTypes.string,
	    emptyList: React.PropTypes.string,
	    emptyFilter: React.PropTypes.string
	  })
	};

	var ComboBox = React.createClass({

	  displayName: "ComboBox",

	  mixins: [__webpack_require__(35), __webpack_require__(43), __webpack_require__(52), __webpack_require__(36), __webpack_require__(45), __webpack_require__(47)],

	  propTypes: propTypes,

	  getInitialState: function () {
	    var items = this.process(this.props.data, this.props.value),
	        idx = this._dataIndexOf(items, this.props.value);

	    return {
	      selectedItem: items[idx],
	      focusedItem: items[! ~idx ? 0 : idx],
	      processedData: items,
	      open: false
	    };
	  },

	  getDefaultProps: function () {
	    return {
	      data: [],
	      value: "",
	      open: false,
	      suggest: false,
	      filter: false,
	      delay: 500,

	      messages: {
	        open: "open combobox",
	        emptyList: "There are no items in this list",
	        emptyFilter: "The filter returned no results"
	      }
	    };
	  },

	  componentDidMount: function () {
	    validateList(this.refs.list);
	  },

	  shouldComponentUpdate: function (nextProps, nextState) {
	    var isSuggesting = this.refs.input && this.refs.input.isSuggesting(),
	        stateChanged = !_.isShallowEqual(nextState, this.state),
	        valueChanged = !_.isShallowEqual(nextProps, this.props);

	    return isSuggesting || stateChanged || valueChanged;
	  },

	  componentWillReceiveProps: function (nextProps) {
	    var rawIdx = this._dataIndexOf(nextProps.data, nextProps.value),
	        valueItem = rawIdx == -1 ? nextProps.value : nextProps.data[rawIdx],
	        isSuggesting = this.refs.input.isSuggesting(),
	        items = this.process(nextProps.data, nextProps.value, (rawIdx === -1 || isSuggesting) && this._dataText(valueItem)),
	        idx = this._dataIndexOf(items, nextProps.value),
	        focused = this.filterIndexOf(items, this._dataText(valueItem));

	    this._searchTerm = "";

	    this.setState({
	      processedData: items,
	      selectedItem: items[idx],
	      focusedItem: items[idx === -1 ? focused !== -1 ? focused : 0 // focus the closest match
	      : idx]
	    });
	  },

	  render: function () {
	    var _this = this;

	    var _$omit = _.omit(this.props, Object.keys(propTypes));

	    var className = _$omit.className;
	    var props = babelHelpers.objectWithoutProperties(_$omit, ["className"]);
	    var valueItem = this._dataItem(this._data(), this.props.value);
	    var items = this._data();
	    var listID = this._id("_listbox");
	    var optID = this._id("_option");
	    var dropUp = this.props.dropUp;
	    var List = this.props.listComponent || this.props.groupBy && GroupableList || PlainList;
	    var completeType = this.props.suggest ? this.props.filter ? "both" : "inline" : this.props.filter ? "list" : "";

	    return React.createElement(
	      "div",
	      babelHelpers._extends({}, props, {
	        ref: "element",
	        role: "combobox",
	        onKeyDown: this._maybeHandle(this._keyDown),
	        onFocus: this._maybeHandle(this._focus.bind(null, true), true),
	        onBlur: this._focus.bind(null, false),
	        tabIndex: "-1",
	        className: cx(className, "rw-combobox", "rw-widget", (function () {
	          var _cx = {};
	          _cx["rw-state-focus"] = _this.state.focused;
	          _cx["rw-state-disabled"] = _this.props.disabled;
	          _cx["rw-state-readonly"] = _this.props.readOnly;
	          _cx["rw-rtl"] = _this.isRtl();
	          _cx["rw-open" + (dropUp ? "-up" : "")] = _this.props.open;
	          return _cx;
	        })()) }),
	      React.createElement(
	        Btn,
	        {
	          tabIndex: "-1",
	          className: "rw-select",
	          onClick: this._maybeHandle(this.toggle),
	          disabled: !!(this.props.disabled || this.props.readOnly) },
	        React.createElement(
	          "i",
	          { className: "rw-i rw-i-caret-down" + (this.props.busy ? " rw-loading" : "") },
	          React.createElement(
	            "span",
	            { className: "rw-sr" },
	            this.props.messages.open
	          )
	        )
	      ),
	      React.createElement(Input, {
	        ref: "input",
	        type: "text",
	        suggest: this.props.suggest,
	        name: this.props.name,
	        "aria-owns": listID,
	        "aria-busy": !!this.props.busy,
	        "aria-autocomplete": completeType,
	        "aria-activedescendent": this.props.open ? optID : undefined,
	        "aria-expanded": this.props.open,
	        "aria-haspopup": true,
	        placeholder: this.props.placeholder,
	        disabled: this.props.disabled,
	        readOnly: this.props.readOnly,
	        className: "rw-input",
	        value: this._dataText(valueItem),
	        onChange: this._inputTyping,
	        onKeyDown: this._inputKeyDown }),
	      React.createElement(
	        Popup,
	        babelHelpers._extends({}, _.pick(this.props, Object.keys(compat.type(Popup).propTypes)), {
	          onOpening: function () {
	            return _this.refs.list.forceUpdate();
	          },
	          onRequestClose: this.close }),
	        React.createElement(
	          "div",
	          null,
	          React.createElement(List, babelHelpers._extends({ ref: "list"
	          }, _.pick(this.props, Object.keys(compat.type(List).propTypes)), {
	            id: listID,
	            optID: optID,
	            "aria-hidden": !this.props.open,
	            "aria-live": completeType && "polite",
	            data: items,
	            selected: this.state.selectedItem,
	            focused: this.state.focusedItem,
	            onSelect: this._maybeHandle(this._onSelect),
	            onMove: this._scrollTo,
	            messages: {
	              emptyList: this.props.data.length ? this.props.messages.emptyFilter : this.props.messages.emptyList
	            } }))
	        )
	      )
	    );
	  },

	  _onSelect: function (data) {
	    this.close();
	    this.notify("onSelect", data);
	    this.change(data);
	    this._focus(true);
	  },

	  _inputKeyDown: function (e) {
	    this._deleting = e.key === "Backspace" || e.key === "Delete";
	    this._isTyping = true;
	  },

	  _inputTyping: function (e) {
	    var _this = this;

	    var self = this,
	        shouldSuggest = !!this.props.suggest,
	        strVal = e.target.value,
	        suggestion,
	        data;

	    suggestion = this._deleting || !shouldSuggest ? strVal : this.suggest(this._data(), strVal);

	    suggestion = suggestion || strVal;

	    data = _.find(self.props.data, function (item) {
	      return _this._dataText(item).toLowerCase() === suggestion.toLowerCase();
	    });

	    this.change(!this._deleting && data ? data : strVal, true);

	    this.open();
	  },

	  _focus: function (focused, e) {
	    var _this = this;

	    clearTimeout(this.timer);
	    !focused && this.refs.input.accept(); //not suggesting anymore

	    this.timer = setTimeout(function () {
	      if (focused) _this.refs.input.focus();else _this.close();

	      if (focused !== _this.state.focused) {
	        _this.notify(focused ? "onFocus" : "onBlur", e);
	        _this.setState({ focused: focused });
	      }
	    }, 0);
	  },

	  _keyDown: function (e) {
	    var self = this,
	        key = e.key,
	        alt = e.altKey,
	        list = this.refs.list,
	        focusedItem = this.state.focusedItem,
	        selectedItem = this.state.selectedItem,
	        isOpen = this.props.open;

	    if (key === "End") if (isOpen) this.setState({ focusedItem: list.last() });else select(list.last(), true);else if (key === "Home") if (isOpen) this.setState({ focusedItem: list.first() });else select(list.first(), true);else if (key === "Escape" && isOpen) this.close();else if (key === "Enter" && isOpen) {
	      this.close();
	      select(this.state.focusedItem, true);
	    } else if (key === "ArrowDown") {
	      if (alt) this.open();else {
	        if (isOpen) this.setState({ focusedItem: list.next(focusedItem) });else select(list.next(selectedItem), true);
	      }
	    } else if (key === "ArrowUp") {
	      if (alt) this.close();else {
	        if (isOpen) this.setState({ focusedItem: list.prev(focusedItem) });else select(list.prev(selectedItem), true);
	      }
	    }

	    this.notify("onKeyDown", [e]);

	    function select(item, fromList) {
	      if (!item) return self.change(compat.findDOMNode(self.refs.input).value, false);

	      self.refs.input.accept(true); //removes caret

	      if (fromList) self.notify("onSelect", item);

	      self.change(item, false);
	    }
	  },

	  change: function (data, typing) {
	    this._typedChange = !!typing;
	    this.notify("onChange", data);
	  },

	  open: function () {
	    if (!this.props.open) this.notify("onToggle", true);
	  },

	  close: function () {
	    if (this.props.open) this.notify("onToggle", false);
	  },

	  toggle: function (e) {
	    this._focus(true);

	    this.props.open ? this.close() : this.open();
	  },

	  suggest: function (data, value) {
	    var word = this._dataText(value),
	        matcher = filter.startsWith,
	        suggestion = typeof value === "string" ? _.find(data, finder, this) : value;

	    if (suggestion && (!this.state || !this.state.deleting)) return this._dataText(suggestion);

	    return "";

	    function finder(item) {
	      return matcher(this._dataText(item).toLowerCase(), word.toLowerCase());
	    }
	  },

	  _data: function () {
	    return this.state.processedData;
	  },

	  process: function (data, values, searchTerm) {
	    if (this.props.filter && searchTerm) data = this.filter(data, searchTerm);

	    return data;
	  }
	});

	module.exports = createUncontrolledWidget(ComboBox, { open: "onToggle", value: "onChange" });

	module.exports.BaseComboBox = ComboBox;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6);
	var cn = __webpack_require__(14);
	module.exports = React.createClass({
	  displayName: "exports",

	  render: function () {
	    var _props = this.props;
	    var className = _props.className;
	    var children = _props.children;
	    var props = babelHelpers.objectWithoutProperties(_props, ["className", "children"]);

	    return React.createElement(
	      "button",
	      babelHelpers._extends({}, props, { type: "button", className: cn(className, "rw-btn") }),
	      children
	    );
	  }
	});

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6),
	    caretPos = __webpack_require__(51),
	    compat = __webpack_require__(15);

	module.exports = React.createClass({
	  displayName: "exports",

	  propTypes: {
	    value: React.PropTypes.string,
	    onChange: React.PropTypes.func.isRequired
	  },

	  componentDidUpdate: function () {
	    var input = compat.findDOMNode(this),
	        val = this.props.value;

	    if (this.isSuggesting()) {
	      var start = val.toLowerCase().indexOf(this._last.toLowerCase()) + this._last.length,
	          end = val.length - start;

	      if (start >= 0) {
	        caretPos(input, start, start + end);
	      }
	    }
	  },

	  getDefaultProps: function () {
	    return {
	      value: ""
	    };
	  },

	  render: function () {
	    return React.createElement("input", babelHelpers._extends({}, this.props, {
	      type: "text",
	      className: this.props.className + " rw-input",
	      onKeyDown: this.props.onKeyDown,
	      onChange: this._change,
	      value: this.props.value == null ? "" : this.props.value }));
	  },

	  isSuggesting: function () {
	    var val = this.props.value,
	        isSuggestion = this._last != null && val.toLowerCase().indexOf(this._last.toLowerCase()) !== -1;

	    return this.props.suggest && isSuggestion;
	  },

	  accept: function (removeCaret) {
	    var val = compat.findDOMNode(this).value || "",
	        end = val.length;

	    this._last = null;
	    removeCaret && caretPos(compat.findDOMNode(this), end, end);
	  },

	  _change: function (e) {
	    var val = e.target.value;
	    this._last = val;
	    this.props.onChange(e, val);
	  },

	  focus: function () {
	    compat.findDOMNode(this).focus();
	  }
	});

/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	module.exports = function caret(el, start, end) {

	  if (start === undefined) return get(el);

	  set(el, start, end);
	};

	function get(el) {
	  var start, end, rangeEl, clone;

	  if (el.selectionStart !== undefined) {
	    start = el.selectionStart;
	    end = el.selectionEnd;
	  } else {
	    try {
	      el.focus();
	      rangeEl = el.createTextRange();
	      clone = rangeEl.duplicate();

	      rangeEl.moveToBookmark(document.selection.createRange().getBookmark());
	      clone.setEndPoint("EndToStart", rangeEl);

	      start = clone.text.length;
	      end = start + rangeEl.text.length;
	    } catch (e) {}
	  }

	  return { start: start, end: end };
	}

	function set(el, start, end) {
	  var rangeEl;

	  try {
	    if (el.selectionStart !== undefined) {
	      el.focus();
	      el.setSelectionRange(start, end);
	    } else {
	      el.focus();
	      rangeEl = el.createTextRange();
	      rangeEl.collapse(true);
	      rangeEl.moveStart("character", start);
	      rangeEl.moveEnd("character", end - start);
	      rangeEl.select();
	    }
	  } catch (e) {}
	}
	/* not focused or not visible */ /* not focused or not visible */

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(6),
	    filters = __webpack_require__(38),
	    helper = __webpack_require__(36);

	var filterTypes = Object.keys(filters).filter(function (i) {
	  return i !== "filter";
	});

	module.exports = {

	  propTypes: {
	    data: React.PropTypes.array,
	    value: React.PropTypes.any,
	    filter: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.oneOf(filterTypes.concat(false))]),
	    caseSensitive: React.PropTypes.bool,
	    minLength: React.PropTypes.number },

	  getDefaultProps: function () {
	    return {
	      caseSensitive: false,
	      minLength: 1
	    };
	  },

	  filterIndexOf: function (items, searchTerm) {
	    var idx = -1,
	        matches = typeof this.props.filter === "function" ? this.props.filter : getFilter(filters[this.props.filter || "eq"], searchTerm, this);

	    if (!searchTerm || !searchTerm.trim() || this.props.filter && searchTerm.length < (this.props.minLength || 1)) return -1;

	    items.every(function (item, i) {
	      if (matches(item, searchTerm)) return (idx = i, false);

	      return true;
	    });

	    return idx;
	  },

	  filter: function (items, searchTerm) {
	    var matches = typeof this.props.filter === "string" ? getFilter(filters[this.props.filter], searchTerm, this) : this.props.filter;

	    if (!matches || !searchTerm || !searchTerm.trim() || searchTerm.length < (this.props.minLength || 1)) return items;

	    return items.filter(function (item) {
	      return matches(item, searchTerm);
	    });
	  }
	};

	function getFilter(matcher, searchTerm, ctx) {
	  searchTerm = !ctx.caseSensitive ? searchTerm.toLowerCase() : searchTerm;

	  return function (item) {
	    var val = helper._dataText.call(ctx, item);

	    if (!ctx.caseSensitive) val = val.toLowerCase();

	    return matcher(val, searchTerm);
	  };
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6),
	    cx = __webpack_require__(14),
	    compat = __webpack_require__(15),
	    Header = __webpack_require__(54),
	    Footer = __webpack_require__(56),
	    Month = __webpack_require__(59),
	    Year = __webpack_require__(62),
	    Decade = __webpack_require__(63),
	    Century = __webpack_require__(64),
	    CustomPropTypes = __webpack_require__(16),
	    createUncontrolledWidget = __webpack_require__(41),
	    SlideTransition = __webpack_require__(65),
	    dates = __webpack_require__(57),
	    constants = __webpack_require__(60),
	    _ = __webpack_require__(12); //values, omit

	var dir = constants.directions,
	    values = function (obj) {
	  return Object.keys(obj).map(function (k) {
	    return obj[k];
	  });
	},
	    invert = function (obj) {
	  return _.transform(obj, function (o, val, key) {
	    o[val] = key;
	  }, {});
	};

	var views = constants.calendarViews,
	    VIEW_OPTIONS = values(views),
	    ALT_VIEW = invert(constants.calendarViewHierarchy),
	    NEXT_VIEW = constants.calendarViewHierarchy,
	    VIEW_UNIT = constants.calendarViewUnits,
	    VIEW = (function () {
	  var _VIEW = {};
	  _VIEW[views.MONTH] = Month;
	  _VIEW[views.YEAR] = Year;
	  _VIEW[views.DECADE] = Decade;
	  _VIEW[views.CENTURY] = Century;
	  return _VIEW;
	})();

	var MULTIPLIER = (function () {
	  var _MULTIPLIER = {};
	  _MULTIPLIER[views.YEAR] = 1;
	  _MULTIPLIER[views.DECADE] = 10;
	  _MULTIPLIER[views.CENTURY] = 100;
	  return _MULTIPLIER;
	})();

	var VIEW_FORMATS = (function () {
	  var _VIEW_FORMATS = {};
	  _VIEW_FORMATS[views.MONTH] = "dateFormat";
	  _VIEW_FORMATS[views.YEAR] = "monthFormat";
	  _VIEW_FORMATS[views.DECADE] = "yearFormat";
	  _VIEW_FORMATS[views.CENTURY] = "decadeFormat";
	  return _VIEW_FORMATS;
	})();

	var propTypes = {

	  onChange: React.PropTypes.func,
	  value: React.PropTypes.instanceOf(Date),

	  min: React.PropTypes.instanceOf(Date),
	  max: React.PropTypes.instanceOf(Date),

	  initialView: React.PropTypes.oneOf(VIEW_OPTIONS),

	  finalView: function (props, propname, componentName) {
	    var err = React.PropTypes.oneOf(VIEW_OPTIONS)(props, propname, componentName);

	    if (err) return err;
	    if (VIEW_OPTIONS.indexOf(props[propname]) < VIEW_OPTIONS.indexOf(props.initialView)) return new Error(("The `" + propname + "` prop: `" + props[propname] + "` cannot be 'lower' than the `initialView` \n                        prop. This creates a range that cannot be rendered.").replace(/\n\t/g, ""));
	  },

	  disabled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.oneOf(["disabled"])]),

	  readOnly: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.oneOf(["readOnly"])]),

	  culture: React.PropTypes.string,

	  footer: React.PropTypes.bool,

	  headerFormat: CustomPropTypes.localeFormat,
	  footerFormat: CustomPropTypes.localeFormat,

	  dayFormat: CustomPropTypes.localeFormat,
	  dateFormat: CustomPropTypes.localeFormat,
	  monthFormat: CustomPropTypes.localeFormat,
	  yearFormat: CustomPropTypes.localeFormat,
	  decadeFormat: CustomPropTypes.localeFormat,
	  centuryFormat: CustomPropTypes.localeFormat,

	  messages: React.PropTypes.shape({
	    moveBack: React.PropTypes.string,
	    moveForward: React.PropTypes.string })
	};

	var Calendar = React.createClass({

	  displayName: "Calendar",

	  mixins: [__webpack_require__(35), __webpack_require__(43), __webpack_require__(44), __webpack_require__(47)],

	  propTypes: propTypes,

	  getInitialState: function () {
	    var value = this.inRangeValue(this.props.value);

	    return {
	      selectedIndex: 0,
	      view: this.props.initialView || "month",
	      currentDate: value ? new Date(value) : this.inRangeValue(new Date())
	    };
	  },

	  getDefaultProps: function () {
	    return {

	      value: null,
	      min: new Date(1900, 0, 1),
	      max: new Date(2099, 11, 31),

	      initialView: "month",
	      finalView: "century",

	      tabIndex: "0",
	      footer: false,

	      headerFormat: dates.formats.MONTH_YEAR,
	      footerFormat: dates.formats.FOOTER,

	      dayFormat: dates.shortDay,
	      dateFormat: dates.formats.DAY_OF_MONTH,
	      monthFormat: dates.formats.MONTH_NAME_ABRV,
	      yearFormat: dates.formats.YEAR,

	      decadeFormat: function (dt, culture) {
	        return "" + dates.format(dt, dates.formats.YEAR, culture) + " - " + dates.format(dates.endOf(dt, "decade"), dates.formats.YEAR, culture);
	      },

	      centuryFormat: function (dt, culture) {
	        return "" + dates.format(dt, dates.formats.YEAR, culture) + " - " + dates.format(dates.endOf(dt, "century"), dates.formats.YEAR, culture);
	      },

	      messages: msgs({})
	    };
	  },

	  componentWillReceiveProps: function (nextProps) {
	    var bottom = VIEW_OPTIONS.indexOf(nextProps.initialView),
	        top = VIEW_OPTIONS.indexOf(nextProps.finalView),
	        current = VIEW_OPTIONS.indexOf(this.state.view),
	        view = this.state.view,
	        val = this.inRangeValue(nextProps.value);

	    if (current < bottom) this.setState({ view: view = nextProps.initialView });else if (current > top) this.setState({ view: view = nextProps.finalView });

	    //if the value changes reset views to the new one
	    if (!dates.eq(val, dateOrNull(this.props.value), VIEW_UNIT[view])) this.setState({
	      currentDate: val ? new Date(val) : new Date()
	    });
	  },

	  render: function () {
	    var _this = this;

	    var _$omit = _.omit(this.props, Object.keys(propTypes));

	    var className = _$omit.className;
	    var props = babelHelpers.objectWithoutProperties(_$omit, ["className"]);
	    var View = VIEW[this.state.view];
	    var viewProps = _.pick(this.props, Object.keys(compat.type(View).propTypes));
	    var unit = this.state.view;
	    var messages = msgs(this.props.messages);

	    var disabled = this.props.disabled || this.props.readOnly;
	    var date = this.state.currentDate;
	    var todaysDate = new Date();
	    var todayNotInRange = !dates.inRange(todaysDate, this.props.min, this.props.max, unit);
	    var labelId = this._id("_view_label");
	    var key = this.state.view + "_" + dates[this.state.view](date);
	    var id = this._id("_view");

	    return React.createElement(
	      "div",
	      babelHelpers._extends({}, props, {
	        onKeyDown: this._keyDown,
	        onFocus: this._maybeHandle(this._focus.bind(null, true), true),
	        onBlur: this._focus.bind(null, false),
	        className: cx(className, "rw-calendar", "rw-widget", {
	          "rw-state-focus": this.state.focused,
	          "rw-state-disabled": this.props.disabled,
	          "rw-state-readonly": this.props.readOnly,
	          "rw-rtl": this.isRtl()
	        }) }),
	      React.createElement(Header, {
	        label: this._label(),
	        labelId: labelId,
	        messages: messages,
	        upDisabled: disabled || this.state.view === this.props.finalView,
	        prevDisabled: disabled || !dates.inRange(this.nextDate(dir.LEFT), this.props.min, this.props.max, unit),
	        nextDisabled: disabled || !dates.inRange(this.nextDate(dir.RIGHT), this.props.min, this.props.max, unit),
	        onViewChange: this._maybeHandle(this.navigate.bind(null, dir.UP, null)),
	        onMoveLeft: this._maybeHandle(this.navigate.bind(null, dir.LEFT, null)),
	        onMoveRight: this._maybeHandle(this.navigate.bind(null, dir.RIGHT, null)) }),
	      React.createElement(
	        SlideTransition,
	        {
	          ref: "animation",
	          duration: props.duration,
	          direction: this.state.slideDirection,
	          onAnimate: function () {
	            return _this._focus(true);
	          } },
	        React.createElement(View, babelHelpers._extends({}, viewProps, {
	          tabIndex: "-1",
	          ref: "currentView",
	          key: key,
	          id: id,
	          "aria-labelledby": labelId,
	          selectedDate: this.props.value,
	          today: todaysDate,
	          value: this.state.currentDate,
	          onChange: this._maybeHandle(this.change),
	          onKeyDown: this._maybeHandle(this._keyDown),
	          onMoveLeft: this._maybeHandle(this.navigate.bind(null, dir.LEFT)),
	          onMoveRight: this._maybeHandle(this.navigate.bind(null, dir.RIGHT)) }))
	      ),
	      this.props.footer && React.createElement(Footer, {
	        value: todaysDate,
	        format: this.props.footerFormat,
	        culture: this.props.culture,
	        disabled: this.props.disabled || todayNotInRange,
	        readOnly: this.props.readOnly,
	        onClick: this._maybeHandle(this.select)
	      })
	    );
	  },

	  navigate: function (direction, date) {
	    var view = this.state.view,
	        slideDir = direction === dir.LEFT || direction === dir.UP ? "right" : "left";

	    if (!date) date = [dir.LEFT, dir.RIGHT].indexOf(direction) !== -1 ? this.nextDate(direction) : this.state.currentDate;

	    if (direction === dir.DOWN) view = ALT_VIEW[view] || view;

	    if (direction === dir.UP) view = NEXT_VIEW[view] || view;

	    if (this.isValidView(view) && dates.inRange(date, this.props.min, this.props.max, view)) {
	      this._focus(true, "nav");

	      this.setState({
	        currentDate: date,
	        slideDirection: slideDir,
	        view: view
	      });
	    }
	  },

	  _focus: function (focused, e) {
	    var _this = this;

	    if (+this.props.tabIndex === -1) return;

	    this.setTimeout("focus", function () {

	      if (focused) compat.findDOMNode(_this).focus();

	      if (focused !== _this.state.focused) {
	        _this.notify(focused ? "onFocus" : "onBlur", e);
	        _this.setState({ focused: focused });
	      }
	    });
	  },

	  change: function (date) {
	    var _this = this;

	    setTimeout(function () {
	      return _this._focus(true);
	    });

	    if (this.props.onChange && this.state.view === this.props.initialView) return this.notify("onChange", date);

	    this.navigate(dir.DOWN, date);
	  },

	  select: function (date) {
	    var view = this.props.initialView,
	        slideDir = view !== this.state.view || dates.gt(date, this.state.currentDate) ? "left" // move down to a the view
	    : "right";

	    this.notify("onChange", date);

	    if (this.isValidView(view) && dates.inRange(date, this.props.min, this.props.max, view)) {
	      this._focus(true, "nav");

	      this.setState({
	        currentDate: date,
	        slideDirection: slideDir,
	        view: view
	      });
	    }
	  },

	  nextDate: function (direction) {
	    var method = direction === dir.LEFT ? "subtract" : "add",
	        view = this.state.view,
	        unit = view === views.MONTH ? view : views.YEAR,
	        multi = MULTIPLIER[view] || 1;

	    return dates[method](this.state.currentDate, 1 * multi, unit);
	  },

	  _keyDown: function (e) {
	    var ctrl = e.ctrlKey,
	        key = e.key;

	    if (ctrl) {
	      if (key === "ArrowDown") {
	        e.preventDefault();
	        this.navigate(dir.DOWN);
	      }
	      if (key === "ArrowUp") {
	        e.preventDefault();
	        this.navigate(dir.UP);
	      }
	      if (key === "ArrowLeft") {
	        e.preventDefault();
	        this.navigate(dir.LEFT);
	      }
	      if (key === "ArrowRight") {
	        e.preventDefault();
	        this.navigate(dir.RIGHT);
	      }
	    } else {
	      this.refs.currentView._keyDown && this.refs.currentView._keyDown(e);
	    }

	    this.notify("onKeyDown", [e]);
	  },

	  _label: function () {
	    var _props = this.props;
	    var culture = _props.culture;
	    var props = babelHelpers.objectWithoutProperties(_props, ["culture"]);
	    var view = this.state.view;
	    var dt = this.state.currentDate;

	    if (view === "month") return dates.format(dt, props.headerFormat, culture);else if (view === "year") return dates.format(dt, props.yearFormat, culture);else if (view === "decade") return dates.format(dates.startOf(dt, "decade"), props.decadeFormat, culture);else if (view === "century") return dates.format(dates.startOf(dt, "century"), props.centuryFormat, culture);
	  },

	  inRangeValue: function (_value) {
	    var value = dateOrNull(_value);

	    if (value === null) return value;

	    return dates.max(dates.min(value, this.props.max), this.props.min);
	  },

	  isValidView: function (next) {
	    var bottom = VIEW_OPTIONS.indexOf(this.props.initialView),
	        top = VIEW_OPTIONS.indexOf(this.props.finalView),
	        current = VIEW_OPTIONS.indexOf(next);

	    return current >= bottom && current <= top;
	  }
	});

	function dateOrNull(dt) {
	  if (dt && !isNaN(dt.getTime())) return dt;
	  return null;
	}

	function msgs(msgs) {
	  return babelHelpers._extends({
	    moveBack: "navigate back",
	    moveForward: "navigate forward" }, msgs);
	}

	function formats(obj) {
	  return babelHelpers._extends({
	    headerFormat: dates.formats.MONTH_YEAR,
	    dateFormat: dates.formats.DAY_OF_MONTH,
	    monthFormat: dates.formats.MONTH_NAME_ABRV,
	    yearFormat: dates.formats.YEAR,

	    decadeFormat: function (dt, culture) {
	      return "" + dates.format(dt, dates.formats.YEAR, culture) + " - " + dates.format(dates.endOf(dt, "decade"), dates.formats.YEAR, culture);
	    },

	    centuryFormat: function (dt, culture) {
	      return "" + dates.format(dt, dates.formats.YEAR, culture) + " - " + dates.format(dates.endOf(dt, "century"), dates.formats.YEAR, culture);
	    } }, obj);
	}

	module.exports = createUncontrolledWidget(Calendar, { value: "onChange" });

	module.exports.BaseCalendar = Calendar;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(6),
	    Btn = __webpack_require__(49);

	module.exports = React.createClass({
	  displayName: "exports",

	  propTypes: {
	    label: React.PropTypes.string.isRequired,
	    labelId: React.PropTypes.string,

	    upDisabled: React.PropTypes.bool.isRequired,
	    prevDisabled: React.PropTypes.bool.isRequired,
	    nextDisabled: React.PropTypes.bool.isRequired,
	    onViewChange: React.PropTypes.func.isRequired,
	    onMoveLeft: React.PropTypes.func.isRequired,
	    onMoveRight: React.PropTypes.func.isRequired,

	    messages: React.PropTypes.shape({
	      moveBack: React.PropTypes.string,
	      moveForward: React.PropTypes.string
	    })
	  },

	  mixins: [__webpack_require__(44), __webpack_require__(55)],

	  getDefaultProps: function () {
	    return {
	      messages: {
	        moveBack: "navigate back",
	        moveForward: "navigate forward" }
	    };
	  },

	  render: function () {
	    var rtl = this.isRtl();

	    return React.createElement(
	      "div",
	      { className: "rw-header" },
	      React.createElement(
	        Btn,
	        { className: "rw-btn-left",
	          tabIndex: "-1",
	          onClick: this.props.onMoveLeft,
	          disabled: this.props.prevDisabled,
	          "aria-disabled": this.props.prevDisabled,
	          title: this.props.moveBack },
	        React.createElement("i", { className: "rw-i rw-i-caret-" + (rtl ? "right" : "left") }),
	        React.createElement(
	          "span",
	          { className: "rw-sr" },
	          this.props.messages.moveBack
	        )
	      ),
	      React.createElement(
	        Btn,
	        { className: "rw-btn-view",
	          id: this.props.labelId,
	          tabIndex: "-1",
	          onClick: this.props.onViewChange,
	          disabled: this.props.upDisabled,
	          "aria-disabled": this.props.upDisabled },
	        this.props.label
	      ),
	      React.createElement(
	        Btn,
	        { className: "rw-btn-right",
	          tabIndex: "-1",
	          onClick: this.props.onMoveRight,
	          disabled: this.props.nextDisabled,
	          "aria-disabled": this.props.nextDisabled,
	          title: this.props.moveForward },
	        React.createElement("i", { className: "rw-i rw-i-caret-" + (rtl ? "left" : "right") }),
	        React.createElement(
	          "span",
	          { className: "rw-sr" },
	          this.props.messages.moveForward
	        )
	      )
	    );
	  }
	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(6);

	module.exports = {

	  contextTypes: {
	    isRtl: React.PropTypes.bool
	  },

	  isRtl: function () {
	    return !!this.context.isRtl;
	  }

	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(6),
	    Btn = __webpack_require__(49),
	    dates = __webpack_require__(57);

	module.exports = React.createClass({

	  displayName: "Footer",

	  render: function () {
	    var now = this.props.value,
	        formatted = dates.format(now, this.props.format, this.props.culture);

	    return React.createElement(
	      "div",
	      { className: "rw-footer" },
	      React.createElement(
	        Btn,
	        { tabIndex: "-1",
	          "aria-disabled": !!this.props.disabled,
	          "aria-readonly": !!this.props.readOnly,
	          disabled: this.props.disabled,
	          readOnly: this.props.readOnly,
	          onClick: this.props.onClick.bind(null, now)
	        },
	        formatted
	      )
	    );
	  }

	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var dateMath = __webpack_require__(58),
	    config = __webpack_require__(32),
	    _ = __webpack_require__(12); //extend

	var shortNames = {};

	var dates = module.exports = _.assign(dateMath, {
	  // wrapper methods for isolating globalize use throughout the lib
	  // looking forward towards the 1.0 release
	  culture: function (culture) {
	    return culture ? config.globalize.findClosestCulture(culture) : config.globalize.culture();
	  },

	  startOfWeek: function (culture) {
	    culture = dates.culture(culture);

	    if (!culture || !culture.calendar) return 0;

	    return culture.calendar.firstDay || 0;
	  },

	  parse: function (date, format, culture) {
	    if (typeof format === "function") return format(date, culture);

	    return config.globalize.parseDate(date, format, culture);
	  },

	  format: function (date, format, culture) {
	    if (typeof format === "function") return format(date, culture);

	    return config.globalize.format(date, format, culture);
	  },

	  //-------------------------------------

	  shortDay: function (dayOfTheWeek) {
	    var culture = dates.culture(arguments[1]),
	        name = typeof culture === "string" ? culture : culture.name;

	    var names = shortNames[name] || (shortNames[name] = dates.shortDaysOfWeek(culture));

	    return names[dayOfTheWeek];
	  },

	  shortDaysOfWeek: function (culture) {
	    var start = dates.startOfWeek(culture),
	        days,
	        front;

	    culture = dates.culture(culture);

	    if (culture && culture.calendar) {
	      days = culture.calendar.days.namesShort.slice();

	      if (start === 0) return days;

	      front = days.splice(0, start);
	      days = days.concat(front);
	      return days;
	    }
	  },

	  monthsInYear: function (year) {
	    var months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
	        date = new Date(year, 0, 1);

	    return months.map(function (i) {
	      return dates.month(date, i);
	    });
	  },

	  firstOfDecade: function (date) {
	    var decade = dates.year(date) % 10;

	    return dates.subtract(date, decade, "year");
	  },

	  lastOfDecade: function (date) {
	    return dates.add(dates.firstOfDecade(date), 9, "year");
	  },

	  firstOfCentury: function (date) {
	    var decade = dates.year(date) % 100;
	    return dates.subtract(date, decade, "year");
	  },

	  lastOfCentury: function (date) {
	    return dates.add(dates.firstOfCentury(date), 99, "year");
	  },

	  firstVisibleDay: function (date) {
	    var firstOfMonth = dates.startOf(date, "month");
	    return dates.startOf(firstOfMonth, "week");
	  },

	  lastVisibleDay: function (date) {
	    var endOfMonth = dates.endOf(date, "month");
	    return dates.endOf(endOfMonth, "week");
	  },

	  visibleDays: function (date) {
	    var current = dates.firstVisibleDay(date),
	        last = dates.lastVisibleDay(date),
	        days = [];

	    while (dates.lte(current, last, "day")) {
	      days.push(current);
	      current = dates.add(current, 1, "day");
	    }

	    return days;
	  },

	  merge: function (date, time) {
	    if (time == null && date == null) return null;

	    if (time == null) time = new Date();
	    if (date == null) date = new Date();

	    date = dates.startOf(date, "day");
	    date = dates.hours(date, dates.hours(time));
	    date = dates.minutes(date, dates.minutes(time));
	    date = dates.seconds(date, dates.seconds(time));
	    return dates.milliseconds(date, dates.milliseconds(time));
	  },

	  sameMonth: function (dateA, dateB) {
	    return dates.eq(dateA, dateB, "month");
	  },

	  today: function () {
	    return this.startOf(new Date(), "day");
	  },

	  yesterday: function () {
	    return this.add(this.startOf(new Date(), "day"), -1, "day");
	  },

	  tomorrow: function () {
	    return this.add(this.startOf(new Date(), "day"), 1, "day");
	  },

	  formats: {
	    DAY_OF_MONTH: "dd",
	    DAY_NAME_SHORT: null,
	    MONTH_NAME_ABRV: "MMM",
	    MONTH_YEAR: "MMMM yyyy",
	    YEAR: "yyyy",
	    FOOTER: "D"
	  }

	});

/***/ },
/* 58 */
/***/ function(module, exports) {

	var MILI 		= 'milliseconds'
	  , SECONDS = 'seconds'
	  , MINUTES = 'minutes'
	  , HOURS 	= 'hours'
	  , DAY 		= 'day'
	  , WEEK 		= 'week'
	  , MONTH 	= 'month'
	  , YEAR 		= 'year'
	  , DECADE  = 'decade'
	  , CENTURY = 'century';

	// function tick(date){
	// 	this.__val__ = date;
	// }

	var dates = module.exports = {

	  startOfWeek: function(d){
	    return 0;
	  },

		add: function(date, num, unit) {
			date = new Date(date)

			if ( unit === MILI ) 
				return dates.milliseconds(date, dates.milliseconds(date) + num)

			else if ( unit === SECONDS ) 
				return dates.seconds(date, dates.seconds(date) + num)

			else if ( unit === MINUTES ) 
				return dates.minutes(date, dates.minutes(date) + num)

			else if ( unit === HOURS ) 
				return dates.hours(date, dates.hours(date) + num)

			else if ( unit === DAY ) 
				return dates.date(date, dates.date(date) + num)
			
			else if ( unit === WEEK )
				return dates.date(date, dates.date(date) + (7 * num)) 

			else if ( unit === MONTH )
				return monthMath(date, num)

			else if ( unit === YEAR )
				return dates.year(date, dates.year(date) + num)

	    else if ( unit === DECADE )
	      return dates.year(date, dates.year(date) + (num * 10))

	    else if ( unit === CENTURY )
	      return dates.year(date, dates.year(date) + (num * 100))

			throw new TypeError('Invalid units: "' + unit + '"')
		},

		subtract: function(date, num, unit) {
			return dates.add(date, -num, unit)
		},

		startOf: function(date, unit) {
	    var decade, century;

			date = new Date(date)

			switch (unit) {
	      case 'century':
	      case 'decade':
				case 'year':
	          date = dates.month(date, 0);
	      case 'month':
	          date = dates.date(date, 1);
	      case 'week':
	      case 'day':
	          date = dates.hours(date, 0);
	      case 'hours':
	          date = dates.minutes(date, 0);
	      case 'minutes':
	          date = dates.seconds(date, 0);
	      case 'seconds':
	          date = dates.milliseconds(date, 0);
	    }

	    if (unit === DECADE) 
	      date = dates.subtract(date, dates.year(date) % 10, 'year')
	    
	    if (unit === CENTURY) 
	      date = dates.subtract(date, dates.year(date) % 100, 'year')

	    if (unit === WEEK) 
	    	date = dates.weekday(date, 0);

	    return date
		},


		endOf: function(date, unit){
			date = new Date(date)
			date = dates.startOf(date, unit)
			date = dates.add(date, 1, unit)
			date = dates.subtract(date, 1, MILI)
			return date
		},

		eq: createComparer(function(a, b){
			return a === b
		}),

		gt: createComparer(function(a, b){
			return a > b
		}),

		gte: createComparer(function(a, b){
			return a >= b
		}),

		lt: createComparer(function(a, b){
			return a < b
		}),

		lte: createComparer(function(a, b){
			return a <= b
		}),

	  min: function(){
	    var args = Array.prototype.slice.call(arguments);

	    return new Date(Math.min.apply(Math, args))
	  },

	  max: function(){
	    var args = Array.prototype.slice.call(arguments);

	    return new Date(Math.max.apply(Math, args))
	  },
	  
	  inRange: function(day, min, max, unit){
	    unit = unit || 'day'

	    return (!min || dates.gte(day, min, unit))
	        && (!max || dates.lte(day, max, unit))
	  },

		milliseconds: 	createAccessor('Milliseconds'),
		seconds: 				createAccessor('Seconds'),
		minutes: 				createAccessor('Minutes'),
		hours: 					createAccessor('Hours'),
		day: 						createAccessor('Day'),
		date: 					createAccessor('Date'),
		month: 					createAccessor('Month'),
		year: 					createAccessor('FullYear'),

	  decade: function (date, val) {
	    return val == undefined 
	      ? dates.year(dates.startOf(date, DECADE))
	      : dates.add(date, val + 10, YEAR);
	  },

	  century: function (date, val) {
	    return val == undefined 
	      ? dates.year(dates.startOf(date, CENTURY))
	      : dates.add(date, val + 100, YEAR);
	  },

		weekday: function (date, val) {
	      var weekday = (dates.day(date) + 7 - dates.startOfWeek() ) % 7;

	      return val == undefined 
	        ? weekday 
	        : dates.add(date, val - weekday, DAY);
	  },
	}


	function monthMath(date, val){
		var current = dates.month(date)
		  , newMonth  = (current + val);

	  	date = dates.month(date, newMonth)

	  	if (newMonth < 0 ) newMonth = 12 + val
	  		
	  	//month rollover
	  	if ( dates.month(date) !== ( newMonth % 12))
	  		date = dates.date(date, 0) //move to last of month

	  	return date
	}

	//LOCALIZATION


	function createAccessor(method){
		method = method.charAt(0).toUpperCase() + method.substr(1)

		return function(date, val){
			if (val === undefined)
				return date['get' + method]()

			date = new Date(date)
			date['set' + method](val)
			return date
		}
	}

	function createComparer(operator) {

	    return function (a, b, unit) {
	        return operator(+dates.startOf(a, unit), + dates.startOf(b, unit))
	    };
	}


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6),
	    cx = __webpack_require__(14),
	    dates = __webpack_require__(57),
	    directions = __webpack_require__(60).directions,
	    CustomPropTypes = __webpack_require__(16),
	    _ = __webpack_require__(12),
	    Btn = __webpack_require__(49);

	var opposite = {
	  LEFT: directions.RIGHT,
	  RIGHT: directions.LEFT
	};

	module.exports = React.createClass({

	  displayName: "MonthView",

	  mixins: [__webpack_require__(35), __webpack_require__(55), __webpack_require__(61)("month", "day")],

	  propTypes: {
	    culture: React.PropTypes.string,
	    value: React.PropTypes.instanceOf(Date),
	    selectedDate: React.PropTypes.instanceOf(Date),
	    min: React.PropTypes.instanceOf(Date),
	    max: React.PropTypes.instanceOf(Date),

	    dayFormat: CustomPropTypes.localeFormat.isRequired,
	    dateFormat: CustomPropTypes.localeFormat.isRequired,

	    onChange: React.PropTypes.func.isRequired, //value is chosen
	    onMoveLeft: React.PropTypes.func,
	    onMoveRight: React.PropTypes.func
	  },

	  render: function () {
	    var props = _.omit(this.props, ["max", "min", "value", "onChange"]),
	        month = dates.visibleDays(this.props.value),
	        rows = _.chunk(month, 7);

	    return React.createElement(
	      "table",
	      babelHelpers._extends({}, props, {
	        role: "grid",
	        className: "rw-calendar-grid",
	        "aria-activedescendant": this._id("_selected_item"),
	        onKeyUp: this._keyUp }),
	      React.createElement(
	        "thead",
	        null,
	        React.createElement(
	          "tr",
	          null,
	          this._headers(props.dayFormat, props.culture)
	        )
	      ),
	      React.createElement(
	        "tbody",
	        null,
	        rows.map(this._row)
	      )
	    );
	  },

	  _row: function (row, i) {
	    var _this = this;

	    var id = this._id("_selected_item");

	    return React.createElement(
	      "tr",
	      { key: "week_" + i, role: "row" },
	      row.map(function (day, idx) {
	        var focused = dates.eq(day, _this.state.focusedDate, "day"),
	            selected = dates.eq(day, _this.props.selectedDate, "day"),
	            today = dates.eq(day, _this.props.today, "day");

	        return !dates.inRange(day, _this.props.min, _this.props.max) ? React.createElement(
	          "td",
	          { key: "day_" + idx, role: "gridcell", className: "rw-empty-cell" },
	          " "
	        ) : React.createElement(
	          "td",
	          { key: "day_" + idx, role: "gridcell" },
	          React.createElement(
	            Btn,
	            {
	              tabIndex: "-1",
	              onClick: _this.props.onChange.bind(null, day),
	              "aria-pressed": selected,
	              "aria-disabled": _this.props.disabled || undefined,
	              disabled: _this.props.disabled,
	              className: cx({
	                "rw-off-range": dates.month(day) !== dates.month(_this.state.focusedDate),
	                "rw-state-focus": focused,
	                "rw-state-selected": selected,
	                "rw-now": today
	              }),
	              id: focused ? id : undefined },
	            dates.format(day, _this.props.dateFormat, _this.props.culture)
	          )
	        );
	      })
	    );
	  },

	  _headers: function (format, culture) {
	    return [0, 1, 2, 3, 4, 5, 6].map(function (day) {
	      return React.createElement(
	        "th",
	        { key: "header_" + day },
	        dates.format(day, format, culture)
	      );
	    });
	  },

	  move: function (date, direction) {
	    var min = this.props.min,
	        max = this.props.max;

	    if (this.isRtl() && opposite[direction]) direction = opposite[direction];

	    if (direction === directions.LEFT) date = nextDate(date, -1, "day", min, max);else if (direction === directions.RIGHT) date = nextDate(date, 1, "day", min, max);else if (direction === directions.UP) date = nextDate(date, -1, "week", min, max);else if (direction === directions.DOWN) date = nextDate(date, 1, "week", min, max);

	    return date;
	  }

	});

	function nextDate(date, val, unit, min, max) {
	  var newDate = dates.add(date, val, unit);

	  return dates.inRange(newDate, min, max, "day") ? newDate : date;
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _ = __webpack_require__(12); //object

	var views = {
	  MONTH: "month",
	  YEAR: "year",
	  DECADE: "decade",
	  CENTURY: "century"
	};

	module.exports = {

	  directions: {
	    LEFT: "LEFT",
	    RIGHT: "RIGHT",
	    UP: "UP",
	    DOWN: "DOWN"
	  },

	  datePopups: {
	    TIME: "time",
	    CALENDAR: "calendar"
	  },

	  calendarViews: views,

	  calendarViewHierarchy: (function () {
	    var _calendarViewHierarchy = {};
	    _calendarViewHierarchy[views.MONTH] = views.YEAR;
	    _calendarViewHierarchy[views.YEAR] = views.DECADE;
	    _calendarViewHierarchy[views.DECADE] = views.CENTURY;
	    return _calendarViewHierarchy;
	  })(),

	  calendarViewUnits: (function () {
	    var _calendarViewUnits = {};
	    _calendarViewUnits[views.MONTH] = views.DAY;
	    _calendarViewUnits[views.YEAR] = views.MONTH;
	    _calendarViewUnits[views.DECADE] = views.YEAR;
	    _calendarViewUnits[views.CENTURY] = views.DECADE;
	    return _calendarViewUnits;
	  })()
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(6),
	    dates = __webpack_require__(57),
	    directions = __webpack_require__(60).directions;

	module.exports = function (viewUnit, smallUnit) {

	  return {
	    propTypes: {
	      value: React.PropTypes.instanceOf(Date),
	      min: React.PropTypes.instanceOf(Date),
	      max: React.PropTypes.instanceOf(Date) },

	    getInitialState: function () {
	      return {
	        focusedDate: constrainValue(this.props.value, this.props.min, this.props.max)
	      };
	    },

	    componentWillReceiveProps: function (nextProps) {
	      var focused = this.state.focusedDate;

	      //!dates.inRange(focused, nextProps.min, nextProps.max)

	      if (!dates.eq(nextProps.value, focused, smallUnit)) this.setState({
	        focusedDate: nextProps.value
	      });
	    },

	    _keyDown: function (e) {
	      var key = e.key,
	          current = this.state.focusedDate,
	          date = current;

	      if (key === "Enter") {
	        e.preventDefault();
	        return this.props.onChange(date);
	      }

	      if (key === "ArrowLeft") date = this.move(date, directions.LEFT);else if (key === "ArrowRight") date = this.move(date, directions.RIGHT);else if (key === "ArrowUp") date = this.move(date, directions.UP);else if (key === "ArrowDown") date = this.move(date, directions.DOWN);

	      if (!dates.eq(current, date, smallUnit)) {
	        e.preventDefault();

	        if (dates.gt(date, this.props.value, viewUnit)) return this.props.onMoveRight(date);

	        if (dates.lt(date, this.props.value, viewUnit)) return this.props.onMoveLeft(date);

	        this.setState({
	          focusedDate: date
	        });
	      }
	    }
	  };
	};

	function constrainValue(value, min, max) {
	  if (value == null) return value;
	  return dates.max(dates.min(value, max), min);
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6),
	    cx = __webpack_require__(14),
	    dates = __webpack_require__(57),
	    directions = __webpack_require__(60).directions,
	    Btn = __webpack_require__(49),
	    _ = __webpack_require__(12),
	    compat = __webpack_require__(15),
	    CustomPropTypes = __webpack_require__(16);

	var opposite = {
	  LEFT: directions.RIGHT,
	  RIGHT: directions.LEFT
	};

	module.exports = React.createClass({

	  displayName: "YearView",

	  mixins: [__webpack_require__(35), __webpack_require__(55), __webpack_require__(61)("year", "month")],

	  propTypes: {
	    culture: React.PropTypes.string,
	    value: React.PropTypes.instanceOf(Date),
	    min: React.PropTypes.instanceOf(Date),
	    max: React.PropTypes.instanceOf(Date),
	    onChange: React.PropTypes.func.isRequired,

	    monthFormat: CustomPropTypes.localeFormat.isRequired
	  },

	  render: function () {
	    var props = _.omit(this.props, ["max", "min", "value", "onChange"]),
	        months = dates.monthsInYear(dates.year(this.props.value)),
	        rows = _.chunk(months, 4);

	    return React.createElement(
	      "table",
	      babelHelpers._extends({}, props, {
	        tabIndex: this.props.disabled ? "-1" : "0",
	        ref: "table",
	        role: "grid",
	        className: "rw-calendar-grid rw-nav-view",
	        "aria-activedescendant": this._id("_selected_item"),
	        onKeyUp: this._keyUp }),
	      React.createElement(
	        "tbody",
	        null,
	        rows.map(this._row)
	      )
	    );
	  },

	  _row: function (row, i) {
	    var _this = this;

	    var id = this._id("_selected_item");

	    return React.createElement(
	      "tr",
	      { key: i, role: "row" },
	      row.map(function (date, i) {
	        var focused = dates.eq(date, _this.state.focusedDate, "month"),
	            selected = dates.eq(date, _this.props.value, "month"),
	            currentMonth = dates.eq(date, _this.props.today, "month");

	        return dates.inRange(date, _this.props.min, _this.props.max, "month") ? React.createElement(
	          "td",
	          { key: i, role: "gridcell" },
	          React.createElement(
	            Btn,
	            { onClick: _this.props.onChange.bind(null, date), tabIndex: "-1",
	              id: focused ? id : undefined,
	              "aria-pressed": selected,
	              "aria-disabled": _this.props.disabled || undefined,
	              disabled: _this.props.disabled,
	              className: cx({
	                "rw-state-focus": focused,
	                "rw-state-selected": selected,
	                "rw-now": currentMonth
	              }) },
	            dates.format(date, _this.props.monthFormat, _this.props.culture)
	          )
	        ) : React.createElement(
	          "td",
	          { key: i, className: "rw-empty-cell", role: "gridcell" },
	          " "
	        );
	      })
	    );
	  },

	  focus: function () {
	    compat.findDOMNode(this.refs.table).focus();
	  },

	  move: function (date, direction) {
	    var min = this.props.min,
	        max = this.props.max;

	    if (this.isRtl() && opposite[direction]) direction = opposite[direction];

	    if (direction === directions.LEFT) date = nextDate(date, -1, "month", min, max);else if (direction === directions.RIGHT) date = nextDate(date, 1, "month", min, max);else if (direction === directions.UP) date = nextDate(date, -4, "month", min, max);else if (direction === directions.DOWN) date = nextDate(date, 4, "month", min, max);

	    return date;
	  }

	});

	function nextDate(date, val, unit, min, max) {
	  var newDate = dates.add(date, val, unit);
	  return dates.inRange(newDate, min, max, "month") ? newDate : date;
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6),
	    _ = __webpack_require__(12),
	    cx = __webpack_require__(14),
	    dates = __webpack_require__(57),
	    directions = __webpack_require__(60).directions,
	    CustomPropTypes = __webpack_require__(16),
	    Btn = __webpack_require__(49);

	var opposite = {
	  LEFT: directions.RIGHT,
	  RIGHT: directions.LEFT
	};

	module.exports = React.createClass({

	  displayName: "DecadeView",

	  mixins: [__webpack_require__(35), __webpack_require__(44), __webpack_require__(55), __webpack_require__(61)("decade", "year")],

	  propTypes: {
	    culture: React.PropTypes.string,

	    value: React.PropTypes.instanceOf(Date),
	    min: React.PropTypes.instanceOf(Date),
	    max: React.PropTypes.instanceOf(Date),
	    onChange: React.PropTypes.func.isRequired,

	    yearFormat: CustomPropTypes.localeFormat.isRequired

	  },

	  render: function () {
	    var props = _.omit(this.props, ["max", "min", "value", "onChange"]),
	        years = getDecadeYears(this.props.value),
	        rows = _.chunk(years, 4);

	    return React.createElement(
	      "table",
	      babelHelpers._extends({}, props, {
	        tabIndex: this.props.disabled ? "-1" : "0",
	        role: "grid",
	        className: "rw-calendar-grid rw-nav-view",
	        "aria-activedescendant": this._id("_selected_item"),
	        onKeyUp: this._keyUp }),
	      React.createElement(
	        "tbody",
	        null,
	        rows.map(this._row)
	      )
	    );
	  },

	  _row: function (row, i) {
	    var _this = this;

	    var id = this._id("_selected_item");

	    return React.createElement(
	      "tr",
	      { key: "row_" + i, role: "row" },
	      row.map(function (date, i) {
	        var focused = dates.eq(date, _this.state.focusedDate, "year"),
	            selected = dates.eq(date, _this.props.value, "year"),
	            currentYear = dates.eq(date, _this.props.today, "year");

	        return !dates.inRange(date, _this.props.min, _this.props.max, "year") ? React.createElement(
	          "td",
	          { key: i, role: "gridcell", className: "rw-empty-cell" },
	          " "
	        ) : React.createElement(
	          "td",
	          { key: i, role: "gridcell" },
	          React.createElement(
	            Btn,
	            { onClick: _this.props.onChange.bind(null, date), tabIndex: "-1",
	              id: focused ? id : undefined,
	              "aria-pressed": selected,
	              "aria-disabled": _this.props.disabled,
	              disabled: _this.props.disabled || undefined,
	              className: cx({
	                "rw-off-range": !inDecade(date, _this.props.value),
	                "rw-state-focus": focused,
	                "rw-state-selected": selected,
	                "rw-now": currentYear
	              }) },
	            dates.format(date, _this.props.yearFormat, _this.props.culture)
	          )
	        );
	      })
	    );
	  },

	  move: function (date, direction) {
	    var min = this.props.min,
	        max = this.props.max;

	    if (this.isRtl() && opposite[direction]) direction = opposite[direction];

	    if (direction === directions.LEFT) date = nextDate(date, -1, "year", min, max);else if (direction === directions.RIGHT) date = nextDate(date, 1, "year", min, max);else if (direction === directions.UP) date = nextDate(date, -4, "year", min, max);else if (direction === directions.DOWN) date = nextDate(date, 4, "year", min, max);

	    return date;
	  }

	});

	function inDecade(date, start) {
	  return dates.gte(date, dates.startOf(start, "decade"), "year") && dates.lte(date, dates.endOf(start, "decade"), "year");
	}

	function getDecadeYears(_date) {
	  var days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
	      date = dates.add(dates.startOf(_date, "decade"), -2, "year");

	  return days.map(function (i) {
	    return date = dates.add(date, 1, "year");
	  });
	}

	function nextDate(date, val, unit, min, max) {
	  var newDate = dates.add(date, val, unit);
	  return dates.inRange(newDate, min, max, "year") ? newDate : date;
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6),
	    cx = __webpack_require__(14),
	    dates = __webpack_require__(57),
	    directions = __webpack_require__(60).directions,
	    Btn = __webpack_require__(49),
	    _ = __webpack_require__(12),
	    CustomPropTypes = __webpack_require__(16); //omit

	var opposite = {
	  LEFT: directions.RIGHT,
	  RIGHT: directions.LEFT
	};

	module.exports = React.createClass({

	  displayName: "CenturyView",

	  mixins: [__webpack_require__(35), __webpack_require__(44), __webpack_require__(55), __webpack_require__(61)("century", "decade")],

	  propTypes: {
	    culture: React.PropTypes.string,
	    value: React.PropTypes.instanceOf(Date),
	    min: React.PropTypes.instanceOf(Date),
	    max: React.PropTypes.instanceOf(Date),

	    onChange: React.PropTypes.func.isRequired,

	    decadeFormat: CustomPropTypes.localeFormat.isRequired
	  },

	  render: function () {
	    var props = _.omit(this.props, ["max", "min", "value", "onChange"]),
	        years = getCenturyDecades(this.props.value),
	        rows = _.chunk(years, 4);

	    return React.createElement(
	      "table",
	      babelHelpers._extends({}, props, {
	        tabIndex: this.props.disabled ? "-1" : "0",
	        role: "grid",
	        className: "rw-calendar-grid rw-nav-view",
	        "aria-activedescendant": this._id("_selected_item"),
	        onKeyUp: this._keyUp }),
	      React.createElement(
	        "tbody",
	        null,
	        rows.map(this._row)
	      )
	    );
	  },

	  _row: function (row, i) {
	    var _this = this;

	    var id = this._id("_selected_item");

	    return React.createElement(
	      "tr",
	      { key: "row_" + i, role: "row" },
	      row.map(function (date, i) {
	        var focused = dates.eq(date, _this.state.focusedDate, "decade"),
	            selected = dates.eq(date, _this.props.value, "decade"),
	            d = inRangeDate(date, _this.props.min, _this.props.max),
	            currentDecade = dates.eq(date, _this.props.today, "decade");

	        return !inRange(date, _this.props.min, _this.props.max) ? React.createElement(
	          "td",
	          { key: i, role: "gridcell", className: "rw-empty-cell" },
	          " "
	        ) : React.createElement(
	          "td",
	          { key: i, role: "gridcell" },
	          React.createElement(
	            Btn,
	            { onClick: _this.props.onChange.bind(null, d),
	              tabIndex: "-1",
	              id: focused ? id : undefined,
	              "aria-pressed": selected,
	              "aria-disabled": _this.props.disabled,
	              disabled: _this.props.disabled || undefined,
	              className: cx({
	                "rw-off-range": !inCentury(date, _this.props.value),
	                "rw-state-focus": focused,
	                "rw-state-selected": selected,
	                "rw-now": currentDecade
	              }) },
	            dates.format(dates.startOf(date, "decade"), _this.props.decadeFormat, _this.props.culture)
	          )
	        );
	      })
	    );
	  },

	  move: function (date, direction) {
	    var min = this.props.min,
	        max = this.props.max;

	    if (this.isRtl() && opposite[direction]) direction = opposite[direction];

	    if (direction === directions.LEFT) date = nextDate(date, -1, "decade", min, max);else if (direction === directions.RIGHT) date = nextDate(date, 1, "decade", min, max);else if (direction === directions.UP) date = nextDate(date, -4, "decade", min, max);else if (direction === directions.DOWN) date = nextDate(date, 4, "decade", min, max);

	    return date;
	  }

	});

	function label(date, format, culture) {
	  return dates.format(dates.startOf(date, "decade"), format, culture) + " - " + dates.format(dates.endOf(date, "decade"), format, culture);
	}

	function inRangeDate(decade, min, max) {
	  return dates.max(dates.min(decade, max), min);
	}

	function inRange(decade, min, max) {
	  return dates.gte(decade, dates.startOf(min, "decade"), "year") && dates.lte(decade, dates.endOf(max, "decade"), "year");
	}

	function inCentury(date, start) {
	  return dates.gte(date, dates.startOf(start, "century"), "year") && dates.lte(date, dates.endOf(start, "century"), "year");
	}

	function getCenturyDecades(_date) {
	  var days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
	      date = dates.add(dates.startOf(_date, "century"), -20, "year");

	  return days.map(function (i) {
	    return date = dates.add(date, 10, "year");
	  });
	}

	function nextDate(date, val, unit, min, max) {
	  var newDate = dates.add(date, val, unit);
	  return dates.inRange(newDate, min, max, "decade") ? newDate : date;
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6),
	    ReplaceTransitionGroup = __webpack_require__(66),
	    _ = __webpack_require__(12),
	    compat = __webpack_require__(15),
	    $ = __webpack_require__(18),
	    config = __webpack_require__(32);

	var SlideChildGroup = React.createClass({
	  displayName: "SlideChildGroup",

	  propTypes: {
	    direction: React.PropTypes.oneOf(["left", "right"]),
	    duration: React.PropTypes.number
	  },

	  componentWillEnter: function (done) {
	    var _this = this;

	    var node = compat.findDOMNode(this),
	        width = $.width(node),
	        direction = this.props.direction;

	    width = direction === "left" ? width : -width;

	    this.ORGINAL_POSITION = node.style.position;

	    $.css(node, { position: "absolute", left: width + "px", top: 0 });

	    config.animate(node, { left: 0 }, this.props.duration, function () {

	      $.css(node, {
	        position: _this.ORGINAL_POSITION,
	        overflow: "hidden"
	      });

	      _this.ORGINAL_POSITION = null;
	      done && done();
	    });
	  },

	  componentWillLeave: function (done) {
	    var _this = this;

	    var node = compat.findDOMNode(this),
	        width = $.width(node),
	        direction = this.props.direction;

	    width = direction === "left" ? -width : width;

	    this.ORGINAL_POSITION = node.style.position;

	    $.css(node, { position: "absolute", top: 0, left: 0 });

	    config.animate(node, { left: width + "px" }, this.props.duration, function () {
	      $.css(node, {
	        position: _this.ORGINAL_POSITION,
	        overflow: "hidden"
	      });

	      _this.ORGINAL_POSITION = null;
	      done && done();
	    });
	  },

	  render: function () {
	    return React.Children.only(this.props.children);
	  }

	});

	module.exports = React.createClass({
	  displayName: "exports",

	  propTypes: {
	    direction: React.PropTypes.oneOf(["left", "right"]),
	    duration: React.PropTypes.number
	  },

	  getDefaultProps: function () {
	    return {
	      direction: "left",
	      duration: 250
	    };
	  },

	  _wrapChild: function (child, ref) {
	    return React.createElement(
	      SlideChildGroup,
	      { key: child.key, ref: ref,
	        direction: this.props.direction,
	        duration: this.props.duration },
	      child
	    );
	  },

	  render: function () {
	    var _props = this.props;
	    var style = _props.style;
	    var children = _props.children;
	    var props = babelHelpers.objectWithoutProperties(_props, ["style", "children"]);

	    style = _.assign({}, style, { position: "relative", overflow: "hidden" });

	    return React.createElement(
	      ReplaceTransitionGroup,
	      babelHelpers._extends({}, props, {
	        ref: "container",
	        childFactory: this._wrapChild,
	        style: style,
	        component: "div" }),
	      children
	    );
	  },

	  isTransitioning: function () {
	    return this.isMounted() && this.refs.container.isTransitioning();
	  }
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * A streamlined version of TransitionGroup built for managing at most two active children
	 * also provides additional hooks for animation start/end
	 * https://github.com/facebook/react/blob/master/src/addons/transitions/ReactTransitionGroup.js
	 * relevent code is licensed accordingly 
	 */

	"use strict";

	var React = __webpack_require__(6),
	    $ = __webpack_require__(18),
	    compat = __webpack_require__(15),
	    _ = __webpack_require__(12);

	module.exports = React.createClass({

	  displayName: "ReplaceTransitionGroup",

	  propTypes: {
	    component: React.PropTypes.oneOfType([React.PropTypes.element, React.PropTypes.string]),
	    childFactory: React.PropTypes.func,

	    onAnimating: React.PropTypes.func,
	    onAnimate: React.PropTypes.func },

	  getDefaultProps: function () {
	    return {
	      component: "span",
	      childFactory: function (a) {
	        return a;
	      },

	      onAnimating: _.noop,
	      onAnimate: _.noop
	    };
	  },

	  getInitialState: function () {
	    return {
	      children: _.splat(this.props.children)
	    };
	  },

	  componentWillReceiveProps: function (nextProps) {
	    var nextChild = getChild(nextProps.children),
	        stack = this.state.children.slice(),
	        next = stack[1],
	        last = stack[0];

	    var isLastChild = last && key(last) === key(nextChild),
	        isNextChild = next && key(next) === key(nextChild);

	    //no children
	    if (!last) {
	      stack.push(nextChild);
	      this.entering = nextChild;
	    } else if (last && !next && !isLastChild) {
	      //new child
	      stack.push(nextChild);
	      this.leaving = last;
	      this.entering = nextChild;
	    } else if (last && next && !isLastChild && !isNextChild) {
	      // the child is not the current one, exit the current one, add the new one
	      //  - shift the stack down
	      stack.shift();
	      stack.push(nextChild);
	      this.leaving = next;
	      this.entering = nextChild;
	    }
	    //new child that just needs to be re-rendered
	    else if (isLastChild) stack.splice(0, 1, nextChild);else if (isNextChild) stack.splice(1, 1, nextChild);

	    if (this.state.children[0] !== stack[0] || this.state.children[1] !== stack[1]) this.setState({ children: stack });
	  },

	  componentWillMount: function () {
	    this.animatingKeys = {};
	    this.leaving = null;
	    this.entering = null;
	  },

	  componentDidUpdate: function () {
	    var entering = this.entering,
	        leaving = this.leaving,
	        first = this.refs[key(entering) || key(leaving)],
	        node = compat.findDOMNode(this),
	        el = first && compat.findDOMNode(first);

	    if (el) $.css(node, {
	      overflow: "hidden",
	      height: $.height(el) + "px",
	      width: $.width(el) + "px"
	    });

	    this.props.onAnimating();

	    this.entering = null;
	    this.leaving = null;

	    if (entering) this.performEnter(key(entering));
	    if (leaving) this.performLeave(key(leaving));
	  },

	  performEnter: function (key) {
	    var component = this.refs[key];

	    if (!component) return;

	    this.animatingKeys[key] = true;

	    if (component.componentWillEnter) component.componentWillEnter(this._handleDoneEntering.bind(this, key));else this._handleDoneEntering(key);
	  },

	  _tryFinish: function () {

	    if (this.isTransitioning()) return;

	    if (this.isMounted()) $.css(compat.findDOMNode(this), { overflow: "visible", height: "", width: "" });

	    this.props.onAnimate();
	  },

	  _handleDoneEntering: function (enterkey) {
	    var component = this.refs[enterkey];

	    if (component && component.componentDidEnter) component.componentDidEnter();

	    delete this.animatingKeys[enterkey];

	    if (key(this.props.children) !== enterkey) this.performLeave(enterkey); // This was removed before it had fully entered. Remove it.

	    this._tryFinish();
	  },

	  isTransitioning: function () {
	    return Object.keys(this.animatingKeys).length !== 0;
	  },

	  performLeave: function (key) {
	    var component = this.refs[key];

	    if (!component) return;

	    this.animatingKeys[key] = true;

	    if (component.componentWillLeave) component.componentWillLeave(this._handleDoneLeaving.bind(this, key));else this._handleDoneLeaving(key);
	  },

	  _handleDoneLeaving: function (leavekey) {
	    var component = this.refs[leavekey];

	    if (component && component.componentDidLeave) component.componentDidLeave();

	    delete this.animatingKeys[leavekey];

	    if (key(this.props.children) === leavekey) this.performEnter(leavekey);else if (this.isMounted()) this.setState({
	      children: this.state.children.filter(function (c) {
	        return key(c) !== leavekey;
	      })
	    });

	    this._tryFinish();
	  },

	  render: function () {
	    var _this = this;

	    var Component = this.props.component;
	    return React.createElement(
	      Component,
	      this.props,
	      this.state.children.map(function (c) {
	        return _this.props.childFactory(c, key(c));
	      })
	    );
	  }
	});

	function getChild(children) {
	  return React.Children.only(children);
	}

	function key(child) {
	  return child && child.key;
	}
	// This entered again before it fully left. Add it again.

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6),
	    invariant = __webpack_require__(9),
	    activeElement = __webpack_require__(68),
	    cx = __webpack_require__(14),
	    compat = __webpack_require__(15),
	    _ = __webpack_require__(12) //pick, omit, has

	,
	    dates = __webpack_require__(57),
	    views = __webpack_require__(60).calendarViews,
	    popups = __webpack_require__(60).datePopups,
	    Popup = __webpack_require__(17),
	    Calendar = __webpack_require__(53).BaseCalendar,
	    Time = __webpack_require__(69),
	    DateInput = __webpack_require__(70),
	    Btn = __webpack_require__(49),
	    CustomPropTypes = __webpack_require__(16),
	    createUncontrolledWidget = __webpack_require__(41);

	var viewEnum = Object.keys(views).map(function (k) {
	  return views[k];
	});

	var propTypes = babelHelpers._extends({}, compat.type(Calendar).propTypes, {

	  //-- controlled props -----------
	  value: React.PropTypes.instanceOf(Date),
	  onChange: React.PropTypes.func,
	  open: React.PropTypes.oneOf([false, popups.TIME, popups.CALENDAR]),
	  onToggle: React.PropTypes.func,
	  //------------------------------------

	  onSelect: React.PropTypes.func,

	  min: React.PropTypes.instanceOf(Date),
	  max: React.PropTypes.instanceOf(Date),

	  culture: React.PropTypes.string,

	  format: CustomPropTypes.localeFormat,
	  editFormat: CustomPropTypes.localeFormat,

	  calendar: React.PropTypes.bool,
	  time: React.PropTypes.bool,

	  timeComponent: CustomPropTypes.elementType,

	  //popup
	  dropUp: React.PropTypes.bool,
	  duration: React.PropTypes.number,

	  placeholder: React.PropTypes.string,
	  name: React.PropTypes.string,

	  initialView: React.PropTypes.oneOf(viewEnum),
	  finalView: React.PropTypes.oneOf(viewEnum),

	  disabled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.oneOf(["disabled"])]),

	  readOnly: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.oneOf(["readOnly"])]),

	  parse: React.PropTypes.oneOfType([React.PropTypes.arrayOf(React.PropTypes.string), React.PropTypes.string, React.PropTypes.func]),

	  messages: React.PropTypes.shape({
	    calendarButton: React.PropTypes.string,
	    timeButton: React.PropTypes.string })
	});

	var DateTimePicker = React.createClass({

	  displayName: "DateTimePicker",

	  mixins: [__webpack_require__(35), __webpack_require__(43), __webpack_require__(44), __webpack_require__(45), __webpack_require__(47)],

	  propTypes: propTypes,

	  getInitialState: function () {
	    return {
	      focused: false };
	  },

	  getDefaultProps: function () {

	    return {
	      value: null,

	      min: new Date(1900, 0, 1),
	      max: new Date(2099, 11, 31),
	      calendar: true,
	      time: true,
	      open: false,

	      //calendar override
	      footer: true,

	      messages: {
	        calendarButton: "Select Date",
	        timeButton: "Select Time" }
	    };
	  },

	  render: function () {
	    var _this = this;

	    var _$omit = _.omit(this.props, Object.keys(propTypes));

	    var className = _$omit.className;
	    var props = babelHelpers.objectWithoutProperties(_$omit, ["className"]);
	    var calProps = _.pick(this.props, Object.keys(compat.type(Calendar).propTypes));

	    var timeListID = this._id("_time_listbox");
	    var timeOptID = this._id("_time_option");
	    var dateListID = this._id("_cal");
	    var dropUp = this.props.dropUp;
	    var value = dateOrNull(this.props.value);
	    var owns;

	    if (dateListID && this.props.calendar) owns = dateListID;
	    if (timeListID && this.props.time) owns += " " + timeListID;

	    return React.createElement(
	      "div",
	      babelHelpers._extends({}, props, {
	        ref: "element",
	        tabIndex: "-1",
	        onKeyDown: this._maybeHandle(this._keyDown),
	        onFocus: this._maybeHandle(this._focus.bind(null, true), true),
	        onBlur: this._focus.bind(null, false),
	        className: cx(className, "rw-datetimepicker", "rw-widget", (function () {
	          var _cx = {};
	          _cx["rw-state-focus"] = _this.state.focused;
	          _cx["rw-state-disabled"] = _this.isDisabled();
	          _cx["rw-state-readonly"] = _this.isReadOnly();
	          _cx["rw-has-both"] = _this.props.calendar && _this.props.time;
	          _cx["rw-has-neither"] = !_this.props.calendar && !_this.props.time;
	          _cx["rw-rtl"] = _this.isRtl();
	          _cx["rw-open" + (dropUp ? "-up" : "")] = _this.props.open;
	          return _cx;
	        })()) }),
	      React.createElement(DateInput, { ref: "valueInput",
	        "aria-labelledby": this.props["aria-labelledby"],
	        "aria-activedescendant": this.props.open ? this.props.open === popups.CALENDAR ? this._id("_cal_view_selected_item") : timeOptID : undefined,
	        "aria-expanded": !!this.props.open,
	        "aria-busy": !!this.props.busy,
	        "aria-owns": owns,
	        "aria-haspopup": true,
	        placeholder: this.props.placeholder,
	        name: this.props.name,
	        disabled: this.isDisabled(),
	        readOnly: this.isReadOnly(),
	        role: this.props.time ? "combobox" : null,
	        value: value,

	        format: getFormat(this.props),
	        editFormat: this.props.editFormat,

	        editing: this.state.focused,
	        culture: this.props.culture,
	        parse: this._parse,
	        onChange: this._change }),
	      (this.props.calendar || this.props.time) && React.createElement(
	        "span",
	        { className: "rw-select" },
	        this.props.calendar && React.createElement(
	          Btn,
	          { tabIndex: "-1",
	            className: "rw-btn-calendar",
	            disabled: this.isDisabled() || this.isReadOnly(),
	            "aria-disabled": this.isDisabled() || this.isReadOnly(),
	            onClick: this._maybeHandle(this._click.bind(null, popups.CALENDAR)) },
	          React.createElement(
	            "i",
	            { className: "rw-i rw-i-calendar" },
	            React.createElement(
	              "span",
	              { className: "rw-sr" },
	              this.props.messages.calendarButton
	            )
	          )
	        ),
	        this.props.time && React.createElement(
	          Btn,
	          { tabIndex: "-1",
	            className: "rw-btn-time",
	            disabled: this.isDisabled() || this.isReadOnly(),
	            "aria-disabled": this.isDisabled() || this.isReadOnly(),
	            onClick: this._maybeHandle(this._click.bind(null, popups.TIME)) },
	          React.createElement(
	            "i",
	            { className: "rw-i rw-i-clock-o" },
	            React.createElement(
	              "span",
	              { className: "rw-sr" },
	              this.props.messages.timeButton
	            )
	          )
	        )
	      ),
	      React.createElement(
	        Popup,
	        {
	          dropUp: dropUp,
	          open: this.props.open === popups.TIME,
	          onRequestClose: this.close,
	          duration: this.props.duration,
	          onOpening: function () {
	            return _this.refs.timePopup.forceUpdate();
	          } },
	        React.createElement(
	          "div",
	          null,
	          React.createElement(Time, { ref: "timePopup",
	            id: timeListID,
	            optID: timeOptID,
	            "aria-hidden": !this.props.open,
	            value: value,
	            step: this.props.step,
	            min: this.props.min,
	            max: this.props.max,
	            culture: this.props.culture,
	            onMove: this._scrollTo,
	            preserveDate: !!this.props.calendar,
	            itemComponent: this.props.timeComponent,
	            onSelect: this._maybeHandle(this._selectTime) })
	        )
	      ),
	      React.createElement(
	        Popup,
	        {
	          className: "rw-calendar-popup",
	          dropUp: dropUp,
	          open: this.props.open === popups.CALENDAR,
	          duration: this.props.duration,
	          onRequestClose: this.close },
	        React.createElement(Calendar, babelHelpers._extends({}, calProps, {
	          ref: "calPopup",
	          tabIndex: "-1",
	          id: dateListID,
	          value: value,
	          "aria-hidden": !this.props.open,
	          onChange: this._maybeHandle(this._selectDate) }))
	      )
	    );
	  },

	  _change: function (date, str, constrain) {
	    var change = this.props.onChange;

	    if (constrain) date = this.inRangeValue(date);

	    if (change) {
	      if (date == null || this.props.value == null) {
	        if (date != this.props.value) change(date, str);
	      } else if (!dates.eq(date, this.props.value)) change(date, str);
	    }
	  },

	  _keyDown: function (e) {

	    if (e.key === "Tab") return;

	    if (e.key === "Escape" && this.props.open) this.close();else if (e.altKey) {
	      e.preventDefault();

	      if (e.key === "ArrowDown") this.open(this.props.open === popups.CALENDAR ? popups.TIME : popups.CALENDAR);else if (e.key === "ArrowUp") this.close();
	    } else if (this.props.open) {
	      if (this.props.open === popups.CALENDAR) this.refs.calPopup._keyDown(e);
	      if (this.props.open === popups.TIME) this.refs.timePopup._keyDown(e);
	    }

	    this.notify("onKeyDown", [e]);
	  },

	  //timeout prevents transitions from breaking focus
	  _focus: function (focused, e) {
	    var _this = this;

	    this.setTimeout("focus", function () {
	      var calendarOpen = _this.props.open === popups.CALENDAR;

	      // #75: need to aggressively reclaim focus from the calendar otherwise
	      // disabled header/footer buttons will drop focus completely from the widget
	      if (focused) calendarOpen && _this.refs.valueInput.focus();else _this.close();

	      if (focused !== _this.state.focused) {
	        _this.notify(focused ? "onFocus" : "onBlur", e);
	        _this.setState({ focused: focused });
	      }
	    });
	  },

	  focus: function () {
	    if (activeElement() !== this.refs.valueInput.getDOMNode()) this.refs.valueInput.focus();
	  },

	  _selectDate: function (date) {
	    var format = getFormat(this.props),
	        dateTime = dates.merge(date, this.props.value),
	        dateStr = formatDate(date, format, this.props.culture);

	    this.close();
	    this.notify("onSelect", [dateTime, dateStr]);
	    this._change(dateTime, dateStr, true);
	    this.focus();
	  },

	  _selectTime: function (datum) {
	    var format = getFormat(this.props),
	        dateTime = dates.merge(this.props.value, datum.date),
	        dateStr = formatDate(datum.date, format, this.props.culture);

	    this.close();
	    this.notify("onSelect", [dateTime, dateStr]);
	    this._change(dateTime, dateStr, true);
	    this.focus();
	  },

	  _click: function (view, e) {
	    this.focus();
	    this.toggle(view, e);
	  },

	  _parse: function (string) {
	    var format = getFormat(this.props, true),
	        formats = [];

	    if (typeof this.props.parse === "function") return this.props.parse(string, this.props.culture);

	    if (typeof format !== "function") formats.push(format);

	    if (this.props.parse) formats = formats.concat(this.props.parse);

	    invariant(formats.length, "React Widgets: there are no specified `parse` formats provided and the `format` prop is a function. " + "the DateTimePicker is unable to parse `%s` into a dateTime, " + "please provide either a parse function or Globalize.js compatible string format", string);

	    return formatsParser(formats, this.props.culture, string);
	  },

	  toggle: function (view, e) {

	    this.props.open ? this.state.view !== view ? this.open(view) : this.close(view) : this.open(view);
	  },

	  open: function (view) {
	    if (this.props.open !== view && this.props[view] === true) this.notify("onToggle", view);
	  },

	  close: function () {
	    if (this.props.open) this.notify("onToggle", false);
	  },

	  inRangeValue: function (value) {
	    if (value == null) return value;

	    return dates.max(dates.min(value, this.props.max), this.props.min);
	  } });

	module.exports = createUncontrolledWidget(DateTimePicker, { open: "onToggle", value: "onChange" });

	module.exports.BaseDateTimePicker = DateTimePicker;

	function getFormat(props) {
	  var cal = props[popups.CALENDAR] != null ? props.calendar : true,
	      time = props[popups.TIME] != null ? props.time : true;

	  return props.format ? props.format : cal && time || !cal && !time ? "f" : cal ? "d" : "t";
	}

	function formatDate(date, format, culture) {
	  var val = "";

	  if (date instanceof Date && !isNaN(date.getTime())) val = dates.format(date, format, culture);

	  return val;
	}

	function formatsParser(formats, culture, str) {
	  var date;

	  for (var i = 0; i < formats.length; i++) {
	    date = dates.parse(str, formats[i], culture);
	    if (date) return date;
	  }
	  return null;
	}

	function dateOrNull(dt) {
	  if (dt && !isNaN(dt.getTime())) return dt;
	  return null;
	}

/***/ },
/* 68 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getActiveElement
	 * @typechecks
	 */

	/**
	 * Same as document.activeElement but wraps in a try-catch block. In IE it is
	 * not safe to call document.activeElement if there is nothing focused.
	 *
	 * The activeElement will be null only if the document body is not yet defined.
	 */
	function getActiveElement() /*?DOMElement*/ {
	  try {
	    return document.activeElement || document.body;
	  } catch (e) {
	    return document.body;
	  }
	}

	module.exports = getActiveElement;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6),
	    dates = __webpack_require__(57),
	    List = __webpack_require__(34),
	    compat = __webpack_require__(15),
	    CustomPropTypes = __webpack_require__(16),
	    _ = __webpack_require__(12); // omit

	module.exports = React.createClass({

	  displayName: "TimeList",

	  propTypes: {
	    value: React.PropTypes.instanceOf(Date),
	    min: React.PropTypes.instanceOf(Date),
	    max: React.PropTypes.instanceOf(Date),
	    step: React.PropTypes.number,
	    itemComponent: CustomPropTypes.elementType,
	    onSelect: React.PropTypes.func,
	    preserveDate: React.PropTypes.bool,
	    culture: React.PropTypes.string },

	  mixins: [__webpack_require__(43)],

	  getDefaultProps: function () {
	    return {
	      step: 30,
	      format: "t",
	      onSelect: function () {},
	      min: new Date(1900, 0, 1),
	      max: new Date(2099, 11, 31),
	      preserveDate: true,
	      delay: 300
	    };
	  },

	  getInitialState: function () {
	    var data = this._dates(this.props),
	        focusedItem = this._closestDate(data, this.props.value);

	    return {
	      focusedItem: focusedItem || data[0],
	      dates: data
	    };
	  },

	  componentWillReceiveProps: function (nextProps) {
	    var data = this._dates(nextProps),
	        focusedItem = this._closestDate(data, nextProps.value),
	        valChanged = !dates.eq(nextProps.value, this.props.value, "minutes"),
	        minChanged = !dates.eq(nextProps.min, this.props.min, "minutes"),
	        maxChanged = !dates.eq(nextProps.max, this.props.max, "minutes");

	    if (valChanged || minChanged || maxChanged) {
	      this.setState({
	        focusedItem: focusedItem || data[0],
	        dates: data
	      });
	    }
	  },

	  render: function () {
	    var times = this.state.dates,
	        date = this._closestDate(times, this.props.value);

	    return React.createElement(List, babelHelpers._extends({}, _.pick(this.props, Object.keys(compat.type(List).propTypes)), {
	      ref: "list",
	      data: times,
	      textField: "label",
	      valueField: "date",
	      selected: date,
	      focused: this.state.focusedItem,
	      itemComponent: this.props.itemComponent,
	      onSelect: this.props.onSelect }));
	  },

	  _closestDate: function (times, date) {
	    var roundTo = 1000 * 60 * this.props.step,
	        inst = null,
	        label;

	    if (!date) return null;

	    date = new Date(Math.floor(date.getTime() / roundTo) * roundTo);
	    label = dates.format(date, this.props.format, this.props.culture);

	    times.some(function (time) {
	      if (time.label === label) return inst = time;
	    });

	    return inst;
	  },

	  _data: function () {
	    return this.state.dates;
	  },

	  _dates: function (props) {
	    var times = [],
	        i = 0,
	        values = this._dateValues(props),
	        start = values.min,
	        startDay = dates.date(start);

	    while (i < 100 && (dates.date(start) === startDay && dates.lte(start, values.max))) {
	      i++;
	      times.push({ date: start, label: dates.format(start, props.format, props.culture) });
	      start = dates.add(start, props.step || 30, "minutes");
	    }
	    return times;
	  },

	  _dateValues: function (props) {
	    var value = props.value || dates.today(),
	        useDate = props.preserveDate,
	        min = props.min,
	        max = props.max,
	        start,
	        end;

	    //compare just the time regradless of whether they fall on the same day
	    if (!useDate) {
	      start = dates.startOf(dates.merge(new Date(), min), "minutes");
	      end = dates.startOf(dates.merge(new Date(), max), "minutes");

	      if (dates.lte(end, start) && dates.gt(max, min, "day")) end = dates.tomorrow();

	      return {
	        min: start,
	        max: end
	      };
	    }

	    start = dates.today();
	    end = dates.tomorrow();
	    //date parts are equal
	    return {
	      min: dates.eq(value, min, "day") ? dates.merge(start, min) : start,
	      max: dates.eq(value, max, "day") ? dates.merge(start, max) : end
	    };
	  },

	  _keyDown: function (e) {
	    var _this = this;

	    var key = e.key,
	        character = String.fromCharCode(e.keyCode),
	        focusedItem = this.state.focusedItem,
	        list = this.refs.list;

	    if (key === "End") this.setState({ focusedItem: list.last() });else if (key === "Home") this.setState({ focusedItem: list.first() });else if (key === "Enter") this.props.onSelect(focusedItem);else if (key === "ArrowDown") {
	      e.preventDefault();
	      this.setState({ focusedItem: list.next(focusedItem) });
	    } else if (key === "ArrowUp") {
	      e.preventDefault();
	      this.setState({ focusedItem: list.prev(focusedItem) });
	    } else {
	      e.preventDefault();

	      this.search(character, function (item) {
	        _this.setState({ focusedItem: item });
	      });
	    }
	  },

	  scrollTo: function () {
	    this.refs.list.move && this.refs.list.move();
	  },

	  search: function (character, cb) {
	    var _this = this;

	    var word = ((this._searchTerm || "") + character).toLowerCase();

	    this._searchTerm = word;

	    this.setTimeout("search", function () {
	      var list = _this.refs.list,
	          item = list.next(_this.state.focusedItem, word);

	      _this._searchTerm = "";
	      if (item) cb(item);
	    }, this.props.delay);
	  } });

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6),
	    cx = __webpack_require__(14),
	    dates = __webpack_require__(57),
	    compat = __webpack_require__(15),
	    CustomPropTypes = __webpack_require__(16);

	module.exports = React.createClass({

	  displayName: "DatePickerInput",

	  propTypes: {
	    format: CustomPropTypes.localeFormat,
	    parse: React.PropTypes.func.isRequired,

	    value: React.PropTypes.instanceOf(Date),
	    onChange: React.PropTypes.func.isRequired,
	    culture: React.PropTypes.string },

	  getDefaultProps: function () {
	    return {
	      textValue: ""
	    };
	  },

	  componentWillReceiveProps: function (nextProps) {
	    var text = formatDate(nextProps.value, nextProps.editing && nextProps.editFormat ? nextProps.editFormat : nextProps.format, nextProps.culture);

	    this.startValue = text;

	    this.setState({
	      textValue: text
	    });
	  },

	  getInitialState: function () {
	    var text = formatDate(this.props.value, this.props.editing && this.props.editFormat ? this.props.editFormat : this.props.format, this.props.culture);

	    this.startValue = text;

	    return {
	      textValue: text
	    };
	  },

	  render: function () {
	    var value = this.state.textValue;

	    return React.createElement("input", babelHelpers._extends({}, this.props, {
	      type: "text",
	      className: cx({ "rw-input": true }),
	      value: value,
	      "aria-disabled": this.props.disabled,
	      "aria-readonly": this.props.readOnly,
	      disabled: this.props.disabled,
	      readOnly: this.props.readOnly,
	      onChange: this._change,
	      onBlur: chain(this.props.blur, this._blur, this) }));
	  },

	  _change: function (e) {
	    this.setState({ textValue: e.target.value });
	    this._needsFlush = true;
	  },

	  _blur: function (e) {
	    var val = e.target.value;

	    if (this._needsFlush) {
	      this._needsFlush = false;
	      this.props.onChange(this.props.parse(val), val);
	    }
	  },

	  focus: function () {
	    compat.findDOMNode(this).focus();
	  }

	});

	function isValid(d) {
	  return !isNaN(d.getTime());
	}

	function formatDate(date, format, culture) {
	  var val = "";

	  if (date instanceof Date && isValid(date)) val = dates.format(date, format, culture);

	  return val;
	}

	function chain(a, b, thisArg) {
	  return function () {
	    a && a.apply(thisArg, arguments);
	    b && b.apply(thisArg, arguments);
	  };
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6),
	    cx = __webpack_require__(14),
	    _ = __webpack_require__(12) //omit
	,
	    compat = __webpack_require__(15),
	    CustomPropTypes = __webpack_require__(16),
	    createUncontrolledWidget = __webpack_require__(41),
	    directions = __webpack_require__(60).directions,
	    Input = __webpack_require__(72);

	var Btn = __webpack_require__(49),
	    propTypes = {

	  // -- controlled props -----------
	  value: React.PropTypes.number,
	  onChange: React.PropTypes.func,
	  //------------------------------------

	  min: React.PropTypes.number,
	  max: React.PropTypes.number,
	  step: React.PropTypes.number,

	  culture: React.PropTypes.string,

	  format: CustomPropTypes.localeFormat,

	  name: React.PropTypes.string,

	  parse: React.PropTypes.func,

	  disabled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.oneOf(["disabled"])]),

	  readOnly: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.oneOf(["readOnly"])]),

	  messages: React.PropTypes.shape({
	    increment: React.PropTypes.string,
	    decrement: React.PropTypes.string
	  })
	};

	var NumberPicker = React.createClass({

	  displayName: "NumberPicker",

	  mixins: [__webpack_require__(35), __webpack_require__(43), __webpack_require__(44), __webpack_require__(47)],

	  propTypes: propTypes,

	  getDefaultProps: function () {
	    return {
	      value: null,
	      open: false,

	      format: "d",

	      min: -Infinity,
	      max: Infinity,
	      step: 1,

	      messages: {
	        increment: "increment value",
	        decrement: "decrement value"
	      }
	    };
	  },

	  getInitialState: function () {
	    return {
	      focused: false,
	      active: false };
	  },

	  render: function () {
	    var _$omit = _.omit(this.props, Object.keys(propTypes));

	    var className = _$omit.className;
	    var onKeyDown = _$omit.onKeyDown;
	    var onKeyPress = _$omit.onKeyPress;
	    var onKeyUp = _$omit.onKeyUp;
	    var props = babelHelpers.objectWithoutProperties(_$omit, ["className", "onKeyDown", "onKeyPress", "onKeyUp"]);
	    var val = this.inRangeValue(this.props.value);

	    return React.createElement(
	      "div",
	      babelHelpers._extends({}, props, {
	        ref: "element",
	        onKeyDown: this._maybeHandle(this._keyDown),
	        onFocus: this._maybeHandle(this._focus.bind(null, true), true),
	        onBlur: this._focus.bind(null, false),
	        tabIndex: "-1",
	        className: cx(className, "rw-numberpicker", "rw-widget", {
	          "rw-state-focus": this.state.focused,
	          "rw-state-disabled": this.props.disabled,
	          "rw-state-readonly": this.props.readOnly,
	          "rw-rtl": this.isRtl()
	        }) }),
	      React.createElement(
	        "span",
	        { className: "rw-select" },
	        React.createElement(
	          Btn,
	          {
	            tabIndex: "-1",
	            className: cx({ "rw-state-active": this.state.active === directions.UP }),
	            onMouseDown: this._maybeHandle(this._mouseDown.bind(null, directions.UP)),
	            onMouseUp: this._maybeHandle(this._mouseUp.bind(null, directions.UP)),
	            onClick: this._maybeHandle(this._focus.bind(null, true)),
	            disabled: val === this.props.max || this.props.disabled,
	            "aria-disabled": val === this.props.max || this.props.disabled },
	          React.createElement(
	            "i",
	            { className: "rw-i rw-i-caret-up" },
	            React.createElement(
	              "span",
	              { className: "rw-sr" },
	              this.props.messages.increment
	            )
	          )
	        ),
	        React.createElement(
	          Btn,
	          {
	            tabIndex: "-1",
	            className: cx({ "rw-state-active": this.state.active === directions.DOWN }),
	            onMouseDown: this._maybeHandle(this._mouseDown.bind(null, directions.DOWN)),
	            onMouseUp: this._maybeHandle(this._mouseUp.bind(null, directions.DOWN)),
	            onClick: this._maybeHandle(this._focus.bind(null, true)),
	            disabled: val === this.props.min || this.props.disabled,
	            "aria-disabled": val === this.props.min || this.props.disabled },
	          React.createElement(
	            "i",
	            { className: "rw-i rw-i-caret-down" },
	            React.createElement(
	              "span",
	              { className: "rw-sr" },
	              this.props.messages.decrement
	            )
	          )
	        )
	      ),
	      React.createElement(Input, {
	        ref: "input",
	        value: val,
	        editing: this.state.focused,
	        format: this.props.format,
	        parse: this.props.parse,
	        name: this.props.name,
	        role: "spinbutton",
	        min: this.props.min,
	        "aria-valuenow": val,
	        "aria-valuemin": isFinite(this.props.min) ? this.props.min : null,
	        "aria-valuemax": isFinite(this.props.max) ? this.props.max : null,
	        "aria-disabled": this.props.disabled,
	        "aria-readonly": this.props.readonly,
	        disabled: this.props.disabled,
	        readOnly: this.props.readOnly,
	        onChange: this.change,
	        onKeyDown: onKeyDown,
	        onKeyPress: onKeyPress,
	        onKeyUp: onKeyUp })
	    );
	  },

	  //allow for styling, focus stealing keeping me from the normal what have you
	  _mouseDown: function (dir) {
	    var val = dir === directions.UP ? (this.props.value || 0) + this.props.step : (this.props.value || 0) - this.props.step;

	    val = this.inRangeValue(val);

	    this.setState({ active: dir });
	    this.change(val);

	    if (!(dir === directions.UP && val === this.props.max || dir === directions.DOWN && val === this.props.min)) {
	      if (!this.interval) this.interval = setInterval(this._mouseDown, 500, dir);
	    } else this._mouseUp();
	  },

	  _mouseUp: function (direction, e) {
	    this.setState({ active: false });
	    clearInterval(this.interval);
	    this.interval = null;
	  },

	  _focus: function (focused, e) {
	    var _this = this;

	    this.setTimeout("focus", function () {
	      var el = compat.findDOMNode(_this.refs.input);

	      focused && el.focus();

	      if (focused !== _this.state.focused) {
	        _this.notify(focused ? "onFocus" : "onBlur", e);
	        _this.setState({ focused: focused });
	      }
	    }, 0);
	  },

	  _keyDown: function (e) {
	    var key = e.key;

	    if (key === "End" && isFinite(this.props.max)) this.change(this.props.max);else if (key === "Home" && isFinite(this.props.min)) this.change(this.props.min);else if (key === "ArrowDown") {
	      e.preventDefault();
	      this.decrement();
	    } else if (key === "ArrowUp") {
	      e.preventDefault();
	      this.increment();
	    }
	  },

	  increment: function () {
	    this.change(this.inRangeValue((this.props.value || 0) + this.props.step));
	  },

	  decrement: function () {
	    this.change(this.inRangeValue((this.props.value || 0) - this.props.step));
	  },

	  change: function (val) {
	    val = this.inRangeValue(val === "" ? null : val);

	    if (this.props.value !== val) this.notify("onChange", val);
	  },

	  inRangeValue: function (value) {
	    var max = this.props.max == null ? Infinity : this.props.max,
	        min = this.props.min == null ? -Infinity : this.props.min;

	    if (!isFinite(min) && value == null) return value;

	    return Math.max(Math.min(value, max), min);
	  }

	});

	module.exports = createUncontrolledWidget(NumberPicker, { value: "onChange" });

	module.exports.BaseNumberPicker = NumberPicker;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6),
	    CustomPropTypes = __webpack_require__(16),
	    config = __webpack_require__(32);

	module.exports = React.createClass({

	  displayName: "NumberPickerInput",

	  propTypes: {
	    value: React.PropTypes.number,

	    format: CustomPropTypes.localeFormat.isRequired,
	    parse: React.PropTypes.func.isRequired,
	    culture: React.PropTypes.string,

	    min: React.PropTypes.number,

	    onChange: React.PropTypes.func.isRequired,
	    onKeyDown: React.PropTypes.func },

	  getDefaultProps: function () {
	    return {
	      value: null,
	      format: "d",
	      editing: false,
	      parse: function (number, culture) {
	        return config.globalize.parseFloat(number, 10, culture);
	      }
	    };
	  },

	  getDefaultState: function (props) {
	    var value = props.editing ? props.value : formatNumber(props.value, props.format, props.culture);

	    if (value == null || isNaN(props.value)) value = "";

	    return {
	      stringValue: "" + value
	    };
	  },

	  getInitialState: function () {
	    return this.getDefaultState(this.props);
	  },

	  componentWillReceiveProps: function (nextProps) {
	    this.setState(this.getDefaultState(nextProps));
	  },

	  render: function () {
	    var value = this.state.stringValue;

	    return React.createElement("input", babelHelpers._extends({}, this.props, {
	      type: "text",
	      className: "rw-input",
	      onChange: this._change,
	      onBlur: this._finish,
	      "aria-disabled": this.props.disabled,
	      "aria-readonly": this.props.readOnly,
	      disabled: this.props.disabled,
	      readOnly: this.props.readOnly,
	      value: value }));
	  },

	  _change: function (e) {
	    var val = e.target.value,
	        number = this.props.parse(e.target.value, this.props.culture),
	        isNull = val !== 0 && !val,
	        hasMin = this.props.min && isFinite(this.props.min);

	    //a null value is only possible when there is no min
	    if (!hasMin && isNull) return this.props.onChange(null);

	    if (this.isValid(number) && number !== this.props.value && !this.isAtDecimal(number, val)) return this.props.onChange(number);

	    //console.log(val !== 0 && !val)
	    this.current(e.target.value);
	  },

	  _finish: function (e) {
	    var str = this.state.stringValue,
	        number = this.props.parse(str, this.props.culture);

	    // if number is below the min
	    // we need to flush low values and decimal stops, onBlur means i'm done inputing
	    if (!isNaN(number) && (number < this.props.min || this.isAtDecimal(number, str))) {
	      this.props.onChange(number);
	    }
	  },

	  isAtDecimal: function (num, str) {
	    var next;

	    if (str.length <= 1) return false;

	    next = this.props.parse(str.substr(0, str.length - 1), this.props.culture);

	    return typeof next === "number" && !isNaN(next) && next === num;
	  },

	  isValid: function (num) {
	    if (typeof num !== "number" || isNaN(num)) return false;
	    return num >= this.props.min;
	  },

	  //this intermediate state is for when one runs into the decimal or are typing the number
	  current: function (val) {
	    this.setState({ stringValue: val });
	  }

	});

	function parseLocaleFloat(number, parser, culture) {
	  if (typeof format === "function") return format(number, culture);

	  return config.globalize.parseFloat(number, 10, culture);
	}

	function formatNumber(number, format, culture) {
	  if (typeof format === "function") return format(number, culture);

	  return config.globalize.format(number, format, culture);
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6),
	    cx = __webpack_require__(14),
	    _ = __webpack_require__(12),
	    compat = __webpack_require__(15),
	    SelectInput = __webpack_require__(74),
	    TagList = __webpack_require__(75),
	    Popup = __webpack_require__(17),
	    PlainList = __webpack_require__(34),
	    GroupableList = __webpack_require__(39),
	    validateList = __webpack_require__(40),
	    createUncontrolledWidget = __webpack_require__(41),
	    CustomPropTypes = __webpack_require__(16);

	var propTypes = {
	  data: React.PropTypes.array,
	  //-- controlled props --
	  value: React.PropTypes.array,
	  onChange: React.PropTypes.func,

	  searchTerm: React.PropTypes.string,
	  onSearch: React.PropTypes.func,

	  open: React.PropTypes.bool,
	  onToggle: React.PropTypes.func,
	  //-------------------------------------------

	  valueField: React.PropTypes.string,
	  textField: React.PropTypes.string,

	  tagComponent: CustomPropTypes.elementType,
	  itemComponent: CustomPropTypes.elementType,
	  listComponent: CustomPropTypes.elementType,

	  groupComponent: CustomPropTypes.elementType,
	  groupBy: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.string]),

	  onSelect: React.PropTypes.func,
	  onCreate: React.PropTypes.func,

	  dropUp: React.PropTypes.bool,
	  duration: React.PropTypes.number, //popup

	  placeholder: React.PropTypes.string,

	  disabled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.array, React.PropTypes.oneOf(["disabled"])]),

	  readOnly: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.array, React.PropTypes.oneOf(["readonly"])]),

	  messages: React.PropTypes.shape({
	    open: React.PropTypes.string,
	    emptyList: React.PropTypes.string,
	    emptyFilter: React.PropTypes.string
	  })
	};

	var Multiselect = React.createClass({

	  displayName: "Multiselect",

	  mixins: [__webpack_require__(35), __webpack_require__(43), __webpack_require__(52), __webpack_require__(36), __webpack_require__(45), __webpack_require__(47)],

	  propTypes: propTypes,

	  getDefaultProps: function () {
	    return {
	      data: [],
	      filter: "startsWith",
	      value: [],
	      open: false,
	      searchTerm: "",
	      messages: {
	        createNew: "(create new tag)",
	        emptyList: "There are no items in this list",
	        emptyFilter: "The filter returned no results"
	      }
	    };
	  },

	  getInitialState: function () {
	    var _this = this;

	    var dataItems = _.splat(this.props.value).map(function (item) {
	      return _this._dataItem(_this.props.data, item);
	    }),
	        data = this.process(this.props.data, dataItems, this.props.searchTerm);

	    return {
	      focusedItem: data[0],
	      processedData: data,
	      dataItems: dataItems
	    };
	  },

	  componentDidMount: function () {
	    validateList(this.refs.list);
	  },

	  componentWillReceiveProps: function (nextProps) {
	    var _this = this;

	    var values = _.splat(nextProps.value),
	        current = this.state.focusedItem,
	        items = this.process(nextProps.data, values, nextProps.searchTerm);

	    this.setState({
	      processedData: items,
	      focusedItem: items.indexOf(current) === -1 ? items[0] : current,
	      dataItems: values.map(function (item) {
	        return _this._dataItem(nextProps.data, item);
	      })
	    });
	  },

	  render: function () {
	    var _this = this;

	    var _$omit = _.omit(this.props, Object.keys(propTypes));

	    var className = _$omit.className;
	    var children = _$omit.children;
	    var props = babelHelpers.objectWithoutProperties(_$omit, ["className", "children"]);

	    var listID = this._id("_listbox");
	    var optID = this._id("_option");
	    var items = this._data();
	    var values = this.state.dataItems;
	    var dropUp = this.props.dropUp;

	    var List = this.props.listComponent || this.props.groupBy && GroupableList || PlainList;
	    var listProps = _.pick(this.props, Object.keys(compat.type(List).propTypes));

	    return React.createElement(
	      "div",
	      babelHelpers._extends({}, props, {
	        ref: "element",
	        onKeyDown: this._maybeHandle(this._keyDown),
	        onFocus: this._maybeHandle(this._focus.bind(null, true), true),
	        onBlur: this._focus.bind(null, false),
	        tabIndex: "-1",
	        className: cx(className, "rw-multiselect", "rw-widget", (function () {
	          var _cx = {};
	          _cx["rw-state-focus"] = _this.state.focused;
	          _cx["rw-state-disabled"] = _this.props.disabled === true;
	          _cx["rw-state-readonly"] = _this.props.readOnly === true;
	          _cx["rw-rtl"] = _this.isRtl();
	          _cx["rw-open" + (dropUp ? "-up" : "")] = _this.props.open;
	          return _cx;
	        })()) }),
	      React.createElement(
	        "div",
	        { className: "rw-multiselect-wrapper" },
	        this.props.busy && React.createElement("i", { className: "rw-i rw-loading" }),
	        !!values.length && React.createElement(TagList, {
	          ref: "tagList",
	          value: values,
	          textField: this.props.textField,
	          valueField: this.props.valueField,
	          valueComponent: this.props.tagComponent,
	          disabled: this.props.disabled,
	          readOnly: this.props.readOnly,
	          onDelete: this._delete }),
	        React.createElement(SelectInput, {
	          ref: "input",
	          "aria-activedescendent": this.props.open ? optID : undefined,
	          "aria-expanded": this.props.open,
	          "aria-busy": !!this.props.busy,
	          "aria-owns": listID,
	          "aria-haspopup": true,
	          value: this.props.searchTerm,
	          disabled: this.props.disabled === true,
	          readOnly: this.props.readOnly === true,
	          placeholder: this._placeholder(),
	          onKeyDown: this._searchKeyDown,
	          onKeyUp: this._searchgKeyUp,
	          onChange: this._typing,
	          onFocus: this._inputFocus,
	          maxLength: this.props.maxLength })
	      ),
	      React.createElement(
	        Popup,
	        babelHelpers._extends({}, _.pick(this.props, Object.keys(compat.type(Popup).propTypes)), {
	          onOpening: function () {
	            return _this.refs.list.forceUpdate();
	          },
	          onRequestClose: this.close }),
	        React.createElement(
	          "div",
	          null,
	          React.createElement(List, babelHelpers._extends({ ref: "list"
	          }, listProps, {
	            readOnly: !!listProps.readOnly,
	            disabled: !!listProps.disabled,
	            id: listID,
	            optID: optID,
	            "aria-autocomplete": "list",
	            "aria-hidden": !this.props.open,
	            data: items,
	            focused: this.state.focusedItem,
	            onSelect: this._maybeHandle(this._onSelect),
	            onMove: this._scrollTo,
	            messages: {
	              emptyList: this.props.data.length ? this.props.messages.emptyFilter : this.props.messages.emptyList
	            } })),
	          this._shouldShowCreate() && React.createElement(
	            "ul",
	            { className: "rw-list rw-multiselect-create-tag" },
	            React.createElement(
	              "li",
	              { onClick: this._onCreate.bind(null, this.props.searchTerm),
	                className: cx({
	                  "rw-list-option": true,
	                  "rw-state-focus": !this._data().length || this.state.focusedItem === null
	                }) },
	              React.createElement(
	                "strong",
	                null,
	                "\"" + this.props.searchTerm + "\""
	              ),
	              " ",
	              this.props.messages.createNew
	            )
	          )
	        )
	      )
	    );
	  },

	  _data: function () {
	    return this.state.processedData;
	  },

	  _delete: function (value) {
	    this._focus(true);
	    this.change(this.state.dataItems.filter(function (d) {
	      return d !== value;
	    }));
	  },

	  _inputFocus: function (e) {
	    this._focus(true);
	    !this.props.open && this.open();
	  },

	  _focus: function (focused, e) {
	    var _this = this;

	    if (this.props.disabled === true) return;

	    this.setTimeout("focus", function () {
	      if (focused) _this.refs.input.focus();else _this.refs.tagList && _this.refs.tagList.clear();

	      if (focused !== _this.state.focused) {
	        focused ? _this.open() : _this.close();

	        _this.notify(focused ? "onFocus" : "onBlur", e);
	        _this.setState({ focused: focused });
	      }
	    });
	  },

	  _searchKeyDown: function (e) {
	    if (e.key === "Backspace" && e.target.value && !this._deletingText) this._deletingText = true;
	  },

	  _searchgKeyUp: function (e) {
	    if (e.key === "Backspace" && this._deletingText) this._deletingText = false;
	  },

	  _typing: function (e) {
	    this.notify("onSearch", [e.target.value]);
	    this.open();
	  },

	  _onSelect: function (data) {

	    if (data === undefined) {
	      if (this.props.onCreate) this._onCreate(this.props.searchTerm);

	      return;
	    }

	    this.notify("onSelect", data);
	    this.change(this.state.dataItems.concat(data));

	    this.close();
	    this._focus(true);
	  },

	  _onCreate: function (tag) {
	    if (tag.trim() === "") return;

	    this.notify("onCreate", tag);
	    this.props.searchTerm && this.notify("onSearch", [""]);

	    this.close();
	    this._focus(true);
	  },

	  _keyDown: function (e) {
	    var key = e.key,
	        alt = e.altKey,
	        ctrl = e.ctrlKey,
	        noSearch = !this.props.searchTerm && !this._deletingText,
	        isOpen = this.props.open,
	        focusedItem = this.state.focusedItem,
	        tagList = this.refs.tagList,
	        list = this.refs.list;

	    if (key === "ArrowDown") {
	      var next = list.next(focusedItem),
	          creating = this._shouldShowCreate() && focusedItem === next || focusedItem === null;

	      next = creating ? null : next;

	      e.preventDefault();
	      if (isOpen) this.setState({ focusedItem: next });else this.open();
	    } else if (key === "ArrowUp") {
	      var prev = focusedItem === null ? list.last() : list.prev(focusedItem);

	      e.preventDefault();

	      if (alt) this.close();else if (isOpen) this.setState({ focusedItem: prev });
	    } else if (key === "End") {
	      if (isOpen) this.setState({ focusedItem: list.last() });else tagList && tagList.last();
	    } else if (key === "Home") {
	      if (isOpen) this.setState({ focusedItem: list.first() });else tagList && tagList.first();
	    } else if (isOpen && key === "Enter") ctrl && this.props.onCreate || focusedItem === null ? this._onCreate(this.props.searchTerm) : this._onSelect(this.state.focusedItem);else if (key === "Escape") isOpen ? this.close() : this.refs.tagList.clear();else if (noSearch && key === "ArrowLeft") tagList && tagList.prev();else if (noSearch && key === "ArrowRight") tagList && tagList.next();else if (noSearch && key === "Delete") tagList && tagList.removeCurrent();else if (noSearch && key === "Backspace") tagList && tagList.removeNext();

	    this.notify("onKeyDown", [e]);
	  },

	  change: function (data) {
	    this.notify("onChange", [data]);
	    this.props.searchTerm && this.notify("onSearch", [""]);
	  },

	  open: function () {
	    if (!(this.props.disabled === true || this.props.readOnly === true)) this.notify("onToggle", true);
	  },

	  close: function () {
	    this.notify("onToggle", false);
	  },

	  toggle: function (e) {
	    this.props.open ? this.close() : this.open();
	  },

	  process: function (data, values, searchTerm) {
	    var _this = this;

	    var items = data.filter(function (i) {
	      return !values.some(_this._valueMatcher.bind(null, i), _this);
	    }, this);

	    if (searchTerm) items = this.filter(items, searchTerm);

	    return items;
	  },

	  _shouldShowCreate: function () {
	    var _this = this;

	    var text = this.props.searchTerm;

	    //console.log('should ', this.props.onCreate)

	    if (!this.props.onCreate || !text) return false;

	    // if there is an exact match on textFields: "john" => { name: "john" }, don't show
	    return !this._data().some(function (v) {
	      return _this._dataText(v) === text;
	    }) && !this.state.dataItems.some(function (v) {
	      return _this._dataText(v) === text;
	    });
	  },

	  _placeholder: function () {
	    return (this.props.value || []).length ? "" : this.props.placeholder || "";
	  }

	});

	module.exports = createUncontrolledWidget(Multiselect, { open: "onToggle", value: "onChange", searchTerm: "onSearch" });

	// function defaultChange(){
	//   if ( this.props.searchTerm === undefined )
	//     this.setState({ searchTerm: '' })
	// }

	module.exports.BaseMultiselect = Multiselect;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6),
	    compat = __webpack_require__(15);

	module.exports = React.createClass({

	  displayName: "MultiselectInput",

	  propTypes: {
	    value: React.PropTypes.string,
	    maxLength: React.PropTypes.number,
	    onChange: React.PropTypes.func.isRequired,
	    onFocus: React.PropTypes.func,

	    disabled: React.PropTypes.bool,
	    readOnly: React.PropTypes.bool },

	  componentDidUpdate: function () {
	    this.props.focused && this.focus();
	  },

	  render: function () {
	    var value = this.props.value,
	        placeholder = this.props.placeholder,
	        size = Math.max((value || placeholder).length, 1) + 1;

	    return React.createElement("input", babelHelpers._extends({}, this.props, {
	      type: "text",
	      className: "rw-input",
	      "aria-disabled": this.props.disabled,
	      "aria-readonly": this.props.readOnly,
	      disabled: this.props.disabled,
	      readOnly: this.props.readOnly,
	      size: size }));
	  },

	  focus: function () {
	    compat.findDOMNode(this).focus();
	  }

	});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6),
	    _ = __webpack_require__(12),
	    cx = __webpack_require__(14),
	    Btn = __webpack_require__(49);

	module.exports = React.createClass({

	  displayName: "MultiselectTagList",

	  mixins: [__webpack_require__(36), __webpack_require__(44)],

	  propTypes: {
	    value: React.PropTypes.array,

	    valueField: React.PropTypes.string,
	    textField: React.PropTypes.string,

	    valueComponent: React.PropTypes.func,

	    disabled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.array, React.PropTypes.oneOf(["disabled"])]),

	    readOnly: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.array, React.PropTypes.oneOf(["readonly"])])
	  },

	  getInitialState: function () {
	    return {
	      focused: null
	    };
	  },

	  render: function () {
	    var _this = this;

	    var ValueComponent = this.props.valueComponent,
	        props = _.omit(this.props, ["value", "disabled", "readOnly"]),
	        focusIdx = this.state.focused,
	        value = this.props.value;

	    return React.createElement(
	      "ul",
	      babelHelpers._extends({}, props, {
	        className: "rw-multiselect-taglist" }),
	      value.map(function (item, i) {
	        var disabled = _this.isDisabled(item),
	            readonly = _this.isReadOnly(item);

	        return React.createElement(
	          "li",
	          { key: i,
	            className: cx({
	              "rw-state-focus": !disabled && focusIdx === i,
	              "rw-state-disabled": disabled,
	              "rw-state-readonly": readonly }) },
	          ValueComponent ? React.createElement(ValueComponent, { item: item }) : _this._dataText(item),
	          React.createElement(
	            Btn,
	            { tabIndex: "-1", onClick: !(disabled || readonly) && _this._delete.bind(null, item),
	              "aria-disabled": disabled,
	              disabled: disabled },
	            "×",
	            React.createElement(
	              "span",
	              { className: "rw-sr" },
	              "Remove " + _this._dataText(item)
	            )
	          )
	        );
	      })
	    );
	  },

	  _delete: function (val, e) {
	    this.props.onDelete(val);
	  },

	  removeCurrent: function () {
	    var val = this.props.value[this.state.focused];

	    if (val && !(this.isDisabled(val) || this.isReadOnly(val))) this.props.onDelete(val);
	  },

	  isDisabled: function (val, isIdx) {
	    if (isIdx) val = this.props.value[val];

	    return this.props.disabled === true || this._dataIndexOf(this.props.disabled || [], val) !== -1;
	  },

	  isReadOnly: function (val, isIdx) {
	    if (isIdx) val = this.props.value[val];

	    return this.props.readOnly === true || this._dataIndexOf(this.props.readOnly || [], val) !== -1;
	  },

	  removeNext: function () {
	    var val = this.props.value[this.props.value.length - 1];

	    if (val && !(this.isDisabled(val) || this.isReadOnly(val))) this.props.onDelete(val);
	  },

	  clear: function () {
	    this.setState({ focused: null });
	  },

	  first: function () {
	    var idx = 0,
	        l = this.props.value.length;

	    while (idx < l && this.isDisabled(idx, true)) idx++;

	    if (idx !== l) this.setState({ focused: idx });
	  },

	  last: function () {
	    var idx = this.props.value.length - 1;

	    while (idx > -1 && this.isDisabled(idx, true)) idx--;

	    if (idx >= 0) this.setState({ focused: idx });
	  },

	  next: function () {
	    var nextIdx = this.state.focused + 1,
	        l = this.props.value.length;

	    while (nextIdx < l && this.isDisabled(nextIdx, true)) nextIdx++;

	    if (this.state.focused === null) return;

	    if (nextIdx >= l) return this.clear();

	    this.setState({ focused: nextIdx });
	  },

	  prev: function () {
	    var nextIdx = this.state.focused;

	    if (nextIdx === null) nextIdx = this.props.value.length;

	    nextIdx--;

	    while (nextIdx > -1 && this.isDisabled(nextIdx, true)) nextIdx--;

	    if (nextIdx >= 0) this.setState({ focused: nextIdx });
	  }
	});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var babelHelpers = __webpack_require__(11);
	var React = __webpack_require__(6),
	    _ = __webpack_require__(12),
	    cx = __webpack_require__(14),
	    createUncontrolledWidget = __webpack_require__(41),
	    compat = __webpack_require__(15),
	    CustomPropTypes = __webpack_require__(16),
	    PlainList = __webpack_require__(34),
	    GroupableList = __webpack_require__(39),
	    validateList = __webpack_require__(40),
	    scrollTo = __webpack_require__(46);

	var propTypes = {

	  data: React.PropTypes.array,
	  value: React.PropTypes.oneOfType([React.PropTypes.any, React.PropTypes.array]),
	  onChange: React.PropTypes.func,
	  onMove: React.PropTypes.func,

	  multiple: React.PropTypes.bool,

	  itemComponent: CustomPropTypes.elementType,
	  listComponent: CustomPropTypes.elementType,

	  valueField: React.PropTypes.string,
	  textField: React.PropTypes.string,

	  busy: React.PropTypes.bool,

	  filter: React.PropTypes.string,
	  delay: React.PropTypes.number,

	  disabled: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.bool, React.PropTypes.oneOf(["disabled"])]),

	  readOnly: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.array, React.PropTypes.oneOf(["readonly"])]),

	  messages: React.PropTypes.shape({
	    emptyList: React.PropTypes.string
	  }) };

	var SelectList = React.createClass({
	  displayName: "SelectList",

	  propTypes: propTypes,

	  mixins: [__webpack_require__(35), __webpack_require__(43), __webpack_require__(36), __webpack_require__(47)],

	  getDefaultProps: function () {
	    return {
	      delay: 250,
	      value: [],
	      data: [],
	      messages: {
	        emptyList: "There are no items in this list"
	      }
	    };
	  },

	  getDefaultState: function (props) {
	    var _this = this;

	    var isRadio = !props.multiple,
	        values = _.splat(props.value),
	        first = isRadio && this._dataItem(props.data, values[0]);

	    first = isRadio && first ? first : (this.state || {}).focusedItem || null;

	    return {
	      focusedItem: first,
	      dataItems: !isRadio && values.map(function (item) {
	        return _this._dataItem(props.data, item);
	      })
	    };
	  },

	  getInitialState: function () {
	    var state = this.getDefaultState(this.props);

	    state.ListItem = getListItem(this);

	    return state;
	  },

	  componentWillReceiveProps: function (nextProps) {
	    return this.setState(this.getDefaultState(nextProps));
	  },

	  componentDidMount: function () {
	    validateList(this.refs.list);
	  },

	  render: function () {
	    var _$omit = _.omit(this.props, Object.keys(propTypes));

	    var className = _$omit.className;
	    var props = babelHelpers.objectWithoutProperties(_$omit, ["className"]);
	    var focus = this._maybeHandle(this._focus.bind(null, true), true);
	    var optID = this._id("_selected_option");
	    var blur = this._focus.bind(null, false);
	    var List = this.props.listComponent || this.props.groupBy && GroupableList || PlainList;
	    var focusedItem = this.state.focused && !this.isDisabled() && !this.isReadOnly() && this.state.focusedItem;

	    return React.createElement(
	      "div",
	      babelHelpers._extends({}, props, {
	        onKeyDown: this._maybeHandle(this._keyDown),
	        onFocus: focus,
	        onBlur: blur,
	        tabIndex: "0",
	        role: "listbox",
	        "aria-busy": !!this.props.busy,
	        "aria-activedescendent": this.state.focused ? optID : undefined,
	        "aria-disabled": this.isDisabled(),
	        "aria-readonly": this.isReadOnly(),
	        className: cx(className, "rw-widget", "rw-selectlist", {
	          "rw-state-focus": this.state.focused,
	          "rw-state-disabled": this.isDisabled(),
	          "rw-state-readonly": this.isReadOnly(),
	          "rw-rtl": this.isRtl(),
	          "rw-loading-mask": this.props.busy
	        }) }),
	      React.createElement(List, babelHelpers._extends({ ref: "list"
	      }, _.pick(this.props, Object.keys(compat.type(List).propTypes)), {
	        data: this._data(),
	        focused: focusedItem,
	        optID: optID,
	        itemComponent: this.state.ListItem,
	        onMove: this._scrollTo }))
	    );
	  },

	  _scrollTo: function (selected, list) {
	    var handler = this.props.onMove;

	    if (handler) handler(selected, list);else {
	      this._scrollCancel && this._scrollCancel();
	      // default behavior is to scroll the whole page not just the widget
	      this._scrollCancel = scrollTo(selected);
	    }
	  },

	  _keyDown: function (e) {
	    var self = this,
	        key = e.key,
	        multiple = !!this.props.multiple,
	        list = this.refs.list,
	        focusedItem = this.state.focusedItem;

	    if (key === "End") {
	      e.preventDefault();

	      if (multiple) this.setState({ focusedItem: move("prev", null) });else change(move("prev", null));
	    } else if (key === "Home") {
	      e.preventDefault();

	      if (multiple) this.setState({ focusedItem: move("next", null) });else change(move("next", null));
	    } else if (key === "Enter" || key === " ") {
	      e.preventDefault();
	      change(focusedItem);
	    } else if (key === "ArrowDown" || key === "ArrowRight") {
	      e.preventDefault();

	      if (multiple) this.setState({ focusedItem: move("next", focusedItem) });else change(move("next", focusedItem));
	    } else if (key === "ArrowUp" || key === "ArrowLeft") {
	      e.preventDefault();

	      if (multiple) this.setState({ focusedItem: move("prev", focusedItem) });else change(move("prev", focusedItem));
	    } else if (this.props.multiple && e.keyCode === 65 && e.ctrlKey) {
	      e.preventDefault();
	      this._selectAll();
	    } else this.search(String.fromCharCode(e.keyCode));

	    function change(item, cked) {
	      if (item) {
	        self._change(item, multiple ? !self._contains(item, self._values()) // toggle value
	        : true);
	      }
	    }

	    function move(dir, item) {
	      var isDisabled = function (item) {
	        return self.isDisabledItem(item) || self.isReadOnlyItem(item);
	      },
	          stop = dir === "next" ? list.last() : list.first(),
	          next = list[dir](item);

	      while (next !== stop && isDisabled(next)) next = list[dir](next);

	      return isDisabled(next) ? item : next;
	    }
	  },

	  _selectAll: function () {
	    var _this = this;

	    var values = this.state.dataItems,
	        disabled = this.props.disabled || this.props.readOnly,
	        data = this._data(),
	        blacklist;

	    disabled = Array.isArray(disabled) ? disabled : [];
	    //disabled values that are not selected
	    blacklist = disabled.filter(function (v) {
	      return !_this._contains(v, values);
	    });
	    data = data.filter(function (v) {
	      return !_this._contains(v, blacklist);
	    });

	    if (data.length === values.length) {
	      data = disabled.filter(function (v) {
	        return _this._contains(v, values);
	      });
	      data = data.map(function (v) {
	        return _this._dataItem(_this._data(), v);
	      });
	    }

	    this.notify("onChange", [data]);
	  },

	  _change: function (item, checked) {
	    var multiple = !!this.props.multiple,
	        blacklist = this.props.disabled || this.props.readOnly,
	        values = this.state.dataItems;

	    blacklist = Array.isArray(blacklist) ? blacklist : [];

	    //if(this._contains(item, blacklist)) return

	    if (!multiple) return this.notify("onChange", checked ? item : null);

	    values = checked ? values.concat(item) : values.filter(function (v) {
	      return v !== item;
	    });

	    this.notify("onChange", [values || []]);
	  },

	  _focus: function (focused, e) {
	    var _this = this;

	    this.setTimeout("focus", function () {
	      if (focused) compat.findDOMNode(_this).focus();
	      if (focused !== _this.state.focused) {
	        _this.setState({ focused: focused });
	      }
	    });
	  },

	  isDisabledItem: function (item) {
	    return this.isDisabled() || this._contains(item, this.props.disabled);
	  },

	  isReadOnlyItem: function (item) {
	    return this.isReadOnly() || this._contains(item, this.props.readOnly);
	  },

	  search: function (character) {
	    var _this = this;

	    var word = ((this._searchTerm || "") + character).toLowerCase(),
	        list = this.refs.list;

	    this._searchTerm = word;

	    this.setTimeout("search", function () {
	      var focusedItem = list.next(_this.state.focusedItem, word);

	      _this._searchTerm = "";

	      if (focusedItem) _this.setState({ focusedItem: focusedItem });
	    }, this.props.delay);
	  },

	  _data: function () {
	    return this.props.data;
	  },

	  _contains: function (item, values) {
	    return Array.isArray(values) ? values.some(this._valueMatcher.bind(null, item)) : this._valueMatcher(item, values);
	  },

	  _values: function () {
	    return !!this.props.multiple ? this.state.dataItems : this.props.value;
	  }

	});

	function getListItem(parent) {

	  return React.createClass({

	    displayName: "SelectItem",

	    render: function () {
	      var props = babelHelpers.objectWithoutProperties(this.props, []);
	      var item = this.props.item;
	      var checked = parent._contains(item, parent._values());
	      var change = parent._change.bind(null, item);
	      var disabled = parent.isDisabledItem(item);
	      var readonly = parent.isReadOnlyItem(item);
	      var Component = parent.props.itemComponent;
	      var name = parent.props.name || parent._id("_name");

	      return React.createElement(
	        "label",
	        {
	          className: cx({
	            "rw-state-disabled": disabled,
	            "rw-state-readonly": readonly
	          }) },
	        React.createElement("input", babelHelpers._extends({}, props, {
	          tabIndex: "-1",
	          name: name,
	          type: parent.props.multiple ? "checkbox" : "radio",

	          onChange: onChange,
	          checked: checked,
	          disabled: disabled || readonly,
	          "aria-disabled": disabled || readonly })),
	        Component ? React.createElement(Component, { item: item }) : parent._dataText(item)
	      );

	      function onChange(e) {
	        if (!disabled && !readonly) change(e.target.checked);
	      }
	    }
	  });
	}

	module.exports = SelectList;

	module.exports = createUncontrolledWidget(SelectList, { value: "onChange" });

	module.exports.BaseSelectList = SelectList;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var configuration = __webpack_require__(32);

	module.exports = {

	  setGlobalizeInstance: function (globalize) {
	    configuration.globalize = globalize;
	  },

	  setAnimate: function (animatefn) {
	    configuration.animate = animatefn;
	  }

	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	var React = __webpack_require__(6),
	    ReactWidgetsList = __webpack_require__(34),
	    CustomPropTypes = __webpack_require__(16);

	var RUCList = React.createClass({

		displayName: 'RUCList',

		propTypes: {
			disabledItems: React.PropTypes.array,
			data: React.PropTypes.array,
			onSelect: React.PropTypes.func,
			onMove: React.PropTypes.func,
			itemComponent: CustomPropTypes.elementType,

			selectedIndex: React.PropTypes.number,
			focusedIndex: React.PropTypes.number,
			valueField: React.PropTypes.string,
			textField: React.PropTypes.string,

			optID: React.PropTypes.string,

			messages: React.PropTypes.shape({
				emptyList: React.PropTypes.string
			})
		},

		componentWillMount: function componentWillMount() {
			var parent = this;

			this.setState({
				listItem: React.createClass({
					displayName: 'listItem',

					render: function render() {
						var classes = parent.isDisabled(this.props.item) ? 'rw-state-disabled' : '',
						    ItemComponent = parent.props.itemComponent;

						return React.createElement(
							'div',
							{ className: classes },
							React.createElement(ItemComponent, { item: this.props.item })
						);
					}
				})
			});
		},

		render: function render() {
			var _this = this;

			return React.createElement(ReactWidgetsList, _extends({}, this.props, {
				ref: 'list',
				itemComponent: this.state.listItem,
				onSelect: function (item) {
					if (!_this.isDisabled(item)) _this.props.onSelect(item);
				}
			}));
		},

		isDisabled: function isDisabled(item) {
			return this.props.disabledItems && this.props.disabledItems.some(function (disabledItem) {
				return disabledItem.id === item.id;
			});
		},

		move: function move(step) {
			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}

			var stop,
			    dir,
			    next,
			    item = [].concat(args)[0],
			    remainingArgs;

			remainingArgs = [].concat(args);
			remainingArgs = remainingArgs.splice(1);

			if (step === 'last' || step === 'prev') {
				stop = this.refs.list.first();
				dir = 'prev';
			} else {
				stop = this.refs.list.last();
				dir = 'next';
			}

			if (item) {
				var _refs$list;

				next = (_refs$list = this.refs.list)[dir].apply(_refs$list, [item].concat(_toConsumableArray(remainingArgs))); // next, prev
			} else {
					next = this.refs.list[step](); //last, first
				}

			if (!next) {
				return;
			}

			while (next !== stop && this.isDisabled(next)) {
				var _refs$list2;

				next = (_refs$list2 = this.refs.list)[dir].apply(_refs$list2, [next].concat(_toConsumableArray(remainingArgs)));
			}

			return this.isDisabled(next) ? item : next;
		},

		first: function first() {

			return this.move('first');
		},

		last: function last() {

			return this.move('last');
		},

		next: function next() {
			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			return this.move.apply(this, ['next'].concat(args));
		},

		prev: function prev() {
			for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				args[_key3] = arguments[_key3];
			}

			return this.move.apply(this, ['prev'].concat(args));
		}
	});

	module.exports = RUCList;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fixedDataTable = __webpack_require__(80);

	var _fixedDataTable2 = _interopRequireDefault(_fixedDataTable);

	__webpack_require__(81);

	var _jquery = __webpack_require__(83);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _underscore = __webpack_require__(84);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _storesDataTableStore = __webpack_require__(85);

	var _storesDataTableStore2 = _interopRequireDefault(_storesDataTableStore);

	var _actionsDataTableActionCreators = __webpack_require__(93);

	var _actionsDataTableActionCreators2 = _interopRequireDefault(_actionsDataTableActionCreators);

	var _constantsDataTableConstants = __webpack_require__(91);

	var _constantsDataTableConstants2 = _interopRequireDefault(_constantsDataTableConstants);

	var _utilsHelpers = __webpack_require__(94);

	var _utilsHelpers2 = _interopRequireDefault(_utilsHelpers);

	__webpack_require__(95);

	var Table = _fixedDataTable2['default'].Table;
	var Column = _fixedDataTable2['default'].Column;

	function _getStateFromStores() {

		return {
			rowsCount: _storesDataTableStore2['default'].getRowsCount(),
			isSelectAllChecked: _storesDataTableStore2['default'].getIsSelectAllChecked(),
			sortBy: _storesDataTableStore2['default'].getSortBy(),
			sortDir: _storesDataTableStore2['default'].getSortDir()
		};
	}

	var RUCDataTable = _react2['default'].createClass({
		displayName: 'RUCDataTable',

		/*
	  * Public API members
	  */
		propTypes: {

			//FixedDataTable props below
			fdtTable: _react2['default'].PropTypes.object.isRequired,
			fdtColumns: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.object).isRequired,

			//RUCDataTable props below
			isSelectable: _react2['default'].PropTypes.bool,
			selectableColumn: _react2['default'].PropTypes.object,
			autoWidth: _react2['default'].PropTypes.bool,
			externalFixedContentSize: _react2['default'].PropTypes.number,
			onGetRows: _react2['default'].PropTypes.func.isRequired,
			pageSize: _react2['default'].PropTypes.number.isRequired,
			filters: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.object),
			onLoading: _react2['default'].PropTypes.func
		},

		/*
	 * Get all the selected rows
	 */
		getAllSelectedRows: function getAllSelectedRows() {

			return _storesDataTableStore2['default'].getAllSelectedRows().slice(); //new array object
		},

		refresh: function refresh() {

			_actionsDataTableActionCreators2['default'].refresh();
		},

		getDefaultProps: function getDefaultProps() {

			return {
				fdtTable: {
					rowHeight: _constantsDataTableConstants2['default'].ComponentTypes.ROW_HEIGHT,
					maxHeight: _constantsDataTableConstants2['default'].ComponentTypes.MAX_HEIGHT,
					headerHeight: _constantsDataTableConstants2['default'].ComponentTypes.HEADER_HEIGHT
				},
				isSelectable: true,
				selectableColumn: {
					type: _constantsDataTableConstants2['default'].ColumnTypes.SELECTABLE,
					width: _constantsDataTableConstants2['default'].ColumnTypes.SELECTABLE_COLUMN_WIDTH
				},
				autoWidth: false,
				externalFixedContentSize: _constantsDataTableConstants2['default'].ComponentTypes.EXTERNAL_FIXED_CONTENT_SIZE,
				filters: []
			};
		},

		getInitialState: function getInitialState() {

			var stateFromStores = _getStateFromStores();

			return _underscore2['default'].extend(stateFromStores, {
				availableWidth: this._getAvailableWidth(),
				columns: this._getNormalizeColumns(this.props.fdtColumns)
			});
		},

		componentWillReceiveProps: function componentWillReceiveProps(props) {

			/*
	   * Public API members
	   */
			if (this.props.autoWidth !== props.autoWidth) {
				this._setupAutoWidthBehavior(props.autoWidth);
			}

			if (!_utilsHelpers2['default'].filterArraysAreSame(this.props.filters, props.filters)) {
				_actionsDataTableActionCreators2['default'].filterBy(props.filters);
			}
		},

		componentDidMount: function componentDidMount() {

			this._setupAutoWidthBehavior(this.props.autoWidth);

			_storesDataTableStore2['default'].addChangeListener(this._onChange);
		},

		componentWillUnmount: function componentWillUnmount() {

			_storesDataTableStore2['default'].removeChangeListener(this._onChange);
		},

		render: function render() {

			var width = this.props.isSelectable ? this.props.selectableColumn.width : 0;

			_underscore2['default'].each(this.state.columns, function (column) {
				width += column.width;
			});

			var rowHeight = _storesDataTableStore2['default'].getIsEmpty() ? _constantsDataTableConstants2['default'].ComponentTypes.EMPTY_ROW_HEIGHT : this.props.fdtTable.rowHeight;

			//Notifies when the component is loading / stop loaded data
			if (this.props.onLoading) {
				this.props.onLoading(_storesDataTableStore2['default'].getIsLoading());
			}

			return _react2['default'].createElement(
				'div',
				null,
				this._renderLoading(),
				_react2['default'].createElement(
					Table,
					_extends({}, this.props.fdtTable, {
						rowHeight: rowHeight,
						rowsCount: this.state.rowsCount,
						onRowClick: this._onRowClick,
						headerDataGetter: this._headerDataGetter,
						width: width,
						rowGetter: this._rowGetter }),
					this._renderColumns()
				),
				this._renderNoData()
			);
		},

		_getAvailableWidth: function _getAvailableWidth() {

			return (0, _jquery2['default'])(window).width() - this.props.externalFixedContentSize - (this.props.isSelectable ? this.props.selectableColumn.width : 0);
		},

		/*
	 * Only one "autoWidth" column is allowed and it must be specified as the last column.
	 *
	 * */
		_getNormalizeColumns: function _getNormalizeColumns(columns) {

			var normalizedColumns = [],
			    availableWidth = this._getAvailableWidth(),
			    totalAvailableWidthPercentage = 0;

			columns.forEach(function (column) {

				if (_underscore2['default'].isNumber(column.width)) {
					column.autoWidth = false;
					column.availableWidthPercentage = column.width / availableWidth;
					totalAvailableWidthPercentage += column.availableWidthPercentage;
				} else {
					column.autoWidth = true;
					column.availableWidthPercentage = 1 - totalAvailableWidthPercentage;
				}

				normalizedColumns.push(column);
			});

			return normalizedColumns;
		},

		_renderLoading: function _renderLoading() {

			//todo: inject the loading bar inside "componentDidUpdate"
			if (_storesDataTableStore2['default'].getIsLoading()) {
				return _react2['default'].createElement('div', { className: 'data-table-loading-bar' });
			}

			return _react2['default'].createElement('div', { className: 'empty-data-table-loading-bar' });
		},

		_renderNoData: function _renderNoData() {

			if (_storesDataTableStore2['default'].getNoData()) {
				return _react2['default'].createElement(
					'div',
					{ className: 'empty-data-table-message' },
					_constantsDataTableConstants2['default'].ComponentTypes.EMPTY_MESSAGE
				);
			}
		},

		_renderColumns: function _renderColumns() {

			var columns = [];

			if (this.props.isSelectable) {
				columns.push(_react2['default'].createElement(Column, {
					width: this.props.selectableColumn.width,
					dataKey: 'selected',
					cellRenderer: this._selectedCellRenderer,
					headerRenderer: this._selectedHeaderRenderer
				}));
			}

			_underscore2['default'].each(this.state.columns, function (column) {

				var originalLabel = column.label;

				columns.push(_react2['default'].createElement(Column, _extends({}, column, {
					label: column.name === this.state.sortBy ? this.state.sortDir === _constantsDataTableConstants2['default'].SortTypes.ASC ? "+" : "-" : "", //this hack forces the header to re-render in order to display the sort icon
					dataKey: column.name,
					headerRenderer: this._columnHeaderRenderer.bind(this, originalLabel)
				})));
			}, this);

			return columns;
		},

		_columnHeaderRenderer: function _columnHeaderRenderer(label, cellDataKey) {

			return _react2['default'].createElement(
				'div',
				{ tabIndex: '0', className: 'public_fixedDataTableCell_cellContent_sortable', onClick: this._onSortRowsBy.bind(null, cellDataKey) },
				label,
				this._renderSort(cellDataKey)
			);
		},

		_renderSort: function _renderSort(columnName) {

			var isSorted = columnName === this.state.sortBy;

			if (isSorted) {
				if (this.state.sortDir === _constantsDataTableConstants2['default'].SortTypes.ASC) {
					return _react2['default'].createElement('span', { className: 'ico-sort-asc' });
				}

				return _react2['default'].createElement('span', { className: 'ico-sort-desc' });
			}

			return null;
		},

		_selectedCellRenderer: function _selectedCellRenderer(cellData, cellDataKey) {

			return _react2['default'].createElement(
				'div',
				{ className: 'public_fixedDataTableCell_cellContent_selectable' },
				_react2['default'].createElement('input', { type: 'checkbox', tabIndex: -1, checked: cellData, onChange: function () {} })
			);
		},

		_selectedHeaderRenderer: function _selectedHeaderRenderer(label, cellDataKey) {

			return _react2['default'].createElement(
				'div',
				{ className: 'public_fixedDataTableCell_cellContent_selectable' },
				_react2['default'].createElement('input', { type: 'checkbox', checked: this.state.isSelectAllChecked, onChange: this._onCheckAll })
			);
		},

		_onChange: function _onChange() {

			this.setState(_getStateFromStores());
		},

		_rowGetter: function _rowGetter(rowIndex) {

			return _storesDataTableStore2['default'].getRowData(rowIndex, this.props.onGetRows, this.props.pageSize, this.props.filters);
		},

		_headerDataGetter: function _headerDataGetter(header) {

			if (header === "selected") {
				return this.state.isSelectAllChecked;
			}

			return header;
		},

		_onSortRowsBy: function _onSortRowsBy(cellDataKey) {

			_actionsDataTableActionCreators2['default'].sortRowsBy(cellDataKey);
		},

		_onCheckAll: function _onCheckAll(e) {

			_actionsDataTableActionCreators2['default'].toggleSelectedAll();
		},

		_onRowClick: function _onRowClick(e, index) {

			_actionsDataTableActionCreators2['default'].toggleSelected(index);
		},

		_setupAutoWidthBehavior: function _setupAutoWidthBehavior(isAutoWidth) {

			if (isAutoWidth) {
				(0, _jquery2['default'])(window).off('resize', this._onResize);
				(0, _jquery2['default'])(window).on('resize', this._onResize);

				this._updateColumnWidths();
			} else {
				(0, _jquery2['default'])(window).off('resize', this._onResize);
			}
		},

		_onResize: function _onResize() {

			clearTimeout(this._updateTimer);
			this._updateTimer = setTimeout(this._updateColumnWidths, 16);
		},

		_updateColumnWidths: function _updateColumnWidths() {

			var availableWidth = this._getAvailableWidth(),
			    previousAvailableWidth = this.state.availableWidth,
			    i,
			    newColumns = this.state.columns.slice(),
			    totalWidth = 0;

			for (i = 0; i < this.state.columns.length; i++) {
				if (newColumns[i].autoWidth) {
					newColumns[i].width = availableWidth - totalWidth;
				} else {
					newColumns[i].width = newColumns[i].width + newColumns[i].availableWidthPercentage * (availableWidth - previousAvailableWidth);
					totalWidth += newColumns[i].width;
				}
			}

			this.setState({
				availableWidth: availableWidth,
				columns: newColumns
			});
		}
	});

	module.exports = RUCDataTable;

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_80__;

/***/ },
/* 81 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 82 */,
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.1.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-04-28T16:01Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//

	var arr = [];

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		// Use the correct document accordingly with window argument (sandbox)
		document = window.document,

		version = "2.1.4",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function( callback, args ) {
			return jQuery.each( this, callback, args );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map(this, function( elem, i ) {
				return callback.call( elem, i, elem );
			}));
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor(null);
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type(obj) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
		},

		isPlainObject: function( obj ) {
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			if ( obj.constructor &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}

			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call(obj) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {
				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf("use strict") === 1 ) {
					script = document.createElement("script");
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {
				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval
					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		// args is for internal usage only
		each: function( obj, callback, args ) {
			var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike( obj );

			if ( args ) {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				}

			// A special, fast, case for the most common use of each
			} else {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArraylike( Object(arr) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var value,
				i = 0,
				length = elems.length,
				isArray = isArraylike( elems ),
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	});

	function isArraylike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.nodeType === 1 && length ) {
			return true;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace( "w", "w#" ),

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + characterEncoding + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + characterEncoding + ")" ),
			"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
			"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}

		context = context || document;
		results = results || [];
		nodeType = context.nodeType;

		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		if ( !seed && documentIsHTML ) {

			// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
				// Speed-up: Sizzle("#ID")
				if ( (m = match[1]) ) {
					if ( nodeType === 9 ) {
						elem = context.getElementById( m );
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document (jQuery #6963)
						if ( elem && elem.parentNode ) {
							// Handle the case where IE, Opera, and Webkit return items
							// by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}
					} else {
						// Context is not a document
						if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
							contains( context, elem ) && elem.id === m ) {
							results.push( elem );
							return results;
						}
					}

				// Speed-up: Sizzle("TAG")
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Speed-up: Sizzle(".CLASS")
				} else if ( (m = match[3]) && support.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// QSA path
			if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
				nid = old = expando;
				newContext = context;
				newSelector = nodeType !== 1 && selector;

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					groups = tokenize( selector );

					if ( (old = context.getAttribute("id")) ) {
						nid = old.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", nid );
					}
					nid = "[id='" + nid + "'] ";

					i = groups.length;
					while ( i-- ) {
						groups[i] = nid + toSelector( groups[i] );
					}
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
					newSelector = groups.join(",");
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch(qsaError) {
					} finally {
						if ( !old ) {
							context.removeAttribute("id");
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = attrs.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// If no document and documentElement is available, return
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Set our document
		document = doc;
		docElem = doc.documentElement;
		parent = doc.defaultView;

		// Support: IE>8
		// If iframe document is assigned to "document" variable and if iframe has been reloaded,
		// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
		// IE6-8 do not support the defaultView property so parent will be undefined
		if ( parent && parent !== parent.top ) {
			// IE11 does not have attachEvent, so all must suffer
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Support tests
		---------------------------------------------------------------------- */
		documentIsHTML = !isXML( doc );

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( doc.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					return m && m.parentNode ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\f]' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = doc.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully does not implement inclusive descendent
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === doc ? -1 :
					b === doc ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return doc;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, outerCache, node, diff, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[ expando ] || (parent[ expando ] = {});
								cache = outerCache[ type ] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										outerCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							// Use previously-cached element index if available
							} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
								diff = cache[1];

							// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
										// Cache the index of each encountered element
										if ( useCache ) {
											(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
							if ( (oldCache = outerCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								outerCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context !== document && context;
				}

				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// Apply set filters to unmatched elements
				matchedCount += i;
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is no seed and only one group
		if ( match.length === 1 ) {

			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			});

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			});

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
		});
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	};

	jQuery.fn.extend({
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter(function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				}) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow(this, selector || [], false) );
		},
		not: function( selector ) {
			return this.pushStack( winnow(this, selector || [], true) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	});


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && (match[1] || !context) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[1] ) {
						context = context instanceof jQuery ? context[0] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[2] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {
							// Inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || rootjQuery ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof rootjQuery.ready !== "undefined" ?
					rootjQuery.ready( selector ) :
					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.extend({
		dir: function( elem, dir, until ) {
			var matched = [],
				truncate = until !== undefined;

			while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
				if ( elem.nodeType === 1 ) {
					if ( truncate && jQuery( elem ).is( until ) ) {
						break;
					}
					matched.push( elem );
				}
			}
			return matched;
		},

		sibling: function( n, elem ) {
			var matched = [];

			for ( ; n; n = n.nextSibling ) {
				if ( n.nodeType === 1 && n !== elem ) {
					matched.push( n );
				}
			}

			return matched;
		}
	});

	jQuery.fn.extend({
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter(function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[i] ) ) {
						return true;
					}
				}
			});
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
					// Always skip document fragments
					if ( cur.nodeType < 11 && (pos ?
						pos.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector(cur, selectors)) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.unique(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});

	function sibling( cur, dir ) {
		while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each({
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return jQuery.dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return jQuery.dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return jQuery.dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return jQuery.sibling( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.unique( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	});
	var rnotwhite = (/\S+/g);



	// String to Object options format cache
	var optionsCache = {};

	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions( options ) {
		var object = optionsCache[ options ] = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		});
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			( optionsCache[ options ] || createOptions( options ) ) :
			jQuery.extend( {}, options );

		var // Last fire value (for non-forgettable lists)
			memory,
			// Flag to know if list was already fired
			fired,
			// Flag to know if list is currently firing
			firing,
			// First callback to fire (used internally by add and fireWith)
			firingStart,
			// End of the loop when firing
			firingLength,
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
			// Actual callback list
			list = [],
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
			// Fire callbacks
			fire = function( data ) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for ( ; list && firingIndex < firingLength; firingIndex++ ) {
					if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if ( list ) {
					if ( stack ) {
						if ( stack.length ) {
							fire( stack.shift() );
						}
					} else if ( memory ) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
						// First, we save the current length
						var start = list.length;
						(function add( args ) {
							jQuery.each( args, function( _, arg ) {
								var type = jQuery.type( arg );
								if ( type === "function" ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && type !== "string" ) {
									// Inspect recursively
									add( arg );
								}
							});
						})( arguments );
						// Do we need to add the callbacks to the
						// current firing batch?
						if ( firing ) {
							firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
						} else if ( memory ) {
							firingStart = start;
							fire( memory );
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function() {
					if ( list ) {
						jQuery.each( arguments, function( _, arg ) {
							var index;
							while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
								list.splice( index, 1 );
								// Handle firing indexes
								if ( firing ) {
									if ( index <= firingLength ) {
										firingLength--;
									}
									if ( index <= firingIndex ) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
				},
				// Remove all callbacks from the list
				empty: function() {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function() {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function() {
					return !list;
				},
				// Lock the list in its current state
				lock: function() {
					stack = undefined;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function() {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( list && ( !fired || stack ) ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						if ( firing ) {
							stack.push( args );
						} else {
							fire( args );
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend({

		Deferred: function( func ) {
			var tuples = [
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks("memory") ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred(function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[1] ](function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.done( newDefer.resolve )
											.fail( newDefer.reject )
											.progress( newDefer.notify );
									} else {
										newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[1] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(function() {
						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[0] ] = function() {
					deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[0] + "With" ] = list.fireWith;
			});

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject )
							.progress( updateFunc( i, progressContexts, progressValues ) );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	});


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend({
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	});

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// We once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if ( document.readyState === "complete" ) {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed, false );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed, false );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[0], key ) : emptyGet;
	};


	/**
	 * Determines whether an object can have data
	 */
	jQuery.acceptData = function( owner ) {
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};


	function Data() {
		// Support: Android<4,
		// Old WebKit does not have Object.preventExtensions/freeze method,
		// return new empty object instead with no [[set]] accessor
		Object.defineProperty( this.cache = {}, 0, {
			get: function() {
				return {};
			}
		});

		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;
	Data.accepts = jQuery.acceptData;

	Data.prototype = {
		key: function( owner ) {
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return the key for a frozen object.
			if ( !Data.accepts( owner ) ) {
				return 0;
			}

			var descriptor = {},
				// Check if the owner object already has a cache key
				unlock = owner[ this.expando ];

			// If not, create one
			if ( !unlock ) {
				unlock = Data.uid++;

				// Secure it in a non-enumerable, non-writable property
				try {
					descriptor[ this.expando ] = { value: unlock };
					Object.defineProperties( owner, descriptor );

				// Support: Android<4
				// Fallback to a less secure definition
				} catch ( e ) {
					descriptor[ this.expando ] = unlock;
					jQuery.extend( owner, descriptor );
				}
			}

			// Ensure the cache object
			if ( !this.cache[ unlock ] ) {
				this.cache[ unlock ] = {};
			}

			return unlock;
		},
		set: function( owner, data, value ) {
			var prop,
				// There may be an unlock assigned to this node,
				// if there is no entry for this "owner", create one inline
				// and set the unlock as though an owner entry had always existed
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {
				// Fresh assignments by object are shallow copied
				if ( jQuery.isEmptyObject( cache ) ) {
					jQuery.extend( this.cache[ unlock ], data );
				// Otherwise, copy the properties one-by-one to the cache object
				} else {
					for ( prop in data ) {
						cache[ prop ] = data[ prop ];
					}
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			// Either a valid cache is found, or will be created.
			// New caches will be created and the unlock returned,
			// allowing direct access to the newly created
			// empty data object. A valid owner object must be provided.
			var cache = this.cache[ this.key( owner ) ];

			return key === undefined ?
				cache : cache[ key ];
		},
		access: function( owner, key, value ) {
			var stored;
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					((key && typeof key === "string") && value === undefined) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase(key) );
			}

			// [*]When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];

			if ( key === undefined ) {
				this.cache[ unlock ] = {};

			} else {
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );
					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;
				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}
		},
		hasData: function( owner ) {
			return !jQuery.isEmptyObject(
				this.cache[ owner[ this.expando ] ] || {}
			);
		},
		discard: function( owner ) {
			if ( owner[ this.expando ] ) {
				delete this.cache[ owner[ this.expando ] ];
			}
		}
	};
	var data_priv = new Data();

	var data_user = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch( e ) {}

				// Make sure we set the data so it isn't changed later
				data_user.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend({
		hasData: function( elem ) {
			return data_user.hasData( elem ) || data_priv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return data_user.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			data_user.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to data_priv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return data_priv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			data_priv.remove( elem, name );
		}
	});

	jQuery.fn.extend({
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = data_user.get( elem );

					if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice(5) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						data_priv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each(function() {
					data_user.set( this, key );
				});
			}

			return access( this, function( value ) {
				var data,
					camelKey = jQuery.camelCase( key );

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
					// Attempt to get data from the cache
					// with the key as-is
					data = data_user.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to get data from the cache
					// with the key camelized
					data = data_user.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each(function() {
					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = data_user.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					data_user.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf("-") !== -1 && data !== undefined ) {
						data_user.set( this, key, value );
					}
				});
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each(function() {
				data_user.remove( this, key );
			});
		}
	});


	jQuery.extend({
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = data_priv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = data_priv.access( elem, type, jQuery.makeArray(data) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return data_priv.get( elem, key ) || data_priv.access( elem, key, {
				empty: jQuery.Callbacks("once memory").add(function() {
					data_priv.remove( elem, [ type + "queue", key ] );
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[0], type );
			}

			return data === undefined ?
				this :
				this.each(function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[0] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				});
		},
		dequeue: function( type ) {
			return this.each(function() {
				jQuery.dequeue( this, type );
			});
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = data_priv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	});
	var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
		};

	var rcheckableType = (/^(?:checkbox|radio)$/i);



	(function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	})();
	var strundefined = typeof undefined;



	support.focusinBubbles = "onfocusin" in window;


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !(events = elemData.events) ) {
				events = elemData.events = {};
			}
			if ( !(eventHandle = elemData.handle) ) {
				eventHandle = elemData.handle = function( e ) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join(".")
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !(handlers = events[ type ]) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.hasData( elem ) && data_priv.get( elem );

			if ( !elemData || !(events = elemData.events) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;
				data_priv.remove( elem, "events" );
			}
		},

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf(".") >= 0 ) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === (elem.ownerDocument || document) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
					jQuery.acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
								.apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( (event.result = ret) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.disabled !== true || event.type !== "click" ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) >= 0 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		simulate: function( type, elem, event, bubble ) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true,
					originalEvent: {}
				}
			);
			if ( bubble ) {
				jQuery.event.trigger( e, null, elem );
			} else {
				jQuery.event.dispatch.call( elem, e );
			}
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	};

	jQuery.Event = function( src, props ) {
		// Allow instantiation without the 'new' keyword
		if ( !(this instanceof jQuery.Event) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && e.preventDefault ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && e.stopPropagation ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && e.stopImmediatePropagation ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// Support: Chrome 15+
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	});

	// Support: Firefox, Chrome, Safari
	// Create "bubbling" focus and blur events
	if ( !support.focusinBubbles ) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
					jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
				};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						data_priv.remove( doc, fix );

					} else {
						data_priv.access( doc, fix, attaches );
					}
				}
			};
		});
	}

	jQuery.fn.extend({

		on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
			var origFn, type;

			// Types can be a map of types/handlers
			if ( typeof types === "object" ) {
				// ( types-Object, selector, data )
				if ( typeof selector !== "string" ) {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for ( type in types ) {
					this.on( type, selector, data, types[ type ], one );
				}
				return this;
			}

			if ( data == null && fn == null ) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if ( fn == null ) {
				if ( typeof selector === "string" ) {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if ( fn === false ) {
				fn = returnFalse;
			} else if ( !fn ) {
				return this;
			}

			if ( one === 1 ) {
				origFn = fn;
				fn = function( event ) {
					// Can use an empty set, since event contains the info
					jQuery().off( event );
					return origFn.apply( this, arguments );
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
			}
			return this.each( function() {
				jQuery.event.add( this, types, fn, data, selector );
			});
		},
		one: function( types, selector, data, fn ) {
			return this.on( types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each(function() {
				jQuery.event.remove( this, types, fn, selector );
			});
		},

		trigger: function( type, data ) {
			return this.each(function() {
				jQuery.event.trigger( type, data, this );
			});
		},
		triggerHandler: function( type, data ) {
			var elem = this[0];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	});


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rhtml = /<|&#?\w+;/,
		rnoInnerhtml = /<(?:script|style|link)/i,
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

		// We have to close these tags to support XHTML (#13200)
		wrapMap = {

			// Support: IE9
			option: [ 1, "<select multiple='multiple'>", "</select>" ],

			thead: [ 1, "<table>", "</table>" ],
			col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
			tr: [ 2, "<table><tbody>", "</tbody></table>" ],
			td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

			_default: [ 0, "", "" ]
		};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	// Support: 1.x compatibility
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute("type");
		}

		return elem;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			data_priv.set(
				elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
			);
		}
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( data_priv.hasData( src ) ) {
			pdataOld = data_priv.access( src );
			pdataCur = data_priv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( data_user.hasData( src ) ) {
			udataOld = data_user.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			data_user.set( dest, udataCur );
		}
	}

	function getAll( context, tag ) {
		var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
				context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	jQuery.extend({
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		buildFragment: function( elems, context, scripts, selection ) {
			var elem, tmp, tag, wrap, contains, j,
				fragment = context.createDocumentFragment(),
				nodes = [],
				i = 0,
				l = elems.length;

			for ( ; i < l; i++ ) {
				elem = elems[ i ];

				if ( elem || elem === 0 ) {

					// Add nodes directly
					if ( jQuery.type( elem ) === "object" ) {
						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

					// Convert non-html into a text node
					} else if ( !rhtml.test( elem ) ) {
						nodes.push( context.createTextNode( elem ) );

					// Convert html into DOM nodes
					} else {
						tmp = tmp || fragment.appendChild( context.createElement("div") );

						// Deserialize a standard representation
						tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
						wrap = wrapMap[ tag ] || wrapMap._default;
						tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

						// Descend through wrappers to the right content
						j = wrap[ 0 ];
						while ( j-- ) {
							tmp = tmp.lastChild;
						}

						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, tmp.childNodes );

						// Remember the top-level container
						tmp = fragment.firstChild;

						// Ensure the created nodes are orphaned (#12392)
						tmp.textContent = "";
					}
				}
			}

			// Remove wrapper from fragment
			fragment.textContent = "";

			i = 0;
			while ( (elem = nodes[ i++ ]) ) {

				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
					continue;
				}

				contains = jQuery.contains( elem.ownerDocument, elem );

				// Append to fragment
				tmp = getAll( fragment.appendChild( elem ), "script" );

				// Preserve script evaluation history
				if ( contains ) {
					setGlobalEval( tmp );
				}

				// Capture executables
				if ( scripts ) {
					j = 0;
					while ( (elem = tmp[ j++ ]) ) {
						if ( rscriptType.test( elem.type || "" ) ) {
							scripts.push( elem );
						}
					}
				}
			}

			return fragment;
		},

		cleanData: function( elems ) {
			var data, elem, type, key,
				special = jQuery.event.special,
				i = 0;

			for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
				if ( jQuery.acceptData( elem ) ) {
					key = elem[ data_priv.expando ];

					if ( key && (data = data_priv.cache[ key ]) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
						if ( data_priv.cache[ key ] ) {
							// Discard any remaining `private` data
							delete data_priv.cache[ key ];
						}
					}
				}
				// Discard any remaining `user` data
				delete data_user.cache[ elem[ data_user.expando ] ];
			}
		}
	});

	jQuery.fn.extend({
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each(function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					});
			}, null, value, arguments.length );
		},

		append: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			});
		},

		prepend: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			});
		},

		before: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			});
		},

		after: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			});
		},

		remove: function( selector, keepData /* Internal Use Only */ ) {
			var elem,
				elems = selector ? jQuery.filter( selector, this ) : this,
				i = 0;

			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}

				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}

			return this;
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; (elem = this[i]) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			});
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = value.replace( rxhtmlTag, "<$1></$2>" );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var arg = arguments[ 0 ];

			// Make the changes, replacing each context element with the new content
			this.domManip( arguments, function( elem ) {
				arg = this.parentNode;

				jQuery.cleanData( getAll( this ) );

				if ( arg ) {
					arg.replaceChild( elem, this );
				}
			});

			// Force removal if there was no new content (e.g., from empty arguments)
			return arg && (arg.length || arg.nodeType) ? this : this.remove();
		},

		detach: function( selector ) {
			return this.remove( selector, true );
		},

		domManip: function( args, callback ) {

			// Flatten any nested arrays
			args = concat.apply( [], args );

			var fragment, first, scripts, hasScripts, node, doc,
				i = 0,
				l = this.length,
				set = this,
				iNoClone = l - 1,
				value = args[ 0 ],
				isFunction = jQuery.isFunction( value );

			// We can't cloneNode fragments that contain checked, in WebKit
			if ( isFunction ||
					( l > 1 && typeof value === "string" &&
						!support.checkClone && rchecked.test( value ) ) ) {
				return this.each(function( index ) {
					var self = set.eq( index );
					if ( isFunction ) {
						args[ 0 ] = value.call( this, index, self.html() );
					}
					self.domManip( args, callback );
				});
			}

			if ( l ) {
				fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
				first = fragment.firstChild;

				if ( fragment.childNodes.length === 1 ) {
					fragment = first;
				}

				if ( first ) {
					scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
					hasScripts = scripts.length;

					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for ( ; i < l; i++ ) {
						node = fragment;

						if ( i !== iNoClone ) {
							node = jQuery.clone( node, true, true );

							// Keep references to cloned scripts for later restoration
							if ( hasScripts ) {
								// Support: QtWebKit
								// jQuery.merge because push.apply(_, arraylike) throws
								jQuery.merge( scripts, getAll( node, "script" ) );
							}
						}

						callback.call( this[ i ], node, i );
					}

					if ( hasScripts ) {
						doc = scripts[ scripts.length - 1 ].ownerDocument;

						// Reenable scripts
						jQuery.map( scripts, restoreScript );

						// Evaluate executable scripts on first document insertion
						for ( i = 0; i < hasScripts; i++ ) {
							node = scripts[ i ];
							if ( rscriptType.test( node.type || "" ) &&
								!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

								if ( node.src ) {
									// Optional AJAX dependency, but won't run scripts if not present
									if ( jQuery._evalUrl ) {
										jQuery._evalUrl( node.src );
									}
								} else {
									jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
								}
							}
						}
					}
				}
			}

			return this;
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	});


	var iframe,
		elemdisplay = {};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var style,
			elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			// getDefaultComputedStyle might be reliably used only on attached element
			display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

				// Use of this method is a temporary fix (more like optimization) until something better comes along,
				// since it was removed from specification and supported only in FF
				style.display : jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = (/^margin/);

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			if ( elem.ownerDocument.defaultView.opener ) {
				return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
			}

			return window.getComputedStyle( elem, null );
		};



	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
		}

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// Support: iOS < 6
			// A tribute to the "awesome hack by Dean Edwards"
			// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?
			// Support: IE
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply( this, arguments );
			}
		};
	}


	(function() {
		var pixelPositionVal, boxSizingReliableVal,
			docElem = document.documentElement,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
			"position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computePixelPositionAndBoxSizingReliable() {
			div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
				"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
				"border:1px;padding:1px;width:4px;position:absolute";
			div.innerHTML = "";
			docElem.appendChild( container );

			var divStyle = window.getComputedStyle( div, null );
			pixelPositionVal = divStyle.top !== "1%";
			boxSizingReliableVal = divStyle.width === "4px";

			docElem.removeChild( container );
		}

		// Support: node.js jsdom
		// Don't assume that getComputedStyle is a property of the global object
		if ( window.getComputedStyle ) {
			jQuery.extend( support, {
				pixelPosition: function() {

					// This test is executed only once but we still do memoizing
					// since we can use the boxSizingReliable pre-computing.
					// No need to check if the test was already performed, though.
					computePixelPositionAndBoxSizingReliable();
					return pixelPositionVal;
				},
				boxSizingReliable: function() {
					if ( boxSizingReliableVal == null ) {
						computePixelPositionAndBoxSizingReliable();
					}
					return boxSizingReliableVal;
				},
				reliableMarginRight: function() {

					// Support: Android 2.3
					// Check if div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container. (#3333)
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// This support function is only executed once so no memoizing is needed.
					var ret,
						marginDiv = div.appendChild( document.createElement( "div" ) );

					// Reset CSS: box-sizing; display; margin; border; padding
					marginDiv.style.cssText = div.style.cssText =
						// Support: Firefox<29, Android 2.3
						// Vendor-prefix box-sizing
						"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
						"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
					marginDiv.style.marginRight = marginDiv.style.width = "0";
					div.style.width = "1px";
					docElem.appendChild( container );

					ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

					docElem.removeChild( container );
					div.removeChild( marginDiv );

					return ret;
				}
			});
		}
	})();


	// A method for quickly swapping in/out CSS properties to get correct calculations.
	jQuery.swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var
		// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
		rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( style, name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in style ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
			origName = name,
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in style ) {
				return name;
			}
		}

		return origName;
	}

	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test(val) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = data_priv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend({

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && (ret = rrelNum.exec( value )) ) {
					value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number, add 'px' to the (except for certain CSS properties)
				if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
					value += "px";
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
					style[ name ] = value;
				}

			} else {
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
			}
			return val;
		}
	});

	jQuery.each([ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
						jQuery.swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						}) :
						getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	});

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return jQuery.swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each(function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			});
		}
	});


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				if ( tween.elem[ tween.prop ] != null &&
					(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		}
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
		rrun = /queueHooks$/,
		animationPrefilters = [ defaultPrefilter ],
		tweeners = {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value ),
					target = tween.cur(),
					parts = rfxnum.exec( value ),
					unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

					// Starting value computation is required for potential unit mismatches
					start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
						rfxnum.exec( jQuery.css( tween.elem, prop ) ),
					scale = 1,
					maxIterations = 20;

				if ( start && start[ 3 ] !== unit ) {
					// Trust units reported by jQuery.css
					unit = unit || start[ 3 ];

					// Make sure we update the tween properties later on
					parts = parts || [];

					// Iteratively approximate from a nonzero starting point
					start = +target || 1;

					do {
						// If previous iteration zeroed out, double until we get *something*.
						// Use string for doubling so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );

					// Update scale, tolerating zero or NaN from tween.cur(),
					// break the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}

				// Update tween properties
				if ( parts ) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[ 1 ] ?
						start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
						+parts[ 2 ];
				}

				return tween;
			} ]
		};

	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function() {
			fxNow = undefined;
		});
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( (tween = collection[ index ].call( animation, prop, value )) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = data_priv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function() {
				// Ensure the complete handler is called before this completes
				anim.always(function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				});
			});
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = data_priv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done(function() {
					jQuery( elem ).hide();
				});
			}
			anim.done(function() {
				var prop;

				data_priv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			});
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = animationPrefilters.length,
			deferred = jQuery.Deferred().always( function() {
				// Don't match elem in the :animated selector
				delete tick.elem;
			}),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ]);

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, { specialEasing: {} }, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			}),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			})
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.split(" ");
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				tweeners[ prop ] = tweeners[ prop ] || [];
				tweeners[ prop ].unshift( callback );
			}
		},

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				animationPrefilters.unshift( callback );
			} else {
				animationPrefilters.push( callback );
			}
		}
	});

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || data_priv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each(function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = data_priv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			});
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each(function() {
				var index,
					data = data_priv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		clearInterval( timerId );
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	};


	(function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();


	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend({
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each(function() {
				jQuery.removeAttr( this, name );
			});
		}
	});

	jQuery.extend({
		attr: function( elem, name, value ) {
			var hooks, ret,
				nType = elem.nodeType;

			// don't get/set attributes on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === strundefined ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}

			if ( value !== undefined ) {

				if ( value === null ) {
					jQuery.removeAttr( elem, name );

				} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
					return ret;

				} else {
					elem.setAttribute( name, value + "" );
					return value;
				}

			} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				ret = jQuery.find.attr( elem, name );

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ?
					undefined :
					ret;
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( (name = attrNames[i++]) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	});




	var rfocusable = /^(?:input|select|textarea|button)$/i;

	jQuery.fn.extend({
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each(function() {
				delete this[ jQuery.propFix[ name ] || name ];
			});
		}
	});

	jQuery.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},

		prop: function( elem, name, value ) {
			var ret, hooks, notxml,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

			if ( notxml ) {
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
					ret :
					( elem[ name ] = value );

			} else {
				return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
					ret :
					elem[ name ];
			}
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {
					return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
						elem.tabIndex :
						-1;
				}
			}
		}
	});

	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}

	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	});




	var rclass = /[\t\r\n\f]/g;

	jQuery.fn.extend({
		addClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = typeof value === "string" && value,
				i = 0,
				len = this.length;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).addClass( value.call( this, j, this.className ) );
				});
			}

			if ( proceed ) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = ( value || "" ).match( rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						" "
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = arguments.length === 0 || typeof value === "string" && value,
				i = 0,
				len = this.length;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).removeClass( value.call( this, j, this.className ) );
				});
			}
			if ( proceed ) {
				classes = ( value || "" ).match( rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						""
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = value ? jQuery.trim( cur ) : "";
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( i ) {
					jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
				});
			}

			return this.each(function() {
				if ( type === "string" ) {
					// Toggle individual class names
					var className,
						i = 0,
						self = jQuery( this ),
						classNames = value.match( rnotwhite ) || [];

					while ( (className = classNames[ i++ ]) ) {
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( type === strundefined || type === "boolean" ) {
					if ( this.className ) {
						// store className if set
						data_priv.set( this, "__className__", this.className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
				}
			});
		},

		hasClass: function( selector ) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for ( ; i < l; i++ ) {
				if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
					return true;
				}
			}

			return false;
		}
	});




	var rreturn = /\r/g;

	jQuery.fn.extend({
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[0];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?
						// Handle most common string cases
						ret.replace(rreturn, "") :
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each(function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						jQuery.trim( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE6-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});




	// Return jQuery for attributes-only inclusion


	jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	});

	jQuery.fn.extend({
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		},

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
		}
	});


	var nonce = jQuery.now();

	var rquery = (/\?/);



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			tmp = new DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Document location
		ajaxLocation = window.location.href,

		// Segment location into parts
		ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {
				// For each dataType in the dataTypeExpression
				while ( (dataType = dataTypes[i++]) ) {
					// Prepend if requested
					if ( dataType[0] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

					// Otherwise append
					} else {
						(structure[ dataType ] = structure[ dataType ] || []).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			});
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,
				// URL without anti-cache param
				cacheURL,
				// Response headers
				responseHeadersString,
				responseHeaders,
				// timeout handle
				timeoutTimer,
				// Cross-domain detection vars
				parts,
				// To know if global events are to be dispatched
				fireGlobals,
				// Loop variable
				i,
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
				// Callbacks context
				callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
				// The jqXHR state
				state = 0,
				// Default abort message
				strAbort = "canceled",
				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( (match = rheaders.exec( responseHeadersString )) ) {
									responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
				.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
					s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = setTimeout(function() {
						jqXHR.abort("timeout");
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	});

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	};


	jQuery.fn.extend({
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapAll( html.call(this, i) );
				});
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map(function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				}).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapInner( html.call(this, i) );
				});
			}

			return this.each(function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			});
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each(function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
			});
		},

		unwrap: function() {
			return this.parent().each(function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			}).end();
		}
	});


	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
	};
	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
					// Treat each array item as a scalar.
					add( prefix, v );

				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
				}
			});

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {
			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});

		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map(function() {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			})
			.filter(function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			})
			.map(function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						}) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			}).get();
		}
	});


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest();
		} catch( e ) {}
	};

	var xhrId = 0,
		xhrCallbacks = {},
		xhrSuccessStatus = {
			// file protocol always yields status code 0, assume 200
			0: 200,
			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	// Support: IE9
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if ( window.attachEvent ) {
		window.attachEvent( "onunload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]();
			}
		});
	}

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport(function( options ) {
		var callback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					xhr.open( options.type, options.url, options.async, options.username, options.password );

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								delete xhrCallbacks[ id ];
								callback = xhr.onload = xhr.onerror = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
									complete(
										// file: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
										// Support: IE9
										// Accessing binary-data responseText throws an exception
										// (#11426)
										typeof xhr.responseText === "string" ? {
											text: xhr.responseText
										} : undefined,
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					xhr.onerror = callback("error");

					// Create the abort callback
					callback = xhrCallbacks[ id ] = callback("abort");

					try {
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});




	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	});

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery("<script>").prop({
						async: true,
						charset: s.scriptCharset,
						src: s.url
					}).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function() {
				// Restore preexisting value
				window[ callbackName ] = overwritten;

				// Save back as free
				if ( s[ callbackName ] ) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});




	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf(" ");

		if ( off >= 0 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax({
				url: url,

				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			}).complete( callback && function( jqXHR, status ) {
				self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
			});
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	});




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};




	var docElem = window.document.documentElement;

	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {
				options = options.call( elem, i, curOffset );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend({
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each(function( i ) {
						jQuery.offset.setOffset( this, options, i );
					});
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			// Support: BlackBerry 5, iOS 3 (original iPhone)
			// If we don't have gBCR, just use 0,0 rather than error
			if ( typeof elem.getBoundingClientRect !== strundefined ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		offsetParent: function() {
			return this.map(function() {
				var offsetParent = this.offsetParent || docElem;

				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || docElem;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : window.pageXOffset,
						top ? val : window.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	});

	// Support: Safari<7+, Chrome<37+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	});


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		});
	});


	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( typeof noGlobal === strundefined ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;

	}));


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;

	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.8.3';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };

	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };

	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };

	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };

	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }

	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };

	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);

	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }

	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };

	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;

	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  // Object Functions
	  // ----------------

	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }

	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);

	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);

	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);

	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };


	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }

	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;

	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }

	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);

	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };

	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };

	  _.noop = function(){};

	  _.property = property;

	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };

	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };

	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };

	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _events = __webpack_require__(86);

	var _events2 = _interopRequireDefault(_events);

	var _underscore = __webpack_require__(84);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _dispatcherDataTableDispatcher = __webpack_require__(87);

	var _dispatcherDataTableDispatcher2 = _interopRequireDefault(_dispatcherDataTableDispatcher);

	var _constantsDataTableConstants = __webpack_require__(91);

	var _constantsDataTableConstants2 = _interopRequireDefault(_constantsDataTableConstants);

	var ActionTypes = _constantsDataTableConstants2['default'].ActionTypes,
	    _queue = [],
	    _data = [],
	    _sortBy = '',
	    _sortDir = _constantsDataTableConstants2['default'].SortTypes.ASC,
	    _filters = [],
	    _queueFlushID = null,
	    _rowsCount = _constantsDataTableConstants2['default'].ComponentTypes.DEFAULT_ROWS_COUNT,
	    _onGetRows = function _onGetRows() {},
	    _pageSize = _constantsDataTableConstants2['default'].NUMBER_OF_ROWS_PER_REQUEST,
	    _isSelectAllChecked = false,
	    _isEmpty = true,
	    _queueAsyncID = 0,
	    _isLoading = false,
	    _loadingCounter = 0,
	    _noData = true;

	function _queueRequestFor(rowIndex) {

		_queue.push(rowIndex);

		if (!_queueFlushID) {
			_queueFlushID = setTimeout(_flushRequestQueue.bind(this), 200);
		}
	}

	function _flushRequestQueue() {

		var sectionsToLoad = _queue.reduce(function (requestSections, rowIndex) {
			var rowBase = rowIndex - rowIndex % _pageSize;
			if (requestSections.indexOf(rowBase) === -1) {
				return requestSections.concat(rowBase);
			}

			return requestSections;
		}, []);

		//console.log("sectionsToLoad: " + sectionsToLoad);

		if (sectionsToLoad.length > 0) {
			_isLoading = true;
			DataTableStore.emitChange();
		}

		sectionsToLoad.forEach(function (rowBase) {
			_loadingCounter++;

			_loadDataRange(rowBase, rowBase + _pageSize);
		}, this);

		_queue = [];
		_queueFlushID = null;
	}

	function _loadDataRange(rowStart, rowEnd) {

		_onGetRows(rowStart, rowEnd, _pageSize, _sortBy, _sortDir, _filters, (function (queueAsyncID, data, totalElements) {
			if (_queueAsyncID === queueAsyncID) {
				_underscore2['default'].extend(_data, data);

				_loadingCounter--;
				if (_loadingCounter === 0) {
					_isLoading = false;
				}
				_rowsCount = totalElements === 0 ? _constantsDataTableConstants2['default'].ComponentTypes.DEFAULT_ROWS_COUNT : totalElements;
				_isEmpty = totalElements === 0 ? true : false;
				_noData = totalElements === 0 ? true : false;

				DataTableStore.emitChange();
			}
		}).bind(this, _queueAsyncID));
	}

	function _sanitizeFilters(filters) {

		var _sanitizedFilters = [];

		_underscore2['default'].each(filters, function (filter) {
			_sanitizedFilters.push({
				name: filter.name,
				value: _underscore2['default'].escape(filter.value)
			});
		});

		return _sanitizedFilters;
	}

	var DataTableStore = _underscore2['default'].extend({}, _events2['default'].prototype, {

		emitChange: function emitChange() {

			this.emit(_constantsDataTableConstants2['default'].CHANGE_EVENT);
		},

		addChangeListener: function addChangeListener(callback) {

			this.on(_constantsDataTableConstants2['default'].CHANGE_EVENT, callback);
		},

		removeChangeListener: function removeChangeListener(callback) {

			this.removeListener(_constantsDataTableConstants2['default'].CHANGE_EVENT, callback);
		},

		getRowData: function getRowData(rowIndex, onGetRows, pageSize, filters) {

			_onGetRows = onGetRows;
			_pageSize = pageSize;
			_filters = _sanitizeFilters(filters);

			if (!_data[rowIndex]) {
				_queueRequestFor(rowIndex);
				_data[rowIndex] = _constantsDataTableConstants2['default'].ComponentTypes.DUMMY_ROW_DATA;
			}

			return _data[rowIndex];
		},

		getRowsCount: function getRowsCount() {

			return _rowsCount;
		},

		getIsSelectAllChecked: function getIsSelectAllChecked() {

			return _isSelectAllChecked;
		},

		getAllSelectedRows: function getAllSelectedRows() {

			if (_data.length === 0) {
				return [];
			}

			var selectedRows = [];

			_underscore2['default'].each(_data, function (item) {
				if (item.selected === true) {
					selectedRows.push(item);
				}
			});

			return selectedRows;
		},

		getIsEmpty: function getIsEmpty() {

			return _isEmpty;
		},

		getIsLoading: function getIsLoading() {

			return _isLoading;
		},

		getNoData: function getNoData() {

			return _noData;
		},

		getSortBy: function getSortBy() {

			return _sortBy;
		},

		getSortDir: function getSortDir() {

			return _sortDir;
		}
	});

	DataTableStore.dispatchToken = _dispatcherDataTableDispatcher2['default'].register(function (action) {

		switch (action.type) {

			case ActionTypes.SORT_ROWS_BY:

				_data = [];
				_rowsCount = _constantsDataTableConstants2['default'].ComponentTypes.DEFAULT_ROWS_COUNT;
				_isEmpty = true;
				_noData = false;
				_queueAsyncID++;
				_loadingCounter = 0;
				_sortBy = action.cellDataKey;
				_sortDir = _sortDir === _constantsDataTableConstants2['default'].SortTypes.ASC ? _constantsDataTableConstants2['default'].SortTypes.DESC : _constantsDataTableConstants2['default'].SortTypes.ASC;
				_isSelectAllChecked = false;

				DataTableStore.emitChange();

				break;
			case ActionTypes.TOGGLE_SELECTED:

				var selected = !_data[action.index].selected,
				    uncheckedItem;

				_data[action.index] = _underscore2['default'].extend({}, _data[action.index], { selected: selected });

				if (!selected) {
					_isSelectAllChecked = false;
				} else {
					uncheckedItem = _underscore2['default'].find(_data, function (item) {
						return item.selected === undefined || item.selected === false;
					});

					uncheckedItem ? _isSelectAllChecked = false : _isSelectAllChecked = true;
				}

				DataTableStore.emitChange();

				break;
			case ActionTypes.TOGGLE_SELECTED_ALL:

				_isSelectAllChecked = !_isSelectAllChecked;

				var newData = _data.map(function (item) {
					return _underscore2['default'].extend({}, item, { selected: _isSelectAllChecked });
				});

				_data = newData;

				DataTableStore.emitChange();

				break;
			case ActionTypes.FILTER_BY:

				_data = [];
				_rowsCount = _constantsDataTableConstants2['default'].ComponentTypes.DEFAULT_ROWS_COUNT;
				_isEmpty = true;
				_noData = false;
				_queueAsyncID++;
				_loadingCounter = 0;
				_isSelectAllChecked = false;
				_filters = _sanitizeFilters(action.filters);

				DataTableStore.emitChange();

				break;
			case ActionTypes.REFRESH:

				_data = [];
				_rowsCount = _constantsDataTableConstants2['default'].ComponentTypes.DEFAULT_ROWS_COUNT;
				_isEmpty = true;
				_noData = false;
				_queueAsyncID++;
				_loadingCounter = 0;
				_isSelectAllChecked = false;

				DataTableStore.emitChange();

				break;
			default:
			//noop
		}
	});

	module.exports = DataTableStore;

/***/ },
/* 86 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        len = arguments.length;
	        args = new Array(len - 1);
	        for (i = 1; i < len; i++)
	          args[i - 1] = arguments[i];
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    len = arguments.length;
	    args = new Array(len - 1);
	    for (i = 1; i < len; i++)
	      args[i - 1] = arguments[i];

	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    var m;
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  var ret;
	  if (!emitter._events || !emitter._events[type])
	    ret = 0;
	  else if (isFunction(emitter._events[type]))
	    ret = 1;
	  else
	    ret = emitter._events[type].length;
	  return ret;
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Dispatcher = __webpack_require__(88).Dispatcher;

	module.exports = new Dispatcher();

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Dispatcher = __webpack_require__(89)


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * @typechecks
	 */

	var invariant = __webpack_require__(90);

	var _lastID = 1;
	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *    CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *
	 *         case 'city-update':
	 *           FlightPriceStore.price =
	 *             FlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	  function Dispatcher() {"use strict";
	    this.$Dispatcher_callbacks = {};
	    this.$Dispatcher_isPending = {};
	    this.$Dispatcher_isHandled = {};
	    this.$Dispatcher_isDispatching = false;
	    this.$Dispatcher_pendingPayload = null;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   *
	   * @param {function} callback
	   * @return {string}
	   */
	  Dispatcher.prototype.register=function(callback) {"use strict";
	    var id = _prefix + _lastID++;
	    this.$Dispatcher_callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   *
	   * @param {string} id
	   */
	  Dispatcher.prototype.unregister=function(id) {"use strict";
	    invariant(
	      this.$Dispatcher_callbacks[id],
	      'Dispatcher.unregister(...): `%s` does not map to a registered callback.',
	      id
	    );
	    delete this.$Dispatcher_callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   *
	   * @param {array<string>} ids
	   */
	  Dispatcher.prototype.waitFor=function(ids) {"use strict";
	    invariant(
	      this.$Dispatcher_isDispatching,
	      'Dispatcher.waitFor(...): Must be invoked while dispatching.'
	    );
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this.$Dispatcher_isPending[id]) {
	        invariant(
	          this.$Dispatcher_isHandled[id],
	          'Dispatcher.waitFor(...): Circular dependency detected while ' +
	          'waiting for `%s`.',
	          id
	        );
	        continue;
	      }
	      invariant(
	        this.$Dispatcher_callbacks[id],
	        'Dispatcher.waitFor(...): `%s` does not map to a registered callback.',
	        id
	      );
	      this.$Dispatcher_invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   *
	   * @param {object} payload
	   */
	  Dispatcher.prototype.dispatch=function(payload) {"use strict";
	    invariant(
	      !this.$Dispatcher_isDispatching,
	      'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.'
	    );
	    this.$Dispatcher_startDispatching(payload);
	    try {
	      for (var id in this.$Dispatcher_callbacks) {
	        if (this.$Dispatcher_isPending[id]) {
	          continue;
	        }
	        this.$Dispatcher_invokeCallback(id);
	      }
	    } finally {
	      this.$Dispatcher_stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   *
	   * @return {boolean}
	   */
	  Dispatcher.prototype.isDispatching=function() {"use strict";
	    return this.$Dispatcher_isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @param {string} id
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_invokeCallback=function(id) {"use strict";
	    this.$Dispatcher_isPending[id] = true;
	    this.$Dispatcher_callbacks[id](this.$Dispatcher_pendingPayload);
	    this.$Dispatcher_isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @param {object} payload
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_startDispatching=function(payload) {"use strict";
	    for (var id in this.$Dispatcher_callbacks) {
	      this.$Dispatcher_isPending[id] = false;
	      this.$Dispatcher_isHandled[id] = false;
	    }
	    this.$Dispatcher_pendingPayload = payload;
	    this.$Dispatcher_isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_stopDispatching=function() {"use strict";
	    this.$Dispatcher_pendingPayload = null;
	    this.$Dispatcher_isDispatching = false;
	  };


	module.exports = Dispatcher;


/***/ },
/* 90 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _keymirror = __webpack_require__(92);

	var _keymirror2 = _interopRequireDefault(_keymirror);

	module.exports = {

		SortTypes: (0, _keymirror2['default'])({
			ASC: null,
			DESC: null
		}),
		CHANGE_EVENT: 'change',
		ActionTypes: (0, _keymirror2['default'])({
			SORT_ROWS_BY: null,
			TOGGLE_SELECTED: null,
			TOGGLE_SELECTED_ALL: null,
			FILTER_BY: null,
			REFRESH: null
		}),
		ComponentTypes: {
			EXTERNAL_FIXED_CONTENT_SIZE: 0,
			MAX_HEIGHT: 450,
			HEADER_HEIGHT: 34,
			ROW_HEIGHT: 35,
			EMPTY_ROW_HEIGHT: 0.0000001,
			DEFAULT_ROWS_COUNT: 1,
			DUMMY_ROW_DATA: {
				dummy: "dummy"
			},
			EMPTY_MESSAGE: "There is no data to display"
		},
		ColumnTypes: {
			SELECTABLE: 'selectable',
			SELECTABLE_COLUMN_WIDTH: 49,
			INHERIT: 'inherit'
		},
		NUMBER_OF_ROWS_PER_REQUEST: 5
	};

/***/ },
/* 92 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */

	"use strict";

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function(obj) {
	  var ret = {};
	  var key;
	  if (!(obj instanceof Object && !Array.isArray(obj))) {
	    throw new Error('keyMirror(...): Argument must be an object.');
	  }
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _dispatcherDataTableDispatcher = __webpack_require__(87);

	var _dispatcherDataTableDispatcher2 = _interopRequireDefault(_dispatcherDataTableDispatcher);

	var _constantsDataTableConstants = __webpack_require__(91);

	var _constantsDataTableConstants2 = _interopRequireDefault(_constantsDataTableConstants);

	var ActionTypes = _constantsDataTableConstants2['default'].ActionTypes;

	module.exports = {

		toggleSelectedAll: function toggleSelectedAll() {

			_dispatcherDataTableDispatcher2['default'].dispatch({
				type: ActionTypes.TOGGLE_SELECTED_ALL
			});
		},

		toggleSelected: function toggleSelected(index) {

			_dispatcherDataTableDispatcher2['default'].dispatch({
				type: ActionTypes.TOGGLE_SELECTED,
				index: index
			});
		},

		sortRowsBy: function sortRowsBy(cellDataKey) {

			_dispatcherDataTableDispatcher2['default'].dispatch({
				type: ActionTypes.SORT_ROWS_BY,
				cellDataKey: cellDataKey
			});
		},

		filterBy: function filterBy(filters) {

			_dispatcherDataTableDispatcher2['default'].dispatch({
				type: ActionTypes.FILTER_BY,
				filters: filters
			});
		},

		refresh: function refresh() {

			_dispatcherDataTableDispatcher2['default'].dispatch({
				type: ActionTypes.REFRESH
			});
		}
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _underscore = __webpack_require__(84);

	var _underscore2 = _interopRequireDefault(_underscore);

	module.exports = {

		/*
	 * The objects inside the arrays must be of the following structure {name: "String", value: "valid JSON data type"}
	 */
		filterArraysAreSame: function filterArraysAreSame(array1, array2) {

			if (array1.length === 0 && array2.length === 0) {
				return true;
			}

			if (array1.length === array2.length) {

				var stringifiedArray1 = [],
				    stringifiedArray2 = [];

				_underscore2['default'].each(array1, function (item) {
					stringifiedArray1.push(JSON.stringify(item));
				});

				_underscore2['default'].each(array2, function (item) {
					stringifiedArray2.push(JSON.stringify(item));
				});

				if (_underscore2['default'].difference(stringifiedArray1, stringifiedArray2).length > 0) {
					return false;
				}

				return true;
			} else {
				return false;
			}
		}
	};

/***/ },
/* 95 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;