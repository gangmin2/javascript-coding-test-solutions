function solution(my_strings, parts) {
    let answer = '';
    
    my_strings.forEach((str, index) => {
        const [s, e] = parts[index];
        answer += str.slice(s, e + 1);
    })
    
    return answer;
}