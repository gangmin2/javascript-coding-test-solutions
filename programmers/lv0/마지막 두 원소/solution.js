function solution(num_list) {
    let answer = num_list;
    let [before, last] = num_list.slice(-2);
    
    (last > before) ? answer.push(last - before) : answer.push(last * 2);
    
    return answer;
}