import render from './render'
import vector from './vector'
import events from './events'
import Point from './Point'
import { Body2 } from './physics/body.js'
import { randomNumber } from './Utils'
import physics from './physics/collision'

let objects = []
render.setCenter()
const conta = 250

class Electric extends Body2 {
  constructor (charge, position, size = 10) {
    super(position, 15)
    this.size = size
    this.text = charge ? 'p' : 'n'
    this.charge = charge
    this.color = charge ? '#f00' : '#00f'
    this.position = position
    if (this.size !== 300) {
      this.draw = new Point(this.position, this.text, this.size, this.color)
      physics.particles.push(this)
    } else this.draw = new Point(this.position, this.text, this.size / 3, this.color)
  }
  update (particles) {
    super.update()
    this.draw.position = this.position
    let d
    for (let i = 0; i < particles.length; i++) {
      if (particles[i].charge !== this.charge) {
        d = vector.inverse(vector.sub(this.position, particles[i].position))
      }
      if (particles[i].charge === this.charge) {
        d = vector.sub(this.position, particles[i].position)
      }
      d = vector.mult(d, 0.00001 * particles[i].size)
      this.addForce(d)
    }
    let i = 0
    if (!this.tag) {
      if (vector.mag(this.position) >= conta) {
        this.position = vector.setMag(this.position, conta)
        this.velocity = vector.mult(vector.inverse(this.velocity), i)
      }
    }
    this.draw.render()
  }
}

let positive = 0
let balls = 100

for (let i = 0; i < balls; i++) {
  let charge = Math.random() < 0.75 ? true : false
  if (charge) positive++
  objects.push(new Electric(charge, [randomNumber(render.width / 2), randomNumber(render.width / 2)]))
}

let negative = balls - positive

const nuevo = new Electric(true, events.mouse.position, 300)
nuevo.tag = true
events.mouse.mousedown = function (e) {
  nuevo.position = vector.sub(events.mouse.position, [render.width / 2, render.height / 2])
  if (e.button === 0) {
    nuevo.charge = true
    nuevo.draw = new Point(nuevo.position, 'P', nuevo.size / 6, '#f00')
  }
  if (e.button === 2) {
    nuevo.charge = false
    nuevo.draw = new Point(nuevo.position, 'E', nuevo.size / 6, '#00f')
  }
  objects.push(nuevo)
}

events.mouse.mousemove = function (e) {
  nuevo.position = vector.sub(events.mouse.position, [render.width / 2, render.height / 2])
}

events.mouse.mouseup = function (e) {
  objects.pop()
}

setInterval(() => {
  render.clear()
  render.text(`POSITIVE ${positive}`, [150, -400], {fillStyle: '#FFF', font: '30px Arial'})
  render.text(`NEGATIVE ${negative}`, [150, -300], {fillStyle: '#FFF', font: '30px Arial'})
  physics.update()
  nuevo.position = vector.sub(events.mouse.position, [render.width / 2, render.height / 2])
  render.strokeCircle(0, 0, conta, 10, '#FF0')
  objects.forEach((x) => x.update(objects))
})

  /*
    if (this.position[0] < 0) {
      this.position[0] = 0
      // this.velocity = vector.mult(vector.inverse(this.velocity), i)
    }
    if (this.position[1] > render.height) {
      this.position[1] = render.height
      // this.velocity = vector.mult(vector.inverse(this.velocity), i)
    }
    if (this.position[1] < 0) {
      this.position[1] = 0
      // this.velocity = vector.mult(vector.inverse(this.velocity), i)
    }
*/