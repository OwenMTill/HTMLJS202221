var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var timer = requestAnimationFrame(main);
var gameOver = true;
var gameState = []
var currentState = 0;

//score variables
var score = 0;
var highScore = 0;

//ship variables
var ship = new PlayerShip();

var shipSprite = new Image();
shipSprite.src = "images/Spaceship.png";
var asteroidSprite = new Image();
asteroidSprite.src = "images/Asteroid.png";
var menuImage = new Image();
menuImage.src = "images/MenuBackground.png"


function PlayerShip(){
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.width = 20;
    this.height = 20;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.vx = 0;
    this.vy = 0;

    this.drawShip = function(){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = "red";
        ctx.drawImage(shipSprite, this.width - 33, this.height - 33, 23, 23);
        ctx.beginPath();
        //ctx.moveTo(0, -10);
        //ctx.lineTo(10, 10);
        //ctx.lineTo(-10, 10);
        //ctx.lineTo(0, -10);
        //change to horizontal
        ctx.moveTo(10, 0);
        ctx.lineTo(-10, 10);
        ctx.lineTo(-10, -10);
        ctx.lineTo(10, 0);
        ctx.closePath();
        //ctx.fill();
        ctx.restore();
    }

    this.moveShip = function(){
        this.x += this.vx;
        this.y += this.vy;

        //add boundaries to canvas
        //bottom boundary
        if(this.y > canvas.height - this.height/2 - 5){
            this.y = canvas.height - this.height/2 - 5;
            this.vy = 0;
        }
        //top boundary
        if(this.y < this.height/2 + 5){
            this.y = this.height/2 + 5;
            this.vy = 0;
        }
        //right boundary
        if(this.x > canvas.width - this.width/2 - 5){
            this.x = canvas.width - this.width/2 - 5;
            this.vx = 0;
        }
        //left boundary
        if(this.x < this.width/2 + 5){
            this.x = this.width/2 + 5;
            this.vx = 0;
        }
    }

}

document.addEventListener("keydown", pressKeyDown);
document.addEventListener("keyup", pressKeyUp);

function pressKeyDown(e){
    if(!gameOver){
         //wasd keys
    if(e.keyCode == 87){
        //ship goes up
        ship.up = true;
    }
    if(e.keyCode == 65){
        //ship goes left
        ship.left = true;
    }
    if(e.keyCode == 68){
        //ship goes right
        ship.right = true;
    }
    if(e.keyCode == 83){
        //ship goes down
        ship.down = true;
    }
    //arrow keys
    if(e.keyCode == 38){
        //ship goes up
        ship.up = true;
    }
    if(e.keyCode == 37){
        //ship goes left
        ship.left = true;
    }
    if(e.keyCode == 39){
        //ship goes right
        ship.right = true;
    }
    if(e.keyCode == 40){
        //ship goes down
        ship.down = true;
    }
    }
    if(gameOver){
        if(e.keyCode == 32){
            if(currentState == 2){
                //from the game over screen
                currentState = 0;
                numAsteroids = 20;
                asteroids = [];
                score = 0;
                gameStart();
                main();
            }
            else{
                //from the main menu
                gameStart();
                gameOver = false;
                currentState = 1;
                scoreTimer();
                main();
            }
        }
    }
   
}

function pressKeyUp(e){
    if(!gameOver){
        //wasd keys
    if(e.keyCode == 87){
        //ship goes up
        ship.up = false;
    }
    if(e.keyCode == 65){
        //ship goes left
        ship.left = false;
    }
    if(e.keyCode == 68){
        //ship goes right
        ship.right = false;
    }
    if(e.keyCode == 83){
        //ship goes down
        ship.down = false;
    }
    //arrow keys
    if(e.keyCode == 38){
        //ship goes up
        ship.up = false;
    }
    if(e.keyCode == 37){
        //ship goes left
        ship.left = false;
    }
    if(e.keyCode == 39){
        //ship goes right
        ship.right = false;
    }
    if(e.keyCode == 40){
        //ship goes down
        ship.down = false;
    }
    }
    
}

//variable for asteroid creation
var numAsteroids = 20;
var asteroids = [];


