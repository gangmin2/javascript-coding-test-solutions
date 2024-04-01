let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let h = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);
let time = Number(input[1]);

m += time;

if (m < 60) {
    console.log(h, m);
} else {
    while (m >= 60) {
        m -= 60;
        h += 1;
    }
    if (h > 23) {
        h -= 24;
    }
    console.log(h, m);
}