const deepCopyObject = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  const clone = {};
  for (const i in obj) {
    if (obj[i] !== null && typeof obj[i] === "object") {
      clone[i] = deepCopyObject(obj[i]);
    } else {
      clone[i] = obj[i];
    }
  }
  return clone;
};

// Alternate
// const deepCopyObject = objToCopy => JSON.parse(JSON.stringify(objToCopy));

// describe("deepCopyObject", () => {
//   it("returns a deep copy of given object", () => {
//     const myObj = {
//       subObj: {
//         key: "value",
//       },
//     };

//     const yourObj = deepCopyObject(myObj);
//     yourObj.subObj.key = "new value";

//     expect(yourObj.subObj.key).toEqual("new value");
//     expect(myObj.subObj.key).toEqual("value");
//   });

//   it("returns copy of other data types", () => {
//     expect(deepCopyObject(4)).toEqual(4);
//     expect(deepCopyObject("string!")).toEqual("string!");
//     expect(deepCopyObject(true)).toBe(true);
//     expect(deepCopyObject(null)).toBeNull();
//   });
// });
