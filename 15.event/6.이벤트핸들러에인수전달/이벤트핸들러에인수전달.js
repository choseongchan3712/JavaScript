const MIN_USER_NAME_LENGTH = 5;
const $input = document.querySelector('input[type=text]');
const $msg = document.querySelector('.message');

const checkUserNameLength = min => {
  $msg.textContent = $input.value.length < min ? `이름은 ${min}자 이상 입력해 주세요` : '';
};

//?이벤트 핸들러 내부에서 함수를 호출하면서 인수를 전달한다.
$input.onblur = () => {
  checkUserNameLength(MIN_USER_NAME_LENGTH);
};