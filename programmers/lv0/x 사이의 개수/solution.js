function solution(myString) {
    let answer = myString.split('x').map(str => str.length);
    return answer;
}