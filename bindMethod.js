const bind = (fn, obj) => (...args) => fn.apply(obj, args);

const foo = function (x) {
  return x;
};
const obj = { a: 10 };
console.log(typeof bind(foo, obj)); // to be function

Function.prototype.myBind = function (context) {
  // method is attached to the prototype, so just refer to it as this.
  let func = this;
  let previousArgs = [].slice.call(arguments, 1);

  return function () {
    let currentArgs = [...arguments];
    let combinedArgs = [...previousArgs, ...currentArgs];
    return func.apply(context, combinedArgs);
  };
};

let newFoo = foo.myBind(this, obj);

console.log(newFoo(1, 2, 34, 5));
