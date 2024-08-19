// ! if else 문 

// if (조건식) {
//   조건식이 참이면 이 코드 블록이 실행된다
// } else {
//   조건식이 거짓이면 이 코드 블록이 실행된다
// }

// ! else if

// if (조건식1) {
//   조건식1이 참이면 이 코드 블록이 실행된다
// } else if (조건식2) {
//   조건식2가 참이면 이 코드 블록이 실행된다.
// } else {
//   조건식1과 조건식2가 모두 거짓이면 이 코드 블록이 실행된다.
// }

// # else if 문과 else 문은 옵션이다. 즉 사용할 수도 있고 사용하지 않을 수도 있다.

// ? 예시
var num = 2;
var kind;

// if 문

if (num > 0) {
  kind = '양수';
}
console.log(kind);

// if else 문

if (num > 0) {
  kind = '양수';
} else {
  kind = '음수'; //0은 음수가 아니다
}
console.log(kind);

// if else 문

if (num > 0) {
  kind = '양수';
} else if (num < 0) {
  kind = '음수';
} else {
  kind = '영';
}
console.log(kind);

// ? 대부분의 if else 문은 삼항 조건 연산자로 바꿔 쓸 수 있다.

// if else:
var x = 2;
var result;

if (x % 2) { // 0은 false로 암묵적 강제 변환된다
  result = '홀수'; 
} else {
  result = '양수';
}
console.log(result);

// 삼항 연산자
var x = 2;
var result = x % 2 ? '홀수' : '짝수';
console.log(result);

// 세가지 경우의 수
var num = 0;
var kind = num ? (num > 0 ? '양수' : '음수') : '영';
console.log(kind);



// ! switch 문
// switch 문은 주어진 표현식을 평가하여 그 값과 일치하는 case 문으로 실행 흐름을 옮긴다. 
// case 문은 상황을 의미하는 표현식을 지정하고 콜론으로 마친다. 그리고 그 뒤에 실행할 문들을 위치시킨다.
// switch 문의 표현식과 일치하는 case 문이 없다면 실행 순서는 default 문으로 이동한다. default 문은 선택사항으로, 사용할 수도 있고 사용하지 않을 수도 있다.

// switch (표현식) {
//   case 표현식1:
//     switch 문의 표현식과 표현식1이 일치하면 실행될 문;
//     break;
//   case 표현식2:
//     switch 문의 표현식과 표현식2가 일치하면 실행될 문;
//     break;
//   default:
//     switch 문의 표현식과 일치하는 case 문이 없을 때 실행될 문;
// }

// ? 예시
var month = 11;
var monthName;

switch (month) {
  case 1: monthName = 'January';
  case 2: monthName = 'February';
  case 3: monthName = 'March';
  case 4: monthName = 'April';
  case 5: monthName = 'May';
  case 6: monthName = 'June';
  case 7: monthName = 'July';
  case 8: monthName = 'August';
  case 9: monthName = 'September';
  case 10: monthName = 'October';
  case 11: monthName = 'November';
  case 12: monthName = 'December';
  default: monthName = 'Invalid month';
}
console.log(monthName); // Invalid month

var month = 11;
var monthName;

switch (month) {
  case 1: monthName = 'January';
    break;
  case 2: monthName = 'February';
    break;
  case 3: monthName = 'March';
    break;
  case 4: monthName = 'April';
    break;
  case 5: monthName = 'May';
    break;
  case 6: monthName = 'June';
    break;
  case 7: monthName = 'July';
    break;
  case 8: monthName = 'August';
    break;
  case 9: monthName = 'September';
    break;
  case 10: monthName = 'October';
    break;
  case 11: monthName = 'November';
    break;
  case 12: monthName = 'December';
    break;
  default: monthName = 'Invalid month';
}

console.log(monthName); //November