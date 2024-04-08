function solution(str1, str2) {
    let answer = '';
    answer = [...str1].map((element, index) => element + str2[index]).join('');
    
    return answer;
}