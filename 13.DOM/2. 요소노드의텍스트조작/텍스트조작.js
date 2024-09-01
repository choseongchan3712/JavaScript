//! nodeValue
//? nodeValue 프로퍼티를 참조하면 노드 객체 값을 반환한다.

const $foo = document.getElementById("foo").firstChild; //%택스트 노드는 요소 노드의 자식 노드이므로 firstChild 프로퍼티를 사용하여 탐색한다.
console.log($foo.nodeValue); //Hello

//? 텍스트 노드의 nodeValue프로퍼티에 값을 할당하면 텍스트 노드의 값, 즉 텍스트를 변경할 수 있다.

$foo.nodeValue = 'World';
console.log($foo.nodeValue); //World -> html에서도 변경됨

//! textContent
//? 요소 노드의 textContent 프로퍼티를 참조하면 요소 노드의 콘텐츠 영역 내의 텍스트를 모두 반환한다.

console.log(document.getElementById('foo_2').textContent); //Hello World!

//? 요소 노드의 textContent 프로퍼티에 문자열을 할당하면 요소 노드의 모든 자식 노드가 제거되고 할당한 문자열이 텍스트로 추가된다.
document.getElementById('foo_2').textContent = 'Hi JavaScript!'; // HTML에서 변경됨

