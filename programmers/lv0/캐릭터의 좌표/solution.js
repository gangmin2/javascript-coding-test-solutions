function solution(keyinput, board) {
    let answer = [0, 0];
    board = board.map(n => parseInt(n / 2));

    keyinput.forEach(key => {
        switch (key) {
            case 'up':
                answer[1] += (answer[1] - board[1]) ? 1 : 0;
                break;
            case 'down':
                answer[1] -= (answer[1] + board[1]) ? 1 : 0;
                break;
            case 'left':
                answer[0] -= (answer[0] + board[0]) ? 1 : 0;
                break;
            case 'right':
                answer[0] += (answer[0] - board[0]) ? 1 : 0;
                break;
        }
    })

    return answer;
}