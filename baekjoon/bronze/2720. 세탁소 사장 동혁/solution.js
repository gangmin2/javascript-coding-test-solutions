const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const coins = [25, 10, 5, 1];
input.shift();

input.forEach(change => {
    let result = coins.map(coin => {
        let coinCount = Math.trunc(change / coin)
        change %= coin;

        return coinCount;
    })
    console.log(result.join(' '));
}) 