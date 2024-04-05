const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let arr = input[1].split(' ').map(Number);
let num = Number(input[2]);

console.log(arr.filter(element => element === num).length);