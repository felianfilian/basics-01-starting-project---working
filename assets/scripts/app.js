let currentResult = 0;

let names = [];

names.push('luigi');
names.push('peach');

let person = {
  name: 'mario',
  age: 31,
};

function show() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, names[1]);
}

addBtn.addEventListener('click', show);
