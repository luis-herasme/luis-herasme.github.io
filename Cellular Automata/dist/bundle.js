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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lienzo = __webpack_require__(1);

var Lienzo = _interopRequireWildcard(_lienzo);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Lienzo.render.init();

var cubes = 100;

var Y = cubes;
var X = cubes * (window.innerWidth / window.innerHeight);
var scale = window.innerHeight / cubes;

document.body.style.cursor = 'pointer';

var WORLD = [];
var efect = 0.5;
var RED = '#F00';
var GREEN = '#0F0';
var BLUE = '#00F';
var BLACK = '#000';

var colors = [RED, GREEN, BLUE, BLACK];

var Cell = function () {
  function Cell(x, y) {
    _classCallCheck(this, Cell);

    this.x = x;
    this.y = y;
    this.color = colors[Math.round(Math.random() * (colors.length - 1))];
    if (Math.random() < 0.9993) this.color = BLACK;
    this.alive = true;
    this.checkColor();
  }

  _createClass(Cell, [{
    key: 'checkColor',
    value: function checkColor() {
      if (this.color !== BLACK) {
        Lienzo.render.rect(this.x * scale + scale * 0.1, this.y * scale + scale * 0.1, scale * 0.8, scale * 0.8, this.color);
      }
      /*
      if (this.alive) {
        this.color = 'rgba(000, 255, 000, 1)'
        Lienzo.render.circle(scale / 2 + this.x * scale, scale / 2 + this.y * scale, scale / 2, this.color)
        // Lienzo.render.rect(this.x * scale, this.y * scale, scale, scale, this.color)
      } else {
        this.color = '#000'
      }
      */
      // if (this.color !== BLACK) if (Math.random() < 0.0001) console.log(this.color)
    }
  }, {
    key: 'update',
    value: function update() {
      /*
      if (this.vecinos === 3 || this.vecinos === 2) {
        if (this.vecinos === 3) this.alive = true
      } else {
        if (this.vecinos < 2) this.alive = false
        if (this.vecinos > 3) this.alive = false
      }
      */
      if (this.temp) this.color = this.temp;
      this.checkColor();
    }
  }, {
    key: 'rules',
    value: function rules(y, x) {
      if (this.color !== BLACK) {
        if (this.color === BLUE) {
          if (WORLD[y][x].color === RED) if (Math.random() > efect) WORLD[y][x].temp = BLUE;
        } else if (this.color === GREEN) {
          if (WORLD[y][x].color === BLUE) if (Math.random() > efect) WORLD[y][x].temp = GREEN;
        } else if (this.color === RED) {
          if (WORLD[y][x].color === GREEN) if (Math.random() > efect) WORLD[y][x].temp = RED;
        }
        if (WORLD[y][x].color === BLACK) if (Math.random() > efect * 1.75) WORLD[y][x].temp = this.color;
      }
    }
  }, {
    key: 'calculate',
    value: function calculate() {
      this.vecinos = 0;
      // DERECHA
      if (WORLD[this.y][this.x + 1]) {
        if (WORLD[this.y][this.x + 1].alive) {
          this.rules(this.y, this.x + 1);
          this.vecinos++;
          // this.color = '#0f0'
        }
      }
      // IZQUIERDA
      if (WORLD[this.y][this.x - 1]) {
        if (WORLD[this.y][this.x - 1].alive) {
          this.rules(this.y, this.x - 1);
          this.vecinos++;
          // this.color = '#0f0'
        }
      }
      // ABAJO
      if (WORLD[this.y + 1]) {
        if (WORLD[this.y + 1][this.x]) {
          if (WORLD[this.y + 1][this.x].alive) {
            this.rules(this.y + 1, this.x);
            this.vecinos++;
            // this.color = '#f00'
          }
        }
      }
      // ARRIBA
      if (WORLD[this.y - 1]) {
        if (WORLD[this.y - 1][this.x]) {
          if (WORLD[this.y - 1][this.x].alive) {
            this.rules(this.y - 1, this.x);
            this.vecinos++;
            // this.color = '#0f0'
          }
        }
      }
      // ABAJO DERECHA
      if (WORLD[this.y + 1]) {
        if (WORLD[this.y + 1][this.x + 1]) {
          if (WORLD[this.y + 1][this.x + 1].alive) {
            this.rules(this.y + 1, this.x + 1);
            this.vecinos++;
            // this.color = '#f00'
          }
        }
      }
      // ABAJO IZQUIERDA
      if (WORLD[this.y + 1]) {
        if (WORLD[this.y + 1][this.x - 1]) {
          if (WORLD[this.y + 1][this.x - 1].alive) {
            this.rules(this.y + 1, this.x - 1);
            this.vecinos++;
            // this.color = '#f00'
          }
        }
      }
      // ARRIBA DERECHA
      if (WORLD[this.y - 1]) {
        if (WORLD[this.y - 1][this.x + 1]) {
          if (WORLD[this.y - 1][this.x + 1].alive) {
            this.rules(this.y - 1, this.x + 1);
            this.vecinos++;
            // this.color = '#0f0'
          }
        }
      }
      // ARRIBA IZQUIERDA
      if (WORLD[this.y - 1]) {
        if (WORLD[this.y - 1][this.x - 1]) {
          if (WORLD[this.y - 1][this.x - 1].alive) {
            this.rules(this.y - 1, this.x - 1);
            this.vecinos++;
            // this.color = '#0f0'
          }
        }
      }
      if (Math.random() / 2 + this.vecinos / 16 > 0.99) this.temp = BLACK;
      // else if (this.vecinos < 2) this.temp = BLACK
    }
  }]);

  return Cell;
}();

