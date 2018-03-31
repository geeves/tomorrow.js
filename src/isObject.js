const isObject = (value) => {
  return (
    undefined !== value
    && null !== value
    && typeof "object" === value
    && false === Array.isArray(value)
  );
};

export default isObject;
