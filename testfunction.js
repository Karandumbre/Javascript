function PersonConstructor(name, age) {
  // this = {};
  // this.__proto__ = PersonConstructor.prototype;    // Set up logic such that: if
  // there is a return statement
  // in the function body that
  // returns anything EXCEPT an
  // object, array, or function:
  //     return 'this' (the newly
  //     constructed object)
  //     instead of that item at
  //     the return statement;    this.name = name;
  //   this.age = age; // return this;
}

console.log(PersonConstructor(null, 12));
console.log(new PersonConstructor(null, 12));
console.log(this.__proto__ === PersonConstructor.prototype);

function Demo() {
  console.log(this);
  this.value = 5;
  return 10;
} /*1*/
var demo = new Demo(); // -> {}

/*2*/
console.log(demo.__proto__ === Demo.prototype); // -> true

console.log(demo.constructor === Demo); // -> true
/*3*/
console.log(demo);
// -> { value: 5 }
function SecondDemo() {
  this.val = "2nd demo";
}
/*4*/
console.log(new SecondDemo()); // -> { val: '2nd demo' }

var salary = 1000;

(function () {
  console.log(salary);
  var salary = 5000;
  console.log(salary);
})();

function a() {
  let x = 10;

  function b() {
    return (x = x + 10);
  }

  return b;
}

let z = a();

z();

var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    var b = 3;
    console.log(b);
  }
  inner();
}
outer();

const debounce = (cb, secs) => {
  let time;
  return (args) => {
    clearTimeout(time);
    time = setTimeout(() => {
      cb(args);
    }, secs);
  };
};

function print(args) {
  console.log(args);
}

const deb = debounce(print, 4000);

deb("2");
deb("3");
deb("4");
deb("5");
deb("6");
deb("7");
deb("8");
deb("9");
deb("10");

const number = 56;
const arr = [1, 2, 3, 4, 5, 6];

const summationOfPairs = (pairs) => {
  return pairs;
};

function tracePairs(arr) {
  const pairs = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        pairs[0] = arr[i];
        pairs[1] = arr[j];
        break;
      }
    }
  }
}

// reverse all the words in a sentence

// const sentence = "Hello World";

// const reverseWords = (arg) => {
//   const reverseWords = arg
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");

//   console.log(reverseWords);
//   // for (let word = 0; words < words.length; word++) {
//   //     reverseWords = word.
//   // }
// };
// reverseWords(sentence);

// var obj = {
//   name: "Karan",
//   age: 25,
//   address: {
//     add1: "abc",
//     add2: "cbq",
//     pin: 123456,
//   },
// };

// const deepCopy = (obj) => {
//   if (typeof obj !== "object") {
//     return obj;
//   }
//   var deepCopy = {};
//   for (const iterator in obj) {
//     if (obj[iterator] === "object") {
//       deepCopy[iterator] = deepCopy(iterator);
//     } else {
//       deepCopy[iterator] = obj[iterator];
//     }
//   }

//   return deepCopy;
// };

// console.log(deepCopy(obj));

// const ladder = (lengthOfLadder) => {
//   const possibleStep = 1;
//   const possibleStep2 = 2;
//   const currentEstimatedSteps = 0;

//   while (lengthOfLadder - currentEstimatedSteps > -1) {

//   }
// };

// const calculateFibbo = (n) => {
//   if (n <= 2) {
//     return n;
//   }
//   return calculateFibbo(n - 1) + calculateFibbo(n - 2);
// };

// const fibbo = (n) => {
//   let fibbo1 = 1;
//   let fibbo2 = 1;

//   for (let i = 0; i <= n; i++) {
//     fibbo2 = fibbo2 + fibbo1;
//   }
//   return fibbo2;
// };

// console.log(fibbo(5));

// var twoSum = function (nums, target) {
//   if (!Array.isArray(nums)) {
//     return nums;
//   }

//   if (nums.length < 2) {
//     return nums;
//   }

//   const pair = [];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         pair.push(i, j);
//         break;
//       }
//     }
//     if (pair.length > 0) {
//       break;
//     }
//   }

//   return pair;
// };

// twoSum([3, 2, 4], 6);

// var addTwoNumbers = function (l1, l2) {
//   return (parseInt(l1.reverse().join("")) + parseInt(l2.reverse().join("")))
//     .toString()
//     .split("")
//     .reverse();
// };

// console.log(addTwoNumbers([1, 2, 3], [4, 5, 6]));

/**
 * Definition for singly-linked list.
 
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let num1 = [];
  let num2 = [];

  let tail1 = l1;
  while (tail1.next !== null) {
    num1.push(tail1.val);
    tail1 = tail1.next;
  }

  num1.push(tail1.val);
  num1 = parseInt(num1.reverse().join(""));

  let tail2 = l2;
  while (tail2.next !== null) {
    num2.push(tail2.val);
    tail2 = tail2.next;
  }

  num2.push(tail2.val);
  num2 = parseInt(num2.reverse().join(""));

  const result = (num1 + num2).toString().split("");

  const l3 = new ListNode(result.pop(), null);

  while (result.length > 0) {
    l3.next = new ListNode(result.pop);
  }

  console.log(l3);
};

addTwoNumbers([1, 2, 3], [4, 5, 6]);
