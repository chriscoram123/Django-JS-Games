/* 
 GameOne.js - Javascript functions for HTML/JS Game One
 Created by: Christopher S Coram
 Created on: 10 - 11 - 2019 / 12:25 PM
*/

/*
----------------------------------------------------------------------
START GAME ONE
*/

// Onclick sets / runs game
// Setup canvas...
var canvas = document.getElementById("canvasOne");
var ctx = canvas.getContext("2d");
//...
// Game object variables...
// x y speed, width height, and radius values for moving ball
var x = canvas.width/2;
var y = canvas.height-30;
var speedX = 2;
var speedY = -2;
var ballRadius = 15;

// Values for paddle object
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) / 2;
var leftPressed = false;
var rightPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}


// Id click for popup one
var popup = document.getElementById("myPopUpOne");
var btn = document.getElementById("clickOne");
var span = document.getElementsByClassName("closeOne")[0];
btn.onclick = function() {
	alert("WARNING: ")
   
	popup.style.display = "block";

	///////////////////////////////
    ///// GAME LOOP FUNCTIONS /////
    ///////////////////////////////
    /* 
    Draws object on canvas. Also gives object the ability
	to change it's coordinates by two frames per second. -- update
	*/

	// Ball on canvas
	function drawBall() {
		ctx.beginPath();
		ctx.arc(x,y,ballRadius,0,Math.PI*2);
		ctx.fillStyle = "#0095DD";
		ctx.fill();
		ctx.closePath();
        // Collision conditions for left wall, right wall, top wall
        if(x + speedX > canvas.width-ballRadius || x + speedX < ballRadius) {
        	speedX = -speedX;
        }
        if(y + speedY < ballRadius) {
        	speedY = -speedY;
        }
        else if(y + speedY > canvas.height-ballRadius) {
        	if(x > paddleX && x < paddleX + paddleWidth) {
        		speedY = -speedY
        	}
        	else {
        		alert("GAME OVER");
        		document.location.reload();
        		clearInterval(interval);
        	}
        }
	}

    // Objects on canvas
	function objects() {
		// Paddle objects
		ctx.beginPath();
		ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
		ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();

        if(rightPressed) {
        paddleX += 7;
        if (paddleX + paddleWidth > canvas.width) {
            paddleX = canvas.width - paddleWidth;
          }
	    }
	    else if(leftPressed) {
	        paddleX -= 7;
	        if (paddleX < 0) {
	            paddleX = 0;
	        }
	    }

	    // Ball movement
	    x += speedX;
	    y += speedY;
	}

    // Draws all objects on canvas
	function draw() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        drawBall();
        objects();
    }
    
    // Interval variable
    var interval = setInterval(draw, 10);
}

span.onclick = function() {
	popup.style.display = "none";
}
window.onclick = function() {
	if(event.target == popup1) {
		popup1.style.display = "none";
		// exit game, window onclick...
	}
}	

/*
END GAME ONE
----------------------------------------------------------------------
*/