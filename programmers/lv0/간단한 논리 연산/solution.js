function solution(x1, x2, x3, x4) {
    let answer = false;
    if ((x1 || x2) && (x3 || x4)) {
        answer = true;
    }
    
    return answer;
}