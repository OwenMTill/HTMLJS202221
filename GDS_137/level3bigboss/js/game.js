//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var ball;
var score = 0;
var frictionX = .85;	
var frictionY = .97;
var gravity = 1;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	
	
	
	//Instantiate the Player
	player = new GameObject(canvas.width/2, canvas.height-50, 250, 40, "#00ffff");
	ball = new GameObject();
	ball.width = 80;
	ball.height = 80;

	ball.force = 2;
	player.force = 2;
	ball.vx = 0;
	ball.vy = 10;
	ball.vy += gravity;
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	//Move the Player to the right
	if(d)
	{	
		player.vx +=  player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	player.vx *= frictionX;
	player.x += player.vx;
	player.x += player.vx;
	if(player.x < 0 + player.width/2)
	{
		player.x = player.width/2
		player.vx = 0;
	}

	if(player.x > canvas.width - player.width/2)
	{
		player.x = canvas.width - player.width/2;
		player.vx = 0;
	}


	ball.x += ball.vx;
	ball.y += ball.vy;

	if(ball.x < ball.width/2)
	{
		ball.x = ball.width/2;
		ball.vx = -ball.vx;
	}
	if(ball.x > canvas.width - ball.width/2)
	{
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
		score = 0;
	}

	if(ball.hitTestObject(player))
    {
        ball.y = player.y - player.height/2 - ball.height/2;
        ball.vy = -ball.vy;
        score++;
        if(ball.x < player.x - player.width/3)
        {
            ball.vy = -35;
            ball.vx = -ball.force*5;
        }
        if(ball.x > player.x - player.width/3 && ball.x < player.x - player.width/6)
        {
            ball.vy = -35;
            ball.vx = -ball.force;
        }
        if(ball.x < player.x + player.width/3 && ball.x > player.x + player.width/6)
        {
            ball.vy = -35;
            ball.vx = ball.force;
        }
        if(ball.x > player.x + player.width/3)
        {
            ball.vy = -35;
            ball.vx = ball.force*5 ;
        }

    }


	player.drawRect();
	ball.drawCircle();
	context.save();
	context.strokeStyle = "black";
	context.beginPath();
	context.moveTo(player.x, player.y);
	context.lineTo(ball.x, ball.y);
	context.closePath();
	context.lineWidth = 1; 
	context.stroke();
	context.restore();

	context.font = "16px Arial";
	context.fillStyle = "#555555"
	context.fillText("Score: " + score, 80, 25);
}

