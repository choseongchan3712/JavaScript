//! Date.now
console.log('=== Date.now ===');
//? 1970년 1월 1일 00:00:00(UTC)을 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환한다.

const now = Date.now();
console.log(now); //1725197528338

console.log(new Date(now)); //2024-09-01T13:32:08.338Z

//! Date.parse
console.log('=== Date.parse ===');
//? 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간의 인수와 동까지의 밀리초를 숫자로 반환한다.

//UTC
console.log(Date.parse('Jan 2, 1970 00:00:00 UTC')); 
// 86400000

//KST
console.log(Date.parse('Jan 2, 1970 09:00:00'));
// 86400000

//KST
console.log(Date.parse('1970/01/02/09:00:00'));
// 86400000

//! Date.UTC
console.log('=== Date.UTC ===');
//? 1970년 1월 1일 00:00:00(UTC)을 기점으로 전달된 지정 시간까지의 밀리초를 숫자로 반환한다.

//! Date.prototype.getFullYear
console.log('=== Date.prototype.getFullYear ===');
//? Date 객체의 연도를 나타내는 정수를 반환한다.

console.log(new Date('2020/07/24').getFullYear()); //2020

//! Date.prototype.setFullYear
console.log('=== Date.prototype.setFullYear ===');
//? Date 객체에 연도를 나타내는 정수를 설정한다. 연도 이외에 옵션으로 월, 일도 설정 할 수 있다.

const today = new Date();
today.setFullYear(2000);
console.log(today.getFullYear()); //2000

today.setFullYear(1900, 0, 1);
console.log(today.getFullYear()); //1900

//! Date.prototype.getMonth
console.log('=== Date.prototype.getMonth ===');
//? Date 객체의 월을 나타내는 0~11의 정수를 반환한다. 1월은 0, 12월은 11이다.
console.log(new Date('2020/07/24').getMonth()); //6

//! Date.prototype.setMonth
console.log('=== Date.prototype.setMonth ===');
//? Date객체에 월을 나타내는 0~11의 정수를 설정한다.

const today1 = new Date();

today1.setMonth(0);
console.log(today1.getMonth()); //0

//! Date.prototype.getDate
console.log('=== Date.prototype.getDate ===');
//? Date 객체의 날짜(1~31)를 나타내는 정수를 반환한다.

console.log(new Date('2020/07/24').getDate()); //24

//! Date.prototype.setDate
console.log('=== Date.prototype.setDate ===');
//? Date 객체의 날짜(1~31)를 나타내는 정수를 설정한다.

const today2 = new Date();
today2.setDate(1);
console.log(today2.getDate()); //1

//! Date.prototype.getDay
console.log('=== Date.prototype.getDay ===');
//? Date 겍체의 요일(0~6)을 나타내는 정수를 반환한다.

console.log(new Date('2020/07/24').getDay());//5

//! Date.prototype.getHours
console.log('=== Date.prototype.getHours ===');
//? Date 객체의 시간(0~23)을 나타내는 정수를 반환한다.

console.log(new Date('2020/07/24/12:00').getHours()); //12

//! Date.prototype.setHours
console.log('=== Date.prototype.setHours ===');
//? Date 객에 시간(0~23)을 나타내는 정수를 설정한다.

const today3 = new Date();

today3.setHours(7);
console.log(today3.getHours()); //7

//! Date.prototype.getMinutes
console.log('=== Date.prototype.getMinutes ===');
//? Date 객체의 분(0~59)을 나타내는 정수를 반환한다.

console.log(new Date('2020/07/24/12:30').getMinutes()); //30

//! Date.prototype.setMinutes
console.log('=== Date.prototype.setMinutes ===');
//? Date 객체에 분(0~59)을 나타내는 정수를 설정한다.

const today4 = new Date();

today4.setMinutes(50);
console.log(today4.getMinutes()); //50

//! Date.prototype.getseconds
console.log('=== Date.prototype.getseconds ===');
//? Date 객체의 초(0~59)를 나타내는 정수를 반환한다.

console.log(new Date('2020/07/24/12:30:10').getSeconds()); //10

//! Date.prototype.setseconds
console.log('=== Date.prototype.setseconds ===');
//? Date 객체에 초(0~59)를 나타내는 정수를 설정한다.

const today5 = new Date();

today5.setSeconds(30);
console.log(today5.getSeconds()); //30

//! Date.prototype.getMilliseconds
console.log('=== Date.prototype.getMilliseconds ===');
//? Date 객체의 밀리초(0~999)를 나타내는 정수를 반환한다.

console.log(new Date('2020/07/24/12:30:10:150').getMilliseconds());//150

//! Date.prototype.setMilliseconds
console.log('=== Date.prototype.setMilliseconds ===');
//? Date 객체에 밀리초(0~999)를 나타내는 정수를 설정한다.

const today6 = new Date();

today6.setMilliseconds(123);
console.log(today6.getMilliseconds()); //123




















