const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
let chain = [];

const chainMaker = {
  getLength() {
    return chain.length - 1;
  },

  addLink(value) {
    if (value === undefined) value = "";
    chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position >= chain.length ||
      position <= 0
    ) {
      chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    chain.reverse();
    return this;
  },

  finishChain() {
    let finish = chain.join("~~");
    chain = [];
    return finish;
  },
};

module.exports = {
  chainMaker,
};
