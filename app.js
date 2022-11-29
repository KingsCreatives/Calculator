// Buttons on page
const numbers = document.querySelectorAll('[data-num]');
const operators = document.querySelectorAll('[data-operation]');
const delete_button = document.querySelector(".delete");
const clear_button = document.querySelector(".clear");
const decimal = document.querySelector(".dot");
const equals_button = document.querySelector(".equals");
const top_screen = document.querySelector(".first-operation");
const main_screen = document.querySelector(".display-result");

// Store user inputs
operand_one = " ";
operand_two = " ";
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




//Reset screen
function resetScreen() {
    main_screen.textContent = " ";
    reset_screen = false;
}





// Append number on screen

numbers.forEach(number => number.addEventListener("click", () => {
    let num = number.textContent;
    if (main_screen.textContent.length <= 10) {
        if (main_screen.textContent === "0") {
            main_screen.textContent = num;
        } else {
            main_screen.textContent += num;
        }
    } else {
        alert(" Can't enter another number");
    }
}))




// clear screen

function clear_screen() {
    top_screen.textContent = " ";
    main_screen.textContent = "0";
    current_operation = null;
    operand_one = " ";
    operand_two = " ";
}

clear_button.addEventListener("click", clear_screen);




// Delete number

function delete_number() {
    main_screen.textContent = main_screen.textContent.toString().slice(0, -1);
}

delete_button.addEventListener("click", delete_number);




// Add decimal point
function add_point() {
    if (reset_screen) resetScreen();
    if (main_screen.textContent === " ") main_screen.textContent = "0";
    if (main_screen.textContent.includes(".")) return;
    main_screen.textContent += ".";
}

decimal.addEventListener("click", add_point);





// Select an operator
function select_operator(operator) {
    if (current_operation !== null) evaluate();
    operand_one = main_screen.textContent;
    current_operation = operator;
    reset_screen = true;
    main_screen.textContent = " ";
    top_screen.textContent = `${operand_one} ${current_operation}`;
}

operators.forEach((button) => button.addEventListener("click", () => {
    select_operator(button.textContent);
}));





// Evaluate user operation