var gamePattern = []
var userClickedPattern = []
var buttonColors = ["red", "blue", "green", "yellow"]

var started = false;
var level = 0;


$(document).on("keydown", function (e) {
    if (!started) {
        $("h1").text("Level " + level);
        nextSequence();
        started = true;

    }

});

$(".btn").on("click", function (event) {
    var userChosenColor = $(event["target"]).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log("this is USER pat")
    console.log(userClickedPattern)
    console.log("game USER done")
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});



function nextSequence() {
    userClickedPattern = []
    level = level + 1;
    $("h1").text("Level " + level)
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log("this is game pat")
    console.log(gamePattern)
    console.log("game pat done")
    var selector = ".btn." + randomChosenColor;
    $(selector).fadeOut(100).fadeIn(100);
    // var audname = randomChosenColor + ".mp3";
    // var audio = new Audio('./sounds/' + audname)
    // audio.play()
    playSound(randomChosenColor);

}

function playSound(name) {
    var audname = name + ".mp3";
    var audio = new Audio('./sounds/' + audname)
    audio.play()
}

function animatePress(currentColot) {
    console.log("#" + currentColot)
    $("#" + currentColot).addClass("pressed")
    setTimeout(function () {
        $("." + currentColot).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
                nextSequence();
            }, 1000);

        }

    }

    else {
        console.log("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}



function startOver() {
    started = false;
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}

