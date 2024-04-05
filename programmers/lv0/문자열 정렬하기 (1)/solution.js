function solution(my_string) {
    let answer = [];
    answer = [...my_string].filter(element => !isNaN(element)).sort((a, b) => a - b);
    
    return answer;
}