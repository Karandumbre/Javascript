function balancedBraces(args) {
  const brackets = "(){}[]";
  const stack = [];
  for (const bracket of args) {
    const bracketsIndex = brackets.indexOf(bracket);
    if (bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex);
    }
    if (bracketsIndex % 2 === 1) {
      if (stack[stack.length - 1] === bracketsIndex - 1) {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

console.log(
  balancedBraces("for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}}"),
  balancedBraces("for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}"),
  balancedBraces("for(i=0;i<x[[i];i++){if(x[i]<10){b++;}else{b+=10;}}"),
  balancedBraces("for(i=0;i<x[i];i++){if(x[i]<10{b++;}else{b+=10;}}"),
  balancedBraces("for[(i=0;i<xi];i++){if(x[i]<10){b++;}else{b+=10;}}"),
  balancedBraces("for(i=0;i<x[i];i++)({ifx[i]<10){b++;}else{b+=10;}}")
);
// describe("Braces / Brackets / Parentheses", () => {
//   test("should tell correctly whether braces opened and closed properly", () => {
//     expect(
//       balancedBraces("for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}}")
//     ).toBe(true);
//     expect(
//       balancedBraces("for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}")
//     ).toBe(false);
//     expect(
//       balancedBraces("for(i=0;i<x[[i];i++){if(x[i]<10){b++;}else{b+=10;}}")
//     ).toBe(false);
//     expect(
//       balancedBraces("for(i=0;i<x[i];i++){if(x[i]<10{b++;}else{b+=10;}}")
//     ).toBe(false);
//     expect(
//       balancedBraces("for[(i=0;i<xi];i++){if(x[i]<10){b++;}else{b+=10;}}")
//     ).toBe(false);
//     expect(
//       balancedBraces("for(i=0;i<x[i];i++)({ifx[i]<10){b++;}else{b+=10;}}")
//     ).toBe(false);
//   });
// });
