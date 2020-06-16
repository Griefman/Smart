'use strict';
var KEY_ESC_CODE = 27;
var popUp = document.querySelector('.popup-form');
var layout = document.querySelector('.modal-layout');
var buttonOpenPopUp = document.querySelector('.page-header__button');
var buttonClosePopUp = document.querySelector('.popup-form__button-close');
var inputName = document.querySelector('#popup-name');
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
};
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

// toggleSite.addEventListener('click', function () {
//   if (toggleSite.classList.contains('toggle-plus')) {
//     toggleSite.classList.remove('toggle-plus');
//     toggleSite.classList.add('toggle-minus');
//     siteColumns.style.display = 'block';
//     officeColumns.style.display = 'none';
//
//   } else {
//     if (toggleSite.classList.contains('toggle-minus')) {
//       toggleSite.classList.remove('toggle-minus');
//       toggleSite.classList.add('toggle-plus');
//     }
//   }
// });
//
// toggleOffice.addEventListener('click', function () {
//   if (toggleOffice.classList.contains('toggle-plus')) {
//     toggleOffice.classList.remove('toggle-plus');
//     toggleOffice.classList.add('toggle-minus');
//     officeColumns.style.display = 'block';
//   } else {
//     if (toggleOffice.classList.contains('toggle-minus')) {
//       toggleOffice.classList.remove('toggle-minus');
//       toggleOffice.classList.add('toggle-plus');
//       officeColumns.style.display = 'none';
//     }
//   }
// });

// =======================================================================
// var buttonPluses = document.querySelectorAll('.toggle-plus');
// var buttonMinuses = document.querySelectorAll('.toggle-minus');
// var columns = document.querySelectorAll('.columns')
//
// buttonPluses.forEach(function (item, index) {
//   item.addEventListener('click', function (e) {
//     e.preventDefault();
//     if (item.classList.contains('toggle-plus')) {
//       item.classList.remove('toggle-plus');
//       item.classList.add('toggle-minus');
//       console.log(columns[index]);
//       columns.forEach(function (item) {
//         item.style.display = 'none';
//       })
//       columns[index].style.display = 'block';
//     }
//   });
// });
//
// buttonMinuses.forEach(function (item, index) {
//   item.addEventListener('click', function (e) {
//     e.preventDefault();
//     if (item.classList.contains('toggle-plus')) {
//       item.classList.remove('toggle-minus');
//       item.classList.add('toggle-plus');
//       columns.forEach(function (item) {
//         item.style.display = 'block';
//       })
//       columns[index].style.display = 'none';
//     }
//   });
// });
// ========================================================================
var blocks = document.querySelectorAll('.block');
blocks.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    var target = evt.target;
    item.querySelector('.columns').style.display = 'none';
    var blocks1 = document.querySelectorAll('.block');
    if (target.classList.contains('toggle-plus')) {
      blocks1.forEach(function (it) {
        it.querySelector('.columns').style.display = 'none';
        it.querySelector('.toggle').classList.remove('toggle-minus');
        it.querySelector('.toggle').classList.add('toggle-plus');
      });
      item.querySelector('.columns').style.display = 'block';
      target.classList.remove('toggle-plus');
      target.classList.add('toggle-minus');
    } else if (target.classList.contains('toggle-minus')) {
      item.querySelector('.columns').style.display = 'none';
      target.classList.remove('toggle-minus');
      target.classList.add('toggle-plus');
    }
  });
});

// ===========================================================================
if (window.localStorage) {
  var elements = document.querySelectorAll('[name]');
  for (var i = 0; i < elements.length; i++) {
    (function (element) {
      var name = element.getAttribute('name');
      element.value = localStorage.getItem(name) || '';
      element.onkeyup = function () {
        localStorage.setItem(name, element.value);
      };
    })(elements[i]);
  }
}

var anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    var blockID = item.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

window.addEventListener('DOMContentLoaded', function () {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else {
      if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.select();
      }
    }
  }

  function mask(event) {
    var matrix = '+7 (___) ___ ____';
    i = 0;
    var def = matrix.replace(/\D/g, '');
    var val = this.value.replace(/\D/g, '');
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      if (/[_\d]/.test(a) && i < val.length) {
        return val.charAt(i++);
      } else {
        if (i >= val.length) {
          return '';
        } else {
          return a;
        }
      }


    });
    if (event.type === 'blur') {
      if (this.value.length === 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  var inputs = document.querySelectorAll('[name="phone-number"]');
  inputs.forEach(function (item) {
    item.addEventListener('input', mask, false);
    item.addEventListener('focus', mask, false);
    item.addEventListener('blur', mask, false);
  });
});
