//https://www.acmicpc.net/problem/1546

const fs = require('fs');
let [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let N = Number(n);
let array = input.split(' ').map(x => Number(x));

let M = Math.max(...array);

let fixedArray = array.map(x => x / M * 100);

let sum = 0;

for (let i = 0; i < N; i++) {
    sum += fixedArray[i];
}

let avg = sum / N;

console.log(avg);


