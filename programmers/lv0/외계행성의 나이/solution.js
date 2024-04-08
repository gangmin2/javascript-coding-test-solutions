function solution(age) {
    let answer = '';
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    
    Array.from(String(age)).forEach(element => answer += alphabets[Number(element)]);
    
    return answer;
}