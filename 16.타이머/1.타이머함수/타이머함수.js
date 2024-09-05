//! setTimeout / clearTimeout
//? setTimeout 함수는 두 번째 인수로 전달받은 시간(ms, 1/1000초)으로 단 한 번 동작하는 타이머를 생성한다.
//? 이후 타이머가 만료되면 첫 번째 인수로 전달받은 콜백 함수가 호출된다. 즉, setTimeout 함수의 콜백 함수는 두 번째 인수로 전달 받은 시간 이후 단 한 번 실행되도록 호출 스케줄링된다.

//% const timeoutId = setTimeout(func|code[, delay, param1, param2, ...]);

//# func: 타이머가 만료된 뒤 호출될 콜백 함수
//# delay: 타이머 만료 시간, setTimeout 함수는 delay 시간으로 단 한 번 동작하는 타이머를 생성한다. 인수 전ㄷ라을 생략한 경우 기본값이 0이 지정된다.
//# param1, param2, ...: 호출 스케줄링된 콜백 함수에 전달해야 할 인수가 존재하는 경우 세 번째 이후의 인수로 전달할 수 있다.

//& 1초 후 타이머가 만료되면 콜백 함수가 호출된다.
setTimeout(() => console.log('Hi!'), 1000);

//& 콜백 함수에 'Lee'가 인수로 전달된다.
setTimeout(name => console.log(`Hi! ${name}.`), 2000, 'Lee');

//! setInterval / clearInterval
//? setInterval 함수는 두 번째 인수로 전달받은 시간으로 반복 동작하는 타이머를 생성한다.
//? 이후 타이머가 만료될 때마다 첫 번쨰 인수로 전달받은 콜백 함수가 반복 호출된다. 이는 타이머가 취소될 때까지 계속된다.

//% const timerId = setInterval(func|code[, delay, param1, param2, ...])

//? setInterval 함수가 반환한 타이머 id를 clearInterval 함수의 인수로 전달하여 타이머를 취소할 수 있다.

let count = 1;

const timeoutId = setInterval(() => {
  console.log(count);
  if (count++ === 5) {clearInterval(timeoutId)};
}, 1000);