const sumEvenArgs = (...args) => {
  if (args.length === 0) {
    return 0;
  }

  let sum = 0;
  args.forEach((ele) => {
    if (typeof ele === "number" && ele % 2 === 0) {
      sum += ele;
    }
  });

  return sum;
};

sumEvenArgs(10, 12, 3, 4, 5);
