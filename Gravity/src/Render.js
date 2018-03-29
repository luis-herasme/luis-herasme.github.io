const canvasWindow = document.getElementById('lienzo')
canvasWindow.width = window.innerWidth
canvasWindow.height = window.innerHeight
const context = canvasWindow.getContext('2d')

const PI2 = 2 * Math.PI

function rect (x, y, w, h, color) {
  context.fillStyle = color
  context.beginPath()
  context.rect(x, y, w, h)
  context.fill()
}

function circle (x, y, size, color = '#ccc') {
  context.fillStyle = color
  context.beginPath()
  context.arc(x, y, size, 0, PI2)
  context.fill()
}

function clear (color = '#000') {
  context.fillStyle = color
  context.fillRect(0, 0, canvasWindow.width, canvasWindow.height)
}

module.exports = {circle, rect, clear, context}
