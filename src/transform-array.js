const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  //throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (arr.length === 0) return [];

  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == `--discard-next`) {
      if (i + 2 >= arr.length) return array;
      if (
        arr[i + 2] !== `--discard-next` &&
        arr[i + 2] !== `--discard-prev` &&
        arr[i + 2] !== `--double-prev` &&
        arr[i + 2] !== `--double-next`
      ) {
        array[i] = arr[i + 2];
      } else if (
        arr[i + 2] == `--discard-prev` ||
        arr[i + 2] == `--double-prev`
      ) {
        i++;
      }

      i++;
    } else if (arr[i] == `--discard-prev`) {
      if (i == 0) {
        continue;
      }
      array[i - 1] = arr[++i];
    } else if (arr[i] == `--double-next`) {
      if (i + 1 == arr.length) return array;
      else if (arr[i + 1] == `--double-next`) {
        continue;
      } else if (arr[i + 1] == `--double-prev`) {
        i++;
        continue;
      } else if (arr[i + 1] == `--discard-prev`) {
        i++;
        continue;
      } else if (arr[i + 1] == `--discard-next`) {
        i = i + 2;
        continue;
      } else array[i] = arr[i + 1];
    } else if (arr[i] == `--double-prev`) {
      if (i == 0) {
        continue;
      }
      array[i] = arr[i - 1];
    } else array[i] = arr[i];
  }
  array = array.filter((e) => {
    return e !== undefined;
  });
  return array;
}

module.exports = {
  transform,
};
