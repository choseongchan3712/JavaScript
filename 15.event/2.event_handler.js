//! 이벤트 핸들러 프로퍼티 방식
//? 이벤트 헨들러를 등록하기 위해서는 이벤트를 발생시킬 객체인 이벤트 타깃과 이벤트의 종류를 나타내는 문자열인 이벤트 타입 그리고 이벤트 핸들러를 지정할 필요가 있다.

//? $button( -> 이벤트 타깃).onclick( -> on + 이벤트 타입) = function()( -> 이벤트 핸들러) {};

const $button = document.querySelector('button');
const $body = document.querySelector('body');

$button.onclick = function() {
  $body.style.width = '100%';
  $body.style.height = '100vh';
  $body.style.backgroundColor = 'salmon';
};

$button.ondblclick = function() {
  $body.style.backgroundColor = 'white';
};


//! addEventListener 메서드 방식
//? EventTarget.addEventListener('eventType', functionName[, useCapture]);

const $button2 = document.querySelector('.button2');

$button2.addEventListener('click', function() {
  $body.style.backgroundColor = 'gray';
});

$button2.addEventListener('dblclick', function() {
  $body.style.backgroundColor = 'white';
});


//! 이벤트 핸들러 제거
//? addEventListener 메서드로 등록한 이벤트 핸들러를 제거하려면 EventTarget.prototype.removeEventListener 메서드를 사용한다.

const $button3 = document.querySelector('.button3');

const makePink = () => $body.style.backgroundColor = 'pink';
const makeWhite = () => $body.style.backgroundColor = 'white';

$button3.addEventListener('click', makePink);
$button3.addEventListener('dblclick', makeWhite);

$button3.removeEventListener('click', makePink);

