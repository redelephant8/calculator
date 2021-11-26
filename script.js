let screen = document.querySelector('.screen');
let miniScreen = document.querySelector('.miniScreen');
const point = document.getElementById('point');
// const operator = document.querySelectorAll('.operator');
const pink = document.querySelector('.pink');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const cClear = document.getElementsByName('c-clear');
const cNumber = document.getElementsByName('c-number');
const cOperator = document.getElementsByName('c-operator');
const cEqual = document.getElementsByName('c-equal');
const cScreen = document.getElementsByName('c-screen');
const cBackground = document.getElementsByName('background');
let screenValue;
let num1 = 0;
let num2 = 0;
let total;
let operation = null;
let times = 0;
let restart = false;

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
    if (restart) {
        screen.textContent = '';
        times = 0;
        restart = false;
    }
    if (num == '.') {
        console.log(times);
        times++;
        if (times > 1) {
            num = '';
        }
    }
        screen.textContent += num;
        screenValue = screen.textContent;
    }

function operator(mathType) {
    if (operation != null) {
        minivan.enabled = true;
        equal();
    }
        num1 = screen.textContent;
        operation = mathType;
        miniScreen.textContent = `${num1} ${operation}`;
    restart = true;

}
    
function equal() {
    num2 = screen.textContent;
    miniScreen.textContent = `${num1} ${operation} ${num2} =`
    if (!num1 && !num2) {
        total = 0;
        miniScreen.textContent = '‎';
    } else if (!num1 && num2) {
        total = num2;
        miniScreen.textContent = '‎';
    } else {
        total = (operate(operation, num1, num2));
    }
    screen.textContent = total;
    operation = null;
}

function clearCalc() {
    num1 = 0;
    num2 = '';
    total = 0;
    operation = null;
    times = 0;
    screen.textContent = '';
    miniScreen.textContent = '‎';
    screenValue = '';
}

function deleteCalc() {
    screen.textContent = screen.textContent.toString().slice(0, -1);
    times = 0;
}

function calc() {
    if (typeof (total) == 'number') {
        total = (Math.round(total * 1000)) / 1000;
    }
}
    
pink.addEventListener('click', () => {
    for (let i = 0, max = cClear.length; i < max; i++) {
    cClear[i].style.backgroundColor = "#a8efea";
    };
    for (let i = 0, max = cOperator.length; i < max; i++) {
    cOperator[i].style.backgroundColor = "#f9d7e4";
    };
    for (let i = 0, max = cNumber.length; i < max; i++) {
        cNumber[i].style.backgroundColor = "#2a2126";
        cNumber[i].style.color = "#ffffff";
    };
    for (let i = 0, max = cEqual.length; i < max; i++) {
    cEqual[i].style.backgroundColor = "#ffffff";
    };
    for (let i = 0, max = cScreen.length; i < max; i++) {
        cScreen[i].style.backgroundColor = "#dab8c5";
    }
    for (let i = 0, max = cBackground.length; i < max; i++) {
        cBackground[i].style.backgroundColor = "#dab8c5";
    }
})

blue.addEventListener('click', () => {
    for (let i = 0, max = cClear.length; i < max; i++) {
    cClear[i].style.backgroundColor = "#c5edd2";
    };
    for (let i = 0, max = cOperator.length; i < max; i++) {
    cOperator[i].style.backgroundColor = "#bee8fc";
    };
    for (let i = 0, max = cNumber.length; i < max; i++) {
        cNumber[i].style.backgroundColor = "#ebecf0";
        cNumber[i].style.color = "#000000";
    };
    for (let i = 0, max = cEqual.length; i < max; i++) {
    cEqual[i].style.backgroundColor = "#d0e2fc";
    }
    for (let i = 0, max = cScreen.length; i < max; i++) {
        cScreen[i].style.backgroundColor = "lightblue";
    }
    for (let i = 0, max = cBackground.length; i < max; i++) {
        cBackground[i].style.backgroundColor = "lightblue";
    }
})

green.addEventListener('click', () => {
    for (let i = 0, max = cClear.length; i < max; i++) {
    cClear[i].style.backgroundColor = "#a8f0e8";
    };
    for (let i = 0, max = cOperator.length; i < max; i++) {
    cOperator[i].style.backgroundColor = "#dde6c6";
    };
    for (let i = 0, max = cNumber.length; i < max; i++) {
        cNumber[i].style.backgroundColor = "#f4f4ea";
        cNumber[i].style.color = "#000000";
    };
    for (let i = 0, max = cEqual.length; i < max; i++) {
    cEqual[i].style.backgroundColor = "#c6ef87";
    }
    for (let i = 0, max = cScreen.length; i < max; i++) {
        cScreen[i].style.backgroundColor = "#c4e4bc";
    }
    for (let i = 0, max = cBackground.length; i < max; i++) {
        cBackground[i].style.backgroundColor = "#c4e4bc";
    }
})