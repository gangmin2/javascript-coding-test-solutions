function solution(arr) {
    let answer = [];
    
    if (!arr.includes(2)) {
        return [-1];
    }
    answer = arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);
    
    return answer;
}