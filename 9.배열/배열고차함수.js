console.log("=== Array.prototype.sort ===");
//# Array.prototype.sort
//? sort 메서드는 배열의 요소를 정렬한다. 원본 배열을 직접 변경하며 정렬된 배열을 반환한다.
//? sort 메서드는 기본적으로 오름차순으로 요소를 정렬한다.

const fruits1 = ["banana", "orange", "apple"];
fruits1.sort();
console.log(fruits1); //['apple', 'banana', 'orange']

//? 문자열 요소로 이루어진 배열의 정렬은 아무런 문제가 없다. 하지만 숫자 요소로 이루어진 배열을 정렬할 때는 주의가 필요하다.
const points1 = [40, 100, 1, 5, 2, 25, 10];
points1.sort();
console.log(points1); // [1, 10, 100, 2, 25, 40, 5]

//? 따라서 숫자 요소를 정렬할 때는 sort 메서드에 정렬 순서를 정의하는 비교 함수를 인수로 전달해야 한다.
//? 비교 함수는 양수나 음수 또는 0을 반환해야 한다.
//! 비교 함수의 반환값이 0보다 크면 두 번째 인수를 우선하여 정렬 한다.

const points2 = [40, 100, 1, 5, 2, 25, 10];
points2.sort((a, b) => a - b);
console.log(points2); //[1, 2, 3, 10, 25, 40, 100]

console.log("=== Array.prototype.forEach ===");
//# Array.prototype.forEach

//예
const numbers1 = [1, 2, 3];
const pows1 = [];

//for 문으로 배열 순회
for (let i = 0; i < numbers1.length; i++) {
  pows1.push(numbers1[i] ** 2);
}

console.log(pows1); //[1, 4, 9]

//? forEach 메서드는 for 문을 대체할 수 있는 고차 함수다. forEach 메서드는 자신의 내부에서 반복문을 실행한다. 즉, forEach 메서드는 반복문을 추상화한 고차 함수로서 내부에서 반복문을 통해 자신을 호출한 배열을 순회하면서 수행해야 할 처리를 콜백 함수로 전달받아 반복 호출한다. for 문으로 구현된 위 예제를 forEach 메서드로 구현하면 다음과 같다.

const numbers2 = [1, 2, 3];
const pows2 = [];

numbers2.forEach((items) => pows2.push(items ** 2));
console.log(pows2); //[1, 4, 9]

//forEach 메서드는 콜백함수를 호출하면서 3개(요소갑스 인덱스, this)의 인수를 전달한다.
[1, 2, 3].forEach((item, index, arr) => {
  console.log(
    `요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`
  );
});

// 요소값: 1, 인덱스: 0, this: [1,2,3]
// 요소값: 2, 인덱스: 1, this: [1,2,3]
// 요소값: 3, 인덱스: 2, this: [1,2,3]

console.log("=== Array.prototype.map ===");
//# Array.prototype.map
//? map 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달 받은 콜백 함수를 반복 호출한다. 그리고 콜백함수의 반환값들로 구성된 새로운 배열을 반환한다. 이때 원본 배열은 변경되지 않는다.

const numbers3 = [1, 4, 9];
const roots = numbers3.map((item) => Math.sqrt(item));
console.log(roots); //[1, 2, 3]
console.log(numbers3); //[1, 4, 9]

//? ...forEach 메서드는 단순히 반복문을 대체하기 위한 고차 함수이고, map 메서드는 요소값을 다른 값으로 매핑한 새로운 배열을 생성하기 위한 고차 함수이다.
//? map 메서드를 호출한 배열과 map 메서드가 생성하여 반환한 배열은 1:1 메핑한다.

console.log("=== Array.prototype.filter ===");
//# Array.prototype.filter

//? filter 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다. 그리고 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다. 이때 원본 배열은 변경되지 않는다.

//예
const numbers4 = [1, 2, 3, 4, 5];
const odds = numbers4.filter((item) => item % 2);
console.log(odds); //[1, 3, 5]

console.log("=== Array.prototype.reduce ===");
//# Array.prototype.reduce
//? reduce 메서드는 자신을 호출한 배열을 모든 요소를 순회하며 인수로 전달받은 콜백함수를 반복 호출한다. 그리고 콜백함수의 반환값을 다음 순회 시에 첫 번째 인수로 전달하면서 콜백 함수를 호출하여 하나의 결과 값을 만들어 반환한다. 이때 원본 배열은 변경되지 않는다.
//? accumulator: 초기값; currentValue: 인수.
const sum = [1, 2, 3, 4].reduce(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
  0
); //0-> 초기값
console.log(sum); //10

//% 평균 구하기
const values1 = [1, 2, 3, 4, 5, 6];
const average = values1.reduce((acc, cur, i, { length }) => {
  return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);
console.log(average); //3.5

//% 최대값 구하기
const values2 = [1, 2, 3, 4, 5];
const max = values2.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
console.log(max); //5
//! 최대값을 구할 때는 reduce 메서드보다 Math.max 메서드를 사용하는 방법이 더 직관적이다.

//% 요소의 중복 횟수 구하기
const fruits = ["banana", "apple", "orange", "orange", "apple"];
const count = fruits.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
console.log(count); // {banana: 1, apple: 2, orange: 2}

//% 중복 요소 제거
const values3 = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];
const result = values3.reduce(
  (unique, val, i, _values) =>
    _values.indexOf(val) === i ? [...unique, val] : unique,
  []
);

console.log(result); //[1, 2, 3, 5, 4]
//! 중복 요소를 제거할 때는 reduce 메서드보다 filter 메서드를 사용하는 방법이 더 직관적이다.

const values4 = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];
const result1 = values4.filter((val, i, _values) => _values.indexOf(val) === i);
console.log(result); //[1, 2, 3, 5, 4]