//class for asteroid objects
function Asteroid(){
    this.radius = randomRange(15, 2);
    this.x = randomRange(canvas.width - this.radius, this.radius) + canvas.width;
    this.y = randomRange(canvas.height - this.radius, this.radius);
    this.vx = randomRange(10, 5);
    this.color = "white";

    this.drawAsteroid = function(){
        ctx.drawImage(asteroidSprite, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
    }
    /* this.drawAsteroid = function(){
        ctx.save();
        ctx.drawImage(asteroidSprite, this.x, this.y, this.radius);
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
    */

}




function gameStart(){
//creates the first asteroids
    for(var i = 0; i < numAsteroids; i++){
        asteroids[i] = new Asteroid();
    }
    //create a new instance of player ship
    ship = new PlayerShip();
}

//utility functions
function randomRange(high, low){
    return Math.random() * (high-low) + low;
}

function detectCollision(distance, calcDistance){
    return distance < calcDistance;
}

function scoreTimer(){
    if(!gameOver){
        score++;
        if(score % 500 == 0){
            numAsteroids += 10;
            console.log(numAsteroids);
        }

        setTimeout(scoreTimer, 1);
    }
}

scoreTimer();

//asteroid game state machine
//main menu
gameState[0] = function(){
    ctx.save();
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Asteroid Avoider", canvas.width/2, canvas.height/2 -30);
    ctx.font = "15px Arial";
    ctx.fillText("PRESS SPACE TO START", canvas.width/2, canvas.height/2 + 20);
    ctx.restore();
}
//game scene
gameState[1] = function(){
     //draw score to canvas
     ctx.save();
     ctx.font = "15px Arial";
     ctx.fillStyle = "white";
     ctx.fillText("Score: " + score.toString(), canvas.width - 150, 30);
     ctx.restore();
 
     //set up vertical movement
     if(ship.up){
         ship.vy = -7;
     }
     else if(ship.down){
         ship.vy = 7;
     }
     else{
        ship.vy = 0;
     }
     //set up horizontal movement
     if(ship.left){
         ship.vx = -7;
     }
     else if(ship.right){
         ship.vx = 7;
     }
     else{
         ship.vx = -3;
     }
 
     for(var i = 0; i < asteroids.length; i++){
         var dx = ship.x - asteroids[i].x;
         var dy = ship.y - asteroids[i].y;
         var distance = Math.sqrt((dx * dx) + (dy * dy));

         //collision detection
         if(detectCollision(distance, (ship.height/2 + asteroids[i].radius))){
             //alert("hit asteroid game over");
             gameOver = true;
             currentState = 2;
             main();
             return;
         }
 
         if(asteroids[i].x < canvas.width - canvas.width + asteroids[i].radius){
             asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius) + canvas.width;
             asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius);
         }
         //draw the asteroids
         asteroids[i].x -= asteroids[i].vx;
         asteroids[i].drawAsteroid();
     }
 
    //draw ship
    ship.moveShip();
    ship.drawShip();
        
    //check to see if we need more asteroids
    while(asteroids.length < numAsteroids){
    //add and create new asteroids in the array
    asteroids.push(new Asteroid());
    }
}

//game over menu
gameState[2] = function(){
    if(score > highScore){
        //new highscore
        highScore = score;
        ctx.save();
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Game Over! Your score was: " + score.toString(), canvas.width/2, canvas.height/2 - 50);
        ctx.fillText("New Highscore: " + highScore.toString(), canvas.width/2, canvas.height/2 - 2);
        ctx.font = "20px Arial";
        ctx.fillText("PRESS SPACE TO REPLAY", canvas.width/2, canvas.height/2 + 40);
        ctx.restore();
    }
    else{
        //regular highscore
        ctx.save();
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Game Over! Your score was: " + score.toString(), canvas.width/2, canvas.height/2 - 50);
        ctx.fillText("Highscore: " + highScore.toString(), canvas.width/2, canvas.height/2 - 2);
        ctx.font = "20px Arial";
        ctx.fillText("PRESS SPACE TO REPLAY", canvas.width/2, canvas.height/2 + 40);
        ctx.restore();
    }



}


//main game loop
function main(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    gameState[currentState]();
    
    if(!gameOver){
        timer = requestAnimationFrame(main);
    }



}