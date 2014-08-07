!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Obstruct=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Obstruct = require('./lib/obstruct');

module.exports = Obstruct;

},{"./lib/obstruct":4}],2:[function(require,module,exports){
function create () {
  var obj = Object.create(this);
  obj.constructor.apply(obj, arguments);
  return obj;
}

module.exports = create;

},{}],3:[function(require,module,exports){
function extend (props) {
  var Parent = this;
  var Child = Object.create(Parent);
  var member;
  for (member in props) {
    if (props.hasOwnProperty(member)) {
      Child[member] = props[member];
    }
  }
  return Child;
}

module.exports = extend;

},{}],4:[function(require,module,exports){
var extend = require('./extend');
var create = require('./create');
var noop = function () {};

var Obstruct = {
  constructor: noop,
  extend: extend,
  create: create,
  call: function (obj) {
    return this.constructor.call.apply(this.constructor, arguments);
  },
  apply: function (obj) {
    return this.constructor.apply.apply(this.constructor, arguments);
  }
};

module.exports = Obstruct;

},{"./create":2,"./extend":3}]},{},[1])
(1)
});;
