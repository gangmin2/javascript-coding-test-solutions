const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const x = Number(input.shift());
const n = Number(input.shift());

let sum = 0;

for (let i = 0; i < n; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    sum += a * b;
}

console.log((x === sum) ? 'Yes' : 'No');