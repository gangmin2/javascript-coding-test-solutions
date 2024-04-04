function solution(sides) {
    let answer = 0;
    
    let [a, b, c] = sides.sort((a, b) => a - b);
    answer = (a + b > c) ? 1 : 2;
    
    return answer;
}