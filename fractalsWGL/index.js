class Complex {
  constructor(real, imaginary) {
    this.Re = real;
    this.Im = imaginary;
  }

  add(other) {
    this.Re += other.Re;
    this.Im += other.Im;
  }

  copy() {
    return new Complex(this.Re, this.Im);
  }

  square() {
    this.Re = this.Re * this.Re - this.Im * this.Im;
    this.Im = 2 * this.Im * this.Re;
  }

  getSquare() {
    return new Complex(
      this.Re * this.Re - this.Im * this.Im,
      2 * this.Im * this.Re
    );
  }
}

/**
 *
 * TODO
 *
 * Add to options:
 *  Canvas resolution.
 *  Colors.
 *  N, Iterations
 *  N, Infinity
 *  Zoom
 */

const gpu = new GPU();
const c = new Complex(0, 0);

/*
document.getElementById("cambiar").addEventListener("click", () => {
  c.Re = Number(document.getElementById("real").value);
  c.Im = Number(document.getElementById("im").value);
});
*/
const Fractal = gpu
  .createKernel(function (r, i, w, h, scale) {
    const profundidad = 100;
    var y = scale * (this.thread.x / w) - scale / 2;
    var x = scale * (this.thread.y / h) - scale / 2;
    var temp1,
      temp2,
      n = 0;

    while (n < profundidad) {
      temp1 = x * x - y * y;
      temp2 = 2 * x * y;

      x = temp1 + i;
      y = temp2 + r;

      if (sqrt(pow(x, 2) + pow(y, 2)) > profundidad) break;
      n++;
    }

    n = n / profundidad;

    this.color(n - 0.1, n - 0.1, 0.1 + n);
  })
  .setOutput([window.innerWidth, window.innerHeight])
  .setGraphical(true);

const canvas = Fractal.getCanvas();
document.getElementsByTagName("body")[0].appendChild(canvas);

const mouse = {
  x: 0,
  y: 0
}

document.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX / window.innerWidth
  mouse.y = event.clientY / window.innerHeight

  mouse.x -= 0.5
  mouse.y -= 0.5

  mouse.x *= 3
  mouse.y *= 3
})

let counter = 0;
setInterval(() => {
  // counter += 0.01;
  // c.Im = Math.cos(c.Im + counter);
  // c.Re = Math.cos(c.Re + counter);
  c.Im = mouse.x
  c.Re = mouse.y
  Fractal(c.Re, c.Im, window.innerWidth, window.innerHeight, 2);
}, 1000 / 120);

