//https://www.acmicpc.net/problem/25206

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let T = 0; // 학점의 총합
let S = 0; // 전공과목별 학점

const score = {
    "A+": 4.5,
    "A0": 4.0,
    "B+": 3.5,
    "B0": 3.0,
    "C+": 2.5,
    "C0": 2.0,
    "D+": 1.5,
    "D0": 1.0,
    "F": 0.0
}

for (let i = 0; i < input.length; i++) {
    let array = input[i].split(' ');
    let credit = Number(array[1]);
    let grade = array[2];

    if (grade !== "P") {
        T += credit;
        S += (credit * score[grade]);
    }
} 

console.log(S / T);