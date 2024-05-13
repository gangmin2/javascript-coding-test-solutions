const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').trim();

const alpha = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let count = 0;

for (let i = 0; i < input.length; i++) {
    alpha.forEach(element => {
        let str = ''
        for (let j = 0; j < element.length; j++) {
            str += input[i + j];
        }
        if (str === element) {
            i += element.length - 1;
        }
    })
    count++;
}

console.log(count);