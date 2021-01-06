// your implementation

const map = (obj) => {
  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    newObj[key.toUpperCase()] = value * 10;
  }

  return newObj;
};

const filter = (obj, filterKey) => {
  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key === filterKey) {
      newObj[key] = value;
    }
  }

  return newObj;
};

const invert = (obj) => {
  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    newObj[value] = key;
  }

  return newObj;
};

const merge = (...objects) => {
  const newObj = {};
  for (const obj of objects) {
    for (const [key, value] of Object.entries(obj)) {
      newObj[key] = value;
    }
  }

  return newObj;
};

// const fn = (key, value) => value > 10;

const all = (obj, fn) => {
  let isValid = true;
  for (const [key, value] of Object.entries(obj)) {
    if (!fn(key, value)) {
      isValid = false;
      break;
    }
  }

  return isValid;
};

const some = (obj, fn) => {
  let isValid = false;
  for (const [key, value] of Object.entries(obj)) {
    if (fn(key, value)) {
      isValid = true;
      break;
    }
  }

  return isValid;
};
