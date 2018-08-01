var amountOf = function(letter, list) {
  var count = 0;
  for (var i = 0; i < list.length; i++) {
    if (list[i] === letter) {
      count++;
    }
  }
  return count;
};

var countLetters = function(str) {
  noSpaces = str.split(' ').join('');
  var result = {};
  for (var i = 0; i < noSpaces.length; i++) {
    var character = noSpaces[i];
    if (!Object.keys(result).includes(noSpaces[i])) {
      result[(noSpaces[i])] = amountOf(character, noSpaces);
     }
  }
  return result;
};

console.log(countLetters('Lighthouse in the house'));