window.onload = function () {
    // Check whether initial load or not
    if (sessionStorage.getItem("hasRefreshed") === null) {
        // Initial load, set the flag in sessionStorage
        sessionStorage.setItem("hasRefreshed", "true");
    } else {
        // Subsequent load, user has refreshed the page
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var newdice1 = "./images/dice" + randomNumber1 + ".png";
        document.querySelector(".img1").setAttribute("src", newdice1);

        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        var newdice2 = "./images/dice" + randomNumber2 + ".png";
        document.querySelector(".img2").setAttribute("src", newdice2);

        if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerText = "Player 1 Wins!";
        } else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerText = "Player 2 Wins!";
        } else {
            document.querySelector("h1").innerText = "Draw!";
        }
    }
};
