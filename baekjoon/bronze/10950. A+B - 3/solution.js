const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = input.shift();

for (let i = 0; i < n; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    console.log(a + b);
}