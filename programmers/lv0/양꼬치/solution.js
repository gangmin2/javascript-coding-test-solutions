function solution(n, k) {
    let answer = 0;
    
    answer += 12000 * n;
    answer += 2000 * (k - parseInt(n / 10));
    
    return answer;
}