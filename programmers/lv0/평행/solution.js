function solution(dots) {
    let answer = 0;
    let [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
    let m1 = Math.abs((y2 - y1) / (x2 - x1));
    let m2 = Math.abs((y4 - y3) / (x4 - x3));
    
    if (m1 === m2)  answer = 1;
    
    return answer;
}