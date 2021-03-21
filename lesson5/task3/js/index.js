function maxArgument() {
  let max = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (max < arguments[i]) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(maxArgument(10, 21, -130, 600, 80, 90, 601));
