function solution(emergency) {
    let answer = [];
    let sortedEmergency = [...emergency].sort((a, b) => b - a);
    answer = emergency.map(element => sortedEmergency.indexOf(element) + 1);
    
    return answer;
}