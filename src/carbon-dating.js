const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let number = +sampleActivity;
  if (
    typeof sampleActivity !== "string" ||
    number <= 0 ||
    sampleActivity == "Infinity" ||
    sampleActivity == 0
  )
    return false;

  let formula = Math.ceil(
    (Math.log(MODERN_ACTIVITY / number) / (0, 693 / HALF_LIFE_PERIOD)) * 1000
  );
  return formula > 0 ? formula : false;
}

module.exports = {
  dateSample,
};
