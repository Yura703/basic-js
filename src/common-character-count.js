const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let num = 0;
  let list = [];
  for (let i = 0; i < s1.length; i++) {
    if (s2.indexOf(s1[i]) >= 0 && list.indexOf(s1[i]) < 0) {
      list.push(s1[i]);
      let n1 = s2.match(new RegExp(s1[i], "g")).length;
      let n2 = s1.match(new RegExp(s1[i], "g")).length;
      n1 > n2 ? (num += n2) : (num += n1);
    }
  }
  return num;
}

module.exports = {
  getCommonCharacterCount,
};
