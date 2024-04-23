function solution(arr) {
    const [row, col] = [arr.length, arr[0].length];
    
    if (row === col)  return arr;
    
    if (row < col) {
        while (arr.length !== arr[0].length) {
            arr.push(new Array(col).fill(0));
        }
        return arr;
    }
    
    if (row > col) {
        arr.forEach((_, i) => {
            arr[i].push(...new Array(row - col).fill(0));
        })
        return arr;
    }
}