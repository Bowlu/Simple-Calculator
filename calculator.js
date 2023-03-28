const buttons = document.getElementsByTagName('button');
const screenDisplay = document.getElementsByClassName('screen');

function calculate(button) {
    console.log(button);
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))