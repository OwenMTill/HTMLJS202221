var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// ctx.font = "30px Arial";
// ctx.fillText("Welcome to Rock, Paper Scissors!", 275, 50);
//create instances for images RPS
var fire = new Image();
var water = new Image();
var grass = new Image();
var hfire = new Image();
var hwater = new Image();
var hgrass = new Image();
var winCount = 0;
var lossCount = 0;
var result = "Select a button from above to choose";

fire.src = "RPSimages/images/fire.png";
water.src = "RPSimages/images/water.png";
grass.src = "RPSimages/images/grass.png";
hfire.src = "RPSimages/images/hfire.png";
hwater.src = "RPSimages/images/hwater.png";
hgrass.src = "RPSimages/images/hgrass.png";

hgrass.onload = function(){
    draw(fire, water, grass, fire, water, grass);
}
document.addEventListener("keydown", keyPressDown);
document.addEventListener("keyup", keyPressUp);

var gameOver = true;

function keyPressDown(e){
    console.log(e.keyCode);
}

function keyPressUp(e){
    console.log(e.keyCode);
    if(e.keyCode == 32){
        gameOver = false;
        draw(fire, water, grass, fire, water, grass);
    }
}


function draw(fire, water, grass, cfire, cwater, cgrass){
    if(gameOver == true){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "black";
        ctx.fillText("Welcome, Press Space to Play", canvas.width/2, 50);
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText("Player Choices", canvas.width/2, 50);
    ctx.drawImage(fire, canvas.width/2 - fire.width/2 - 200, 150);
    ctx.drawImage(water, canvas.width/2 - water.width/2, 150);
    ctx.drawImage(grass, canvas.width/2 - grass.width/2 + 200, 150);

    ctx.fillText("CPU Choices", canvas.width/2, 350);
    ctx.drawImage(cfire, canvas.width/2 - fire.width/2 - 200, 380);
    ctx.drawImage(cwater, canvas.width/2 - water.width/2, 380);
    ctx.drawImage(cgrass, canvas.width/2 - grass.width/2 + 200, 380);

    ctx.fillText(result, canvas.width/2, 575);

    ctx.fillText("Wins: " + winCount, 50, 50);
    ctx.fillText("Losses: " + lossCount, 925, 50);
}



var rps = [];
rps[0] = "Fire";
rps[1] = "Water";
rps[2] = "Grass";

document.getElementById("fire").addEventListener("click", function (e) {
    //alert("You Clicked: " + rps[0]);
    if(gameOver == false){
        play(rps[0]);
    }
});
document.getElementById("water").addEventListener("click", function (e) {
    //alert("You Clicked: " + rps[1]);
    if(gameOver == false){
        play(rps[1]);
    }
});
document.getElementById("grass").addEventListener("click", function (e) {
    //alert("You Clicked: " + rps[2]);
    if(gameOver == false){
        play(rps[2]);
    }
});

function play(playerChoice) {
    if(gameOver == true){
        return;
    }
    var cpuChoice = Math.floor(Math.random() * 2.99);
    switch (playerChoice) {
        case "Fire":
            if (cpuChoice == 0) {
                //alert("CPU Chose Rock, You Tied");
                result = "CPU Chose Fire, You Tied";
                draw(hfire, water, grass, hfire, water, grass);
            }
            else if (cpuChoice == 1) {
                //alert("CPU Chose Paper, You Lose");
                lossCount++;
                result = "CPU Chose Water, You Lose";
                draw(hfire, water, grass, fire, hwater, grass);
                
            }
            else {
                //alert("CPU Chose Scissors, You Win");
                winCount++;
                result = "CPU Chose Grass, You Win";
                draw(hfire, water, grass, fire, water, hgrass);
                
            }
            break;
        case "Water":
            if (cpuChoice == 0) {
                //alert("CPU Chose Rock, You Win");
                winCount++;
                result = "CPU Chose Fire, You Win";
                draw(fire, hwater, grass, hfire, water, grass);
                
            }
            else if (cpuChoice == 1) {
                //alert("CPU Chose Paper, You Tied");
                result = "CPU Chose Water, You Tied";
                draw(fire, hwater, grass, fire, hwater, grass);
            }
            else {
                //alert("CPU Chose Scissors, You Lose");
                lossCount++;
                result = "CPU Chose Grass, You Lose";
                draw(fire, hwater, grass, fire, water, hgrass);
                
            }
            break;
        case "Grass":
            if (cpuChoice == 0) {
                //alert("CPU Chose Rock, You Lose");
                lossCount++;
                result = "CPU Chose Fire, You Lose";
                draw(fire, water, hgrass, hfire, water, grass);
                
            }
            else if (cpuChoice == 1) {
                //alert("CPU Chose Paper, You Win");
                winCount++;
                result = "CPU Chose Water, You Win";
                draw(fire, water, hgrass, fire, hwater, grass);
                
            }
            else {
                //alert("CPU Chose Scissors, You Tied");
                result = "CPU Chose Grass, You Tied";
                draw(fire, water, hgrass, fire, water, hgrass);
            }
            break;
    }
    console.log(cpuChoice, playerChoice);
}