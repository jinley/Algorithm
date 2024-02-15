//https://www.acmicpc.net/problem/10818

const fs = require('fs');
let [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let N = Number(n);
let array = input.split(' ').map(x => Number(x));

let Max = Math.max(...array);
let Min = Math.min(...array);

console.log(Min + ' ' + Max);
