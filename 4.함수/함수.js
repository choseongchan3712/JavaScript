// ! 함수 선언문
function add(x, y) {
  return x + y;
}

console.log(add(2, 5)); //7

// ! 함수 표현식
var add = function (x, y) {
  return x + y;
};

console.log(add(2, 5)); //7

// ! 화살표 함수
const add1 = (x, y) => x + y;
console.log(add1(2, 5)); //7

//! 즉시 실행 함수
(function() {
  var a = 3;
  var b = 5;
  return a * b;
}());

//? 반환을 원할 시
var res = (function () {
  var a = 3;
  var b = 5;
  return a * b;
}());

console.log(res); //15

// ! 재귀 함수
console.log(`--- 재귀 함수X ---`);

// ? 반복문으로 10부터 0까지 출력하는 함수를 구현
var countDown = function (n) {
  for (var i = n; i >= 0; i--) {
    console.log(i);
  }
}

console.log(countDown(10));

console.log(`--- 재귀 함수 ---`);
var countDown1 = function (n) {
  if (n < 0) return; // 탈출 조건
  console.log(n);
  countDown1(n - 1); //재귀 호출
};

console.log(countDown1(10));

console.log(`--- 재귀 함수2 ---`);
var factorial = function(n) {
  if (n <= 1) return 1; //탈출 조건
  return n * factorial(n -1); //재귀 호출
}

console.log(factorial(10)); //3628800

// ! 콜백 함수
console.log('--- callback ---');

var repeat = function(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
}

console.log(repeat(5)); // 0 1 2 3 4
// ? 이때 repeat 함수는 console.log(i)에 강하게 의존하고 있어 다른 일ㅇ을 할 수 없다. 따라서 repeat 함수의 반복문 내부에서 다른 일을 하고 싶다면 함수를 새롭게 정의해야 한다.

var repeat1 = function(n) {
  for (var i = 0; i < n; i++) {
    if (i % 2) {
      console.log(i);
    }
  }
}

console.log(repeat1(5)); // 1 3

// ? ...... 이문제는 함수를 합성하는 것으로 해결할 수 있다. 함수의 변하지 않는 공통 로직은 미리 정의해 두고, 경우에 따라 변경되는 로직은 추상화해서 함수 외부에서 함수 내부로 전달하는 것이다.

var repeat2 = function(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
};

var logAll = function (i) {
  console.log(i);
};

//반복 호출할 함수를 인수로 전달
console.log('반복 호출 함수 인수로 전달');
repeat2(5, logAll); 

var logOdds = function(i) {
  if(i % 2) {
    console.log(i);
  }
};

repeat2(5, logOdds); // 1 3