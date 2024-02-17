//https://www.acmicpc.net/problem/9086

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

for (let i = 1; i < input.length; i++) {
    let testCase = input[i].split('');
    let first = testCase[0];
    let last = testCase[testCase.length - 1];
    console.log(first + last);
}