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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * This is the render library
*/

var render = { init: init, setCenter: setCenter, clear: clear, circle: circle, strokeCircle: strokeCircle, strokeArc: strokeArc, rect: rect, strokeRect: strokeRect, line: line, poligon: poligon, text: text, width: 0, height: 0, scale: { setScale: setScale, scale: 1 }, resolution: 1, context: undefined };

function init() {
  var canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  render.width = window.innerWidth / render.scale.scale;
  render.height = window.innerHeight / render.scale.scale;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render.context = canvas.getContext('2d');
}

function setScale(scale) {
  render.width = render.width / scale;
  render.height = render.height / scale;
  render.scale.scale = scale;
}

function line(vec1, vec2, dash, style) {
  // Takes a vector as an start point and another vector as the final point of the line
  render.context.beginPath();

  setStyle(style);

  if (dash) render.context.setLineDash(dash);

  render.context.moveTo(vec1[0] * render.scale.scale, vec1[1] * render.scale.scale);
  render.context.lineTo(vec2[0] * render.scale.scale, vec2[1] * render.scale.scale);

  render.context.stroke();
  render.context.fill();

  render.context.setLineDash([0, 0]);
}

function rect(x, y, w, h, color) {
  // Draws a rect in the screen
  x = x * render.scale.scale;
  y = y * render.scale.scale;
  h = h * render.scale.scale;
  w = w * render.scale.scale;
  render.context.beginPath();
  render.context.fillStyle = color;
  render.context.fillRect(x, y, w, h);
}

function strokeRect(x, y, w, h, color) {
  // Draws the borders of a rect in the screen
  x = x * render.scale.scale;
  y = y * render.scale.scale;
  h = h * render.scale.scale;
  w = w * render.scale.scale;
  render.context.beginPath();
  render.context.fillStyle = color;
  render.context.rect(x, y, w, h);
  render.context.stroke();
}

function circle(pos, size, color) {
  // Draws a circle in the screen
  size = size * render.scale.scale;
  render.context.beginPath();
  render.context.fillStyle = color;
  render.context.arc(pos[0] * render.scale.scale, pos[1] * render.scale.scale, size, 0, 2 * Math.PI);
  render.context.fill();
}

function strokeArc(x, y, size, width, eAngl, aAngl, color) {
  // Draws the borders of an arc in the screen
  x = x * render.scale.scale;
  y = y * render.scale.scale;
  size = size * render.scale.scale;
  render.context.strokeStyle = color;
  render.context.beginPath();
  render.context.arc(x, y, size, eAngl /*- (Math.PI)*/, aAngl /*- (Math.PI)*/, true);
  render.context.lineWidth = width;
  render.context.stroke();
}

function strokeCircle(x, y, size, width, color) {
  // Draws the borders of a circle in the screen
  x = x * render.scale.scale;
  y = y * render.scale.scale;
  size = size * render.scale.scale;
  render.context.strokeStyle = color;
  render.context.beginPath();
  render.context.arc(x, y, size, 0, 2 * Math.PI);
  render.context.lineWidth = width;
  render.context.stroke();
}

function setStyle(style) {
  for (var i in style) {
    render.context[i] = style[i];
  }
}

function setCenter() {
  var vec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [render.width / 2, render.height / 2];

  // Sets the center of the screen in the given position by a 2D vector
  render.context.translate(vec[0], vec[1]);
}

function text(texto, pos, style) {
  // Puts text in the screen
  setStyle(style);
  render.context.fillText(texto, pos[0] * render.scale.scale, pos[1] * render.scale.scale);
}

function clear() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#000';

  // Clears the entire screen
  if (color) render.context.fillStyle = color;
  render.context.save();
  render.context.setTransform(1, 0, 0, 1, 0, 0);
  render.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  render.context.restore();
}

function poligon(vecs, color) {
  // Draws a poligon in the screen
  render.context.beginPath();
  render.context.fillStyle = color;
  render.context.moveTo(vecs[0][0], vecs[0][1]);
  for (var i = 0; i < vecs.length; i++) {
    render.context.lineTo(vecs[i][0], vecs[i][1]);
  }
  render.context.closePath();
  render.context.fill();
  render.context.stroke();
}

