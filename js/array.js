const numbers = [1, 2, 3, 4, 5];

// map()메서드는 forEach() 세거드와 달리 매개변수로 사용되는 함수에서
// 값을 반환하는 return이 존재
// ma

// let arr = numbers.map(function (num) {
//   return num * num;
// }); --> 함축하면 아래 코드가 됨.
let arr = numbers.map((num) => num * num);
// console.log(num);
console.log(arr);

document.getElementById("show").innerHTML = arr;
