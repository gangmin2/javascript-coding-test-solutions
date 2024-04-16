function solution(common) {
    let answer = 0;
    
    if (common[0] - common[1] === common[1] - common[2]) {
        let common_difference = common[1] - common[0];
        answer = common.at(-1) + common_difference;
    } else {
        let common_ratio = common[1] / common[0];
        answer = common.at(-1) * common_ratio;
    }
    
    return answer;
}