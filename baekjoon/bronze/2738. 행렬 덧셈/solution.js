const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let [n, m] = input.shift().split(' ').map(Number);
let x = [];
let y = [];

for (let i = 0; i < n; i++) {
    x.push(input.shift().split(' ').map(Number));
}
for (let j = 0; j < n; j++) {
    y.push(input.shift().split(' ').map(Number));
}

for (let i = 0; i < n; i++) {
    let output = [];
    for (let j = 0; j < m; j++) {
        output.push(x[i][j] + y[i][j]);
    }
    console.log(output.join(' '));
}