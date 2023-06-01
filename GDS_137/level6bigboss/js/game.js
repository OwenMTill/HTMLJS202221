	//----------------------------------------------------------Instructions------------------------------------------------
	//---------------------In this assignment you will draw a lazy version of the "matrix"----------------------------------
	//---------------------You will recalculate some particles positions and colors when they move off screen---------------
	//---------------------Follow the commented instructions below to complete this assignment------------------------------

var canvas;
var context;
var timer;
var interval;
var player;
var score;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	var amount = 5;
	var score = 0;
	var particles = [];
	var particles2 = [];
	var colors = ["#00ff00", "#ff0000", "#ffff00"];
	
	playerHit = function()
	{
	player.color = "#ffff00";
	}
	player = new GameObject({x:canvas.width/2, y:canvas.height - 100, width:75, height:75});
	player.color = colors[2];
	for(var i = 0; i < amount; i++)
	{
		particles[i] = new GameObject({width:10, height:10});
		
		particles[i].color = colors[0];

		particles[i].width = 20;
		particles[i].height = 20;
	
		particles[i].x = Math.random() * canvas.width;
		particles[i].y = Math.random() * canvas.height;
		particles[i].vy = Math.random() * 4 + 5;
	}

	for(var i = 0; i < amount; i++)
	{
		particles2[i] = new GameObject({width:10, height:10});
		
		particles2[i].color = colors[1];

		particles2[i].width = 20;
		particles2[i].height = 20;
	
		particles2[i].x = Math.random() * canvas.width;
		particles2[i].y = Math.random() * canvas.height;
		particles2[i].vy = Math.random() * 4 + 5;
	}

	function rand(low, high)
	{
		return Math.random() * (high-low) + low;
	}
	
	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	var colorChangeGreenTimer;
	var colorChangeRedTimer;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{	
	context.clearRect(0,0,canvas.width, canvas.height);	
	

	if(a)
	{
		player.vx += -player.ax * player.force;

	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}

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
	player.vx *= fX;
	player.vy *= fY;

	player.x += Math.round(player.vx);

	player.drawRect();

	for(var p = 0; p < particles.length; p++)
	{	
		particles[p].x += particles[p].vx;
		particles[p].y += particles[p].vy;
			
		//-------------------------------------------------INSTRUCTIONS----------------------------------------------------------
			//If a particle moves off the bottom of the screen do the following:
			//	1. reset it's y to the top of the screen - its height
			if (particles[p].y > canvas.height)
			{
			particles[p].y = 0;
			particles[p].vy = rand(5, 8);
			particles[p].x = Math.random() * canvas.width;
			}
			//	2. re-calculate it's vy to be a random number between 5 and 15
			//  3. reset its color randomly to one of the colors in the "colors" array
			//     (Hint: The code to do this is already written above)
		//-------------------------------------------------------------------------------------------------------------------------
		
			if(particles[p].hitTestObject(player))
			{
				particles[p].y = -100;
				particles[p].x = Math.random() * canvas.width;
				particles[p].vy = rand(5, 8);
				score++;
				player.color = colors[0];
				setTimeout(playerHit, 500);
			}

		particles[p].drawRect();
	}

	for(var p = 0; p < particles.length; p++)
	{	
		particles2[p].x += particles2[p].vx;
		particles2[p].y += particles2[p].vy;
			
		//-------------------------------------------------INSTRUCTIONS----------------------------------------------------------
			//If a particle moves off the bottom of the screen do the following:
			//	1. reset it's y to the top of the screen - its height
			if (particles2[p].y > canvas.height)
			{
			particles2[p].y = 0;
			particles2[p].vy = rand(5, 8);
			particles2[p].x = Math.random() * canvas.width;
			}

			if(particles2[p].hitTestObject(player))
			{
				for (i = 0; i < particles.length; i++)
				{
				particles[i].y = -100;
				particles[i].vy = rand(5, 8);
				particles[i].x = Math.random() * canvas.width;
				particles2[i].y = -100;
				particles2[i].x = Math.random() * canvas.width;
				particles2[i].vy = rand(5, 8);
				}
				score = 0;
				player.color = colors[1];
				setTimeout(playerHit, 500);
			}
			//	2. re-calculate it's vy to be a random number between 5 and 15
			//  3. reset its color randomly to one of the colors in the "colors" array
			//     (Hint: The code to do this is already written above)
		//-------------------------------------------------------------------------------------------------------------------------
		
		particles2[p].drawCircle();
		context.font = "15px Arial black";
		context.fillStyle = "black";
		context.fillText("Score: " + score , 50, 50);
	}
	
	

}

