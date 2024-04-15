randomNumber1 = Math.ceil(Math.random() * 6);

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

document.getElementsByTagName("img")[0].setAttribute("src", randomDiceImage1);

randomNumber2 = Math.ceil(Math.random() * 6);

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.getElementsByTagName("img")[1].setAttribute("src", randomDiceImage2);

message = Findwinner(randomNumber1, randomNumber2);

document.querySelector("h1").innerText = message;

function Findwinner(randomNumber1, randomNumber2) {
  if (randomNumber1 > randomNumber2) {
    var message = "🚩 Player 1 Wins!";
    document.querySelectorAll(".dice")[0].classList.add("diceWinner");
    document.querySelectorAll(".dice")[1].classList.add("diceLoser");
  } else if (randomNumber1 < randomNumber2) {
    message = "Player 2 🚩 Wins!";

    document.querySelectorAll(".dice")[0].classList.add("diceLoser");
    document.querySelectorAll(".dice")[1].classList.add("diceWinner");
  } else {
    message = "Draw!";

    document.querySelectorAll(".dice")[0].classList.add("diceDraw");
    document.querySelectorAll(".dice")[1].classList.add("diceDraw");
  }
  return message;
}
