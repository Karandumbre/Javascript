// # Instructions

// Implement a function `allPromises`. It has the same API(input, output, behaviour) as that of `Promise.all`.

// ## Examples

// ```js
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });
// allPromises([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// // expected output: Array [3, 42, "foo"]
// ```

// # Restrictions

// - If passed an array, should return an array of values from the promises
// - DO NOT USE `Promise.all`
// - You can use built-in `Promise` constructor.

const allPromises = (promises) => {
  if (!Array.isArray(promises) || !promises.length) {
    return Promise.resolve([]);
  }

  const promiseArray = [];
  let promiseCount = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((result) => {
          promiseArray[i] = result;
          promiseCount += 1;
          if (promiseCount === promises.length) {
            resolve(promiseArray);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

// describe('allPromises', () => {
//   test('The function should return a Promise', () => {
//     expect(allPromises() instanceof Promise).toBe(true);
//   });

//   test('Promise call should return an array of values from promises', () => {
//     const p1 = new Promise(res => res(1));
//     const p2 = 2;
//     // const p2 = Promise.resolve(2)
//     const p3 = Promise.resolve(3);
//     return expect(allPromises([p1, p2, p3])).resolves.toEqual([1, 2, 3]);
//   });
// });
