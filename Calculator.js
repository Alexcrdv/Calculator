const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const smallDisplay = document.querySelector('.small-display');
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["/", "x", "-", "+"]
let input = "";
let smallInput = "";
let output = "";
let firstNum = "";
let operator = "";
let secondNum = "";
let needsClear = false;

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculation(e.target.dataset.value))
})

const calculation = (btnValue) => {
    if (numbers.includes(btnValue)) {
        if (needsClear && input !== "") {
            input = "";
            firstNum = "";
            secondNum = "";
            operator = "";
            smallInput = "";
            needsClear = false;
        }
        input += btnValue;
        smallInput += btnValue;
    }

    if (btnValue === "." && !input.includes(".")) {
        input += btnValue;
        smallInput += btnValue;
    }

    if (btnValue === "+/-" && input !== "") {
        if (operator !== "") {
            smallInput = smallInput.substring(0, smallInput.indexOf(operator)) + smallInput.substring(smallInput.indexOf(operator)).replace(input, input * -1);
            input = input * -1;
        } else {
            input = input * -1;
            smallInput = input;
        }
    }

    if (btnValue === "C") {
        input = "";
        firstNum = "";
        secondNum = "";
        operator = "";
        smallInput = "";
        needsClear = false;
    }

    if (btnValue === "CE") {
        if (smallInput.toString().includes("=")) {
            input = "";
            firstNum = "";
            secondNum = "";
            operator = "";
            smallInput = "";
            needsClear = false;
        }

        if (input !== "" && operator !== "" && firstNum !== "") {
            input = "";
            smallInput = firstNum + operator;
        } else if (input === "" && operator !== "" && firstNum !== "") {
            operator = "";
            smallInput = firstNum;
            input = firstNum;
        } else {
            input = "";
            smallInput = "";
        }
    }

    if (input !== "" && operators.includes(btnValue)) {
        if (operator !== "") {
            secondNum = input;
            input = operate(firstNum, secondNum, operator);
            firstNum = "";
            secondNum  = "";
        }

        if (smallInput.toString().includes("=")) {
            smallInput = input;
        }

        operator = btnValue;
        firstNum = input;
        smallInput += operator;
        input = "";
        needsClear = false;
    }

    if (btnValue === "=" && firstNum !== "" && operator !== "") {
        secondNum = input;
        input = operate(firstNum, secondNum, operator);
        secondNum = "";
        operator = "";
        needsClear = true;
        smallInput += "=" + input;
    }

    display.textContent = input; 
    smallDisplay.textContent = smallInput;
}

function sum (a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return a - b;
}

function divide (a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function operate (first, second, operator) {
    if (operator == '+') {
        return sum(first, second);
    } else if (operator == '-') {
        return subtract(first, second);
    } else if (operator == 'x'){
        return multiply(first, second);
    } else if (operator === '/') {
        return divide(first, second);
    }
}

