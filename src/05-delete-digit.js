/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n
    .toString()
    .split('')
    .map((el) => Number(el));
  const min = Math.min(...arr);
  return arr.splice(arr.indexOf(min), 1) ? Number(arr.join('')) : 0;
}

module.exports = deleteDigit;
