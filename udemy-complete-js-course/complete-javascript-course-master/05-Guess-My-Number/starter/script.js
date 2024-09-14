'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🥳 Correct Number!'; // DOM manipulation, manipulation of a node

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const mathRandom = Math.trunc(Math.random() * 20) + 1;
let secretNumber = mathRandom;
let score = 5;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const backgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const setScore = function (number) {
  document.querySelector('.score').textContent = number;
};
const numberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
const setSecretNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // guess no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
    // correct guess/player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🥳 Correct number!';
    displayMessage('🥳 Correct number!');
    setSecretNumber(secretNumber);

    backgroundColor('#60b347');
    numberWidth('30rem');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      setScore(score);
    } else {
      setSecretNumber(secretNumber);
      displayMessage('💥You lost the game!');
      backgroundColor('#FF0000');
      setScore(0);
    }
    // guess is too high
  } // else if (secretNumber < guess) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You lost the game!';
  //     document.querySelector('body').style.backgroundColor = '#FF0000';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   // guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You lost the game!';
  //     document.querySelector('body').style.backgroundColor = '#FF0000';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  secretNumber = mathRandom;

  displayMessage('Start guessing...');
  backgroundColor('#222');
  numberWidth('15rem');
  setScore(score);
  setSecretNumber('?');
  document.querySelector('.guess').value = '';
});
