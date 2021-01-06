function dropElements(elements, predicate) {
  return elements.filter((ele) => predicate(ele));
}

console.log(dropElements([1, 2, 3, 4], (n) => n >= 3));
