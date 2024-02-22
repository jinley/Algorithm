//https://www.acmicpc.net/problem/2869

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split(' ');

let A = parseInt(input[0]);
let B = parseInt(input[1]);
let V = parseInt(input[2]);

console.log(Math.ceil((V - B) / (A - B)));

