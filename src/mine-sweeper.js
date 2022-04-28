const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let array = new Array(matrix.length);
  for (let i = 0; i < array.length; i++) {
    array[i] = new Array(matrix[0].length);
    array[i].fill(0);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        array[i][j] = "A";

        if (i !== 0) array[i - 1][j] += 1;
        if (i !== matrix.length - 1) array[i + 1][j] += 1;
        if (j !== 0) array[i][j - 1] += 1;
        if (j !== matrix[i].length - 1) array[i][j + 1] += 1;

        if (i !== 0 && j !== 0) array[i - 1][j - 1] += 1;
        if (i !== 0 && j !== matrix[i].length - 1) array[i - 1][j + 1] += 1;
        if (i !== matrix.length - 1 && j !== 0) array[i + 1][j - 1] += 1;
        if (i !== matrix.length - 1 && j !== matrix[i].length - 1)
          array[i + 1][j + 1] += 1;
      }
    }
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (typeof array[i][j] === "string") {
        array[i][j] = 1;
      }
    }
  }

  return array;
}

module.exports = {
  minesweeper,
};
