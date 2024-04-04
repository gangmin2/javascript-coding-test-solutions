function solution(s) {
    let answer = 0;
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    numbers.map((value, index) => {
        s = s.replaceAll(value, index);
    });
    
    answer = Number(s);
    
    return answer;
}