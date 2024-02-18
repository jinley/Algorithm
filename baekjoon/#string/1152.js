//https://www.acmicpc.net/problem/1152

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

let a = input[0] === '' ? 0 : input.length;

console.log(a);