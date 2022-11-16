var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// ctx.font = "30px Arial";
// ctx.fillText("Welcome to Rock, Paper Scissors!", 275, 50);
//create instances for images RPS
var rock = new Image();
var paper = new Image();
var scissors = new Image();
var hrock = new Image();
var hpaper = new Image();
var hscissors = new Image();
var winCount = 0;
var lossCount = 0;
var result = "Select a button from above to choose";

rock.src = "RPSimages/images/rock.jpg";
paper.src = "RPSimages/images/paper.jpg";
scissors.src = "RPSimages/images/scissors.jpg";
hrock.src = "RPSimages/images/rock2.jpg";
hpaper.src = "RPSimages/images/paper2.jpg";
hscissors.src = "RPSimages/images/scissors2.jpg";

hscissors.onload = function(){
    draw(rock, paper, scissors, rock, paper, scissors);
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
        draw(rock, paper, scissors, rock, paper, scissors);
    }
}


function draw(rock, paper, scissors, crock, cpaper, cscissors){
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
    ctx.drawImage(rock, canvas.width/2 - rock.width/2 - 100, 150);
    ctx.drawImage(paper, canvas.width/2 - paper.width/2, 150);
    ctx.drawImage(scissors, canvas.width/2 - scissors.width/2 + 100, 150);

    ctx.fillText("CPU Choices", canvas.width/2, 350);
    ctx.drawImage(crock, canvas.width/2 - rock.width/2 - 100, 450);
    ctx.drawImage(cpaper, canvas.width/2 - paper.width/2, 450);
    ctx.drawImage(cscissors, canvas.width/2 - scissors.width/2 + 100, 450);

    ctx.fillText(result, canvas.width/2, 575);

    ctx.fillText("Wins: " + winCount, 50, 50);
    ctx.fillText("Losses: " + lossCount, 925, 50);
}



var rps = [];
rps[0] = "Rock";
rps[1] = "Paper";
rps[2] = "Scissors";

document.getElementById("rock").addEventListener("click", function (e) {
    //alert("You Clicked: " + rps[0]);
    if(gameOver == false){
        play(rps[0]);
    }
});
document.getElementById("paper").addEventListener("click", function (e) {
    //alert("You Clicked: " + rps[1]);
    if(gameOver == false){
        play(rps[1]);
    }
});
document.getElementById("scissors").addEventListener("click", function (e) {
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
        case "Rock":
            if (cpuChoice == 0) {
                //alert("CPU Chose Rock, You Tied");
                result = "CPU Chose Rock, You Tied";
                draw(hrock, paper, scissors, hrock, paper, scissors);
            }
            else if (cpuChoice == 1) {
                //alert("CPU Chose Paper, You Lose");
                lossCount++;
                result = "CPU Chose Paper, You Lose";
                draw(hrock, paper, scissors, rock, hpaper, scissors);
                
            }
            else {
                //alert("CPU Chose Scissors, You Win");
                winCount++;
                result = "CPU Chose Scissors, You Win";
                draw(hrock, paper, scissors, rock, paper, hscissors);
                
            }
            break;
        case "Paper":
            if (cpuChoice == 0) {
                //alert("CPU Chose Rock, You Win");
                winCount++;
                result = "CPU Chose Rock, You Win";
                draw(rock, hpaper, scissors, hrock, paper, scissors);
                
            }
            else if (cpuChoice == 1) {
                //alert("CPU Chose Paper, You Tied");
                result = "CPU Chose Paper, You Tied";
                draw(hrock, paper, scissors, rock, hpaper, scissors);
            }
            else {
                //alert("CPU Chose Scissors, You Lose");
                lossCount++;
                result = "CPU Chose Scissors, You Lose";
                draw(hrock, paper, scissors, rock, paper, hscissors);
                
            }
            break;
        case "Scissors":
            if (cpuChoice == 0) {
                //alert("CPU Chose Rock, You Lose");
                lossCount++;
                result = "CPU Chose Rock, You Lose";
                draw(rock, paper, hscissors, hrock, paper, scissors);
                
            }
            else if (cpuChoice == 1) {
                //alert("CPU Chose Paper, You Win");
                winCount++;
                result = "CPU Chose Paper, You Win";
                draw(rock, paper, hscissors, rock, hpaper, scissors);
                
            }
            else {
                //alert("CPU Chose Scissors, You Tied");
                result = "CPU Chose Scissors, You Tied";
                draw(rock, paper, hscissors, rock, paper, hscissors);
            }
            break;
    }
    console.log(cpuChoice, playerChoice);
}