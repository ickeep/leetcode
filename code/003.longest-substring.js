/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s === '') {
    return 0
  }
  let len = 1
  let tmpLen = 1
  let start = 0
  for (let i = 1; i < s.length; i += 1) {
    const str = s.substring(start, i)
    const item = s.substring(i, i + 1)
    const index = str.indexOf(item)
    if (index >= 0) {
      tmpLen = tmpLen - index
      start = i - tmpLen + 1
    } else {
      tmpLen += 1
      if (tmpLen > len) {
        len = tmpLen
      }
    }
  }
  return len
}

console.log(lengthOfLongestSubstring('dvdf'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
