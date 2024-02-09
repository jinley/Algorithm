// https://www.acmicpc.net/problem/15552

// console.log 한 번만 써서 계산 시간 단축

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = parseInt(input[0]);

let output = '';

for (let i = 1; i <= n; i++) {
    let testCase  = input[i].split(' ');
    let sum = parseInt(testCase[0]) + parseInt(testCase[1])
    output += sum + '\n'
}

console.log(output);




