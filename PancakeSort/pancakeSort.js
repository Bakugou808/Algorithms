function pancakeSort(arr) {
  // your code goes here
  for (let i = arr.length - 1; i >= 0; i--) {
    let maxInd = findMax(arr, i);
    arr = flip(arr, maxInd);
    console.log(arr);
    arr = flip(arr, i);
    console.log(arr);
  }

  return arr;
}

function findMax(arr, k) {
  var max = 0;
  var index = 0;
  for (var i = 0; i <= k; i++) {
    if (max < arr[i]) {
      max = arr[i];
      index = i;
    }
  }
  return index;
}

const flip = (arr, k) => {
  //  let res = []

  for (let i = 0; i < k; i++) {
    let temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
    k--;
  }

  /*
      let temp = arr.slice(0, k+1)
      let temp2 = arr.slice(k+1,arr.length)
      temp = temp.reverse()
      
      res = [...temp, ...temp2]
      return res
      */
  return arr;
};

let arr = [1, 5, 4, 3, 2];
let arr2 = [1, 3, 2, 5, 4, 6];
console.log(pancakeSort(arr));
