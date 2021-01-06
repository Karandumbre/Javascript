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
