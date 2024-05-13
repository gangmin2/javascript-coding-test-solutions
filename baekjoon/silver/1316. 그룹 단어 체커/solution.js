const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').trim().split('\n');
input.shift();

let count = 0;
input.forEach(word => {
    if (isGroupWord(word))  count++;
})

console.log(count);

function isGroupWord(word) {
    let checker = new Set(word[0]);
    for (let i = 1; i < word.length; i++) {
        if (word[i] === word[i - 1]) {
            continue;
        }
        if (checker.has(word[i])) {
            return false;
        }
        checker.add(word[i]);
    }
    return true;
}