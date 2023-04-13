//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var player2;
var ball;
var p1Wins = 0;
var p2Wins = 0;
var img = document.getElementById("ric");

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	
	
	
	//Instantiate the Player
	player = new GameObject(0, canvas.height/2, 20, 150, "#ff0000");
	player2 = new GameObject(canvas.width, canvas.height/2, 20, 150, "#006f00");
	ball = new GameObject();
	ball.width = 50;

	ball.vx = -10;
	ball.vy = 0;
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	context.save();
	context.strokeStyle = "yellow";
	context.beginPath();
	context.moveTo(canvas.width/2, 0);
	context.lineTo(canvas.width/2, canvas.height);
	context.closePath();
	context.lineWidth = 3; 
	context.stroke();
	context.restore();

	context.font = "20px Georgia";
	context.textAlign = "center";
	context.fillText("Player 1 | Player 2", canvas.width/2 + 1.5, 50);
	context.font = "15px Georgia";
	context.textAlign = "center";
	context.fillText(p1Wins + " - " + p2Wins, canvas.width/2 + 0.5, 70);

	context.drawImage(img, ball.x - 28, ball.y - 32, ball.width + 15, ball.height/2 + 15);
	//Move the Player to the right
	if(s)
	{
		console.log("Moving Player 1 Down");
		player.y += 10;
	}
	if(w)
	{
		console.log("Moving Player 1 Up");
		player.y += -10;
	}
	if (upArrow)
	{
		console.log("Moving Player 2 Up")
		player2.y += -10;
	}
	if (downArrow)
	{
		console.log("Moving Player 2 Down")
		player2.y += 10;
	}

	if(player.y < 0 + player.height/2)
	{
		player.y = player.height/2
	}

	if(player.y > canvas.height - player.height/2)
	{
		player.y = canvas.height - player.height/2;
	}

	if(player2.y < 0 + player2.height/2)
	{
		player2.y = player2.height/2
	}

	if(player2.y > canvas.height - player2.height/2)
	{
		player2.y = canvas.height - player2.height/2;
	}

	ball.x += ball.vx;
	ball.y += ball.vy;

	/*if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width - ball.width/2;
		ball.vx = -ball.vx;
	}
	*/
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
		ball.x = player.x + player.width/2 + ball.width/2;
		ball.vx = -ball.vx;
		if(ball.y < player.y - player.height/6)
     		{

       			ball.vy = -5;
     		}
		if(ball.y > player.y + player.height/6)
     		{

       			ball.vy = 5;
     		}	
	}

	if (ball.hitTestObject(player2)){
		ball.x = player2.x - player2.width/2 - ball.width/2;
		ball.vx = -ball.vx;
		if(ball.y < player2.y - player2.height/6)
     		{

       			ball.vy = -5;
     		}
		if(ball.y > player2.y + player2.height/6)
     		{

       			ball.vy = 5;
     		}	
	}



	
	if (ball.x < 0 - ball.width/2)
	{
		ball.x = canvas.width/2;
		ball.y = canvas.height/2;
		p2Wins += 1;
		console.log(p2Wins);
	}
	if (ball.x > canvas.width + ball.width/2)
	{
		ball.x = canvas.width/2;
		ball.y = canvas.height/2;
		p1Wins += 1;
		console.log(p1Wins);
	}

	//Update the Screen
	player.drawRect();
	player2.drawRect();
	//ball.drawCircle();
}

