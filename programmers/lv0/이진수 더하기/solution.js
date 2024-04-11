function solution(bin1, bin2) {
    let answer = '';

    answer = Number(bin1) + Number(bin2);
    answer = answer.toString().split('').reverse().map(Number);
    answer.forEach((element, index) => {
        if (element >= 2) {
            answer[index] -= 2;
            if (index === answer.length - 1) {
                answer.push(1);
            } else {
                answer[index + 1] += 1;
            }
        }
    });
    answer = answer.reverse().join('');

    return answer;
}