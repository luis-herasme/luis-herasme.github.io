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

import Complex from "./Complex";
import { hslToRgb } from "./Color";

const canvasWidth = 500;
const canvasHeight = 500;
const c = new Complex(-1, -0.3); //new Complex(-0.1, -0.3);
let n, z, col;
let counter = 0;
let N_ITERATION = 100;
let N_MAX = 2;

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = canvasWidth;
canvas.height = canvasHeight;

document.getElementById("cambiar").addEventListener("click", () => {
  c.Re = Number(document.getElementById("real").value);
  c.Im = Number(document.getElementById("im").value);
});

var canvasData = context.getImageData(0, 0, canvasWidth, canvasHeight);

var index;
function drawPixel(x, y, r, g, b, a) {
  index = (x + y * canvasWidth) * 4;
  canvasData.data[index + 0] = r;
  canvasData.data[index + 1] = g;
  canvasData.data[index + 2] = b;
  canvasData.data[index + 3] = a;
}

function set_pixel(data, w, x, y, r, g, b, a) {
  index = (x + y * w) * 4;
  data.data[index + 0] = r;
  data.data[index + 1] = g;
  data.data[index + 2] = b;
  data.data[index + 3] = a;
}

window.generateFractal = generateFractal;
window.context = context;

function generateFractal(w, h, scale) {
  const temp_canvas = document.createElement("canvas");
  const temp_context = temp_canvas.getContext("2d");
  temp_canvas.width = w;
  temp_canvas.height = h;
  let temp_data = temp_context.getImageData(0, 0, w, h);
  temp_data = fractal(w, h, scale, temp_data);
  /*
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      z = new Complex(scale * (x / w) - scale / 2, scale * (y / h) - scale / 2); // Zoom.
      n = 0;

      while (n < N_ITERATION) {
        z.add(z.getSquare());
        z.add(c);

        if (Math.hypot(z.Re, z.Im) > N_MAX) {
          break;
        }

        n++;
      }

      n = n / N_ITERATION + 0.0; // Color.
      col = hslToRgb(n, 1, 0.5);
      set_pixel(temp_data, w, x, y, col[0], col[1], col[2], n * 255);
    }
  }
  */
  return temp_data;
}

function fractal(width, height, scale, data) {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      z = new Complex(
        scale * (x / width) - scale / 2,
        scale * (y / height) - scale / 2
      );
      n = 0;
      while (n < N_ITERATION) {
        z.add(z.getSquare());
        z.add(c);
        if (Math.abs(z.Re + z.Im) > N_MAX) break;
        n++;
      }
      n = n / N_ITERATION + 0.0; // Color.
      col = hslToRgb(n, 1, 0.5);
      set_pixel(data, width, x, y, col[0], col[1], col[2], n * 255);
    }
  }
  return data;
}

window.imagedata_to_image = imagedata_to_image;
function imagedata_to_image(imagedata) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = imagedata.width;
  canvas.height = imagedata.height;
  ctx.putImageData(imagedata, 0, 0);

  var image = new Image();
  image.src = canvas.toDataURL();
  return image;
}

function get_img(w, h, scale) {
  let i = generateFractal(w, h, scale);
  let img = imagedata_to_image(i);
  document.body.appendChild(img);
}
window.get_img = get_img;

setInterval(() => {
  c.Im += Math.cos(counter) / 100;
  c.Re += Math.sin(counter) / 100;
  counter += 0.05;
  context.putImageData(canvasData, 0, 0);
  canvasData = fractal(canvasWidth, canvasHeight, 2, canvasData);
  /*
  for (let x = 0; x < canvasWidth; x++) {
    for (let y = 0; y < canvasHeight; y++) {
      z = new Complex(
        3 * (x / canvasWidth) - 1.5,
        3 * (y / canvasHeight) - 1.5
      );
      n = 0;
      while (n < N_ITERATION) {
        z.add(z.getSquare());
        z.add(c);
        if (Math.abs(z.Re + z.Im) > N_MAX) {
          break;
        }
        n++;
      }
      n = n / N_ITERATION + 0.0;
      col = hslToRgb(n, 1, 0.5);
      drawPixel(x, y, col[0], col[1], col[2], n * 255);
    }
  }  */
}, 1000 / 10);
