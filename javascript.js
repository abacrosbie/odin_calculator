//Operator Functions
//add
function addFunct(num1, num2) {
    return num1 + num2;
}

//subtract
function minusFunct(num1, num2) {
    return num1 - num2;
}

//multiply
function multFunct(num1, num2) {
    return num1 * num2;
}

//divide
function divFunct(num1, num2) {
    if (num2 === 0) {
        return ">.< Error, don't break the universe.";
    }
    else if (num1 === 0) {
        return 0;
    }
    else return num1 / num2;
}

//operate function
function operate(n1, n2, operatorFunc) {
    let result;
    switch(operatorFunc) {
        case '+': {
            result = addFunct(n1, n2);
            break;
            }
        case '-': {
            result = minusFunct(n1, n2);
            break;
            }   
        case '*': {
            result = multFunct(n1, n2);
            break;
            }
        case '/': {
            result = divFunct(n1, n2);
            }
        }
    return result
}

let currentDisplay = '';
let firstNum = null;
let secondNum = null;
let operator = null;

const display = document.querySelector('.display');

function numberToDisplay(value) {
    currentDisplay += value;
    display.value = currentDisplay;
}

function chosenOperator(operatorButton) {
    if (currentDisplay === '') return;
    if (firstNum === null) {
        firstNum = parseFloat(currentDisplay);
    } else if (operator) {
        firstNum = operate(firstNum, parseFloat(currentDisplay), operator);
        display.value = firstNum;
    }
    operator = operatorButton;
    currentDisplay = '';
}


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('clicked'));
        button.classList.add('clicked');
    });
});

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('clicked');
}

buttons.forEach(button => button.addEventListener('transitionend', removeTransition));







console.log(operate(100, 0, '/'));