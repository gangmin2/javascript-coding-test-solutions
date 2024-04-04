function solution(my_string) {
    let answer = '';
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    
    answer = Array.from(my_string).filter(value => !vowels.includes(value));
    answer = answer.join('');
    
    return answer;
}