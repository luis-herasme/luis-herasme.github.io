
import Vector from './Vector'
import Render from './Render'
import getData from './getData'
import Collision from './Physics/CollisionHandler.js'
import Body from './Body'
import { random } from './Numbers'

let collider
let interval
let bodies = []
let control = {
  controled: new Body(100, new Vector(0, 0), 1),
  charge: false,
  radius: 100
}

document.getElementById('start').addEventListener('click', init)

document.addEventListener('keydown', (e) => {
  if (e.key.toLocaleLowerCase() === '+') control.radius += 3
  if (e.key.toLocaleLowerCase() === '-') control.radius -= 3
  if (e.key.toLocaleLowerCase() === 'p') control.charge = 'p'
  if (e.key.toLocaleLowerCase() === 'n') control.charge = 'n'
  if (e.key.toLocaleLowerCase() === 'x') control.charge = false
})
/*
document.addEventListener('mousedown', (e) => {
  if (interval) {
    control.controled = new Body(control.radius, new Vector(e.clientX, e.clientY), 1)
    control.controled.charge = control.charge
    if (control.controled.charge === 'p') control.controled.color = '#F00'
    else if (control.controled.charge === 'n') control.controled.color = '#00F'
    else control.controled.color = '#FFF'
    control.controled.velocity.zero()
    collider.add(control.controled)
    bodies.push(control.controled)
  }
})

document.addEventListener('mouseup', (e) => {
  if (interval) {
    collider.remove(control.controled)
    bodies.splice(bodies.indexOf(control.controled), 1)
  }
})
*/

function init () {
  Render.clear()
  if (interval) clearInterval(interval)

  const data = getData()
  collider = new Collision()

  bodies = []

  for (; bodies.length < data.bodies;) {
    const radius = data.average[0] + random(Math.abs(data.average[0] - data.average[1]))
    const position = new Vector(random(window.innerWidth), random(window.innerHeight))
    let body = new Body(radius, position, data.restitution)

    body.E = data.electricity
    body.G = data.gravity

    if (Math.random() < 0.25) {
      body.charge = Math.random() < 0.5 ? 'n' : 'p'
      if (body.charge === 'p') body.color = '#F00'
      else body.color = '#00F'
    }

    collider.add(body)
    bodies.push(body)
  }

  interval = setInterval(() => {
    Render.clear('rgba(0,0,0,0.5)')
    bodies.forEach((body) => {
      body.update()
      // body.everyFrame(bodies)
    })
    collider.update()
  })
}
