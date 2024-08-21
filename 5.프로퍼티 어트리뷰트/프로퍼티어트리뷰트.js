//! 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본 값으로 자동 정의 한다.
//! 프로퍼티 상태란 프로퍼티의 값(value), 값의 갱신 가능 여부(writabl), 열거 기능 여부(enumerable), 재정의 가능 여부(configurable)를 말한다.


//! 프로퍼티 어트리뷰트는 자바스크립트 엔진이 관리하는 내부 상태 값인 내부 슬롯[[value]], [[Writable]], [[Enumerable]], [[Configurable]]이다. 따라서 프로퍼티 어트리뷰트에 직접 접근할 수 없지만 Object.getOwnPropertyDescriptor 메서드를 사용하여 간접적으로 확인할 수는 있다.

//예제
const person = {
  name: 'Lee'
};

console.log(Object.getOwnPropertyDescriptor(person, 'name')); //{value:'Lee', writabl: true, enumerable: true, configurable: true}

//! Object.getOwnPropertyDescriptor 메서드는 하나의 프로퍼티에 대해 프로퍼티 디스크립터 객체를 반환하지만
//! Object.getOwnPropertyDescriptors 메서드는 모든 프로퍼티의 프로퍼티 어프리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.

//예제
const person1 = {
  name: 'Lee'
};

person1.age = 20; //프로퍼티 동적 생성

console.log(Object.getOwnPropertyDescriptors(person1));
//{name: {value:'Lee', writabl: true, enumerable: true, configurable: true}, age: ...}

//! 데이터 프로퍼티와 접근자 프로퍼티 ... 생략 ... p221

