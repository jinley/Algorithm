//https://www.acmicpc.net/problem/3052

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

let array = input.map(x => x % 42);
let overlap = array.filter((item, index) => array.indexOf(item) !== index);

console.log(array.length - overlap.length);
