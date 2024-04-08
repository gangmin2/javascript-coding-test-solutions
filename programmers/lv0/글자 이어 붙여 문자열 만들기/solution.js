function solution(my_string, index_list) {
    let answer = '';
    answer = index_list.reduce((acc, cur) => acc + my_string[cur], answer);
    
    return answer;
}