// https://www.acmicpc.net/problem/11022

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = parseInt(input[0]);

for (let i = 1; i <= n; i++) {
    let array = input[i].split(' ');
    let A = parseInt(array[0]);
    let B = parseInt(array[1]);
    console.log(`Case #${i}: ${A} + ${B} = ${A + B}`);
}