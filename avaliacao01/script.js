// GENERAL FUNCTIONS
function getNumber(numStr) {
  if (numStr.length === 0) {
    return NaN;
  }
  return Number(numStr);
}

function showError(field) {
  field.value = 'Erro!'
}

// QUESTION 01
function calcularQ1() {
  const inputNum1 = document.querySelector('#q1-n1');
  const inputNum2 = document.querySelector('#q1-n2');
  const inputNum3 = document.querySelector('#q1-n3');
  const resultInput = document.querySelector('#q1-r');
  const feedback = document.querySelector('#q1-f');
  
  const num1 = getNumber(inputNum1.value);
  const num2 = getNumber(inputNum2.value);
  const num3 = getNumber(inputNum3.value);

  if (!num1) {
    feedback.textContent = '"Primeiro número" inválido';
    showError(resultInput);
    return;
  }
  if (!num2) {
    feedback.textContent = '"Segundo número" inválido';
    showError(resultInput);
    return;
  }
  if (!num3) {
    feedback.textContent = '"Terceiro número" inválido';
    showError(resultInput);
    return;
  }
  
  resultInput.value = (num1 + num2 + num3) / 3;
  feedback.textContent = '';
}


// QUESTION 02
function calcularQ2() {
  const inputEmp = document.querySelector('#q2-emp');
  const inputSal = document.querySelector('#q2-sal');
  const resultInput = document.querySelector('#q2-r');
  const feedback = document.querySelector('#q2-f');
  
  const employee = inputEmp.value;
  const salary = getNumber(inputSal.value);
  
  if (employee.length === 0) {
    feedback.textContent = 'Insira nome do funcionário';
    resultInput.value = '';
    return;
  }
  if (!salary) {
    feedback.textContent = '"Salário" inválido';
    showError(resultInput);
    return;
  }
  
  feedback.textContent = `Novo salário de ${employee}:`;
  resultInput.value = salary * 1.1;
}



// QUESTION 03
function calcularQ3() {
  const inputA = document.querySelector('#q3-a');
  const inputB = document.querySelector('#q3-b');
  const resultC = document.querySelector('#q3-c');
  const feedback = document.querySelector('#q3-f');
  
  const a = getNumber(inputA.value);
  const b = getNumber(inputB.value);
  
  if (!a) {
    feedback.textContent = 'Valor de "A" inválido';
    showError(resultC);
    return;
  }
  if (!b) {
    feedback.textContent = 'Valor de "B" inválido';
    showError(resultC);
    return;
  }
  if (a === b) {
    feedback.textContent = `C (A):`;
    resultC.value = a === b ? a + b : a * b;
  }
}


// button elements
const buttonQ1 = document.querySelector('#q1-btn');
const buttonQ2 = document.querySelector('#q2-btn');
const buttonQ3 = document.querySelector('#q3-btn');
const buttonQ4 = document.querySelector('#q4-btn');
const buttonQ5 = document.querySelector('#q5-btn');
const buttonQ6 = document.querySelector('#q6-btn');


// event listeners
buttonQ1.addEventListener('click', calcularQ1);
buttonQ2.addEventListener('click', calcularQ2);
buttonQ3.addEventListener('click', calcularQ3);
buttonQ4.addEventListener('click', calcularQ2);
buttonQ5.addEventListener('click', calcularQ2);
buttonQ6.addEventListener('click', calcularQ2);
