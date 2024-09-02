//! innerHTML
//? Element.prototype.innerHTML 프로퍼티는 요소 노드의 HTML 마크업을 취득하거나 변경한다.

console.log(document.getElementById('foo').innerHTML); //Hello <span>world!</span>

//? innerHTML 프로퍼티는 HTML 마크업이 포함된 문자열을 그대로 반환한다.

//? innerHTML 프로퍼티에 문자열을 할당하면 요소 노드의 모든 자식 노드가 제거되고 할당한 문자열에 포함되어 있는 HTML 마크업이 파싱되어 요소 노드의 자식 노드로 DOM에 반영된다.

document.getElementById('foo').innerHTML = 'Hi <span>JavaScript</span>'; //HTML 변경됨

const $fruits = document.getElementById('fruits');
$fruits.innerHTML += '<li class="banana">Banana</li>'; //노드 추가
$fruits.innerHTML = '<li class="orange">Orange</li>'; //노드 교체
$fruits.innerHTML = ''; //노드 삭제


//! insertAdjacentHTML 메서드
//? Element.prototype.insertAdjacentHTML(position, DOMString) 메서드는 기존 요소를 제거하지 않으면서 위치를 지정해 새로운 요소를 삽입한다.
//? 첫 번째 인수로 전달할 수 있는 문자열은 'deforebegin', 'afterbegin', 'beforeend', 'afterend'의 4가지다.

const $foo2 = document.getElementById('foo2');

$foo2.insertAdjacentHTML('beforebegin', '<p>beforebegin</p>');
$foo2.insertAdjacentHTML('afterbegin', '<p>afterbegin</p>');
$foo2.insertAdjacentHTML('beforeend', '<p>beforeend</p>');
$foo2.insertAdjacentHTML('afterend', '<p>afterend</p>');


//! 노드 생성과 추가
//# 요소 노드 생성 - Document.prototype.createElement(targetName)
//? Document.prototype.createElement(targetName) 메서드는 요소 노드를 생성하여 반환한다.

//요소 노드 생성
const $li = document.createElement('li');

//? createElement 메서드는 요소 노드를 생성할 뿐 DOM에 추가하지는 않는다. 따라서 이후에 생성된 요소 노드를 DOM에 추가하는 처리가 별도로 필요하다.

//# 텍스트 노드 생성 - Document.prototype.createTextNode(text)
//? Document.prototype.createTextNode(text) 메서드는 텍스트 노드를 생성하여 반환한다. 

//텍스트 노드 생성
const textNode = document.createTextNode('Banana');

//? createTextNode 메서드로 생성한 텍스트 노드는 요소 노드의 자식 노드로 추가되지 않고 홀로 존재하는 상태다. 즉 이후에 생성된 텍스트 노드를 요소 노드에 추가하는 처리가 별도로 필요하다.

//# 텍스트 노드를 요소 노드의 자식 노드로 추가 - Node.prototype.appendChild(childNode)
//? Node.prototype.appendChild(childNode) 메서드는 매개변수 childNode에게 인수로 전달한 노드를 appendChild 메서드를 호출한 노드의 마지막 자식 노드로 추가한다.
//? appendChild 메서드의 인수로 createTextNode 메서드로 생성한 텍스트 노드를 전달하면 appendChild 메서드를 호출한 노드의 마지막 자식 노드로 텍스트 노드가 추가된다.

//텍스트 노드를 $li 요소 노드의 자식 노드로 추가
$li.appendChild(textNode);

//? appendChild 메서드를 통해 요소 노드와 텍스트 노드는 부자 관계로 연결되었지만 아직 기존 DOM에 추가되지는 않은 상태다.

//# 요소 노드를 DOM에 추가 - Node.prototype.appendChild
//? Node.prototype.appendChild 메서드를 사용하여 텍스트 노드와 부자 관계로 연결한 요소 노드를 #fruits요소 노드의 마지막 자식 요소로 추가한다.

// $li 요소 노드를 #fruits 요소 노드의 마지막 자식 노드로 추가
$fruits.appendChild($li);


//! 복수의 노드 생성과 추가
//# Document.prototype.createDocumentFragment
//? Document.prototype.createDocumentFragment 메서드는 비어 있는 DocumentFragment 노드를 생성하여 반환한다.

const $fragment = document.createDocumentFragment();

['apple', 'peach', 'orange'].forEach(text => {
  const $li2 = document.createElement('li');
  const textNode2 = document.createTextNode(text);

  $li2.appendChild(textNode2);
  $fragment.appendChild($li2);
})

$fruits.appendChild($fragment);


//! 노드 삽입
//# 지정한 위치에 노드 삽입 - Node.prototype.insertBefore(newNode, childNode) 메서드는 첫 번째 인수로 전달받은 노드를 두 번째 인수로 전달 받은 노드 앞에 삽입한다.

const $li3 = document.createElement('li');
$li3.appendChild(document.createTextNode('melon'));

$fruits.insertBefore($li3, $fruits.lastElementChild);

//! 노드 복사
//# Node.prototype.cloneNode([depp: true | false])
//? Node.prototype.cloneNode([depp: true | false]) 메서드는 노드의 사본을 생성하여 반환한다. 매개변수 deep에 true를 인수로 전달하면 노드를 깊은 복사하여 모든 자손 노드가 포함된 사본을 생성하고, false를 인수로 전달하거나 생략하면 노드를 얕은 복사하여 노드 자신만의 사본을 생성한다. 앝은 복사로 생성된 요소 노드는 자손 노드를 복사하지 않으므로 텍스트 노드도 없다.

const $fruits2 = document.getElementById('fruits2');
const $apple = $fruits2.firstElementChild;

//$apple 요소를 얕은 복사하여 사본을 생성. 텍스트 노드가 없는 사본이 생성된다.
const $shallowClone = $apple.cloneNode();
//사본 요소 노드에 텍스트 추가
$shallowClone.textContent = 'Banana';
//사본 요소 노드를 #fruits2 요소 노드의 마지막 노드로 추가
$fruits2.appendChild($shallowClone);

//. #fruits2 요소를 깊은 복사하여 모든 자손 노드가 포함된 사본을 생성
const $deepClone = $fruits2.cloneNode(true);
$fruits2.appendChild($deepClone);

//! 노드 교체
//# Node.prototype.replaceChild(newChild, oldChild)
//? Node.prototype.replaceChild(newChild, oldChild) 메서드는 자신을 호출한 노드의 자식 노드를 다른 노드로 교체한다.

const $newChild = document.createElement('li');
$newChild.textContent = 'Peach';
$fruits2.replaceChild($newChild, $fruits2.firstElementChild);

//! 노드 삭제
//# Node.prototype.removeChild(child)
//? Node.prototype.removeChild(child) 메서드는 child 매개변수에 인수로 전달한 노드를 DOM에서 삭제한다.

const $fruits3 = document.getElementById('fruits3');
$fruits3.removeChild($fruits3.lastElementChild);












