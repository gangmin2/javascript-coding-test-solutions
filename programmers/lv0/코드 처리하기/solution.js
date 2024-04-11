function solution(code) {
    let answer = '';
    let mode = 0;
    
    code.split('').forEach((element, index) => {
        if (element === '1') {
            mode = mode ? 0 : 1;
        } else {
            if (mode === index % 2) {
                answer += element;
            }
        }
    })

    answer = answer || 'EMPTY';
    
    return answer;
}