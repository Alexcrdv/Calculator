function sum (a, b) {
    return a + b;
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

