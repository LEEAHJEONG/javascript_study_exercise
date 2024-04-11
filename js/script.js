// 이중 for문
// 구구단
// 2단부터 만들어보자
let x = 2;
let result;

for (let y = 1; y <= 9; y++) {
  result = x * y;
  console.log(result);
}

let resultAll;

for (let x = 2; x <= 9; x++) {
  for (let y = 1; y <= 9; y++) {
    resultAll = x * y;
    console.log(resultAll);
  }
}
