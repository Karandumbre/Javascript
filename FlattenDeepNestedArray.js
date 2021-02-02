var a = [1, [1, 2, [1, 2, 3, 4, [1, 2, 3, 4, 5, 6]]]];

var flattenArray = (data) => {
  return data.reduce(function iter(r, a) {
    if (a === null) {
      return r;
    }
    if (Array.isArray(a)) {
      return a.reduce(iter, r);
    }
    if (typeof a === "object") {
      return Object.keys(a)
        .map((k) => a[k])
        .reduce(iter, r);
    }
    return r.concat(a);
  }, []);
};

console.log(flattenArray(a));

// const arr = [1, 3, [7, 6, 8, 9, [4, 5, 6], 2]];

// const flattenedArray = [];

// const flattenArray = (arr) => {
//   arr.forEach((element) => {
//     if (Array.isArray(element)) {
//       flattenArray(element);
//     } else {
//       flattenedArray.push(element);
//     }
//   });
//   return flattenedArray;
// };

// console.log(flattenArray(arr));
