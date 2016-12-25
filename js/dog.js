window.onload = main;

function main() {
    var cuadro = document.createElement('canvas');
    cuadro.setAttribute("id", "canvas");
    var w = window.innerWidth;
    var h = window.innerHeight;
    var pj = document.getElementById("pj");
    cuadro.setAttribute("width", w);
    cuadro.setAttribute("height", h);

    document.body.appendChild(cuadro);
    var can = document.getElementById("canvas");

    var ctx = can.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(10, 10);
    var x = 50,
        y = 50;

    ctx.drawImage(pj, x, y);
    console.log(pj);

    document.onmousemove = function(e) {
        cursorX = e.pageX;
        cursorY = e.pageY;
        ctx.clearRect(0, 0, can.width, can.height);
        x = cursorX;
        y = cursorY;
        ctx.drawImage(pj, x, y);
    }

    document.addEventListener('keypress', function(event) {
        var nameKey = event.key;

        if (nameKey == 'Control') {
            return;
        }

        if (nameKey == "w") {
            ctx.clearRect(0, 0, can.width, can.height);
            y -= 5;
            ctx.drawImage(pj, x, y);
        } else if (nameKey == "s") {
            ctx.clearRect(0, 0, w, h)
            y += 5;
            ctx.drawImage(pj, x, y);
        } else if (nameKey == "a") {
            ctx.clearRect(0, 0, w, h);
            x -= 5;
            ctx.drawImage(pj, x, y);

        } else if (nameKey == "d") {
            ctx.clearRect(0, 0, w, h)
            x += 5;
            ctx.drawImage(pj, x, y);
        }
    })
}