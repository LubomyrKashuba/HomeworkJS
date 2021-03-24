const arrToString = (arr) => {
  let newArr = arr.map((item) => {
    item = item.toString();
    return item;
  });
  return newArr;
};
const arr1 = arrToString([10, 200, 3333]);
console.log(arr1);
