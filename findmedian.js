// class MyComponent extends React.Component {
//   constructor(props) {
//     // set the default internal state
//     this.state = {
//       clicks: 0,
//     };
//   }

//   componentDidMount() {
//     this.refs.myComponentDiv.addEventListener("click", this.clickHandler);
//   }

//   componentWillUnmount() {
//     this.refs.myComponentDiv.removeEventListener("click", this.clickHandler);
//   }

//   clickHandler() {
//     this.setState({
//       clicks: this.clicks + 1,
//     });
//   }

//   render() {
//     let children = this.props.children;

//     return (
//       <div className="my-component" ref="myComponentDiv">
//         <h2>My Component ({this.state.clicks} clicks)</h2>
//         <h3>{this.props.headerText}</h3>
//         {children}
//       </div>
//     );
//   }
// }

// const CharFromCode = (ascii) => {
//   return [
//     String.fromCharCode(ascii) +
//       String.fromCharCode(ascii + 1) +
//       String.fromCharCode(ascii + 2),
//   ];
// };

// const combinations = (char, currLetter, nextLetter) => {
//   if (nextLetter) {
//     return (
//       currLetter[char] +
//       "" +
//       nextLetter[char] +
//       "," +
//       currLetter[char] +
//       "" +
//       nextLetter[char + 1] +
//       "," +
//       currLetter[char] +
//       "" +
//       nextLetter[char + 2]
//     );
//   }
//   return;
// };

// var letterCombinations = function (digits) {
//   const letters = [];
//   const startingAsciiNumber = 97;
//   const possibleCombinations = [];

//   for (let digit in digits) {
//     switch (parseInt(digits[digit])) {
//       case 2:
//         letters.push(...CharFromCode(97));
//         break;
//       case 3:
//         letters.push(...CharFromCode(97 + 3));
//         break;
//       case 4:
//         letters.push(...CharFromCode(97 + 6));
//         break;
//       case 5:
//         letters.push(...CharFromCode(97 + 9));
//         break;
//       case 6:
//         letters.push(...CharFromCode(97 + 12));
//         break;
//       case 7:
//         letters.push(...CharFromCode(97 + 15));
//         break;
//       case 8:
//         letters.push(...CharFromCode(97 + 18));
//         break;
//       case 9:
//         letters.push(...CharFromCode(97 + 21));
//         break;
//     }
//   }

//   console.log(letters);

//   for (let letter in letters) {
//     for (let charIndex in letters[letter]) {
//       possibleCombinations.push(
//         combinations(charIndex, letters[letter], letters[parseInt(letter) + 1])
//       );
//     }
//   }
// };

// letterCombinations("25");

// const beautifulFunction = (x) => {
//   const arr = [];

//   let zero = "";
//   const lengthOfX = x.toString().length;
//   for (let index = 0; index < lengthOfX; index++) {
//     zero = zero + "0";
//   }

//   const roundingToNearestTen = parseInt(1 + zero);

//   while (x < roundingToNearestTen) {
//     arr.push(x);
//     x = x + 1;
//   }

//   console.log(arr.length);
// };

// beautifulFunction(10);

// const minimumPulses = (input) => {
//   let x = parseInt(input.split("=")[0]);
//   const y = parseInt(input.split("=")[1]);

//   let itrations = 0;

//   while (x !== y) {
//     const stringX = x.toString();
//     const stringY = y.toString();

//     if (stringX.length === stringY.length) {
//       break;
//     }

//     itrations = itrations + 1;
//     const lastElement = parseInt(stringX[stringX.length - 1]);

//     x = parseInt(stringX.substring(0, stringX.length - 1)) + lastElement;
//   }

//   console.log(itrations);
// };

// minimumPulses("23=5");

// function abc() {
//   for (var i = 0; i < 10; i++) {}

//   console.log({ i });
// }

// console.log(abc());

var findMedianSortedArrays = function (nums1, nums2) {
  let pointer1 = 0;
  let pointer2 = 0;
  const mergedArray = [];
  let median = 0;

  while (pointer1 < nums1.length && pointer2 < nums2.length) {
    if (nums1[pointer1] <= nums2[pointer2]) {
      mergedArray.push(nums1[pointer1]);
      pointer1++;
    } else {
      mergedArray.push(nums2[pointer2]);
      pointer2++;
    }
  }

  if (nums1.length > 0) {
    for (let i = pointer1; i < nums1.length; i++) {
      mergedArray.push(nums1[i]);
    }
  }

  if (nums2.length > 0) {
    for (let j = pointer2; j < nums2.length; j++) {
      mergedArray.push(nums2[j]);
    }
  }

  if (mergedArray.length === 1) {
    return mergedArray[0];
  }

  if (mergedArray.length % 2 === 0) {
    median =
      (mergedArray[Math.round(mergedArray.length / 2)] +
        mergedArray[Math.round(mergedArray.length / 2) - 1]) /
      2;
  } else {
    median = mergedArray[Math.floor(mergedArray.length / 2)];
  }
  console.log(median);
};

findMedianSortedArrays([1, 3], [2]);
findMedianSortedArrays([], [2, 4, 7]);
findMedianSortedArrays([], [1, 2, 3, 4, 5]);
