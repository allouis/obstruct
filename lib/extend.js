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
