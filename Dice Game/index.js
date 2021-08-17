var player = [".one", ".two", ".three", ".four", ".five", ".six"];
var player2 = [".one-p2", ".two-p2", ".three-p2", ".four-p2", ".five-p2", ".six-p2"];

document.addEventListener("DOMContentLoaded", dice_game());
var winner;
function dice_game(){
    for(var it = 0; it < player.length; it++){
        document.querySelector(player[it]).classList.add("hide");
        document.querySelector(player2[it]).classList.add("hide");
    }
    var number1 = Math.random();
    number1 = Math.floor(number1 * 6);
    document.querySelector(player[number1]).classList.remove("hide");

    var number2 = Math.random();
    number2 = Math.floor(number2 * 6);
    document.querySelector(player2[number2]).classList.remove("hide");
    if(number1 < number2){
        winner = 2;
    }
    else if(number1 > number2){
        winner = 1;
    }
    else{
        winner = 0;
    }
    console.log(number1);
    console.log(number2);
    display_winner();
}

function display_winner(){
    if(winner == 0){
        document.getElementById("main-heading").innerHTML = "You're a perfect Match!";
    }
    else if(winner == 2){
        document.getElementById("main-heading").innerHTML = "<img src='Images/trophy.png'> Player 2 is the winner!";
    }
    else if(winner == 1){
        document.getElementById("main-heading").innerHTML = "<img src='Images/trophy.png'> Player 1 is the winner!";
    }
}