const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

input.shift();
input.forEach(element => {
    console.log(element[0] + element[element.length - 1]);
});