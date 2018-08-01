var indexOf = function(letter, list) {
  var places = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i] === letter) {
      places.push(i);
    }
  }
  return places;
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
    var noSpaces = str.split(' ').join('').toLowerCase();
    var result = {};
    for (var i = 0; i < noSpaces.length; i++) {
      var character = noSpaces[i];
      if (!Object.keys(result).includes(character)) {
        result[character] = indexOf(character, str);
       }
    }
    return result;
  }
};

console.log(countLetters("lighthouse in the house"));