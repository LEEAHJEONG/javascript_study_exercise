## 11.1 객체 생성

- 객체(object)는 프로퍼티(property)와 메서드(method) 의 집합이다.
- 객체의 프로퍼티는 변수와 같은 개념
- 객체의 메서드는 함수는 아니지만 거의 동일하다.
- 특정 객체에 소속된 변수와 함수를 그 객체의 프로퍼티와 메서드라고 부른다.
- 자바스크립트에서 객체는 아주 중요한 개념이다.
- 함수(function), 배열(array), 날짜(date), 수학(math) ...등등 모든 것이 객체이다.
- 자바스크립트의 숫자(number), 문자열(string)도 객체의 일종이다.

```js
// 1. 객체 member를 생성
// 객체를 생성할 때는 일반적으로 키워드 const를 사용
const member = {
  // member 객체는 id, username, age 세 개의 프로퍼티로 구성
  // 프로퍼티에 id, username, age를 키(key) 라고 한다.
  // 이에 대응되는 "kdhong", "홍길동", 30을 값(value) 라고 한다.
  id: "kdhong",
  username: "홍길동",
  age: 30,
};

let text;
text = `${member.id} ${member.username} ${member.age}`;
// console.log("member 객체는", text);

document.getElementById("show").innerHTML = text;
```

## 11.2. 프로퍼티

- 객체는 프로퍼티와 메서드로 구성되어 있다.

### 11.2.1. for in 문으로 프로퍼티 읽기

```js
// 1. 객체 member를 생성
// 객체를 생성할 때는 일반적으로 키워드 const를 사용
const member = {
  // member 객체는 id, username, age 세 개의 프로퍼티로 구성
  // 프로퍼티에 id, username, age를 키(key) 라고 한다.
  // 이에 대응되는 "kdhong", "홍길동", 30을 값(value) 라고 한다.
  id: "kdhong",
  username: "홍길동",
  age: 30,
};

let text = "";

// for in 문에서 x 는 객체 member에 존재하는 프로퍼티를 가진다.
// 따라서 반복 루프에서 변수 x 의 값은 id, username, age가 된다.
for (x in member) {
  text += member[x];
}

document.getElementById("show").innerHTML = text;
```

## 11.2.2. 프로퍼티 추가하기

```js
// 1. 객체 member를 생성
// 객체를 생성할 때는 일반적으로 키워드 const를 사용
const member = {
  // member 객체는 id, username, age 세 개의 프로퍼티로 구성
  // 프로퍼티에 id, username, age를 키(key) 라고 한다.
  // 이에 대응되는 "kdhong", "홍길동", 30을 값(value) 라고 한다.
  id: "kdhong",
  username: "홍길동",
  age: 30,
};

member.email = "kdhong@gmil.com";

let text = "";

// for in 문에서 x 는 객체 member에 존재하는 프로퍼티를 가진다.
// 따라서 반복 루프에서 변수 x 의 값은 id, username, age가 된다.
for (x in member) {
  text += `키: ${x} 값: ${member[x]} <br>`;
}

document.getElementById("show").innerHTML = text;
```

## 11.2.3. 프로퍼티 삭제하기

- 잘 사용은 안함..

```js
// 1. 객체 member를 생성
// 객체를 생성할 때는 일반적으로 키워드 const를 사용
const member = {
  // member 객체는 id, username, age 세 개의 프로퍼티로 구성
  // 프로퍼티에 id, username, age를 키(key) 라고 한다.
  // 이에 대응되는 "kdhong", "홍길동", 30을 값(value) 라고 한다.
  id: "kdhong",
  username: "홍길동",
  age: 30,
};

delete member.id;

let text = "";

// for in 문에서 x 는 객체 member에 존재하는 프로퍼티를 가진다.
// 따라서 반복 루프에서 변수 x 의 값은 id, username, age가 된다.
for (x in member) {
  text += `키: ${x} 값: ${member[x]} <br>`;
}

document.getElementById("show").innerHTML = text;
```

### 11.2.4. 중첩 객체

```js
// 1. 객체 member를 생성
// 객체를 생성할 때는 일반적으로 키워드 const를 사용
const member = {
  // member 객체는 id, username, age 세 개의 프로퍼티로 구성
  // 프로퍼티에 id, username, age를 키(key) 라고 한다.
  // 이에 대응되는 "kdhong", "홍길동", 30을 값(value) 라고 한다.
  id: "kdhong",
  username: "홍길동",
  age: 30,
  hobby: {
    hobby1: "게임",
    hobby2: "탁구",
  },
};

let text = "";

// for in 문에서 x 는 객체 member에 존재하는 프로퍼티를 가진다.
// 따라서 반복 루프에서 변수 x 의 값은 id, username, age가 된다.
text = member.hobby.hobby1;

document.getElementById("show").innerHTML = text;
```

## 11.3. 메서드

### 11.3.1. 메서드란?

- 객체는 프로퍼티와 메서드로 구성되어 있다.
- 프로퍼티는 객체에 소속된 변수
- 메서드는 객체에 소속된 함수
- 다르게 말하자면 프로퍼티는 객체의 상태를 의미하는 것이고
- 메서드는 객체의 동작을 정의한다. 라고 할 수 있다.

```js
const dog = {
  name: "나나",
  species: "푸들",
  color: "회색",
  age: 8,
  // this.name에서 this를 사용할 때는 화살표 사용 안됨.
  // this가 인식을 못하기때문에 function을 사용해야한다.
  intro: function () {
    return `우리집 강아지 이름은 ${this.name} 입니다.`;
  },
};

document.getElementById("show").innerHTML = dog.intro();
```

### 11.3.2. 메서드 추가하기

```js
const dog = {
  name: "나나",
  species: "푸들",
  color: "회색",
  age: 8,
  intro: function () {
    return `우리집 강아지 이름은 ${this.name} 입니다.`;
  },
};

dog.getAge = function () {
  return `나이는 ${this.age}살 입니다.`;
};

document.getElementById("show").innerHTML = dog.getAge();
```

### 11.3.3. 내장 메서드

- 자바스크립트 자체적으로 만들어 준 내장 객체(built-in object)
- 이 내장 객체들은 내장 메서드를 제공함으로써 객체에 관련된 프로그래밍을 할 수 있게 해준다.
- 많이 사용되는 객체에는 number, string, array, date, math ...등등 이 있다.
