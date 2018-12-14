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
  const arr = (x + '').split('')
  let is = true
  const len = arr.length
  for (i = 0; i < Math.ceil(len / 2); i += 1) {
    const start = arr[i]
    const end = arr[len - 1 - i]
    if (start !== end) {
      is = false
      break
    }
  }
  return is
}

isPalindrome(1211)
isPalindrome(121)
