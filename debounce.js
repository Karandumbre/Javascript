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


function throttle (callback, limit) {
  var waiting = false;                      // Initially, we're not waiting
  return function () {                      // We return a throttled function
      if (!waiting) {                       // If we're not waiting
          callback.apply(this, arguments);  // Execute users function
          waiting = true;                   // Prevent future invocations
          setTimeout(function () {          // After a period of time
              waiting = false;              // And allow future invocations
          }, limit);
      }
  }
}