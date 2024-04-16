function solution(num_list) {
    let answer = 0;
    let odd = 0;
    let even = 0;
    
    num_list.forEach((element, index) => {
        (index % 2) ? odd += element : even += element;
    })
    
    answer = Math.max(odd, even);
    
    return answer;
}