function create () {
  var obj = Object.create(this);
  obj.constructor.apply(obj, arguments);
  obj.init.apply(obj, arguments);
  return obj;
}

module.exports = create;
