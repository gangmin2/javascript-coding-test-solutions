function solution(n, numlist) {
    let answer = numlist.filter(element => element % n === 0);
    
    return answer;
}