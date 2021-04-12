/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const copyErr = arr.slice();
  const arr1 = [];
  const x = copyErr.filter((el, index) => (el > 0 ? arr1.push(index) : 0)).sort((a, b) => a - b);
  for (let i = 0; i < x.length; i++) {
    copyErr.splice(arr1[i], 1, x[i]);
  }
  // console.log(x)
  return copyErr;
}

module.exports = sortByHeight;
