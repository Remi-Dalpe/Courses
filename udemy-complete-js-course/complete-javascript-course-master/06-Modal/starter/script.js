'use strict';
// Declaration of classes
const modal = document.querySelector('.modal'); // class modal becomes constant modal
const overlay = document.querySelector('.overlay'); // class overlay becomes constant overlay
const btnCloseModal = document.querySelector('.close-modal'); // class close-modal becomes constant  close-modal
const btnsOpenModal = document.querySelectorAll('.show-modal'); // class show-modal becomes constant show-modal
// Function for opening modal & his overlay becomes constent openModal
const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// Function for closing modal & his overlay becomes constent closeModal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// Modal & his overlay is opened when clicking on 1 of 3 buttons with same class "show-modal"
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// Modal & his overlay is closed when clicking on X or on the overlay around the modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log('Escape was pressed');
    closeModal();
  }
});
