function solution(my_string, n) {
    let answer = '';
    
    Array.from(my_string).forEach(s => {
        answer += s.repeat(n);
    })
    
    return answer;
}