for (var y = 0; y < Y; y++) {
  WORLD.push([]);
  for (var x = 0; x < X; x++) {
    WORLD[y].push(new Cell(x, y));
  }
}

var mouse = {};

document.addEventListener('click', function (event) {
  var y = Math.floor(event.clientY / scale);
  var x = Math.floor(event.clientX / scale);
  if (WORLD[y][x]) WORLD[y][x].alive = true;
  mouse.x = x;
  mouse.y = y;
  draw();
});

document.addEventListener('mousewheel', function (event) {
  // console.log(X / scale, Y / scale)
  Lienzo.render.clear();
  Lienzo.render.rect(0, 0, X * scale, Y * scale, '#222');
  var fac = void 0;
  if (event.wheelDelta > 0) {
    //scale++
    fac = 1.01;
  } else /* scale-- */fac = -1.01;

  Lienzo.render.context.translate(mouse.x, mouse.y);
  Lienzo.render.context.scale(fac, fac);
  Lienzo.render.context.translate(-mouse.x, -mouse.x);

  draw();
});

var working = true;

document.addEventListener('keydown', function (event) {
  if (event.key.toLowerCase() === 'p') {
    if (working) {
      clearInterval(inter);
    } else {
      inter = setInterval(render, 100);
    }
    working = !working;
  }
});

function render() {
  // Lienzo.render.rect(0, 0, X * scale, Y * scale, '#000')
  Lienzo.render.clear('#fff');
  for (var _x = 0; _x < X; _x++) {
    for (var _y = 0; _y < Y; _y++) {
      WORLD[_y][_x].calculate();
    }
  }
  for (var _x2 = 0; _x2 < X; _x2++) {
    for (var _y2 = 0; _y2 < Y; _y2++) {
      WORLD[_y2][_x2].update();
    }
  }
}

function draw() {
  for (var _x3 = 0; _x3 < X; _x3++) {
    for (var _y3 = 0; _y3 < Y; _y3++) {
      WORLD[_y3][_x3].checkColor();
    }
  }
}

