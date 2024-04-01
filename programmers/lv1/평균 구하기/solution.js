function solution(arr) {
    let answer = 0;
    
    answer = arr.reduce((acc, cur) => acc + cur, answer)
    answer /= arr.length;
    
    return answer;
}