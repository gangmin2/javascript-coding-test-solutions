function solution(myString, pat) {
    let answer = 0;
    
    myString = myString.replaceAll('A', 'b').replaceAll('B', 'a').toUpperCase();
    answer = myString.includes(pat) ? 1 : 0;
    
    return answer;
}