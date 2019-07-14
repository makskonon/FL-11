function getMin() {
  let minArray = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (minArray > arguments[i]) {
      minArr = arguments[i];
    }
  }
  return minArray;
}
console.log(getMin(10, 5, 1));
