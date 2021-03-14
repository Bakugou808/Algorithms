/**
 * 283. Move Zeroes
Easy

5183

162

Add to List

Share
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?
Accepted
1,069,318
Submissions
1,824,775
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 
 i: array of ints 
 o: array of ints with zeros at the end
 c: numbers should be in order of original array, neg and pos are valid. 
 e: all zeros, single val, 
 
 ask: return the arr with all zeros at the end 
 how: 
 
 idea1: iterate through the arr --> if the value is 0 --> push to zeros arr --> else push to res arr 
 --> after loop combine arrs --> res = [...res, ...zeros]
 
 idea2: iterate through the arr --> if the value is 0 --> delete and push to end of arr --> issues: when does the loop stop if you keep adding zeros to the end? delete would be an additional O(n) each time... 
 
 
 */

var moveZeroes = function (nums) {
  //     let res = []
  //     let zeros = []

  //     for (let num of nums) {
  //         if (num === 0) {
  //             zeros.push(num)
  //         } else {
  //             res.push(num)
  //         }
  //     }
  //     nums =  [...res, ...zeros]
  //     // console.log(res)

  ///////////////// solution 2 612 ms	50.2 MB	 ////////////////////

  //     let count = 0
  //     let zeros = 0
  //     if (nums.length === 1) return nums

  //     while (count + zeros < nums.length -1){
  //         if (nums[count] === 0){
  //             nums.splice(count, 1)
  //             nums.push(0)
  //             // nums = [...nums.slice(0,count), ...nums.slice(count+1, nums.length)].push(0)
  //             // console.log('nums', nums)
  //             zeros ++
  //         } else {
  //         count ++
  //         }

  //         console.log(nums, 'count:', count, 'num:', nums[count], 'zeros:', zeros)
  //     }
  //     return nums

  ///////////////// solution 3 620 ms	50.6 MB ////////////////////

  let lastNonZeroFoundAt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      /*the line below is the same as 
                nums[lastNonZeroFoundAt] = nums[i]
                lastNonZeroFoundAt++
                */
      nums[lastNonZeroFoundAt++] = nums[i];
    }
    console.log(nums, i, "lastNonZeroFoundAt:", lastNonZeroFoundAt);
  }

  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }
};
