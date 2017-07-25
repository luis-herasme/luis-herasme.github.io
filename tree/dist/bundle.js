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


function toDegrees(angle) {
  return angle * (180 / Math.PI);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Render = __webpack_require__(2);

var Render = _interopRequireWildcard(_Render);

var _Vector2D = __webpack_require__(0);

var _Vector2D2 = _interopRequireDefault(_Vector2D);

var _Body2 = __webpack_require__(3);

var _Body3 = _interopRequireDefault(_Body2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Branch = function (_Body) {
  _inherits(Branch, _Body);

  function Branch(x, y, color, h) {
    _classCallCheck(this, Branch);

    var _this = _possibleConstructorReturn(this, (Branch.__proto__ || Object.getPrototypeOf(Branch)).call(this, x, y));

    _this.color = color;
    _this.canGrow = true;
    _this.start = new _Vector2D2.default(x, y);
    _this.end = new _Vector2D2.default(0, -1);
    _this.Branches = [];
    _this.Leaves = [];
    _this.h = h;
    return _this;
  }

  _createClass(Branch, [{
    key: 'update',
    value: function update() {
      _get(Branch.prototype.__proto__ || Object.getPrototypeOf(Branch.prototype), 'update', this).call(this);
      if (this.canGrow) {
        this.end.mult(1.1);
        var sing = Math.random() > 0.5 ? 1 : -1;
        this.end.addPolarAngle(sing * (0.1 + this.h / 100));
        console.log('creciendo');
        if (this.h === 1) {
          if (this.end.mag() > 100) this.canGrow = false;
        } else {
          if (this.end.mag() > 100 / (this.h / 2)) this.canGrow = false;
        }
      } else {
        if (this.Branches.length < 3) {
          if (this.h < 4) {
            this.createBranch();
          } else {
            if (this.Leaves.length < 7) {
              this.createLeave();
            }
          }
        }
      }
      this.display();
    }
  }, {
    key: 'createLeave',
    value: function createLeave() {
      this.Leaves.push(new _Vector2D2.default(this.end.x + this.start.x + Math.random() * 25, this.end.y + this.start.y + Math.random() * 25));
    }
  }, {
    key: 'createBranch',
    value: function createBranch() {
      this.Branches.push(new Branch(this.end.x + this.start.x, this.end.y + this.start.y, '#9B7800', this.h + 1));
    }
  }, {
    key: 'display',
    value: function display() {
      Render.vectorLine(this.start, this.end, 15 - this.h * 3, this.color);
      this.Branches.forEach(function (x) {
        x.update();
      });
      this.Leaves.forEach(function (x) {
        Render.rect(x.x, x.y, 5, 5, '#00D416');
      });
      // Render.line(new Vector2D(Render.width / 2, Render.height / 2), this.end, 5, this.color)
    }
  }]);

  return Branch;
}(_Body3.default);

var arbol = new Branch(Render.width / 4, Render.height + Render.height / 5, '#9B7800', 1);
var arbol2 = new Branch(Render.width / 1.5, Render.height + Render.height / 5, '#9B7800', 1);

var a = [];
a.push(arbol);
a.push(arbol2);

document.addEventListener('mousedown', function (e) {
  a.push(new Branch(e.clientX, e.clientY, '#9B7800', 1));
});

function main() {
  Render.clear('#000');
  a.forEach(function (x) {
    x.update();
  });
  requestAnimationFrame(main);
}

main();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Vector2D = __webpack_require__(0);

var _Vector2D2 = _interopRequireDefault(_Vector2D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvasWindow = document.getElementById('lienzo');

canvasWindow.width = window.innerWidth;
canvasWindow.height = window.innerHeight;
var context = canvasWindow.getContext('2d');

var width = window.innerWidth;
var height = window.innerHeight;

var pos = { x: 0, y: 0
  /*
    if (typeof x === 'string') {
      x = (Number(x.slice(0, x.length - 1)) / 100) * width
      y = (Number(y.slice(0, y.length - 1)) / 100) * height
      positionX = (Number(positionX.slice(0, positionX.length - 1)) / 100) * width
      positionY = (Number(positionY.slice(0, positionY.length - 1)) / 100) * height
    }
    if (typeof x === 'string') {
      x = (Number(x.slice(0, x.length - 1)) / 100) * width
      y = (Number(y.slice(0, y.length - 1)) / 100) * height
      size = (Number(size.slice(0, size.length - 1)) / 100) * height
    }
  */

};function rect(x, y, positionX, positionY, color) {
  if (color) context.fillStyle = color;
  context.beginPath();
  context.rect(x, y, positionX, positionY);
  // context.strokeStyle = '#0C7400'
  // context.stroke()
  context.fill();
}

function circle(x, y, size, color) {
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
  context.font = 'italic bold 15pt Tahoma';
  if (polar) {
    context.save();
    context.translate(position.x, position.y);
    context.rotate(polar.polar().a);
  } else {
    context.fillText(texto, position.x, position.y - 25);
  }
  if (polar) context.restore();
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

module.exports = { circle: circle, vectorLine: vectorLine, rect: rect, clear: clear, context: context, text: text, pos: pos, width: width, height: height, line: line };

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(x, y) {
    _classCallCheck(this, _class);

    this.position = new _Vector2D2.default(x, y);
    this.velocity = new _Vector2D2.default(0, 0);
    this.aceleration = new _Vector2D2.default(0, 0);
  }

  _createClass(_class, [{
    key: 'update',
    value: function update() {
      this.position.add(this.velocity);
      this.velocity.add(this.aceleration);
      this.aceleration.zero();
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

/***/ })
/******/ ]);