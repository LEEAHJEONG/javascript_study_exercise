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
