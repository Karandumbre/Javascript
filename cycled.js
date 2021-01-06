class Cycled {
  constructor(arr) {
    this.ind = 0;
    this.arr = arr;
  }

  set index(num) {
    this.ind = (this.ind + num) % this.arr.length;
    this.ind = this.ind < 0 ? this.arr.length + this.ind : this.ind;
    return this.ind;
  }

  get index() {
    return this.ind;
  }

  current() {
    return this.arr[this.ind];
  }

  next() {
    this.ind = (this.ind + 1) % this.arr.length;
    return this.arr[this.ind];
  }

  previous() {
    this.ind = (this.ind - 1) % this.arr.length;
    this.ind = this.ind < 0 ? this.arr.length + this.ind : this.ind;
    return this.arr[this.ind];
  }

  step(num) {
    this.ind = (this.ind + num) % this.arr.length;
    this.ind = this.ind < 0 ? this.arr.length + this.ind : this.ind;
    return this.arr[this.ind];
  }

  [Symbol.iterator]() {
    return {
      ind: this.ind,
      arr: this.arr,
      next() {
        if (this.ind < this.arr.length) {
          this.ind += 1;
          return {
            done: false,
            value: this.arr[this.ind - 1],
          };
        }
        return {
          done: true,
          value: this.arr[this.ind],
        };
      },
    };
  }

  indexOf(num) {
    for (const i in this.arr) {
      if (this.arr[i] === num) {
        return parseInt(i, 10);
      }
    }

    return -1;
  }
}

export { Cycled };

//   describe('Cycled', () => {
//     const fixture = [1, 2, 3];

//     test('.current()', () => {
//       const c = new Cycled(fixture);
//       expect(c.current()).toBe(1);
//       c.next();
//       expect(c.current()).toBe(2);
//     });

//     test('.next()', () => {
//       const c = new Cycled(fixture);
//       expect([c.next(), c.next(), c.next(), c.next()]).toEqual([2, 3, 1, 2]);
//     });

//     test('.previous()', () => {
//       const c = new Cycled(fixture);
//       expect([c.previous(), c.previous(), c.previous(), c.previous()]).toEqual([3, 2, 1, 3]);
//     });

//     test('.step()', () => {
//       const c = new Cycled(fixture);
//       expect(c.step(2)).toBe(3);
//       expect(c.step(-2)).toBe(1);
//     });

//     test('.index', () => {
//       const c = new Cycled(fixture);
//       // expect(c.index).toBe(0);
//       // c.index = 2;
//       // expect(c.index).toBe(2);
//       // expect(c.current()).toBe(3);
//       c.index = -7;
//       expect(c.index).toBe(2);
//       expect(c.current()).toBe(3);
//     });

//     test('.reversed()', () => {
//       const c = new Cycled(fixture);
//       expect(c.reversed().next().value).toBe(3);
//     });

//     test('.indexOf()', () => {
//       const c = new Cycled(fixture);
//       expect(c.indexOf(3)).toBe(2);
//     });

//     test('iterable', () => {
//       const c = new Cycled(fixture);
//       expect(c[Symbol.iterator]().next().value).toBe(1);
//     });

//     test('iterations on destructuring', () => {
//       const c = new Cycled(fixture);
//       expect([...c]).toEqual(fixture);
//       expect([...c]).toEqual(fixture);
//       c.next();
//       expect([...c]).toEqual([2, 3, 1]);
//     });
//   });
