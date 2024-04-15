function solution(arr, query) {
    let answer = [];
    
    query.forEach((element, index) => {
        (index % 2) ? arr.splice(0, element) : arr.splice(element + 1);
    })
    answer = arr;
    
    return answer;
}