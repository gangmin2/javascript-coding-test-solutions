function solution(array) {
    let answer = 0;
    let count = new Array(1000).fill(0);
    let mark = 0;

    array.forEach((value) => {
        count[value] += 1;
    })

    count.forEach((value, index) => {
        if (value > answer) {
            answer = value;
            mark = index;
        } else if (value === answer) {
            mark = -1;
        }
    })

    answer = mark;

    return answer;
}