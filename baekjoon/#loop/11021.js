// https://www.acmicpc.net/problem/11021



const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = parseInt(input[0]);

for (let i = 1; i <= n; i++) {
    let array = input[i].split(' ');
    console.log(`Case #${i}: ${parseInt(array[0]) + parseInt(array[1])}`);
}