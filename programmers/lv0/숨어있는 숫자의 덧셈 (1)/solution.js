function solution(my_string) {
    let answer = 0;
    
    answer = [...my_string]
        .filter(value => !isNaN(value))
        .reduce((acc, cur) => acc + cur, 0);
    
    return answer;
}