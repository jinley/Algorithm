//https://www.acmicpc.net/problem/11720

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let n = parseInt(input[0]);
let array = input[1].split('').map(Number);

let sum = 0;

for (let i = 0; i < n; i++) {
    sum += array[i];
}

console.log(sum);