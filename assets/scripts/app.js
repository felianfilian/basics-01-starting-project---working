let currentResult = 0;

let names = [];

names.push('luigi');
names.push('peach');

let person = {
  name: 'mario',
  age: 31,
};

function add() {
  currentResult += parseInt(userInput.value);
  outputResult(currentResult, typeof currentResult);
}

function subtract() {
  currentResult -= parseInt(userInput.value);
  outputResult(currentResult, names[0]);
}

function multiply() {}

function divide() {}

addBtn.addEventListener('click', add);
