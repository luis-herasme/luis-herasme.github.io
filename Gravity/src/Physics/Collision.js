
import Vector from '../Vector'
import { detectCollision } from './Utils'

class Collision {
  constructor (x, y) {
    this.x = x
    this.y = y
    this.particles = []
  }

  add (particle) {
    this.particles.push(particle)
    particle.collider = this
  }

  simpleAdd (particle) {
    this.particles.push(particle)
  }

  remove (particle) {
    this.particles.splice(this.particles.indexOf(particle), 1)
  }

  check () {
    detectCollision(this.particles)
  }

  centerOfMass () {
    const position = this.particles.reduce((a, c) => Vector.add(a.position, c.position))
    position.div(this.particles.length)

    const mass = this.particles.reduce((a, c) => a.mass + c.mass)
    return {position: position, mass: mass}
  }
}

export default Collision
