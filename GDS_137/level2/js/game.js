var canvas;
var context;
var timer;
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");	
var interval = 1000/60;
timer = setInterval(animate, interval);
var player1 = new GameObject();


function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	player1.drawRect();
}