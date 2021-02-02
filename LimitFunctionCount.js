const limitFunctionCallCount = (fn, n) => (...args) => {
  if (n === 0) {
    return null;
  }
  n--;
  return fn(...args);
};

function count(n) {
  console.log("Executed " + n + " Times");
}
var limit = limitFunctionCallCount(count, 2);

limit(1);
limit(2);
limit(3);
limit(4);
