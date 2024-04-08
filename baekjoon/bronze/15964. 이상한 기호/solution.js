const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);

const [a, b] = input;
let result = (a + b) * (a - b);

console.log(result);