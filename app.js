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

// Append number on screen

numbers.forEach(number => number.addEventListener("click", () => {
    let num = number.textContent;
    if (result.textContent.length <= 10) {
        if (result.textContent === "0") {
            result.textContent = num;
        } else {
            result.textContent += num;
        }
    } else {
        alert(" Can't enter another number");
    }
}))



// Add operation sign

function add_operator(operator) {
    if (current_operation !== null) calculate()
    first_number = result.textContent;
    current_operation = operator;
    operation_screen.textContent = `${first_number} ${current_operation}`;
    reset_screen = true;
}

function calculate() {
    if (current_operation === null || reset_screen) return
    second_number = result.textContent;
    result = operate(current_operation, first_number, second_number);
    operation_screen.textContent = `${first_number} ${current_operation}`;
    current_operation = null;

}

operators.forEach((button) => button.addEventListener("click", add_operator(button.textContent)));




// clear screen

function clear_screen() {
    operation_screen.textContent = " ";
    result.textContent = "0";
    current_operation = null;
    first_number = " ";
    second_number = " ";
}

clear_button.addEventListener("click", clear_screen);


// Delete number

function delete_number() {
    result.textContent = result.textContent.toString().slice(0, -1);
}

delete_button.addEventListener("click", delete_number);