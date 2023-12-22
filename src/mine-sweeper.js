const { NotImplementedError } = require('../extensions/index.js');

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

  const result = [];
 
 for (let i=0; i< matrix.length; i++) {
      result.push([]);
 
     for (let j=0; j< matrix[0].length; j++) {
     let currentCount = 0;
   
       for (let m = i - 1; m <= i + 1; m++) {
         for (let k = j - 1; k <= j + 1; k++) {
           if (m < matrix.length && k < matrix[i].length && m >= 0 && k >= 0) {
             (matrix[m][k])? currentCount++ :currentCount;
           }
         }
       }
 
       result[i][j] = (matrix[i][j]) ? currentCount-1 : currentCount;
     }
 }
 return result;
 
 }

module.exports = {
  minesweeper
};
