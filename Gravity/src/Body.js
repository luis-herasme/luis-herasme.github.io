
import Ball from './Physics/Ball.js'
import Vector from './Vector.js'
import Render from './Render.js'

function gravity (particle, G, direction, mass, squareDistance) {
  direction.mult((mass / squareDistance) * G)
  particle.addForce(direction)
}

function electricity (particleX, particleY, E, mass, squareDistance, direction) {
  if (particleX.charge && particleY.charge) {
    direction.mult((mass / squareDistance) * E)
    if (particleX.charge === particleY.charge) {
      particleX.addForce(direction)
    } else {
      particleY.addForce(direction)
    }
  }
}

class Cuerpo extends Ball {
  update () {
    Render.circle(this.position.x, this.position.y, this.radius, this.color)
    super.update()
  }

  everyFrame (other) {
    const distance = Vector.sub(this.position, other.position)
    let direction = Vector.normalize(distance)
    const squareDistance = Math.pow(distance.mag(), 2)
    const mass = this.mass * other.mass
    // direction = Vector.normalize(distance)
    // electricity(this, other, this.E, mass, squareDistance, direction)
    // direction = Vector.normalize(distance)
    gravity(other, this.G, direction, mass, squareDistance)
  }
}

export default Cuerpo
