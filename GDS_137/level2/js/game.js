//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject(0, canvas.height/2, 20, 150, "#660099");

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
		player.y += 4;
	}
	if(w)
	{
		console.log("Moving Up");
		player.y += -4;
	}
	
	if(player.y < 0 + player.height/2)
	{
		player.y = player.height/2
	}
	
	if(player.y > canvas.height - player.height/2)
	{
		player.y = canvas.height - player.height/2
	}
	//Update the Screen
	player.drawRect();
}

