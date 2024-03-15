//https://www.acmicpc.net/problem/10988

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();

let inputReverse = input.split('').reverse().join('');

console.log(input === inputReverse ? 1: 0);