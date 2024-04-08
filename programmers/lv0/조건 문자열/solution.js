function solution(ineq, eq, n, m) {
    let answer = 0;
    let operator = ineq + eq;
    
    if (operator === '>=') {
        answer = (n >= m) ? 1 : 0;
    }
    if (operator === '<=') {
        answer = (n <= m) ? 1 : 0;
    }
    if (operator === '>!') {
        answer = (n > m) ? 1 : 0;
    }
    if (operator === '<!') {
        answer = (n < m) ? 1 : 0;
    }
    
    return answer;
}