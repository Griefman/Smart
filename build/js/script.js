'use strict';
var KEY_ESC_CODE = 27;
var popUp = document.querySelector('.popup-form');
var overlay = document.querySelector('.modal-layout');
var buttonOpenPopUp = document.querySelector('.page-header__button');
var buttonClosePopUp = document.querySelector('.popup-form__button-close');


/**
 * Открывает  попап.
 * @param {event} evt - Событие клика
 */

buttonOpenPopUp.addEventListener('click', function () {
  if (popUp.classList.contains('display-hidden')) {
    popUp.classList.remove('display-hidden');
    overlay.classList.remove('display-hidden');
  }
});


/**
 * Закрывает  попап.
 */

var closePopUp = function () {
  if (!popUp.classList.contains('display-hidden')) {
    popUp.classList.add('display-hidden');
    overlay.classList.add('display-hidden');
  }
}

buttonClosePopUp.addEventListener('click', function () {
  closePopUp();
});

overlay.addEventListener('click', function () {
  closePopUp();
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEY_ESC_CODE) {
    closePopUp();
  }
});
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');
//
// pageHeader.classList.remove('page-header--nojs');
//
// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });
