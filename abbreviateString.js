function abbreviateString(str) {
  if (typeof str !== "string") {
    throw new Error("Not a string");
  }
  const strArray = str.split(" ");
  return `${strArray[0]} ${strArray[strArray.length - 1][0].toUpperCase()}.`;
}

// describe("abbreviateString", () => {
//   it("abbreviates the following strings", () => {
//     expect(abbreviateString("Hacktober Fest")).toEqual("Hacktober F.");
//     expect(abbreviateString("Leeroy Fitzgerald Jenkins")).toEqual("Leeroy J.");
//     expect(abbreviateString("Some arbitrary string length here.")).toEqual(
//       "Some H."
//     );
//   });

//   it("throws error on invalid parameters", () => {
//     expect(() => abbreviateString(123)).toThrow();
//     expect(() => abbreviateString([])).toThrow();
//     expect(() => abbreviateString({})).toThrow();
//     expect(() => abbreviateString(null)).toThrow();
//   });
// });

console.log(abbreviateString("Hacktober Fest"));
console.log(abbreviateString("October Fest"));
