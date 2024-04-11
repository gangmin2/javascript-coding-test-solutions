const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

input.shift();
input.forEach(element => {
    let point = 0;
    let oxSheet = element.split('X');

    point = oxSheet.reduce((acc, cur) => acc + getPoint(cur.length), point);
    console.log(point);
});

function getPoint(n) {
    return n * (n + 1) / 2;
}