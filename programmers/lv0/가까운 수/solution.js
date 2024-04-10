function solution(array, n) {
    let answer = 0;
    let distance = 101;
    
    array.sort((a, b) => a - b).forEach(element => {
        if (distance > Math.abs(n - element)) {
            answer = element;
            distance = Math.abs(n - element);
        }
    })
    
    return answer;
}