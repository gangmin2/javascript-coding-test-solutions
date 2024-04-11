function solution(num_list) {
    let answer = 0;
    let multiply = num_list.reduce((acc, cur) => acc * cur, 1);
    let squared = num_list.reduce((acc, cur) => acc + cur, 0) ** 2;
    
    answer = (multiply < squared) ? 1 : 0;
    
    return answer;
}