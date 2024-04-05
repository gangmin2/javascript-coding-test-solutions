function solution(numbers) {
    let answer = 0;
    
    numbers = numbers.sort((a, b) => a - b);
    [num1, num2] = [numbers[0] * numbers[1], numbers.at(-1) * numbers.at(-2)];
    
    answer = Math.max(num1, num2);
    
    return answer;
}