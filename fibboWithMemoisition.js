// program to display fibonacci sequence using recursion
function fibonacci(num) {
  if (num < 2) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// take nth term input from the user
function sumFibs(n) {
  const FibboSeries = [];
  for (let i = 0; i <= n; i++) {
    FibboSeries.push(fibonacci(i));
  }
  return FibboSeries;
}

console.log(sumFibs(3));

function cacheFunction() {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("in cached");
      return cache.get(key);
    }

    const result = sumFibs(...args);
    cache.set(key, result);
    console.log("outside cached");
    return result;
  };
}

let c = cacheFunction();
console.log(c(2));
console.log(c(2));
console.log(c(2));
console.log(c(2));
console.log(c(2));
