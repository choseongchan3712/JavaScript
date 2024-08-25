// 예

const arr = ['apple', 'banana', 'orange'];

// ? 요소에 접근할 때는 대괄호 표기법을 사용한다. 대괄호 내에는 접근하고 싶은 요소의 인덱스를 지정한다.
console.log(arr[0]); //apple
console.log(arr[1]); //banana
console.log(arr[2]); //orange

// ? 배열은 요소의 개수, 즉 배열의 길이를 나타내는 length 프로퍼티를 갖는다.
// 예
console.log(arr.length); //3

// ? 배열은 인덱스와 length 프로퍼티를 갖기 때문에 for 문을 통해 순차적으로 요소에 접근할 수 있다.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//apple
//banana
//orange

console.log(`=== Array 생성자 함수 ===`);
// # Array 생성자 함수

// ? Object 생성자 함수를 통해 객체를 생성할 수 있듯이 Array 생성자 함수를 통해 배열을 생성할 수도 있다.
// ? Array 생성자 함수는 전달된 인수의 개수에 따라 다르게 동작하므로 주의가 필요하다.

// 예
const arr1 = new Array(10);
console.log(arr1); //[<10 empty items>]
console.log(arr1.length); //10

console.log(`=== Array.of ===`);
// # Array.of
// ? Array.of 메서드는 전달된 인수를 요소로 갖는 배열을 생성한다. Array.of 는 Array 생성자 함수와 다르게 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.

console.log(Array.of(1)); //[1]
console.log(Array.of(1, 2, 3)); //[1, 2, 3]
console.log(Array.of(`string`)); //['string']


console.log(`=== Array.from ===`);
// # Array.from
// ? Array.from 메서드는 유사 배열 객체 또는 이터러블 객체를 인수로 전달받아 배열로 변환하여 반환한다.

console.log(Array.from({length: 2, 0: 'a', 1: 'b'})); // ['a', 'b']
console.log(Array.from(`Hello`)); // ['H', 'e', 'l', 'l', 'o']

// ? Array.from에 length만 존재하는 유사 배열 객체를 전달하면 undefined를 요소로 채운다
console.log(Array.from({length: 3})); //[undefined, undefined, undefined]

//? Array.from은 두 번째 인수로 전달한 콜백 ㅎ마수의 반환값으로 구성된 배열을 반환한다.
console.log(Array.from({length: 4}, (_, i) => i)); //! [0, 1, 2, 3] -> 이해 안 됨


console.log(`=== 배열 요소의 추가와 갱신 ===`);
// # 배열 요소의 추가와 갱신
// ? 객체의 프로퍼티를 동적으로 추가할 수 있는 것처럼 배열에도 요소를 동적으로 추가할 수 있다. 존재하지 않는 인덱스를 사용해 값을 할당하면 새로운 요소가 추가된다. 이때 length 프로퍼티 값은 자동 갱신된다.

const arr2 = [0];
//? 배열 요소의 추가
arr2[1] = 1;
console.log(arr2); //[0, 1]
//? 배열 요소값의 갱신
arr2[1] = 10;
console.log(arr2); //[0, 10]

console.log(`=== 배열 요소의 삭제 ===`);
// # 배열 요소의 삭제
//? 배열은 사실 객체이기 때문에 배열의 특정 요소를 삭제하기 위해 delete 연산자를 사용할 수 있다.

const arr3 = [1, 2, 3];

//? 배열 요소 삭제
delete arr3[1];
console.log(arr3); // [1, empty, 3]
//? delete 연산자는 객체의 프로퍼티를 삭제한다. 이때 배열은 희소 배열이 되며 length 프로퍼티 값은 변하지 않는다. 따라서 희소 배열을 만드는 delete 연산자는 사용하지 않는 것이 좋다.

//? 희소 배열을 만들지 않으면서 배열의 특정 요소를 완전히 삭제하려면 Array.prototype.splice 메서드를 사용한다.

const arr4 = [1, 2, 3];
//? (삭제를 시작할 인덱스, 삭제할 요소 수)
arr4.splice(1, 1);
console.log(arr4); //[1, 3]

console.log(`=== Array.isArray ===`);
// # Array.isArray
// ? Array.isArray 메서드는 전달된 인수가 배열이면 true, 배열이 아니면 false를 반환한다.

// ? true
console.log(Array.isArray([]));
console.log(Array.isArray([1, 2]));
console.log(Array.isArray(new Array()));

//? false
console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray(1));
console.log(Array.isArray('Array'));
console.log(Array.isArray(true));
console.log(Array.isArray(false));
console.log(Array.isArray({0: 1, length: 1}));

console.log('=== Array.prototype.indexOf ===');
//# Array.prototype.indexOf
//? indexOf 메서드는 원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환한다.
// 원본 배열에 인수로 전달한 요소와 중복되는 요소가 여러 개 있다면 첫 번째로 검색된 요소의 인덱스를 반환한다.
// 원본 배열에 인수로 전달한 요소가 존재하지 않으면 -1을 반환한다.

const arr5 = [1, 2, 2, 3];

// 배열에서 요소 2를 검색하여 첫 번째로 검색된 요소의 인덱스를 반환한다.
console.log(arr5.indexOf(2)); //1

//배열에 요소 4가 없으므로 -1을 반환한다.
console.log(arr5.indexOf(4)); //-1

//두 번째 인수는 검색을 시작할 인덱스다. 두 번째 인수를 생략하면 처음부터 검색한다.
console.log(arr5.indexOf(2, 2)); //2

