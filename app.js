// Buttons on page
const numbers = document.querySelectorAll('[data-num]');
const operators = document.querySelectorAll('[data-operation]');
const delete_button = document.querySelector(".delete");
const clear_button = document.querySelector(".clear");
const decimal = document.querySelector(".dot");
const equals_button = document.querySelector(".equals");
const operation_screen = document.querySelector(".first-operation");
const result = document.querySelector(".display-result");

// Store user inputs
first_number = " ";
second_number = " ";
current_operation = null;
reset_screen = false;

//operation functions
function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}

function percentage(first, second) {
    return (first / 100) * second;
}

function square(number) {
    return number * number;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "÷":
            return divide(a, b);
        case "×":
            return multiply(a, b);
        case "%":
            return percentage(a, b);
        case "x2":
            return square(a);
        default:
            return null;
    }
}