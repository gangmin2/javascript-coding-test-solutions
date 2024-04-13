function solution(my_string, queries) {
    let answer = '';
    my_string = my_string.split('');
  
    for (const [s, e] of queries) {
        let str = my_string.slice(s, e + 1).reverse();
        my_string.splice(s, e - s + 1, ...str);
    }
    answer = my_string.join('');

    return answer;
}