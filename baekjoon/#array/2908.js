//https://www.acmicpc.net/problem/2908

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split(' ');

let A = parseInt(input[0].split('').reverse().join(''));
let B = parseInt(input[1].split('').reverse().join(''));


console.log(Math.max(A, B));

