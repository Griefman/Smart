'use strict';
var KEY_ESC_CODE = 27;
var popUp = document.querySelector('.popup-form');
var layout = document.querySelector('.modal-layout');
var buttonOpenPopUp = document.querySelector('.page-header__button');
var buttonClosePopUp = document.querySelector('.popup-form__button-close');
var toggleSite = document.querySelector('.footer-info__site-toggle');
var siteColumns = document.querySelector('.footer-info__site-columns');
var toggleOffice = document.querySelector('.footer-info__office-toggle');
var officeColumns = document.querySelector('.footer-info__office-columns');
var inputName = document.querySelector("#popup-name")


buttonOpenPopUp.addEventListener('click', function () {
  if (popUp.classList.contains('display-hidden')) {
    popUp.classList.remove('display-hidden');
    layout.classList.remove('display-hidden');
    inputName.focus();
  }
});



var closePopUp = function () {
  if (!popUp.classList.contains('display-hidden')) {
    popUp.classList.add('display-hidden');
    layout.classList.add('display-hidden');
  }
}

buttonClosePopUp.addEventListener('click', function () {
  closePopUp();
});


layout.addEventListener('click', function () {
  closePopUp();
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEY_ESC_CODE) {
    closePopUp();
  }
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

if (window.localStorage) {
  var elements = document.querySelectorAll('[name]');

  for (var i = 0, length = elements.length; i < length; i++) {
    (function(element) {
      var name = element.getAttribute('name');

      element.value = localStorage.getItem(name) || '';

      element.onkeyup = function() {
        localStorage.setItem(name, element.value);
      };
    })(elements[i]);
  }
}


var anchors = document.querySelectorAll('a[href*="#features"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
