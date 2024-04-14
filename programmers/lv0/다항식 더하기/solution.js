function solution(polynomial) {
    let answer = '';
    let [terms, constant] = [0, 0];
    
    polynomial.split(' + ').forEach(element => {
        if (isNaN(element)) {
            terms += Number(element.replace('x', '')) || 1;
        } else {
            constant += Number(element);
        }
    })
    
    if (terms === 0) {
        answer += '';
    } else if (terms === 1) {
        answer += 'x';
    } else {
        answer += terms + 'x';
    }
    
    if (constant === 0) {
        answer += '';
    } else if (terms === 0) {
        answer += constant;
    } else {
        answer += ` + ${constant}`;
    }
    
    return answer
}