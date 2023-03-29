const buttons = document.querySelectorAll('button');
const screenDisplay = document.querySelector('.screen');

let calculation = [];
let cummulative;


function calculate(button) {
    const value = button.textContent;

    if (value === "=") {
        screenDisplay.textContent = eval(cummulative);
       
    } else if (value === "CLEAR") {
        calculation =[];
        screenDisplay.textContent = "0";
    } else {

        calculation.push(value);
        cummulative = calculation.join("");
        screenDisplay.textContent = cummulative;
    }
    
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))