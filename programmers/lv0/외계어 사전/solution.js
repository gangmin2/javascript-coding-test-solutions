function solution(spell, dic) {
    let answer = 2;
    spell = spell.sort().join('');
    
    dic.forEach(dict => {
        dict = dict.split('').sort().join('');
        if (spell === dict) {
            answer = 1;
        }
    })

    return answer;
}