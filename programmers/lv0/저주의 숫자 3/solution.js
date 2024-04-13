function solution(n) {
    let answer = 0;
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i.toString().includes('3')) {
            n++;
        }
    }
    answer = n;
    
    return answer;
}