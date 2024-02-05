//https://www.acmicpc.net/problem/2739

const fs = require('fs');
let n = parseInt(fs.readFileSync("/dev/stdin"))


for (let i = 1; i <= 9; i++) {
    console.log(`${n} * ${i} = ${n * i}`)

}