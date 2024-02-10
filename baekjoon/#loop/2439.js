// https://www.acmicpc.net/problem/2439

const input = require('fs').readFileSync('/dev/stdin').toString();

let n = parseInt(input);
let sum = '';

for (let i = 1; i <= n; i++) {
    sum += " ".repeat (n - i) + "*".repeat(i) + '\n';
}

console.log(sum);


