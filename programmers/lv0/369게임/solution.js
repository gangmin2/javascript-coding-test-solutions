function solution(order) {
    let answer = 0;
    answer = order.toString().split('').filter(element => element === '3' || element === '6' || element === '9').length;
    
    return answer;
}