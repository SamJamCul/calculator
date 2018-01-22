function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(o, a, b) {
  return o(a, b);
}

const numbers = document.querySelectorAll('.button');
const operations = document.querySelectorAll('.opebut');
const metaButtons = document.querySelectorAll('.metabut');
const equals = document.querySelectorAll('.equals');
const display = document.querySelector('.display');

let answer = '';

numbers.forEach((button) => {
  button.addEventListener('click', (e) => {
    display.removeChild(display.childNodes[0])
    answer += button.textContent
    display.textContent = answer;
  })
})
