import Color from './color'
import render from './render'
import vector from './vector'

const TS = {font: 'bold 16px Arial', fillStyle: '#fff'}

class Line {
  constructor (start, end, text, color = '#800', textStyle = TS) {
    this.end = end
    this.start = start

    this.segment = vector.sub(this.end, this.start)
    this.color = new Color(Math.random(), Math.random(), Math.random())
    this.text = text

    this.textStyle = textStyle
  }
  render () {
    render.line(this.start, this.end, [0, 0], {strokeStyle: this.color.rgb()})
    render.circle(this.end, 5, this.color.rgb())
    render.circle(this.start, 5, this.color.rgb())
    render.text(this.text, this.end, this.textStyle)
  }
  static renderLine (start, end) {
    render.line(start, end, [0, 0])
    render.circle(end, 5, '#800')
    render.circle(start, 5, '#800')
  }
}

export default Line
