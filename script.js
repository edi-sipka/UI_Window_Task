'use strict';

const modal = document.querySelector('.modal');
const openBtn = document.querySelectorAll('.show-modal');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openButtonModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < openBtn.length; i++)
  openBtn[i].addEventListener('click', openButtonModel);

const closeModalButton = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeBtn.addEventListener('click', closeModalButton);
overlay.addEventListener('click', closeModalButton);
