// ! Number 생성자 함수
//? 표준 빌트인 객체인 Number 객체는 생성자 함수 객체다. 따라서 new 연산자와 함께 호출하여 Number 인스턴스를 생성할 수 있다.
//예
const numObj1 = new Number();
console.log(numObj1); // [Number: 0]

const numObj2 = new Number(10);
console.log(numObj2); // [Number: 10]

const numObj3 = new Number('10');
console.log(numObj3); // [Number: 10]

const numObj4 = new Number('Hello');
console.log(numObj4); // [Number: NaN]

// % new 연산자를 사용하지 않고 Number 생성자를 호출하면 Number 인스턴스가 아닌 숫자를 반환한다. 이를 이용하여 명시적으로 타입을 변환하기도 한다.

//예
console.log(Number(10)); //10
console.log(Number('0')); //0
console.log(Number(true)); //1
console.log(Number(false)); //0