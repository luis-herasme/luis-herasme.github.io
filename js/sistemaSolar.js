"use strict";

let canvas = document.createElement('canvas');
canvas.setAttribute("width", window.innerWidth);
canvas.setAttribute("height", window.innerHeight);
document.body.appendChild(canvas);
let context = canvas.getContext("2d");
let centroX = window.innerWidth / 2;
let centroY = window.innerHeight / 2;

let angle = 0;
let radioX = 300;
let radioY = 200;
let velocidad = 0.01;

render();

function render() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = "#000";
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    let x = centroX + Math.cos(angle) * radioX;
    let y = centroY + Math.sin(angle) * radioY;
    context.beginPath();
    context.arc(x,y,5,0,2*Math.PI);
    context.fillStyle = "#00B7FF";
    context.fill();    
    context.beginPath();
    context.arc(centroX, centroY, 50, 0 , 2 * Math.PI);
    context.fillStyle = "#FFE200";
    context.fill();
    angle += velocidad;
    requestAnimationFrame(render);
}
