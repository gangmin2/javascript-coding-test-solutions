let fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let [x, y] = input;

if (x > 0) {
    if (y > 0) {
        console.log(1);
    } else {
        console.log(4);
    }
} else {
    if (y > 0) {
        console.log(2);
    } else {
        console.log(3);
    }
}