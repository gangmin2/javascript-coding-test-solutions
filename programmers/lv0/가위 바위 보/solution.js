function solution(rsp) {
    let answer = '';
    
    for (let element of rsp) {
        answer += winRsp(element);
    }
    
    return answer;
}

function winRsp(rsp) {
    if (rsp === '0') {
        return '5'
    }
    if (rsp === '2') {
        return '0';
    }
    if (rsp === '5') {
        return '2';
    }
}