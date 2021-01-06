function diffArray(...arrays) {
  const ArrayElementsMap = new Map();
  const missingElements = [];

  for (const arr of arrays) {
    if (!Array.isArray(arr)) {
      throw new Error(`Expected Array as argument, got ${typeof arr}`);
    }
    arr.forEach((item) => {
      if (ArrayElementsMap.has(item)) {
        ArrayElementsMap.set(item, ArrayElementsMap.get(item) + 1);
      } else {
        ArrayElementsMap.set(item, 1);
      }
    });
  }

  ArrayElementsMap.forEach((occurence, value) => {
    if (occurence <= arrays.length - 1) {
      missingElements.push(value);
    }
  });

  return missingElements;
}

console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
