function solution(box, n) {
    let answer = 0;
    
    let count = box.map(element => parseInt(element / n));
    answer = count.reduce((acc, cur) => acc * cur, 1);
    
    return answer;
}