function gameEngine(width, height) {

    if (width == undefined) {
        width = window.innerWidth;
    }
    if (height == undefined) {
        height = window.innerHeight;
    }

    var lienzo = document.createElement('canvas'),
        ctx = lienzo.getContext('2d'),
        centerX = width / 2,
        centerY = height / 2;

    lienzo.setAttribute('width', width);
    lienzo.setAttribute('height', height);
    document.body.appendChild(lienzo);

    function circle(x, y, radio, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, radio, Math.PI * 2, false);
        ctx.fill();
    }

    function rect(x, y, w, h, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
    }

    function strokeRect(x, y, w, h, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.strokeRect(x, y, w, h);
    }

    function image(img, x, y, w, h) {
        ctx.beginPath();
        ctx.drawImage(img, x, y, w, h);
    }

    function vector2d(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    function clear() {
        ctx.clearRect(0, 0, width, height)
    }

    return {
        circle,
        rect,
        vector2d,
        image,
        clear,
        strokeRect,
        centerX,
        centerY
    };

}