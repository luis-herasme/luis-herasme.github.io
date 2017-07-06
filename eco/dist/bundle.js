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

var pos = {
  x: 0,
  y: 0
};

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
  //if (position.x < window.innerWidth - x && position.x > 0 - x) {
  //  if (position.y < window.innerHeight - y && position.y > 0 - y) {
  context.beginPath();
  context.fillStyle = color;
  context.arc(positionX, positionY, size, 0, 2 * Math.PI);
  context.lineWidth = 5;
  context.stroke();
  context.fill();
  if (texto) {
    context.fillStyle = '#ffffff';
    context.fillText(texto.toFixed(2), position.x - 15, position.y - 20);
  }
  //  }
  //}
}

function clear() {
  context.fillStyle = '#2F2F3F';
  //console.log(-pos.y)
  context.save();
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.fillRect(0, 0, canvasWindow.width, canvasWindow.height);
  context.restore();
}

module.exports = { circle: circle, rect: rect, clear: clear, context: context, pos: pos };

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

  function Bunny(x, y, genes) {
    _classCallCheck(this, Bunny);

    var _this = _possibleConstructorReturn(this, (Bunny.__proto__ || Object.getPrototypeOf(Bunny)).call(this, x, y));

    _this.color = '#cccccc';
    _this.hungry = 100;
    _this.lastSize = 0;
    _this.hijos = [];
    _this.maxVelocity = Math.random();

    if (genes) {
      genes.c = (genes.c * 19 + Math.random()) / 20;
      genes.v = (genes.v * 19 + Math.random()) / 20;
      genes.hr = (genes.hr * 19 + Math.random()) / 20;

      _this.maxVelocity = genes.v;
      _this.color = 'rgb(' + Math.round(genes.hr * 255) + ',' + Math.round(genes.c * 255) + ',' + Math.round(genes.v * 255) + ')';
      _this.genes = genes;
    } else {
      _this.camuflage = Math.random();
      _this.genes = {
        c: _this.camuflage,
        v: _this.maxVelocity,
        hr: _this.hrate
      };
    }
    return _this;
  }

  _createClass(Bunny, [{
    key: 'think',
    value: function think(comida, posiciones, poblacion, evitar) {
      var _this2 = this;

      this.hungry -= this.genes.hr / 6;

      var relativo = posiciones.map(function (x) {
        return _Vector2D2.default.sub(x, _this2.position);
      });
      var distances = relativo.map(function (x) {
        return x.mag();
      });
      var masCercano = Math.min.apply(Math, _toConsumableArray(distances));

      var relativoC = evitar.map(function (x) {
        return _Vector2D2.default.sub(x, _this2.position);
      });
      var distancesC = relativoC.map(function (x) {
        return x.mag();
      });
      var masCercanoC = Math.min.apply(Math, _toConsumableArray(distancesC));
      var indicex = distancesC.indexOf(masCercanoC);

      if (indicex !== -1) {
        if (masCercanoC < 100) {
          var vector2 = _Vector2D2.default.normalize(relativoC[indicex]);
          vector2.mult(-0.3);
          this.addForce(vector2);
        } else {
          var indice = distances.indexOf(masCercano);
          if (indice !== -1) {
            var vector = _Vector2D2.default.normalize(relativo[indice]);
            vector.mult(0.1);
            this.addForce(vector);
          }
        }
        if (masCercano < this.size * 2) {
          this.size += this.genes.hr * 2.5;
          this.hungry += 10;
          comida.splice(distances.indexOf(masCercano), 1);
        }

        if (this.size > this.lastSize + 10) {
          poblacion.push(new Bunny(this.position.x + Math.random() * this.size * 4 * (Math.random() > 0.5 ? -1 : 1), this.position.y + Math.random() * this.size * 4 * (Math.random() > 0.5 ? -1 : 1), this.genes));
          this.lastSize = this.size;
        }

        if (this.size > this.maxSize) {
          poblacion.push(new Bunny(this.position.x + Math.random() * this.size * 4 * (Math.random() > 0.5 ? -1 : 1), this.position.y + Math.random() * this.size * 4 * (Math.random() > 0.5 ? -1 : 1), this.genes));
          poblacion.splice(poblacion.indexOf(this), 1);
        }

        if (this.hungry <= 0) {
          poblacion.splice(poblacion.indexOf(this), 1);
        }
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
      this.aceleration.mult(this.time);
      this.velocity.add(this.aceleration);

      if (this.velocity.mag() > this.maxVelocity) {
        this.velocity.limit(this.maxVelocity * 10);
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
    key: 'addForce',
    value: function addForce(force) {
      this.aceleration.add(force);
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

var _Vector2D = __webpack_require__(0);

var _Vector2D2 = _interopRequireDefault(_Vector2D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function main() {
  var growRate = Number(document.getElementById('growRate').value);
  var plantSize = Number(document.getElementById('plantSize').value);

  var hrate = Number(document.getElementById('hrate').value);
  var rvelo = Number(document.getElementById('rvelo').value);
  var rfre = Number(document.getElementById('rfre').value);
  var rMaxSize = Number(document.getElementById('rMaxSize').value);
  var rISize = Number(document.getElementById('rISize').value);

  //  Coyote.prototype.maxVelocity = rvelo / 4

  //  Bunny.prototype.maxVelocity = rvelo / 2
  _Bunny2.default.prototype.frecuency = rfre;
  _Bunny2.default.prototype.hrate = hrate;

  _Animal2.default.prototype.size = rISize;
  _Animal2.default.prototype.maxSize = rMaxSize;

  document.body.removeChild(document.getElementById('config'));
  document.body.removeChild(document.getElementById('blo'));
  var plantas = [];
  function generate() {
    for (var i = 0; i < 50; i++) {
      var planta = new _Plant2.default(Math.random() * 2.5 * window.innerWidth, Math.random() * 2.5 * window.innerHeight, growRate, plantSize);
      plantas.push(planta);
    }
  }

  generate();
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

  var conejos = [];
  for (var i = 0; i < 50; i++) {
    conejos.push(new _Bunny2.default(window.innerWidth * Math.random(), window.innerHeight * Math.random()));
  }

  var coyotes = [];
  coyotes.push(new _Coyote2.default(50, 50));

  document.addEventListener('keydown', function (e) {
    if (e.key === 'g') {
      generate();
    }
    if (e.key === 'w') {
      last.w += 1;
      _render2.default.pos.y += 5 + last.w;
      _render2.default.context.translate(0, 5 + last.w);
    }
    if (e.key === 's') {
      last.s += 1;
      _render2.default.pos.y -= 5 + last.s;
      _render2.default.context.translate(0, -5 - last.s);
    }
    if (e.key === 'd') {
      last.d += 1;
      _render2.default.pos.x -= 5 + last.d;
      _render2.default.context.translate(-5 - last.d, 0);
    }
    if (e.key === 'a') {
      last.a += 1;
      _render2.default.pos.x += 5 + last.a;
      _render2.default.context.translate(5 + last.a, 0);
    }
    if (e.key === 'r') {
      coyotes.push(new _Coyote2.default(50, 50));
    }
  });

  var p = document.getElementById('plantas');
  var cy = document.getElementById('coyotes');
  var c = document.getElementById('conejos');
  var count = 0;

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

    // labels.shift()
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
        return valorAnterior + valorActual.genes.c;
      }, conejos[0].genes.c) / conejos.length,
      B: conejos.reduce(function (valorAnterior, valorActual) {
        return valorAnterior + valorActual.genes.v;
      }, conejos[0].genes.v) / conejos.length,
      C: conejos.reduce(function (valorAnterior, valorActual) {
        return valorAnterior + valorActual.genes.hr;
      }, conejos[0].genes.hr) / conejos.length
    };
    if (plantas.length < 150) {
      generate();
      generate();
      generate();
    }

    updateData(data, newData);

    updateData2(data2, newData2);

    window.myChart2.data.datasets = data2.datasets;
    window.myChart2.data.labels = data2.labels;
    window.myChart2.update();

    window.myChart.data.datasets = data.datasets;
    window.myChart.data.labels = data.labels;
    window.myChart.update();
  }, 750);
  function linaje() {
    var genes = {
      c: newData2.A,
      v: newData2.B,
      hr: newData2.C
    };
    for (var x = 0; x < 50; x++) {
      conejos.push(new _Bunny2.default(window.innerWidth * 3 * Math.random, window.innerHeight * 3 * Math.random, genes));
    }
  }
  function addFox() {
    //for (var x = 0; x < 50; x++) {
    coyotes.push(new _Coyote2.default(window.innerWidth * 3 * Math.random, window.innerHeight * 3 * Math.random));
    //}
  }

  var deltaTime = Date.now();
  function a() {
    var t = Date.now();
    _Animal2.default.prototype.time = t - deltaTime;

    deltaTime = t;
    _render2.default.clear();

    plantas.forEach(function (e, index) {
      e.display(); // Should be display
      if (index % 2 === 0) {
        e.grow(plantas);
      }
    });

    var posicionesPlantas = plantas.map(function (x) {
      return x.position;
    });
    var posicionesConejosCoyotes = coyotes.map(function (x) {
      return x.position;
    });
    var posicionesConejosconejos = conejos.map(function (x) {
      return x.position;
    });

    posicionesConejosconejos.forEach(function (v, i) {
      _Vector2D2.default.sub(v, posicionesPlantas);
    });

    var si = Math.random() > _Animal2.default.prototype.time / 100 ? 1 : 0;
    conejos.forEach(function (conejo, index) {
      conejo.think(plantas, posicionesPlantas, conejos, posicionesConejosCoyotes);
      conejo.update();
    });

    var pos2 = conejos.map(function (x) {
      return x.position;
    });

    coyotes.forEach(function (coyote, index) {
      if (!si) {
        coyote.think(conejos, pos2, coyotes);
      }
      coyote.update();
    });
    requestAnimationFrame(a);
  }
  a();
  document.addEventListener('click', addPlant);
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    console.log(newData2);
    var genes = {
      c: newData2.A,
      v: newData2.B,
      hr: newData2.C
    };
    for (var x = 0; x < 25; x++) {
      conejos.push(new _Bunny2.default(event.clientX - _render2.default.pos.x, event.clientY - _render2.default.pos.y, genes));
    }
  });
  function addPlant(e) {
    console.log('Click', _render2.default.pos.y);
    console.log('Click', e.clientY);
    console.log('Click', e.clientY - _render2.default.pos.y);

    plantas.push(new _Plant2.default(e.clientX - _render2.default.pos.x, e.clientY - _render2.default.pos.y, growRate, plantSize));
  }
}
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
    _this.maxVelocity = 0.75;
    return _this;
  }

  _createClass(Coyote, [{
    key: 'think',
    value: function think(comida, posiciones, poblacion) {
      var _this2 = this;

      this.hungry -= 0.2;

      var relativo = posiciones.map(function (x) {
        return _Vector2D2.default.sub(x, _this2.position);
      });
      var distances = relativo.map(function (x) {
        return x.mag();
      });
      var masCercano = Math.min.apply(Math, _toConsumableArray(distances));

      if (masCercano < this.size * 2) {
        var conejo = comida[distances.indexOf(masCercano)];
        if (conejo) {
          if (conejo.genes.c > Math.random()) {
            this.size += 4;
            this.hungry += 10;
            this.velocity = new _Vector2D2.default(0, 0);
            comida.splice(distances.indexOf(masCercano), 1);
          }
        }
      }

      if (this.size > this.lastSize + 10) {
        poblacion.push(new Coyote(this.position.x + Math.random() * this.size * 2 * (Math.random() > 0.5 ? -1 : 1), this.position.y + Math.random() * this.size * 2 * (Math.random() > 0.5 ? -1 : 1)));
        this.lastSize = this.size;
      }

      if (this.size > 25) {
        poblacion.push(new Coyote(this.position.x + Math.random() * this.size * 2 * (Math.random() > 0.5 ? -1 : 1), this.position.y + Math.random() * this.size * 2 * (Math.random() > 0.5 ? -1 : 1)));
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