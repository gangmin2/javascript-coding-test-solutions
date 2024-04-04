const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

console.log(fac(input));

function fac(n) {
    return (n > 1) ? n * fac(n - 1) : 1;
}