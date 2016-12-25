'use strict';

window.onload = main;

function main() {
    let theCanvas = document.createElement('canvas');
    let width = window.innerWidth;
    let height = window.innerHeight;
    theCanvas.setAttribute('width', width);
    theCanvas.setAttribute('height', height);
    document.body.appendChild(theCanvas);
    let context = theCanvas.getContext('2d');

    let hunter = new Image();

    hunter.onload = function() {

        drawImageRot(hunter, (width / 2) - 100, height - 250, 200, 400, -20);

    }

    let myAudio = new Audio("audio.mp3");
    myAudio.addEventListener("ended", function() {
        this.currentTime = 0;
        this.play();
    });
    myAudio.play();

    function drawImageRot(img, x, y, width, height, deg) {

        var rad = deg * Math.PI / 180;


        context.translate(x + width / 2, y + height / 2);

        context.rotate(rad);

        context.drawImage(img, width / 2 * (-1), height / 2 * (-1), width, height);

        context.rotate(rad * (-1));
        context.translate((x + width / 2) * (-1), (y + height / 2) * (-1));
    }

    document.getElementById('fondo').ondragstart = function() { return false; };
    hunter.src = "hunter.png";

    document.addEventListener('mousemove', movimiento, false);

    function cambio(grados) {



        drawImageRot(hunter, (width / 2) - 100, height - 250, 200, 400, grados);
    }


    function dibujo() {
        cambio(an);
    }

    var x, y, an;

    function movimiento(e) {
        x = -((width / 2) - e.pageX);
        y = height - e.pageY;
        an = Math.atan(y / x) * 180 / Math.PI;
        console.log("X:", x, "Y:", y);
        console.log("Angulo:", an);
        if (an > 0) {
            an = (-an + 90);
        }
        if (an < 0) {
            an = (-an - 90);
        }
    }
    context.beginPath();

    var bees = [],
        numBees = 20;

    var bee = {
        create: function() {
            var obj = Object.create(this);
            obj.init.apply(obj);
            return obj;
        },

        init: function() {
            this.angleX = Math.random() * Math.PI * 2;
            this.angleY = Math.random() * Math.PI * 2;
            this.speedX = Math.random() * .1 - .05;
            this.speedY = Math.random() * .1 - .05;
            this.radius = 100 + Math.random() * 100;
        },

        update: function() {
            var x = Math.cos(this.angleX) * this.radius,
                y = Math.sin(this.angleY) * this.radius;
            this.angleX += this.speedX;
            this.angleY += this.speedY;

            context.beginPath();
            let img = new Image();
            img.src = "fly.png";

            context.drawImage(img, width / 2 + x, height / 2 + y, 50, 50);
            context.fill();
        }
    }

    for (var i = 0; i < numBees; i += 1) {
        bees.push(bee.create());
    }


    draw();

    function draw() {
        context.clearRect(0, 0, width, height);
        for (var i = 0; i < numBees; i += 1) {
            bees[i].update();
        }
        dibujo();
        requestAnimationFrame(draw);
    }





}