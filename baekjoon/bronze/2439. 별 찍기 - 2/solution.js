const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString());

for (let i = 1; i < input + 1; i++) {
    let result = '';
    result += ' '.repeat(input - i);
    result += '*'.repeat(i);
    console.log(result);
}