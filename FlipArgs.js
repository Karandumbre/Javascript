function flipArgs(fn) {
  return (...args) => fn(args.reverse());
}

export default flipArgs;
