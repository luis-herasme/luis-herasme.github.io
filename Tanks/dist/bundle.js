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
/***/ (function(module, exports) {


/**
 * This function adds all the given vectors,
 * this function can take multiple vectors and add them
 * @param {Array} vector This is an array of components of a vector
 * @example
 * // returns [20, 20]
 * add([5, 15], [15, 5])
  * @example
 * // returns [20, 20]
 * add([5, 5], [10, 10], [5, 5])
 */
function add () {
  const vectors = Array.from(arguments)
  return vectors.reduce(function (current, future) {
    future.forEach(function (value, index) {
      if (current[index]) {
        current[index] += value
      } else {
        current[index] = value
      }
    })
    return current
  }, [])
}

/**
 * This function subtracts all the given vectors
 * @param {Array} Vector takes multiple vectors and subtracts them
 */
function sub () {
  const vectors = Array.from(arguments)
  return vectors.reduce(function (current, future) {
    future.forEach(function (value, index) {
      if (current[index]) {
        current[index] -= value
      } else {
        current[index] = value
      }
    })
    return current
  }, [])
}

/**
 * This function multiplies the vector given by the scalar give
 * @param {Array} vector This is an array of components of a vector
 * @param {Number} scalar This is a number
 */
function mult (vector, scalar) {
  return vector.map((x) => x * scalar)
}

/**
 * This function returns the inverse of the vector
 * @param {array} vector This is an array of components of a vector
 */
function inverse (vector) {
  return vector.map((x) => x * -1)
}

/**
 * This function normalise the vector
 * @param {array} vector This is an array of components of a vector
 */
function normalize (vector) {
  let r = mag(vector)
  if (isNaN(r) || r === 0) r = 1
  return vector.map((x) => x / r)
}

/**
 * Returns the magnitude of the distance between the two vectors given
 * @param {array} vector1 This is an array of components of a vector
 * @param {array} vector2 This is an array of components of a vector
 */
function distance (vector1, vector2) {
  return mag(sub(vector1, vector2))
}

/**
 * Returns a copy of the given vector
 * @param {array} vector This is an array of components of a vector
 */
function copy (vector) {
  return vector.slice()
}

/**
 * Limits the magnitud of the given vector
 * @param {array} vector This is an array of components of a vector
 * @param {array} scalar This is the maximun length of the vector
 */
function limit (vector, scalar) {
  if (mag(vector) > scalar) return setMag(vector, scalar)
  return vector
}

/**
 * This function returns the dot product of the two vectors given
 * @param {array} vector1 This is an array of components of a vector
 * @param {array} vector2 This is an array of components of a vector
 */
function dot (vector1, vector2) {
  let ret = 0
  for (let i = 0; i < vector1.length; i++) {
    ret += vector1[i] * vector2[i]
  }
  return ret
}

/**
 * This functions returns the margnitud of the given vector
 * @param {array} vector This is an array of components of a vector
 */
function mag (vector) {
  return Math.sqrt(dot(vector, vector))
}

/**
 * Moves the first vector given to the second vector given
 * with the given speed and wont move if the magnitude of the distance is
 * smaller than the stop parameter.
 * @param {array} start This is an array of components of a vector
 * @param {array} end This is an array of components of a vector
 * @param {number} speed This is the speed in wich the first vector will move towards the second
 * @param {number} stop This is the distance in wich the start vector will not move to the end vector
 */
function moveTowards (start, end, speed = 1, stop = 1) {
  let distance = sub(end, start)
  if (mag(distance) > stop) {
    distance = normalize(distance)
    distance = mult(distance, speed)
    return add(start, distance)
  }
  return start
}

/**
 * Returns the angle between 2 vectors
 * @param {array} vector1 This is an array of components of a vector
 * @param {array} vector2 This is an array of components of a vector
 */
function angleBetween (vector1, vector2) {
  return Math.acos((dot(vector1, vector2)) / (mag(vector1) * mag(vector2)))
}

/**
 * Sets the magnitud of the vector to the length of the scalar given
 * @param {array} vector This is an array of components of a vector
 * @param {number} scalar This will be the length of the vector
 */
function setMag (vector, scalar) {
  return mult(normalize(vector), scalar)
}

/**
 * Converts a number from radian to degree
 * @param {number} radian This number represents the radian that you want to convert
 */
function toDegree (radian) {
  return radian * (180 / Math.PI)
}

/**
 * Converts a number from degree to radian
 * @param {number} degree This number represents the degree that you want to convert
 */
function toRadian (degree) {
  return degree * (Math.PI / 180)
}

/**
 * Returns the cross product of 2 vectors with 3 components
 * @param {array} vector1 This is an array of components of a vector
 * @param {array} vector2 This is an array of components of a vector
 */
function cross3d (vec1, vec2) {
  let vecR = []
  vecR[0] = (vec1[1] * vec2[2]) - (vec1[2] * vec2[1])
  vecR[1] = (vec1[2] * vec2[0]) - (vec1[0] * vec2[2])
  vecR[2] = (vec1[0] * vec2[1]) - (vec1[1] * vec2[0])
  return vecR
}

/**
 * Returns the cross product of 2 vectors with 2 components
 * @param {array} vector1 This is an array of components of a vector
 * @param {array} vector2 This is an array of components of a vector
 */
function cross2d (vector1, vector2) {
  return vector1[0] * vector2[1] - vector1[1] * vector2[0]
}

/**
 * Returns the angle of the vector
 * @param {array} vector This is an array of components of a vector
 */
function angle (vector) {
  var result = Math.atan2(vector[1], vector[0])
  return result
}

/**
 * Creates a vector from a magnitud and a direction
 * @param {number} direction This is the direction of the vector that will be created
 * @param {number} magnitud This is the magnitud of the vector that will be created
 */
function angleMagnitude (direction, magnitud) {
  if (magnitud < 0) return inverse(setAngle([0, magnitud], direction))
  return setAngle([0, magnitud], direction)
}

/**
 * Sets the angle of the given vector to the given angle
 * @param {array} vector This is the vector that will be changed
 * @param {number} angle This will be the angle of the given vector in radians
 */
function linearIntersect (a, b, c, d) {
  let r = sub(b, a)
  let s = sub(d, c)
  let d1 = cross2d(r, s)
  let u = cross2d(sub(c, a), r) / d1
  let t = cross2d(sub(c, a), s) / d1
  if (!((u < 1 && u > 0) && (t < 1 && t > 0))) {
    u = 1
    t = 1
  }
  return [u, t]
}

/**
 * Adds the angle of the given vector to the given angle
 * @param {array} vector This is the vector that will be changed
 * @param {number} angle This will be the angle that will be added to the given vector in radians
 * @param {array} piv This is the center of rotation
 */
function addAngle (vec, ang, piv = [0, 0]) {
  let s = Math.sin(ang)
  let c = Math.cos(ang)
  let vecR = sub(vec, piv)
  let xnew = vecR[0] * c - vecR[1] * s
  let ynew = vecR[0] * s + vecR[1] * c
  vecR = add([xnew, ynew], piv)
  return vecR
}

/**
 * Sets the angle of the given vector to the given angle
 * @param {array} vector This is the vector that will be changed
 * @param {number} angle This will be the angle of the given vector in radians
 */
function setAngle (vec, ang) {
  let r = mag(vec)
  return [r * Math.cos(ang), r * Math.sin(ang)]
}

/**
 * Takes as a parameter a list of vectors and returns the center point or the average of the vector
 * @param {array} vectorList This is the vector list
 */
function average (vectorList) {
  let vec = vectorList.reduce((a, c) => add(a, c), [0, 0])
  return mult(vec, 1 / vectorList.length)
}

module.exports = {
  add,
  average,
  sub,
  mult,
  mag,
  dot,
  inverse,
  cross3d,
  cross2d,
  linearIntersect,
  angleMagnitude,
  normalize,
  setMag,
  angle,
  addAngle,
  distance,
  copy,
  moveTowards,
  limit,
  angleBetween,
  toDegree,
  toRadian,
  setAngle
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


const Body = __webpack_require__(8)
const Engine = __webpack_require__(10)

module.exports = { Body, Engine }


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


const fisica = __webpack_require__(1)

const engine = new fisica.Engine()
engine.setBounds([0, window.innerWidth, 0, window.innerHeight])

function Winner () {
  this.players = 3
  this.update = () => {
    console.log(this.players)
    if (this.players === 1) {
      Object.values(this.inmute).forEach((gO) => {
        if (gO) {
          if (gO.vida > 0) {
            alert(gO.name + 'GANOO')
            gO.victorias++
          }
        }
        setTimeout(() => this.reviveAll(), 1000)
      })
    }
  }
  this.reviveAll = () => {
    Object.values(this.inmute).forEach((gO) => {
      if (gO.vida <= 0) gO.toRevive()
    })
  }
  return this
}

const win = new Winner()

module.exports = { engine, win }


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


const vec = __webpack_require__(0)

function Vector (value) {
  this.value = Array.from(arguments)

  this.add = function (vector) {
    this.value = vec.add(this.value, vector.value)
  }

  this.sub = function (vector) {
    this.value = vec.sub(this.value, vector.value)
  }

  this.mult = function (scalar) {
    this.value = vec.mult(this.value, scalar)
  }

  this.inverse = function () {
    this.value = vec.inverse(this.value)
  }

  this.mag = function () {
    return vec.mag(this.value)
  }

  this.dot = function (vector) {
    return vec.dot(this.value, vector.value)
  }

  this.normalize = function () {
    this.value = vec.normalize(this.value)
  }

  this.distance = function (vector) {
    return vec.distance(vector.value, this.value)
  }

  this.angle = function () {
    return vec.angle(this.value)
  }

  this.copy = function () {
    return new Vector(vec.copy(this.value))
  }

  this.setMag = function (magnitud) {
    this.value = vec.setMag(this.value, magnitud)
  }

  this.addAngle = function (ang, piv) {
    this.value = vec.addAngle(this.value, ang, piv)
  }

  this.limit = function (scalar) {
    this.value = vec.limit(this.value, scalar)
  }

  this.moveTowards = function (vector, speed, stop) {
    this.value = vec.moveTowards(this.value, vector, speed, stop)
  }

  this.angleBetween = function (vector) {
    return vec.angleBetween(this.value, vector)
  }

  this.setAngle = function (ang) {
    this.value = vec.setAngle(this.value, ang)
  }
}

module.exports = Vector


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


/* global PIXI, Moon, requestAnimationFrame */

const Player = __webpack_require__(5)
const Package = __webpack_require__(11)
const { engine, win } = __webpack_require__(2)

document.getElementById('play').addEventListener('click', startGame)

function startGame () {
  let nombres = [document.getElementById('play1').value,
    document.getElementById('play2').value,
    document.getElementById('play3').value]
  document.body.removeChild(document.getElementById('main'))
  document.getElementById('ui').style.visibility = 'visible'

  const render = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight)
  document.body.appendChild(render.view)
  let stage = new PIXI.Container()

  let gameObjects = {}
  let srcs = ['green1', 'red1', 'blue1']
  PIXI.loader
    .add('assets/green1.png')
    .add('assets/red1.png')
    .add('assets/blue1.png')
    .add('assets/ball.png')
    .add('assets/ground.png')
    .add('assets/Bubble.png')
    .load(setup)

  const UI = new Moon({
    el: '#ui',
    data: {
      players: []
    }
  })

  let players = []
  let inmute = {}
  function setup () {
    let texture = PIXI.TextureCache['assets/ground.png']
    let sprite = new PIXI.Sprite(texture)
    sprite.scale.set(1.175, 1)
    stage.addChild(sprite)
    srcs.forEach((src, index) => {
      let ctrl
      if (index === 0) ctrl = new Control('e', 'd', 'f', 's', 'q')
      else if (index === 1) ctrl = new Control('arrowup', 'arrowdown', 'arrowright', 'arrowleft', 'm')
      else if (index === 2) ctrl = 'MOUSE'
      const GO = new Player(nombres[index], src, ctrl, stage, UI, gameObjects, index)
      gameObjects[src] = GO
      inmute[src] = GO
      players.push(gameObjects[src])
      stage.addChild(gameObjects[src])
    })
    UI.set('players', players)
    win.gameObjects = gameObjects
    win.inmute = inmute
  }
  setInterval(() => {
    const alive = Object.values(gameObjects).filter((GO) => {
      return GO
    })
    UI.set('players', alive)
  }, 100)

  function Control (up, down, right, left, attack) {
    this.up = up.toLowerCase()
    this.down = down.toLowerCase()
    this.right = right.toLowerCase()
    this.left = left.toLowerCase()
    this.attack = attack.toLowerCase()
    return this
  }

  let keys = {}

  setInterval(() => {
    Object.keys(keys).some((key) => {
      if (keys[key]) {
        Object.keys(gameObjects).forEach((gO) => {
          if (gameObjects[gO]) {
            if (gameObjects[gO].keypress) gameObjects[gO].keypress(keys)
          }
        })
        return true
      }
    })
  }, 20)

  document.addEventListener('keydown', function (event) {
    keys[event.key.toLowerCase()] = true
    Object.keys(gameObjects).forEach((gO) => {
      if (gameObjects[gO]) {
        if (gameObjects[gO].keydown) gameObjects[gO].keydown(event.key.toLowerCase())
      }
    })
  })

  document.addEventListener('keyup', function (event) {
    keys[event.key.toLowerCase()] = false
  })

  /*
  let updatableObjects
  setTimeout(() => {
    updatableObjects = engine.bodies.filter((body, ind) => {
      return body.parent.update
    })

    setInterval(() => {
      updatableObjects.forEach((obj) => obj.parent.update())
    })
  }, 1000)
  */

  setInterval(() => {
    stage.addChild(new Package(stage))
  }, 5000)

  function update () {
    engine.update()
    engine.bodies.forEach((body) => {
      if (body.parent.update) body.parent.update()
    })
    render.render(stage)
    requestAnimationFrame(update)
  }
  update()
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* global PIXI */

const vector = __webpack_require__(0)
const { FireBall, Cold, Normal } = __webpack_require__(6)
const { engine, win } = __webpack_require__(2)
const fisica = __webpack_require__(1)

function mouseMovement () {
  const movement = vector.sub([this.position.x, this.position.y], [mouse.x, mouse.y])
  if (vector.mag(movement) > 10) {
    this.translate(this.velocity, 0)
    this.rotation = vector.angle(movement) + Math.PI / 2
  }
  if (mouse.click) {
    this.attack()
    mouse.click = false
  }
}

var textStyle = new PIXI.TextStyle({
  fontFamily: 'Arial',
  fontSize: 24,
  fontWeight: 'bold',
  fill: '#ffffff',
  stroke: '#000000',
  strokeThickness: 5
})

class Player extends PIXI.Container {
  constructor (name, src, controls, stage, ui, players, idx) {
    super()
    this.ui = ui
    this.players = players
    this.idx = idx

    this.velocity = 2

    this.name = name
    this.stage = stage
    this.controls = controls
    this.bullets = 100
    this.type = 'PLAYER'

    this.intervalID = null

    this.intervalManager = function (flag, animate, time) {
      if (flag) {
        this.intervalID = setInterval(animate, time)
      } else {
        clearInterval(this.intervalID)
      }
    }

    // Sprite
    let texture = PIXI.TextureCache['assets/' + src + '.png']
    this.sprite = new PIXI.Sprite(texture)
    this.scale.set(0.4)
    // this.sprite.scale.set(0.25)
    this.sprite.anchor.set(0.5)

    this.position.x = Math.random() * window.innerWidth
    this.position.y = Math.random() * window.innerHeight

    // Text
    this.text = new PIXI.Text(name, textStyle)
    this.text.anchor.set(0.5)
    this.text.y = -40

    // HEALTH
    this.vida = 100

    this.victorias = 0

    this.gVida = new PIXI.Graphics()
    this.gVida.beginFill(0x000000)
    this.gVida.drawRect(-40, -20, 80, 10)
    this.gVida.beginFill(0x00ff00)
    this.gVida.drawRect(-40, -20, 80 * (this.vida / 100), 10)

    // ADD ALL TO RENDER
    this.addChild(this.sprite)
    this.addChild(this.text)
    this.addChild(this.gVida)

    // ENGINE
    this.body = new fisica.Body('Circle', {
      radius: 20,
      position: [this.position.x, this.position.y],
      collision: function (self, other) {
        if (other.parent.name === 'Bullet') {
          if (!self.parent.escudo) {
            other.parent.destroy()
            self.parent.vida -= other.parent.damage
            self.parent.vidaRender()
            if (self.parent.vida <= 0) {
              self.parent.destroy()
            }
          }
          if (other.parent.name !== self.parent.lName) {
            self.parent.lName = other.parent.name
            other.velocity.inverse()
          } else {
            self.parent.lName = undefined
          }
        }
      }
    })

    this.canShoot = true
    this.lName = undefined
    this.body.parent = this
    engine.add(this.body)
    this.src = src

    if (this.controls === 'MOUSE') this.intervalManager(true, mouseMovement.bind(this), 20)
  }

  destroy () {
    engine.destroy(this.body)
    this.stage.removeChild(this)
    this.players[this.src] = undefined
    if (this.controls === 'MOUSE') this.intervalManager(false)
    win.players -= 1
    win.update()
  }

  vidaRender () {
    this.gVida.clear()
    this.gVida.beginFill(0x000000)
    this.gVida.drawRect(-40, -20, 80, 10)
    this.gVida.beginFill(0x00ff00)
    this.gVida.drawRect(-40, -20, 80 * (this.vida / 100), 10)
  }

  toRevive () {
    engine.add(this.body)
    this.stage.addChild(this)
    this.players[this.src] = this
    this.vida = 100
    this.bullets = 100
    this.vidaRender()
    if (this.controls === 'MOUSE') this.intervalManager(true, mouseMovement.bind(this), 20)
    this.position.x = Math.random() * window.innerWidth
    this.position.y = Math.random() * window.innerHeight
    win.players += 1
    win.update()
  }

  update () {
    this.body.center[0] = this.position.x
    this.body.center[1] = this.position.y
  }

  attack () {
    if (this.canShoot) {
      if (this.bullets > 0) {
        /*
        let bullet
        if (this.name === 'LUIS') {
          bullet = new FireBall(this)
        } else if (this.name === 'OTRO') {
          bullet = new Cold(this)
        } else {
          bullet = new Normal(this)
        }
        */
        let bullet = new Normal(this)
        this.stage.addChild(bullet)
        this.bullets --
        this.canShoot = false
        setTimeout(() => {
          this.canShoot = true
        }, bullet.frequency)
      }
    }
  }

  translate (x, y) {
    let translationY = vector.angleMagnitude(this.rotation, y)
    let translationX = vector.angleMagnitude(this.rotation + Math.PI / 2, x)
    let translation = vector.add(translationY, translationX)
    let position = vector.add([this.position.x, this.position.y], translation)
    this.position.x = position[0]
    this.position.y = position[1]
  }

  keypress (keys) {
    if (this.controls !== 'MOUSE') {
      if (keys[this.controls.up]) {
        this.translate(this.velocity, 0)
      }
      if (keys[this.controls.down]) {
        this.translate(-this.velocity, 0)
      }
      if (keys[this.controls.left]) {
        this.rotation -= 0.025
      }
      if (keys[this.controls.right]) {
        this.rotation += 0.025
      }
    }
  }

  keydown (key) {
    if (key === this.controls.attack) this.attack()
    if (key === 'v') {
      let texture = PIXI.TextureCache['assets/Bubble.png']
      let sprite = new PIXI.Sprite(texture)
      sprite.anchor.set(0.5)
      sprite.scale.set(0.5)
      this.escudo = true
      this.addChild(sprite)
    }
  }
}

let mouse = {
  click: false,
  x: 0,
  y: 0
}

document.addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

document.addEventListener('mousedown', (event) => {
  mouse.click = true
})

module.exports = Player


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


const Ball = __webpack_require__(7)

/**
 * duration
 * size
 * border color
 * color
 * velocity
 * frequency
 * damage
 */

class FireBall extends Ball {
  constructor (parent) {
    super(parent, 8000, 15, 0x000000, 0xFF3333, 5, 50, 10)
  }
}

class Normal extends Ball {
  constructor (parent) {
    super(parent, 10000, 5, 0x000000, 0x333333, 4, 50, 20)
  }
}

class Cold extends Ball {
  constructor (parent) {
    super(parent, 10000, 25, 0x000000, 0x3333FF, 0.5, 10, 15)
  }
}

module.exports = {
  FireBall,
  Normal,
  Cold
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


/* global PIXI */

const vector = __webpack_require__(0)
const Vector = __webpack_require__(3)
const fisica = __webpack_require__(1)
const { engine } = __webpack_require__(2)

class Ball extends PIXI.Graphics {
  constructor (parent, time, size, border, fill, velocity, frequency, damage) {
    super()
    this.player = parent
    this.damage = damage
    this.name = 'Bullet'
    this.type = 'Bullet'

    this.frequency = frequency
    this.lineStyle(2, border, 1)
    this.beginFill(fill)
    this.drawCircle(0, 0, size)
    this.endFill()

    // START
    this.x = parent.position.x
    this.y = parent.position.y

    this.body = new fisica.Body('Circle', {
      radius: size,
      restitution: 1,
      collision: desktroyOtherBall,
      position: vector.add([parent.position.x, parent.position.y], vector.angleMagnitude(parent.rotation + Math.PI / 2, 40))
    })
    this.body.addForce(new Vector(...vector.angleMagnitude(parent.rotation + Math.PI / 2, velocity)))

    this.body.parent = this
    engine.add(this.body)
    this.timeout = setTimeout(() => this.destroy(), time)
  }

  destroy () {
    if (this.timeout) {
      clearTimeout(this.timeout)
      engine.destroy(this.body)
      this.parent.removeChild(this)
      this.timeout = false
    }
  }

  update () {
    this.position.x = this.body.center[0]
    this.position.y = this.body.center[1]
  }
}

function desktroyOtherBall (self, other) {
  if (other.parent.type === 'Bullet') {
    if (other.parent.player.name !== self.parent.player.name) other.parent.destroy()
  }
}

module.exports = Ball


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


const Vector = __webpack_require__(3)
const vec = __webpack_require__(0)
const Figure = __webpack_require__(9)

function Body (type, config) {
  this.mass = config.mass ? config.mass : 1
  this.friction = config.friction ? config.friction: 1 
  this.restitution = config.restitution ? config.restitution : 0.9
  this.aceleration = config.aceleration ? new Vector(...config.aceleration) : new Vector(0, 0)
  this.velocity = config.velocity ? new Vector(...config.velocity) : new Vector(0, 0)
  this.collision = config.collision
  this.name = config.name
  this.type = type

  if (type !== 'Circle') {
    this.update = () => {
      this.velocity.add(this.aceleration)
      this.vertices.translate(this.velocity)

      this.velocity.mult(this.friction)

      this.center = this.vertices.center()
      this.aceleration.mult(0)
      this.far = this.vertices.far(this.center)
    }
  } else {
    this.update = () => {
      this.velocity.add(this.aceleration)
      this.center = vec.add(this.center, this.velocity.value)

      this.velocity.mult(this.friction)

      this.aceleration.mult(0)
    }
  }

  this.addForce = (force) => {
    force.mult(1 / this.mass)
    this.aceleration.add(force)
  }

  if (type === 'Circle') {
    this.center = config.position
    this.far = config.radius
  } else {
    this.vertices = new Figure()
    if (type === 'Mesh') {
      config.vertices.forEach((vertex) => this.vertices.add(vertex))
    } else if (type === 'Box') {
      const pointY = vec.add(config.position, [0, config.side])
      const pointX = vec.add(config.position, [config.side, 0])
      const pointXY = vec.add(config.position, [config.side, config.side])

      this.vertices.add(config.position)
      this.vertices.add(pointX)
      this.vertices.add(pointXY)
      this.vertices.add(pointY)
    } else if (type === 'Rect') {
      const pointY = vec.add(config.position, [0, config.height])
      const pointX = vec.add(config.position, [config.width, 0])
      const pointXY = vec.add(config.position, [config.width, config.height])

      this.vertices.add(config.position)
      this.vertices.add(pointX)
      this.vertices.add(pointXY)
      this.vertices.add(pointY)
    }
    this.center = this.vertices.center()
    this.far = this.vertices.far(this.center)
  }

  return this
}

module.exports = Body


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


const vector = __webpack_require__(0)

function Figure () {
  this.points = []
  this.rotation = 0

  this.add = (point) => {
    this.points.push(point)
  }

  this.translate = (vec) => {
    this.points = this.points.map((x) => vector.add(x, vec))
  }

  this.rotate = (rotation) => {
    this.points = this.points.map((x) => vector.setAngle(x, this.rotation + rotation))
  }

  this.scale = (vec) => {
    this.points = this.points.map((x) => vector.mult(x, vec))
  }

  this.center = () => vector.average(this.points)

  this.far = (center) => {
    return vector.mag(this.points.reduce((a, c) => {
      if (vector.distance(a, center) > vector.distance(c, center)) return a
      else return c
    }))
  }

  return this
}

module.exports = Figure


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


const vector = __webpack_require__(0)

function meshIntersect (mesh, mesh2) {
  mesh.vertices.points.forEach((vertex, index) => {
    mesh2.vertices.points.forEach((vertex2, index2) => {
      let end

      if (index !== mesh.vertices.points.length - 1) {
        end = mesh.vertices.points[index + 1]
      } else end = mesh.vertices.points[0]

      let end2
      if (index2 !== mesh2.vertices.points.length - 1) {
        end2 = mesh2.vertices.points[index2 + 1]
      } else end2 = mesh2.vertices.points[0]

      const i = vector.linearIntersect(vertex, end, vertex2, end2)
      if (i[0] !== 1 && i[1] !== 1) {
        collision(mesh, mesh2)
      }
    })
  })
}

function circleIntersect (circle, _circle) {
  if (vector.distance(circle.center, _circle.center) < circle.far + _circle.far) {
    collision(circle, _circle)
  }
}

function meshCircleIntersect (mesh, circle) {
  mesh.vertices.points.forEach((vertex) => {
    if (vector.distance(vertex, circle.center) < circle.far) collision(mesh, circle)
  })
}

function collision (body, _body) {
  if (body.collision) body.collision(body, _body)
  if (_body.collision) _body.collision(_body, body)
}

let idCounter = 0

function Engine () {
  this.bodies = []

  this.add = (body) => {
    body.id = idCounter++
    this.bodies.push(body)
  }

  this.destroy = (body) => {
    this.bodies = this.bodies.filter((b) => {
      return b.id !== body.id
    })
  }

  this.setBounds = (bounds) => {
    this.bounds = bounds
  }

  this.removeBounds = () => {
    this.bounds = false
  }

  this.update = () => {
    this.bodies.forEach((body, index) => {
      body.update()
      if (this.bounds) {
        if (body.center[0] <= this.bounds[0]) {
        // body.center.x = this.bounds[0]
          body.velocity.mult(body.restitution)
          body.velocity.value[0] *= -1
        }

        if (body.center[0] >= this.bounds[1]) {
        // body.center.x = this.bounds[1]
          body.velocity.mult(body.restitution)
          body.velocity.value[0] *= -1
        }

        if (body.center[1] <= this.bounds[2]) {
        // body.center.y = this.bounds[2]
          body.velocity.mult(body.restitution)
          body.velocity.value[1] *= -1
        }

        if (body.center[1] >= this.bounds[3]) {
        // body.center.y = this.bounds[3]
          body.velocity.mult(body.restitution)
          body.velocity.value[1] *= -1
        }
      }

      this.bodies.forEach((body2, index2) => {
        if (index !== index2) {
          if (vector.distance(body.center, body2.center) < body.far + body2.far) {
            if (body.type !== 'Circle' && body2.type !== 'Circle') meshIntersect(body, body2)
            else if (body.type !== 'Circle' && body2.type === 'Circle') meshCircleIntersect(body, body2)
            else if (body.type === 'Circle' && body2.type !== 'Circle') meshCircleIntersect(body2, body)
            else circleIntersect(body, body2)
          }
        }
      })
    })
  }
}

module.exports = Engine


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


/* global PIXI */

const { engine } = __webpack_require__(2)
const fisica = __webpack_require__(1)

var textStyle = new PIXI.TextStyle({
  fontFamily: 'Arial',
  fontSize: 12,
  fontWeight: 'bold',
  fill: '#ffffff',
  stroke: '#000000',
  strokeThickness: 2
})

class Package extends PIXI.Container {
  constructor (stage) {
    super()

    if (Math.random() > 0.5) this.name = 'BALAS'
    else this.name = 'VIDA'

    this.stage = stage
    this.x = Math.random() * window.innerWidth
    this.y = Math.random() * window.innerHeight

    this.box = new PIXI.Graphics()
    this.box.beginFill(0x333333)
    this.box.lineStyle(5, 0x000000, 1)
    this.box.drawRect(-50, -50, 100, 100)
    this.box.beginFill(0x343434)
    this.box.drawRect(-30, -30, 60, 60)
    this.box.scale.set(0.4)

    this.text = new PIXI.Text(this.name, textStyle)
    this.text.anchor.set(0.5)
    this.text.y = -20
    this.scale.set(0.65)
    this.addChild(this.box)
    this.addChild(this.text)

    this.body = new fisica.Body('Circle', {
      radius: 10,
      position: [this.position.x, this.position.y],
      collision: function (self, other) {
        if (other.parent.type) {
          if (other.parent.type === 'PLAYER') {
            if (self.parent.name === 'BALAS') {
              other.parent.bullets += 5
            } else if (self.parent.name === 'VIDA') {
              other.parent.vida += 10
              other.parent.vidaRender()
            }
          }
          self.parent.destroy()
        }
      }
    })

    this.body.parent = this
    engine.add(this.body)
  }

  destroy () {
    engine.destroy(this.body)
    this.stage.removeChild(this)
  }
}

module.exports = Package


/***/ })
/******/ ]);