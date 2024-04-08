const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('');

let result = input.map(element => (element === element.toLowerCase()) ? element.toUpperCase() : element.toLowerCase());

console.log(result.join(''));