const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

input.shift();
input.forEach(element => {
    let scores, averageScore, aboveAverage;
    
    scores = element.split(' ').map(Number);
    scores.shift();
    
    averageScore = scores.reduce((acc, cur) => acc + cur, 0) / scores.length;
    aboveAverage = scores.filter(element => element > averageScore);

    console.log(aboveAverage.length / scores.length * 100 + '%');
});