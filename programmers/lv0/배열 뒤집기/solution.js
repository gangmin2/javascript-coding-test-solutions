function solution(num_list) {
    let answer = [];
    const length = num_list.length;

    for (let i = 0; i < length; i++) {
        answer.push(num_list.pop());
    }

    return answer;
}