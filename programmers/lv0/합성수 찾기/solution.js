function solution(n) {
    let answer = 0;
    let numbers = Array.from({length: n}, (v, i) => i + 1);
    
    answer = numbers.filter(number => isCompositeNumber(number)).length;
    
    return answer;
}

function isCompositeNumber(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count += 1
        }
    }
    if (count >= 3) {
        return count;
    }
    return;
}