'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++) btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Creating & inserting elements
const header = document.querySelector(`.header`);
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved user experience. <button class="btn btn--close-cookie">Got it!</button>';
header.prepend(message);
// Delete Element
document.querySelector(`.btn--close-cookie`).addEventListener('click', function () {
  message.remove();
});

message.style.backgroundColor = '#37383d';
message.style.width = '120%';
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px';

const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

  console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  // Scrolling
  window.scrollTo(s1coords.left, s1coords, top);
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES /////////////////////////////////////

//  Implementing Smooth Scrolling

//  Styles, Attributes and Classes
/*
// Style
const msgStyle = message.style;

msgStyle.backgroundColor = '#37383d';
msgStyle.width = '120%';

console.log(msgStyle.height);
console.log(msgStyle.color);
console.log(msgStyle.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

msgStyle.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangere');

// Attribute
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
logo.getAttribute(logo.getAttribute('src'));

const link = document.querySelector(`.nav__link--btn`);
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attribute
console.log(logo.dataset.version);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes
// Don't use
logo.className = 'remi';
 */

// Selecting, Creating & Deleting Element
/*
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(`.header`);
const allSelection = document.querySelector(`.section`);
console.log(allSelection);

document.getElementById(`section--1`);
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

document.getElementsByClassName('btn');

// Creating & inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved used experience';
message.innerHTML =
  'We use cookies for improved user experience. <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message);
// header.append(message); // Append by moving element, not adding, because a DOM element is unique
// header.append(message.cloneNode(true)); // Clone element then appends it
// header.after(message);

// Delete Element
document.querySelector(`.btn--close-cookie`).addEventListener('click', function () {
  message.remove();
  // message.parentElement.removeChild(message);
});
*/
