class Calculator{
    constructor(){
        // Buttons on page
        const numbers = document.querySelectorAll('[data-num]');
        const operators = document.querySelectorAll('[data-operation]');
        const delete_button = document.querySelector('.delete');
        const clear_button = document.querySelector('.clear');
        const decimal = document.querySelector('.dot');
        const equals_button = document.querySelector('.equals');

        
        // Screens
        let top_screen = document.querySelector('.first-operation');
        let main_screen = document.querySelector('.display-result');

        // Store user inputs
        operand_one = ' ';
        operand_two = ' ';
        current_operation = null;
        reset_screen = false;
    }

    
}