// const infiniteCurry = (fn) => {
//   const next = (...args) => {
//     return (x) => {
//       if (!x) {
//         return args.reduce((acc, a) => {
//           return fn.call(fn, acc, a);
//         }, 0);
//       }
//       return next(...args, x);
//     };
//   };
//   return next();
// };

// let iSum = infiniteCurry((x, y) => x + y);
// console.log(iSum(1)(3)(4)(2)());

// const infiniteMulCurry = (fn, seed) => {
//   const reduceValue = (args, seedValue) =>
//     args.reduce((acc, a) => {
//       return fn.call(fn, acc, a);
//     }, seedValue);
//   const next = (...args) => {
//     return (...x) => {
//       if (!x.length) {
//         return reduceValue(args, seed);
//       }
//       return next(...args, reduceValue(x, seed));
//     };
//   };
//   return next();
// };

// iSum = infiniteMulCurry((x, y) => x + y, 0);
// const iMul = infiniteMulCurry((x, y) => x * y, 1);
// console.log(iSum(1)(3, 4)(5, 6)(7, 8, 9)(1, 2, 3, 4, 5, 6)()); // 43
// console.log(iMul(1)(3, 4)(5, 6)()); // 360

let sum = (a) => {
  return (...arguments) => {
    if (arguments.length === 0) {
      return a;
    }
    return sum(a + add(arguments));
  };
};

const add = (args) => {
  return args.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

console.log(sum(1)(2, 4, 5, 6, 7)(3)(4)(5)());
