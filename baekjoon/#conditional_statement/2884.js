// https://www.acmicpc.net/problem/2884

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ');
    

let H = parseInt(inputData[0]);
let M = parseInt(inputData[1]);

if ( M >= 45 ) {
    M -= 45;
} else {
    if (H === 0) {
        H = 24;
    }
    H -= 1;
    M = 60 - (45 - M);
}

console.log(H, M);