function solution(strlist) {
    let answer = [];
    
    strlist.forEach(value => {
        answer.push(value.length);
    })
    
    return answer;
}