render.init();

exports.default = render;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Vector library

function add(vec1, vec2) {
  // This function adds the two vectors given
  var vecR = [];
  for (var i = 0; i < vec1.length; i++) {
    vecR[i] = vec1[i] + vec2[i];
  }
  return vecR;
}

function sub(vec1, vec2) {
  // This function subtracts the two vectors given
  var vecR = [];
  for (var i = 0; i < vec1.length; i++) {
    vecR[i] = vec1[i] - vec2[i];
  }
  return vecR;
}

function mult(vec, scalar) {
  // This function multiplies the two vectors given
  var vecR = [];
  for (var i = 0; i < vec.length; i++) {
    vecR[i] = vec[i] * scalar;
  }
  return vecR;
}

function inverse(vec) {
  // This function returns the inverse of the vector
  var vecR = [];
  for (var i = 0; i < vec.length; i++) {
    vecR[i] = vec[i] * -1;
  }
  return vecR;
}

function normalize(vec) {
  // This function normalise the vector
  var r = mag(vec);
  if (isNaN(r) || r === 0) r = 1;
  var vecR = [];
  for (var i = 0; i < vec.length; i++) {
    vecR[i] = vec[i] / r;
  }
  return vecR;
}

function distance(vec1, vec2) {
  // Returns the magnitude of the distance between the two vectors given
  return mag(sub(vec1, vec2));
}

function copy(vec) {
  var vecR = [];
  for (var i = 0; i < vec.length; i++) {
    vecR[i] = vec[i];
  }
  return vecR;
}

function limit(vec, scalar) {
  // This function limits the magnitud of the vector
  var vecR = [];
  if (mag(vec) > scalar) {
    vecR = normalize(vec);
    vecR = mult(vecR);
    return vecR;
  }
  return vec;
}

function dot(vec1, vec2) {
  // This function returns the dot product of the two vectors given
  var result = 0;
  for (var i = 0; i < vec1.length; i++) {
    result += vec1[i] * vec2[i];
  }
  return result;
}

function mag(vec) {
  // This functions returns the margnitud of the vector given
  return Math.sqrt(dot(vec, vec));
}

function moveTowards(vec1, vec2, speed, stop) {
  // Moves the first vector given to the second vector given
  if (speed === undefined) speed = 1;
  if (stop === undefined) stop = 1;

  var distance = sub(vec2, vec1);
  if (mag(distance) > stop) {
    var vecR = [];
    distance = normalize(distance);
    distance = mult(distance, speed);
    vecR = add(vec1, distance);
    return vecR;
  }
  return vec1;
}

function angleBetween(vec1, vec2) {
  // Returns the angle between 2 vectors
  return Math.acos(dot(vec1, vec2) / (mag(vec1) * mag(vec2)));
}

function setMag(vec, scalar) {
  // Sets the magnitud of the vector to the length of the scalar given
  var vecR = normalize(vec);
  vecR = mult(vecR, scalar);
  return vecR;
}

function toDegree(radian) {
  return radian * (180 / Math.PI);
}

function cross(vec1, vec2) {
  var vecR = [];
  vecR[0] = vec1[1] * vec2[2] - vec1[2] * vec2[1];
  vecR[1] = vec1[2] * vec2[0] - vec1[0] * vec2[2];
  vecR[2] = vec1[0] * vec2[1] - vec1[1] * vec2[0];
  return vecR;
}

/*
  This part of the code only works with 2-dimensional vectors
*/

function angle(vec) {
  // Returns the angle of the vector
  var result = /*-*/Math.atan2(vec[1], vec[0]); //- 3.14
  // if (result < 0) result += (2 * Math.PI)
  return result;
}

function addAngle(vec, ang, piv) {
  var vecR = [vec[0], vec[1]];

  var s = Math.sin(ang);
  var c = Math.cos(ang);

  vecR = vector.sub(vecR, piv);

  // rotate point
  var xnew = vecR[0] * c - vecR[1] * s;
  var ynew = vecR[0] * s + vecR[1] * c;

  // translate point back:
  vecR = vector.add([xnew, ynew], piv);

  /*
  let l = mag(vec)
  let newAngle = angle(vec) + ang
  let vecR = []
  vecR[0] = l * Math.cos(newAngle)
  vecR[1] = l * Math.sin(newAngle)
  */
  return vecR;
}

