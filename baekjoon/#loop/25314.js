//https://www.acmicpc.net/problem/25314

const fs = require('fs');
const n = fs.readFileSync("/dev/stdin").toString().trim();

const number = parseInt(n) / 4;

let str = '';

for (let i = 1; i <= number; i++) {
    str += 'long ';
}

console.log(`${str}int`);

