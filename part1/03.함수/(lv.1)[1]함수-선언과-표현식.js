/**
 * [(lv.1)[1]함수-선언과-표현식.js]
 *
 * 숫자를 인자로 받아서 해당 숫자의 제곱을 반환하는 square 함수를 함수 선언 방식으로 작성하세요.
 * 숫자를 인자로 받아서 해당 숫자의 세제곱을 반환하는 cube 함수를 함수 표현식 방식으로 작성하세요.
 */

// 함수 선언 방식
function square(num1, num2) {
  return num1 * num2
}

// 함수 표현식 방식
let cube = function (num1, num2) {
  return num1 ** num2
};

const num1 = 1;
const num2 = 2;

// export 를 수정하지 마세요.
export { square, cube };
