/*
53. Maximum Subarray
Easy

11115

532

Add to List

Share
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
 

Constraints:

1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
Accepted
1,341,713
Submissions
2,807,803

*/

//This broke on larger inputs --> not efficient but technically works. has a bigO of O(n!) or something insane
var maxSubArray1 = function (nums) {
  let sumsArr = [];
  let greatest = nums[0];

  if (nums.length === 1) return nums[0];

  const summate = (numsArr) => {
    let numsTemp = [];
    for (let i = 0; i < numsArr.length; i++) {
      let num = numsArr[i];
      numsTemp.push(num);
      let sum = numsTemp.reduce((a, b) => a + b, 0);
      if (greatest < sum) greatest = sum;
      // sumsArr.push(sum)
    }
  };

  while (nums.length > 0) {
    summate(nums);
    nums.shift();
  }

  return greatest;
};
