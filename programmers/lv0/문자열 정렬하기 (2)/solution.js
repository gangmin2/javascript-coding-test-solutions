function solution(my_string) {
    let answer = '';
    my_string = my_string.toLowerCase();
    answer = Array.from(my_string).sort().join('');
    
    return answer;
}