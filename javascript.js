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
        return ">.< Error";
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

const display = document.getElementById('display');

function numberToDisplay(value) {
    if (currentDisplay.length >= 10) return;
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

const numberButtons = ['bZero','bOne','bTwo','bThree','bFour','bFive','bSix','bSeven','bEight','bNine','bDecimal'];
document.getElementById('bPlus').addEventListener('click', () => chosenOperator('+'));
document.getElementById('bMinus').addEventListener('click', () => chosenOperator('-'));
document.getElementById('bMultiply').addEventListener('click', () => chosenOperator('*'));
document.getElementById('bDivide').addEventListener('click', () => chosenOperator('/'));
numberButtons.forEach(id => {
    const button = document.getElementById(id);
    button.addEventListener('click', () => {
        numberToDisplay(button.textContent);
    });
});

document.getElementById('bEqual').addEventListener('click', () => {
    if (firstNum !== null && operator !== null && currentDisplay !== '') {
        secondNum = parseFloat(currentDisplay);
        const result = operate(firstNum, secondNum, operator);
            .toString()
            .slice(0, 10);
        display.value = result;
        currentDisplay = result.toString();
        firstNum = null;
        operator = null;
    }
});

document.getElementById('bClear').addEventListener('click', () => {
    currentDisplay = '';
    firstNum = null;
    operator = null;
    display.value = '';
});

document.getElementById('bDelete').addEventListener('click', () => {
    currentDisplay = currentDisplay.slice(0, -1);
    display.value = currentDisplay;
});
