function solution(numbers, k) {
    let answer = 2 * k - 1;
    answer %= numbers.length;
    
    if (answer === 0) {
        answer = numbers.length;
    }

    return answer;
}