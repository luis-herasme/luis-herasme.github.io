
import Vector from '../Vector'

class Body {
  constructor (position, restitution) {
    this.position = position
    this.velocity = new Vector(0, 0)
    this.acceleration = new Vector(0, 0)
    this.restitution = restitution
  }

  addForce (force) {
    force.div(this.mass)
    this.acceleration.add(force)
  }

  momentum () {
    return Vector.mult(this.velocity, this.mass)
  }

  inelasticCollision (other) {
    const velocity1 = this.velocity
    const velocity2 = other.velocity
    const totalMomentum = Vector.add(other.momentum(), this.momentum())
    const totalMass = this.mass + other.mass

    this.velocity = Vector.sub(velocity2, velocity1)
    this.velocity.mult(this.restitution * other.mass)
    this.velocity.add(totalMomentum)
    this.velocity.div(totalMass)

    other.velocity = Vector.sub(velocity1, velocity2)
    other.velocity.mult(other.restitution * this.mass)
    other.velocity.add(totalMomentum)
    other.velocity.div(totalMass)
  }

  update () {
    this.position.add(this.velocity)
    this.velocity.add(this.acceleration)
    this.acceleration.zero()
  }
}

export default Body
