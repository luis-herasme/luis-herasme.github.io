
import Vector from '../Vector.js'
import Body from './Body.js'

class Ball extends Body {
  constructor (radius, position, restitution) {
    super(position, restitution)
    this.radius = radius
    this.mass = Math.PI * Math.pow(this.radius, 2)
  }

  onCollision (other, distance, direction) {
    if (!direction.mag()) {
      direction = Vector.random(0.5)
    }
    direction.mult(this.radius + other.radius)
    if (distance.mag()) {
      direction.sub(distance)
    }
    direction.div(2)
    this.position.add(direction)
    other.position.sub(direction)
    this.inelasticCollision(other)
  }
}

export default Ball
