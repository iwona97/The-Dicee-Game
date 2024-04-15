randomNumber1 = Math.ceil(Math.random() * 6);

var imageName1 = "images/dice" + randomNumber1 + ".png";

document.getElementsByTagName("img")[0].setAttribute("src", imageName1);

randomNumber2 = Math.ceil(Math.random() * 6);

var imageName2 = "images/dice" + randomNumber2 + ".png";

document.getElementsByTagName("img")[1].setAttribute("src", imageName2);

message = Findwinner(randomNumber1, randomNumber2);

document.querySelector("h1").innerText = message;

function Findwinner(randomNumber1, randomNumber2) {
  if (randomNumber1 > randomNumber2) {
    var message = "🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    message = "Player 2 🚩 Wins!";
  } else {
    message = "Draw!";
  }
  return message;
}
