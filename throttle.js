// ## Instructions

// Impletement throttling.

// A throttle is a common technique used in the browser to improve an application’s performance by limiting the number of events your code needs to handle. The throttle pattern limits the maximum number of times a given event handler can be called over time. It lets the handler be called periodically, at specified intervals, ignoring every call that occurs before this wait period is over. This technique is commonly used to control scrolling, resizing and mouse-related events.

// ```js
// let throttledFn = throttle((arg) => console.log(arg), 5000);
// throttledFn("Hello World");
// throttledFn("My World");
// throttledFn("Your World");
// // Will run after ~5s and only print "Hello World"
// ```

function throttle(fn, timeInMs) {
  let time = null;
  return (...args) => {
    if (time) {
      return;
    }
    time = setTimeout(() => {
      clearTimeout(time);
      return fn.apply(this, args);
    }, timeInMs);
  };
}

// jest.useFakeTimers();

// describe('Throttle', () => {
//   test('Should return a function', () => {
//     expect(typeof throttle(() => { }, 500)).toEqual('function');
//   });

//   test('Should call function only once', () => {
//     const func = jest.fn();
//     const throttledFunc = throttle(func, 1000);
//     throttledFunc();
//     throttledFunc();
//     throttledFunc();
//     throttledFunc();
//     jest.advanceTimersByTime(3000);
//     expect(func).toHaveBeenCalledTimes(1);
//   });
// });
