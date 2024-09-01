//! id를 이용한 요소 노드 취득
//? Document.prototype.getElementById 메서드는 인수로 전달한 id 어트리뷰트 값을 갖는 하나의 요소 노드를 탐색하여 반환한다.

const $apple = document.getElementById(`apple`);
$apple.style.backgroundColor = `red`;

const $banana = document.getElementById('banana');
$banana.style.backgroundColor = 'yellow';

const $orange = document.getElementById('orange');
$orange.style.backgroundColor = 'orange';


//! 태그 이름을 이용한 요소 노드 취득
//? Document.prototype.getElementsByTagName 메서드는 인수로 전달한 태그 이름을 갖는 모든 요소 노드들을 탐색하여 반환한다.
const $boxes = document.getElementsByTagName('div');
[...$boxes].forEach((box) => {box.style.border = '1px solid black'});

//! class를 이용한 요소 노드 취득
//? Document.prototype.getElementsByClassName 메서드는 인수로 전달한 태그 이름을 갖는 모든 요소 노드들을 탐색하여 반환한다.
const $fruits = document.getElementsByClassName('fruits');
[...$fruits].forEach(fruit => {fruit.style.border = '3px solid blue'});

const $peach = document.getElementsByClassName('peach');
[...$peach].forEach((peach) => {peach.style.backgroundColor = 'salmon'});

const $watermelon = document.getElementsByClassName('watermelon');
[...$watermelon].forEach((watermelon) => {watermelon.style.backgroundColor = 'green'});

const $melon = document.getElementsByClassName('melon');
[...$melon].forEach((melon) => {melon.style.backgroundColor = 'lightgreen'});


//! CSS 선택자를 이용한 요소 노드 취득
//? Document.prototype.querySelector 메서드는 인수로 전달할 CSS 선택자를 만족시키는 하나의 요소 노드를 탐색하여 반환한다.

const $box2 = document.querySelector('.wrap_2>div:nth-child(2)');
$box2.style.border = '2px solid red';















