/**
 * 189. Rotate Array
Medium

4243

912

Add to List

Share
Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 2 * 104
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
Accepted
654,293
Submissions
1,784,487
 */

 /**
 
 
 sol1: iterate through arr --> while i <= k --> pop then unshift the last val 
 issues --> pop is O(1) but unshift is O(n) --> so you'll have O(n2) even though its in place...
 
 sol2: slice from k to length --> then slice from 0 to length-k --> push + spread to the end of new arr 
 
 sol3: iterate from right to left --> while i < k push values to new arr --> when i ==k switch to access arr[length - (k+i) - 1] --> push that value to new arr
 */
var rotate = function(nums, k) {
    //sol1
    // while (k>0){
    //     nums.unshift(nums.pop())
    //     k--
    // }
    // return nums
    
    // sol2: does whats its supposed to do, but invalid solution for some reason --> isn't mutating the input nums arr apparently... ---> Answer ---> need to iteratively change the values within the input arr as seen in for loop
    let nu = [...nums.slice(nums.length-k, nums.length), ...nums.slice(0, nums.length-k)]
    
        for (let i = 0; i<nums.length; i++){
            nums[i]=nu[i]
        }
    return nums
    
    
//     sol3: pretty much the above solutions slightly diff, more complicated.
    
//     for (let i = nums.length; i > 0; i--) {
//         if (i > nums.length - k) {
            
//         }
//     }
    
};