const diceImages = [
  { id: 1, img: "./images/dice1.png" },
  { id: 2, img: "./images/dice2.png" },
  { id: 3, img: "./images/dice3.png" },
  { id: 4, img: "./images/dice4.png" },
  { id: 5, img: "./images/dice5.png" },
  { id: 6, img: "./images/dice6.png" },
];

const diceOne = document.querySelector("#dice-one");
const diceTwo = document.querySelector("#dice-two");
const winningText = document.querySelector("#h1");
const btn = document.querySelector("#btn");
const reset = document.querySelector("#reset");
const gameContainer = document.querySelector("#game-container");
const totalScore1PlayerOne = document.querySelector("#total-score1");
const totalScore1PlayerTwo = document.querySelector("#total-score2");

var score1 = 0;
var score2 = 0;
totalScorePlOne = 0;
totalScorePlTwo = 0;

// -------Fix Scoring -------------------------?????--

btn.addEventListener("click", () => {
  const randomNumberGenerator1 = Math.floor(Math.random() * 6);
  const randomNumberGenerator2 = Math.floor(Math.random() * 6);

  function diceGenerator(numberGenerator, item) {
    if (numberGenerator === 0) {
      item.innerHTML = `<img clas="dice-img" src=${diceImages[0].img}>`;
    } else if (numberGenerator === 1) {
      item.innerHTML = `<img clas="dice-img" src=${diceImages[1].img} >`;
    } else if (numberGenerator === 2) {
      item.innerHTML = `<img clas="dice-img" src=${diceImages[2].img} >`;
    } else if (numberGenerator === 3) {
      item.innerHTML = `<img clas="dice-img" src=${diceImages[3].img} >`;
    } else if (numberGenerator === 4) {
      item.innerHTML = `<img clas="dice-img" src=${diceImages[4].img} >`;
    } else if (numberGenerator === 5) {
      item.innerHTML = `<img clas="dice-img" src=${diceImages[5].img} >`;
    }
  }

  diceGenerator(randomNumberGenerator1, diceOne);
  diceGenerator(randomNumberGenerator2, diceTwo);

  function decisionMaker(num1, num2) {
    if (num1 > num2) {
      scoreOne = totalScorePlOne++;
      totalScore1PlayerOne.innerHTML = `${scoreOne}`;

      winningText.innerHTML =
        '<p> Player 1 "WON"  <span> <i class="fas fa-trophy"></i> </span> </p> ';
    } else if (num1 < num2) {
      scoreTwo = totalScorePlTwo++;
      totalScore1PlayerTwo.innerHTML = `${scoreTwo}`;

      winningText.innerHTML =
        '<p> Player 2 "WON" <span> <i class="fas fa-trophy"></i> </span> </p>';
    } else {
      winningText.innerHTML =
        '<p1> "Draw" <span> <i class="fas fa-dragon"></i> </span> </p>';
    }
  }

  decisionMaker(randomNumberGenerator1, randomNumberGenerator2);
});

reset.addEventListener("click", () => {
  location.reload();
});
