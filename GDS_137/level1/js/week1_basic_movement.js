//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var ball;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	
	//Instantiate the Player
	ball = new Ball();
	ball.vx = 10;
	ball.vy = 10;
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player
	ball.x += ball.vx;
	ball.y += ball.vy;

	if(ball.x < ball.width/2)
	{
		ball.x = ball.width/2
		ball.vx = -ball.vx;
		ball.color = "#ff0000";
	}
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width - ball.width/2;
		ball.vx = -ball.vx;
		ball.color = "#00ff00";
	}
	if(ball.y < ball.width/2)
	{
		ball.y = ball.width/2
		ball.vy = -ball.vy;
		ball.color = "#0000ff";
	}
	if(ball.y > canvas.height - ball.width/2)
	{
		ball.y = canvas.height - ball.width/2
		ball.vy = -ball.vy;
		ball.color = "#03051f";
	}
	
	//Update the Screen
	ball.draw();
}
