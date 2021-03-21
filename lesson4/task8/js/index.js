let i = -166;
while (i < 100) {
  i = 2 * i + 200;
  if (i < -100) {
    continue;
  } else if (i > 100) {
    continue;
  }
  console.log(i);
}
