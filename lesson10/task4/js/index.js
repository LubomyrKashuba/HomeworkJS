const removeDuplicates = (arr) => {
  let newArr = [];
  arr.forEach((item) => {
    item = item.toLowerCase();
    let element = newArr.find((subItem) => {
      return subItem === item;
    });
    if (!element) {
      newArr.push(item);
    }
  });
  return newArr;
};

const arr1 = removeDuplicates([
  "HTML",
  "css",
  "js",
  "html",
  "JS",
  "python",
  "jS",
  "scss",
]);
console.log(arr1);
