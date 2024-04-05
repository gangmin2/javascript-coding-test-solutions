function solution(my_string) {
    let answer = '';
    answer = [...my_string].map(element => (element === element.toUpperCase()) ? element.toLowerCase() : element.toUpperCase()).join('');
    
    return answer;
}