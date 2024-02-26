//https://www.acmicpc.net/problem/10811

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);

let array = new Array(N).fill(1).map((e, i) => e + i); // 바구니 생성
x
for (let i = 1; i <= M; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    let basket1 = array.slice(a - 1, b).reverse();
    array.splice(a - 1, b-a+1, ...basket1);
    
}

console.log(array.join(' '));






