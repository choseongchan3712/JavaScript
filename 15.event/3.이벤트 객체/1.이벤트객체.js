//? 이벤트가 발생하면 이벤트에 관한 다양한 정보를 담고 있는 이벤트 객체가 동적으로 생성된다. 생성된 이벤트 객체는 이벤트 핸들러의 첫 번째 인수로 전달된다.

const $msg = document.querySelector('.message');

//? 클릭 이벤트에 의해 생성된 이벤트 객체는 이벤트 핸들러의 첫 번째 인수로 전달된다.

function showCoords(e) {
  $msg.textContent = `clientX: ${e.clientX}, clientY: ${e.clientY}`;
}

document.onclick = showCoords;

//% 클릭 이벤트에 의해 생성된 객체는 이벤트 핸들러의 첫 번째 인수로 전달되어 매개변수 e에 암묵적으로 할당된다. 

//! 마우스 정보 취득
//? click, dblclick, mousedown, mouseup, mousemove, mouseenter, mouseleave 이벤트가 발생하면 생성되는 MouseEvent 타입의 이벤트 객체는 다음과 같은 고유의 프로퍼티를 갖는다.
//& - 마우스 포인터의 좌표 정보를 나타내는 프로퍼티: screenX/screenY, clientX/clientY, pageX/pageY, offsetX/offsetY
//& - 버튼 정보를 나타내는 프로퍼티: altKey, ctrlKey, shiftKey, button
//# 프로퍼티중에서 clientX/clientY는 뷰포트, 즉 웹페이지의 가시 영역을 기준으로 마우스 포인터 좌표를 나타낸다.

//? 드래그 예제

//드래그 대상 요소
const $box = document.querySelector('.box');

// 드래그 시작 시점의 마우스 포인터 위치
const initialMousePos = {x: 0, y: 0};
// 오프셋: 이동할 거리
const offset = {x: 0, y: 0};

//mousemove 이벤트 핸들러
const move = e => {
  offset.x = e.clientX - initialMousePos.x;
  offset.y = e.clientY - initialMousePos.y;
  $box.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;
};

$box.addEventListener('mousedown', e => {
  initialMousePos.x = e.clientX - offset.x;
  initialMousePos.y = e.clientY - offset.y;
  document.addEventListener('mousemove', move);
});

document.addEventListener('mouseup', () => {
  document.removeEventListener('mousemove', move);
});


//! 키보드 정보 취득
//? ketdown, keyup, keypress 이벤트가 발생하면 생성되는 KeyboardEvent 타입의 이벤트 객체는 altKey, ctrlKey, shiftKey, metaKey, key, keyCode 같은 고유의 프로퍼티를 갖는다.

const $input = document.querySelector('.text');
const $msg2 = document.querySelector('.message2');

$input.onkeyup = e => {
  if (e.key !== 'Enter') return;

  $msg2.textContent = e.target.value;
  e.target.value = '';
};