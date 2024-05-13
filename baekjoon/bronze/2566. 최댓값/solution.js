const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').trim().split('\n');
input = input.map(element => element.split(' ').map(Number));
let max = 0;
let row;
let col;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] >= max) {
      max = input[i][j];
      row = i + 1;
      col = j + 1;
    }
  }
}

console.log(max);
console.log(row, col);