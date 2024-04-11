function solution(arr, queries) {
    let answer = [];
    
    queries.forEach(element => {
        let [i, j] = element;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    })
    answer = arr;
    
    return answer;
}