function solution(i, j, k) {
    let answer = 0;
    let str = '';
    
    for (i; i <= j; i++) {
        str += i;
    }
    
    answer = Array.from(str).filter(element => element === k.toString()).length;
    
    return answer;
}