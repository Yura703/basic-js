const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === "") return "";
  let code = "";
  let num = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      num++;
    } else {
      let _num = num !== 1 ? num + "" : "";
      code += _num + str[i];
      num = 1;
    }
  }
  return code;
}

module.exports = {
  encodeLine,
};
