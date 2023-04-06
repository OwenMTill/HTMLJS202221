//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var ball;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject(0, canvas.height/2, 20, 150, "#660099");
	ball = new GameObject();
	ball.width = 50;

	ball.vx = 10;
	ball.vy = 10;
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//Move the Player to the right
	if(s)
	{
		console.log("Moving Down");
		player.y += 10;
	}
	if(w)
	{
		console.log("Moving Up");
		player.y += -10;
	}
	
	if(player.y < 0 + player.height/2)
	{
		player.y = player.height/2
	}

	if(player.y > canvas.height - player.height/2)
	{
		player.y = canvas.height - player.height/2
	}
	ball.x += ball.vx;
	ball.y += ball.vy;

	if(ball.x > canvas.width - ball.width/2)
	{w
		ball.x = canvas.width - ball.width/2;
		ball.vx = -ball.vx;
	}
	if(ball.y < ball.width/2)
	{
		ball.y = ball.width/2;
		ball.vy = -ball.vy;
	}
	if(ball.y > canvas.height - ball.width/2)
	{
		ball.y = canvas.height - ball.width/2;
		ball.vy = -ball.vy;
	}

	if (ball.hitTestObject(player)){
		ball.x = player.width/2 + ball.width/2;
		ball.vx = -ball.vx;
	}
	
	if (ball.x < 0 - ball.width/2)
	{
		ball.x = canvas.width/2;
		ball.y = canvas.height/2;
	}

	//Update the Screen
	player.drawRect();
	ball.drawCircle();
}

