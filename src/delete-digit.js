const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number}n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = [];
  let arrN = n.toString().split('');

  for (let item in arrN) { 
    let a = [...arrN];
    a.splice(item, 1);
    array.push(a.join(''));
  }
  return Math.max(...array);
}

module.exports = {
  deleteDigit
};
