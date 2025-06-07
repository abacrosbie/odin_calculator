//Operator Functions
//add
function addFunct(num1, num2) {
    return num1 + num2;
}

//subtract
function minusFunct(num1, num2) {
    return num1 + num2;
}

//multiply
function multFunct(num1, num2) {
    return num1 * num2;
}

//divide
function divFunct(num1, num2) {
    return num1 / num2;
}

//operate function
function operate(n1, n2, operatorFunc) {
    let result;
    switch(operate) {
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



