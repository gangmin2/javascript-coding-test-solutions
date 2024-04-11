function solution(numbers) {
    let answer = 0;
    let str_numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    str_numbers.forEach((element, index) => {
        numbers = numbers.replaceAll(element, index);
    })
    
    answer = Number(numbers);
    
    return answer;
}