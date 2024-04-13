function solution(dots) {
    let answer = 0;
    
    let x = [...new Set(dots.map(dot => dot[0]))];
    let y = [...new Set(dots.map(dot => dot[1]))];
    
    let w = Math.abs(x[0] - x[1]);
    let h = Math.abs(y[0] - y[1]);
    
    answer = w * h;
    
    return answer;
}