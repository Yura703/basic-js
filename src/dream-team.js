const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (members == [] || !Array.isArray(members)) return false;
  let arr = [];
  members.forEach((element) => {
    if (isNaN(element) && typeof element == "string")
      arr.push(element.trim()[0]);
  });

  return arr.join("").toUpperCase().split("").sort().join("");
}

module.exports = {
  createDreamTeam,
};
