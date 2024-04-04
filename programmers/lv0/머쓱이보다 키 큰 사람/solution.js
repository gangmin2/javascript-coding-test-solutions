function solution(array, height) {
    let answer = 0;
    let tallerArr = array.filter(value => value > height);
    
    answer = tallerArr.length;
    
    return answer;
}