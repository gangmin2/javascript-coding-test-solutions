function solution(babbling) {
    let answer = 0;
    const babble = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach(word => {
        babble.forEach(bab => {
            word = word.replace(bab, ' ');
        })
        if (word.replaceAll(' ', '') === '') {
            answer += 1;
        }
    })
    
    return answer;
}