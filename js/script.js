// 전역 스코프
let x = 10;
function fnc() {
  console.log(x);
}

fnc();
// 아래 콘솔을 안줘도 값이 나오고 줘도 나온다.
console.log(x);

// 함수 스코프
function fnc1() {
  let y = 20;
  console.log(y);
}

fnc1();
// 아래 콘솔을 주면 아래 콘솔 값은 안 나온다.
console.log(y); // 지역변수 y로 접근 못함

// 블록 스코프
function fnc2() {
  if (true) {
    let z = 30; // 변수 z는 if문 내에서, 즉 블록 내부에서 선언되었음.
  }
  console.log(z); // 블록 외부에서 변수 z에 접근하지 못함.
}
