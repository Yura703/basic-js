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
  #typeMachine;
  #alfavit = [];
  constructor(typeMachine = "") {
    this.typeMachine = typeMachine;
    this.alfavit = [
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
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let array = [];
    let keyCode = this.keyToNumbers(key.toLowerCase(), message.length);
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      let aaa = message.toLowerCase()[i];
      let bbb = this.alfavit.indexOf(aaa);
      if (bbb === -1) {
        array.push(aaa);
      } else {
        let vvv = this.alfabetUp(this.alfavit.indexOf(aaa), keyCode[j++]);
        array.push(vvv);
      }
    }

    if (this.typeMachine || this.typeMachine === "") {
      return array.join("").toUpperCase();
    } else return array.reverse().join("").toUpperCase();
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    let array = [];
    let keyCode = this.keyToNumbers(key.toLowerCase(), encryptedMessage.length);
    let j = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      let aaa = encryptedMessage.toLowerCase()[i];
      let bbb = this.alfavit.indexOf(aaa);
      if (bbb === -1) {
        array.push(aaa);
      } else {
        let vvv = this.alfabetDown(this.alfavit.indexOf(aaa), keyCode[j++]);
        array.push(vvv);
      }
    }
    if (this.typeMachine || this.typeMachine === "") {
      return array.join("").toUpperCase();
    } else return array.reverse().join("").toUpperCase();
  }

  keyToNumbers(key, lenghtText) {
    let array = [];
    let j = 0;
    for (let i = 0; i < lenghtText; i++) {
      let ind = this.alfavit.indexOf(key[j]);
      array.push(ind);
      j++;
      if (j === key.length) {
        j = 0;
      }
    }
    return array;
  }

  alfabetUp(mess, key) {
    let rr = mess + key > 25 ? mess + key - 26 : mess + key;
    return this.alfavit[rr];
    // let fff = (mess + key) % this.alfavit.length;
    // return this.alfavit[fff];
  }

  alfabetDown(mess, key) {
    let rr = mess - key < 0 ? mess - key + 26 : mess - key;
    return this.alfavit[rr];
  }
}

module.exports = {
  VigenereCipheringMachine,
};
