function solution(n_str) {
    let answer = '';
    const length = n_str.length;
    
    if (n_str[0] !== '0') {
        return n_str;
    }
    
    for (let i = 0; i < length; i++) {
        if (n_str[i] !== '0')  break;
        if (n_str[i] === '0') {
            answer = n_str.slice(i + 1);
        }
    }
    
    return answer;
}