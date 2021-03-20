/*
217. Contains Duplicate
Easy

1498

840

Add to List

Share
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
Accepted
756,757
Submissions
1,334,783
*/

/**

 how: loop through arr --> add each val to hashSet --> if the set has the valu --> return true 
 at the end of loop return false
 */
var containsDuplicate = function(nums) {
    let set = new Set()
    
    for (num of nums){
        if (set.has(num)) {
            return true
        } else {
            set.add(num)
        }
    }
    return false
};