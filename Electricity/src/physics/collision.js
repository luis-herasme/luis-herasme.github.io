import vector from '../vector'

const physics = {
  update,
  particles: []
}

function update () {
  for (let i = 0; i < physics.particles.length; i++) {
    for (let x = 0; x < physics.particles.length; x++) {
      let choque = vector.sub(physics.particles[i].position, physics.particles[x].position)
      if (vector.mag(choque) !== 0) {
        if (vector.mag(choque) < physics.particles[i].size + physics.particles[x].size) {
          physics.particles[x].addForce(vector.inverse(choque))
          break
        }
      }
    }
  }
}

export default physics
