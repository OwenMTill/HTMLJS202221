var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var timer = requestAnimationFrame(main);
var x = 300;
var y = 300;
var speedX = 10;
var speedY = 10;
var radius = 50;
var shrek = new Image();
shrek.src = "images/Shrek.png";
shrek.onload = function(){
    main();
}
var bg = new Image();
bg.src = "images/Dreamworks.jpg";
bg.onload = function(){
    main();
}

function main(){
    //clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //drawCircle("blue", x, y, radius);
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(shrek, x - radius, y - radius, 100, 100);
    //update the position of object
    x += speedX;
    y += speedY;
    //create a condition for when the object is off the screen
    createCanvasBoundary(x, canvas.width, radius, "speedX")
    createCanvasBoundary(y, canvas.height, radius, "speedY")
    //update the animation frame
    timer = requestAnimationFrame(main);
}
function drawCircle(color, posX, posY, radius){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(posX, posY, radius, 0, 2 * Math.PI, false)
    ctx.closePath();
    ctx.fill();
}
function createCanvasBoundary(position, canvasSize, objectRadius, direction)
{
    if(position > canvasSize - objectRadius || position < objectRadius){
        if(direction == "speedX"){
            speedX *= -1
        }
        else(
            speedY *= -1
        )
    }
}