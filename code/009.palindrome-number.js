/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  if (x < 10) {
    return true
  }
  if (x % 10 === 0) {
    return false
  }
  // const arr = (x + '').split('')
  // let is = true
  // const len = arr.length
  // for (i = 0; i < Math.ceil(len / 2); i += 1) {
  //   const start = arr[i]
  //   const end = arr[len - 1 - i]
  //   if (start !== end) {
  //     is = false
  //     break
  //   }
  // }
  // return is
  let y = 0
  while (x > y) {
    const tmp = x % 10
    x = parseInt(x / 10, 10)
    y = y * 10 + tmp
    if (parseInt(x / 10, 10) === y) {
      y = x
    }
  }
  return y === x
}

isPalindrome(12321)
isPalindrome(1221)
