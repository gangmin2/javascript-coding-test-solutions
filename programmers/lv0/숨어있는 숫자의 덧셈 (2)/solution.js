function solution(my_string) {
    let answer = 0;
    let num = '';
    
    [...my_string].forEach(element => {
        if (!isNaN(Number(element))) {
            num += element;
        } else {
            answer += Number(num);
            num = '';
        }
    })
    answer += Number(num);
    
    return answer;
}