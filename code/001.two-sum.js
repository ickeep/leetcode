/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var 001 = function (nums, target) {
  const tmpMap = {}
  let arr = []

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i]
    const difference = target - num
    const index = tmpMap[difference]
    if (typeof index !== 'undefined') {
      arr = [index, i]
      break
    } else {
      tmpMap[num] = i
    }
  }
  return arr
}

console.log(001([2, 22, 11, 15, 7], 9));
