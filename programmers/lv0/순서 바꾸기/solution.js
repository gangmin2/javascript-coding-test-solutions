function solution(num_list, n) {
    let answer = [...num_list.slice(n), ...num_list.slice(0, n)];
    return answer;
}