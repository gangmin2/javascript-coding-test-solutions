const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let arr = new Array(30).fill(0);
let submit = input.map(Number);

submit.forEach(element => arr[element - 1] += 1)
arr.forEach((element, index) => {
    if (element === 0)  console.log(index += 1);
});