function setAngle(vec, ang) {
  var l = mag(vec);
  var vecR = [];
  vecR[0] = l * Math.cos(ang);
  vecR[1] = l * Math.sin(ang);
  return vecR;
}

function fromMD(magnitud, direction) {
  var vecR = [1, 1];
  vecR = setAngle(vecR, direction);
  vecR = setMag(vecR, magnitud);
  return vecR;
}

function linearIntersect(a, b, c, d) {
  var r = vector.sub(b, a);
  var s = vector.sub(d, c);
  var d1 = vector.cross2d(r, s);
  var u = vector.cross2d(vector.sub(c, a), r) / d1;
  var t = vector.cross2d(vector.sub(c, a), s) / d1;
  if (!(u < 1 && u > 0 && t < 1 && t > 0)) {
    u = 1;
    t = 1;
  }
  return { u: u, t: t };
}

function cross2d(ve1, vec2) {
  return ve1[0] * vec2[1] - ve1[1] * vec2[0];
}

var vector = { fromMD: fromMD, cross2d: cross2d, linearIntersect: linearIntersect, cross: cross, sub: sub, add: add, mult: mult, inverse: inverse, normalize: normalize, setMag: setMag, angle: angle, addAngle: addAngle, distance: distance, copy: copy, moveTowards: moveTowards, limit: limit, dot: dot, angleBetween: angleBetween, mag: mag, toDegree: toDegree, setAngle: setAngle };

exports.default = vector;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Color = function () {
  function Color(r, g, b) {
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    _classCallCheck(this, Color);

    this.r = Math.round(r * 255);
    if (this.r >= 255) this.r = 255;
    this.g = Math.round(g * 255);
    if (this.g >= 255) this.g = 255;
    this.b = Math.round(b * 255);
    if (this.b >= 255) this.b = 255;
    this.a = a;
  }

  _createClass(Color, [{
    key: "rgb",
    value: function rgb() {
      return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
    }
  }]);

  return Color;
}();
/*
// Creates a color code from red, green and blue values
function getColorCode (r, g, b) {
  let r0 = Math.floor(r / 16)
  let r1 = r % 16
  let g0 = Math.floor(g / 16)
  let g1 = g % 16
  let b0 = Math.floor(b / 16)
  let b1 = b % 16
  return '#' + r0.toString(16) + r1.toString(16) + g0.toString(16) + g1.toString(16) + b0.toString(16) + b1.toString(16)
}

// Returns a random color-code
function getRandomColorCode () {
  return getColorCode(
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255)
  )
}
*/


exports.default = Color;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _render = __webpack_require__(0);

var _render2 = _interopRequireDefault(_render);

var _vector = __webpack_require__(1);

var _vector2 = _interopRequireDefault(_vector);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _Point = __webpack_require__(6);

var _Point2 = _interopRequireDefault(_Point);

var _body = __webpack_require__(7);

var _Utils = __webpack_require__(8);

var _collision = __webpack_require__(9);

var _collision2 = _interopRequireDefault(_collision);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var objects = [];
_render2.default.setCenter();
var conta = 250;

var Electric = function (_Body) {
  _inherits(Electric, _Body);

  function Electric(charge, position) {
    var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

    _classCallCheck(this, Electric);

    var _this = _possibleConstructorReturn(this, (Electric.__proto__ || Object.getPrototypeOf(Electric)).call(this, position, 15));

    _this.size = size;
    _this.text = charge ? 'p' : 'n';
    _this.charge = charge;
    _this.color = charge ? '#f00' : '#00f';
    _this.position = position;
    if (_this.size !== 300) {
      _this.draw = new _Point2.default(_this.position, _this.text, _this.size, _this.color);
      _collision2.default.particles.push(_this);
    } else _this.draw = new _Point2.default(_this.position, _this.text, _this.size / 3, _this.color);
    return _this;
  }

  _createClass(Electric, [{
    key: 'update',
    value: function update(particles) {
      _get(Electric.prototype.__proto__ || Object.getPrototypeOf(Electric.prototype), 'update', this).call(this);
      this.draw.position = this.position;
      var d = void 0;
      for (var _i = 0; _i < particles.length; _i++) {
        if (particles[_i].charge !== this.charge) {
          d = _vector2.default.inverse(_vector2.default.sub(this.position, particles[_i].position));
        }
        if (particles[_i].charge === this.charge) {
          d = _vector2.default.sub(this.position, particles[_i].position);
        }
        d = _vector2.default.mult(d, 0.00001 * particles[_i].size);
        this.addForce(d);
      }
      var i = 0;
      if (!this.tag) {
        if (_vector2.default.mag(this.position) >= conta) {
          this.position = _vector2.default.setMag(this.position, conta);
          this.velocity = _vector2.default.mult(_vector2.default.inverse(this.velocity), i);
        }
      }
      this.draw.render();
    }
  }]);

  return Electric;
}(_body.Body2);

