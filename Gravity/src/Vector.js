
import { getNumber } from './Numbers'

export default class Vector {
  constructor (x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  add (vector) {
    this.x += vector.x
    this.y += vector.y
  }

  sub (vector) {
    this.x -= vector.x
    this.y -= vector.y
  }

  mult (scalar) {
    this.x *= scalar
    this.y *= scalar
  }

  div (scalar) {
    this.x /= scalar
    this.y /= scalar
  }

  zero () {
    this.x = 0
    this.y = 0
  }

  inverse () {
    this.x *= -1
    this.y *= -1
  }

  copy () {
    return new Vector(this.x, this.y)
  }

  mag () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  }

  normalize () {
    var m = this.mag()
    this.x /= m
    this.y /= m
  }

  static inverse (v) {
    return new Vector(-1 * v.x, -1 * v.y)
  }

  static mult (vec, scalar) {
    return new Vector(vec.x * scalar, vec.y * scalar)
  }

  static distance (v1, v2) {
    return this.sub(v1, v2).mag()
  }

  static normalize (v) {
    let m = v.mag()
    return new Vector(v.x / m, v.y / m)
  }

  static random (number) {
    return new Vector(getNumber(number), getNumber(number))
  }

  static sub (v1, v2) {
    return new Vector(v1.x - v2.x, v1.y - v2.y)
  }

  static add (v1, v2) {
    return new Vector(v1.x + v2.x, v1.y + v2.y)
  }
}
