// 객체는 중괄호 사용
const member = {
  id: "kdhong",
  name: "홍길동",
  age: 20,
};
//아이디 :뒤에 스페이스가 하나 자동으로 입력됨 주의!
console.log("아이디 :", member.id);
console.log(member.name);
console.log(member.age);

const member = {
  name: "홍길동",
  age: 20,
};
// 여기에 아이디를 추가로 하고싶다면,
// symbol()로 심볼 id 생성 Symbol S는 대문자로
let id = Symbol("id");
//
