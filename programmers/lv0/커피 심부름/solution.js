function solution(order) {
    let answer = 0;
    answer = order.reduce((acc, cur) => (cur.includes("cafelatte")) ? acc + 5000 : acc + 4500, answer);
    
    return answer;
}