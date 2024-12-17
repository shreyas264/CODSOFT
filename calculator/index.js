const display = document.getElementById('display');

document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if(value === 'C'){
            clearDisplay();
        } else if (value === '=') {
            calculate();
        } else {
            appendValue(value);
        }
    });
});

//funtion to append value to the display
function appendValue(value) {
    if(display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

//function to clear the display
function clearDisplay(){
    display.innerText = '0';
}

// Function to calculate the result
function calculate() {
    try{
        const result = eval(display.innerText.replace('÷', '/').replace('x','*'));
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error'
    }
}