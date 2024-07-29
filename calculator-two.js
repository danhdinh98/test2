// A simple calculator that takes two numbers and an operator (like +, -, *, /) as arguments, then outputs the result of that operation.
var args = process.argv;
var result = 0;

num1 = parseInt(args[2]);
operator = args[3];
num2 = parseInt(args[4]);

if (operator === '+') {
    result = num1 + num2;
}
if (operator === '-') {
    result = num1 - num2;
}
if (operator === '/') {
    result = num1 / num2;
}
if (operator === 'x') {
    result = num1 * num2;
}

console.log(args);

console.log(`${num1} ${operator} ${num2} = ${result}`);