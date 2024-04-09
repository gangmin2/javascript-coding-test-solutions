function solution(n) {
    for (let i = 1; i <= 10; i++) {
        if (fac(i) === n) {
            return i;
        }
        if (fac(i) > n) {
            return i - 1;
        }
    }
}

function fac(n) {
    return (n > 1) ? n * fac(n - 1) : 1;
}