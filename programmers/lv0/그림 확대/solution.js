function solution(picture, k) {
    let answer = [];
    picture.forEach(element => {
        const str = [...element].map(char => char.repeat(k)).join('');
        for (let i = 0; i < k; i++) {
            answer.push(str);
        }
    })
    
    return answer;
}