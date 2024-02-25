//https://www.acmicpc.net/problem/10813

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);

let array = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
    array[i] = i + 1;
}

for (let i = 1; i <= M; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    let temp = array[a - 1];
    array[a - 1] = array[b - 1];
    array[b - 1] = temp;
}

console.log(array.join(' '));






