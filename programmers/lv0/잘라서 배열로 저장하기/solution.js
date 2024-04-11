function solution(my_str, n) {
    let answer = [];
    str = my_str.split('');
    
    while (str.length > 0) {
        let temp = [];
        for (let i = 0; i < n; i++) {
            temp.push(str.shift());
        }
        answer.push(temp.join(''));
    }
    
    return answer;
}