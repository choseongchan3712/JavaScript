// ! for 문
// for 문은 조건식이 거짓으로 평가될 때까지 코드 블록을 반복 실행한다. 가장 일반적으로 사용되는 for 문의 형태는 다음과 같다

// for (변수 선언문 또는 할당문; 조건식; 증감식) {
//   조건식이 참인 경우 반복 실행될 문;
// }

// 예시
for (var i = 0; i < 2; i++) {
  console.log(i);
}
// 0
// 1

// ? for 문 내에 for 문을 중첩해 사용할 수 있다. 이를 중첩 for 문이라 한다. 다음은 두 개의 주사위를 던졌을 때 두 눈의 합이 6이 되는 모든 경우의 수를 출력하기 위해 이중 중첩 for 문을 사용한 예다.

for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(`[${i}, ${j}]`);
  }
}
// [1, 5] [2, 4] [3, 3] [4, 2] [5, 1]

// ! while 문
// while 문은 조건문의 평가 결과가 거짓이 되면 코드 블록을 실행하지 않고 종료한다. 만약 조건식의 평가 결과가 불리언 값이 아니면 불리언 값으로 강제 변환하여 논리적 참, 거짓을 구별한다.

var count = 0;

while (count < 3) {
  console.log(count); //0 1 2
  count++;
}

//무한루프에서 탈출하기 위해서는 코드 블록 내에 if 문으로 탈출 조건을 만들고 break 문으로 코드 블록을 탈출한다.
var count = 0;

while (true) {
  console.log(count);
  count++;
  if (count === 3) break;
}

//! do... while 문
// do ... while 문은 코드 블록을 머저 실행하고 조건식을 평가한다. 따라서 코드 블록은 무조건 한 번 이상 실행된다.

// 예시
var count = 0;

do {
  console.log(count);
  count++;
} while (count < 3);

// ! break 문 ...p104

//  ! continue 문 ... p106
