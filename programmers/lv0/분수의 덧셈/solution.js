function solution(numer1, denom1, numer2, denom2) {
    let numer3 = (numer1 * denom2) + (numer2 * denom1);
    let denom3 = denom1 * denom2;
    let answer = [numer3, denom3];
    
    let i = 2;
    while (i <= numer3 && i <= denom3) {
        if (numer3 % i === 0 && denom3 % i === 0) {
            numer3 /= i;
            denom3 /= i;
            answer = [numer3, denom3];
            i = 2;
            continue;
        }
        i++;
    }
    
    return answer;
}