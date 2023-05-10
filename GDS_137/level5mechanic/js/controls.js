var w = false;
var a = false;
var s = false;
var d = false;
var upArrow = false;
var downArrow = false;
var space = false;
var e = false;

document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

function press(f)
{
	//---This logs key codes into the browser's console.
	console.log(f.keyCode);
	
	if(f.keyCode == 87)
	{
		w = true;
	}
	if(f.keyCode == 65)
	{
		a = true;
	}
	if(f.keyCode == 83)
	{
		s = true;
	}
	if(f.keyCode == 68)
	{
		d = true;
	}
	if(f.keyCode == 38)
	{
		upArrow = true;
	}
	if(f.keyCode == 40)
	{
		downArrow = true;
	}
	if(f.keyCode == 32)
	{
		space = true;
	}
	if(f.keyCode == 69)
	{
		e = true;
	}

}

function release(f)
{
	//---This logs key codes into the browser's console.
	//console.log(e.keyCode);
	
	if(f.keyCode == 87)
	{
		w = false;
	}
	if(f.keyCode == 65)
	{
		a = false;
	}
	if(f.keyCode == 83)
	{
		s = false;
	}
	if(f.keyCode == 68)
	{
		d = false;
	}
	if(f.keyCode == 38)
	{
		upArrow = false;
	}
	if(f.keyCode == 40)
	{
		downArrow = false;
	}
	if(f.keyCode == 32)
	{
		space = false;
	}
	if(f.keyCode == 69)
	{
		e = false;
	}
}
