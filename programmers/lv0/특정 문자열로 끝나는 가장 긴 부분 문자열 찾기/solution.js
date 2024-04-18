function solution(myString, pat) {
    let answer = '';
    let index = myString.lastIndexOf(pat) + pat.length;
    answer = myString.slice(0, index);
    
    return answer;
}