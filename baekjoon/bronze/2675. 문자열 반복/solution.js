const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
input.shift();

let result = input.map(element => {
    let [r, s] = element.split(' ');
    return [...s].map(value => value.repeat(r)).join('');
})

console.log(result.join('\n'));