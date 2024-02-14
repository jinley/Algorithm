//https://www.acmicpc.net/problem/10871

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let X = parseInt(input[0].split(' ')[1]);
let array = input[1].split(' ').map(x => Number(x));

let output = array.filter((el) => el < X);

console.log(output.join(' '));