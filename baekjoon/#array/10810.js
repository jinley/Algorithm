//https://www.acmicpc.net/problem/10810

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(x => Number(x));

// 바구니 배열 생성하기 => 생성자 함수 이용
let array = new Array(N).fill(0); // 초기값을 설정하지 않고 생성된 배열의 요소값은 undefined 이므로 fill(0) 필요

// 공을 넣는 법 배열 생성하기
for (let i = 1; i <= M; i++) {
    let [start, end, ball] = input[i].split(' ').map(x => Number(x));

    for (let I = start; I <= end; I++) {
        array[I-1] = ball;
    }
}

console.log(array.join(' '));






