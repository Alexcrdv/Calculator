const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["/", "x", "-", "+"]
let input = "";
let output = "";
let firstNum = "";
let operator = "";
let secondNum = "";

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculation(e.target.dataset.value))
})

const calculation = (btnValue) => {
    if (numbers.includes(btnValue)) {
        input += btnValue;
    }

    if (btnValue === "." && !input.includes(".")) {
        input += btnValue;
    }

    if (btnValue === "+/-" && input !== "") {
        input = input * -1;
    }

    if (btnValue === "C") {
        input = "";
        firstNum = "";
        secondNum = "";
        operator = "";
    }

    if (btnValue === "CE") {
        input = input.slice(0, -1);
        console.log(input);
    }

    if (input !== "" && operators.includes(btnValue)) {
        firstNum = input;
        input = "";
        operator = btnValue;
    }

    if (btnValue === "=" && firstNum !== "" && operator !== "") {
        secondNum = input;
        input = operate(firstNum, secondNum, operator);
        firstNum = "";
        secondNum = "";
    }

    display.textContent = input; 
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

