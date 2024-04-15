function solution(A, B) {
    let answer = -1;
    
    if (A === B) {
        return 0;
    }
    
    let a = A.split('');
    
    for (let i = 0; i < A.length; i++) {
        a.unshift(a.pop());
        if (a.join('') === B) {
            return i + 1;
        }
    }
    
    return answer;
}