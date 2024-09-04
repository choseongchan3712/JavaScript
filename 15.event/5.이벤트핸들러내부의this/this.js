//! 이벤트 핸들러 프로퍼티 방식과 addEventListener 메서드 방식
//? 이벤트 핸들러 프로퍼티 방식과 addEventListener 메서드 방식 모두 이벤트 핸들러 내부의 this는 이벤트를 바인딩한 DOM 요소를 가리킨다. 즉, 이벤트 핸들러 내부의 this는 이벤트 객체의 currentTarget 프로퍼티와 같다.

const $button1 = document.querySelector('.btn1');
const $button2 = document.querySelector('.btn2');

$button1.onclick = function() {
  ++this.textContent;
};

$button2.addEventListener('click', function() {
  ++this.textContent;
});

//! 화살표 함수로 정의한 이벤트 핸들러 내부의 this는 상위 스코프의 this를 가리킨다. 화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다.