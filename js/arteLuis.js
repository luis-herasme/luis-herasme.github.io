"use strict";
window.onload = main;

function main() {
    var theCanvas = document.createElement('canvas');
    theCanvas.setAttribute('width', window.innerWidth);
    theCanvas.setAttribute('height', window.innerHeight);
    document.body.appendChild(theCanvas);

    function canvasSupport() {
        return !!document.createElement('canvas').getContext;
    }

    var context = theCanvas.getContext("2d");

    let ina = setInterval(function() {

        let audio = new Audio('./audio/arte.m4a');
        audio.play();
    }, 500);
    var luis = 5;
    let a = 2;
    var imageNumber1 = new Image();
    imageNumber1.onload = function() {
        context.drawImage(imageNumber1, 100, 100);
    }
    setInterval(al, 500);

    function al() {
        context.strokeStyle = color();

        let x = Math.round(Math.random() * window.innerWidth - 50);
        let y = Math.round(Math.random() * window.innerHeight - 50);
        let segundos = setInterval(function() {
            context.beginPath();
            context.arc(x, y, 50, 0, Math.PI * 2);
            context.stroke();
            x = x + 1;
            y = y + 1;
        }, 10);

    }

    var ax = setTimeout()

    function color() {
        let colo = "#";
        let col = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

        function co() {
            return col[Math.round(Math.random() * col.length)];
        }
        colo = colo + co() + co() + co() + co() + co() + co() + "";
        return colo;
    }

}