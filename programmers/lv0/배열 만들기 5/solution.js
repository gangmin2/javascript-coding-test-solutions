function solution(intStrs, k, s, l) {
    let answer = [];
    answer = intStrs.map(element => {
        return Number(element.slice(s, l + s));
    }).filter(num => num > k);
    
    return answer;
}