var inter = setInterval(render, 100);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Library", [], factory);
	else if(typeof exports === 'object')
		exports["Library"] = factory();
	else
		root["Library"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
    vecR = mult(vecR, scalar);
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
  var result = Math.atan2(vec[1], vec[0]);
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

var vector = {
  add: add,
  sub: sub,
  mult: mult,
  mag: mag,
  dot: dot,
  inverse: inverse,
  cross: cross,
  cross2d: cross2d,
  linearIntersect: linearIntersect,
  fromMD: fromMD,
  normalize: normalize,
  setMag: setMag,
  angle: angle,
  addAngle: addAngle,
  distance: distance,
  copy: copy,
  moveTowards: moveTowards,
  limit: limit,
  angleBetween: angleBetween,
  toDegree: toDegree,
  setAngle: setAngle
};

exports.default = vector;
module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initEvents = exports.makeGlobal = exports.vec = exports.Color = exports.number = exports.physics = exports.render = exports.Vector = undefined;

var _Vector = __webpack_require__(2);

var _Vector2 = _interopRequireDefault(_Vector);

var _vector = __webpack_require__(0);

var _vector2 = _interopRequireDefault(_vector);

var _render = __webpack_require__(3);

var _render2 = _interopRequireDefault(_render);

var _Color = __webpack_require__(4);

var _Color2 = _interopRequireDefault(_Color);

var _number = __webpack_require__(5);

var _number2 = _interopRequireDefault(_number);

var _main = __webpack_require__(7);

var _main2 = _interopRequireDefault(_main);

var _events = __webpack_require__(6);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeGlobal(window) {
  window.physics = _main2.default;
  window.vec = _vector2.default;
  window.Vector = _Vector2.default;
  window.Color = _Color2.default;
  window.render = _render2.default;
  window.number = _number2.default;
  (0, _events2.default)(window);
}

exports.Vector = _Vector2.default;
exports.render = _render2.default;
exports.physics = _main2.default;
exports.number = _number2.default;
exports.Color = _Color2.default;
exports.vec = _vector2.default;
exports.makeGlobal = makeGlobal;
exports.initEvents = _events2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(0);

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = function () {
  function Vector(value) {
    _classCallCheck(this, Vector);

    this.value = value;
  }

  _createClass(Vector, [{
    key: 'add',
    value: function add(vec) {
      this.value = _vector2.default.add(this.value, vec.value);
    }
  }, {
    key: 'sub',
    value: function sub(vec) {
      this.value = _vector2.default.sub(this.value, vec.value);
    }
  }, {
    key: 'mult',
    value: function mult(scalar) {
      this.value = _vector2.default.mult(this.value, scalar);
    }
  }, {
    key: 'inverse',
    value: function inverse() {
      this.value = _vector2.default.inverse(this.value);
    }
  }, {
    key: 'mag',
    value: function mag() {
      return _vector2.default.mag(this.value);
    }
  }, {
    key: 'dot',
    value: function dot(vec) {
      return _vector2.default.dot(this.value, vec.value);
    }
  }, {
    key: 'normalize',
    value: function normalize() {
      this.value = _vector2.default.normalize(this.value);
    }
  }, {
    key: 'distance',
    value: function distance(vec) {
      return _vector2.default.distance(vec.value, this.value);
    }
  }, {
    key: 'angle',
    value: function angle() {
      return _vector2.default.angle(this.value);
    }
  }, {
    key: 'copy',
    value: function copy() {
      return new Vector(_vector2.default.copy(this.value));
    }
  }, {
    key: 'setMag',
    value: function setMag(magnitud) {
      this.value = _vector2.default.setMag(this.value, magnitud);
    }
  }, {
    key: 'addAngle',
    value: function addAngle(ang, piv) {
      this.value = _vector2.default.addAngle(this.value, ang, piv);
    }
  }, {
    key: 'limit',
    value: function limit(scalar) {
      this.value = _vector2.default.limit(this.value, scalar);
    }
  }, {
    key: 'moveTowards',
    value: function moveTowards(vec, speed, stop) {
      this.value = _vector2.default.moveTowards(this.value, vec, speed, stop);
    }
  }, {
    key: 'angleBetween',
    value: function angleBetween(vec) {
      return _vector2.default.angleBetween(this.value, vec);
    }
  }, {
    key: 'setAngle',
    value: function setAngle(ang) {
      this.value = _vector2.default.setAngle(this.value, ang);
    }
  }, {
    key: 'x',
    get: function get() {
      return this.value[0];
    },
    set: function set(value) {
      this.value[0] = value;
    }
  }, {
    key: 'y',
    get: function get() {
      return this.value[1];
    },
    set: function set(value) {
      this.value[1] = value;
    }
  }]);

  return Vector;
}();

exports.default = Vector;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global Image */

var render = {
  init: init,
  setCenter: setCenter,
  clear: clear,
  circle: circle,
  strokeCircle: strokeCircle,
  strokeArc: strokeArc,
  rect: rect,
  strokeRect: strokeRect,
  line: line,
  poligon: poligon,
  text: text,
  width: 0,
  height: 0,
  setScale: setScale,
  scale: 1,
  loadImage: loadImage,
  image: image,
  context: undefined
};

var images = {};
var canvas = void 0;

function init(canvasName, width, height) {
  if (canvasName) {
    canvas = document.getElementById(canvasName);
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
    } else {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  } else {
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);

    if (width && height) {
      canvas.width = width;
      canvas.height = height;
    } else {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }
  render.width = canvas.width / render.scale;
  render.height = canvas.height / render.scale;

  render.center = [render.width / 2, render.height / 2];
  render.context = canvas.getContext('2d');
}

function setScale(scale) {
  render.width = render.width / scale;
  render.height = render.height / scale;
  render.center = [render.width / 2, render.height / 2];
  render.scale = scale;
}

function line(vec1, vec2, style, stroke) {
  // Takes a vector as an start point and another vector as the final point of the line
  render.context.beginPath();
  setStyle(style);
  render.context.moveTo(vec1[0] * render.scale, vec1[1] * render.scale);
  render.context.lineTo(vec2[0] * render.scale, vec2[1] * render.scale);
  if (stroke) render.context.stroke();
  render.context.fill();
}

function rect(x, y, w, h, color) {
  // Draws a rect in the screen
  render.context.beginPath();
  render.context.fillStyle = color;
  render.context.fillRect(x, y, w, h);
}

function strokeRect(x, y, w, h, color) {
  // Draws the borders of a rect in the screen
  x *= render.scale;
  y *= render.scale;
  h *= render.scale;
  w *= render.scale;
  render.context.beginPath();
  render.context.fillStyle = color;
  render.context.rect(x, y, w, h);
  render.context.stroke();
}

function circle(x, y, size, color) {
  // Draws a circle in the screen
  render.context.beginPath();
  // size = size * render.scale;
  render.context.fillStyle = color;
  render.context.arc(x, y, size, 0, 2 * Math.PI);
  render.context.fill();
}

function strokeArc(x, y, size, width, eAngl, aAngl, color) {
  // Draws the borders of an arc in the screen
  render.context.beginPath();
  x *= render.scale;
  y *= render.scale;
  size = size * render.scale;
  render.context.strokeStyle = color;
  render.context.arc(x, y, size, eAngl, aAngl, true);
  render.context.lineWidth = width;
  render.context.stroke();
}

function strokeCircle(pos, size, width, color) {
  // Draws the borders of a circle in the screen
  render.context.beginPath();
  size = size * render.scale;
  render.context.strokeStyle = color;
  render.context.arc(pos[0] * render.scale, pos[1] * render.scale, size, size, 0, 2 * Math.PI);
  render.context.lineWidth = width;
  render.context.stroke();
}

function setStyle(style) {
  for (var i in style) {
    render.context[i] = style[i];
  }
}

function setCenter() {
  var vec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : render.center;

  // Sets the center of the screen in the given position by a 2D vector
  render.context.translate(vec[0], vec[1]);
}

function text(texto, pos, style, stroke) {
  // Puts text in the screen
  setStyle(style);
  if (stroke) render.context.strokeText(texto, pos[0] * render.scale, pos[1] * render.scale);
  render.context.fillText(texto, pos[0] * render.scale, pos[1] * render.scale);
}

function loadImage(name, src) {
  var image = new Image();
  image.src = src;
  images[name] = image;
}

function image(name, x, y, w, h) {
  render.context.beginPath();
  x *= render.scale;
  y *= render.scale;
  h *= render.scale;
  w *= render.scale;
  render.context.drawImage(images[name], x, y, w, h);
}

function clear() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#000';

  // Clears the entire screen
  render.context.fillStyle = color;
  render.context.save();
  render.context.setTransform(1, 0, 0, 1, 0, 0);
  render.context.fillRect(0, 0, canvas.width, canvas.height);
  render.context.restore();
}

