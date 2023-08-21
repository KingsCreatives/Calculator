// Buttons on page
const numbers = document.querySelectorAll('[data-num]');
const operators = document.querySelectorAll('[data-operation]');
const delete_button = document.querySelector('.delete');
const clear_button = document.querySelector('.clear');
const decimal = document.querySelector('.dot');
const equals_button = document.querySelector('.equals');

class Calculator{
    constructor(){
        
    }
}

// Screens
let top_screen = document.querySelector('.first-operation');
let main_screen = document.querySelector('.display-result');

// Store user inputs
operand_one = ' ';
operand_two = ' ';
current_operation = null;
reset_screen = false;


class Operations{
    constructor(first,second){
        this._first = first
        this._second = second
    }
    get first(){
        return this._first
    }
    get second(){
        return this._second
    }

    add() {
        return this.first + this.second;
    }
    
    subtract() {
        return this.first - this.second;
    }
    
    multiply() {
        return this.first * this.second;
    }
    
    divide() {
        return this.first / this.second;
    }
    
    percentage() {
        return this.first / 100;
    }
    
    square(number) {
        return number * number;
    }
}



class Operate{
    constructor(operator,a,b){
        
        this.operator = operator
        this.a = Number(a)
        this.b = Number(b)
    }

    operate(){
        let operation = new Operations(this.a, this.b)
        
        switch (this.operator) {
            case '+':
                return operation.add();
            case '-':
                return operation.subtract();
            case '÷':
                return operation.divide();
            case '×':
                return operation.multiply();
            case '%':
                return operation.percentage();
            case 'x2':
                return operation.square(a);
            default:
                return null;
        }
    }
}


//Reset screen
function resetScreen() {
    main_screen.textContent = ' ';
    reset_screen = false;
}

// Append number on screen

numbers.forEach((number) =>
    number.addEventListener('click', () => {
        let num = number.textContent;
        if (main_screen.textContent.length <= 10) {
            if (main_screen.textContent === '0') {
                main_screen.textContent = num;
            } else {
                main_screen.textContent += num;
            }
        } else {
            alert(" Can't enter another number");
        }
    })
);

// clear screen

function clear_screen() {
    top_screen.textContent = ' ';
    main_screen.textContent = '0';
    current_operation = null;
    operand_one = ' ';
    operand_two = ' ';
}

clear_button.addEventListener('click', clear_screen);

// Delete number

function delete_number() {
    if (main_screen.textContent === "0") {
        main_screen.textContent = "0";
    } else {
        main_screen.textContent = main_screen.textContent.toString().slice(0, -1);
    }
}

delete_button.addEventListener('click', delete_number);

// Add decimal point
function add_point() {
    if (reset_screen) resetScreen();
    if (main_screen.textContent === ' ') main_screen.textContent = '0';
    if (main_screen.textContent.includes('.')) return;
    main_screen.textContent += '.';
}

decimal.addEventListener('click', add_point);

// Select an operator
function select_operator(operator) {
    if (current_operation !== null) evaluate();
    if (main_screen.textContent === '0') {
        top_screen.textContent = ' ';
        alert('Enter a number first');
    } else {
        operand_one = main_screen.textContent;
        current_operation = operator;
        reset_screen = true;
        top_screen.textContent = `${operand_one} ${current_operation}`;
        main_screen.textContent = ' ';
    }
}

operators.forEach((button) =>
    button.addEventListener('click', () => {
        select_operator(button.textContent);
    })
);

// Evaluate user operation

function evaluate() {
    if (main_screen.textContent === '0' && current_operation === null) {
        return alert('Please enter a number');
    }
    operand_two = main_screen.textContent;
    main_screen.textContent = round_answer(new Operate(current_operation, operand_one, operand_two).operate());
    top_screen.textContent = `${operand_one} ${current_operation} ${operand_two}`;
}

equals_button.addEventListener('click', evaluate);

// Round evaluated answer
function round_answer(answer) {
    let rounded_answer = Math.round(answer * 1000) / 1000;
    return rounded_answer;
}

// Keyboard Inputs
function keys(event) {
    let input = event.key
    if (input === '.') {
        add_point();
    }


    if (input >= 0 && input <= 9) {
        if (main_screen.textContent.length <= 10) {
            if (main_screen.textContent === "0") {
                main_screen.textContent = input;
            } else {
                main_screen.textContent += input;
            }
        } else {
            alert("can't enter another number");
        }
    }

    if (input === "Backspace") {
        delete_number();
    }

    if (input === "Escape") {
        clear_screen();
    }

    if (input === "=" || input === "Enter") {
        if (!current_operation || !operand_one || !operand_two) {
            top_screen.textContent = null;
            main_screen.textContent = "0";
            alert("Enter an operator");
        }
        evaluate()
    }

    if (input === "+" ||
        input === "-" ||
        input === "%" ||
        input === "*" ||
        input === "/"
    ) {
        select_operator(convert_signs(input));
    }


}

function convert_signs(sign) {
    if (sign === "/") return "÷";
    if (sign === "*") return "×";
    if (sign === "%") return "%";
    if (sign === "+") return "+";
    if (sign === "-") return "-";
}

window.addEventListener('keydown', keys);