var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var newdice = "./images/dice" + randomNumber1 + '.png'
document.querySelector(".img1").setAttribute("src", newdice)

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var newdice2 = "./images/dice" + randomNumber2 + '.png'
document.querySelector(".img2").setAttribute("src", newdice2)

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 Wins!"
}

if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins!"
}
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerText = "Draw!"
}