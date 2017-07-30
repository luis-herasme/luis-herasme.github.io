/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector2 = function () {
  function Vector2(x, y) {
    _classCallCheck(this, Vector2);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector2, [{
    key: "add",
    value: function add(vector) {
      this.x += vector.x;
      this.y += vector.y;
    }
  }, {
    key: "sub",
    value: function sub(vector) {
      this.x -= vector.x;
      this.y -= vector.y;
    }
  }, {
    key: "mult",
    value: function mult(scalar) {
      this.x = this.x * scalar;
      this.y = this.y * scalar;
    }
  }, {
    key: "zero",
    value: function zero() {
      this.x = 0;
      this.y = 0;
    }
  }, {
    key: "inverse",
    value: function inverse() {
      this.x = -1 * this.x;
      this.y = -1 * this.y;
    }
  }, {
    key: "addPolarAngle",
    value: function addPolarAngle(angle) {
      var r = this.mag();
      var newAngle = this.polar() + angle;
      this.x = r * Math.cos(newAngle);
      this.y = r * Math.sin(newAngle);
    }
  }, {
    key: "polar",
    value: function polar() {
      return Math.atan2(this.y, this.x);
    }
  }, {
    key: "copy",
    value: function copy() {
      return new Vector2(this.x, this.y);
    }
  }, {
    key: "limit",
    value: function limit(scalar) {
      var vr = new Vector2(0, 0);
      if (this.mag() > scalar) {
        vr = Vector2.normalize(this);
        vr.mult(scalar);
        this.x = vr.x;
        this.y = vr.y;
      }
    }
  }, {
    key: "mag",
    value: function mag() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
  }, {
    key: "moveTowards",
    value: function moveTowards(v, s) {
      var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var rest = Vector2.sub(v, this);
      if (rest.mag() > c) {
        rest = Vector2.normalize(rest);
        rest.mult(s);
        this.add(rest);
      }
    }
  }], [{
    key: "inverse",
    value: function inverse(v) {
      return new Vector2(-1 * v.x, -1 * v.y);
    }
  }, {
    key: "distance",
    value: function distance(v1, v2) {
      return this.sub(v1, v2).mag();
    }
  }, {
    key: "normalize",
    value: function normalize(v) {
      var m = v.mag();
      if (isNaN(m) || m === 0) m = 1;
      var vr = new Vector2(0, 0);
      vr.x = v.x / m;
      vr.y = v.y / m;
      return vr;
    }
  }, {
    key: "sub",
    value: function sub(v1, v2) {
      var v3 = new Vector2(0, 0);
      v3.x = v1.x - v2.x;
      v3.y = v1.y - v2.y;
      return v3;
    }
  }]);

  return Vector2;
}();

exports.default = Vector2;


