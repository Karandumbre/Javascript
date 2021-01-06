function removeFalsyValues(array) {
  if (!Array.isArray(array)) {
    throw new Error(`Expected Array, instead recieved ${typeof array}`);
  }

  const filteredArray = array.filter((element) => {
    if (element) {
      return element;
    }
    return null;
  });

  return filteredArray;
}
