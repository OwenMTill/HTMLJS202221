var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main);

var coin = new Image();
coin.src = "images/coin.png";
coin.onload = function(){
    main()
}

function randomRange(high, low){
    return Math.random()*(high - low) + low;
}

//example of GameObject class
function GameObject(){
    //examples of properties in a class
    this.width = randomRange(100, 10);
    this.height = this.width;
    this.radius = randomRange(50, 5);
    this.x = 400;//randomRange(canvas.width - this.radius, 0);
    this.y = 10;//randomRange(canvas.height- this.radius, 0);
    this.vx = randomRange(10, -10);
    this.vy = randomRange(10, -10);
    this.color = `rgb(${randomRange(255,0)}, ${randomRange(255,0)}, ${randomRange(255,0)})`;
    //examples of methods in a class
    this.drawSquare = function(){
        //all the procedures to draw a square go here
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.drawCircle = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
    }
    this.drawImage = function(){
        ctx.drawImage(coin, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
    }

    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;
        //check for top of canvas
        if(this.y < this.radius){
            this.y = this.radius;
            this.vy *= -1;
        }
        //check for bottom of canvas
        if(this.y > canvas.height - this.radius){
            this.y = canvas.height - this.radius;
            this.vy *= -1;
        }
        //check for left side of canvas
        if(this.x < this.radius){
            this.x = this.radius;
            this.vx *= -1;
        }
        //check for right side of canvas
        if(this.x > canvas.width - this.radius){
            this.x = canvas.width - this.radius;
            this.vx *= -1;
        }
    }
}

var circle = new GameObject();
circle.drawCircle();
circle.move();

var circle2 = new GameObject();
circle2.drawCircle();

var circle3 = new GameObject();
circle3.drawCircle();

var numberOfObjects = 1000;

var circles = [];

for(var i = 0; i < numberOfObjects; i++){
    circles[i] = new GameObject();
}

function main(){
    //clear
    ctx.clearRect(0, 0 , canvas.width, canvas.height);

    for(var i = 0; i < circles.length; i++){
        //update
        circles[i].move();
        //draw
        //circles[i].drawCircle();
        circles[i].drawImage();
    }

    timer = requestAnimationFrame(main);
}
main();