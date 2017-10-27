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
/***/ (function(module, exports) {


let canvas
let render = {}

/**
 * This function creates an Point object
 * @param {number} x The X coordinate
 * @param {number} y The Y coordinate
 */
function Point (x, y) {
  this.x = x
  this.y = y
  return this
}

/**
 * This function initializes the canvas
 * @param {string} canvasName If this parameter is given the render will try to find a canvas with this ID to draw in
 * @param {number} width This will be the width of the canvas
 * @param {number} height This will be the height of the canvas
 */
function init (canvasName, width, height) {
  if (canvasName) {
    canvas = document.getElementById(canvasName)
    if (width && height) {
      canvas.width = width
      canvas.height = height
    } else {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
  } else {
    canvas = document.createElement('canvas')
    document.body.appendChild(canvas)

    if (width && height) {
      canvas.width = width
      canvas.height = height
    } else {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
  }
  render.width = canvas.width
  render.height = canvas.height

  render.center = [render.width / 2, render.height / 2]
  render.context = canvas.getContext('2d')
}

/**
 * This function sets the scale of the canvas to the parameter given
 * @param {number} scale This will be the scale of the canvas
 */
function setScale (scale) {
  render.width = render.width / scale
  render.height = render.height / scale
  render.center = [render.width / 2, render.height / 2]
  render.scale = scale
}

/**
 * This function puts all the styles given in the context
 * @param {object} style This object contains the styles
 */
function setStyle (style) {
  for (let i in style) render.context[i] = style[i]
}

/**
 * This function translates the context to the coordinates given
 * @param {array} vec This is an array of coordinates
 */
function setCenter (vec = render.center) {
  render.context.translate(vec[0], vec[1])
}

/**
 * Clears the entire screen
 * @param {string} color With this color the canvas will be clear
 */
function clear (color = '#000') {
  render.context.fillStyle = color
  render.context.save()
  render.context.setTransform(1, 0, 0, 1, 0, 0)
  render.context.fillRect(0, 0, canvas.width, canvas.height)
  render.context.restore()
}

/**
 * Enables and disbales canvas smoth
 * @param {boolean} state If true enables canvas smoth and if false disbales canvas smoth
 */
function smoth (state) {
  render.context.webkitImageSmoothingEnabled = state
  render.context.mozImageSmoothingEnabled = state
  render.context.imageSmoothingEnabled = state
}

/*
myMatrix
.translate(P.x, P.y)
.scale(xFactor, yFactor)
.translate(-P.x, -P.y);
*/

/**
 * This object contains all that will be render
 */
function Stage () {
  this.childs = []

  /**
   * This function adds objects to the stage
   */
  this.add = function () {
    Array.from(arguments).forEach((element) => {
      this.childs.push(element)
    })
  }.bind(this)

  /**
   * This function renders all the objects of the stage
   */
  this.update = () => {
    this.childs.forEach((child) => {
      child.render()
    })
  }

  /**
   * This function destroy an object from the stage
   * @param {string} name This is the name of the object
   */
  this.destroy = function (name) {
    this.childs = this.childs.filter((child) => child.name !== name)
  }.bind(this)

  return this
}

/**
 * This class creates an object that draws in the screen
 * @param {function} renderFunction This function draws in the screen
 * @param {object} configuration This object contais information as the position of where things will be drawn the rotation etc..
 */
function Graphic (renderFunction, configuration) {
  if (configuration) {
    if (configuration.position) this.position = configuration.position
    else this.position = new Point(0, 0)
    if (configuration.scale) this.scale = configuration.scale
    else this.scale = new Point(1, 1)
    if (configuration.rotation) this.rotation = configuration.rotation
    else this.rotation = 0
  } else {
    this.position = new Point(0, 0)
    this.scale = new Point(1, 1)
    this.rotation = 0
  }
  this.render = () => {
    render.context.save()
    if (this.position) render.context.translate(this.position.x, this.position.y)
    if (this.scale) render.context.scale(this.scale.x, this.scale.y)
    if (this.rotation) render.context.rotate(this.rotation)
    renderFunction()
    render.context.restore()
  }
  return this
}

module.exports = {
  init,
  setCenter,
  clear,
  width: 0,
  height: 0,
  setScale,
  setStyle,
  Point,
  Stage,
  smoth,
  Graphic,
  render
}


/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


const canvas = __webpack_require__(4)
const fisica = __webpack_require__(7)
const Vector = __webpack_require__(2)
const vec = __webpack_require__(0)

canvas.init()
canvas.clear()

document.addEventListener('keydown', (e) => {
  if (e.key.toLocaleLowerCase() === 'a') {
    player.angleForce(-0.01)
  } else if (e.key.toLocaleLowerCase() === 'd') {
    player.angleForce(0.01)
  } else if (e.key.toLocaleLowerCase() === 'w') {
    let force = vec.angleMagnitude(player.rotation + Math.PI / 2, -0.5)
    player.addForce(new Vector(force[0], force[1]))
  } else if (e.key.toLocaleLowerCase() === 's') {
    let force = vec.angleMagnitude(player.rotation + Math.PI / 2, 0.5)
    player.addForce(new Vector(force[0], force[1]))
  } else if (e.key.toLocaleLowerCase() === 'e') {
    let force = vec.angleMagnitude(player.rotation + Math.PI / 2, -0.5 - player.velocity.mag())
    let bala = new Bullet([
      player.center[0] + (25 * Math.sin(player.rotation + Math.PI / 2)),
      player.center[1] + (-25 * Math.cos(player.rotation + Math.PI / 2))])
    bala.addForce(new Vector(force[0], force[1]))
    objects.push(bala)
    world.add(bala)
  }
})

class Bullet extends fisica.Body {
  constructor (pos) {
    super('Circle', {
      mass: 1,
      position: pos
    })
    this.size = 5
    setTimeout(() => {
      this.destroy()
    }, 5000)
  }
  destroy () {
    world.destroy(this)
    objects.splice(objects.indexOf(this), 1)
  }
  render () {
    canvas.circle(this.center, this.size, 'rgb(0, 255, 0)')
  }
}
let world = new fisica.Engine()
let objects = []

class SpaceShip extends fisica.Body {
  constructor () {
    super('Circle', {
      mass: 1,
      position: [100, 100]
    })
    this.far = 25
    this.rotation = 0
    this.angularVelocity = 0
    this.angularAceleration = 0
  }
  update2 () {
    this.angularVelocity *= 0.999
    this.velocity.mult(0.999)
    this.rotation += this.angularVelocity
    this.angularVelocity += this.angularAceleration
    this.angularAceleration = 0
  }
  angleForce (f) {
    this.angularAceleration += f
  }
  render () {
    canvas.render.context.save()
    canvas.render.context.translate(this.center[0], this.center[1])
    canvas.render.context.rotate(this.rotation)
    canvas.poligon([
      [0, 75],
      [25, 0],
      [50, 75],
      [25, 50]],
      'rgb(0, 255, 0)', false)
    canvas.render.context.restore()
  }
}

const player = new SpaceShip()
world.add(player)
world.setBounds([0, window.innerWidth, 0, window.innerHeight])

setInterval(() => {
  canvas.clear('rgba(0,0,50, 0.1)')

  player.render()
  player.update2()
  world.update()

  objects.forEach((x) => {
    x.render()
    if (x.update) x.update()
  })
})


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


const render = __webpack_require__(1)
const image = __webpack_require__(5)
const geometry = __webpack_require__(6)

module.exports = {
  Sprite: image.Sprite,
  SpriteSheet: image.SpriteSheet,
  loadImage: image.loadImage,
  drawImage: image.drawImage,

  init: render.init,
  clear: render.clear,
  Stage: render.Stage,
  render: render.render,
  setCenter: render.setCenter,
  center: render.render.center,
  width: render.width,
  height: render.height,
  setScale: render.setScale,
  setStyle: render.setStyle,
  Point: render.Point,
  smoth: render.smoth,
  Graphic: render.Graphic,

  strokeArc: geometry.strokeArc,
  text: geometry.text,
  poligon: geometry.poligon,
  strokeCircle: geometry.strokeCircle,
  circle: geometry.circle,
  strokeRect: geometry.strokeRect,
  rect: geometry.rect,
  line: geometry.line
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* global Image */

const render = __webpack_require__(1)

let imageCache = {}

/**
 * This function loads an image and saves it.
 * @param {string} name With this name the loaded image will be save in a image cache for later use
 * @param {string} src This is where the image is save
 */
function loadImage (name, src) {
  const image = new Image()
  image.src = src
  imageCache[name] = image
}

/**
 * This function draws an image on the screen
 * @param {string} name This is the name of the image saved in the imageCache
 * @param {object} position This object contains the position of the image
 * @param {object} anchor This will be the point of rotation of the image
 * @param {number} rotation This will be the rotation of the image
 * @param {number} width This will be the width of the image
 * @param {number} height This will be the height of the image
 */
function drawImage (name, position, anchor, rotation, scale) {
  render.render.context.save()
  render.render.context.translate(position.x, position.y)
  render.render.context.rotate(rotation)
  let realWidth = scale.x * imageCache[name].width
  let realHeight = scale.y * imageCache[name].height
  render.render.context.drawImage(imageCache[name], -(realWidth * anchor.x), -(realHeight * anchor.y), realWidth, realHeight)
  render.render.context.restore()
}

/**
 * This function renders an animation from an srpite sheet in the screen
 * @param {string} name This will be the name of the animation
 * @param {object} config This object contains the configuration of the animation
 */
function SpriteSheet (name, config) {
  loadImage(name, config.src)
  let frame = new render.Point(0, 0)
  this.position = config.position
  this.scale = config.scale
  this.x = 0
  this.y = 0
  this.interval = setInterval(() => {
    frame.x += 1
    if (this.x >= imageCache[name].width - config.width) {
      frame.x = 0
      frame.y += 1
    }
    if (this.y >= imageCache[name].height) {
      frame.y = 0
      /*
      if (this.configuration.loop) frame.y = 0
      else this.destroy()
      */
    }
    this.x = config.width * frame.x
    this.y = config.height * frame.y
    // console.log(this.x, this.y)
  }, config.time)
  // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  this.destroy = () => clearInterval(this.interval)
  this.render = () => render.render.context.drawImage(imageCache[name], this.x, this.y, config.width, config.height, this.position.x, this.position.y, config.width * this.scale.x, config.height * this.scale.y)
  return this
}

/**
 * This function creates an image object
 * @param {string} name This will be the name of the image
 * @param {object} position This object contains the position of the image
 * @param {object} scale This object contains the scale of the image
 * @param {number} rotation This is the rotation of the image
 * @param {object} anchor This will be the point of rotation of the image
 * @param {string} src This will be the location where the image is saved
 */
function Sprite (name, config) {
  /*
    FROM LIENZO ENGINE
    if (data.name && data.src) {
      IMAGE_CACHE[data.name] = new PIXI.Sprite(PIXI.Texture.fromImage(data.src))
      this.sprite = IMAGE_CACHE[data.name]
    } else if (data.name && !data.src) {
      this.sprite = IMAGE_CACHE[data.name]
    } else if (!data.name && data.src) {
      this.sprite = new PIXI.Sprite(PIXI.Texture.fromImage(data.src))
    }
*/
  this.name = name
  this.position = config.position ? config.position : new render.Point(0, 0)
  this.rotation = config.rotation ? config.rotation : 0
  this.anchor = config.anchor ? config.anchor : new render.Point(0.5, 0.5)
  this.scale = config.scale ? config.scale : new render.Point(1, 1)
  if (config.src) loadImage(this.name, config.src)
  this.render = () => drawImage(this.name, this.position, this.anchor, this.rotation, this.scale)
  return this
}

module.exports = {Sprite, SpriteSheet, drawImage, loadImage}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


const render = __webpack_require__(1)

/**
 * This function draws a line,
 * Takes a vector as start point and another vector as end point of the line
 * @param {array} start This will be the start point of the line
 * @param {array} end This will be the end point of the line
 * @param {object} style This will be the style of the line
 * @param {boolean} stroke If true the line will have an stroke
 */
function line (start, end, style) {
  render.render.context.beginPath()
  render.setStyle(style)
  render.render.context.moveTo(start[0], start[1])
  render.render.context.lineTo(end[0], end[1])
  render.render.context.stroke()
}

/**
 * This function draws a poligon in the screen
 * @param {array} vecs This contains all the points of the figure
 * @param {string} color This is the color of the poligon
 * @param {boolean} stroke If this true the poligon will have borders
 */
function poligon (vecs, color, stroke) {
  render.render.context.beginPath()
  render.render.context.fillStyle = color
  render.render.context.moveTo(vecs[0][0], vecs[0][1])
  for (var i = 0; i < vecs.length; i++) render.render.context.lineTo(vecs[i][0], vecs[i][1])
  render.render.context.closePath()
  render.render.context.fill()
  if (stroke) render.render.context.stroke()
}

/**
 * This function draws a rect in the screen
 * @param {array} position This array contains the coordinates of the rect
 * @param {number} width This is the width of the rect
 * @param {number} height This is the height of the rect
 * @param {string} color This will be the color of the rect
 */
function rect (position, width, height, color) {
  render.render.context.beginPath()
  render.render.context.fillStyle = color
  render.render.context.fillRect(position[0], position[1], width, height)
}

/**
 * This function draws the borders of a a rect in the screen
 * @param {array} position This array contains the coordinates of the rect
 * @param {number} width This is the width of the rect
 * @param {number} height This is the height of the rect
 * @param {string} color This will be the color of the rect
 * @param {number} lineWidth This is the width of the line
 */
function strokeRect (position, width, height, color, lineWidth) {
  render.render.context.beginPath()
  render.render.context.strokeStyle = color
  render.render.context.strokeRect(position[0], position[1], width, height)
}

/**
 * This function draws a text in the screen
 * @param {string} texto This is the text that will be drawn
 * @param {array} position This array contains the coordinates of the text
 * @param {object} style This object contais the styles of the text
 * @param {boolean} stroke If true the text will have borders
 */
function text (texto, position, style, stroke) {
  render.setStyle(style)
  if (stroke) render.render.context.strokeText(texto, position[0], position[1])
  render.render.context.fillText(texto, position[0], position[1])
}

/**
 * Draws the borders of a circle in the screen
 * @param {array} position This array contains the X and Y coordinates
 * @param {number} radius This will be the radius of the circle
 * @param {string} color This will be the color of the circle
 * @param {number} width This is the width of the line
 */
function strokeCircle (position, radius, color, width) {
  render.render.context.beginPath()
  render.render.context.strokeStyle = color
  render.render.context.arc(position[0], position[1], radius, 0, 2 * Math.PI)
  render.render.context.lineWidth = width
  render.render.context.stroke()
}

/**
 * Draws a circle in the screen
 * @param {array} position This array contains the X and Y coordinates
 * @param {number} radius This will be the radius of the circle
 * @param {string} color This will be the color of the circle
 */
function circle (position, radius, color) {
  render.render.context.beginPath()
  render.render.context.fillStyle = color
  render.render.context.arc(position[0], position[1], radius, 0, 2 * Math.PI)
  render.render.context.fill()
}

/**
 * This function draws the borders of an arc in the screen
 * @param {array} position This array contains the X and Y coordinates
 * @param {number} radius This is the radius of the arc
 * @param {number} lineWidth This is the width of the line
 * @param {number} eAngl This is the end angle
 * @param {number} aAngl This is the start angle
 * @param {string} color This is the color of the arc
 */
function strokeArc (position, radius, lineWidth, eAngl, aAngl, color) {
  render.render.context.beginPath()
  render.render.context.strokeStyle = color
  render.render.context.arc(position[0], position[1], radius, eAngl, aAngl, true)
  render.render.context.lineWidth = lineWidth
  render.render.context.stroke()
}

module.exports = {strokeArc, text, poligon, strokeCircle, circle, strokeRect, rect, line}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


const Body = __webpack_require__(8)
const Engine = __webpack_require__(10)

module.exports = { Body, Engine }


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


const Vector = __webpack_require__(2)
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
          body.center[0] = this.bounds[0]
          body.velocity.mult(body.restitution)
          body.velocity.value[0] *= -1
        }

        if (body.center[0] >= this.bounds[1]) {
          body.center[0] = this.bounds[1]
          body.velocity.mult(body.restitution)
          body.velocity.value[0] *= -1
        }

        if (body.center[1] <= this.bounds[2]) {
          body.center[1] = this.bounds[2]
          body.velocity.mult(body.restitution)
          body.velocity.value[1] *= -1
        }

        if (body.center[1] >= this.bounds[3]) {
          body.center[1] = this.bounds[3]
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


/***/ })
/******/ ]);
