function solution(todo_list, finished) {
    let answer = [];
    finished.forEach((bool, index) => {
        if (!bool)  answer.push(todo_list[index]);
    })
    
    return answer;
}