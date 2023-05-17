//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var gun;
var bullet;
var timer;
var interval;
var explosion;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:150});
	gun = new GameObject();
	bullet = new GameObject();
	explosion = new GameObject();
	
	bullet.color = "cyan";
	gun.width = 60;
	bullet.width = 15;
	gun.height = 20;
	bullet.height = 15;
	gun.x = player.x + 50;
	bullet.x = 1000000;
	gun.y = player.y - 10;
	bullet.y = 1000000;
	gun.color = "black";
	explosion.color = "orange";
	explosion.width = 20;
	explosion.height = 20;
	explosion.x = 100000;
	explosion.y = 100000;

	platform0 = new GameObject();
		platform0.width = 150;
		platform0.x = platform0.width/2;
		platform0.y = player.y +player.height/2 + platform0.height/2;
		platform0.color = "#66ff33";
		
	
	platform1 = new GameObject();
		platform1.width = 465;
		platform1.x = canvas.width - platform1.width/2;
		platform1.y = player.y +player.height/2 + platform1.height/2;
		platform1.color = "#66ff33";
		
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);
	var shootTimer;
	var dashTimer;
	var specialTimer;
	var specialTimer2;

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
		gun.vy += player.jumpHeight;
	}

	if(a)
	{
		player.vx += -player.ax * player.force;
		gun.x = player.x - 50;
		gun.vx += -player.ax * player.force;

	}
	if(d)
	{
		player.vx += player.ax * player.force;
		gun.x = player.x + 50;
		gun.vx += player.ax * player.force;
	}
	if (!upArrow)
	{
		gun.angle = 0;
	}
	if (!downArrow)
	{
		gun.angle = 0;
	}
	if(upArrow && gun.x == player.x + 50)
	{
		gun.angle = -45;
	}
	if(downArrow && gun.x == player.x + 50)
	{
		gun.angle = 45;
	}
	if(upArrow && gun.x == player.x - 50)
	{
		gun.angle = 45;
	}
	if(downArrow && gun.x == player.x - 50)
	{
		gun.angle = -45;
	}

	if(space && gun.angle == 0 && gun.x == player.x + 50 && bullet.bulletShoot == false)
	{
		bullet.bulletShoot = true;
		bullet.x = gun.x;
		bullet.y = gun.y;
		bullet.vx = 20;
		bullet.vy = 0;
		clearTimeout(shootTimer);
		shootTimer = setTimeout(timedShot, 500);
	}
	
	if(space && gun.angle == 0 && gun.x == player.x - 50 && bullet.bulletShoot == false)
	{
		bullet.bulletShoot = true;
		bullet.x = gun.x;
		bullet.y = gun.y;
		bullet.vx = -20;
		bullet.vy = 0;
		clearTimeout(shootTimer);
		shootTimer = setTimeout(timedShot, 500);
	}

	if(space && downArrow && gun.x == player.x + 50 && bullet.bulletShoot == false)
	{
		bullet.bulletShoot = true;
		bullet.x = gun.x;
		bullet.y = gun.y;
		bullet.vx = 20;
		bullet.vy = 20;
		clearTimeout(shootTimer);
		shootTimer = setTimeout(timedShot, 500);
	}

	if(space && downArrow && gun.x == player.x - 50 && bullet.bulletShoot == false)
	{
		bullet.bulletShoot = true;
		bullet.x = gun.x;
		bullet.y = gun.y;
		bullet.vx = -20;
		bullet.vy = 20;
		clearTimeout(shootTimer);
		shootTimer = setTimeout(timedShot, 500);
	}

	if(space && upArrow && gun.x == player.x + 50 && bullet.bulletShoot == false)
	{
		bullet.bulletShoot = true;
		bullet.x = gun.x;
		bullet.y = gun.y;
		bullet.vx = 20;
		bullet.vy = -20;
		clearTimeout(shootTimer);
		shootTimer = setTimeout(timedShot, 500);
	}

	if(space && upArrow && gun.x == player.x - 50 && bullet.bulletShoot == false)
	{
		bullet.bulletShoot = true;
		bullet.x = gun.x;
		bullet.y = gun.y;
		bullet.vx = -20;
		bullet.vy = -20;
		clearTimeout(shootTimer);
		shootTimer = setTimeout(timedShot, 500);
	}

	if(e && player.canDash && gun.x == player.x + 50)
	{
		player.vx += 60;
		player.canDash = false;
		clearTimeout(dashTimer);
		dashTimer = setTimeout(timedDash, 1000);
	}
	if(e && player.canDash && gun.x == player.x - 50)
	{
		player.vx -= 60;
		player.canDash = false;
		clearTimeout(dashTimer);
		dashTimer = setTimeout(timedDash, 1000);
	}
	if(q && explosion.canSpecial == true)
	{
		explosion.x = player.x;
		explosion.y = player.y;
		explosion.width = 1000;
		explosion.height = 1000;
		explosion.canSpecial = false;
		clearTimeout(specialTimer2);
		specialTimer2 = setTimeout(specialLength, 2000);
		clearTimeout(specialTimer);
		specialTimer = setTimeout(timedSpecial, 20000);
	}

	bullet.x += bullet.vx;
	bullet.y += bullet.vy;
	

	player.vx *= fX;
	gun.vx *= fX;
	player.vy *= fY;
	gun.vy *= fY;
	
	player.vy += gravity;
	gun.vy += gravity;
	
	player.x += Math.round(player.vx);
	gun.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	gun.y += Math.round(player.vy);
	

	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		gun.y--;
		player.vy = 0;
		gun.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		gun.x++;
		player.vx = 0;
		gun.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		gun.x--;
		player.vx = 0;
		gun.vx = 0;
	}
	
	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		gun.y--;
		player.vy = 0;
		gun.vy = 0;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		gun.x++;
		player.vx = 0;
		gun.vx = 0;
	}
	while(platform1.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		gun.x--;
		player.vx = 0;
		gun.vx = 0;
	}
	
	
	//---------Objective: Jump the gap to get the blue pearl----------------------------------------------------------------------------------------------------
	//---------Call the players drawDebug() function to see where his current hitpoints are
	//---------Change the objects in the hitTestPoint function so that the player has a hitpoint on his bottom left and bottom right.
	//---------You will need to manually draw these new points if you want to see them for debugging purposes.
	
	/*-------------------------------------------------------------------------------------------------------------------------------------
				NOTE: An unnecessary but great alternative to simply changing the object literals in the hitTestPoint 
				would be to create actual bottomRight() and bottomLeft() methods in your GameObject. However this is not necessary to complete this level. 
				You simply need to change the values of the x and y properties of the object literals listed below to find the solution.
	*/

	while(platform0.hitTestPoint({x:player.left().x, y:player.bottom().y}) && player.vy >=0)
	{
		player.y--;
		gun.y--;
		player.vy = 0;
		gun.vy = 0;
		player.canJump = true;
	}
	
	while(platform1.hitTestPoint({x:player.right().x, y:player.bottom().y}) && player.vy >=0)
	{
		player.y--;
		gun.y--;
		player.vy = 0;
		gun.vy = 0;
		player.canJump = true;
	}
	

	explosion.drawCircle();
	platform0.drawRect();
	platform1.drawRect();
	bullet.drawCircle();
	gun.drawRect();
	player.drawRect();
	

	context.font = "15px Arial black";
	context.fillStyle = "black";
	context.fillText("Press Space to Shoot", 50, 50);
	context.font = "15px Arial black";
	context.fillStyle = "black";
	context.fillText("Press Up and Down Arrows to Aim Up and Down 45 Degrees", 50, 100);
	context.fillText("Press A and D to Aim Left and Right", 50, 150);
	context.font = "15px Arial black";
	context.fillStyle = "black";
	context.fillText("Press E to dash", 50, 200);
	context.font = "15px Arial black";
	context.fillStyle = "black";
	context.fillText("Press Q to make an explosion AoE attack for 2 seconds(only once every 20 seconds)", 50, 250);
}


function timedShot()
{
	bullet.bulletShoot = false;
}

function timedDash()
{
	player.canDash = true;
}

function timedSpecial()
{
	explosion.canSpecial = true;
}

function specialLength()
{
	explosion.width = 20;
	explosion.height = 20;
	explosion.x = 10000;
}

