let screen = document.querySelector('.screen');
let miniScreen = document.querySelector('.miniScreen');
let screenValue;
let num1 = 0;
let num2 = 0;
let total;
let operation;
let times = 0;

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
            return (b == 0) ? "Don't try to break the universe by dividing by 0!" : divide(a, b);
    }
}

function display(num) {
    screen.textContent += num;
    screenValue = screen.textContent;

}

function operator(operator) {
    if (num1) {
        num2 = screen.textContent;
    } else {
        num1 = screen.textContent;
    }
    if (times>0) {
        equal('special');
    }
    operation = operator;
        miniScreen.textContent = `${num1} ${operation}`;
        screen.textContent = '';
        times++;
}

function equal(type) {
    if (type == 'regular') {
        num2 = screenValue;
        total = (operate(operation, num1, num2));
        total = (Math.round(total * 1000)) / 1000;
        screen.textContent = total;
        (!num1 || !num2) ?
            miniScreen.textContent = '' : miniScreen.textContent = `${num1} ${operation} ${num2} =`;
        num1 = total;
    } else if (type == 'special') {
        total = (operate(operation, num1, num2));
        total = (Math.round(total * 1000)) / 1000;
        num1 = total;
        console.log('Num1: ' + num1);
        console.log('Num2: ' + num2);
        console.log('Total: ' + total);
        console.log('Operation: ' + operation);
    }
}

function clearCalc() {
    num1 = 0;
    num2 = '';
    total = 0;
    operation = '';
    times = 0;
    screen.textContent = '';
    miniScreen.textContent = '';
    screenValue = '';
}

function deleteCalc() {
    screenValue = screen.textContent.toString().slice(0, -1);
}

