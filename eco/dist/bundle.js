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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var canvasWindow = document.getElementById('lienzo');

canvasWindow.width = window.innerWidth;
canvasWindow.height = window.innerHeight;

var context = canvasWindow.getContext('2d');
context.font = '12px Arial';

function rect(x, y, positionX, positionY) {
  context.beginPath();
  context.rect(x, y, positionX, positionY);
  context.stroke();
}

function circle(positionX, positionY, size, color, texto, position) {
  if (position.x < window.innerWidth && position.x > 0) {
    if (position.y < window.innerHeight && position.y > 0) {
      context.beginPath();
      context.fillStyle = color;
      context.arc(positionX, positionY, size, 0, 2 * Math.PI);
      // context.stroke()
      context.fill();
      if (texto) {
        context.fillStyle = '#ffffff';
        context.fillText(texto.toFixed(2), position.x - 15, position.y - 20);
      }
    }
  }
}

function clear() {
  context.fillStyle = '#000000';
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);
}

module.exports = { circle: circle, rect: rect, clear: clear };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Animal2 = __webpack_require__(3);

var _Animal3 = _interopRequireDefault(_Animal2);

var _Vector2D = __webpack_require__(0);

var _Vector2D2 = _interopRequireDefault(_Vector2D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bunny = function (_Animal) {
  _inherits(Bunny, _Animal);

  function Bunny(x, y) {
    _classCallCheck(this, Bunny);

    var _this = _possibleConstructorReturn(this, (Bunny.__proto__ || Object.getPrototypeOf(Bunny)).call(this, x, y));

    _this.color = '#cccccc';
    _this.hungry = 100;
    _this.lastSize = 0;
    _this.hijos = [];
    return _this;
  }

  _createClass(Bunny, [{
    key: 'think',
    value: function think(comida, posiciones, poblacion) {
      var _this2 = this;

      this.hungry -= this.hrate;
      var relativo = posiciones.map(function (x) {
        return _Vector2D2.default.sub(x, _this2.position);
      });
      var distances = relativo.map(function (x) {
        return x.mag();
      });
      var masCercano = Math.min.apply(Math, _toConsumableArray(distances));

      if (masCercano < this.size * 2) {
        this.size += this.frecuency;
        this.hungry += 10;
        this.velocity = new _Vector2D2.default(0, 0);
        comida.splice(distances.indexOf(masCercano), 1);
      }

      if (this.size > this.lastSize + 10) {
        poblacion.push(new Bunny(this.position.x + Math.random() * this.size * 4 * (Math.random() > 0.5 ? -1 : 1), this.position.y + Math.random() * this.size * 4 * (Math.random() > 0.5 ? -1 : 1)));
        this.lastSize = this.size;
      }

      if (this.size > this.maxSize) {
        poblacion.push(new Bunny(this.position.x + Math.random() * this.size * 4 * (Math.random() > 0.5 ? -1 : 1), this.position.y + Math.random() * this.size * 4 * (Math.random() > 0.5 ? -1 : 1)));
        poblacion.splice(poblacion.indexOf(this), 1);
      }

      if (this.hungry <= 0) {
        poblacion.splice(poblacion.indexOf(this), 1);
      }

      var indice = distances.indexOf(masCercano);
      if (indice !== -1) {
        var vector = _Vector2D2.default.normalize(relativo[indice]);
        vector.mult(0.1);
        this.aceleration = vector;
      }
    }
  }]);

  return Bunny;
}(_Animal3.default);

exports.default = Bunny;

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

var _render = __webpack_require__(1);

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
  function Animal(x, y) {
    _classCallCheck(this, Animal);

    this.color = '#ff00ff';
    // Vectors
    this.position = new _Vector2D2.default(x, y);
    this.velocity = new _Vector2D2.default(0, 0);
    this.aceleration = new _Vector2D2.default(0, 0);
  }

  _createClass(Animal, [{
    key: 'update',
    value: function update() {
      this.position.add(this.velocity);
      this.velocity.add(this.aceleration);

      if (this.velocity.mag() > 10) {
        this.velocity.limit(this.maxVelocity);
      }
      /*
          if (this.position.x > window.innerWidth) {
            this.velocity.x = window.innerWidth
            this.velocity.x = this.velocity.x * -1
          }
          if (this.position.x < 0) {
            this.position.x = 0
            this.velocity.x = this.velocity.x * -1
          }
          if (this.position.y > window.innerHeight) {
            this.velocity.y = window.innerHeight
            this.velocity.y = this.velocity.y * -1
          }
          if (this.position.y < 0) {
            this.position.y = 0
            this.velocity.y = this.velocity.y * -1
          }
      */
      this.aceleration.zero();
      this.display();
    }
  }, {
    key: 'display',
    value: function display() {
      _render2.default.circle(this.position.x, this.position.y, this.size, this.color, this.hungry, this.position);
    }
  }]);

  return Animal;
}();

