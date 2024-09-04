//! DOM 요소의 기본 동작 중단
//? DOM 요소는 저마다 기본 동작이 있다. 예를 들어, a 요소를 클릭하면 href 어트리뷰트에 지정된 링크로 이동하고, chekbox또는 radio 요소를 클릭하면 체크 또는 해제된다.
//? 이벤트 객체의 preventDefault 메서드는 이러한 DOM 요소의 기본 동작을 중단시킨다.


document.querySelector('a').onclick = e => {
  e.preventDefault();
};

document.querySelector('input').onclick = e => {
  e.preventDefault();
};

//! 이벤트 전파 방지
//? 이벤트 객체의 stopPropagation 메서드는 이벤트 전파를 중지시킨다.


// 이벤트 위임. 클릭된 하위 버튼 요소의 color를 변경한다.
document.querySelector('.container').onclick = ({target}) => {
  if (!target.matches('.container>button')) return;
  target.style.color = 'red';
}

document.querySelector('.btn2').onclick = e => {
  e.stopPropagation(); //%이벤트 전파 중단
  e.target.style.color = 'blue';
}