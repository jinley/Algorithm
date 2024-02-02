// https://www.acmicpc.net/problem/2525

let [current, cooktime] = require("fs").readFileSync(0).toString().split("\n");
let [H, M] = current.split(" ").map(Number);


M += parseInt(cooktime); 


if (M >= 60) {
    H += Math.floor(M / 60);
    M = M % 60;
}

// h가 24가 될 때
if (H >= 24) {
    H = H % 24;
}


console.log(H + " " + M);