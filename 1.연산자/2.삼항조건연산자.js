// ! 삼항 조건 연산자

// ? (1) 조건식 ? 조건식이 true일 때 반환할 값 : 조건식이 false일 때 반환할 값

console.log(`예시 1`);
var x = 2;
var result = x % 2 ? `홀수` : `짝수`;
console.log(result);




// ? (2) if ... else 문항
console.log('if ... else 문항');

var x = 2;
var result;

if (x % 2) result = `홀수`;
else result = `짝수`;
console.log(result);