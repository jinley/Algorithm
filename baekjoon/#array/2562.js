//https://www.acmicpc.net/problem/2562

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let array = input.map((el) => Number(el));
let Max = Math.max(...array)
let index = array.indexOf(Max);

console.log(Max);
console.log(index + 1);