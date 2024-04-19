function solution(strArr) {
    let answer = strArr.filter(str => !str.includes('ad'));    
    return answer;
}