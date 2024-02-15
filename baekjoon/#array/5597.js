//https://www.acmicpc.net/problem/5597

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

let nonExist = [];

for (let i = 1; i <= input.length + 2; i++) { // 배열에는 28개의 숫자만 있으므로 +2를 해야 함
    if (input.includes(i)) {
        continue;
    } else {
        nonExist.push(i);
    }
};

nonExist.sort((a, b) => a - b);

console.log(nonExist[0]);
console.log(nonExist[1]);
