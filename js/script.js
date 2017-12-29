'use strict';

window.onload = function () {
  const password = document.querySelector('#password1'),
    passwordConf = document.querySelector('#password2'),
    passwordHelperBox = document.querySelector('#passwordHelp'),
    validate = function (e) {
      if (e.target.value.length === 0) {
        passwordHelperBox.textContent = '';
      } else if (e.target.value.length < 6) {
        passwordHelperBox.className = 'error';
        passwordHelperBox.textContent = 'ERROR: Password must have 6 or more characters.';
      } else if (/\d/g.test(e.target.value) === false) {
        passwordHelperBox.className = 'error';
        passwordHelperBox.textContent = 'ERROR: Password must include 1 or more digits.';
      } else {
        passwordHelperBox.className = 'info';
        passwordHelperBox.textContent = 'INFO: Password is correct.';
      }
    },
    validateConf = function (e) {
      if (e.target.value !== password.value) {
        passwordHelperBox.className = 'error';
        passwordHelperBox.textContent = 'ERROR: Password are not identical.';
      } else {
        passwordHelperBox.className = 'info';
        passwordHelperBox.textContent = 'INFO: Passwords match.';
      }
    };
  password.addEventListener('blur', validate);
  passwordConf.addEventListener('blur', validateConf);
};