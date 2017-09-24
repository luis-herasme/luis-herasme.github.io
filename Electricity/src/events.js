import vector from './vector'

let mouse = {
  position: [0, 0],
  end: [0, 0],
  start: [0, 0],
  clicked: false
}

let keyboard = {}

document.addEventListener('mousemove', function (e) {
  mouse.position[0] = e.clientX
  mouse.position[1] = e.clientY

  mouse.end = vector.sub(mouse.position, mouse.start)
  if (mouse.mousemove) mouse.mousemove(e)
})

document.addEventListener('mousedown', function (e) {
  e.preventDefault()
  mouse.click = true

  mouse.start[0] = e.clientX
  mouse.start[1] = e.clientY
  if (mouse.mousedown) mouse.mousedown(e)
})

document.addEventListener('contextmenu', (e) => e.preventDefault())

document.addEventListener('mouseup', function (e) {
  mouse.click = false
  mouse.end = [0, 0]
  if (mouse.mouseup) mouse.mouseup(e)
})

document.addEventListener('keydown', function (e) {
  if (keyboard.keydown) keyboard.keydown(e.key.toLowerCase())
})

document.addEventListener('keyup', function (e) {
  if (keyboard.keyup) keyboard.keyup(e.key.toLowerCase())
})

document.addEventListener('keypress', function (e) {
  if (keyboard.keypress) keyboard.keypress(e.key.toLowerCase())
})

const events = { mouse, keyboard }

export default events
