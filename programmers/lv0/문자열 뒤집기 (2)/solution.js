function solution(my_string, s, e) {
    let answer = '';
    
    let str = my_string.split('');
    let reverseStr = str.slice(s, e + 1).reverse().join('');
    str.splice(s, e + 1 - s, reverseStr);
    
    answer = str.join('');
    
    return answer;
}