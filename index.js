var Obstruct = require('./lib/obstruct');
var version = require('./package').version;

Obstruct.prototype.version = version;

module.exports = Obstruct;