var positive = 0;
var balls = 100;

for (var i = 0; i < balls; i++) {
  var charge = Math.random() < 0.5 ? true : false;
  if (charge) positive++;
  objects.push(new Electric(charge, [(0, _Utils.randomNumber)(_render2.default.width / 2), (0, _Utils.randomNumber)(_render2.default.width / 2)]));
}

var negative = balls - positive;

var nuevo = new Electric(true, _events2.default.mouse.position, 300);
nuevo.tag = true;
_events2.default.mouse.mousedown = function (e) {
  nuevo.position = _vector2.default.sub(_events2.default.mouse.position, [_render2.default.width / 2, _render2.default.height / 2]);
  if (e.button === 0) {
    nuevo.charge = true;
    nuevo.draw = new _Point2.default(nuevo.position, 'P', nuevo.size / 6, '#f00');
  }
  if (e.button === 2) {
    nuevo.charge = false;
    nuevo.draw = new _Point2.default(nuevo.position, 'N', nuevo.size / 6, '#00f');
  }
  objects.push(nuevo);
};

_events2.default.mouse.mousemove = function (e) {
  nuevo.position = _vector2.default.sub(_events2.default.mouse.position, [_render2.default.width / 2, _render2.default.height / 2]);
};

_events2.default.mouse.mouseup = function (e) {
  objects.pop();
};

setInterval(function () {
  _render2.default.clear();
  _render2.default.text('POSITIVE ' + positive, [150, -400], { fillStyle: '#FFF', font: '30px Arial' });
  _render2.default.text('NEGATIVE ' + negative, [150, -300], { fillStyle: '#FFF', font: '30px Arial' });
  _collision2.default.update();
  nuevo.position = _vector2.default.sub(_events2.default.mouse.position, [_render2.default.width / 2, _render2.default.height / 2]);
  _render2.default.strokeCircle(0, 0, conta, 10, '#FF0');
  objects.forEach(function (x) {
    return x.update(objects);
  });
});

/*
  if (this.position[0] < 0) {
    this.position[0] = 0
    // this.velocity = vector.mult(vector.inverse(this.velocity), i)
  }
  if (this.position[1] > render.height) {
    this.position[1] = render.height
    // this.velocity = vector.mult(vector.inverse(this.velocity), i)
  }
  if (this.position[1] < 0) {
    this.position[1] = 0
    // this.velocity = vector.mult(vector.inverse(this.velocity), i)
  }
*/

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vector = __webpack_require__(1);

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mouse = {
  position: [0, 0],
  end: [0, 0],
  start: [0, 0],
  clicked: false
};

var keyboard = {};

document.addEventListener('mousemove', function (e) {
  mouse.position[0] = e.clientX;
  mouse.position[1] = e.clientY;

  mouse.end = _vector2.default.sub(mouse.position, mouse.start);
  if (mouse.mousemove) mouse.mousemove(e);
});

document.addEventListener('mousedown', function (e) {
  e.preventDefault();
  mouse.click = true;

  mouse.start[0] = e.clientX;
  mouse.start[1] = e.clientY;
  if (mouse.mousedown) mouse.mousedown(e);
});

document.addEventListener('contextmenu', function (e) {
  return e.preventDefault();
});

