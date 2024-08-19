// ! 객체란?
// 자바스크립트를 구성하는 거의 모든 것이 객체이다

// # 객체는 0개 이상의 프로퍼티로 구성된 집합이며, 프로퍼티는 키와 값으로 구성된다.

//예시
var person = {
  name: `Lee`, //name->  프로퍼티 키, Lee-> 프로퍼티 값
  age: 20
};

//# 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메서드라 부른다.


//! 객체 리터럴에 의한 객체 생성

//예시
var person = {
  name: 'Lee',
  sayHello: function() {
    console.log(`Hello! my name is ${this.name}.`);
  }
};
console.log(person); // {name: 'Lee', sayHello: [Function: sayHello]}

//! 프로퍼티 접근
// ? (1) 마침표 프로퍼티 접근 연산자(.)를 사용하는 마침표 표기법. (2) 대괄호 프로퍼티 접근 연산자([...])를 사용하는 대괄호 표기법

//예시
var person = {
  name: 'Lee'
};

console.log(person.name); //Lee

console.log(person['name']); //Lee

//! 프로퍼티 값 갱신
//예시
var person = {
  name: 'Lee'
};

console.log(person.name); //Lee

person.name = 'Kim';

console.log(person.name); //Kim

//! 프로퍼티 동적 생성
//예시
person.age = 20;
console.log(person.age); //20

//! 프로퍼티 삭제(delete)
//예시
delete person.age;
console.log(person); //{name: 'Kim'}

