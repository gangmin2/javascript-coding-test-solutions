const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let str = input[0].split('');
let index = Number(input[1]) - 1;

console.log(str[index]);