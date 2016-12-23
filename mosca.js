"use strict";
window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		bees = [], 
		numBees = 50;

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

			context.drawImage(img, width / 2 + x, height / 2 + y , 50, 50);
			context.fill();
		}
	}

	for(var i = 0; i < numBees; i += 1) {
		bees.push(bee.create());
	}


	draw();

	function draw() {
		context.clearRect(0, 0, width, height);
		for(var i = 0; i < numBees; i += 1) {
			bees[i].update();
		}
		requestAnimationFrame(draw);
	}


}