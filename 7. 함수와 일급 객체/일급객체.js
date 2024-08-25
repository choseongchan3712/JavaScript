// ! 일급 객체
// ? 다음과 같은 조건을 만족하는 객체를 일급 객체라고 한다.
// 1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
// 2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 함수의 변환값으로 사용할 수 있다.
// ? 자바스크립트의 함수는 다음 예제와 같이 위의 조건을 모두 만족하므로 일급 객체다.

// 예
const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

const auxs = {increase, decrease};

function makeCounter(aux) {
  let num = 0;
  return function() {
    num = aux(num);
    return num;
  };
}

const increaser = makeCounter(auxs.increase);
console.log(increaser());// 1
console.log(increaser());// 2

const decreaser = makeCounter(auxs.decrease);
console.log(decreaser());// -1
console.log(decreaser());// -2