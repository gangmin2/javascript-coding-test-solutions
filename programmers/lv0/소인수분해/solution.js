function solution(n) {
    let answer = [];
    
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            if (isPrime(i)) {
                answer.push(i);
                n /= i;
            }
        }
    }
    
    return answer;
}

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}