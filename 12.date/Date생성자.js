//! new Date()
console.log('=== new Date() ===');
//? Date 생성자 함수를 인수 없이 new 연산자와 함께 호출하면 현재 날짜와 가지는 Date 객체를 반환한다.

console.log(new Date()); //2024-09-01T09:56:49.816Z

//? Date 생성자 함수를 new 연산자 없이 호출하면 Date 객체를 반환하지 않고 날짜와 시간 정보를 나타내는 문자열을 반환한다.

console.log(Date()); //Sun Sep 01 2024 18:58:53 GMT+0900 (대한민국 표준시)

//! new Date(milliseconds)
console.log('=== new Date(milliseconds) ===');
//? Date 생성자 함수에 숫자 타입의 밀리초를 인수로 전달하면 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 밀리초만큼 경과한 날짜와 시간을 나타내는 Date 객체를 반환한다.

console.log(new Date(0)); //1970-01-01T00:00:00.000Z

console.log(new Date(86400000)); //1970-01-02T00:00:00.000Z

//! new Date(dateString)
console.log('=== new Date(dateString) ===');
//? Date 생성자 함수에 날짜와 시간을 나타내는 문자열 인수로 전달하면 지정된 날짜와 시간을 나타내는 Date 객체를 반환한다. 이때 인수로 전달한 문자열은 Date.parse 메서드에 의해 해석 가능한 형식이어야 한다.

console.log(new Date('May 26, 2020 10:00:00')); //2020-05-26T01:00:00.000Z

console.log(new Date('2020/03/26/10:00:00')); //2020-03-26T01:00:00.000Z

//! new Date(year, month[, day, hour, minute, second, millisecond])
console.log('=== new Date(year, month[, day, hour, minute, second, millisecond]) ===');
//? Date 생성자 함수에 연, 월, 일, 시, 분, 초, 밀리초를 의미하는 숫자를 인수로 전달하면 지정된 날짜와 시간을 나타내는 Date 객체를 반환한다.

//& year: 연을 나타내는 1900년 이후의 정수. 0부터 99는 1900부터 1999로 처리된다.
//& month: 월을 나타내는 0~11까지의 정수(주의: 0부터 시작, 0=1월)
//& day: 일을 나타내는 1~31까지의 정수
//& hour: 시를 나타내는 0~23까지의 정수
//& minute: 분을 나타내는 0~59까지의 정수
//& second: 초를 나타내는 0~59까지의 정수
//& millisecond: 밀리초를 나타내는 0~999까지의 정수

console.log(new Date(2020, 3)); //2020-03-31T15:00:00.000Z
console.log(new Date(2020, 2, 26, 10, 0, 0, 0)); //2020-03-26T01:00:00.000Z
console.log(new Date('2020/3/26/10:00:00:00')); //2020-03-26T01:00:00.000Z