function poligon(vecs, color, stroke) {
  // Draws a poligon in the screen
  render.context.beginPath();
  render.context.fillStyle = color;
  render.context.moveTo(vecs[0][0], vecs[0][1]);
  for (var i = 0; i < vecs.length; i++) {
    render.context.lineTo(vecs[i][0], vecs[i][1]);
  }
  render.context.closePath();
  render.context.fill();
  if (stroke) render.context.stroke();
}

exports.default = render;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Color = function () {
  function Color() {
    var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
    var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    _classCallCheck(this, Color);

    this.r = Math.round(r * 255);
    this.g = Math.round(g * 255);
    this.b = Math.round(b * 255);
    this.a = a;

    if (this.r > 255) this.r = 255;
    if (this.r < 0) this.r = 0;

    if (this.g > 255) this.g = 255;
    if (this.g < 0) this.g = 0;

    if (this.b > 255) this.b = 255;
    if (this.b < 0) this.b = 0;

    if (this.a > 1) this.a = 1;
    if (this.a < 0) this.a = 0;
  }

  _createClass(Color, [{
    key: "rgba",
    value: function rgba() {
      return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
    }
  }, {
    key: "rgb",
    value: function rgb() {
      return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    }
  }], [{
    key: "random",
    value: function random() {
      var color = new Color(Math.random(), Math.random(), Math.random());
      return color.rgb();
    }
  }]);

  return Color;
}();

