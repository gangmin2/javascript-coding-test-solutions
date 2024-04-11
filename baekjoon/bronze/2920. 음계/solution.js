const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);

let inputStr = input.join('');
let asce = input.sort((a, b) => a - b).join('');
let desc = input.sort((a, b) => b - a).join('');

if (asce === inputStr) {
    console.log('ascending');
} else if (desc === inputStr) {
    console.log('descending');
} else {
    console.log('mixed');
}