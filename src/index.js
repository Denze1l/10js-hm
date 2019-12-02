import './styles.css';
import template from './template.hbs';
import products from './products.json';

const refs = {
  menu: document.querySelector('.menu'),
  input: document.querySelector('.switch__input'),
  testCheck: document.querySelector('.testCheck'),
  body: document.querySelector('body'),
  label: document.querySelector('.switch__label'),
  themeDiv: document.querySelector('.theme-switch'),
  mickle: document.querySelector('.light-theme'),
  jakson: document.querySelector('.dark-theme'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const product = products.map(elem => template(elem)).join(' ');

refs.menu.insertAdjacentHTML('afterbegin', product);

if (localStorage.getItem('Theme') === Theme.DARK) {
  refs.input.checked = true;
  document.body.classList.add(localStorage.getItem('Theme'));
}

const cheacked = function(e) {
  if (e.target.checked) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
    document.body.classList.add(Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
};

refs.input.addEventListener('change', cheacked);
