# 3. 데이터형(Date Type)

- number : 숫자
- string : 문자, 문자열
- boolean : 참(true), 거짓(false)
- null
- undefined
- Bigint
- object : 객체
- symbol

## 숫자 number

```js
const a = 3; //정수(integer)-소수점없는 숫자 1,2,3....
const b = 5.7; // 부동 소수점 숫자(floating point number)
const c = 123e3; // 123000 / 123에 10의 3승
const d = 123e-3; // 0.123

console.log(a);
console.log(b);
console.log(c);
console.log(d);
```

## Bigint (잘 사용안함.)

- 정수는 15개의 숫자, 15자리 정수까지 나타낼 수 있다.
- 그 이상의 정수를 사용하려면 Bigint 형 을 사용해야 한다.

```js
// 15까지 표시할 수 있음
// Bigint 는 n으로 표시
const e = 9999999999999987n;
console.log(e);
```

## 문자열 string

```js
// 문자열
const text1 = "사 과";
console.log("text1에 저장된 내용: ", text1);

// 문자열의 length 프로퍼티 사용, 공백도 포함
console.log("text1의 문자열 길이는 " + text1.length + "입니다.");

// 템플릿 문자열 ``
let username = "홍길동";
let age = 30;

let text2 = "이름:" + username + "나이:" + age;
console.log(text2);

// 이게 사용하기 편하니 자주 활용하자.
let text3 = `이름: ${username}, 나이: ${age}`;
console.log(text3);
```

## 3.4. boolean

```js
let x = 5 > 3; //true
let y = 5 < 3; //false

console.log(x);
console.log(y);
```

## 3.5. undefined, null (빈 문자열)

- 공간은 존재하지만 내용(값)은 없는 것.

```js
let x;
let y = "";

console.log(x);
console.log(typeof y);

// string은 무엇????????
```

## 3.6. 객체 object

```js
// 객체는 중괄호 사용
const member = {
  id: "kdhong",
  name: "홍길동",
  age: 20,
};
console.log(member);
또는;
//아이디 :뒤에 스페이스가 하나 자동으로 입력됨 주의!
console.log("아이디: ", member.id);
console.log(member.name);
console.log(member.age);
```

## 3.7. 심볼 symbol

: 절대로 중복되지 않는다. 절대값..

- number, string, boolean 과 같은 원시데이터를
- 유일한 식별자로서 객체의 속성을 추가하는데 사용한다.

```js
const member = {
  // 키: "값"
  name: "홍길동",
  age: 20,
};
// 여기에 아이디를 추가로 하고싶다면,
// symbol()로 심볼 id 생성 (Symbol `S는 대문자로`)
let id = Symbol("id");
// 객체 member의 키 id에 문자열 "kdhong" 저장
// 심볼의 id가 객체의 키로 사용되면 심볼 데이터형은
// 유일한 식별자이기 때문에 객체의 키 이름이 겹쳐서 충돌하는 경우를 방지한다.
member.id = "kdhong";
console.log(member.id);
console.log(id);

// 객체 member에서 심볼 id가 키로 사용된 요소는
// member[id]에 의해 접근 할 수 있다.
// 심볼 id와 새롭게 생성된 Symbol("id")는 서로 다르다.
console.log(id === Symbol("id"));
```

## 3.8. 배열 array

- index는 0부터 시작

```js
const car = ["현대", "기아", "벤츠", "BMW"];
console.log(car[0]);
```

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
