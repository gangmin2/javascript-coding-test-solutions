function solution(num1, num2) {
    let answer = (num1 / num2) * 1000;
    answer = Math.trunc(answer);
    return answer;
}