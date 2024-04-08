function solution(a, b) {
    let answer = 0;
    let num1 = Number(`${a}${b}`);
    let num2 = 2 * a * b;
    
    answer = (num1 >= num2) ? num1 : num2;
    
    return answer;
}