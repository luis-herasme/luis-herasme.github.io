
import Vector from '../Vector.js'

function detectCollision (particles) {
  for (let x = 0; x < particles.length; x++) {
    for (let y = 0; y < particles.length; y++) {
      if (x !== y) {
        particles[x].everyFrame(particles[y]) // IMPORTANT !!!!!!!!!!!
        const distance = Vector.sub(particles[x].position, particles[y].position)
        if (distance.mag() < particles[x].radius + particles[y].radius) {
          particles[x].onCollision(particles[y], distance, Vector.normalize(distance))
        }
      }
    }
  }
}

export { detectCollision }
