var buttoncolours = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStart = false;

$(document).keypress(function(){
    if(!gameStart){
        $("#level-title").text("Level 0");
        nextSequence();
        gameStart = true;
    }
});

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * buttoncolours.length);
    var randomChosenColour = buttoncolours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

$(".btn").click(function(){
    var userColorChosen = this.id;
    userClickedPattern.push(userColorChosen);
    playSound(userColorChosen);
    animatePress(userColorChosen);
    checkAnswer(userClickedPattern.length - 1);
});

function playSound(colorAudio){
    var audio = new Audio("sounds/" + colorAudio + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("." + currentColour).addClass("pressed");

    setTimeout(function(){
        $("." + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        if(userClickedPattern.length == gamePattern.length){
            console.log("Success!");
            setTimeout(nextSequence , 1000);
        }
    }
    else{
        console.log("Failure!! User Clicked: " + userClickedPattern[currentLevel] + " Game Pattern: " + gamePattern[currentLevel]);
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over! Press Any Key To Restart");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    gameStart = false;
}