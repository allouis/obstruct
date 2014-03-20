function create () {
  var obj = Object.create(this);
  obj.constructor.apply(obj, arguments);
  return obj;
}

module.exports = create;
