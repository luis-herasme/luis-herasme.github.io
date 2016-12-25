"use strict";

window.onload = function() {
    let lienzo = document.createElement("canvas");
    let anchoPantalla = window.innerWidth;
    let altoPantalla = window.innerHeight;
    lienzo.setAttribute("width", anchoPantalla);
    lienzo.setAttribute("height", altoPantalla);
    document.body.appendChild(lienzo);
    let contexto = lienzo.getContext("2d");
    let snows = [];
    let numSnow = 1;

    let snow = {
        create: function() {
            let obj = Object.create(this);
            obj.init.apply(obj);
            return obj;
        },

        init: function() {
            this.posX = Math.random() * anchoPantalla;
            this.posY = 0;
            this.tamano = (Math.random() * 3) + 2;
            this.velocidad = (Math.random() * 3) + 2;
        },

        update: function() {
            contexto.beginPath();
            contexto.fillStyle = "#fff";
            contexto.arc(this.posX, this.posY, this.tamano, 0, 2 * Math.PI);
            contexto.fill();
            if (this.posY > window.innerHeight) {
                this.posY = 0;
            }
            this.posY += this.velocidad;

        }
    }

    for (let i = 0; i < numSnow; i += 1) {
        snows.push(snow.create());
    }

    snows = [];
    for (let i = 0; i < numSnow; i += 1) {
        snows.push(snow.create());
    }
    draw();

    let nieve = setInterval(function() {
        numSnow += 1;
        snows.push(snow.create());
    }, 100);

    function draw() {
        contexto.clearRect(0, 0, anchoPantalla, altoPantalla);
        for (let i = 0; i < numSnow; i += 1) {
            snows[i].update("foo", "bar");
        }
        requestAnimationFrame(draw);
    }

    let header = document.createElement("div");
    header.setAttribute("class", "header")
    let titulo = document.createElement("h1");
    let texto = document.createTextNode("Feliz navidad");
    titulo.appendChild(texto);
    header.appendChild(titulo);
    document.body.appendChild(header);

    let myAudio = new Audio("./audio/navidad.mp3");
    myAudio.onload = function() {
        myAudio.play();
    }
    myAudio.addEventListener("ended", function() {
        myAudio.currentTime = 0;
        myAudio.play();
    });
    myAudio.play();

}