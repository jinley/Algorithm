//https://www.acmicpc.net/problem/3003

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const array = [1, 1, 2, 2, 2, 8];
let output = [];

for (let i = 0; i < array.length; i++) { 
   output.push(array[i] - input[i]);
}

console.log(output.join(' '));