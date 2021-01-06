function palindrome(str) {
  var re = /[\W_]/g;
  str = str.toLowerCase().replace(re, "");
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true; // Both parts are strictly equal, it returns true => The string is a palindrome
}

function string_split(str, count = 0) {
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    let word = "";
    if (element === " ") {
      if (word === "" && palindrome(word)) {
        count = count + 1;
      }
      word = "";
    } else {
      word = word + element;
    }
  }
  return count;
}

console.log(string_split("abba baab abbc", 1));
