"use strict";

window.onload = interFaz;
window.onmousemove = mousePos;
//window.onwheel = mouseScroll;

var mouseX = 0,
    scale = 50,
    mouseY = 0,
    map = [],
    mapaT = 50,
    amountFood = 10,
    ball,
    frecuencia = 0.98,
    comida = {},
    worldPos,
    hongo = new Image(),
    grass = new Image(),
    comidaPos = [];

hongo.src = "./img/hongo.png";
grass.src = "./img/grass.png"

/*
function mouseScroll() {
    var e = window.event;
    console.log(comidaPos);
    if (e.deltaY < 0) {
        for (var i = 0; i <= comidaPos.length; i++) {
            var pozY = comidaPos[i][1];
            console.log(pozY, "AQUIIIIIIIIIII!!");
            comidaPos[i][1] = pozY / scale;
        }

        scale += 5;
        for (var i = 0; i <= comidaPos.length; i++) {
            comidaPos[i][0] = comidaPos[i][0] * scale;
            comidaPos[i][1] = comidaPos[i][1] * scale;

        }
    } else {
        for (var i = 0; i <= comidaPos.length; i++) {
            comidaPos[i][0] = comidaPos[i][0] / scale;
            comidaPos[i][1] = comidaPos[i][1] / scale;
        }
        scale -= 5;

        console.log("hola que hace");
        for (var i = 0; i <= comidaPos.length; i++) {
            comidaPos[i][0] = comidaPos[i][0] * scale;
            comidaPos[i][1] = comidaPos[i][1] * scale;
        }
    }
    ball.size = scale;
    comida.size = scale;
}
*/

function interFaz() {
    var jugar = document.getElementById("jugar");
    var tam = document.getElementById("tamano");
    var grande = document.getElementById("grande");

    grande.onclick = function() {
        tam.innerText = "Grande";
        mapaT = mapaT * 3;
    }
    var mediano = document.getElementById("mediano");
    mediano.onclick = function() {
        tam.innerText = "Mediano";
        mapaT = mapaT * 2;
    }
    var pequeno = document.getElementById("pequeno");
    pequeno.onclick = function() {
        tam.innerText = "Pequeño";
        mapaT = mapaT * 1;
    }

    var fre = document.getElementById("fre");

    var muyfre = document.getElementById("muyfre");
    muyfre.onclick = function() {
        fre.innerText = "Mucha comida";
        frecuencia = 0.95;
    }
    var norfre = document.getElementById("norfre");
    norfre.onclick = function() {
        fre.innerText = "Normal";
        frecuencia = 0.98;
    }
    var pocofre = document.getElementById("pocofre");
    pocofre.onclick = function() {
        fre.innerText = "Poca comida";
        frecuencia = 0.995;
    }
    var nofre = document.getElementById("nofre");
    nofre.onclick = function() {
        fre.innerText = "No se generara comida";
        frecuencia = 1;
    }

    var tim = document.getElementById("tim");

    var tim5 = document.getElementById("tim5");
    tim5.onclick = function() {
        tim.innerText = "5 Minutos";
    }
    var tim10 = document.getElementById("tim10");
    tim10.onclick = function() {
        tim.innerText = "10 Minutos";
    }
    var tim15 = document.getElementById("tim15");
    tim15.onclick = function() {
        tim.innerText = "15 Minutos";
    }
    var timI = document.getElementById("timI");
    timI.onclick = function() {
        tim.innerText = "Indefinido";
    }

    jugar.onclick = function() {
        var nombre = document.getElementById("nombre").value;
        var nj = document.getElementById("nombreJuego");
        var te = document.createElement("p");
        te.innerText = nombre;
        nj.appendChild(te);
        nj.setAttribute('class', 'nj');
        var hx1 = document.getElementById("hx1");
        var menu = document.getElementById("menu");
        var cover = document.getElementById("cover");
        hx1.setAttribute('class', 'hidden');
        menu.setAttribute('class', 'hidden');
        cover.setAttribute('class', 'hidden');
        main();
    }
}

function mousePos() {
    var e = window.event;
    mouseX = e.clientX;
    mouseY = e.clientY;
}

function main() {

    comida.size = scale;
    var game = new gameEngine();
    worldPos = new game.vector2d();
    ball = new game.vector2d(game.centerX, game.centerY);
    ball.size = scale;
    ball.speed = scale / 10;
    ball.color = "#FFDA00";
    ball.draw = function() {
        game.circle(ball.x, ball.y, ball.size, ball.color);
    };

    var map = createMap(mapaT);

    function createMap(size, food) {
        var result = [];
        for (var x = 0; x < size; x++) {
            result.push([]);
            for (var y = 0; y < size; y++) {
                let posible = Math.random();
                if (posible > frecuencia) {
                    result[x].push("food");
                } else {
                    result[x].push("land");
                }
            }
        }
        return result;
    }
    var valu = 0;

    function mapa(map) {
        game.clear();

        for (var x = 0; x < mapaT; x++) {
            var posX = x * scale;
            for (var y = 0; y < mapaT; y++) {
                var posY = y * scale;
                if (map[x][y] == "land") {
                    game.image(grass, posX - 2 + worldPos.x, posY - 2 + worldPos.y, comida.size, comida.size);
                } else {
                    game.image(grass, posX - 2 + worldPos.x, posY - 2 + worldPos.y, comida.size, comida.size);

                    if (valu == 0) {
                        comidaPos.push([posX, posY]);
                    }
                }
            }
        }
        valu = 1;
        for (var h = 0; h < comidaPos.length; h++) {

            var xPosition = comidaPos[h][0] + worldPos.x;
            var yPosition = comidaPos[h][1] + worldPos.y;
            game.image(hongo, xPosition, yPosition, comida.size, comida.size);
            if (xPosition > game.centerX - ball.size && xPosition < game.centerX + ball.size) {
                if (yPosition > game.centerY - ball.size && yPosition < game.centerY + ball.size) {
                    console.log("Hum..");
                    ball.size += 5;
                    document.getElementById("puntos").innerHTML = ball.size;
                    comidaPos.splice(h, 1);
                }
            }
        }
    }

    render();

    /*setInterval(function() {
        comida.size += 1;
    }, 100);
*/
    function render() {
        mapa(map);
        if (mouseX > ball.x) {
            if (worldPos.x > (-mapaT * scale) + game.centerX + ball.size) {
                worldPos.x -= ball.speed;
            }

        }
        if (mouseY > ball.y) {
            if (worldPos.y > (-mapaT * scale) + game.centerY + ball.size) {
                worldPos.y -= ball.speed;
            }
        }
        if (mouseX < ball.x) {
            if (worldPos.x < game.centerX - ball.size) {
                worldPos.x += ball.speed;
            }
        }
        if (mouseY < ball.y) {
            if (worldPos.y < game.centerY - ball.size) {
                worldPos.y += ball.speed;
            }

        }
        ball.draw();
        requestAnimationFrame(render);
    }

}