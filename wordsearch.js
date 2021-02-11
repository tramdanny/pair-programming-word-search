// Pairprogramming with Angel

const wordSearch = (letters, word) => {
    if (word.length === 1) return false;
    if (word === "") return false;
    const wordUpperCase = word.toUpperCase();
    const horizontalJoin = letters.map((ls) => ls.join(""));
    for (l of horizontalJoin) {
      if (l.includes(wordUpperCase)) return true;
    }
    const verticalJoin = transpose(letters).map((ls) => ls.join(""));
    for (l of verticalJoin) {
      if (l.includes(wordUpperCase)) return true;
    }
    return false;
  };
  
  const transpose = function (matrix) {
    const finalArr = [];
  
    for (let j = 0; j < matrix[0].length; j++) {
      let val = [];
      for (let a = 0; a < matrix.length; a++) {
        val.push(matrix[a][j]);
      }
      finalArr.push(val);
    }
    return finalArr;
  };
  
  
  wordSearch(
    [
      ["A", "W", "C", "F", "Q", "U", "A", "L"],
      ["S", "E", "I", "N", "F", "E", "L", "D"],
      ["Y", "F", "C", "F", "Q", "U", "A", "L"],
      ["H", "M", "J", "T", "E", "V", "R", "G"],
      ["W", "H", "C", "S", "Y", "E", "R", "L"],
      ["B", "F", "R", "E", "N", "E", "Y", "B"],
      ["U", "B", "T", "W", "A", "P", "A", "I"],
      ["O", "D", "C", "A", "K", "U", "A", "S"],
      ["E", "Z", "K", "F", "Q", "U", "A", "L"],
    ],
    "ALAR"
  );
  
  module.exports = wordSearch;