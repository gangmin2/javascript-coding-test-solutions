function solution(money) {
    let answer = [];
    answer = [parseInt(money / 5500), money % 5500];

    return answer;
}