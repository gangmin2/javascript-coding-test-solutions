const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);

let number = input.reduce((acc, cur) => acc + (cur ** 2), 0) % 10;
console.log(number);