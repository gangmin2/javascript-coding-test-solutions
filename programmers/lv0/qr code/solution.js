function solution(q, r, code) {
    let answer = Array.from(code).filter((c, index) => index % q === r).join('');
    return answer;
}