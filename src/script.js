

// Calculator
let display = document.getElementById("display");

function appendTOdisplay(input) {
    display.value += input;
}

function clearAll() {
    display.value = "";
}

function calculate(params) {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error, try again!";
    }
}