function toDegrees(angle) {
  return angle * (180 / Math.PI);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Vector = __webpack_require__(0);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvasWindow = document.getElementById('lienzo');

canvasWindow.width = window.innerWidth;
canvasWindow.height = window.innerHeight;

var context = canvasWindow.getContext('2d');

var width = window.innerWidth;
var height = window.innerHeight;

var pos = { x: 0, y: 0 };

function rect(x, y, positionX, positionY, color) {
  if (color) context.fillStyle = color;
  context.beginPath();
  context.rect(x, y, positionX, positionY);
  // context.strokeStyle = '#0C7400'
  // context.stroke()
  context.fill();
}

function circle(x, y, size, color, a) {
  if (a) {
    context.save();
    context.globalAlpha = a;
  }
  if (color) context.fillStyle = color;
  context.lineWidth = 0;
  context.beginPath();
  context.arc(x, y, size, 0, 2 * Math.PI);
  context.fill();
  if (a) context.restore();
}

function strokeCircle(x, y, size, color, a, w) {
  if (a) {
    context.save();
    context.globalAlpha = a;
  }
  if (color) context.strokeStyle = color;
  context.lineWidth = w;
  context.beginPath();
  context.arc(x, y, size, 0, 2 * Math.PI);
  context.stroke();
  if (a) context.restore();
}

function text(texto, position, a, polar) {
  context.fillStyle = 'white';
  if (a) {
    context.save();
    context.textAlign = a;
  }
  context.lineWidth = 2;
  context.font = 'bold 15pt Tahoma';
  if (polar) {
    context.save();
    context.translate(position.x, position.y);
    context.rotate(polar.polar().a);
  } else {
    context.fillText(texto, position.x, position.y);
  }
  if (polar || a) context.restore();
}

function line(v1, v2, width, color) {
  context.beginPath();
  context.lineWidth = width;
  context.strokeStyle = color;

  context.moveTo(v1.x, v1.y);
  context.lineTo(v2.x, v2.y);
  context.stroke();
  context.fill();
}

function vectorLine(v1, v2, width, color) {
  context.beginPath();
  context.lineWidth = width;
  context.strokeStyle = color;
  context.save();
  context.translate(v1.x, v1.y);
  context.moveTo(0, 0);
  context.lineTo(v2.x, v2.y);
  context.stroke();
  context.fill();
  context.restore();
}

function clear(color) {
  if (color) context.fillStyle = color;
  context.save();
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.fillRect(0, 0, canvasWindow.width, canvasWindow.height);
  context.restore();
}

module.exports = { circle: circle, vectorLine: vectorLine, rect: rect, clear: clear, context: context, text: text, pos: pos, width: width, height: height, line: line, strokeCircle: strokeCircle };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Render = __webpack_require__(1);

var _Render2 = _interopRequireDefault(_Render);

var _Events = __webpack_require__(3);

var _Body2 = __webpack_require__(4);

var _Body3 = _interopRequireDefault(_Body2);

var _Vector = __webpack_require__(0);

var _Vector2 = _interopRequireDefault(_Vector);

var _Physics = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var col = new _Physics.Collision();
(0, _Events.Events)();

var Bola = function (_Body) {
  _inherits(Bola, _Body);

  function Bola(x, y, size, color, a) {
    _classCallCheck(this, Bola);

    var _this = _possibleConstructorReturn(this, (Bola.__proto__ || Object.getPrototypeOf(Bola)).call(this, x, y));

    _this.a = a;
    _this.color = color;
    _this.size = size;
    return _this;
  }

  _createClass(Bola, [{
    key: 'display',
    value: function display() {
      _Render2.default.circle(this.position.x, this.position.y, this.size, this.color, this.a);
      _Render2.default.strokeCircle(this.position.x, this.position.y, this.size, '#000', this.a, 5);
    }
  }]);

  return Bola;
}(_Body3.default);

function rs() {
  return Math.random() > 0.5 ? 1 : -1;
}

var Snake = function () {
  function Snake(x, y, color) {
    _classCallCheck(this, Snake);

    this.color = color;
    this.bolas = [];
    this.position = new _Vector2.default(x, y);
    this.size = 25;
    this.hambre = 0;
    this.bolas.push(new Bola(this.position.x, this.position.y, this.size, color));
    this.h = 0.1;
  }

  _createClass(Snake, [{
    key: 'add',
    value: function add() {
      this.bolas.push(new Bola(this.bolas[this.bolas.length - 1].position.x, this.bolas[this.bolas.length - 1].position.y, 10, this.color));
    }
  }, {
    key: 'last',
    value: function last() {
      this.bolas.pop();
    }
  }, {
    key: 'update',
    value: function update() {
      var _this2 = this;

      if (this.hambre < 100) this.hambre += this.h;else {
        this.hambre = 0;
        if (this.h < 5) this.h += 0.1;
        this.last();
      }
      if (this.bolas.length <= 0) {
        _Render2.default.text('PERDISTE', new _Vector2.default(_Render2.default.width / 2, _Render2.default.height / 2), 'center');
      }
      this.bolas.forEach(function (bola, i) {
        bola.update();
        bola.display();
        if (i !== 0) {
          var m = _this2.bolas[i - 1].position.copy();
          // m.add(new Vector2(Math.random() * i/5, Math.random() * i/5))
          _this2.bolas[i].size = 10 + 7.5 / i;
          _this2.bolas[i].position.moveTowards(m, 10, _this2.bolas[i].size * 2.5);
        } else {
          _this2.position = _this2.bolas[i].position;
          _this2.bolas[i].position.moveTowards(_Events.mouse, 10, _this2.bolas[i].size);
        }
      });
    }
  }]);

  return Snake;
}();

var ss = [];
var foods = [];

for (var i = 0; i < 20; i++) {
  foods.push(new Bola(_Render2.default.width * Math.random(), _Render2.default.height * Math.random(), 10, '#00f000', 1));
}

foods.forEach(function (x) {
  x.onCollision = function () {
    x.position = new _Vector2.default(Math.random() * _Render2.default.width, Math.random() * _Render2.default.height);
    console.log('Me comio');
    ss.forEach(function (z) {
      return z.add();
    });
  };
  col.add(x);
});

for (var _i = 0; _i < 1; _i++) {
  ss.push(new Snake(_Render2.default.width * Math.random(), _Render2.default.height * Math.random(), '#FFA07A'));
}

ss.forEach(function (x) {
  return col.add(x);
});

function main() {
  _Render2.default.clear('#3B3B3B');
  _Render2.default.text('Las bolas verdes son comidas y te añaden una bola al final', new _Vector2.default(10, 100));
  _Render2.default.text('Cada vez que la barra se llena por completo pierdes la ultima bola', new _Vector2.default(10, 125));
  _Render2.default.text('Hambre', new _Vector2.default(10, 50));
  _Render2.default.rect(10, 60, 300, 20, '#000000');
  _Render2.default.rect(10, 60, ss[0].hambre * 3, 20, '#f00000');
  foods.forEach(function (x) {
    return x.display();
  });
  ss.forEach(function (x, i) {
    return x.update(i);
  });
  col.check();
  requestAnimationFrame(main);
}

main();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mouse = exports.Events = undefined;

var _Render = __webpack_require__(1);

var _Render2 = _interopRequireDefault(_Render);

var _Vector = __webpack_require__(0);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mouse = new _Vector2.default(0, 0);
var start = new _Vector2.default(0, 0);
var end = new _Vector2.default();
var click = false;

function Events() {
  var last = {
    w: 0,
    a: 0,
    s: 0,
    d: 0
  };

  document.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  document.addEventListener('mousedown', function (e) {
    click = true;
    start.x = e.clientX;
    start.y = e.clientY;
  });
  document.addEventListener('mouseup', function (e) {
    click = false;
    end.x = e.clientX;
    end.y = e.clientY;
  });

  document.addEventListener('keyup', function (e) {
    if (e.key === 'w') {
      last.w = 0;
    } else if (e.key === 's') {
      last.s = 0;
    } else if (e.key === 'a') {
      last.a = 0;
    } else if (e.key === 'd') {
      last.d = 0;
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'w') {
      last.w += 0.01;
      _Render2.default.pos.y += 0.01 + last.w;
      _Render2.default.context.translate(0, 0.01 + last.w);
    }
    if (e.key === 's') {
      last.s += 0.01;
      _Render2.default.pos.y -= 0.01 + last.s;
      _Render2.default.context.translate(0, -0.01 - last.s);
    }
    if (e.key === 'd') {
      last.d += 0.01;
      _Render2.default.pos.x -= 0.01 + last.d;
      _Render2.default.context.translate(-0.01 - last.d, 0);
    }
    if (e.key === 'a') {
      last.a += 0.01;
      _Render2.default.pos.x += 0.01 + last.a;
      _Render2.default.context.translate(0.01 + last.a, 0);
    }
  });
}

exports.Events = Events;
exports.mouse = mouse;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(0);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(x, y) {
    _classCallCheck(this, _class);

    this.position = new _Vector2.default(x, y);
    this.velocity = new _Vector2.default(0, 0);
    this.aceleration = new _Vector2.default(0, 0);
  }

  _createClass(_class, [{
    key: 'update',
    value: function update() {
      this.position.add(this.velocity);
      this.velocity.add(this.aceleration);
      this.velocity.limit(10);
      this.display();
    }
  }, {
    key: 'addForce',
    value: function addForce(force) {
      this.aceleration.add(force);
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Collision = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(0);

var _Vector2 = _interopRequireDefault(_Vector);

var _Render = __webpack_require__(1);

var _Render2 = _interopRequireDefault(_Render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var disi = 1;

var Collision = exports.Collision = function () {
  function Collision() {
    _classCallCheck(this, Collision);

    this.particles = [];
  }

  _createClass(Collision, [{
    key: 'add',
    value: function add(particle) {
      this.particles.push(particle);
    }
  }, {
    key: 'check',
    value: function check() {
      for (var i = 0; i < this.particles.length; i++) {
        for (var x = 0; x < this.particles.length; x++) {
          var choque = _Vector2.default.sub(this.particles[i].position, this.particles[x].position);
          /*
                  if (this.particles[i].position.x > render.width) {
                    this.particles[i].position.x = render.width
                    this.particles[i].velocity.x = this.particles[i].velocity.x * -disi
                  }
                  if (this.particles[i].position.x < 0) {
                    this.particles[i].position.x = 0
                    this.particles[i].velocity.x = this.particles[i].velocity.x * -disi
                  }
                  if (this.particles[i].position.y > render.height) {
                    this.particles[i].position.y = render.height
                    this.particles[i].velocity.y = this.particles[i].velocity.y * -disi
                  }
                  if (this.particles[i].position.y < 0) {
                    this.particles[i].position.y = 0
                    this.particles[i].velocity.y = this.particles[i].velocity.y * -disi
                  }
                  */
          // console.log(this.particles[i])
          if (this.particles[i]) {
            if (choque.mag() !== 0) {
              if (choque.mag() < this.particles[i].size + this.particles[x].size) {
                if (this.particles[i].onCollision) {
                  this.particles[i].onCollision();
                }
              }
            }
          }
          /*
          if (choque.mag() !== 0) {
            if (choque.mag() < this.particles[i].size + this.particles[x].size) {
              // this.particles[i].velocity.mult(0.5)
              // this.particles[x].velocity.mult(0.5)
              let uni = Vector2.normalize(choque)
              uni.mult(0.5)
              uni.mult(this.particles[i].velocity.mag() * disi)
              this.particles[i].addForce(Vector2.inverse(this.particles[i].velocity))
              this.particles[i].addForce(uni)
              this.particles[x].addForce(Vector2.inverse(uni))
              break
            }
          }
          */
        }
      }
    }
  }]);

  return Collision;
}();

/***/ })
/******/ ]);