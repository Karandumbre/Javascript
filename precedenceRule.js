function findWord(a) {
  let len = a.length;

  let firstLetter = [],
    secondLetter = [],
    currentIndex = 0,
    count = {};

  //count the number of repetitions for each letter
  while (currentIndex < len) {
    const firstChar = a[currentIndex].charAt(0);
    const secondChar = a[currentIndex].charAt(2);

    firstLetter.push(firstChar);
    secondLetter.push(secondChar);
    recordLetter(count, firstChar, secondChar);
    currentIndex++;
  }

  //The first letter should be in firstLetter array and has count of 1.

  let first;
  for (let c in count) {
    if (count[c] === 1 && firstLetter.indexOf(c) >= 0) {
      first = c;
    }
  }

  let result = first;
  currentIndex = firstLetter.indexOf(first);

  let times = 0;
  while (times < len) {
    result = result + secondLetter[currentIndex];
    currentIndex = firstLetter.indexOf(secondLetter[currentIndex]);
    times++;
  }

  return result;
}

function recordLetter(count, letter1, letter2) {
  count[letter1] = count[letter1] ? count[letter1] + 1 : 1;
  count[letter2] = count[letter2] ? count[letter2] + 1 : 1;
  return count;
}

findWord(["P>E", "E>R", "R>U"]); // PERU
findWord(["I>N", "A>I", "P>A", "S>P"]); // SPAIN
findWord(["U>N", "G>A", "R>Y", "H>U", "N>G", "A>R"]); // HUNGARY
findWord(["I>F", "W>I", "S>W", "F>T"]); // SWIFT
findWord(["R>T", "A>L", "P>O", "O>R", "G>A", "T>U", "U>G"]); // PORTUGAL
findWord(["U>N", "G>A", "R>Y", "H>U", "N>G", "A>R"]); // HUNGARY
findWord(["I>F", "W>I", "S>W", "F>T"]); // SWIFT
findWord(["R>T", "A>L", "P>O", "O>R", "G>A", "T>U", "U>G"]); // PORTUGAL
findWord([
  "W>I",
  "R>L",
  "T>Z",
  "Z>E",
  "S>W",
  "E>R",
  "L>A",
  "A>N",
  "N>D",
  "I>T",
]); // SWITZERLAND
