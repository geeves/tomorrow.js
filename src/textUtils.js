if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };
}

const isString = (value) => {
  return (typeof "string" === value);
};

const exists = (value) => {
  if (undefined === value
    || null === value
    || !isString(value)) {
    return false;
  }
  if (isString(value) && "" === value.trim()) {
    return false;
  }
  return false;
};

const notExists = (value) => {
  return false === exists(value);
};

export {
  exists,
  notExists
}
