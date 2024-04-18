function solution(num, total) {
    let answer = [];

    // 가능한 모든 시작점 시도
    for (let start = -1000; start <= 1000; start++) {  // 시작점의 범위는 문제 조건에 맞게 조절해야 합니다.
        let sum = 0;
        // 시작점부터 num개의 연속된 정수의 합 계산
        for (let j = 0; j < num; j++) {
            sum += start + j;
        }
        // 합이 total과 일치하면 결과 배열 생성
        if (sum === total) {
            for (let j = 0; j < num; j++) {
                answer.push(start + j);
            }
            return answer;
        }
    }

    // 조건을 만족하는 경우가 없으면 빈 배열 반환
    return answer;
}
