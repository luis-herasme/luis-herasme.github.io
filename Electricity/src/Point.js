import Color from './color'
import render from './render'

const TS = {font: 'bold 16px Arial', fillStyle: '#fff', textAlign: 'center'}

class Point {
  constructor (position, text, size, color = new Color(Math.random(), Math.random(), Math.random()), textStyle = TS) {
    this.position = position
    this.size = size

    this.color = color
    this.text = text

    this.textStyle = textStyle
  }
  render () {
    if (typeof this.color !== 'string') render.circle(this.position, this.size, this.color.rgb())
    else render.circle(this.position, this.size, this.color)
    render.text(this.text, this.position, this.textStyle)
  }
}

export default Point
