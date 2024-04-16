function solution(names) {
    let answer = names.filter((_, index) => index % 5 === 0);
    return answer;
}