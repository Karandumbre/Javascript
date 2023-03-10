function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let smallestInteger = 1;
  while (true) {
    const indexOf = A.indexOf(smallestInteger);
    if (indexOf === -1) {
      break;
    } else if (indexOf > -1) {
      smallestInteger = smallestInteger + 1;
    }
  }

  return smallestInteger;
}

console.log(solution([1, 3, 6, 4, 1, 2, 5, 8, 9, 7]));

var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

console.log(computeProduct(unsortedArray)); // 21000

function sortIntegers(a, b) {
  return a - b;
}

// Greatest product is either (min1 * min2 * max1 || max1 * max2 * max3)
function computeProduct(unsorted) {
  var sortedArray = unsorted.sort(sortIntegers),
    product1 = 1,
    product2 = 1,
    array_n_element = sortedArray.length - 1;

  // Get the product of three largest integers in sorted array
  for (var x = array_n_element; x > array_n_element - 3; x--) {
    product1 = product1 * sortedArray[x];
  }

  product2 = sortedArray[0] * sortedArray[1] * sortedArray[array_n_element];
  if (product1 > product2) return product1;

  return product2;
}
