function solution(myString) {
    let answer = [...myString].map(str => str < 'l' ? 'l': str).join('');
    return answer;
}