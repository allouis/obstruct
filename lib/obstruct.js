var extend = require('./extend');
var create = require('./create');
var noop = function () {};

var Obstruct = {
  constructor: noop,
  extend: extend,
  create: create
};

module.exports = Obstruct;
