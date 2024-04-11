function solution(n, control) {
    let answer = 0;
    
    [...control].forEach(element => {
        if (element === 'w')    n += 1;
        if (element === 's')    n -= 1;
        if (element === 'd')    n += 10;
        if (element === 'a')    n -= 10;
    })
    answer = n;
    
    return answer;
}