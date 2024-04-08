const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('');

let grade = 0;

switch (input[0]) {
    case 'A':
        grade = 4.0;
        break;
    case 'B':
        grade = 3.0;
        break;
    case 'C':
        grade = 2.0;
        break;
    case 'D':
        grade = 1.0;
        break;
    case 'F':
        grade = 0.0;
}

switch (input[1]) {
    case '+':
        grade += 0.3;
        break;
    case '-':
        grade -= 0.3;
        break;
}

console.log(grade.toFixed(1));