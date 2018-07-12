import isPositiveInteger from 'is-positive-int';

function add(a, b) {
  if (!isPositiveInteger(a)) return 0;
  if (!isPositiveInteger(b)) return 0;
  return a + b;
}

function subtract(a, b) {
  if (!isPositiveInteger(a)) return 0;
  if (!isPositiveInteger(b)) return 0;
  return a - b;
}

function divide(a, b) {
  if (!isPositiveInteger(a)) return 0;
  if (!isPositiveInteger(b)) return 0;
  return a / b;
}

function multiply(a, b) {
  if (!isPositiveInteger(a)) return 0;
  if (!isPositiveInteger(b)) return 0;
  return a * b;
}

export { add, subtract, divide, multiply };
