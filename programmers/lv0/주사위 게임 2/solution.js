function solution(a, b, c) {
    let answer = 0;
    
    if (a === b && b === c) {
        answer = 27 * (a ** 6);
    } else if (a !== b && b !== c && c !== a) {
        answer = a + b + c;
    } else {
        answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
    }
    
    return answer;
}