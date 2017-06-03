/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "C:\\Users\\herasme\\Desktop\\gameTy/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var createWorld_1 = __webpack_require__(1);
	var preload_1 = __webpack_require__(5);
	var starter_1 = __webpack_require__(6);
	var StartGame = (function () {
	    function StartGame() {
	        var width = window.innerWidth;
	        var heigth = window.innerHeight;
	        this.game = new Phaser.Game(width, heigth, Phaser.CANVAS, 'content', { create: this.create, preload: this.preload, update: this.update, init: this.init });
	    }
	    StartGame.prototype.init = function () {
	        starter_1.starter.bind(this)();
	    };
	    StartGame.prototype.preload = function () {
	        preload_1.preload.bind(this)();
	    };
	    StartGame.prototype.create = function () {
	        var mundo = new createWorld_1.createWorld(this.game, 10, 10);
	        mundo.loadGrass();
	    };
	    StartGame.prototype.update = function () {
	    };
	    return StartGame;
	}());
	$(document).ready(function () {
	    //Disable full page
	    $("body").on("contextmenu", function (e) {
	        return false;
	    });
	});
	window.onload = function () {
	    var game = new StartGame();
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Grass_1 = __webpack_require__(2);
	var Water_1 = __webpack_require__(4);
	var createWorld = (function () {
	    function createWorld(game, width, height) {
	        game.kineticScrolling.start();
	        game.world.setBounds(-2000, 0, 5000, 5000);
	        game.world.rotation = 45;
	        this.game = game;
	        this.objectos = [];
	        this.width = width;
	        this.height = height;
	    }
	    createWorld.prototype.loadGrass = function () {
	        for (var posicionx = 0; posicionx < this.width; posicionx++) {
	            for (var posiciony = 0; posiciony < this.height; posiciony++) {
	                var x = posicionx * 200;
	                var y = posiciony * 200;
	                this.objectos.push(new Grass_1.Grass(this.game, x, y));
	            }
	        }
	    };
	    createWorld.prototype.loadWater = function () {
	        for (var posicionx = 0; posicionx < this.width; posicionx++) {
	            for (var posiciony = 0; posiciony < this.height; posiciony++) {
	                var x = 200 * posicionx;
	                var y = 200 * posiciony;
	                this.objectos.push(new Water_1.Water(this.game, x + 2200, y));
	            }
	        }
	    };
	    createWorld.prototype.loadSand = function () {
	        for (var position = 0; position < 10; position++) {
	            var sand = this.game.add.sprite(2000, position * 200, 'sand');
	            sand.scale.set(0.261);
	        }
	    };
	    return createWorld;
	}());
	exports.createWorld = createWorld;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var textStyles_1 = __webpack_require__(3);
	var Grass = (function () {
	    function Grass(game, posicionX, posicionY) {
	        this.tomado = false;
	        this.x = posicionX;
	        this.y = posicionY;
	        this.game = game;
	        this.numero = -1;
	        this.cuadradoCreado = false;
	        this.imagen = this.game.add.sprite(0, 0, 'grass');
	        if (Math.random() > 0.2) {
	            this.forest = this.game.add.sprite(0, 0, 'forest');
	            this.forest.x = this.x - 25;
	            this.forest.y = this.y + 125;
	            this.forest.rotation = -45;
	            this.forest.scale.set(0.13);
	        }
	        console.log(this.x, this.y);
	        this.imagen.x = this.x;
	        this.imagen.y = this.y;
	        this.imagen.inputEnabled = true;
	        this.imagen.events.onInputDown.add(this.clicked, this);
	        this.imagen.scale.set(0.4);
	        this.texto = this.game.add.text(this.x + 20, this.y + 20, this.numero, textStyles_1.style1);
	        this.texto.rotation = -45;
	        this.graphics = this.game.add.graphics(0, 0);
	        this.angulo = 0;
	        this.termino = true;
	    }
	    Grass.prototype.clicked = function () {
	        var _this = this;
	        if (this.termino) {
	            this.graphics2 = this.game.add.graphics(0, 0);
	            this.termino = false;
	            var carga_1 = setInterval(function () {
	                _this.loaderCircular();
	                if (_this.angulo >= 360) {
	                    _this.angulo = 0;
	                    clearInterval(carga_1);
	                    _this.termino = true;
	                }
	            }, 50);
	            //this.graphics2.destroy();
	            this.tomado = true;
	        }
	    };
	    Grass.prototype.loaderCircular = function () {
	        this.graphics2.lineStyle(0);
	        this.graphics2.beginFill(0xFFFFFF);
	        this.graphics2.arc(this.x + 100, this.y + 100, 50, this.game.math.degToRad(0), this.game.math.degToRad(360), false);
	        this.graphics2.endFill();
	        this.graphics2.lineStyle(20, 0x00000);
	        var arco = this.graphics2.arc(this.x + 100, this.y + 100, 40, 0, this.game.math.degToRad(this.angulo), false);
	        this.angulo += 10;
	        if (this.angulo >= 360) {
	            this.numero += 1;
	            if (this.numero == 1) {
	                if (!this.cuadradoCreado) {
	                    this.crearCuadro();
	                }
	                this.cuadradoCreado = true;
	            }
	            this.texto.destroy();
	            this.texto = this.game.add.text(this.x + 20, this.y + 20, this.numero, textStyles_1.style2);
	            this.texto.rotation = -45;
	            this.graphics2.destroy();
	        }
	    };
	    Grass.prototype.crearCuadro = function () {
	        this.graphics.beginFill(0x009EFF);
	        this.graphics.lineStyle(5, 0xffffff, 1);
	        this.graphics.drawRect(this.x, this.y, 193, 193);
	        this.graphics.alpha = 0.3;
	    };
	    return Grass;
	}());
	exports.Grass = Grass;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	var style1 = {
	    font: 'bold 25px Verdana',
	    fill: '#FFFFFF',
	    stroke: '#E74C3C',
	    strokeThickness: 5,
	    wordWrap: true,
	    wordWrapWidth: 440
	};
	exports.style1 = style1;
	var style2 = {
	    font: 'bold 25px Verdana',
	    fill: '#FFFFFF',
	    stroke: '#424949',
	    strokeThickness: 5,
	    wordWrap: true,
	    wordWrapWidth: 440
	};
	exports.style2 = style2;
	var style3 = {
	    fill: '#F7EDCA',
	    stroke: '#E74C3C',
	    strokeThickness: 5,
	    wordWrap: true,
	    wordWrapWidth: 440
	};
	exports.style3 = style3;
	/*
	    dropShadow: true,
	    dropShadowColor: '#000000',
	    dropShadowAngle: Math.PI / 6,
	    dropShadowDistance: 6,
	*/ 


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	var Water = (function () {
	    function Water(game, posicionX, posicionY) {
	        this.x = posicionX;
	        this.y = posicionY;
	        this.game = game;
	        this.numero = -1;
	        this.imagen = this.game.add.sprite(0, 0, 'water');
	        this.imagen.x = this.x;
	        this.imagen.y = this.y;
	        this.animacionAgua = this.imagen.animations.add('animacionAgua');
	        this.imagen.animations.play('animacionAgua', 10, true);
	        /*this.imagen.inputEnabled = true;
	        this.imagen.events.onInputDown.add(clicked, this);*/
	        this.imagen.scale.set(0.781);
	    }
	    return Water;
	}());
	exports.Water = Water;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	function preload() {
	    this.game.load.spritesheet('water', './assets/water.png', 256, 256, 32);
	    this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
	    var game = this.game;
	    this.game.scale.setResizeCallback(function () {
	        game.scale.setMaximum();
	    });
	    this.game.load.image('grass', './assets/grass.jpg');
	    this.game.load.image('sand', './assets/sand.jpg');
	    this.game.load.image('forest', './assets/forest.png');
	}
	exports.preload = preload;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	function starter() {
	    this.game.kineticScrolling = this.game.plugins.add(Phaser.Plugin.KineticScrolling);
	    this.game.kineticScrolling.configure({
	        kineticMovement: true,
	        timeConstantScroll: 325,
	        horizontalScroll: true,
	        verticalScroll: true,
	        horizontalWheel: false,
	        verticalWheel: false,
	        deltaWheel: 40
	    });
	}
	exports.starter = starter;


/***/ }
/******/ ]);