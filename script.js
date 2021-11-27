let screen = document.querySelector('.screen');
let miniScreen = document.querySelector('.miniScreen');
const point = document.getElementById('point');
const pink = document.querySelector('.pink');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const cClear = document.getElementById('c-clear');
const cNumber = document.getElementsByName('c-number');
const cOperator = document.getElementsByName('c-operator');
const cEqual = document.getElementById('c-equal');
const cScreen = document.getElementsByName('c-screen');
const cBackground = document.getElementsByName('background');
const cCalcBackground = document.getElementsByName('calcBackground');
const colorButtons = document.getElementsByName('colorButton');
const numberBtns = document.querySelectorAll('[data-num]');
const operatorBtns = document.querySelectorAll('c-operator');

// let screenValue;
let num1 = 0;
let num2 = 0;
let total;
let operation = null;
let timesPoint = 0;
let timesPlus = 0;
let restart = false;

//Event Listener for Keyboard
window.addEventListener('keypress', handleKeyboard);
numberBtns.forEach((button) =>
  button.addEventListener('click', () => display(button.textContent))
)

//Function for deciding which operation to do 
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
        case '%':
            return (percentage(a, b));
    }
}

//Displays the inputted number onto the screen of the calculator
function display(num) {
    if (restart) {
        screen.textContent = '';
        timesPoint = 0;
        timesPlus = 0;
        restart = false;
    }
    //Special display for an inputted decimal point
    if (num == '.') {
        timesPoint++;
        if (timesPoint > 1) {
            num = '';
        }
    }
    //Special display for an inputted negative sign
        if (num == "+/-") {
            timesPlus++;
            if (screen.textContent.charAt(0) == '-') {
                timesPlus = 2;
            }
            if (timesPlus > 1) {
                num = '';
                screen.textContent = screen.textContent.toString().slice(1);
                timesPlus = 0;
        } else {
            num = '-';
        }
        screen.textContent = num + screen.textContent;
        } else {
            screen.textContent += num;
        }
    // screenValue = screen.textContent;
    }

    //Displays the inputted operator 
function operator(mathType) {
    //Special display if a second operator is inputted
    if (operation != null) {
        equal();
    }
    num1 = screen.textContent;
        operation = mathType;
    miniScreen.textContent = `${num1} ${operation}`;
    screen.textContent = total;
    restart = true;

}
    
//Calculates the equation and provides a total (I think this is the function with the problem)
function equal() {
    num2 = screen.textContent;
    if(operation != null) miniScreen.textContent = `${num1} ${operation} ${num2} =`;
    if (!num1 && !num2) {
        total = 0;
        miniScreen.textContent = '‎';
    // } else if (!num1 && num2) {
    //     total = num2;
    //     miniScreen.textContent = '‎';
    } else {
        total = (operate(operation, num1, num2));
    }
    calc();
    screen.textContent = total;
    operation = null;
    restart = true;
    screen.textContent = total;
}

//Resets the calculator
function clearCalc() {
    num1 = 0;
    num2 = 0;
    total = 0;
    operation = null;
    timesPoint = 0;
    timesPlus = 0;
    screen.textContent = '';
    miniScreen.textContent = '‎';
    // screenValue = '';
}

//Deletes the most recent input to the calculator
function deleteCalc() {
    screen.textContent = screen.textContent.toString().slice(0, -1);
    timesPoint = 0;
    timesPlus = 0;
}

//Rounds the total
function calc() {
    if (typeof (total) == 'number') {
        total = (Math.round(total * 1000)) / 1000;
    }
}

