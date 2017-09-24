/*
 * This is the render library
*/

const render = { init, setCenter, clear, circle, strokeCircle, strokeArc, rect, strokeRect, line, poligon, text, width: 0, height: 0, scale: {setScale, scale: 1}, resolution: 1, context: undefined }

function init () {
  const canvas = document.createElement('canvas')
  document.body.appendChild(canvas)
  render.width = window.innerWidth / render.scale.scale
  render.height = window.innerHeight / render.scale.scale
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  render.context = canvas.getContext('2d')
}

function setScale (scale) {
  render.width = render.width / scale
  render.height = render.height / scale
  render.scale.scale = scale
}

function line (vec1, vec2, dash, style) {
  // Takes a vector as an start point and another vector as the final point of the line
  render.context.beginPath()

  setStyle(style)

  if (dash) render.context.setLineDash(dash)

  render.context.moveTo(vec1[0] * render.scale.scale, vec1[1] * render.scale.scale)
  render.context.lineTo(vec2[0] * render.scale.scale, vec2[1] * render.scale.scale)

  render.context.stroke()
  render.context.fill()

  render.context.setLineDash([0, 0])
}

function rect (x, y, w, h, color) {
  // Draws a rect in the screen
  x = x * render.scale.scale
  y = y * render.scale.scale
  h = h * render.scale.scale
  w = w * render.scale.scale
  render.context.beginPath()
  render.context.fillStyle = color
  render.context.fillRect(x, y, w, h)
}

function strokeRect (x, y, w, h, color) {
  // Draws the borders of a rect in the screen
  x = x * render.scale.scale
  y = y * render.scale.scale
  h = h * render.scale.scale
  w = w * render.scale.scale
  render.context.beginPath()
  render.context.fillStyle = color
  render.context.rect(x, y, w, h)
  render.context.stroke()
}

function circle (pos, size, color) {
  // Draws a circle in the screen
  size = size * render.scale.scale
  render.context.beginPath()
  render.context.fillStyle = color
  render.context.arc(pos[0] * render.scale.scale, pos[1] * render.scale.scale, size, 0, 2 * Math.PI)
  render.context.fill()
}

function strokeArc (x, y, size, width, eAngl, aAngl, color) {
  // Draws the borders of an arc in the screen
  x = x * render.scale.scale
  y = y * render.scale.scale
  size = size * render.scale.scale
  render.context.strokeStyle = color
  render.context.beginPath()
  render.context.arc(x, y, size, eAngl /*- (Math.PI)*/, aAngl /*- (Math.PI)*/, true)
  render.context.lineWidth = width
  render.context.stroke()
}

function strokeCircle (x, y, size, width, color) {
  // Draws the borders of a circle in the screen
  x = x * render.scale.scale
  y = y * render.scale.scale
  size = size * render.scale.scale
  render.context.strokeStyle = color
  render.context.beginPath()
  render.context.arc(x, y, size, 0, 2 * Math.PI)
  render.context.lineWidth = width
  render.context.stroke()
}

function setStyle (style) {
  for (let i in style) {
    render.context[i] = style[i]
  }
}

function setCenter (vec = [render.width / 2, render.height / 2]) {
  // Sets the center of the screen in the given position by a 2D vector
  render.context.translate(vec[0], vec[1])
}

function text (texto, pos, style) {
  // Puts text in the screen
  setStyle(style)
  render.context.fillText(texto, pos[0] * render.scale.scale, pos[1] * render.scale.scale)
}

function clear (color = '#000') {
  // Clears the entire screen
  if (color) render.context.fillStyle = color
  render.context.save()
  render.context.setTransform(1, 0, 0, 1, 0, 0)
  render.context.fillRect(0, 0, window.innerWidth, window.innerHeight)
  render.context.restore()
}

function poligon (vecs, color) {
  // Draws a poligon in the screen
  render.context.beginPath()
  render.context.fillStyle = color
  render.context.moveTo(vecs[0][0], vecs[0][1])
  for (var i = 0; i < vecs.length; i++) {
    render.context.lineTo(vecs[i][0], vecs[i][1])
  }
  render.context.closePath()
  render.context.fill()
  render.context.stroke()
}

render.init()

export default render
