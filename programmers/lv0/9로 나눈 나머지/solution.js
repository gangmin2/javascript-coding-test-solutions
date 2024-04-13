function solution(number) {
    let answer = 0;

    number = number.split('').reduce((acc, cur) => acc + Number(cur), 0);
    answer = number % 9;
    
    return answer;
}