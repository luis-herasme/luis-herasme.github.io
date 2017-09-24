import vector from '../vector'

class Body2 {
  constructor (position = [0, 0], size) {
    this.position = position
    this.aceleration = [0, 0]
    this.velocity = [0, 0]
    this.size = size
  }
  update () {
    this.velocity = vector.add(this.velocity, this.aceleration)
    this.position = vector.add(this.position, this.velocity)
    this.aceleration = [0, 0]
  }
  addForce (aceleration) {
    aceleration = vector.mult(aceleration, 1 / this.size)
    this.aceleration = vector.add(this.aceleration, aceleration)
  }
}

class Body3 {
  constructor (position = [0, 0, 0], size) {
    this.position = position
    this.aceleration = [0, 0, 0]
    this.velocity = [0, 0, 0]
    this.size = size
  }
  update () {
    this.velocity = vector.add(this.velocity, this.aceleration)
    this.position = vector.add(this.position, this.velocity)
    this.aceleration = [0, 0, 0]
  }
  addForce (aceleration) {
    aceleration = vector.mult(aceleration, 1 / this.size)
    this.aceleration = vector.add(this.aceleration, aceleration)
  }
}

export {Body2, Body3}