exports.default = Animal;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Bunny = __webpack_require__(2);

var _Bunny2 = _interopRequireDefault(_Bunny);

var _Plant = __webpack_require__(5);

var _Plant2 = _interopRequireDefault(_Plant);

var _render = __webpack_require__(1);

var _render2 = _interopRequireDefault(_render);

var _Coyote = __webpack_require__(6);

var _Coyote2 = _interopRequireDefault(_Coyote);

var _Animal = __webpack_require__(3);

var _Animal2 = _interopRequireDefault(_Animal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function main() {
  var growRate = Number(document.getElementById('growRate').value);
  var plantSize = Number(document.getElementById('plantSize').value);

  var hrate = Number(document.getElementById('hrate').value);
  var rvelo = Number(document.getElementById('rvelo').value);
  var rfre = Number(document.getElementById('rfre').value);
  var rMaxSize = Number(document.getElementById('rMaxSize').value);
  var rISize = Number(document.getElementById('rISize').value);

  _Coyote2.default.prototype.maxVelocity = rvelo / 4;

  _Bunny2.default.prototype.maxVelocity = rvelo / 2;
  _Bunny2.default.prototype.frecuency = rfre;
  _Bunny2.default.prototype.hrate = hrate;

  _Animal2.default.prototype.size = rISize;
  _Animal2.default.prototype.maxSize = rMaxSize;

  document.body.removeChild(document.getElementById('config'));
  document.body.removeChild(document.getElementById('blo'));
  var plantas = [];

  for (var i = 0; i < 50; i++) {
    var planta = new _Plant2.default(Math.random() * window.innerWidth, Math.random() * window.innerHeight, growRate, plantSize);
    plantas.push(planta);
  }

  var conejos = [];
  conejos.push(new _Bunny2.default(window.innerWidth / 2, window.innerHeight / 2));
  conejos.push(new _Bunny2.default(window.innerWidth / 2 + 10, window.innerHeight / 2));
  var coyotes = [];
  coyotes.push(new _Coyote2.default(50, 50));

  var p = document.getElementById('plantas');
  var cy = document.getElementById('coyotes');
  var c = document.getElementById('conejos');
  setInterval(function () {
    p.innerText = 'Poblacion de plantas: ' + plantas.length;
    c.innerText = 'Poblacion de conejos: ' + conejos.length;
    cy.innerText = 'Poblacion de coyotes: ' + coyotes.length;
  }, 500);
  function a() {
    _render2.default.clear();

    plantas.forEach(function (e, index) {
      e.display(); // Should be display
      e.grow(plantas);
    });

    var pos = plantas.map(function (x) {
      return x.position;
    });
    conejos.forEach(function (conejo, index) {
      conejo.think(plantas, pos, conejos);
      conejo.update();
    });

    var pos2 = conejos.map(function (x) {
      return x.position;
    });

    coyotes.forEach(function (coyote, index) {
      coyote.think(conejos, pos2, coyotes);
      coyote.update();
    });

    requestAnimationFrame(a);
  }
  a();
  document.addEventListener('click', addPlant);
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    conejos.push(new _Bunny2.default(event.clientX, event.clientY));
  });
  function addPlant(e) {
    plantas.push(new _Plant2.default(e.clientX, e.clientY, growRate, plantSize));
  }
}
/*
let leftKey = 37, upKey = 38, rightKey = 39, downKey = 40
let keystate = []

document.addEventListener('keydown', function (e) {
  keystate[e.keyCode] = true
})

document.addEventListener('keyup', function (e) {
  delete keystate[e.keyCode]
})

if (keystate[leftKey]) {
//code to be executed when left arrow key is pushed.
}
if (keystate[upKey]) {
//code to be executed when up arrow key is pushed.
}
if (keystate[rightKey]) {
//code to be executed when right arrow key is pushed.
}
if (keystate[downKey]) {
//code to be executed when down arrow key is pushed.
}
*/
var h = document.getElementById('hecho');
h.addEventListener('click', main);

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

