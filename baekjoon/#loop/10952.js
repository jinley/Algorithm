// https://www.acmicpc.net/problem/10952

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

input.splice(input.length-1, 1);

for (let i = 0; i < input.length-1; i++) {
    let array = input[i].split(' ');
    console.log(parseInt(array[0]) + parseInt(array[1]));
}