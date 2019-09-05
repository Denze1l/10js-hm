import './styles.css';
import template from './template.hbs';
import products from './products.json';



const refs = {
  menu: document.querySelector('.menu'),
  input: document.querySelector('.switch__input'),
  testCheck: document.querySelector('.testCheck'),
  body: document.querySelector('body'),
  label: document.querySelector('.switch__label'),
  themeDiv: document.querySelector(".theme-switch"),
  mickle: document.querySelector(".light-theme"),
  jakson: document.querySelector(".dark-theme"),
};
// console.log(refs.body);
// console.log( refs.body.classList.contains("light-theme"));


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  document.body.classList.add(localStorage.getItem('Theme')) 

// if(refs.body.classList.contains('dark-theme')){
// refs.input.checked = true
// }
if(localStorage.getItem('Theme')===Theme.DARK){
  refs.input.checked = true
}

const product = products.map(elem => template(elem)).join(' ');
// console.log(product);

refs.menu.insertAdjacentHTML('afterbegin', product);
// console.log();



const cheacked = function(e){
  if(e.target.checked){
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK)
    localStorage.setItem('Theme', Theme.DARK)
    }
    else {
      refs.body.classList.replace(Theme.DARK,Theme.LIGHT)
      localStorage.setItem('Theme', Theme.LIGHT)
      // refs.body.classList.remove("dark-theme")
      // refs.body.classList.add("dark-theme"),
    }
}



refs.input.addEventListener('change', cheacked)

// if(refs.input.type.change){
//     refs.body.classList.add("dark-theme")
// }
// refs.label.change(aria-hidden=false)