var _render = __webpack_require__(1);

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Planta = function () {
  function Planta(x, y, gr, plantSize) {
    _classCallCheck(this, Planta);

    this.position = new _Vector2D2.default(x, y);
    this.plantSize = plantSize;
    this.gr = gr;
    this.size = 3;
    this.color = '#00FF00';
    this.sons = 0;
  }

  _createClass(Planta, [{
    key: 'display',
    value: function display() {
      _render2.default.circle(this.position.x, this.position.y, this.size, this.color, this.hungry, this.position);
    }
  }, {
    key: 'grow',
    value: function grow(plantas) {
      this.size += this.gr;
      if (this.size > this.plantSize) {
        var indice = plantas.indexOf(this);
        plantas.splice(indice, 1);
      }

      if (this.size > 5 * (this.sons + 1)) {
        if (plantas.length < 500) {
          var simbolo1 = Math.random() > 0.5 ? -1 : 1;
          var simbolo2 = Math.random() > 0.5 ? -1 : 1;
          plantas.push(new Planta(this.position.x + Math.random() * this.size * 7 * simbolo1, this.position.y + Math.random() * this.size * 7 * simbolo2, this.gr, this.plantSize));
          this.sons += 1;
        }
      }
    }
  }]);

  return Planta;
}();

exports.default = Planta;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Bunny2 = __webpack_require__(2);

var _Bunny3 = _interopRequireDefault(_Bunny2);

var _Vector2D = __webpack_require__(0);

var _Vector2D2 = _interopRequireDefault(_Vector2D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Coyote = function (_Bunny) {
  _inherits(Coyote, _Bunny);

  function Coyote(x, y) {
    _classCallCheck(this, Coyote);

    var _this = _possibleConstructorReturn(this, (Coyote.__proto__ || Object.getPrototypeOf(Coyote)).call(this, x, y));

    _this.color = '#ff0000';
    _this.hungry = 100;
    _this.lastSize = _this.size;
    return _this;
  }

  _createClass(Coyote, [{
    key: 'think',
    value: function think(comida, posiciones, poblacion) {
      var _this2 = this;

      this.hungry -= 0.02;
      var relativo = posiciones.map(function (x) {
        return _Vector2D2.default.sub(x, _this2.position);
      });
      var distances = relativo.map(function (x) {
        return x.mag();
      });
      var masCercano = Math.min.apply(Math, _toConsumableArray(distances));

      if (masCercano < this.size * 2) {
        this.size += 4;
        this.hungry += 10;
        comida.splice(distances.indexOf(masCercano), 1);
      }

      if (this.size > this.lastSize + 10) {
        poblacion.push(new Coyote(this.position.x + Math.random() * this.size * 7 * (Math.random() > 0.5 ? -1 : 1), this.position.y + Math.random() * this.size * 7 * (Math.random() > 0.5 ? -1 : 1)));
        this.lastSize = this.size;
      }

      if (this.size > 25) {
        poblacion.push(new Coyote(this.position.x + Math.random() * this.size * 7 * (Math.random() > 0.5 ? -1 : 1), this.position.y + Math.random() * this.size * 7 * (Math.random() > 0.5 ? -1 : 1)));
        poblacion.splice(poblacion.indexOf(this), 1);
      }

      if (this.hungry <= 0) {
        poblacion.splice(poblacion.indexOf(this), 1);
      }

      var indice = distances.indexOf(masCercano);
      if (indice !== -1) {
        var vector = _Vector2D2.default.normalize(relativo[indice]);
        vector.mult(0.1);
        this.aceleration = vector;
      }
    }
  }]);

  return Coyote;
}(_Bunny3.default);

exports.default = Coyote;

/***/ })
/******/ ]);