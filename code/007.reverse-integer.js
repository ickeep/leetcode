/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const Min = -Math.pow(2, 31) // -2147483648
  const Max = -Min - 1 // 2147483647
  const MinRemainders = Min % 10
  const Min01 = parseInt(Min / 10, 10)
  const MaxRemainders = Max % 10
  const Max01 = parseInt(Max / 10, 10)
  let y = 0;
  while (x !== 0) {
    const tmp = x % 10
    x = parseInt(x / 10, 10)

    if (y > Max01 || (y === Max01 && tmp > MaxRemainders)) {
      y = 0
      break
    }
    if (y < Min01 || (y === Min01 && tmp < MinRemainders)) {
      y = 0
      break
    }
    y = y * 10 + tmp
  }
  return y
}

console.log(reverse(-7463847412))
console.log(reverse(-8463847412))
console.log(reverse(-9463847412))
console.log(reverse(6463847412))
console.log(reverse(7463847412))
console.log(reverse(8463847412))
