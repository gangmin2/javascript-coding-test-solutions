const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
 
 console.log((input === input.split('').reverse().join('')) ? 1 : 0);