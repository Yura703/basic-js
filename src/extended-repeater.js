const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options = options ?? {
    repeatTimes: 0,
    separator: "",
    addition: "",
    additionRepeatTimes: 0,
    additionSeparator: "",
  };
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;
  separator = separator ?? "+";
  additionSeparator = additionSeparator ?? "|";
  additionRepeatTimes = additionRepeatTimes ?? 1;
  repeatTimes = repeatTimes ?? 1;
  if (addition === null) addition = "null";
  addition = addition ?? "";

  str = str + "";
  let _str = str + addition;

  if (additionRepeatTimes > 1) {
    for (let j = 0; j < additionRepeatTimes; j++) {
      if (j !== additionRepeatTimes - 1) {
        _str += additionSeparator + addition;
      }
    }
  }

  let __str = _str;
  for (let i = 0; i < repeatTimes - 1; i++) {
    __str += separator + _str;
  }
  return __str;
}

module.exports = {
  repeater,
};
