function add(num1, num2) {
  return num1 + num2;
}
console.log(add(2, 4));

function multiply(num1, num2) {
  let result = 0;
  for (let i = 0; i < num2; i++) {
    result = add(result, num1);
  }
  return result;
}
console.log(multiply(6, 8));

function power(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result = multiply(result, x);
  }
  return result;
}
console.log(power(2, 8));

function factorial(fato) {
  let result = 1;
  for (let i = fato; i > 1; i--) {
    result = multiply(result, i);
  }
  return result;
}
console.log(factorial(4));
