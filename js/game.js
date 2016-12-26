"use strict";

window.onload = main;
window.onmousemove = mousePos;
window.onwheel = mouseScroll;

var mouseX = 0,
    scale = 50,
    mouseY = 0,
    map = [],
    mapaT = 50,
    amountFood = 10,
    ball,
    comida = {},
    worldPos;

function mouseScroll() {
    var e = window.event;

    if (e.deltaY < 0) {
        scale += 5;
    } else {
        scale -= 5;
    }
    ball.size = scale;
    comida.size = scale;
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
                if (posible > 0.99) {
                    result[x].push("food");
                } else {
                    result[x].push("land");
                }
            }
        }
        return result;
    }
    var valu = 0;
    var comidaPos = [];

    function mapa(map) {
        game.clear();

        for (var x = 0; x < mapaT; x++) {
            var posX = x * scale;
            for (var y = 0; y < mapaT; y++) {
                var posY = y * scale;
                if (map[x][y] == "land") {
                    game.rect(posX - 2 + worldPos.x, posY - 2 + worldPos.y, scale - 1, scale - 1, "#cfc");
                } else {
                    game.rect(posX - 2 + worldPos.x, posY - 2 + worldPos.y, scale - 1, scale - 1, "#cfc");
                    if (valu == 0) {
                        comidaPos.push([posX, posY]);

                        console.log("1Hum..");
                    }
                }
            }
        }
        valu = 1;
        //console.log(comidaPos);
        for (var h = 0; h < comidaPos.length; h++) {

            var xPosition = comidaPos[h][0] + (scale / 2) - 2 + worldPos.x;
            var yPosition = comidaPos[h][1] + (scale / 2) - 2 + worldPos.y;

            game.circle(xPosition, yPosition, comida.size / 2, "#ff5959");

            if (xPosition > game.centerX - 50 && xPosition < game.centerX + 50) {
                if (yPosition > game.centerY - 50 && yPosition < game.centerY + 50) {
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
            worldPos.x -= ball.speed;
        }
        if (mouseY > ball.y) {
            worldPos.y -= ball.speed;
        }
        if (mouseX < ball.x) {
            worldPos.x += ball.speed;
        }
        if (mouseY < ball.y) {
            worldPos.y += ball.speed;
        }
        ball.draw();
        requestAnimationFrame(render);
    }

}