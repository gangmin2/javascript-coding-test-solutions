function solution(numbers) {
    let answer = 0;
    
    numbers.forEach((value) => {
        answer += value;
    })
    
    answer /= numbers.length
    
    return answer;
}