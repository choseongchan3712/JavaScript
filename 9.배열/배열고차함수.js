console.log('=== Array.prototype.sort ===');
//# Array.prototype.sort
//? sort 메서드는 배열의 요소를 정렬한다. 원본 배열을 직접 변경하며 정렬된 배열을 반환한다.
//? sort 메서드는 기본적으로 오름차순으로 요소를 정렬한다.

const fruits1 = ['banana', 'orange', 'apple'];
fruits1.sort();
console.log(fruits1); //['apple', 'banana', 'orange']

//? 문자열 요소로 이루어진 배열의 정렬은 아무런 문제가 없다. 하지만 숫자 요소로 이루어진 배열을 정렬할 때는 주의가 필요하다.
const points1 = [40, 100, 1, 5, 2, 25, 10];
points1.sort();
console.log(points1);// [1, 10, 100, 2, 25, 40, 5]

//? 따라서 숫자 요소를 정렬할 때는 sort 메서드에 정렬 순서를 정의하는 비교 함수를 인수로 전달해야 한다. 
//? 비교 함수는 양수나 음수 또는 0을 반환해야 한다.
//! 비교 함수의 반환값이 0보다 크면 두 번째 인수를 우선하여 정렬 한다.

const points2 = [40, 100, 1, 5, 2, 25, 10];
points2.sort((a, b) => a - b);
console.log(points2); //[1, 2, 3, 10, 25, 40, 100]

