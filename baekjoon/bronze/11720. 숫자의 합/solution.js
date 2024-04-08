const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let str = input[1].split('').map(Number);
let sum = 0;
sum = str.reduce((acc, cur) => acc + cur, sum);

console.log(sum);