document.addEventListener('mouseup', function (e) {
  mouse.click = false;
  mouse.end = [0, 0];
  if (mouse.mouseup) mouse.mouseup(e);
});

document.addEventListener('keydown', function (e) {
  if (keyboard.keydown) keyboard.keydown(e.key.toLowerCase());
});

document.addEventListener('keyup', function (e) {
  if (keyboard.keyup) keyboard.keyup(e.key.toLowerCase());
});

document.addEventListener('keypress', function (e) {
  if (keyboard.keypress) keyboard.keypress(e.key.toLowerCase());
});

var events = { mouse: mouse, keyboard: keyboard };

exports.default = events;

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _color = __webpack_require__(2);

var _color2 = _interopRequireDefault(_color);

var _render2 = __webpack_require__(0);

var _render3 = _interopRequireDefault(_render2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TS = { font: 'bold 16px Arial', fillStyle: '#fff', textAlign: 'center' };

var Point = function () {
  function Point(position, text, size) {
    var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new _color2.default(Math.random(), Math.random(), Math.random());
    var textStyle = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : TS;

    _classCallCheck(this, Point);

    this.position = position;
    this.size = size;

    this.color = color;
    this.text = text;

    this.textStyle = textStyle;
  }

  _createClass(Point, [{
    key: 'render',
    value: function render() {
      if (typeof this.color !== 'string') _render3.default.circle(this.position, this.size, this.color.rgb());else _render3.default.circle(this.position, this.size, this.color);
      _render3.default.text(this.text, this.position, this.textStyle);
    }
  }]);

  return Point;
}();

exports.default = Point;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Body3 = exports.Body2 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(1);

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Body2 = function () {
  function Body2() {
    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0];
    var size = arguments[1];

    _classCallCheck(this, Body2);

    this.position = position;
    this.aceleration = [0, 0];
    this.velocity = [0, 0];
    this.size = size;
  }

  _createClass(Body2, [{
    key: 'update',
    value: function update() {
      this.velocity = _vector2.default.add(this.velocity, this.aceleration);
      this.position = _vector2.default.add(this.position, this.velocity);
      this.aceleration = [0, 0];
    }
  }, {
    key: 'addForce',
    value: function addForce(aceleration) {
      aceleration = _vector2.default.mult(aceleration, 1 / this.size);
      this.aceleration = _vector2.default.add(this.aceleration, aceleration);
    }
  }]);

  return Body2;
}();

var Body3 = function () {
  function Body3() {
    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0, 0];
    var size = arguments[1];

    _classCallCheck(this, Body3);

    this.position = position;
    this.aceleration = [0, 0, 0];
    this.velocity = [0, 0, 0];
    this.size = size;
  }

  _createClass(Body3, [{
    key: 'update',
    value: function update() {
      this.velocity = _vector2.default.add(this.velocity, this.aceleration);
      this.position = _vector2.default.add(this.position, this.velocity);
      this.aceleration = [0, 0, 0];
    }
  }, {
    key: 'addForce',
    value: function addForce(aceleration) {
      aceleration = _vector2.default.mult(aceleration, 1 / this.size);
      this.aceleration = _vector2.default.add(this.aceleration, aceleration);
    }
  }]);

  return Body3;
}();

exports.Body2 = Body2;
exports.Body3 = Body3;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function randomSign(number) {
  if (!number) return Math.random() < 0.5 ? 1 : -1;else return Math.random() < 0.5 ? number : -1 * number;
}

function randomNumber(number) {
  return randomSign(Math.random() * number);
}

exports.randomSign = randomSign;
exports.randomNumber = randomNumber;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vector = __webpack_require__(1);

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var physics = {
  update: update,
  particles: []
};

function update() {
  for (var i = 0; i < physics.particles.length; i++) {
    for (var x = 0; x < physics.particles.length; x++) {
      var choque = _vector2.default.sub(physics.particles[i].position, physics.particles[x].position);
      if (_vector2.default.mag(choque) !== 0) {
        if (_vector2.default.mag(choque) < physics.particles[i].size + physics.particles[x].size) {
          physics.particles[x].addForce(_vector2.default.inverse(choque));
          break;
        }
      }
    }
  }
}

exports.default = physics;

/***/ })
/******/ ]);