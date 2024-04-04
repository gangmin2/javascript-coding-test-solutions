const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
let result = '';

for (let i = 0; i < Number(input); i++) {
    result += i + 1;
    result += '\n';
}

console.log(result);