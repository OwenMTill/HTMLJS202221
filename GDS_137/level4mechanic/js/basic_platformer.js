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

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:150});
	gun = new GameObject();
	bullet = new GameObject();
	
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
	

	platform0 = new GameObject();
		platform0.width = 150;
		platform0.x = platform0.width/2;
		platform0.y = player.y +player.height/2 + platform0.height/2;
		platform0.color = "#66ff33";
		
	
	platform1 = new GameObject();
		platform1.width = 575;
		platform1.x = canvas.width -platform1.width/2;
		platform1.y = player.y +player.height/2 + platform1.height/2;
		platform1.color = "#66ff33";
		
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);
	var shootTimer;
	

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
	

	
	platform0.drawRect();
	platform1.drawRect();
	gun.drawRect();
	player.drawRect();
	bullet.drawCircle();
}

function timedShot()
{
	bullet.bulletShoot = false;
}