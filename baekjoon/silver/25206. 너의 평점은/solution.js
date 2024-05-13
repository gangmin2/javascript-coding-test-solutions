const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let totalCredit = 0;
let totalGrade = 0;

input.forEach(element => {
    let [_, credit, grade] = element.split(' ');
    if (grade !== 'P') {
        totalCredit += Number(credit);
        totalGrade += Number(credit) * calculateGrade(grade);
    }
})

console.log(totalGrade / totalCredit);

function calculateGrade(grade) {
    switch (grade) {
        case 'A+':
            return 4.5;
        case 'A0':
            return 4.0;
        case 'B+':
            return 3.5;
        case 'B0':
            return 3.0;
        case 'C+':
            return 2.5;
        case 'C0':
            return 2.0;
        case 'D+':
            return 1.5;
        case 'D0':
            return 1.0;
        case 'F':
            return 0.0;
        default:
            return 0;
    }
}