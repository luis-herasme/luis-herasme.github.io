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

var Vector3 = function () {
  function Vector3(x, y, z) {
    _classCallCheck(this, Vector3);

    this.x = x;
    this.y = y;
    this.z = z;
  }

  _createClass(Vector3, [{
    key: "add",
    value: function add(vector) {
      this.x += vector.x;
      this.y += vector.y;
      this.z += vector.z;
    }
  }, {
    key: "sub",
    value: function sub(vector) {
      this.x -= vector.x;
      this.y -= vector.y;
      this.z -= vector.z;
    }
  }, {
    key: "mult",
    value: function mult(scalar) {
      this.x = this.x * scalar;
      this.y = this.y * scalar;
      this.z = this.z * scalar;
    }
  }, {
    key: "zero",
    value: function zero() {
      this.x = 0;
      this.y = 0;
      this.z = 0;
    }
  }, {
    key: "inverse",
    value: function inverse() {
      this.x = -1 * this.x;
      this.y = -1 * this.y;
      this.z = -1 * this.z;
    }
  }, {
    key: "copy",
    value: function copy() {
      return new Vector3(this.x, this.y, this.z);
    }
  }, {
    key: "limit",
    value: function limit(scalar) {
      var vr = new Vector3(0, 0, 0);
      if (this.mag() > scalar) {
        vr = Vector3.normalize(this);
        vr.mult(scalar);
        this.x = vr.x;
        this.y = vr.y;
        this.z = vr.z;
      }
    }
  }, {
    key: "mag",
    value: function mag() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    }
  }], [{
    key: "inverse",
    value: function inverse(v) {
      return new Vector3(-1 * v.x, -1 * v.y, -1 * v.z);
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
      var vr = new Vector3(0, 0, 0);
      vr.x = v.x / m;
      vr.y = v.y / m;
      vr.z = v.z / m;
      return vr;
    }
  }, {
    key: "sub",
    value: function sub(v1, v2) {
      var v3 = new Vector3(0, 0, 0);
      v3.x = v1.x - v2.x;
      v3.y = v1.y - v2.y;
      v3.z = v1.z - v2.z;
      return v3;
    }
  }]);

  return Vector3;
}();

exports.default = Vector3;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Vector = __webpack_require__(0);

var _Vector2 = _interopRequireDefault(_Vector);

var _Body2 = __webpack_require__(2);

var _Body3 = _interopRequireDefault(_Body2);

var _Physics = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var canvas = document.getElementById('lienzo');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var engine = new BABYLON.Engine(canvas, true);

var py = new _Physics.Collision();

var Ball3 = function (_Body) {
  _inherits(Ball3, _Body);

  function Ball3(x, y, z, size, scene) {
    _classCallCheck(this, Ball3);

    var _this = _possibleConstructorReturn(this, (Ball3.__proto__ || Object.getPrototypeOf(Ball3)).call(this, x, z, y));

    _this.size = size;
    _this.mass = 4 / 3 * Math.PI * Math.pow(_this.size, 3);
    _this.materialSphere1 = new BABYLON.StandardMaterial('texture1', scene);
    _this.materialSphere1.diffuseColor = new BABYLON.Color3(7.0, 0, 0);

    _this.sphere = BABYLON.Mesh.CreateSphere(Math.random() * 1000, 1, _this.size, scene);
    _this.sphere.material = _this.materialSphere1;
    _this.sphere.isPickable = true;
    _this.sphere.actionManager = new BABYLON.ActionManager(scene);
    // this.sphere.material.emissiveColor = BABYLON.Color3.Blue()

    // ON MOUSE ENTER
    _this.sphere.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function (ev) {
      _this.sphere.material.emissiveColor = BABYLON.Color3.Blue();
    }));

    // ON MOUSE EXIT
    _this.sphere.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function (ev) {
      _this.sphere.material.emissiveColor = BABYLON.Color3.Black();
    }));
    var s = 2;
    _this.sphere.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger, function (ev) {
      _this.addForce(new _Vector2.default(Math.random() * s, Math.random() * s, Math.random() * s));
    }));
    return _this;
  }

  _createClass(Ball3, [{
    key: 'update',
    value: function update() {
      _get(Ball3.prototype.__proto__ || Object.getPrototypeOf(Ball3.prototype), 'update', this).call(this);
      this.materialSphere1.diffuseColor = new BABYLON.Color3(this.velocity.mag() * 5, 0, 2 - this.velocity.mag());
      this.sphere.position = this.position;
    }
  }]);

  return Ball3;
}(_Body3.default);

