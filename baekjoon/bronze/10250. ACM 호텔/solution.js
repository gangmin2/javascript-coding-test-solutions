const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

input.shift();
input.forEach(element => {
    const [h, w, n] = element.split(' ').map(Number);
    let yy, xx;

    if (n % h === 0) {
        yy = h;
        xx = Math.trunc(n / h);
    } else {
        yy = n % h;
        xx = Math.trunc(n / h) + 1;
    }
    let result = '' + yy + formatData(xx);
    console.log(result);
})

function formatData(number) {
    return (number < 10) ? '0' + number : number;
}