'use strict';
var KEY_ESC_CODE = 27;
var popUp = document.querySelector('.popup-form');
var layuot = document.querySelector('.modal-layout');
var buttonOpenPopUp = document.querySelector('.page-header__button');
var buttonClosePopUp = document.querySelector('.popup-form__button-close');
var toggleSite = document.querySelector('.footer-info__site-toggle');
var siteColumns = document.querySelector('.footer-info__site-columns');
var toggleOffice = document.querySelector('.footer-info__office-toggle');
var officeColumns = document.querySelector('.footer-info__office-columns');


/**
 * Открывает  попап.
 * @param {event} evt - Событие клика
 */

buttonOpenPopUp.addEventListener('click', function () {
  if (popUp.classList.contains('display-hidden')) {
    popUp.classList.remove('display-hidden');
    layuot.classList.remove('display-hidden');
  }
});


/**
 * Закрывает  попап.
 */

var closePopUp = function () {
  if (!popUp.classList.contains('display-hidden')) {
    popUp.classList.add('display-hidden');
    layuot.classList.add('display-hidden');
  }
}

buttonClosePopUp.addEventListener('click', function () {
  closePopUp();
});


toggleSite.addEventListener('click', function () {
  if (toggleSite.classList.contains('toggle-plus')) {
    toggleSite.classList.remove('toggle-plus');
    toggleSite.classList.add('toggle-minus');
    siteColumns.style.display = 'block';
  } else {
    if (toggleSite.classList.contains('toggle-minus')) {
      toggleSite.classList.remove('toggle-minus');
      toggleSite.classList.add('toggle-plus');
      siteColumns.style.display = 'none';
    }
  }
});


toggleOffice.addEventListener('click', function () {
  if (toggleOffice.classList.contains('toggle-plus')) {
    toggleOffice.classList.remove('toggle-plus');
    toggleOffice.classList.add('toggle-minus');
    officeColumns.style.display = 'block';
  } else {
    if (toggleOffice.classList.contains('toggle-minus')) {
      toggleOffice.classList.remove('toggle-minus');
      toggleOffice.classList.add('toggle-plus');
      officeColumns.style.display = 'none';
    }
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
