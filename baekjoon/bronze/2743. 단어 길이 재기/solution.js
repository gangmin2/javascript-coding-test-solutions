const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let str = input[0];

console.log(str.length);