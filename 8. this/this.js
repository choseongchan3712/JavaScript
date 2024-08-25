// ! this 키워드
// ? 동작을 나타내는 메서드는 자신이 속한 객체의 상태, 즉 프로퍼티를 참조하고 변경할 수 있어야 한다. 이때 메서드가 자신이 속한 객체의 프로퍼티를 참조하려면 먼저 자신이 속한 객체를 가리키틑 식별자를 참조할 수 있어야 한다.

// 예
const circle = {
  radius: 5,
  getDiameter() {
    return 2 * circle.radius;
  }
};

console.log(circle.getDiameter()); //10

// ? ... 하지만 자기 자신이 속한 객체를 재귀적으로 참조하는 방식은 일반적이지 않으며 바람직하지도 않다. 생성자 함수 방식으로 인스턴스를 생성하는 경우를 생각해보자.
// ? ... 생성자 함수를 정의하는 시점에는 아직 인스턴스를 생성하기 이전이므로 생성자 함수가 생성할 인스턴스를 가리키는 식별자를 알 수 없다. 따라서 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 특수한 식별자가 필요하다. 이를 위해 자바스크립트는 this라는 특수한 식별자를 제공한다.
// ! this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가르키는 자기 참조 변수다. this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.

// 예
// 객체 리터럴
const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  }
};

console.log(circle1.getDiameter());//10

//예
// 생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function() {
    return 2 * this.radius;
  };
}

const circle2 = new Circle(5);
console.log(circle2.getDiameter()); //10

