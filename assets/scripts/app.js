let currentResult = 0;

function show() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, 'test');
}

addBtn.addEventListener('click', show);
