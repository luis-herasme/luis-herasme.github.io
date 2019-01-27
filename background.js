const canvas = document.getElementById("can");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext("2d");
/*
const arrow = new Image();
arrow.src =
  "https://upload.wikimedia.org/wikipedia/commons/7/72/Arrow_southeast.svg";
*/
const MOUSE = { x: 0, y: 0 };
let Bodies = [];

document.body.addEventListener("mousemove", e => {
  MOUSE.x = e.clientX;
  MOUSE.y = e.clientY;
});

class Body {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = "#fffde7";

    this.velocity = {
      x: 0,
      y: 0
    };

    this.acceleration = {
      x: 0,
      y: 0
    };

    this.size = 1;
  }

  update(data) {
    //let color = getPixel(this.x / 40, this.y / 40, data);
    //console.log(`rgb(${color.r}, ${color.g}, ${color.b})`);
    //this.color = `rgb(${color.r}, ${color.g}, ${color.b})`;

    let x = MOUSE.x - this.x;
    let y = MOUSE.y - this.y;
    //let angle = Math.atan2(y, x);
    let mag = Math.hypot(x, y);
    x = (x * 1) / mag;
    y = (y * 1) / mag;
    this.velocity.x += -1 + Math.random() * 2;
    this.velocity.y += -1 + Math.random() * 2;
    if (mag < 50) {
      this.velocity.x -= x;
      this.velocity.y -= y;
    } else {
      this.velocity.x += x;
      this.velocity.y += y;
    }
    //if (this.velocity.x > 5) this.velocity.x = 5;
    //if (this.velocity.y > 5) this.velocity.y = 5;

    this.x += this.velocity.x / 4;
    this.y += this.velocity.y / 4;
    this.velocity.x *= 0.99;
    this.velocity.y *= 0.99;
    /*
    this.x -= x;
    this.y -= y;
    */
    let red = Math.round(mag);
    if (red > 255) {
      red = 255;
    }
    this.color = `rgb(${red},150,150)`;
    circle(this.x, this.y, this.size, this.color);
    /*
    context.translate(this.x, this.y);
    context.rotate(angle);
    img(arrow, 0, 0);
    context.rotate(-angle);
    context.translate(-this.x, -this.y);
    */
    /*
    this.velocity.x += this.acceleration.x;
    this.velocity.y += this.acceleration.y;
    this.acceleration.x = 0;
    this.acceleration.y = 0;
    */
  }
}
const AMOUNT = 60;
function init() {
  for (let x = 0; x < AMOUNT; x++) {
    for (let y = 0; y < AMOUNT; y++) {
      Bodies.push(
        new Body(
          x * (window.innerWidth / AMOUNT),
          y * (window.innerHeight / AMOUNT)
        )
      );
    }
  }
}

function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function circle(x, y, s, c) {
  context.beginPath();
  context.fillStyle = c;
  context.arc(x, y, s, 0, Math.PI * 2);
  //  context.rect(x, y, 10, 1);
  context.fill();
}

function img(img, x, y) {
  context.drawImage(img, x, y, 15, 15);
}

function update() {
  clear();
  Bodies.forEach(body => body.update());
}

let bees = false;
let first_time = true;
let bees_interval;

document.getElementById("bees").addEventListener("click", () => {
  if (!bees) {
    if (first_time) {
      init();
      first_time = false;
    }
    bees_interval = setInterval(update, 1000 / 60);
  } else {
    clear();
    clearInterval(bees_interval);
  }
  bees = !bees;
});