//Handles keyboard input events
function handleKeyboard(e) {
      for (let i = 0, max = cEqual.length; i < max; i++) {
          cEqual[i].blur();
    };
     for (let i = 0, max = cNumber.length; i < max; i++) {
          cNumber[i].blur();
    };
     for (let i = 0, max = cOperator.length; i < max; i++) {
          cOperator[i].blur();
    };
     for (let i = 0, max = cClear.length; i < max; i++) {
          cClear[i].blur();
    };
    if (e.key >= 0 && e.key <= 9 || e.key == ".") display(e.key);
    if (e.key === 'Backspace') deleteCalc();
    if (e.key == 'Enter') equal();
    if (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/' || e.key == '%') operator(e.key);
    if (e.key == "Escape") clearCalc();
}

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

function percentage(a, b) {
    return (a / 100) * b;
}
   

//The following changes the colors for the program
pink.addEventListener('click', () => {
    cClear.style.backgroundColor = "#a8efea";
    cEqual.style.backgroundColor = "#ffffff";
    for (let i = 0, max = cOperator.length; i < max; i++) {
    cOperator[i].style.backgroundColor = "#f9d7e4";
    };
    for (let i = 0, max = cNumber.length; i < max; i++) {
        cNumber[i].style.backgroundColor = "#db7cd3";
    };
    for (let i = 0, max = cScreen.length; i < max; i++) {
        cScreen[i].style.backgroundColor = "#dab8c5";
    }
    for (let i = 0, max = cBackground.length; i < max; i++) {
        cBackground[i].style.backgroundColor = "#dab8c5";
    } 
    for (let i = 0, max = cCalcBackground.length; i < max; i++) {
        cCalcBackground[i].style.backgroundColor = "#41333a";
    }
    for (let i = 0, max = colorButtons.length; i < max; i++) {
        colorButtons[i].style.backgroundColor = 'inherit';
    }
})

blue.addEventListener('click', () => {
    cClear.style.backgroundColor = "#c5edd2";
    cEqual.style.backgroundColor = "#d0e2fc";
    for (let i = 0, max = cOperator.length; i < max; i++) {
    cOperator[i].style.backgroundColor = "#bee8fc";
    };
    for (let i = 0, max = cNumber.length; i < max; i++) {
        cNumber[i].style.backgroundColor = "#ebecf0";
    };
    for (let i = 0, max = cScreen.length; i < max; i++) {
        cScreen[i].style.backgroundColor = "lightblue";
    }
    for (let i = 0, max = cBackground.length; i < max; i++) {
        cBackground[i].style.backgroundColor = "lightblue";
    }
    for (let i = 0, max = cCalcBackground.length; i < max; i++) {
        cCalcBackground[i].style.backgroundColor = "#6d9ecc";
    }
    for (let i = 0, max = colorButtons.length; i < max; i++) {
        colorButtons[i].style.backgroundColor = 'inherit';
    }
})

green.addEventListener('click', () => {
    cClear.style.backgroundColor = "#a8f0e8";
    cEqual.style.backgroundColor = "#c6ef87";
    for (let i = 0, max = cOperator.length; i < max; i++) {
    cOperator[i].style.backgroundColor = "#dde6c6";
    };
    for (let i = 0, max = cNumber.length; i < max; i++) {
        cNumber[i].style.backgroundColor = "#f4f4ea";
    };
    for (let i = 0, max = cScreen.length; i < max; i++) {
        cScreen[i].style.backgroundColor = "#c4e4bc";
    }
    for (let i = 0, max = cBackground.length; i < max; i++) {
        cBackground[i].style.backgroundColor = "#c4e4bc";
    }
    for (let i = 0, max = cCalcBackground.length; i < max; i++) {
        cCalcBackground[i].style.backgroundColor = "#66c06e";
    }
    for (let i = 0, max = colorButtons.length; i < max; i++) {
        colorButtons[i].style.backgroundColor = 'inherit';
    }
})
yellow.addEventListener('click', () => {
    cClear.style.backgroundColor = "#ee9118";
    cEqual.style.backgroundColor = "#ee9118";
    for (let i = 0, max = cOperator.length; i < max; i++) {
    cOperator[i].style.backgroundColor = "#f1a579";
    };
    for (let i = 0, max = cNumber.length; i < max; i++) {
        cNumber[i].style.backgroundColor = "#fcfc6d";
    };
    for (let i = 0, max = cScreen.length; i < max; i++) {
        cScreen[i].style.backgroundColor = "#ececb7";
    }
    for (let i = 0, max = cBackground.length; i < max; i++) {
        cBackground[i].style.backgroundColor = "#ececb7";
    }
    for (let i = 0, max = cCalcBackground.length; i < max; i++) {
        cCalcBackground[i].style.backgroundColor = "#f1e092";
    }
    for (let i = 0, max = colorButtons.length; i < max; i++) {
        colorButtons[i].style.backgroundColor = 'inherit';
    }
})
