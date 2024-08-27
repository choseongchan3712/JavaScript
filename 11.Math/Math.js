//! Math.PI
console.log('=== Math.PI ===');
//? 원주율 PI 값을 반환한다.

console.log(Math.PI); // 3.141592653689793


//! Math.abs
console.log('=== Math.abs ===');
//? Math.abs 메서드는 인수로 전달된 숫자의 절대값을 반환한다. 절대값은 반드시 0 또는 양수이어야 한다.

console.log(Math.abs(-1)); //1
console.log(Math.abs('-1')); //1
console.log(Math.abs('')); //0
console.log(Math.abs([])); //0
console.log(Math.abs(null)); //0
console.log(Math.abs(undefined)); //NaN
console.log(Math.abs({})); //NaN
console.log(Math.abs('string')); //NaN
console.log(Math.abs()); //NaN


//! Math.round
console.log('=== Math.round ===');
//? Math.round 메서드는 인수로 전달된 숫자의 소수점 이하를 반올림한 정수를 반환한다.

console.log(Math.round(1.4)); //1
console.log(Math.round(1.6)); //2
console.log(Math.round(-1.4)); //-1
console.log(Math.round(-1.6)); //-2
console.log(Math.round(1)); //1
console.log(Math.round()); //NaN


//! Math.ceil
console.log('=== Math.ceil ===');
//? Math.ceil 메서드는 인수로 전달된 숫자의 소수점 이하를 올림한 정수를 반환한다. 소수점 이하를 올림하여 더 큰 정수가 된다. 예를 들어, 1.4의 소수점 이하를 올림하면 2가 되고, -1.4의 소수점 이하를 올림하면 -1이 된다.
console.log(Math.ceil(1.4)); //2
console.log(Math.ceil(1.6)); //2
console.log(Math.ceil(-1.4)); //-1
console.log(Math.ceil(-1.6)); //-1
console.log(Math.ceil(1)); //1
console.log(Math.ceil()); //NaN


//! Math.floor
console.log('=== Math.floor ===');
//? Math.floor 메서드는 인수로 전달된 숫자의 소수점 이하를 내림한 정수를 반환한다.

console.log(Math.floor(1.9)); //1
console.log(Math.floor(9.1)); //9
console.log(Math.floor(-1.9)); //-2
console.log(Math.floor(-9.1)); //-10
console.log(Math.floor(1)); //1
console.log(Math.floor()); //NaN



//! Math.sqrt
console.log('=== Math.sqrt ===');
//? Math.sqrt 메서드는 인수로 전달된 숫자의 제곱근을 반호낳나다.

console.log(Math.sqrt(9)); //3
console.log(Math.sqrt(-9)); //NaN
console.log(Math.sqrt(2)); //1.4142135623730951
console.log(Math.sqrt(1)); //1 
console.log(Math.sqrt(0)); //0
console.log(Math.sqrt()); //NaN



//! Math.random
console.log('=== Math.random ===');
//? Math.random 메서드는 임의의 난수를 반환한다. Math.random 메서드가 반환한 난수는 0에서 1 미만의 실수다. 즉 0은 포함되지만 1은 포함되지 않는다.

const random = Math.floor((Math.random() * 10) + 1);
console.log(random); //5


//! Math.pow
console.log('=== Math.pow ===');
//? Math.pow 메서드는 첫 번째 인수를 밑으로, 두 번째 인수를 지수로 거듭제곱한 결과를 반환한다.

console.log(Math.pow(2, 8)); //256
console.log(Math.pow(2, -1)); //0.5
console.log(Math.pow()); //NaN


//! Math.max
console.log('=== Math.max ===');
//? Math.max 메서드는 전달받은 인수 중에서 가장 큰 수를 반환한다. 인수가 전달되지 않으면 -Infinity를 반환한다.

console.log(Math.max(1)); //1
console.log(Math.max(1, 2)); //2
console.log(Math.max(1, 2, 3)); //3
console.log(Math.max()); //-Infinity


//! Math.min
console.log('=== Math.min ===');
//? Math.min 메서드는 전달받은 인수 중에서 가장 작은 수를 반환한다. 인수가 전달되지 않으면 Infinity를 반환한다.

console.log(Math.min(1)); //1
console.log(Math.min(1, 2)); //1
console.log(Math.min(1, 2, 3)); //1
console.log(Math.min()); // Infinity










