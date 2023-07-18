const strictEquals = (valueA, valueB) => {
  if (Number.isNaN(valueA) && Number.isNaN(valueB)) {
    return false;
  }

  if (Object.is(valueA, 0) && Object.is(-0, valueB)) {
    return true;
  }

  if (Object.is(valueA, -0) && Object.is(0, valueB)) {
    return true;
  }

  return Object.is(valueA, valueB);
};

console.log(strictEquals(1, 1));
console.log(strictEquals(NaN, NaN));
console.log(strictEquals(0, -0));
console.log(strictEquals(-0, 0));
console.log(strictEquals(1, "1"));
console.log(strictEquals(true, false));
console.log(strictEquals(false, false));
console.log(strictEquals("water", "oil"));
