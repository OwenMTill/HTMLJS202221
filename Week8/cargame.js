var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main);

var start = 50;
var finish = 750;

var carPos = 2;
var startFuel = randomNumber(canvas.clientWidth, 600);
var fuel = startFuel;
var fuelBarWidth = 300;
var speed = 10;
var gameOver = true;

//start timer variables
var seconds = 3;
var fps = 60;
var frames = fps;

document.addEventListener("keydown", pressSpace);

function pressSpace(e){
    if(e.keyCode == 32 && gameOver){
        gameOver = false;
    }
    if(fuel <= 0){
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
        

        drawStartFinishLines();
        drawCar()
        drawFuelBar();

        if(fuel <= 0 || carPos + 40 > finish){
            drawResults();
        }
    }
    timer = requestAnimationFrame(main);
}

function drawStartFinishLines(){
    //draw start line
    ctx.fillStyle = "black";
    ctx.fillRect(start, 50, 10, 500);
    //draw finish line
    ctx.fillRect(finish, 50, 10, 500);
}

function drawCar(){
    //draw car
    ctx.fillStyle = "red";
    ctx.fillRect(carPos, canvas.height/2, 40, 20);
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
    if(carPos + 40 > finish){
        ctx.save();
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