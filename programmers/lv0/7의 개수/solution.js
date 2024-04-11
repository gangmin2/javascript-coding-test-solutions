function solution(array) {
    let answer = 0;
    answer = array.join('').split('').filter(element => element === '7').length;
    
    return answer;
}