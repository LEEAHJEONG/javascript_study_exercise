# 1. html에 script 써보기

```js
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트 스터디</title>
  </head>
  <body>
    <p id="show"></p>
    <script>
      document.getElementById("show").innerHTML = "안녕하세요.";
    </script>
  </body>
</html>
```

## 1.1. 데이터 출력

- innerHTML : 브라우저 안에 있는 HTML 요소에 데이터 출력
- document.write() : 브라우저에 간단한 데이터 출력
- alert() : 알림창에 데이터 출력
- console.log() : 브라우저 콘솔에 데이터 출력

### 1.1.1. innerHTML

### 1.1.2. document.write()

```js
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트 스터디</title>
  </head>
  <body>
    <script>
      document.write(10 + 20);
    </script>
  </body>
</html>
```

### 1.1.3. alear()

```js
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트 스터디</title>
  </head>
  <body>
    <script>
      alert(10 + 20);
    </script>
  </body>
</html>
```

안좋은예

### 1.1.4. console.log()

- 브라우저 개발자 도구 console에 출력

```js
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트 스터디</title>
  </head>
  <body>
    <script>
      console.log(10 + 20);
    </script>
  </body>
</html>
```

- f12 콘솔창에서 몇번째줄에 작성했는지 확인가능