exports.default = Color;
module.exports = exports["default"];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function symbol() {
  var probability = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;

  if (Math.random() < probability) {
    return -1;
  } else {
    return 1;
  }
}

function random() {
  var finish = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  return Math.random() * (finish - start) + start;
}

function randomList() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var finish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var list = [];
  for (var i = 0; i < len; i++) {
    list.push(random(finish, start));
  }
  return list;
}

function randomMatrix() {
  var finish = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  var heigth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;

  var list = [];
  for (var i = 0; i < heigth; i++) {
    list.push(randomList(width, finish, start));
  }
  return list;
}

function noise() {
  var resolution = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var finish = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var start = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  var result = [];
  var size = Math.round(len / resolution);

  for (var long = 0; long < size; long++) {
    var number = random(finish, start);
    result.push(number);

    for (var i = 1; i <= resolution; i++) {
      number += symbol() * random(finish / i, start / i);
      result.push(number);
    }

    result.push(number);
  }

  return result;
}

exports.default = {
  symbol: symbol,
  randomList: randomList,
  randomMatrix: randomMatrix,
  noise: noise,
  random: random
};
module.exports = exports["default"];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/* global window */

var mouse = {
  position: [0, 0],
  click: 0
};

var time = 0;

function init(window) {
  window.onload = function () {
    window.addEventListener('mousemove', function (e) {
      mouse.position = [e.clientX, e.clientY];
      if (window.mouseMove) window.mouseMove(mouse);
    });

    window.addEventListener('mousedown', function (e) {
      mouse.click = e.which;
      if (window.mouseDown) window.mouseDown(mouse);
    });

    window.addEventListener('mouseup', function (e) {
      mouse.click = 0;
      if (window.mouseUp) window.mouseUp(mouse);
    });

    window.addEventListener('keydown', function (e) {
      if (window.keyDown) window.keyDown(e.key);
    });

    window.addEventListener('keyup', function (e) {
      if (window.keyUp) window.keyUp(e.key);
    });

    window.addEventListener('keypress', function (e) {
      if (window.keyPress) window.keyPress(e.key);
    });

    if (window.update) {
      setInterval(function () {
        window.update();
      }, time);
    }

    if (window.start) {
      window.start();
    }
  };
}

