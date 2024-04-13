function solution(sides) {
    let answer = 0;
    let [small, big] = sides.sort((a, b) => a - b);
    
    // 입력값 중 큰 수가 가장 긴 변일 때
    for (let i = 1; i <= big; i++) {
        if (small + i > big) {
            answer += 1;
        }
    }
    
    // 나머지 한 변이 가장 긴 변일 때
    for (let i = big + 1; i < small + big; i++) {
        answer += 1;
    }
    
    return answer;
}