const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  #alfavit = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  #typeMachine;
  constructor(typeMachine) {
    this.typeMachine = typeMachine;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    array = [];
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    keyCode = keyToNumbers(key, message.length);
    for (let i = 0; i < message.length; i++) {
      let aaa = message.toLowerCase()[i];
      let bbb = alfavit.indexOf(aaa);
      if (bbb === -1) {
        array.push(aaa);
      } else {
        array.push(alfavit[alfabetUp(keyCode[i], alfavit.indexOf(aaa))]);
      }
    }
  }

  decrypt(encryptedMessage, key) {
    if (!message || !kay) {
      throw new Error("Incorrect arguments!");
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  #keyToNumbers(key, lenghtText) {
    let array = [];
    let j = 0;
    for (let i = 0; i < lenghtText; i++) {
      let ind = alfavit.indexOf(key[j]);
      array.push(ind);
      j++;
      if (j === key.length) {
        j = 0;
      }
    }
    return array;
  }

  #alfabetUp(key, mess) {
    let fff = (mess + key) % alfavit.length;
    return alfavit[fff];
  }
}

module.exports = {
  VigenereCipheringMachine,
};
