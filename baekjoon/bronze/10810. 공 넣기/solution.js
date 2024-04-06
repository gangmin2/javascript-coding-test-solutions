const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let n = Number(input.shift().split(' ')[0]);
let baskets = new Array(n).fill(0);

input.forEach(element => {
    const [i, j, k] = element.split(' ').map(Number);
    for (let index = i - 1; index < j; index++) {
        baskets[index] = k;
    }
})

console.log(baskets.join(' '));