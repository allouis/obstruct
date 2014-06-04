var extend = require('./extend');
var create = require('./create');
var noop = function () {};

var Obstruct = {
  constructor: noop,
  extend: extend,
  create: create,
  call: function (obj) {
    return this.constructor.call.apply(obj, arguments);
  },
  apply: function (obj) {
    return this.constructor.apply.apply(obj, arguments);
  }
};

module.exports = Obstruct;
