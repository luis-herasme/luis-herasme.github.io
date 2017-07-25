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


var _Vector2D = __webpack_require__(1);

var _Vector2D2 = _interopRequireDefault(_Vector2D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvasWindow = document.getElementById('lienzo');

canvasWindow.width = window.innerWidth;
canvasWindow.height = window.innerHeight;
var context = canvasWindow.getContext('2d');

context.font = '12px Arial';
context.lineWidth = 5;

var width = window.innerWidth;
var height = window.innerHeight;

var pos = { x: 0, y: 0 };

function rect(x, y, positionX, positionY, color) {
  if (typeof x === 'string') {
    x = Number(x.slice(0, x.length - 1)) / 100 * width;
    y = Number(y.slice(0, y.length - 1)) / 100 * height;
    positionX = Number(positionX.slice(0, positionX.length - 1)) / 100 * width;
    positionY = Number(positionY.slice(0, positionY.length - 1)) / 100 * height;
  }

  if (color) context.fillStyle = color;

  context.beginPath();
  context.rect(x, y, positionX, positionY);
  // context.stroke()
  context.fill();
}

function circle(x, y, size, color) {
  if (typeof x === 'string') {
    x = Number(x.slice(0, x.length - 1)) / 100 * width;
    y = Number(y.slice(0, y.length - 1)) / 100 * height;
    size = Number(size.slice(0, size.length - 1)) / 100 * height;
  }
  context.lineWidth = 0;
  context.beginPath();
  context.fillStyle = color;
  context.arc(x, y, size, 0, 2 * Math.PI);
  context.fill();
}

function text(texto, position, polar) {
  context.fillStyle = 'white';
  context.textAlign = 'center';
  context.lineWidth = 2;
  context.font = 'italic bold 10pt Tahoma';
  if (polar) {
    context.save();
    console.log(polar.x);
    context.translate(position.x, position.y);
    context.rotate(polar.polar().a);
    var x = -polar.x / 2;
    context.lineWidth = 3;
    context.strokeStyle = '#000000';
    context.strokeText(texto, x, 0);
    context.fillText(texto, x, 0);
    var an = radToDeg(polar.polar().a).toFixed(4);
    context.font = 'italic bold 8pt Tahoma';
    context.strokeText(an + '°', x, 15);
    context.fillText(an + '°', x, 15);
  } else {
    if (typeof texto === 'number') texto = texto.toFixed(2);
    // context.strokeText(texto, position.x, position.y - 25)
    context.fillText(texto, position.x, position.y - 25);
  }
  if (polar) context.restore();
}
var radToDeg = function radToDeg(x) {
  return x * (180 / Math.PI);
};

function line(x1, y1, x2, y2) {
  var x3 = x2 - x1;
  var y3 = y2 - y1;

  var r = Math.abs(Math.sqrt(Math.pow(x3, 2) + Math.pow(y3, 2))) / 3;
  context.lineWidth = r / 10;
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.strokeStyle = '#ffffff';
  context.stroke();
  context.fill();
  var pol = new _Vector2D2.default(x3, y3);
  var pos = new _Vector2D2.default(x2, y2);
  circle(x2, y2, 10, 'rgb(255, 255, 255)');
  text('FUERZA ' + r.toFixed(1), pos, pol);
}

function clear(color) {
  if (color) context.fillStyle = color;
  context.save();
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.fillRect(0, 0, canvasWindow.width, canvasWindow.height);
  context.restore();
}

module.exports = { circle: circle, rect: rect, clear: clear, context: context, text: text, pos: pos, width: width, height: height, line: line };

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector2D = function () {
  function Vector2D(x, y) {
    _classCallCheck(this, Vector2D);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector2D, [{
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
    key: "polar",
    value: function polar() {
      return { a: Math.atan(this.y / this.x), r: this.mag() };
    }
  }, {
    key: "copy",
    value: function copy() {
      return new Vector2D(this.x, this.y);
    }
  }, {
    key: "limit",
    value: function limit(scalar) {
      var vr = new Vector2D(0, 0);
      if (this.mag() > scalar) {
        vr = Vector2D.normalize(this);
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
  }], [{
    key: "inverse",
    value: function inverse(v) {
      return new Vector2D(-1 * v.x, -1 * v.y);
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
      var vr = new Vector2D(0, 0);
      vr.x = v.x / m;
      vr.y = v.y / m;
      return vr;
    }
  }, {
    key: "sub",
    value: function sub(v1, v2) {
      var v3 = new Vector2D(0, 0);
      v3.x = v1.x - v2.x;
      v3.y = v1.y - v2.y;
      return v3;
    }
  }]);

  return Vector2D;
}();

exports.default = Vector2D;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.a = undefined;

var _Render = __webpack_require__(0);

var Render = _interopRequireWildcard(_Render);

var _Events = __webpack_require__(3);

var _Body = __webpack_require__(4);

var _Body2 = _interopRequireDefault(_Body);

var _Physics = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var col = new _Physics.Collision();
var separacion = 100;
(0, _Events.Events)();
var bals = [];
var x = 0;
var y = separacion;
for (var i = 0; i < 120; i++) {
  x += separacion;
  if (x > window.innerWidth) {
    y += separacion;
    x = separacion;
  }
  var ball = new _Body2.default(x, y, 12, '#333');
  col.add(ball);
  bals.push(ball);
}
var a = exports.a = {
  a: bals
};

function main() {
  Render.clear('#000');

  var as = new Image();
  as.src = '../img/bg.png';
  as.addEventListener('load', function () {
    Render.context.drawImage(as, 0, 0, window.innerWidth, window.innerHeight);
  });

  /*
   Render.context.drawImage(as, 0, 0, window.innerWidth, window.innerHeight)
   const p = new Image()
   p.src = '../img/bask.png'
   p.addEventListener('load', () => {
     Render.context.drawImage(p, window.innerWidth - 300, 200)
   })
   Render.context.drawImage(p, window.innerWidth - 300, 200 - 64)
  */
  bals.forEach(function (x) {
    return x.update();
  });
  col.check();
  if (_Events.line) (0, _Events.line)();
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
exports.line = exports.Events = undefined;

var _Render = __webpack_require__(0);

var _Render2 = _interopRequireDefault(_Render);

var _Vector2D = __webpack_require__(1);

var _Vector2D2 = _interopRequireDefault(_Vector2D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var balls = __webpack_require__(2);

var mouse = new _Vector2D2.default();

var start = new _Vector2D2.default(0, 0);
var end = new _Vector2D2.default();
var click = false;

var line = function line() {
  if (click) {
    _Render2.default.line(balls.a.a[0].position.x, balls.a.a[0].position.y, balls.a.a[0].position.x + mouse.x - start.x, balls.a.a[0].position.y + mouse.y - start.y);
  }
};

function Events() {
  var last = {
    w: 0,
    a: 0,
    s: 0,
    d: 0
  };

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

  document.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    if (start.x !== 0) {
      line();
    }
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
    var force = _Vector2D2.default.sub(start, end);
    force.mult(1 / 3);
    // force.limit(10)
    balls.a.a[0].addForce(force);
    balls.a.a.map(function (x) {
      return x.gravity(true);
    });
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
exports.line = line;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector2D = __webpack_require__(1);

var _Vector2D2 = _interopRequireDefault(_Vector2D);

var _Render = __webpack_require__(0);

var _Render2 = _interopRequireDefault(_Render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var p = new Image();
p.src = '../img/ball.png';

var _class = function () {
  function _class(x, y, size, color) {
    _classCallCheck(this, _class);

    this.color = color;
    this.size = size;
    this.g = false;

    if (typeof x === 'string') {
      x = Number(x.slice(0, x.length - 1)) / 100 * _Render2.default.width;
      y = Number(y.slice(0, y.length - 1)) / 100 * _Render2.default.height;
    }
    if (typeof size === 'string') {
      this.size = Number(size.slice(0, size.length - 1)) / 100 * _Render2.default.height;
    }

    // Vectors
    this.position = new _Vector2D2.default(x, y);
    this.velocity = new _Vector2D2.default(0, 0);
    this.aceleration = new _Vector2D2.default(0, 0);
  }

  _createClass(_class, [{
    key: 'update',
    value: function update() {
      this.position.add(this.velocity);
      // this.aceleration.mult(0.1)
      this.velocity.add(this.aceleration);
      this.aceleration.zero();
      // this.velocity.limit(5)
      if (this.g) {
        this.addForce(new _Vector2D2.default(0, 0.2));
      }
      this.display();
    }
  }, {
    key: 'gravity',
    value: function gravity(t) {
      // this.g = t
    }
  }, {
    key: 'addForce',
    value: function addForce(force) {
      this.aceleration.add(force);
    }
  }, {
    key: 'display',
    value: function display() {
      var color = 'rgb(' + this.velocity.mag().toFixed(0) * 12 + ', 0, ' + (110 - this.velocity.mag().toFixed(0) * 4) + ')';
      console.log(color);
      _Render2.default.circle(this.position.x, this.position.y, this.size + 5, color);
      // render.context.drawImage(p, this.position.x - this.size, this.position.y - this.size, this.size * 2, this.size * 2)
      _Render2.default.text(this.velocity.mag(), this.position);
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

var _Vector2D = __webpack_require__(1);

var _Vector2D2 = _interopRequireDefault(_Vector2D);

var _Render = __webpack_require__(0);

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
          var choque = _Vector2D2.default.sub(this.particles[i].position, this.particles[x].position);

          if (this.particles[i].position.x > _Render2.default.width) {
            this.particles[i].position.x = _Render2.default.width;
            this.particles[i].velocity.x = this.particles[i].velocity.x * -disi;
          }
          if (this.particles[i].position.x < 0) {
            this.particles[i].position.x = 0;
            this.particles[i].velocity.x = this.particles[i].velocity.x * -disi;
          }
          if (this.particles[i].position.y > _Render2.default.height) {
            this.particles[i].position.y = _Render2.default.height;
            this.particles[i].velocity.y = this.particles[i].velocity.y * -disi;
          }
          if (this.particles[i].position.y < 0) {
            this.particles[i].position.y = 0;
            this.particles[i].velocity.y = this.particles[i].velocity.y * -disi;
          }

          if (choque.mag() !== 0) {
            if (choque.mag() < this.particles[i].size + this.particles[x].size) {
              // this.particles[i].velocity.mult(0.5)
              // this.particles[x].velocity.mult(0.5)
              var uni = _Vector2D2.default.normalize(choque);
              uni.mult(0.5);
              uni.mult(this.particles[i].velocity.mag() * disi);
              this.particles[i].addForce(_Vector2D2.default.inverse(this.particles[i].velocity));
              this.particles[i].addForce(uni);
              this.particles[x].addForce(_Vector2D2.default.inverse(uni));
              break;
            }
          }
        }
      }
    }
  }]);

  return Collision;
}();

/***/ })
/******/ ]);