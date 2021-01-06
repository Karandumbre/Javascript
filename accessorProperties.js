function accessorProperties() {
  return {
    binary: 0,
    set number(num) {
      this.binary = (num >>> 0).toString(2);
    },
    get number() {
      return this.binary;
    },
  };
}

let obj = accessorProperties();
obj.number = 10;
console.log(obj.number);
