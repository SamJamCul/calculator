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
  here = o(a, b)
  if (here.toString().length > 12) {
    return 'ERROR2BIG'
  } else {
    return here
  };
}

function equal() {
  if (display.hasChildNodes()) {
    display.removeChild(display.childNodes[0]);
  }
  if (secondnum === '0' && operation === 'divide') {
    display.textContent = "ERROR/0"
    operation = firstnum = secondnum = answer = '';
  } else if(operation !== ''){
    if(secondnum !== ''){
      answer = operate(eval(operation), firstnum, secondnum)
      if(answer === "ERROR2BIG") {
        display.textContent = answer;
        operation = firstnum = secondnum = answer = '';
      } else {
      display.textContent = answer;
      firstnum = answer;
    }
    }
  } else if(operation === '') {
    answer = firstnum
    display.textContent = answer;
  }
}

numbers.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (display.hasChildNodes()) {
      display.removeChild(display.childNodes[0]);
    }
    if(operation === '' && answer === '') {
      if (firstnum.indexOf('.') !== -1 && button.textContent === '.') {
          display.textContent = firstnum
          void 0
      } else {
        if (firstnum.length < 12) {
          firstnum += button.textContent
        }
        display.textContent = firstnum;
      }
    } else if (operation === ''){
      if (display.hasChildNodes()) {
        display.removeChild(display.childNodes[0]);
      }
      answer = firstnum = ''
      if (firstnum.length < 12) {
        firstnum += button.textContent
      }
      display.textContent = firstnum;
    } else if(operation !== '' && secondnum !== '' && answer !== '') {
      secondnum = ''
      answer = ''
      if (secondnum.length < 12) {
        secondnum += button.textContent
      }
      display.textContent = secondnum;
    } else if(operation !== '') {
      if (secondnum.indexOf('.') !== -1 && button.textContent === '.') {
          display.textContent = secondnum
          void 0
      } else {
        if (secondnum.length < 12) {
          secondnum += button.textContent
        }
        display.textContent = secondnum;
      }
    }
  })
})

operations.forEach((button => {
  button.addEventListener('click', (e) => {
    if(secondnum === '') {
      operation = button.id
      if (display.textContent.indexOf('+') !== -1 ||
          display.textContent.indexOf('-') !== -1 ||
          display.textContent.indexOf('x') !== -1 ||
          display.textContent.indexOf('÷') !== -1) {
          display.textContent = display.textContent.slice(0, -1)
      }
      display.textContent += button.textContent
    } else if (secondnum !== '') {
      equal()
      operation = button.id
      display.textContent += button.textContent
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
  } else if (answer !== '') {
    return
  } else if (firstnum !== '') {
    firstnum = firstnum.slice(0, -1)
    display.textContent = firstnum
  }
})
