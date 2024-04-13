function solution(id_pw, db) {
    let answer = 'fail';
    let [id, pw] = id_pw;
    
    for (let i = 0; i < db.length; i++) {
        let [_id, _pw] = db[i];
        if (id === _id) {
            answer = 'wrong pw';
            if (pw === _pw) {
                answer = 'login';
            }
            return answer;
        }
    };
    
    return answer;
}