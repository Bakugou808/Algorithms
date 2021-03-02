/*Toeplitz Matrix
A Toeplitz matrix is a matrix where every left-to-right-descending diagonal has the same element. Given a non-empty matrix arr, write a function that returns true if and only if it is a Toeplitz matrix. The matrix can be any dimensions, not necessarily square.

For example,

[[1,2,3,4], 
 [5,1,2,3],
 [6,5,1,2]]
is a Toeplitz matrix, so we should return true, while

[[1,2,3,4],
 [5,1,9,3],
 [6,5,1,2]]
isn’t a Toeplitz matrix, so we should return false.

Constraints:

[time limit] 5000ms
[input] array.array.integer arr
0 ≤ arr.length ≤ 20
0 ≤ arr[i].length ≤ 20
0 ≤ arr[i][j] ≤ 20
[output] boolean */

let arr1 = [
  [1, 2, 3, 4], //need to know the num of rows /length of arr = R, need to know the num or columns / length of sub arr = C
  [5, 1, 2, 3], //if we walk down the rows ---> indices --> (0,0), (1,1), (2,2) || (0,1), (1,2), (2, 3) || (0,2), (1,3) || (0,3)
  [6, 5, 1, 2],
];

//if R = 3, and C = 4 ---> the general indices in the diag will be enumerated by arr[r+k][c+k]
// we increment by 1 but how many times?
// thus k is both the number we increment by, but also represents the num of time we increment the index for both the row and column.
/* How big is k? Say there are R rows and C columns. Then because (r+k, c+k) must be in bounds,
    0 <= r+k < R and 0 <= c+k < C, so k < min(R-r, C-c) after some algebra.
    0 <= k < R-r  and  0 <= k < C-c --->  so k must be less than the min value between R-r and C-c 

    solution:

    Walking down the rows:

    store the length of rows = R --> arr.length
    iterate through the array --> as you hit a num in the first row --> calculate the k for the num --> 
    Than for k times, check to see if the values at arr[r+k][c+k] == the initial num.
    

    */
// using algebra to figure out how to Walk Down the matrix --> checks each num in the first row, as well as each num within the first col ---> combined it combs through all possible diagonals
/*
function isToeplitz(arr) {
  let R = arr.length;
  let C = arr[0].length;
  let valid = true;

  //   checks the first row...
  for (let c = 0; c < C - 1; c++) {
    //isolate each num in first row
    let num = arr[0][c];
    //go to each row, check the value at index c + 1 (aka k) --> if it doesn't equal return false
    //this only checks for the values within the first array --> what about the other values in the other sub arrays?
    for (let k = 0; k <= Math.min(R, C - c) - 1; k++) {
      if (arr[k][c + k] != num) return false;
    }
  }
  // checks the first column...
  for (let r = 0; r < R - 1; r++) {
    //isolate the first num in each column
    let num = arr[r][0];
    //r=1, num = 5
    //but why only min(R -r, C) ? and not min(R-r, C-c)?
    for (let k = 0; k <= Math.min(R - r, C) - 1; k++) {
      //arr[1+0][0] = 5 ---> R-r = 3-1 = 2, C = 4 min = 2 -1 = min = 1
      //arr[1+]
      if (arr[r + k][k] != num) return false;
    }
  }

//   Naive solution still using the min(R-r, C-c) concept

  //   for (let i = 0; i < arr.length; i++) {
  //     let row = arr[i];
  //     for (let j = 0; j < row.length; j++) {
  //       let C = row.length;
  //       let num = row[j];
  //       let k = Math.min(R - i, C - j);
  //       for (let g = 0; g < k; g++) {
  //         let next = arr[i + g][j + g];
  //         if (!(next == num)) valid = false;
  //       }
  //     }
  //   }



  return valid;
}
*/

let arr2 = [[3], [5], [6]];
///true

let arr3 = [
  [3, 9],
  [5, 3],
  [6, 5],
];
///true
console.log(isToeplitz(arr1));

//  Naive Solution not using min(R-r, C-c) ---> somehow figured it out.
/*
function isToeplitz(arr) {

    let length = arr.length 
    let valid = true 
    
    for (let i = 0; i<arr.length; i++){
      //goes through subarrays
      //i = row#
      let row = arr[i]
      
      for (let j = 0; j<row.length; j++){
        //take the num --> check subsequent rows at the index and increment the index for each row
        //j = subArr index
        let num = row[j]
        let reps = length - j 
        let col = 0
        for (let h = i; h<reps; h++){
          //row num = h --> check the row for j+1 
          //subarr = arr[h] 
         // console.log(h, j, k, j+k)
          if (!(arr[h][j+col] == num) && !(arr[h][j+col] == null)) {
            valid = false
            //console.log('false', arr[h][j+k])
          }
          k++
        }
      }
    }
    return valid
    
    
  }
  */
