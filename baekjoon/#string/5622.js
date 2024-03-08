//https://www.acmicpc.net/problem/5622

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split('');

const alphabet = {
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ',
}

let sum = 0;

for (let i = 0; i < input.length; i++) {
    for (let j = 2; j <= 9; j++) {
        if(alphabet[j].split('').includes(input[i])) {
            let dialTime = j + 1;
            sum += dialTime;
        }
    }
}

console.log(sum);