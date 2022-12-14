var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main);

var start = 50;
var finish = canvas.width - 50;

var carPos = 2;
var startFuel = randomNumber(canvas.clientWidth, 650);
var fuel = startFuel;
var fuelBarWidth = 300;
var speed = 8;
var gameOver = true;
var carWidth = 100;

//start timer variables
var seconds = 3;
var fps = 60;
var frames = fps;

//game sprites
var carSprite = new Image();
carSprite.src = "images/Miraidon.png";
var background = new Image();
background.src = "images/PokemonBackground.png";

background.onload = function(){
    main();
}



document.addEventListener("keydown", pressSpace);

function pressSpace(e){
    if(e.keyCode == 32 && gameOver){
        gameOver = false;
    }
    if(fuel <= 0 || carPos + carWidth > finish){
        restartGame();
    }
}


function main(){
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    
    if(gameOver){
        //Main Menu Screen
        ctx.save();
        ctx.fillStyle = "black";
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillText("Press Space to Start", canvas.width/2, canvas.height/2);
        ctx.restore();
    }
    else{
        if(!gameOver && seconds > 0){
            runStartTimer();
            drawStartTimer();
        }
        else{
            if(fuel > 0){
                //update the cars position
                carPos += speed;
                fuel -= speed;
            }
        }
        
        
        drawBackground();
        drawStartFinishLines();
        drawCar()
        drawFuelBar();

        if(fuel <= 0 || carPos + carWidth > finish){
            drawResults();
        }
    }
    timer = requestAnimationFrame(main);
}

function drawBackground(){
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}

function drawStartFinishLines(){
    //draw start line
    ctx.fillStyle = "black";
    ctx.fillRect(start, 50, 10, 800);
    //draw finish line
    ctx.fillRect(finish, 50, 10, 800);
}

function drawCar(){
    //draw car
    ctx.fillStyle = "red";
    //ctx.fillRect(carPos, canvas.height/2, 40, 20);
    ctx.drawImage(carSprite, carPos, canvas.height * 3/4 - 65, carWidth, 100);
}

function drawFuelBar(){
    var currentBarWidth = fuelBarWidth * (fuel/startFuel);
    ctx.fillStyle = "black";
    ctx.fillRect(start, 30, fuelBarWidth, 10);
    ctx.font = "25px Arial";
    ctx.fillText("Fuel", start, 25)
    if(fuel > 0){
        ctx.fillStyle = "green";
        ctx.fillRect(start, 30, currentBarWidth, 10);
    }
}

function drawResults(){
    if(carPos + carWidth > finish){
        ctx.save();
        speed = 0;
        ctx.fillStyle = "black";
        ctx.font = "25px Arial";
        ctx.textAlign = "center";
        ctx.fillText("You made it to the finish line... You Win!", canvas.width/2, canvas.height/2);
        ctx.fillText("Press Space to Restart", canvas.width/2, 350);
        ctx.restore();
    }
    else{
        ctx.save();
        ctx.fillStyle = "black";
        ctx.font = "25px Arial";
        ctx.textAlign = "center";
        ctx.fillText("You ran out of fuel... You Lose!", canvas.width/2, canvas.height/2);
        ctx.fillText("Press Space to Restart", canvas.width/2, 350);
        ctx.restore();
    }
}

//utility function
function randomNumber(high, low){
    return Math.round(Math.random() * (high - low) + low);
}

function restartGame(){
    location.reload();
}

function runStartTimer(){
    frames -= 1;
    if(frames < 0){
        frames = fps;
        seconds -= 1;
    }
}

function drawStartTimer(){
    if(Math.floor(seconds) > 0){
        ctx.save();
        ctx.fillStyle = "black";
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillText(seconds, canvas.width/2, canvas.height/2);
        ctx.restore();
    }
    else{
        ctx.save();
        ctx.fillStyle = "black";
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillText("GO!", canvas.width/2, canvas.height/2);
        ctx.restore();
    }


    
}