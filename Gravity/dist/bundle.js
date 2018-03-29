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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

var _Numbers = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = function () {
  function Vector() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Vector);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector, [{
    key: 'add',
    value: function add(vector) {
      this.x += vector.x;
      this.y += vector.y;
    }
  }, {
    key: 'sub',
    value: function sub(vector) {
      this.x -= vector.x;
      this.y -= vector.y;
    }
  }, {
    key: 'mult',
    value: function mult(scalar) {
      this.x *= scalar;
      this.y *= scalar;
    }
  }, {
    key: 'div',
    value: function div(scalar) {
      this.x /= scalar;
      this.y /= scalar;
    }
  }, {
    key: 'zero',
    value: function zero() {
      this.x = 0;
      this.y = 0;
    }
  }, {
    key: 'inverse',
    value: function inverse() {
      this.x *= -1;
      this.y *= -1;
    }
  }, {
    key: 'copy',
    value: function copy() {
      return new Vector(this.x, this.y);
    }
  }, {
    key: 'mag',
    value: function mag() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
  }, {
    key: 'normalize',
    value: function normalize() {
      var m = this.mag();
      this.x /= m;
      this.y /= m;
    }
  }], [{
    key: 'inverse',
    value: function inverse(v) {
      return new Vector(-1 * v.x, -1 * v.y);
    }
  }, {
    key: 'mult',
    value: function mult(vec, scalar) {
      return new Vector(vec.x * scalar, vec.y * scalar);
    }
  }, {
    key: 'distance',
    value: function distance(v1, v2) {
      return this.sub(v1, v2).mag();
    }
  }, {
    key: 'normalize',
    value: function normalize(v) {
      var m = v.mag();
      return new Vector(v.x / m, v.y / m);
    }
  }, {
    key: 'random',
    value: function random(number) {
      return new Vector((0, _Numbers.getNumber)(number), (0, _Numbers.getNumber)(number));
    }
  }, {
    key: 'sub',
    value: function sub(v1, v2) {
      return new Vector(v1.x - v2.x, v1.y - v2.y);
    }
  }, {
    key: 'add',
    value: function add(v1, v2) {
      return new Vector(v1.x + v2.x, v1.y + v2.y);
    }
  }]);

  return Vector;
}();

exports.default = Vector;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function randomSign() {
  return Math.random() < 0.5 ? 1 : -1;
}

function getNumber(number) {
  return randomSign() * random(number);
}

function random(number) {
  return Math.random() * number;
}

exports.randomSign = randomSign;
exports.getNumber = getNumber;
exports.random = random;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var canvasWindow = document.getElementById('lienzo');
canvasWindow.width = window.innerWidth;
canvasWindow.height = window.innerHeight;
var context = canvasWindow.getContext('2d');

var PI2 = 2 * Math.PI;

function rect(x, y, w, h, color) {
  context.fillStyle = color;
  context.beginPath();
  context.rect(x, y, w, h);
  context.fill();
}

function circle(x, y, size) {
  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#ccc';

  context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, size, 0, PI2);
  context.fill();
}

function clear() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#000';

  context.fillStyle = color;
  context.fillRect(0, 0, canvasWindow.width, canvasWindow.height);
}

module.exports = { circle: circle, rect: rect, clear: clear, context: context };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectCollision = undefined;

var _Vector = __webpack_require__(0);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function detectCollision(particles) {
  for (var x = 0; x < particles.length; x++) {
    for (var y = 0; y < particles.length; y++) {
      if (x !== y) {
        particles[x].everyFrame(particles[y]); // IMPORTANT !!!!!!!!!!!
        var distance = _Vector2.default.sub(particles[x].position, particles[y].position);
        if (distance.mag() < particles[x].radius + particles[y].radius) {
          particles[x].onCollision(particles[y], distance, _Vector2.default.normalize(distance));
        }
      }
    }
  }
}

exports.detectCollision = detectCollision;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Vector = __webpack_require__(0);

var _Vector2 = _interopRequireDefault(_Vector);

var _Render = __webpack_require__(2);

var _Render2 = _interopRequireDefault(_Render);

var _getData = __webpack_require__(5);

var _getData2 = _interopRequireDefault(_getData);

var _CollisionHandler = __webpack_require__(6);

var _CollisionHandler2 = _interopRequireDefault(_CollisionHandler);

var _Body = __webpack_require__(8);

var _Body2 = _interopRequireDefault(_Body);

