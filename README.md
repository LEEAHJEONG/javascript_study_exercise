# 4. 연산자

- 산술연산자
- 할당연산자
- 비교연산자
- 논리연산자

## 4.1. 산수연산자

```txt
+
-
*
/
% 나머지 계산 2n
```

## 4.2. 할당연산자

- 할당(assignmen) 연산자는 데이터나 변수 값을 변수에 저장, 즉 메모리 공간에 할당하는 역활

```js
let a = 10,
  b = 20,
  c = 30,
  d = 40,
  e = 50;

let f = "안녕";

a += 3; // 13, a=a+3
a -= 3; // 12, b=b-8
c *= 2; // 60, c=c*2
d /= 10; // 4, d=d/10
e %= 6; // 2, e=e%6
f += "하세요"; // "안녕하세요", f=f+"하세요"

console.log(f);
```

```js
let name = "홍길동";
let tel = "010-1234-5678";
let age = 30;

let text = "";
text += "<table border=1>";
text += "<tr><th>이름</th><th>전화번호</th><th>나이</th></tr>";
text +=
  "<tr><td>" + name + "</td><td>" + tel + "</td><td>" + age + "</td></tr>";
text += "</table>";

document.write(text);
```

## 4.3. 비교연산자

```js
console.log(a == b); // true
console.log(a === b); // false
console.log(a != b); // false a랑 b랑 다르냐(같지않다)
console.log(a !== b); // true a랑 b랑 데이터타입도 다르냐(같지않다)
console.log(a > c); // false
console.log(a < c); // true
console.log(a >= c); // false
console.log(a <= c); // true
```

## 4.4. 논리 연산자

- && : `AND` 두 조건이 모두 모두 true일 경우에만 최종 결과 true
- || : `OR` 두 조건 중 하나만 true가 되어도 최종결과 true
- ! : `NOT` 결과가 true인 경우 false, 반대로 false 인 경우 true
