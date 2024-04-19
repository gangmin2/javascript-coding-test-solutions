function solution(my_string) {
    let answer = my_string.split(' ').filter(str => str !== "");    
    return answer;
}