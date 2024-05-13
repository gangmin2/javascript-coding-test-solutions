const fs = require('fs');
const input = Number(fs.readFileSync(0, 'utf-8').trim());

let count = 1;
let num = 1;

while (input > num) {
    num += 6 * count;
    count++;
}

console.log(count);