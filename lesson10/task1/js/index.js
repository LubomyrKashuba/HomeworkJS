const arrCopy = (arr) => {
    let newArr = arr.concat();
    return newArr;
};

const arr1 = arrCopy([1,2,3,[10,20]]);
console.log(arr1);