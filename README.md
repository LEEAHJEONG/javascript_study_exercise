# 2. variable(변수)

- 데이터가 컴퓨터 메모리에 저장되는 주소

## 2.1. 변수 선언

- var, let, const 키워드
<!-- var는 거의 안씀 const를 써보고 오류나면 let을 써보쟝 -->
- const를 주로 사용하고 안되면 let으로 바꾸자

```js
let keyword = "키워드 let으로 변수 name을 선언";
console.log(keyword);
// 필요에 따라 값을 재할당 할 수 있다.
name = "변수 name에 홍길동 저장 name은 홍길동 값을 가짐";
console.log(keyword);
```

## 2.1.2. 변수 이름 짓기

- 변수 이름에는 영어, 숫자, 밑줄, $ 사용가능
- 숫자로는 시작하면 안된다.
  - 예시로 키워드1, 키워드2 는 가능하지만 1키워드, 2키워드는 안된다
- 대소문자 구분
- 일반적으로 카멜케이스를 사용한다.

```js
예시로;
const a = 5;
const font1 = "돋음";
const _price = 20000;
const maxwidth = 600;
const max_width = 800;
```
