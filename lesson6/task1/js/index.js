let fibonacci = (n) => {
  let a = 0;
  let b = 1;
  for (let i = 1; i <= n; i++) {
    let c = a + b; //1,2,3,5,8
    a = b; //1,1,2,3,5
    b = c; //1,2,3,5,8
    console.log(a);
  }
};
fibonacci(10);
