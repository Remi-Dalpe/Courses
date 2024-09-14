'use strict';

// Selection of elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1'); // also possible to use .getEllementById(''); for HTML id tags
const current0EL = document.querySelector('#current--0');
const current1EL = document.querySelector('#current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnShowHTP = document.querySelector('.btn--show-htp');
const btnCloseHTP = document.querySelector('.btn--close-htp');
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const elements = document.querySelector('.element');
// Starting conditions
let scores, currentScore, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  // Set score
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;
  // Hide dice
  diceEL.classList.add('hidden');
  // Set/Reverse CSS style
  player0EL.classList.remove('player--winner', 'player--looser');
  player1EL.classList.remove('player--winner', 'player--looser');
  // Set player 0(1) active & player 1(2) not active
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
  // Set/Reset game status
  currentScore = 0;
  console.log('New game');
  playing = true;
};
init();

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
    console.log(`Rolling dice. Result: ${dice}`);

    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    // Add current score to active player score
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    console.log('Holding');
    // Check if score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish game
      playing = false;
      diceEL.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer === 0 ? 1 : 0}`)
        .classList.add('player--looser');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

btnShowHTP.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  if (elements && !elements.classList.contains('hidden'))
    elements.classList.add('hidden');
});

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  if (elements && elements.classList.contains('hidden'))
    elements.classList.remove('hidden');
};

btnCloseHTP.addEventListener('click', function () {
  closeModal();
});
document.addEventListener('keydown', function (event) {
  if (event.key === 'Ecape' && !modal.classList.contains('hidden')) {
    console.log('Escape was pressed');
    closeModal();
  }
});
