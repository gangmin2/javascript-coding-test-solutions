let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [num1, num2] = input;

console.log(num1 * num2[2]);
console.log(num1 * num2[1]);
console.log(num1 * num2[0]);
console.log(num1 * num2);