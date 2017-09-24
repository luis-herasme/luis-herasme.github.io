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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
  function Vector2() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

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
    key: "random",
    value: function random(x, y) {
      this.x = Math.random() * x;
      this.y = Math.random() * y;
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
    key: "equals",
    value: function equals(vector) {
      if (this.x === vector.x && this.y === vector.y) return true;else return false;
    }
  }, {
    key: "mag",
    value: function mag() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
  }, {
    key: "moveTowards",
    value: function moveTowards(vector) {
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var stop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      var rest = Vector2.sub(vector, this);
      if (rest.mag() > stop) {
        rest = Vector2.normalize(rest);
        rest.mult(speed);
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

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var canvasWindow = document.getElementById('lienzo');

var pos = { x: 0, y: 0 };

canvasWindow.width = window.innerWidth;
canvasWindow.height = window.innerHeight;

var context = canvasWindow.getContext('2d');
context.font = '10px Arial';
context.textAlign = 'center';

var scale = {
  scale: 1
};

function rect(x, y, w, h, color) {
  x = x * scale.scale;
  y = y * scale.scale;
  h = h * scale.scale;
  w = w * scale.scale;
  context.beginPath();
  context.fillStyle = color;
  context.rect(x, y, w, h);
  context.stroke();
  context.fill();
}

function text(texto, x, y, color) {
  x = x * scale.scale;
  y = y * scale.scale;
  context.fillStyle = color;
  context.fillText(texto, x, y);
}

function circleText(positionX, positionY, size, color, texto) {
  positionX = positionX * scale.scale;
  positionY = positionY * scale.scale;
  size = size * scale.scale;
  context.beginPath();
  context.fillStyle = color;
  context.arc(positionX, positionY, size, 0, 2 * Math.PI);
  context.lineWidth = 5;
  context.stroke();
  context.fill();
  if (texto) {
    context.fillStyle = '#ffffff';
    context.fillText(texto.toFixed(2), positionX, positionY - size);
  }
}

function circle(x, y, size, color) {
  x = x * scale.scale;
  y = y * scale.scale;
  size = size * scale.scale;
  context.beginPath();
  context.fillStyle = color;
  context.arc(x, y, size, 0, 2 * Math.PI);
  context.fill();
}

function strokeCircle(x, y, size, color, a) {
  /*
  if (a) {
    context.save()
    context.globalAlpha = a
  }
  */
  x = x * scale.scale;
  y = y * scale.scale;
  size = size * scale.scale;
  context.strokeStyle = color;
  context.beginPath();
  context.arc(x, y, size, 0, 2 * Math.PI);
  context.lineWidth = 5;
  context.stroke();
  context.strokeStyle = '#000';
  /*
  if (a) {
    context.restore()
    context.globalAlpha = 1
  }
  */
}

function clear() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#2F2F3F';

  context.fillStyle = color;
  context.save();
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.fillRect(0, 0, canvasWindow.width, canvasWindow.height);
  context.restore();
}

module.exports = { strokeCircle: strokeCircle, scale: scale, text: text, circleText: circleText, circle: circle, rect: rect, clear: clear, context: context, pos: pos };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector2D = __webpack_require__(0);

var _Vector2D2 = _interopRequireDefault(_Vector2D);

var _render = __webpack_require__(2);

var _render2 = _interopRequireDefault(_render);

var _Utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Planta = function () {
  function Planta(x, y, gr, plantSize) {
    _classCallCheck(this, Planta);

    this.position = new _Vector2D2.default(x, y);
    this.plantSize = plantSize;
    this.color = '#00FF00';
    this.gr = gr;
    this.size = 3;
    this.CHILDS = 0;
  }

  _createClass(Planta, [{
    key: 'display',
    value: function display() {
      _render2.default.circle(this.position.x, this.position.y, this.size, this.color);
    }
  }, {
    key: 'grow',
    value: function grow(plantas) {
      this.size += this.gr / 2;

      if (this.size > this.plantSize) {
        this.size = 3;
        if (plantas.length < 1000) {
          plantas.push(new Planta(this.position.x + (0, _Utils.randomSign)(this.size * 7), this.position.y + (0, _Utils.randomSign)(this.size * 7), this.gr, this.plantSize));
        }
      }

      if (this.size > 10 * (this.CHILDS + 1)) {
        if (plantas.length < 1000) {
          plantas.push(new Planta(this.position.x + (0, _Utils.randomSign)(this.size * 7), this.position.y + (0, _Utils.randomSign)(this.size * 7), this.gr, this.plantSize));
          this.CHILDS += 1;
        }
      }
    }
  }]);

  return Planta;
}();

exports.default = Planta;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Animal2 = __webpack_require__(5);

var _Animal3 = _interopRequireDefault(_Animal2);

var _Vector2D = __webpack_require__(0);

var _Vector2D2 = _interopRequireDefault(_Vector2D);

var _Color = __webpack_require__(6);

var _Color2 = _interopRequireDefault(_Color);

var _Utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
function normalRandom () {
  var pos = [Math.random(), Math.random()]
  while (Math.sin(pos[0] * Math.PI) > pos[1]) {
    pos = [ Math.random(), Math.random() ]
  }
  return pos[0]
}
*/
var Bunny = function (_Animal) {
  _inherits(Bunny, _Animal);

  function Bunny(x, y, population, gens) {
    _classCallCheck(this, Bunny);

    var _this = _possibleConstructorReturn(this, (Bunny.__proto__ || Object.getPrototypeOf(Bunny)).call(this, x, y));

    _this.hungry = 100;
    _this.population = population;
    _this.maxSize = 100;
    if (gens) {
      _this.gens = {
        VISGEN: gens.VISGEN + (0, _Utils.randomNumber)(2.5),
        VECGEN: gens.VECGEN + (0, _Utils.randomNumber)(0.25),
        REPGEN: gens.REPGEN + (0, _Utils.randomNumber)(0.25)
      };
    } else {
      _this.gens = {
        VISGEN: Math.random() + 10,
        VECGEN: Math.random(),
        REPGEN: Math.random()
      };
    }

    _this.color = new _Color2.default(_this.gens.VISGEN, _this.gens.VECGEN, _this.gens.REPGEN).rgb();
    _this.random = new _Vector2D2.default((0, _Utils.randomNumber)(500), (0, _Utils.randomNumber)(500));
    _this.random.add(_this.position);
    return _this;
  }

  _createClass(Bunny, [{
    key: 'haveChilds',
    value: function haveChilds() {
      var child = new Bunny(this.position.x + (0, _Utils.randomNumber)(this.size * 2), this.position.y + (0, _Utils.randomNumber)(this.size * 2), this.population, this.gens);
      this.population.push(child);
    }
  }, {
    key: 'die',
    value: function die() {
      this.population.splice(this.population.indexOf(this), 1);
    }
  }, {
    key: 'getOld',
    value: function getOld() {
      this.hungry -= this.gens.REPGEN * 0.1;
      this.size = this.hungry / 10;
      if (this.hungry <= 0) {
        this.die();
        return false;
      } else return true;
    }
  }, {
    key: 'moveRandom',
    value: function moveRandom() {
      if (_Vector2D2.default.sub(this.position, this.random).mag() < 10) {
        this.random = new _Vector2D2.default((0, _Utils.randomNumber)(1500), (0, _Utils.randomNumber)(1500));
      }
      this.position.moveTowards(this.random, this.gens.VECGEN * 3);
    }
  }, {
    key: 'findNearest',
    value: function findNearest(positions) {
      var _this2 = this;

      var relativo = positions.map(function (x) {
        return _Vector2D2.default.sub(x, _this2.position);
      });
      var distances = relativo.map(function (x) {
        return x.mag();
      });
      var distance = Math.min.apply(Math, _toConsumableArray(distances));

      var index = distances.indexOf(distance);
      var position = positions[index];

      return { distance: distance, position: position, index: index };
    }
  }, {
    key: 'think',
    value: function think(food, foodPos, predatorsPos) {
      if (this.getOld()) {
        var nearestFood = this.findNearest(foodPos);
        var nearestPredator = this.findNearest(predatorsPos);

        if (nearestPredator.distance < this.gens.VISGEN * 10) {
          this.position.moveTowards(nearestPredator.position, -this.gens.VECGEN * 3);
          this.random = new _Vector2D2.default((0, _Utils.randomNumber)(1500), (0, _Utils.randomNumber)(1500));
        } else if (nearestFood.distance < this.gens.VISGEN * 10) this.position.moveTowards(nearestFood.position, this.gens.VECGEN * 3);else this.moveRandom();

        if (nearestFood.distance < this.size * 2) {
          this.hungry += 5;
          food.splice(nearestFood.index, 1);
          if (this.size >= this.maxSize) {
            this.hungry = 100;
            this.haveChilds();
          }
          if (Math.random() < this.gens.REPGEN * 0.1) this.haveChilds();
        }
      }
    }
  }]);

  return Bunny;
}(_Animal3.default);

exports.default = Bunny;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector2D = __webpack_require__(0);

var _Vector2D2 = _interopRequireDefault(_Vector2D);

var _render = __webpack_require__(2);

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
  function Animal(x, y) {
    _classCallCheck(this, Animal);

    this.position = new _Vector2D2.default(x, y);
  }

  _createClass(Animal, [{
    key: 'display',
    value: function display() {
      if (this.size > 0) {
        if (!this.coyote) {
          _render2.default.circleText(this.position.x, this.position.y, this.size, this.color, this.hungry);
          // render.strokeCircle(this.position.x, this.position.y, this.gens.VISGEN * 10, this.color, 0.2)
        } else {
          _render2.default.rect(this.position.x, this.position.y, this.size, this.size, this.color);
          _render2.default.text(this.hungry.toFixed(2), this.position.x, this.position.y, '#fff', 'center');
        }
      }
    }
  }]);

  return Animal;
}();

exports.default = Animal;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Color = function () {
  function Color(r, g, b) {
    _classCallCheck(this, Color);

    this.r = Math.round(r * 255);
    if (this.r >= 255) this.r = 255;
    this.g = Math.round(g * 255);
    if (this.g >= 255) this.g = 255;
    this.b = Math.round(b * 255);
    if (this.b >= 255) this.b = 255;
  }

  _createClass(Color, [{
    key: "rgb",
    value: function rgb() {
      return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", 1)";
    }
  }]);

  return Color;
}();

exports.default = Color;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Animal2 = __webpack_require__(5);

var _Animal3 = _interopRequireDefault(_Animal2);

var _Vector2D = __webpack_require__(0);

var _Vector2D2 = _interopRequireDefault(_Vector2D);

var _Utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Coyote = function (_Animal) {
  _inherits(Coyote, _Animal);

  function Coyote(x, y, v) {
    _classCallCheck(this, Coyote);

    var _this = _possibleConstructorReturn(this, (Coyote.__proto__ || Object.getPrototypeOf(Coyote)).call(this, x, y));

    _this.hungry = 100;
    _this.color = '#ff0000';
    _this.coyote = true;
    _this.size = 10;
    _this.maxVelocity = Math.random() * 6;
    if (v) _this.maxVelocity = v + (0, _Utils.randomNumber)(Math.random() * 0.5);
    _this.random = new _Vector2D2.default((0, _Utils.randomNumber)(200), (0, _Utils.randomNumber)(200));
    _this.random.add(_this.position);
    return _this;
  }

  _createClass(Coyote, [{
    key: 'moveRandom',
    value: function moveRandom() {
      if (_Vector2D2.default.sub(this.position, this.random).mag() < 10) {
        this.random = new _Vector2D2.default((0, _Utils.randomNumber)(200), (0, _Utils.randomNumber)(200));
        this.random.add(this.position);
      }
      this.position.moveTowards(this.random, this.maxVelocity);
    }
  }, {
    key: 'findNearest',
    value: function findNearest(positions) {
      var _this2 = this;

      var relativo = positions.map(function (x) {
        return _Vector2D2.default.sub(x, _this2.position);
      });
      var distances = relativo.map(function (x) {
        return x.mag();
      });
      var distance = Math.min.apply(Math, _toConsumableArray(distances));

      var index = distances.indexOf(distance);
      var position = positions[index];

      return { distance: distance, position: position, index: index };
    }
  }, {
    key: 'haveChilds',
    value: function haveChilds(population) {
      population.push(new Coyote(this.position.x + (0, _Utils.randomNumber)(this.size * 2), this.position.y + (0, _Utils.randomNumber)(this.size * 2), this.maxVelocity));
    }
  }, {
    key: 'think',
    value: function think(comida, posiciones, poblacion) {
      this.hungry -= 0.3 * (100 / poblacion.length);
      var nearestFood = this.findNearest(posiciones);

      if (nearestFood.distance < this.size) {
        this.size += 5;
        this.hungry += 10;
        comida.splice(nearestFood.index, 1);
        if (this.size > 25) {
          this.size = 10;
          this.haveChilds(poblacion);
        }
      } else {
        if (this.hungry <= 0) poblacion.splice(poblacion.indexOf(this), 1);
        if (nearestFood.distance < 200) this.position.moveTowards(nearestFood.position, this.maxVelocity);else this.moveRandom();
      }
    }
  }]);

  return Coyote;
}(_Animal3.default);

exports.default = Coyote;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Bunny = __webpack_require__(4);

var _Bunny2 = _interopRequireDefault(_Bunny);

var _Plant = __webpack_require__(3);

var _Plant2 = _interopRequireDefault(_Plant);

var _Coyote = __webpack_require__(7);

var _Coyote2 = _interopRequireDefault(_Coyote);

var _events = __webpack_require__(9);

var _events2 = _interopRequireDefault(_events);

var _Render = __webpack_require__(10);

var _Render2 = _interopRequireDefault(_Render);

var _charts = __webpack_require__(11);

var _Utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plantas = [];
var coyotes = [];
var conejos = [];

for (var i = 0; i < 100; i++) {
  plantas.push(new _Plant2.default((0, _Utils.randomNumber)(window.innerWidth * 1), (0, _Utils.randomNumber)(window.innerHeight * 1), 0.24, 15));
  conejos.push(new _Bunny2.default((0, _Utils.randomNumber)(window.innerWidth * 1), (0, _Utils.randomNumber)(window.innerHeight * 1), conejos));
}
for (var _i = 0; _i < 25; _i++) {
  coyotes.push(new _Coyote2.default((0, _Utils.randomNumber)(window.innerWidth * 1), (0, _Utils.randomNumber)(window.innerHeight * 1)));
}

(0, _events2.default)(conejos, plantas, coyotes);
(0, _charts.start)(plantas, conejos, coyotes);

setInterval(function () {
  _Render2.default.clear('#111');

  var posicionesPlantas = plantas.map(function (x) {
    return x.position;
  });
  var posicionesCoyotes = coyotes.map(function (x) {
    return x.position;
  });
  var posicionesConejos = conejos.map(function (x) {
    return x.position;
  });

  if (conejos.length < 10) conejos.push(new _Bunny2.default((0, _Utils.randomNumber)(window.innerWidth), (0, _Utils.randomNumber)(window.innerHeight), conejos));
  if (plantas.length < 400) {
    for (; plantas.length < 400;) {
      plantas.push(new _Plant2.default((0, _Utils.randomNumber)(window.innerWidth * 1), (0, _Utils.randomNumber)(window.innerHeight * 1), 0.5, 15));
    }
  }

  plantas.forEach(function (x) {
    x.display();
    x.grow(plantas);
  });

  conejos.forEach(function (conejo) {
    conejo.think(plantas, posicionesPlantas, posicionesCoyotes);
    conejo.display();
  });

  coyotes.forEach(function (coyote) {
    coyote.think(conejos, posicionesConejos, coyotes);
    coyote.display();
  });
}, 0);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initEvents;

var _render = __webpack_require__(2);

var _render2 = _interopRequireDefault(_render);

var _Bunny = __webpack_require__(4);

var _Bunny2 = _interopRequireDefault(_Bunny);

var _Plant = __webpack_require__(3);

var _Plant2 = _interopRequireDefault(_Plant);

var _Coyote = __webpack_require__(7);

var _Coyote2 = _interopRequireDefault(_Coyote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mouse = {
  x: 0,
  y: 0
};

function initEvents(conejos, plantas, coyotes) {
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

  document.addEventListener('keydown', function (e) {
    if (e.key === 'g') {
      //  generate()
    }
    if (e.key === 'w') {
      last.w += 1;
      _render2.default.pos.y += 25 + last.w;
      _render2.default.context.translate(0, 25 + last.w);
    }
    if (e.key === 's') {
      last.s += 1;
      _render2.default.pos.y -= 25 + last.s;
      _render2.default.context.translate(0, -25 - last.s);
    }
    if (e.key === 'd') {
      last.d += 1;
      _render2.default.pos.x -= 25 + last.d;
      _render2.default.context.translate(-25 - last.d, 0);
    }
    if (e.key === 'a') {
      last.a += 1;
      _render2.default.pos.x += 25 + last.a;
      _render2.default.context.translate(25 + last.a, 0);
    }
    if (e.key === '+') {
      _render2.default.scale.scale += 0.1;
    }
    if (e.key === '-') {
      _render2.default.scale.scale -= 0.1;
    }
    if (e.key === 'r') {
      coyotes.push(new _Coyote2.default((mouse.x - _render2.default.pos.x) / _render2.default.scale.scale, (mouse.y - _render2.default.pos.y) / _render2.default.scale.scale));
    }
  });
  document.addEventListener('click', addPlant);
  document.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    conejos.push(new _Bunny2.default((e.clientX - _render2.default.pos.x) / _render2.default.scale.scale, (e.clientY - _render2.default.pos.y) / _render2.default.scale.scale, conejos));
  });

  function addPlant(e) {
    plantas.push(new _Plant2.default((e.clientX - _render2.default.pos.x) / _render2.default.scale.scale, (e.clientY - _render2.default.pos.y) / _render2.default.scale.scale, 0.05, 15));
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var canvasWindow = document.getElementById('lienzo');

var pos = { x: 0, y: 0 };

canvasWindow.width = window.innerWidth;
canvasWindow.height = window.innerHeight;

var context = canvasWindow.getContext('2d');
context.font = '10px Arial';
context.textAlign = 'center';

var scale = {
  scale: 1
};

function rect(x, y, w, h, color) {
  x = x * scale.scale;
  y = y * scale.scale;
  h = h * scale.scale;
  w = w * scale.scale;
  context.beginPath();
  context.fillStyle = color;
  context.rect(x, y, w, h);
  context.stroke();
  context.fill();
}

function text(texto, x, y, color) {
  x = x * scale.scale;
  y = y * scale.scale;
  context.fillStyle = color;
  context.fillText(texto, x, y);
}

function circleText(positionX, positionY, size, color, texto) {
  positionX = positionX * scale.scale;
  positionY = positionY * scale.scale;
  size = size * scale.scale;
  context.beginPath();
  context.fillStyle = color;
  context.arc(positionX, positionY, size, 0, 2 * Math.PI);
  context.lineWidth = 5;
  context.stroke();
  context.fill();
  if (texto) {
    context.fillStyle = '#ffffff';
    context.fillText(texto.toFixed(2), positionX, positionY - size);
  }
}

function circle(x, y, size, color) {
  x = x * scale.scale;
  y = y * scale.scale;
  size = size * scale.scale;
  context.beginPath();
  context.fillStyle = color;
  context.arc(x, y, size, 0, 2 * Math.PI);
  context.fill();
}

function strokeCircle(x, y, size, color, a) {
  /*
  if (a) {
    context.save()
    context.globalAlpha = a
  }
  */
  x = x * scale.scale;
  y = y * scale.scale;
  size = size * scale.scale;
  context.strokeStyle = color;
  context.beginPath();
  context.arc(x, y, size, 0, 2 * Math.PI);
  context.lineWidth = 5;
  context.stroke();
  context.strokeStyle = '#000';
  /*
  if (a) {
    context.restore()
    context.globalAlpha = 1
  }
  */
}

function clear() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#2F2F3F';

  context.fillStyle = color;
  context.save();
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.fillRect(0, 0, canvasWindow.width, canvasWindow.height);
  context.restore();
}

module.exports = { strokeCircle: strokeCircle, scale: scale, text: text, circleText: circleText, circle: circle, rect: rect, clear: clear, context: context, pos: pos };

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = undefined;

var _Plant = __webpack_require__(3);

var _Plant2 = _interopRequireDefault(_Plant);

var _Color = __webpack_require__(6);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var p = document.getElementById('plantas');
var cy = document.getElementById('coyotes');
var c = document.getElementById('conejos');
var count = 0;

function randomSign() {
  return Math.random() < 0.5 ? 1 : -1;
}

var data = {
  labels: [0],
  datasets: [{
    label: 'Poblacion Conejos',
    data: [0],
    borderColor: 'rgba(0, 0, 255, 0.5)'
  }, {
    label: 'Poblacion Coyotes',
    data: [0],
    borderColor: 'rgba(255, 0, 0, 0.5)'
  }, {
    label: 'Poblacion Plantas',
    data: [0],
    borderColor: 'rgba(0, 255, 0, 0.5)'
  }]
};

var data2 = {
  labels: [0],
  datasets: [{
    label: 'Genes verdes',
    data: [0],
    borderColor: 'rgba(0, 255, 0, 0.5)'
  }, {
    label: 'Genes rojos',
    data: [0],
    borderColor: 'rgba(255, 0, 0, 0.5)'

  }, {
    label: 'Genes azules',
    data: [0],
    borderColor: 'rgba(0, 0, 255, 0.5)'

  }]
};

var updateData = function updateData(oldData, newData) {
  var labels = oldData['labels'];
  var dataSetA = oldData['datasets'][0]['data'];
  var dataSetB = oldData['datasets'][1]['data'];
  var dataSetC = oldData['datasets'][2]['data'];

  // labels.shift()
  count++;

  labels.push(count.toString());

  dataSetA.push(newData.A);
  dataSetB.push(newData.B);
  dataSetC.push(newData.C);
  if (labels.length >= 100) {
    labels.shift();
    dataSetA.shift();
    dataSetB.shift();
    dataSetC.shift();
  }
};

var updateData2 = function updateData2(oldData, newData) {
  var labels = oldData['labels'];
  var dataSetA = oldData['datasets'][0]['data'];
  var dataSetB = oldData['datasets'][1]['data'];
  var dataSetC = oldData['datasets'][2]['data'];
  count++;

  labels.push(count.toString());
  dataSetA.push(newData.A);
  dataSetB.push(newData.B);
  dataSetC.push(newData.C);

  if (labels.length >= 300) {
    labels.shift();
    dataSetA.shift();
    dataSetB.shift();
    dataSetC.shift();
  }
};
var newData2 = void 0;

function start(plantas, conejos, coyotes) {
  setInterval(function () {
    p.innerText = 'Poblacion de plantas: ' + plantas.length;
    c.innerText = 'Poblacion de conejos: ' + conejos.length;
    cy.innerText = 'Poblacion de coyotes: ' + coyotes.length;

    var newData = {
      A: conejos.length,
      B: coyotes.length,
      C: plantas.length
    };
    newData2 = {
      A: conejos.reduce(function (valorAnterior, valorActual) {
        return valorAnterior + valorActual.gens.VISGEN;
      }, conejos[0].gens.VISGEN) / conejos.length / 10,
      B: conejos.reduce(function (valorAnterior, valorActual) {
        return valorAnterior + valorActual.gens.VECGEN;
      }, conejos[0].gens.VECGEN) / conejos.length,
      C: conejos.reduce(function (valorAnterior, valorActual) {
        return valorAnterior + valorActual.gens.REPGEN;
      }, conejos[0].gens.REPGEN) / conejos.length
    };

    var color = new _Color2.default(newData2.B, newData2.C, newData2.A);
    document.getElementById('color').style.backgroundColor = color.rgb();
    updateData(data, newData);

    updateData2(data2, newData2);

    window.myChart2.data.datasets = data2.datasets;
    window.myChart2.data.labels = data2.labels;
    window.myChart2.update();

    window.myChart.data.datasets = data.datasets;
    window.myChart.data.labels = data.labels;
    window.myChart.update();
  }, 2000);
}

function generateBunny(bunny, gens) {
  var genes = {
    VISGEN: gens.VISGEN + randomSign(Math.random() * 0.05),
    VECGEN: gens.VECGEN + randomSign(Math.random() * 0.05),
    REPGEN: gens.REPGEN + randomSign(Math.random() * 0.05)
  };
  bunny.push(randomSign() * Math.random() * 3 * window.innerWidth, randomSign() * Math.random() * 3 * window.innerHeight, bunny, genes);
}

exports.start = start;

/***/ })
/******/ ]);