console.log(`=== Array.prototype.push ===`);
//# Array.prototype.push
//? push 메서드는 인수로 전달받은 모든 값을 원본 배열의 마지막 요소로 추가하고 변경된 length 프로퍼티 값을 반환한다. push 메서드는 원본 배열을 직접 변경한다.

const arr6 = [1, 2];

// 인수로 전달 받은 모든 값을 원본 배열 arr의 마지막 요소로 추가하고 변경된 length 값을 반환한다.
arr6.push(3, 4);
console.log(arr6); //[1, 2, 3, 4]

//? push 메서드는 성능 면에서 좋지 않다. 마지막 요소로 추가할 요소가 하나뿐이라면 push 메서드를 사용하지 않고 length 프로퍼티를 사용하여 배열의 마지막에 요소를 직접 추가할 수도 있다. 이 방법이 push메서드보다 빠르다.

const arr7 = [1, 2];
arr7[arr7.length] = 3;
console.log(arr7); //[1, 2, 3]

console.log(`=== Array.prototype.pop ===`);
//# Array.prototype.pop
//? pop 메서드는 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다. 원본 배열이 빈 배열이면 undefined를 반환한다. pop 메서드는 원본 배열을 직접 변경한다.
const arr8 = [1, 2];
let result = arr8.pop();
console.log(result); //2
console.log(arr8); //[1]

console.log('=== Array.prototype.unshift ===');
//# Array.prototype.unshift
//? unshift 메서드는 인수로 전달받은 모든 값을 원본 배열의 선두에 추가하고 변경된 length 프로퍼티 값을 반환한다. unshift 메서드는 원본 배열을 직접 변경한다.
const arr9 = [1, 2];
arr9.unshift(3, 4);
console.log(arr9); //[3, 4, 1, 2]

console.log(`=== Array.prototype.shift ===`);
//# Array.prototype.shift
//? shift 메서드는 원본 배열에서 첫 번째 요소를 제거한 요소를 반환한다. 원본 배열이 빈 배열이면 undefined를 반환한다. shift 메서드는 원본 배열을 직접 변경한다.

const arr10 = [1, 2];
arr10.shift();
console.log(arr10); // [2]

console.log(`=== Array.prototype.concat ===`);
// # Array.prototype.concat
//? concat 메서드는 인수로 전달된 값들을 원본 배열의 마지막요소로 추가한 새로운 배열을 반환한다. 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가한다. 원본 배열은 변경되지 않는다.

const arr11 = [1, 2];
const arr12 = [3, 4];

const arr13 = arr11.concat(arr12);
console.log(arr13); //[1, 2, 3, 4]

const arr14 = arr13.concat(3);
console.log(arr14); //[1, 2, 3, 4, 3]

const arr15 = arr11.concat(arr12, 5);
console.log(arr15); //[1, 2, 3, 4, 5]

console.log(`=== Array,prototype.splice ===`);
//# Array.prototype.splice
//? 원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거하는 경우 splice 메서드를 사용한다. splice 메서드는 3개의 매개변수가 있으며 원본 배열을 직접 변경한다.

const arr16 = [1, 2, 3, 4];

//원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 새로운 요소 20, 30을 삽입한다.
const arr17 = arr16.splice(1, 2, 20, 30);

console.log(arr16); // [1, 20, 30, 4]
console.log(arr17); // [2, 3]

console.log(`=== Array.prototype.slice ===`);
//# Array.prototype.slice
//? slice 메서드는 인수로 전달된 범위의 요소들을 복사하여 배열로 변환한다. 원본 배열은 변경되지 않는다.

const arr18 = [1, 2, 3];

//인덱스 0부터 1(미포함)까지 복사
const arr19 = arr18.slice(0,1);
console.log(arr19); //[1]

//인덱스 1부터 2(미포함)까지 복사
const arr20 = arr18.slice(1, 2);
console.log(arr20); //[2]

//인덱스 1부터 이후의 모든 요소 복사
const arr21 = arr18.slice(1);
console.log(arr21); //[2, 3]

//배열의 끝에서부터 요소를 한 개 복사하여 반환한다.
const arr22 = arr18.slice(-1);
console.log(arr22); //[3]

//배열의 끝에서부터 요소를 두 개 복사하여 반환한다.
const arr23 = arr18.slice(-2);
console.log(arr23); //[2, 3]

//인수를 모두 생략하면 원본 배열의 복사본을 생성하여 반환한다.
const copy = arr18.slice();
console.log(copy); //[1, 2, 3]

console.log('=== Array.prototype.join ===');
//# Array.prototype.join
//? join 메서드는 원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 문자열, 즉 구분자로 연결한 문자열을 반환한다.
const arr24 = [1, 2, 3, 4];
console.log(arr24.join()); //1, 2, 3, 4

console.log(arr24.join('')); //1234

console.log(arr24.join(':')); //1:2:3:4

console.log('=== Array.prototype.reverse ===');
//# Array.prototype.reverse
//? reverse 메서드는 원본 배열의 순서를 반대로 뒺집는다. 이때 원본 배열이 변경된다. 변환값은 변경된 배열이다.

console.log('=== Array.prototype.fill ===');
//# Array.prototype.fill
//? ES6에서 도입된 fill 메서드는 인수로 전달 받은 값을 배열의 처음부터 끝까지 요소로 채운다. 이때 원본 배열이 변경된다.

const arr25 = [1, 2, 3];

arr25.fill(0);
console.log(arr25); // [0, 0, 0]