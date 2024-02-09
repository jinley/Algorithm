// https://www.acmicpc.net/problem/2438

const input = require('fs').readFileSync('/dev/stdin').toString();

let n = parseInt(input);
let sum = '';

for (let i = 1; i <= n; i++) {
    sum += '*'.repeat(i) + '\n';
}

console.log(sum);