var _Numbers = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var collider = void 0;
var interval = void 0;
var bodies = [];
var control = {
  controled: new _Body2.default(100, new _Vector2.default(0, 0), 1),
  charge: false,
  radius: 100
};

document.getElementById('start').addEventListener('click', init);

document.addEventListener('keydown', function (e) {
  if (e.key.toLocaleLowerCase() === '+') control.radius += 3;
  if (e.key.toLocaleLowerCase() === '-') control.radius -= 3;
  if (e.key.toLocaleLowerCase() === 'p') control.charge = 'p';
  if (e.key.toLocaleLowerCase() === 'n') control.charge = 'n';
  if (e.key.toLocaleLowerCase() === 'x') control.charge = false;
});
/*
document.addEventListener('mousedown', (e) => {
  if (interval) {
    control.controled = new Body(control.radius, new Vector(e.clientX, e.clientY), 1)
    control.controled.charge = control.charge
    if (control.controled.charge === 'p') control.controled.color = '#F00'
    else if (control.controled.charge === 'n') control.controled.color = '#00F'
    else control.controled.color = '#FFF'
    control.controled.velocity.zero()
    collider.add(control.controled)
    bodies.push(control.controled)
  }
})

document.addEventListener('mouseup', (e) => {
  if (interval) {
    collider.remove(control.controled)
    bodies.splice(bodies.indexOf(control.controled), 1)
  }
})
*/

