export default class Color {
  constructor (r, g, b, a = 1) {
    this.r = Math.round(r * 255)
    if (this.r >= 255) this.r = 255
    this.g = Math.round(g * 255)
    if (this.g >= 255) this.g = 255
    this.b = Math.round(b * 255)
    if (this.b >= 255) this.b = 255
    this.a = a
  }
  rgb () {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
  }
}
/*
// Creates a color code from red, green and blue values
function getColorCode (r, g, b) {
  let r0 = Math.floor(r / 16)
  let r1 = r % 16
  let g0 = Math.floor(g / 16)
  let g1 = g % 16
  let b0 = Math.floor(b / 16)
  let b1 = b % 16
  return '#' + r0.toString(16) + r1.toString(16) + g0.toString(16) + g1.toString(16) + b0.toString(16) + b1.toString(16)
}

// Returns a random color-code
function getRandomColorCode () {
  return getColorCode(
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255)
  )
}
*/