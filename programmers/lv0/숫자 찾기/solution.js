function solution(num, k) {
    let answer = 0;
    let arr = num.toString().split('');
    
    answer = arr.indexOf(k.toString());
    answer = (answer === -1) ? answer : answer + 1;
    
    return answer;
}