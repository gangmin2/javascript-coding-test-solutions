const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let numbers = input[1].split(' ').map(Number);

console.log(Math.min(...numbers), Math.max(...numbers));