const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(' ');
const chessPiece = [1, 1, 2, 2, 2, 8];
const result = input.map((element, index) => chessPiece[index] - Number(element));

console.log(result.join(' '));