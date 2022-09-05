let currentResult = 0;

let names = [];

names.push('luigi');
names.push('peach');

let person = {
  name: 'mario',
  age: 31,
};

function calculate(mathOperator) {
  let initalNumber = currentResult;
  let enteredNumber = parseInt(userInput.value);
  let operation = `${initalNumber} ${mathOperator} ${enteredNumber}`;
  if (mathOperator == '+') {
    currentResult += enteredNumber;
  } else if (mathOperator == '-') {
    currentResult -= enteredNumber;
  } else if (mathOperator == '*') {
    currentResult *= enteredNumber;
  } else if (mathOperator == '/') {
    currentResult /= enteredNumber;
  } else {
    operation = 'not valid';
  }
  outputResult(currentResult, operation);
}

function add() {
  calculate('+');
}

function subtract() {
  calculate('-');
}

function multiply() {
  calculate('*');
}

function divide() {
  calculate('/');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
