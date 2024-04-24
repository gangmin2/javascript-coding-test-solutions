const fs = require("fs");
const n = Number(fs.readFileSync(0, 'utf-8')) - 1;

for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = n - i; j > 0; j--) {
        str += " ";
    }
    for (let k = 0; k < i; k++) {
        str += "**";
    }
    str += "*";
    console.log(str);
}

for (let i = n; i >= 0; i--) {
    let str = "";
    for (let j = n - i; j > 0; j--) {
        str += " ";
    }
    for (let k = 0; k < i; k++) {
        str += "**";
    }
    str += "*";
    console.log(str);
}