const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let scores = input[1].split(' ').map(Number);
let max = Math.max(...scores);

let averageScore = scores.reduce((acc, cur) => acc + (cur / max * 100), 0);

console.log(averageScore / scores.length);