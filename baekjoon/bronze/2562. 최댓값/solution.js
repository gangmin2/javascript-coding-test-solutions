const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let numbers = input.map(Number);

let max = Math.max(...numbers);
let index = numbers.indexOf(max);

console.log(max);
console.log(index + 1);