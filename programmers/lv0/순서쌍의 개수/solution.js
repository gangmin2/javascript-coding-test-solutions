function solution(n) {
    let answer = 0;
    
    for (let i = 1; i < n + 1; i++) {
        (n % i === 0) ? answer++ : null;
    }
    
    return answer;
}