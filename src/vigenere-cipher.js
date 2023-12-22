const { NotImplementedError } = require('../extensions/index.js');

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

  constructor(reverseCode = true) {
    this.reverseCode = reverseCode;
  }

  encrypt(text, key) {

    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }

    text = text.toUpperCase();
    key = key.toUpperCase();

    let countAlphabet = 26;
    let codeSymbolA = 'A'.charCodeAt(0);

    let result = [];
    let keyI = 0;

    text.split('').forEach((item, index) => {
      if (item.match(/[A-Z]/)) {
        let indexSymbol = text.charCodeAt(index) - codeSymbolA;
        let shift = key.charCodeAt(keyI % key.length) - codeSymbolA;

        result.push(String.fromCharCode(codeSymbolA + (indexSymbol + shift) % countAlphabet));
        keyI++;
      } else {
        result.push(item);
      }
    });

    return this.reverseCode ? result.join('') : result.reverse().join('');
   
  }


  decrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }

    text = text.toUpperCase();
    key = key.toUpperCase();

    let countAlphabet = 26;
    let codeSymbolA = 'A'.charCodeAt(0);

    let result = [];
    let keyI = 0;

    text.split('').forEach((item, index) => {
      if (item.match(/[A-Z]/)) {
        let indexSymbol = text.charCodeAt(index) - codeSymbolA;
        let shift = key.charCodeAt(keyI % key.length) - codeSymbolA;

        const charCode = (indexSymbol - shift + countAlphabet) % countAlphabet + codeSymbolA;
        result.push(String.fromCharCode(charCode));
        keyI++;
      }
      else result.push(item);
    });

   return this.reverseCode ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
