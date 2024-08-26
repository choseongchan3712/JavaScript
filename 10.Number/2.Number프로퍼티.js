//! Number.EPSILON
console.log('=== Number.EPSILON ===');
//? Number.EPSILON은 1과 1보다 큰 숫자 중에서 가장 작은 숫자와의 차이와 같다.
//? 정수는 2진법으로 오차가 없이 저장 가능하지만 부동소수점을 표현하기 위해 가장 널리 쓰이는 표준인 IEEE 754는 2진법으로 변환했을 때 무한소수가 되어 미세한 오차가 발샐할 수밖에 없는 구조적 한계가 있다.
//예
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false

console.log((0.1 + 0.2) - 0.3 < Number.EPSILON); // true
//# a와 b를 뺀 값의 절대값이 Number.EPSILON보다 작으면 같은 수로 인정한다.

//! Number.MAX_VALUE
console.log('=== Number.MAX_VALUE ===');
//? Number.MAX_VALUE는 자바스크립트에서 표현할 수 있는 가장 큰 양수 값이다.
//? Number.MAX_VALUE보다 큰 숫자는 Infinity다

//예
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

//! Number.MIN_VALUE
console.log('=== Number.MIN_VALUE ===');
//? Number.MAX_VALUE는 자바스크립트에서 표현할 수 있는 가장 작은 양수 값이다.
//? Number.MAX_VALUE보다 작은 숫자는 0이다

//예
console.log(Number.MIN_VALUE); // 5e-324

//! Number.MAX_SAFE_INTEGER
console.log('=== Number.MAX_SAFE_INTEGER ===');
//? Number.MAX_SAFE_INTEGER는 자바스크립트에서 안전하게 표현할 수 있는 가장 큰 정수값이다.

//예
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991

//! Number.MIN_SAFE_INTEGER
console.log('=== Number.MIN_SAFE_INTEGER ===');
//? Number.MIN_SAFE_INTEGER는 자바스크립트에서 안전하게 표현할 수 있는 가장 작은 정수값이다.

//예
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991













