let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let h = Number(input[0]);
let m = Number(input[1]) - 45;

if (m >= 0) {
    console.log(h, m);
} else {
    m += 60;
    (h > 0) ? console.log(h - 1, m) : console.log(23, m);
}