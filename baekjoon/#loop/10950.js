//https://www.acmicpc.net/problem/10950


const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);

for (let i = 1; i <= n; i++) {
   let scoreArray = input[i].split(' '); 
   let a = parseInt(scoreArray[0]);
   let b = parseInt(scoreArray[1]);
   console.log( a + b );
}

