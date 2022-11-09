var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Welcome to Rock, Paper Scissors!", 275, 100);

var rps = [];
rps[0] = "Rock";
rps[1] = "Paper";
rps[2] = "Scissors";

document.getElementById("rock").addEventListener("click", function (e) {
    alert("You Clicked: " + rps[0]);
    play(rps[0]);
});
document.getElementById("paper").addEventListener("click", function (e) {
    alert("You Clicked: " + rps[1]);
    play(rps[1]);
});
document.getElementById("scissors").addEventListener("click", function (e) {
    alert("You Clicked: " + rps[2]);
    play(rps[2]);
});

function play(playerChoice) {
    var cpuChoice = Math.floor(Math.random() * 2.99);
    switch (playerChoice) {
        case "Rock":
            if (cpuChoice == 0) {
                alert("CPU Chose Rock, You Tied");
            }
            else if (cpuChoice == 1) {
                alert("CPU Chose Paper, You Lose");
            }
            else {
                alert("CPU Chose Scissors, You Win");
            }
            break;
        case "Paper":
            if (cpuChoice == 0) {
                alert("CPU Chose Rock, You Win");
            }
            else if (cpuChoice == 1) {
                alert("CPU Chose Paper, You Tied");
            }
            else {
                alert("CPU Chose Scissors, You Lose");
            }
            break;
        case "Scissors":
            if (cpuChoice == 0) {
                alert("CPU Chose Rock, You Lose");
            }
            else if (cpuChoice == 1) {
                alert("CPU Chose Paper, You Win");
            }
            else {
                alert("CPU Chose Scissors, You Tied");
            }
            break;
    }
    console.log(cpuChoice, playerChoice);
}