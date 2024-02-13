//https://www.acmicpc.net/problem/10807

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = parseInt(input[0]);
const x = parseInt(input[2]);
let array = input[1].split(' ');

let number = 0;

for (let i = 0; i < n; i++) {
    if (parseInt(array[i]) === x) {
        number += 1;
    }
}

console.log(number);





