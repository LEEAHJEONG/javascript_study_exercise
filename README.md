## 15.1 이벤트

- 웹 페이지에서 발생하는 사건을 의미
- 이벤트를 처리하는 함수를 event handler 또는 event listner 라고 한다.

### 15.1.1 이벤트 핸들러

- 마우스 클릭이나 이동
- 페이지 로드
- 이미지 로드
- 입력창에 데이터 입력
- 키보드 누르기 등

```html
<body>
  <button onclick="change(this)">클릭하세요!</button>

  <script src="js/event.js"></script>
</body>
```

```js
function change(elem) {
  elem.innerHTML = "OK!";
}
```

### 15.1.2 인라인 모델

```html
<button onclick="document.getElementById('show').innerHTML = Date()">
  현재 시간은?
</button>

<p id="show"></p>
```

### 15.1.3 이벤트 리스너

- 이벤트가 발생하길 기다렸다가 이벤트 발생 시 해당 이벤트를 처리

```js
let text = "";

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  text += "안녕하세요!<br>";
  document.getElementById("show").innerHTML = text;
});

btn.addEventListener("click", function () {
  text += "반갑습니다!<br>";
  document.getElementById("show").innerHTML = text;
});
```

## 15.2 마우스 이벤트

- 마우스에 관련된 이벤트는 웹에서 가장 많이 사용된다.
- onclick : 사용자가 요소를 클릭했을 때
- ondblclick : 사용자가 요소를 더블 클릭했을 때
- onmouseover : 마우스 포인터가 요소 위에 올라갔을 때, 자식요소에 대해서도 동작한다.
- onmouseout : 마우스 포인터가 요소에서 벗어 났을 때, 자식요소에 대해서도 동작한다.
- onmouseenter : 마우스 포인터가 요소 안으로 진입할 때
- onmouseleave : 마우스 포인터가 요소에서 외부로 나갈 때
- onmousemove : 마우스 포인터가 요소안에서 움직일 때

### 15.2.1 onclick/ondblclick 이벤트

```html
<body>
  <button onclick="showMessage1()">클릭하세요</button>
  <button ondblclick="showMessage2()">더블클릭하세요</button>

  <p id="show"></p>

  <script src="js/event.js"></script>
</body>
```

```js
function showMessage1() {
  document.getElementById("show").innerHTML = "클릭했어요";
}
function showMessage2() {
  document.getElementById("show").innerHTML = "더블 클릭했어요";
}
```

### 15.2.2 onmouseover/onmouseout 이벤트

```html
<body>
  <button onmouseover="changeBg1(this)" onmouseout="changeBg2(this)">
    마우스를 올려보세요
  </button>

  <p id="show"></p>

  <script src="js/event.js"></script>
</body>
```

```js
function changeBg1(btn) {
  btn.style.backgroundColor = "pink";
}
function changeBg2(btn) {
  btn.style.backgroundColor = "";
}
```

### 15.2.3 onmouseenter/onmouseover

```html
<style>
  div#box1 {
    border: solid 3px yellow;
  }
  div#box2 {
    border: solid 3px red;
  }
  p {
    border: solid 1px black;
  }
</style>
<body>
  <!-- 부모요소 + 자식요소 둘 다 동작 onmouseenter -->
  <div id="box1" onmouseenter="increaxeX()">
    <p>단락1</p>
    <span id="show1"></span>
  </div>

  <!-- 자식요소에만 동작 onmouseover -->
  <div id="box2" onmouseover="increaxeY()">
    <p>단락2</p>
    <span id="show2"></span>
  </div>

  <script src="js/event.js"></script>
</body>
```

```js
let x = 0,
  y = 0;
function increaxeX() {
  x += 1;
  document.getElementById("show1").innerHTML = x;
}
function increaxeY() {
  y += 1;
  document.getElementById("show2").innerHTML = y;
}
```

### 15.2.4 onmouseleave 이벤트

```html
<style>
  div#box1 {
    border: solid 3px yellow;
  }
  div#box2 {
    border: solid 3px red;
  }
  p {
    border: solid 1px black;
  }
</style>
<body>
  <div id="box1" onmouseleave="increaxeX()">
    <p>단락1</p>
    <span id="show1"></span>
  </div>
  <!-- 부모요소와 자식요소가 별개로 동작 -->
  <div id="box2" onmouseout="increaxeY()">
    <p>단락2</p>
    <span id="show2"></span>
  </div>

  <script src="js/event.js"></script>
</body>
```

```js
let x = 0,
  y = 0;
function increaxeX() {
  x += 1;
  document.getElementById("show1").innerHTML = x;
}
function increaxeY() {
  y += 1;
  document.getElementById("show2").innerHTML = y;
}
```

### 15.2.5 onmousemove 이벤트

- 요소 내에서 마우스가 이동할 때 발생

```html
 <style>
      div#box {
        border: solid 3px yellow;
        width: 300px;
        height: 200px;
      }
    </style>
  </head>
  <body>
    <div id="box" onmousemove="showCoord(event)">
      <!-- <p>단락1</p> -->
      <span id="show"></span>
    </div>

    <script src="js/event.js"></script>
  </body>
```

```js
function showCoord(e) {
  let text = "좌표: (" + e.clientX + "," + e.clientY + ")";
  document.getElementById("show").innerHTML = text;
}
```

### 15.3 포커스 이벤트

- onfocus : 요소가 포커스를 얻었을 때
- onblur : 요소가 포커스를 잃었을 때
- 텍스트나 비밀번호 입력창 안에 마우스를 클릭하면 마우스 커서가 깜빡인다.(포커스를 얻었다.)
- 반대로 입력창 외부를 클릭하면 포커스를 잃게 된다.

```html
<body>
  <input type="text" id="uid" />
  <input
    type="password"
    id="upw"
    onfocus="changeBgColor3()"
    onblur="changeBgColor4()"
  />

  <script src="js/event.js"></script>
</body>
```

```js
const userId = document.getElementById("uid");
const userPw = document.getElementById("upw");

function changeBgColor1() {
  userId.style.backgroundColor = "yellow";
}
function changeBgColor2() {
  userId.style.backgroundColor = "gray";
}

userId.onfocus = function () {
  changeBgColor1();
};

userId.onblur = function () {
  changeBgColor2();
};

function changeBgColor3() {
  userPw.style.backgroundColor = "yellow";
}
function changeBgColor4() {
  userPw.style.backgroundColor = "gray";
}
```

## 15.4 기타 이벤트

### 15.4.1 onchange 이벤트

```html
<body>
  <label>
    사이즈:
    <select name="size" id="sz">
      <option value="">선택</option>
      <option value="s">S</option>
      <option value="m">M</option>
      <option value="l">L</option>
      <option value="xl">XL</option>
    </select>
  </label>
  <p id="show"></p>
  <script src="js/event.js"></script>
</body>
```

```js
const sel = document.getElementById("sz");
sel.addEventListener("change", function (e) {
  document.getElementById(
    "show"
  ).innerHTML = `선택한 사이즈는 ${e.target.value}입니다.`;
});
```
