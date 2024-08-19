// ! 이항 산술 연산자
console.log('이항 산술 연산자');

// 5+2 -> 7
console.log(5+2);

// 5-2 -> 3
console.log(5-2);

// 5*2 -> 10
console.log(5*2);

// 5/2 -> 2.5
console.log(5/2);

// 5%2 -> 1
console.log(5%2);

// ! 단항 산술 연산자
console.log('단항 산술 연산자');

var x = 1;

x++; // x = x + 1

console.log(x); // 2

x--; // x = x - 1

console.log(x); // 1

// ? 증가/감소 연산자는 위치에 의미가 있다

var x = 5;
var result;

// # 선할당 후증가
result = x++;

console.log(result); // 5
console.log(x); // 6

// # 선증가 후할당
result = ++x;

console.log(result); // 7
console.log(x); // 7

// # 선할당 후감소
result = x--;

console.log(result); // 7
console.log(x); // 6

//# 선감소 후할당
result = --x;

console.log(result); // 5
console.log(x); // 5

// ! 할당 연산자
console.log('할당 연산자');

var x;

x = 10;
console.log(x); // 10

x += 5; // x = x + 5
console.log(x); // 15

x -= 5 ; // x = x - 5
console.log(x); // 10

x *= 5; // x = x * 5
console.log(x); // 50

x /= 5; // x = x / 5
console.log(x); // 10

x %= 5; // x = x % 5
console.log(x); // 0

// ? 문자열 연산 연결자

var str = 'my name is ';

str += 'Lee'; // str = str + 'Lee'
console.log(str);


// ! 비교 연산자
console.log('비교 연산자');

// # 동등 비교 (==)
console.log('동등 비교(==)');

console.log(5 == 5); // true
console.log(5 == '5'); // true
//? 동등 비교는 되도록 사용 하지 않음

// # 일치 비교 (===)
console.log('일치 비교(===)');

console.log(5 === 5); // true
console.log(5 === '5'); // false

// ? NaN 주의: 유일하게 자신과 일치 하지 않음
console.log('NaN');
console.log(NaN === NaN); // false


// ! 대소 관계 비교 연산자
console.log('대소 관계 비교 연산자');

console.log(5 > 0); // true
console.log(5 > 5); // false
console.log(5 >= 5); // true
console.log(5 <= 5); // true