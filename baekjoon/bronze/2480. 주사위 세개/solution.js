const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

let [dice1, dice2, dice3] = input.map(Number);
let award = 0;


if (dice1 === dice2 && dice2 === dice3) {
    award = 10000 + dice1 * 1000;
} else if (dice1 === dice2) {
    award = 1000 + dice1 * 100;
} else if (dice2 === dice3) {
    award = 1000 + dice2 * 100;
} else if (dice3 === dice1) {
    award = 1000 + dice3 * 100;
} else {
    award = Math.max(dice1, dice2, dice3) * 100;
}

console.log(award);