function solution(arr, queries) {
    let answer = [];
    
    queries.forEach(([s, e]) => {
        for (let i = s; i <= e; i++) {
            arr[i]++;
        }
    })
    answer = arr;
    
    return answer;
}