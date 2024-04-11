function solution(arr, queries) {
    let answer = [];
    
    queries.forEach(element => {
        let [s, e, k] = element;
        let overArr = arr.slice(s, e + 1).filter(value => value > k);
        
        (overArr.length === 0) ? answer.push(-1) : answer.push(Math.min(...overArr));
    })
    
    return answer;
}