function solution(quiz) {
    let answer = [];
    
    answer = quiz.map(element => {
        const [x, op, y, equal, result] = element.split(' ').map(value => isNaN(value) ? value : Number(value));
        
        if (op === '+') {
            return (x + y === result) ? 'O' : 'X';
        }
        if (op === '-') {
            return (x - y === result) ? 'O' : 'X';
        }
    })
    
    return answer;
}