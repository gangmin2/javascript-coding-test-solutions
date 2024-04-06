const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const n = Number(input.shift().split(' ')[0]);
let baskets = Array.from({length: n}, (v, i) => i + 1);

input.forEach(element => {
    const [i, j] = element.split(' ').map(x => Number(x) - 1);
    [baskets[i], baskets[j]] = [baskets[j], baskets[i]];
})

console.log(baskets.join(' '));