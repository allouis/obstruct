Obstruct
========

Objects > Constructors


Usage
=====

Obstruct provides simple inheritance without the use of traditional constructors. Inspired by the Type.new blog post, I wrapped up this functionality in a tiny little lib.
Basic usage:

```javascript
var Button = Obstruct.extend({
  constructor: function (el) {
    this.el = el;
    this.addEvents();
  },
  addEvents: function () {
    this.el.addEventListener('click', this.onClick.bind(this));
  },
  onClick: function (event) {
    alert('do suttin');
  }
});

var EvilButton = Button.extend({

  constructor: function () {
    console.log('MWHAHAHAHA');
    Button.apply(this, arguments); // call `super`
  },

  onClick: function () {
    window.location.href = 'http://evil.com'
  }

});

var mybtn = EvilButton.create(document.querySelector('a'));

```

