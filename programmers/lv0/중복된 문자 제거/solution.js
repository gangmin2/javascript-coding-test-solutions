function solution(my_string) {
    let answer = '';
    
    my_string.split('').forEach(element => {
        if (!answer.includes(element)) {
            answer += element;
        }
    })
    
    return answer;
}