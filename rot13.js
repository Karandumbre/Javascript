const rot13 = (str, shift) => {
  let output = "";

  for (let char of str) {
    if (char.match(/[a-z]/i)) {
      const code = char.charCodeAt();
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65); // Uppercase letters
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97); // Lowercase letters
      }
    }
    output += char;
  }
  return output;
};

console.log(rot13("SERR PBQR PNZC", 13));
console.log(rot13("SERR CVMMN!", 13));
