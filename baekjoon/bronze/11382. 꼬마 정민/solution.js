let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let [a, b, c] = input;

console.log(parseInt(a) + parseInt(b) + parseInt(c));