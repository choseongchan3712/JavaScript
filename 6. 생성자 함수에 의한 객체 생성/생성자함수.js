// ! Object 생성자 함수
//? new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다.

//예제

//빈객체를 생성
let person = new Object();

//프로퍼티 추가
person.name = 'Lee';
person.sayHello = function() {
  console.log('Hi My name is ' + this.name);
};

console.log(person); //{name: 'Lee', sayHelllo: [fonction (anonymous)]}
person.sayHello(); //Hi My name is Lee

//! 생성자 함수

//# 객체 리터럴에 의한 객체 생성 방식의 문제점

//예제

var circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  }
};

console.log(circle1.getDiameter()); //10

var circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  }
};

console.log(circle2.getDiameter()); //20

// # 생성자 함수에 의한 객체 생성 방식의 장점

//예제

function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function() {
    return 2 * this.radius;
  };
}

var circle1 = new Circle(5);
var circle2 = new Circle(10);

console.log(circle1.getDiameter()); //10
console.log(circle2.getDiameter()); //20