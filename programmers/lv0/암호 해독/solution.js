function solution(cipher, code) {
    let answer = '';
    answer += [...cipher].filter((element, index) => (index + 1) % code === 0).join('');
    
    return answer;
}