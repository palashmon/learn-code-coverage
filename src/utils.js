function deepFreeze(o) {
  Object.freeze(o);

  Object.getOwnPropertyNames(o).forEach(prop => {
    if (
      Object.prototype.hasOwnProperty.call(prop, o) &&
      o[prop] !== null &&
      (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
      !Object.isFrozen(o[prop])
    ) {
      deepFreeze(o[prop]);
    }
  });

  return o;
}

function clone(obj) {
  let copy;

  // Handle the 3 simple types, and null or undefined
  if (obj == null || typeof obj !== 'object') return obj;

  // Handle Date
  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // Handle Array
  if (obj instanceof Array) {
    copy = [];
    for (let i = 0, len = obj.length; i < len; i += 1) {
      copy[i] = clone(obj[i]);
    }
    return copy;
  }

  // Handle Object
  if (obj instanceof Object) {
    copy = Object.assign({}, obj);
    return copy;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");
}

export { deepFreeze, clone };
