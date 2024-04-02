const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = '';
let n = input.shift();

for (let i = 0; i < n; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    result += a + b + '\n';
}

console.log(result);