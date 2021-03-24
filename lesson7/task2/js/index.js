const MyMath = {};
MyMath.a = 5;
MyMath.b = 2;

MyMath.sum = function () {
  let res = this.a + this.b;
  return console.log(`${this.a} + ${this.b} = ${res}`);
};
MyMath.sum();

MyMath.multiplication = function () {
  let res = this.a * this.b;
  return console.log(`${this.a} * ${this.b} = ${res}`);
};
MyMath.multiplication();

MyMath.division = function () {
  let res = this.a / this.b;
  return console.log(`${this.a} / ${this.b} = ${res}`);
};
MyMath.division();

MyMath.subtraction = function () {
  let res = this.a - this.b;
  return console.log(`${this.a} - ${this.b} = ${res}`);
};
MyMath.subtraction();