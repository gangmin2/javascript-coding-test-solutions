function solution(l, r) {
    let answer = [];
    
    for (let i = l; i <= r; i++) {
        let flag = i.toString().split('').reduce((acc, num) => acc + (Number(num) % 5), 0);
        if (flag === 0) {
            answer.push(i);
        }
    }
    if (answer.length === 0)  answer.push(-1);
    
    return answer;
}