var sphere = [];
function rs() {
  return Math.random() > 0.5 ? 1 : -1;
}

var createScene = function createScene() {
  var scene = new BABYLON.Scene(engine);
  var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(200, 200, -250), scene);
  camera.setTarget(BABYLON.Vector3.Zero());
  camera.attachControl(canvas, true);
  var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
  var light2 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, -1, 0), scene);
  light.intensity = 0.7;
  light2.intensity = 0.7;
  var n = 600;
  var r = 10;
  for (var i = 0; i < n - 100; i++) {
    sphere.push(new Ball3(rs() * Math.random() * (n / r), rs() * Math.random() * (n / r), rs() * Math.random() * (n / r), 1, scene));
    py.add(sphere[sphere.length - 1]);
  }

  var sep = 100;

  for (var _i = 0; _i < n + 200; _i++) {
    sphere.push(new Ball3(rs() * Math.random() * (n / r) + sep, rs() * Math.random() * (n / r), rs() * Math.random() * (n / r) + sep, 1, scene));
    py.add(sphere[sphere.length - 1]);
  }

  scene.clearColor = new BABYLON.Color3(0, 0, 0);
  return scene;
};

var scene = createScene();

engine.runRenderLoop(function () {
  sphere.forEach(function (x) {
    return x.update();
  });
  py.check();
  scene.render();
});

window.addEventListener('resize', function () {
  engine.resize();
});

/***/ }),
/* 2 */
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
  function _class(x, y, z) {
    _classCallCheck(this, _class);

    this.position = new _Vector2.default(x, y, z);
    this.velocity = new _Vector2.default(0, 0, 0);
    this.aceleration = new _Vector2.default(0, 0, 0);
  }

  _createClass(_class, [{
    key: 'update',
    value: function update() {
      this.position.add(this.velocity);
      this.velocity.add(this.aceleration);
      this.aceleration.zero();
    }
  }, {
    key: 'addForce',
    value: function addForce(force) {
      force.mult(1 / this.mass);
      this.aceleration.add(force);
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Collision = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(0);

var _Vector2 = _interopRequireDefault(_Vector);

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
          if (choque.mag() > (this.particles[i].size + this.particles[x].size) * 2) {
            let gravity = (6 * this.particles[i].mass * this.particles[x].mass) / (Math.pow(choque.mag(), 2))
            let force = Vector3.normalize(choque)
            force.mult(gravity * 0.01)
            this.particles[x].addForce(force)
          }
          */
          var force = choque.copy();
          if (choque.mag() > (this.particles[i].size + this.particles[x].size) * 2) {
            force.mult(0.01 / Math.pow(choque.mag(), 2));
            this.particles[x].addForce(force);
          } else if (choque.mag() !== 0) {
            force.mult(-0.01 / Math.pow(choque.mag(), 2));
            this.particles[x].addForce(force);
          }

          if (choque.mag() !== 0) {
            if (choque.mag() < this.particles[i].size + this.particles[x].size) {
              var uni = _Vector2.default.normalize(choque);
              uni.mult(0.5);
              uni.mult(this.particles[i].velocity.mag() * disi);
              this.particles[i].addForce(_Vector2.default.inverse(this.particles[i].velocity));
              this.particles[i].addForce(uni);
              this.particles[x].addForce(_Vector2.default.inverse(uni));
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