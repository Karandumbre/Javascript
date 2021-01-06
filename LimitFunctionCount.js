const limitFunctionCallCount = (fn, n) => (...args) => {
  if (n === 0) {
    return null;
  }
  n--;
  return fn(...args);
};
