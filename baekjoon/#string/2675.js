//https://www.acmicpc.net/problem/2675

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

const num1 = input.shift();

for (let i = 0; i < num1; i++) {
    let result = '';
    
    const [num2, str] = input[i].split(" ");
    
    for (let j = 0; j < str.length; j++) {
        for (let c = 0; c < num2; c++) {
            result += str[j];
  	}
    }
    
    console.log(result);
}