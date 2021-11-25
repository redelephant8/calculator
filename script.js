let screen = document.querySelector('.screen');
let miniScreen = document.querySelector('.miniScreen');
let screenValue;
let num1;
let num2;
let total;
let test;

function add(a, b) {
    return +a + +b;
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

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return (add(a, b));
        case '-':
            return (subtract(a, b));
        case '*':
            return (multiply(a, b));
        case '/':
            return (divide(a, b));
    }
}

function display(num) {
    screen.textContent += num;
    screenValue = parseInt(screen.textContent);
}

function operator(operator) {
    num1 = screen.textContent;
    test = operator;
    miniScreen.textContent = num1 + ' ' + operator;
    screen.textContent = '';
}

function equal(operator) {
    num2 = screen.textContent;
    total = (operate(test, num1, num2));
    screen.textContent = total;
    miniScreen.textContent = num1 + ' ' + test + ' ' + num2 + ' =';
    num1 = total;
}

