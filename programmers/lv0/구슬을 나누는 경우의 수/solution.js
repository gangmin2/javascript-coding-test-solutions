function solution(balls, share) {
    let answer = combination(balls, share);

    return answer;
}

function combination(n, r) {
    return Math.round(factorial(n) / (factorial(n - r) * factorial(r)));
}

function factorial(n) {
    return (n > 1) ? n * factorial(n - 1) : 1;
}