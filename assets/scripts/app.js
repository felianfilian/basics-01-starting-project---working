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
  if (currentResult > 100) {
    outputResult(0, 'too high');
  } else {
    outputResult(currentResult, typeof currentResult);
  }
}

function subtract() {
  currentResult -= parseInt(userInput.value);
  outputResult(currentResult, names[0]);
}

function multiply() {
  currentResult *= parseInt(userInput.value);
  outputResult(currentResult, names[0]);
}

function divide() {
  currentResult /= parseInt(userInput.value);
  outputResult(currentResult, names[0]);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
