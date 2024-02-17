//https://www.acmicpc.net/problem/27866

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let S = input[0];
let i = Number(input[1]);

let array = S.split('');
console.log(array[i - 1]);