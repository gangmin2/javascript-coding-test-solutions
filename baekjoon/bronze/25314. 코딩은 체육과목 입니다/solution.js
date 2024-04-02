const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

let n = input / 4;
let long = 'long ';

console.log(`${long.repeat(n)}int`)