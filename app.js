

const buttons = document.querySelectorAll('.button');
const displayDiv = document.querySelector('.display');
 
let currentInput = '';
let calculation = '';


buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonValue = event.target.textContent;
        if (buttonValue === 'C') {
            
        currentInput = '';
        calculation = '';
        displayDiv.textContent = '';        
    }   else if (buttonValue === '=') {
        
        try {
            currentInput = eval(calculation).toString();
        } catch (error) {
            currentInput = 'error'
        }
        displayDiv.textContent = currentInput;
        calculation = currentInput;
    } else {
        currentInput += buttonValue;
        calculation += buttonValue;
        displayDiv.textContent = currentInput;
    }
   });
  });
  
