//? 클래스는 객체를 만들기 위한 템플릿 역할을 하며, 객체의 속성(프로퍼티)과 동작(메서드)을 정의합니다.

//! 1. 클래스 기본 구조
//? 자바스크립트 클래스는 class 키워드를 사용하여 정의됩니다. 클래스 안에는 생성자와 메서드가 포함 됩니다.

//& 예시
class Person {
  constructor(name, age) {
    //? 생성자
    this.name = name; //? 클래스의 프로퍼티
    this.age = age; //? 클래스의 프로퍼티
  }
  //? 메서드
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

//? 클래스를 사용해 객체 생성
const person = new Person("Alice", 30);
console.log(person.greet()); //% Hello, my name is Alice and I am 30 years old.

//* 설명
//? class Person: person 이라는 클래스를 정의합니다.
//? constructor: 객체가 생성될 때 호출되는 메서드로, 여기서 객체의 초기값을 설정합니다.
//? this: 현재 클래스의 인스턴스를 가리키며, 클래스 안에서 프로퍼티나 메서드를 참조할 때 사용됩니다.
//? greet(): 클래스 안에 정의된 메서드로, 객체의 행동을 정의합니다.

//! 2. 클래스의 인스턴스
//? 클래스는 인스턴스를 생성하는 설계도입니다. 인스턴스는 클래스를 통해 생성된 객체입니다. 예를 들어, 위 코드에서 person은 Person 클래스의 인스턴스입니다.

//& 예시
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

console.log(person1.greet()); //% Hello, my name is Alice and I am 30 years old.
console.log(person2.greet()); //% Hello, my name is Bob and I am 25 years old.


//! 3. 메서드
//? 클래스 안에서 정의된 함수는 메서드라고 불립니다. 메서드는 객체의 행동을 정의합니다. 위 예시에서 greet()은 Person 클래스의 메서드입니다.

//& 예시
class Person3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

  haveBirthday() {
    this.age++;
    console.log(`${this.name} just turned ${this.age}!`);
  }
}

const person3 = new Person3("Charlie", 28);
person3.greet(); //% Hello, my name is Charlie
person3.haveBirthday(); //% Charlie just turned 29!


//! 4. 상속
//? 상속은 한 클래스가 다른 클래스의 모든 속성과 메서드를 물려받는 것을 의미합니다. 자바스크립트에서는 extends 키워드를 사용해 상속을 구현할 수 있습니다.

//& 예시
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

//? Dog 클래스는 Animal 클래스를 상속받음
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Bubby");
dog.speak(); //% Bubby barks


//! 5. 정적 메서드
//? 정적 메서드는 클래스 자체에 속하며, 인스턴스가 아닌 클래스 이름을 통해 호출할 수 있습니다. 이를 위해 static 키워드를 사용합니다.

//& 예시
class MathHelper {
  static add = (a, b) => {
    return a + b;
  }
}

console.log(MathHelper.add(5, 10)); //% 15


//! 6. Getter와 Setter
//? getter와 setter를 사용하면, 속성 값을 읽거나 설정할 때 로직을 추가할 수 있습니다. 마치 속성에 접근하는 것처럼 보이지만, 사실 메서드를 호출하는 방식입니다.

//& 예시
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  //? getter
  get area() {
    return this.width * this.height;
  }

  //? setter
  set resize(factor) {
    this.width *= factor;
    this.height *= factor;
  }
}

const rect = new Rectangle(10, 5);
// console.log(rect.area); //% 50 (getter 호출)
rect.resize = 2; //% (setter 호출)
console.log(rect.area); //% 200








