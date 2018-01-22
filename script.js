const numbers = document.querySelectorAll('.button');
const operations = document.querySelectorAll('.opebut');
const clear = document.querySelector('#clear');
const cancel = document.querySelector('#cancel');
const equals = document.querySelector('.equals');
const display = document.querySelector('.display');

let answer = '';
let operation = '';
let firstnum = '';
let secondnum = '';

function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
  return parseFloat(a) / parseFloat(b);
}

function operate(o, a, b) {
  return o(a, b);
}

function equal() {
  if (display.hasChildNodes()) {
    display.removeChild(display.childNodes[0]);
  }
  if(operation !== ''){
    if(secondnum !== ''){
      answer = operate(eval(operation), firstnum, secondnum)
      display.textContent = answer;
    }
  }
  operation = secondnum = '';
  firstnum = answer;
  display.textContent = answer;
}

numbers.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (display.hasChildNodes()) {
      display.removeChild(display.childNodes[0]);
    }
    if(operation === '' && answer === ''){
      firstnum += button.textContent
      display.textContent = firstnum;
    } else if (operation === ''){
      if (display.hasChildNodes()) {
        display.removeChild(display.childNodes[0]);
      }
      answer = firstnum = ''
      firstnum += button.textContent
      display.textContent = firstnum;
    } else if(operation !== '') {
      secondnum += button.textContent
      display.textContent = secondnum;
    }
  })
})

operations.forEach((button => {
  button.addEventListener('click', (e) => {
    if(secondnum === '') {
      operation = button.id
    } else if (secondnum !== '') {
      equal()
      operation = button.id
    }
  })
}))

equals.addEventListener('click', equal)

clear.addEventListener('click', function(){
  if (display.hasChildNodes()) {
    display.removeChild(display.childNodes[0]);
  }
  operation = firstnum = secondnum = answer = '';
})

cancel.addEventListener('click', function(){
  if (display.hasChildNodes()) {
    display.removeChild(display.childNodes[0]);
  }
  if (secondnum !== '') {
    secondnum = secondnum.slice(0, -1)
    display.textContent = secondnum
  } else if (firstnum !== '') {
    firstnum = firstnum.slice(0, -1)
    display.textContent = firstnum
  }
})
