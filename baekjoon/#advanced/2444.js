//https://www.acmicpc.net/problem/2444

const fs = require('fs');
let n = parseInt(fs.readFileSync("/dev/stdin").toString().trim());


for (let i = 1; i < n; i++) {
    let blank = ' '.repeat(n - i);
    let stars = '*'.repeat(i + (i - 1));
    console.log(blank + stars);
}

for (let i = n; i > 0; i--) {
    let blank = ' '.repeat(n - i);
    let stars = '*'.repeat(i + (i - 1));
    console.log(blank + stars); 
}

