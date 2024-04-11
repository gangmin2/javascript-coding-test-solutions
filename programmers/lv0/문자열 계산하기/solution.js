function solution(my_string) {
    let answer = 0;

    strArr = my_string.split(' ').map(element => (isNaN(element)) ? element : Number(element));
    strArr.forEach((element, index) => {
        if (index === 0) {
            answer = element;
        }
        if (isNaN(element)) {
            if (element === '+') {
                answer += strArr[index + 1];
            } else {
                answer -= strArr[index + 1];
            }
        }
    })
    
    return answer;
}