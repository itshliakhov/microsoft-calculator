const burgerBtn = document.querySelector(".main__burger-logo");
const screenBtn = document.querySelector(".main__header-size-logo");
const historyBtn = document.querySelector(".main__header-info-history");
const historyBlock = document.querySelector('.calculator_historyMobile');
const output = document.querySelector('.output');
let string = '';

burgerBtn.addEventListener("click", () => {
    document.querySelector('.main__header-burger-aside').classList.toggle("opened_aside");
});

screenBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("change_size");
    historyBtn.classList.toggle("change_size");
    document.querySelector('.main__header-calculator-name').classList.toggle("change_size");
    document.querySelector(".form__navigation").classList.toggle("change_size");
    document.querySelector(".calculator").classList.toggle("change_height");
    document.querySelector(".body__calculator_historyDesktop").classList.toggle("change_size");
});

historyBtn.addEventListener("click", () => {
    document.querySelector(".calculator_historyMobile").classList.toggle("opened_historyMobile");
})


function changeSizeOfOutput() {
    string.length > 6 ? output.style.fontSize = '24px' : output.style.fontSize = '35px';
}

function addToOutput(value) {
    string += value;
    output.innerText = string;
    changeSizeOfOutput();
}


function clearOutput() {
    output.innerText = 0;
    string = '';
}

function deleteFromOutput() {
    if (string.length <= 1) {
        clearOutput();
    } else {
        string = string.slice(0, -1);
        output.innerText = string;
        changeSizeOfOutput();
    }
}

function addOperator(operator) {
    string += operator;
    output.innerText = string;
    changeSizeOfOutput();
}

function calculateResult() {
    try {
        string = eval(string).toString();
        output.innerText = string;
        changeSizeOfOutput();
    }
    catch (error) {
        alert("Вы пытаетесь посчитать недопустимый пример");
    }
}

function calculatePow() {
    string = Math.pow(string, 2).toString();
    output.innerText = string;
    changeSizeOfOutput();
}

function calculateSqrt() {
    string = Math.sqrt(string).toString();
    output.innerText = string;
    changeSizeOfOutput();
}

function calculateFraction() {
    string = (1 / string).toString();
    output.innerText = string;
    changeSizeOfOutput();
}

function toggleOperator() {
    if (string[0] === '-') {
        string = string.substring(1);
        output.innerText = string;
    } else {
        string = '-' + string;
        output.innerText = string;
    }
}

function calculatorWithKeyboard(event) {
    if (/^[0-9]+$/.test(event.key)) {
        if(!historyBlock.classList.contains("opened_historyMobile")){
            addToOutput(event.key);
        }
    } else if (event.key === 'Escape') {
        clearOutput();
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '.') {
        if(!historyBlock.classList.contains("opened_historyMobile")) {
            addOperator(event.key);
        }
    } else if (event.key === 'Enter') {
        if(!historyBlock.classList.contains("opened_historyMobile")) {
            calculateResult();
        }
    } else if (event.key === 'Backspace') {
        if(!historyBlock.classList.contains("opened_historyMobile")) {
            deleteFromOutput();
        }
    }
}

document.addEventListener('keydown', calculatorWithKeyboard);
