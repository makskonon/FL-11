function addOne(a) {
  return a + 1;
}
function pipe(a) {
  for (var i = 1; i <= arguments.length - 1; i++) {
    addEventListener = arguments[i](a);
  }
  return a;
}
addOne(5);
pipe(
  5,
  addOne,
  addOne,
  addOne
);
