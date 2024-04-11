const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n').map(Number);

let result = input[0] * input[1] * input[2];
result = result.toString().split('');
let resultArr = new Array(10).fill(0);

result.forEach(element => {
    resultArr[element] += 1;
})

console.log(resultArr.join('\n'));