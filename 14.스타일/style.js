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

//% add(...className)
//? add 메서드는 인수오 전달한 1개 이상의 문자열을 class 어트리뷰트로 값을 추가한다.
$box.classList.add('foo'); //-> box red foo
$box.classList.add('bar', 'baz'); //-> box red foo bar baz


//% remove(...className)
//? remove 메서드는 인수로 전달한 1개 이상의 문자열과 일치하는 클래스를 class 어트리뷰트에서 삭제한다. 인수로 전달한 문자열과 일치하는 클래스가 class 어트리뷰트에 없으면 에러 없이 무시된다.
$box.classList.remove('bar'); //-> box red foo baz


//% item(index)
//? item 메서드는 인수로 전달한 index에 해당하는 클래스를 class 어트리뷰트에서 반환한다. 예를 들어, index가 0이면 첫 번째 클래스를 반환하고 index가 1이면 두 번째 클래스를 반환한다.
console.log($box.classList.item(0)); //box
console.log($box.classList.item(1)); //blue

//% contains(className)
//? contains 메서드는 인수로 전달한 문자열과 일치하는 클래스가 class 어트리뷰트에 포함되어 있는지 확인한다.
console.log($box.classList.contains('box'));//true
console.log($box.classList.contains('red'));//false

//% replace(oldClassName, newClassName)
//? replace 메서드는 class 어트리뷰트에서 첫 번쨰 인수로 전달한 문자열을 두 번째 인수로 전달한 문자열로 변경한다.
$box.classList.replace('baz', 'red'); //baz -> red


//% toggle(className[, force])
//? toggle 메서드는 class 어트리뷰트에 인수로 전달한 문자열과 일치하는 클래스가 존재하면 제거하고, 존재하지 않으면 추가한다.

$box.classList.toggle('foo'); // box foo blue red -> box blue red
$box.classList.toggle('foo'); // box blue red -> box blue red foo

//? 두번째 인수로 true을 부여하면 첫 번째 인수로 전달 받은 문자열을 강제로 추가. false이면 강제로 제거.

//& 예: $box.classList.toggle('foo', true);


//! 요소에 적용되어 있는 CSS 스타일 참조
//% window.getComputedStyle(element[, pseudo])
//? window.getComputedStyle(element[, pseudo]) 메서드는 첫 번째 인수로 전달한 요소 노드에 적용되어 있는 평가된 스타일을 CSSStyleDeclaration 객체에 담아 반환한다.
const $box2 = document.querySelector('.box2');
const computedStyle = window.getComputedStyle($box2);

console.log(computedStyle.width); //100px