function init() {
  _Render2.default.clear();
  if (interval) clearInterval(interval);

  var data = (0, _getData2.default)();
  collider = new _CollisionHandler2.default();

  bodies = [];

  for (; bodies.length < data.bodies;) {
    var radius = data.average[0] + (0, _Numbers.random)(Math.abs(data.average[0] - data.average[1]));
    var position = new _Vector2.default((0, _Numbers.random)(window.innerWidth), (0, _Numbers.random)(window.innerHeight));
    var body = new _Body2.default(radius, position, data.restitution);

    body.E = data.electricity;
    body.G = data.gravity;

    if (Math.random() < 0.25) {
      body.charge = Math.random() < 0.5 ? 'n' : 'p';
      if (body.charge === 'p') body.color = '#F00';else body.color = '#00F';
    }

    collider.add(body);
    bodies.push(body);
  }

  interval = setInterval(function () {
    _Render2.default.clear('rgba(0,0,0,0.5)');
    bodies.forEach(function (body) {
      body.update();
      // body.everyFrame(bodies)
    });
    collider.update();
  });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getData() {
  var gravity = Number(document.getElementById('gravity').value);
  var electricity = Number(document.getElementById('electricity').value);
  var restitution = Number(document.getElementById('restitution').value);
  var numberOfBodies = Number(document.getElementById('bodies').value);
  var value1 = Number(document.getElementById('av1').value);
  var value2 = Number(document.getElementById('av2').value);

  return {
    gravity: gravity,
    electricity: electricity,
    restitution: restitution,
    average: [value1, value2],
    bodies: numberOfBodies
  };
}

exports.default = getData;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Collision = __webpack_require__(7);

var _Collision2 = _interopRequireDefault(_Collision);

var _Utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CollisionHandeler = function () {
  function CollisionHandeler() {
    _classCallCheck(this, CollisionHandeler);

    this.particles = [];
    this.resolution = [3, 3];
    this.helpers = [];

    this.maxPositionX = window.innerWidth;
    this.minPositionX = 0;
    this.maxPositionY = window.innerHeight;
    this.minPositionY = 0;

    for (var x = 0; x <= this.resolution[0]; x++) {
      this.helpers.push([]);
      for (var y = 0; y <= this.resolution[1]; y++) {
        this.helpers[x].push(new _Collision2.default(x, y));
      }
    }
  }

  _createClass(CollisionHandeler, [{
    key: 'add',
    value: function add(particle) {
      this.particles.push(particle);
      this.insideWorldBounds(particle);
    }
  }, {
    key: 'remove',
    value: function remove(particle) {
      this.particles.splice(this.particles.indexOf(particle), 1);
    }
  }, {
    key: 'organizeParticle',
    value: function organizeParticle(particle) {
      var positionX = Math.floor(particle.position.x / this.maxPositionX * this.resolution[0]);
      var positionY = Math.floor(particle.position.y / this.maxPositionY * this.resolution[1]);
      if (particle.collider) particle.collider.remove(particle);
      this.helpers[positionX][positionY].add(particle);
    }
  }, {
    key: 'organizeSharedParticles',
    value: function organizeSharedParticles(particle) {
      var BorderMaxX = Math.floor((particle.position.x + particle.size) / this.maxPositionX * this.resolution[0]);
      var BorderMinX = Math.floor((particle.position.x - particle.size) / this.maxPositionX * this.resolution[0]);

      var BorderMaxY = Math.floor((particle.position.y + particle.size) / this.maxPositionY * this.resolution[1]);
      var BorderMinY = Math.floor((particle.position.y - particle.size) / this.maxPositionY * this.resolution[1]);

      if (BorderMaxX !== particle.collider.x) {
        if (BorderMaxX < this.resolution[0]) {
          this.helpers[BorderMaxX][particle.collider.y].simpleAdd(particle);
        }
      }

      if (BorderMinX !== particle.collider.x) {
        if (BorderMinX > 0) {
          this.helpers[BorderMinX][particle.collider.y].simpleAdd(particle);
        }
      }

      if (BorderMaxY !== particle.collider.y) {
        if (BorderMaxY < this.resolution[1]) {
          this.helpers[particle.collider.x][BorderMaxY].simpleAdd(particle);
        }
      }

      if (BorderMinY !== particle.collider.y) {
        if (BorderMinY > 0) {
          this.helpers[particle.collider.x][BorderMinY].simpleAdd(particle);
        }
      }
    }
  }, {
    key: 'insideWorldBounds',
    value: function insideWorldBounds(particle) {
      if (particle.position.x /* + particle.size */ > this.maxPositionX) {
        particle.position.x = this.maxPositionX; // - particle.size
        particle.velocity.x *= -1;
      } else if (particle.position.x /* - particle.size */ < this.minPositionX) {
        particle.position.x = this.minPositionX; // + particle.size
        particle.velocity.x *= -1;
      }

      if (particle.position.y /* + particle.size */ > this.maxPositionY) {
        particle.position.y = this.maxPositionY; // - particle.size
        particle.velocity.y *= -1;
      } else if (particle.position.y /* - particle.size */ < this.minPositionY) {
        particle.position.y = this.minPositionY; // + particle.size
        particle.velocity.y *= -1;
      }
    }
    /*
      smartInsideWorldBounds (particle) {
        if (particle.border) {
          this.insideWorldBounds(particle)
        }
      }
    */

  }, {
    key: 'update',
    value: function update() {
      var _this = this;

      this.particles.forEach(function (particle) {
        _this.insideWorldBounds(particle);
        _this.organizeParticle(particle);
        // this.smartInsideWorldBounds(particle)
        _this.organizeSharedParticles(particle);
      });

      this.helpers.forEach(function (helperRow) {
        // this.borderCheck()
        helperRow.forEach(function (helper) {
          helper.check();
        });
      });
    }
  }, {
    key: 'localChecker',
    value: function localChecker(particles) {
      (0, _Utils.detectCollision)(particles);
    }
  }]);

  return CollisionHandeler;
}();

exports.default = CollisionHandeler;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(0);

var _Vector2 = _interopRequireDefault(_Vector);

var _Utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collision = function () {
  function Collision(x, y) {
    _classCallCheck(this, Collision);

    this.x = x;
    this.y = y;
    this.particles = [];
  }

  _createClass(Collision, [{
    key: 'add',
    value: function add(particle) {
      this.particles.push(particle);
      particle.collider = this;
    }
  }, {
    key: 'simpleAdd',
    value: function simpleAdd(particle) {
      this.particles.push(particle);
    }
  }, {
    key: 'remove',
    value: function remove(particle) {
      this.particles.splice(this.particles.indexOf(particle), 1);
    }
  }, {
    key: 'check',
    value: function check() {
      (0, _Utils.detectCollision)(this.particles);
    }
  }, {
    key: 'centerOfMass',
    value: function centerOfMass() {
      var position = this.particles.reduce(function (a, c) {
        return _Vector2.default.add(a.position, c.position);
      });
      position.div(this.particles.length);

      var mass = this.particles.reduce(function (a, c) {
        return a.mass + c.mass;
      });
      return { position: position, mass: mass };
    }
  }]);

  return Collision;
}();

exports.default = Collision;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Ball2 = __webpack_require__(9);

var _Ball3 = _interopRequireDefault(_Ball2);

var _Vector = __webpack_require__(0);

var _Vector2 = _interopRequireDefault(_Vector);

var _Render = __webpack_require__(2);

var _Render2 = _interopRequireDefault(_Render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function gravity(particle, G, direction, mass, squareDistance) {
  direction.mult(mass / squareDistance * G);
  particle.addForce(direction);
}

function electricity(particleX, particleY, E, mass, squareDistance, direction) {
  if (particleX.charge && particleY.charge) {
    direction.mult(mass / squareDistance * E);
    if (particleX.charge === particleY.charge) {
      particleX.addForce(direction);
    } else {
      particleY.addForce(direction);
    }
  }
}

var Cuerpo = function (_Ball) {
  _inherits(Cuerpo, _Ball);

  function Cuerpo() {
    _classCallCheck(this, Cuerpo);

    return _possibleConstructorReturn(this, (Cuerpo.__proto__ || Object.getPrototypeOf(Cuerpo)).apply(this, arguments));
  }

  _createClass(Cuerpo, [{
    key: 'update',
    value: function update() {
      _Render2.default.circle(this.position.x, this.position.y, this.radius, this.color);
      _get(Cuerpo.prototype.__proto__ || Object.getPrototypeOf(Cuerpo.prototype), 'update', this).call(this);
    }
  }, {
    key: 'everyFrame',
    value: function everyFrame(other) {
      var distance = _Vector2.default.sub(this.position, other.position);
      var direction = _Vector2.default.normalize(distance);
      var squareDistance = Math.pow(distance.mag(), 2);
      var mass = this.mass * other.mass;
      // direction = Vector.normalize(distance)
      // electricity(this, other, this.E, mass, squareDistance, direction)
      // direction = Vector.normalize(distance)
      gravity(other, this.G, direction, mass, squareDistance);
    }
  }]);

  return Cuerpo;
}(_Ball3.default);

exports.default = Cuerpo;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(0);

var _Vector2 = _interopRequireDefault(_Vector);

var _Body2 = __webpack_require__(10);

var _Body3 = _interopRequireDefault(_Body2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ball = function (_Body) {
  _inherits(Ball, _Body);

  function Ball(radius, position, restitution) {
    _classCallCheck(this, Ball);

    var _this = _possibleConstructorReturn(this, (Ball.__proto__ || Object.getPrototypeOf(Ball)).call(this, position, restitution));

    _this.radius = radius;
    _this.mass = Math.PI * Math.pow(_this.radius, 2);
    return _this;
  }

  _createClass(Ball, [{
    key: 'onCollision',
    value: function onCollision(other, distance, direction) {
      if (!direction.mag()) {
        direction = _Vector2.default.random(0.5);
      }
      direction.mult(this.radius + other.radius);
      if (distance.mag()) {
        direction.sub(distance);
      }
      direction.div(2);
      this.position.add(direction);
      other.position.sub(direction);
      this.inelasticCollision(other);
    }
  }]);

  return Ball;
}(_Body3.default);

exports.default = Ball;

/***/ }),
/* 10 */
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

var Body = function () {
  function Body(position, restitution) {
    _classCallCheck(this, Body);

    this.position = position;
    this.velocity = new _Vector2.default(0, 0);
    this.acceleration = new _Vector2.default(0, 0);
    this.restitution = restitution;
  }

  _createClass(Body, [{
    key: 'addForce',
    value: function addForce(force) {
      force.div(this.mass);
      this.acceleration.add(force);
    }
  }, {
    key: 'momentum',
    value: function momentum() {
      return _Vector2.default.mult(this.velocity, this.mass);
    }
  }, {
    key: 'inelasticCollision',
    value: function inelasticCollision(other) {
      var velocity1 = this.velocity;
      var velocity2 = other.velocity;
      var totalMomentum = _Vector2.default.add(other.momentum(), this.momentum());
      var totalMass = this.mass + other.mass;

      this.velocity = _Vector2.default.sub(velocity2, velocity1);
      this.velocity.mult(this.restitution * other.mass);
      this.velocity.add(totalMomentum);
      this.velocity.div(totalMass);

      other.velocity = _Vector2.default.sub(velocity1, velocity2);
      other.velocity.mult(other.restitution * this.mass);
      other.velocity.add(totalMomentum);
      other.velocity.div(totalMass);
    }
  }, {
    key: 'update',
    value: function update() {
      this.position.add(this.velocity);
      this.velocity.add(this.acceleration);
      this.acceleration.zero();
    }
  }]);

  return Body;
}();

exports.default = Body;

/***/ })
/******/ ]);