// //karan
// //js - 7
// //react - 7

// function Person(firstName) {
//   this.firstName = firstName;
//   this.printName1 = function () {
//   	console.log(this.firstName);
//   };
//   this.printName2 = () => {
//   	console.log(this.firstName);
//   };
// };

// const bill = new Person('Bill');
// const steve = new Person('Steve');

// bill.printName1(); // Bill
// bill.printName2(); // Bill

// bill.printName1.bind(steve)(); // Steve
// bill.printName2.bind(steve)(); // Bill

// var sayName = bill.printName1;
// sayName(); // undefined

////////////////////////////////////////////////////

var input1 = {
  a: "a1",
  b: "b2",
  c: {
    c1: "c1",
    c2: "c2",
  },
  d: "d1",
};

var input2 = {
  a: "a1",
  c: {
    c1: "c1",
    c2: "c2",
    c3: "c3",
  },
  d: "d2",
};

var output = {
  b: "b2",
  c: {
    c3: "c3",
  },
  d: "d1",
};

const checkDuplicates = (input1, input2) => {
  var UniqueObj = {};
  for (let key in input1) {
    if (!input2[key] && typeof input2[key] !== "object") {
      UniqueObj[key] = input1[key];
    }

    if (typeof input2[key] === "object") {
      UniqueObj[key] = checkDuplicates(input1[key], input2[key]);
    }

    if (input2[key] !== input1[key]) {
      UniqueObj[key] = input1[key];
    }
  }

  for (let key in input2) {
    if (!input1[key] && typeof input1[key] !== "object") {
      UniqueObj[key] = input1[key];
    }

    if (typeof input1[key] === "object") {
      UniqueObj[key] = checkDuplicates(input2[key], input1[key]);
    }
  }
  return UniqueObj;
};

console.log(checkDuplicates(input1, input2));
