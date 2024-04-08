function solution(n) {
    let answer = [];
    let numbers = Array.from({length: n}, (v, i) => i + 1);
    
    answer = numbers.filter(element => n % element === 0);
    
    return answer;
}