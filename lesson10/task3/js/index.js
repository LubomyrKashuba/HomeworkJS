const getLength = (arr) => {
  let newArr = arr.map((item) => {
    item = item.length;
    return item;
  });
  return newArr;
};

const arr1 = getLength(["Ivan", "Pavlo", "Ira"]);
console.log(arr1);
