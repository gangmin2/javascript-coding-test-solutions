function solution(str_list, ex) {
    let answer = str_list.reduce((acc, cur) => cur.includes(ex) ? acc : acc + cur, '');
    return answer;
}