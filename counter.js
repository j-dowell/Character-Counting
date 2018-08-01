var amountOf = function(letter, list) {
  var count = 0;
  for (var i = 0; i < list.length; i++) {
    if (list[i] === letter) {
      count++;
    }
  }
  return count;
};

var stringChecker = function(str) {
  if (typeof str !== 'string') {
    return false;
  } else {
    return true;
  }
};

var countLetters = function(str) {
    if (!stringChecker(str)) {
      return 'Enter a string';
  } else {
    var noSpaces = str.split(' ').join(''); // add .toLowerCase() if it should not register the letter case
    var result = {};
    for (var i = 0; i < noSpaces.length; i++) {
      var character = noSpaces[i];
      if (!Object.keys(result).includes(character)) {
        result[character] = amountOf(character, noSpaces);
       }
    }
    return result;
  }
};


console.log(countLetters('lighthouse in the house'));
