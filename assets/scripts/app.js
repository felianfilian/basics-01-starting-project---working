let currentResult = 0;

let names = [];

names.push('luigi');
names.push('peach');

let person = {
  name: 'mario',
  age: 31,
};

function calculate(calculationType) {
  let initalNumber = currentResult;
  let enteredNumber = parseInt(userInput.value);
  let mathOperator;
  if (calculationType == 'add') {
    currentResult += enteredNumber;
    mathOperator = '+';
    let operation = `${initalNumber} ${mathOperator} ${enteredNumber}`;
    outputResult(currentResult, operation);
  } else {
    outputResult(0, 'Not valid');
  }
}

function add() {
  calculate('add');
}

function subtract() {
  calculate('subract');
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
