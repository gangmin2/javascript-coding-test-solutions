const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.forEach(value => {
    const [a, b] = value.split(' ').map(Number);
    console.log(a + b);
});