exports.default = init;
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Body = __webpack_require__(8);

var _Body2 = _interopRequireDefault(_Body);

var _Collision = __webpack_require__(9);

var _Collision2 = _interopRequireDefault(_Collision);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var physics = {
  Body: _Body2.default,
  Collision: _Collision2.default
};

exports.default = physics;
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Body = function () {
  function Body(position, size) {
    _classCallCheck(this, Body);

    this.position = position.copy();
    position.mult(0);
    this.aceleration = position.copy();
    this.velocity = position.copy();
    this.size = size;
  }

  _createClass(Body, [{
    key: "update",
    value: function update() {
      this.velocity.add(this.aceleration);
      this.position.add(this.velocity);
      this.aceleration.mult(0);
    }
  }, {
    key: "addForce",
    value: function addForce(force) {
      force.mult(1 / this.size);
      this.aceleration.add(force);
    }
  }]);

  return Body;
}();

exports.default = Body;
module.exports = exports["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(2);

var _Vector2 = _interopRequireDefault(_Vector);

var _vector = __webpack_require__(0);

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collision = function () {
  function Collision() {
    var particles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var restitution = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    _classCallCheck(this, Collision);

    this.restitution = restitution;
    this.particles = particles;
    this.boundSet = false;
  }

  _createClass(Collision, [{
    key: 'add',
    value: function add(particle) {
      this.particles.push(particle);
    }
  }, {
    key: 'setBounds',
    value: function setBounds(minX, maxX, minY, maxY) {
      this.boundSet = true;
      this.minX = minX;
      this.maxX = maxX;
      this.minY = minY;
      this.maxY = maxY;
    }
  }, {
    key: 'removeBounds',
    value: function removeBounds() {
      this.boundSet = false;
    }
  }, {
    key: 'update',
    value: function update() {
      for (var i = 0; i < this.particles.length; i++) {
        if (this.boundSet) {
          if (this.particles[i].position.x <= this.minX) {
            this.particles[i].position.x = this.minX;
            this.particles[i].velocity.mult(this.restitution);
            this.particles[i].velocity.inverse();
          }

          if (this.particles[i].position.x >= this.maxX) {
            this.particles[i].position.x = this.maxX;
            this.particles[i].velocity.mult(this.restitution);
            this.particles[i].velocity.inverse();
          }

          if (this.particles[i].position.y <= this.minY) {
            this.particles[i].position.y = this.minY;
            this.particles[i].velocity.mult(this.restitution);
            this.particles[i].velocity.inverse();
          }

          if (this.particles[i].position.y >= this.maxY) {
            this.particles[i].position.y = this.maxY;
            this.particles[i].velocity.mult(this.restitution);
            this.particles[i].velocity.inverse();
          }
        }
        for (var x = 0; x < this.particles.length; x++) {
          var c = _vector2.default.sub(this.particles[i].position.value, this.particles[x].position.value);

          var choque = new _Vector2.default(c);

          if (choque.mag() !== 0) {
            if (choque.mag() < this.particles[i].size + this.particles[x].size) {
              var force = choque.copy();
              force.inverse();
              force.mult(this.restitution);

              this.particles[x].addForce(force);
              if (this.particles[x].onCollision) this.particles[x].onCollision(this.particles[i]);
              break;
            }
          }
        }
      }
    }
  }]);

  return Collision;
}();

var collision = new Collision([], 1);

exports.default = collision;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=Library.js.map

/***/ })
/******/ ]);