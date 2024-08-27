//! Number.isFinite
console.log('=== Number.isFinite ===');
//? Number.isFinite 메서드는 인수로 전달된 숫자값이 정상적인 유한수, 즉 Infinity 또는 -Infinity가 아닌지 검사하여 그 결과를 불리언 값으로 반환한다.

//예
console.log(Number.isFinite(0)); //true
console.log(Number.isFinite(Number.MAX_VALUE)); //true
console.log(Number.isFinite(Number.MIN_VALUE)); //true

console.log(Number.isFinite(Infinity)); //false
console.log(Number.isFinite(-Infinity)); //false

//? 만약 인수가 NaN이면 언제나 false를 반환한다.
console.log(Number.isFinite(NaN)); //false


//! Number.isInteger
console.log('=== Number.isInteger ===');
//? Number.isInteger 메서드는 인수로 전달된 값이 정수인지 검사하여 그 결과를 불리언 값으로 반환한다. 검사하기 전에 인수를 숫자로 암묵적 타입 변환하지 않는다.

//? 인수가 정수이면 true를 반환한다.
console.log(Number.isInteger(0)); //true
console.log(Number.isInteger(123)); //true
console.log(Number.isInteger(-123)); //true

// 0.5는 정수가 아니다.
console.log(Number.isInteger(0.5)); //false

//'123'을 숫자로 암묵적 타입 변환하지 않는다
console.log(Number.isInteger('123')); //false

//Infinity/-Infinity는 정수가 아니다.
console.log(Number.isInteger(Infinity)); //false
console.log(Number.isInteger(-Infinity)); //false


//! Number.isNaN
console.log('=== Number.isNaN ===');
//? Number.isNaN 메서드는 인수로 전달된 숫자값이 NaN인지 검사하여 그 결과를 불리언 값으로 변환한다.

//인수가 NaN이면 true을 반환한다
console.log(Number.isNaN(NaN)); //true


//! Number.prototype.toFixed
console.log('=== Number.prototype.toFixed ===');
//? Number.prototype.toFixed 메서드는 숫자를 반올림하여 문자열로 반환한다. 반올림하는 소수점 이하 자릿수를 나타내는 0~20 사이의 정수값을 인수로 전달할 수 있다. 인수를 생략하면 기본값 0이 지정된다.

//예
console.log((12345.6789).toFixed()); //12346
console.log((12345.6789).toFixed(1)); //12345.7
console.log((12345.6789).toFixed(2)); //12345.68
console.log((12345.6789).toFixed(3)); //12345.679










