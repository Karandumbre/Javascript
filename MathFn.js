const sqrt = (num) => num ** 0.5;

const power = (num, pow) => num ** pow;

const round = (num) => {
  const isNegative = num < 0;
  if (isNegative) {
    num *= -1;
  }
  const value = parseInt(num + 0.5, 10);
  return isNegative ? value * -1 : value;
};

console.log(round(-2.5));
