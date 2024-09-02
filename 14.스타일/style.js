//! 인라인 스타일 조작
//? HTMLElement.prototype.style 프로퍼티는 요소 노드와 인라인 스타일을 취득하거나 추가 또는 변경한다.
const $div = document.querySelector('div');

$div.style.color = 'blue';
$div.style.width = '100px';
$div.style.height = '100px';
$div.style.backgroundColor = 'yellow';
$div.style.margin = '10px auto';
$div.style.display = 'flex';
$div.style.justifyContent = 'center';
$div.style.alignItems = 'center';


//! 클래스 조작
//# ClassName
//? Element.prototype.className 프로퍼티는 HTML 요소의 class 어트리뷰트 값을 취득하거나 변경한다.

const $box = document.querySelector('.box');
$box.className = $box.className.replace('red', 'blue'); //red -> blue

//# ClassList
//? Element.prototype.classList 프로퍼티는 class 어트리뷰트의 정보를 담은 DOMTokenList 객체를 반환한다.

//% .add(...className)
//? add 메서드는 인수오 전달한 1개 이상의 문자열을 class 어트리뷰트로 값을 추가한다.
$box.classList.add('foo'); //-> box red foo
$box.classList.add('bar', 'baz'); //-> box red foo bar baz


//% .remove(...className)
//? remove 메서드는 인수로 전달한 1개 이상의 문자열과 일치하는 클래스를 class 어트리뷰트에서 삭제한다. 인수로 전달한 문자열과 일치하는 클래스가 class 어트리뷰트에 없으면 에러 없이 무시된다.
$box.classList.remove('bar'); //-> box red foo baz













