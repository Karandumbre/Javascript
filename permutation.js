const permutation = (input1, input2) => {
  if (input1.length !== input2.length) {
    return "no";
  }

  let canStringsBeRearranged = "Yes";
  let charObj = {};

  for (let char of input1) {
    charObj[char] = !charObj[char] ? 1 : charObj[char] + 1;
  }

  for (let char of input2) {
    if (!charObj[char]) {
      canStringsBeRearranged = "no";
      break;
    } else {
      charObj[char] = charObj[char] - 1;
    }
  }
  return canStringsBeRearranged;
};

console.log(permutation("ksb", "bss"));
