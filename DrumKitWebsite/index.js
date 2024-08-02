var buttons = document.querySelectorAll(".drum")
for (let i = 0; i < buttons.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //    this.style.color = "white";
        buttonAnimation(this.innerHTML);
        checkSound(this.innerHTML);


    });
}


function handleClick() {
    var audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
}

document.addEventListener("keydown", function (event) {
    // console.log(event["key"]);
    checkSound(event["key"]);
    buttonAnimation(event["key"]);
});

function checkSound(input) {
    // var buttonInner = this.innerHTML;
    switch (input) {
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log(this.innerHTML)
    }
}

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(
        function () {
            activeButton.classList.remove("pressed");
        }, 100
    );
}