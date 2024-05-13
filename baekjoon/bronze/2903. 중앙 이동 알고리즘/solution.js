const fs = require('fs');
const input = Number(fs.readFileSync(0, 'utf-8').trim());

let n = 2;
for (let i = 0; i < input; i++) {
    n = n * 2 - 1;
}

console.log(n ** 2);