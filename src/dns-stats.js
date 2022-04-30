const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  let _array = [];
  for (let i = 0; i < domains.length; i++) {
    let array = [];
    i;
    console.log(domains[i].length - 1);
    let str = "";
    let index = domains[i].length;
    for (let j = domains[i].length - 1; j > 0; j--) {
      if (domains[i][j] === ".") {
        let s = domains[i].slice(j, index);
        index = j;
        str = str + s;
        array.push(str);
        array;
      }
    }
    let s = domains[i].slice(0, index);
    str = str + "." + s;
    array.push(str);
    array;
    array.forEach((el) => {
      if (!obj.hasOwnProperty(el)) {
        obj[el] = 1;
      } else {
        obj[el] = obj[el] + 1;
      }
    });
  }
  return obj;
}
module.exports = {
  getDNSStats,
};
