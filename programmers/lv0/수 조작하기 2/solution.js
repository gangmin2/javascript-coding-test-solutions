function solution(numLog) {
    let answer = '';
    
    numLog.forEach((num, index) => {
        if (index + 1 < numLog.length) {
            let condition = numLog[index + 1] - num;
            if (condition === 1)    answer += 'w';
            if (condition === -1)   answer += 's';
            if (condition === 10)   answer += 'd';
            if (condition === -10)  answer += 'a';
        }
    })
    
    return answer;
}