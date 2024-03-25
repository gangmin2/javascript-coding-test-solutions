function solution(array) {
    let answer = 0;
    let index = Math.trunc(array.length / 2);

    array.sort((a, b) => a - b);
    answer = array[index];
    
    return answer;
}