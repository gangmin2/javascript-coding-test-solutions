const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

let n = Number(input);
let result = ''

for (let i = 1; i < 10; i++) {
    result += `${n} * ${i} = ${n * i}\n`;
}

console.log(result);