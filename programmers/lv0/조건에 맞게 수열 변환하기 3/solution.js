function solution(arr, k) {
    let answer = arr.map(num => (k % 2) ? num * k : num + k);
    return answer;
}