function solution(n) {
    let answer = 0;
    
    n = String(n);
    answer = [...n].reduce((acc, cur) => acc + Number(cur), 0);
    
    return answer;
}