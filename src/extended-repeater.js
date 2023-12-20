const { NotImplementedError } = require('../extensions/index.js');

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
  let addition = '';

  if (options.addition === null) addition = 'null';
  else if (options.addition === false) addition = 'false';
  else {
    addition = (options.addition && options.addition !== undefined) ? options.addition : '';
  }
  const additionRepeatTimes = (options.additionRepeatTimes) ? options.additionRepeatTimes : 0;
  const additionSeparator = (options.additionSeparator) ? options.additionSeparator : '|';

  const repeatTimes = (options.repeatTimes) ? options.repeatTimes : 1;
  const separator = (options.separator) ? options.separator : '+';
  
  let resultAddition = '';
  let result = '';
  
  for (let i = 1; i < additionRepeatTimes; i++) {
      resultAddition +=addition + additionSeparator;
  }
  resultAddition +=addition;
  
  for (let i = 1; i < repeatTimes; i++) {
      result +=str + resultAddition + separator;
  }
  result +=str + resultAddition;
  
  return result;
}

module.exports = {
  repeater
};
