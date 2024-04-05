const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const x = input[0].split(' ')[1];
const numbers = input[1].split(' ').map(Number);

let result = numbers.filter(element => element < x);

console.log(result.join(' '));