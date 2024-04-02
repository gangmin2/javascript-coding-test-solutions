const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const t = input.shift();

for (let i = 0; i < t; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    console.log(`Case #${i + 1}: ${a + b}`);
}