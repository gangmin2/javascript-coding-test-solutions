const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('');
const alpahbet = 'abcdefghijklmnopqrstuvwxyz'.split('');

let result = alpahbet.map(element => input.indexOf(element));

console.log(result.join(' '));