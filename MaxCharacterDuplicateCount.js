function duplicateLetters(str) {
  const charCountObject = {};
  let max = 0;
  for (const char of str) {
    charCountObject[char] = !charCountObject[char]
      ? 1
      : charCountObject[char] + 1;

    if (charCountObject[char] > max) {
      max = charCountObject[char];
    }
  }

  return max === 0 || max === 1 ? false : max;
}
