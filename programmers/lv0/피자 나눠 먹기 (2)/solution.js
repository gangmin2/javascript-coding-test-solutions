function solution(n) {
    let answer = 1;
    const SLICE_OF_PIZZA = 6;

    while (1) {
        if ((SLICE_OF_PIZZA * answer) % n === 0) {
            break;
        }
        else {
            answer += 1;
        }
    }

    return answer;
}