buttonColours = ["red", "blue", "green", "yellow"]
gamePattern = []
userClickedPattern = []
var game_on = false
var level = 0;
$(document).on("keydown", function (e) {
    console.log(e)
    if (!game_on) {
        nextSequence();
        $("#level-title").text("Level " + level);
        game_on = true;

    }
});
function nextSequence() {
    level += 1
    $("#level-title").text("Level " + level);

    // userClickedPattern = []
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColor = buttonColours[randomNumber]
    gamePattern.push(randomChosenColor)
    console.log(gamePattern)
    var selectedButton = "#" + randomChosenColor
    $(selectedButton).fadeOut(100).fadeIn(100);
    PlaySound(randomChosenColor)

}

function PlaySound(color) {
    path = "./sounds/" + color + ".mp3"
    var audio = new Audio(path)
    audio.play();
}

$(".btn").on("click", function (event) {
    colorClicked = event['target'].id;
    userClickedPattern.push(colorClicked);
    PlaySound(colorClicked);
    animatePress(colorClicked);
    // console.log("this is User pat")
    // console.log(userClickedPattern)
    // console.log("game pat done")
    checkAnswer(userClickedPattern.length - 1)

})

function animatePress(currentColour) {
    var selectedButton = "#" + currentColour
    console.log(selectedButton)
    $(selectedButton).addClass("pressed")
    setTimeout(
        function () {
            $(selectedButton).removeClass("pressed");
        }, 100
    );
}
function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    game_on = false;

}
function checkAnswer(level) {
    if (userClickedPattern[level] === gamePattern[level]) {
        if (userClickedPattern.length === gamePattern.length) {
            console.log("success")
            setTimeout(
                function () {
                    nextSequence();
                    userClickedPattern = []
                }, 1000
            );
        }
    }
    else {
        PlaySound("wrong")
        $("body").addClass("game-over")
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver()

        setTimeout(
            function () {
                $("body").removeClass("game-over")
            }, 200
        );
    }
}
