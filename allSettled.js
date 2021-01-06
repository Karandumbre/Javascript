// # Instructions

// The `allSettled` method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

// ## Examples

// ```js
// allSettled([
//   Promise.resolve(33),
//   new Promise(resolve => setTimeout(() => resolve(66), 0)),
//   99,
//   Promise.reject(new Error('an error'))
// ])
// .then(values => console.log(values));
// // [
// //   {status: "fulfilled", value: 33},
// //   {status: "fulfilled", value: 66},
// //   {status: "fulfilled", value: 99},
// //   {status: "rejected",  reason: Error: an error}
// // ]
// ```

// ```js
// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
// const promises = [promise1, promise2];
// allSettled(promises).
//   then((results) => results.forEach((result) => console.log(result.status)));
// // expected output:
// // "fulfilled"
// // "rejected"
// ```

// # Restrictions
// - Don't use `Promise.allSettled` or `Promise.all`
// - You can use built-in `Promise` constructor.

const allSettled = (promises) => {
  const resultArray = [];
  let promiseCount = 0;
  return new Promise((resolve) => {
    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((result) => {
          resultArray[i] = result;
          promiseCount += 1;
          if (promiseCount === promises.length) {
            resolve(resultArray);
          }
        })
        .catch((error) => {
          resultArray[i] = error;
          promiseCount += 1;
          if (promiseCount === promises.length) {
            resolve(resultArray);
          }
        });
    });
  });
};

// describe('allSettled', () => {
//   test('The function should return a Promise', () => {
//     expect(allSettled() instanceof Promise).toBe(true);
//   });

//   test('Promise call should return an array of values from promises', () => {
//     const p1 = new Promise(resolve => resolve(1));
//     const p2 = 2;
//     const p3 = new Promise((resolve, reject) => {
//       try {
//         if (false) {
//           resolve('This is not possible');
//         }
//         throw Error(3);
//       } catch (error) {
//         reject(error);
//       }
//     });
//     return expect(allSettled([p1, p2, p3])).resolves.toEqual([1, 2, new Error(3)]);
//   });
// });
