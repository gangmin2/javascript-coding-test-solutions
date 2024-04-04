const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(' ');
let [n, m] = input.map(Number);

console.log(Math.abs(n - m));