function solution(n) {
    let answer = [[]];
    let arr = Array.from({ length: n }, () => new Array(n).fill(0));
    
    arr.forEach((_, i) => {
        arr[i].forEach((_, j) => {
            if (i === j) {
                arr[i][j] = 1;
            }
        })
    })
    answer = arr;
    
    return answer;
}