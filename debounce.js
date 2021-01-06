function debounce(fn, timeInMs) {
  let inDebounce;
  return (...args) => {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => {
      fn(...args);
    }, timeInMs);
  };
}

let debouncedFn = debounce(() => console.log("hello"), 5000);
debouncedFn();
debouncedFn();
debouncedFn();
debouncedFn();
debouncedFn(); // Will run after ~5s and print "hello" only once
