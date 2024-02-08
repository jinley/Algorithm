//https://www.acmicpc.net/problem/25304

const fs = require('fs');
const [x, n, ...item] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const price = parseInt(x);
const numberOf = parseInt(n);

let totalSum = 0;

for (let i = 0; i < numberOf; i++) {
    let itemArray = item[i].split(" ");
    let sum = parseInt(itemArray[0]) * parseInt(itemArray[1]);
    totalSum += sum;
}

if (totalSum === price) {
    console.log('Yes');
} else {
    console.log('No');
}
