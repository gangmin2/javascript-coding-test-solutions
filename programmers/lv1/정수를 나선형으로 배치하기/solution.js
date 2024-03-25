function solution(n) {
    let answer = [];

    for (let i = 0; i < n; i++) {
        let arr = [];
        for (let j = 0; j < n; j++) {
            arr.push(0);
        }
        answer.push(arr);
    }
    
    let num = 1;
    let loop = 0;
    while (num <= n * n) {
        // 1
        for (let i = loop; i < n - loop; i++) {
            answer[loop][i] = num;
            num++;
        }

        // 2
        for (let i = loop + 1; i < n - loop; i++) {
            answer[i][n - loop - 1] = num;
            num++;
        }

        // 3
        for (let i = n - loop - 2; i > loop - 1; i--) {
            answer[n-loop-1][i] = num;
            num++;
        }

        // 4
        for (let i = n - loop; i > loop + 2; i--) {
            answer[i-2][loop] = num;
            num++;
        }
        loop++;
    }
    
    return answer;
}

solution(5);