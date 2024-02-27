//https://www.acmicpc.net/problem/10809

const fs = require('fs');
let word = fs.readFileSync("/dev/stdin").toString().split('');

let alphabet = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));
// v: element, i: index

let result = [];

for (i = 0; i < 26; i++) { 
    result.push(word.indexOf(alphabet[i]));
}

console.log(result.join(' '));