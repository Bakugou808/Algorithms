// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Example 2:

// Input: s = "IV"
// Output: 4
// Example 3:

// Input: s = "IX"
// Output: 9
// Example 4:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 5:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

/**
 * @param {string} s
 * @return {number}
 */

/*  your solution. 

Score: Success
Details 
Runtime: 236 ms, faster than 18.32% of JavaScript online submissions for Roman to Integer.
Memory Usage: 45.2 MB, less than 60.13% of JavaScript online submissions for Roman to Integer.
Next challenges:
Integer to Roman 
*/

var romanToInt = function(s) {
//     create a bank of roman characters with appropriate values
//     take the string and determine the placements, if the preceeding value is less than the next subtract, otherwise use addition
    // return the value 
//     turns out there are pairs that need to be calculated before. so create another variable to store the pairs and then jump the the next index to land at the appropriate spot within the string
    const romans = {'I': 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
    let res = 0
    let res2 = 0
    
    for (let i = 0; i < s.length ; i++){
        let val = romans[s[i]]
        let next = !(i === s.length -1) && romans[s[i+1]]
        if (next) {
            if (val < next) {
                res2 === 0 ? res2 = (next - val) : res2 += (next-val)
                i = i+1
            } else {
                res === 0 ? res = val : res += val
            }
        } else {
            res += val
        }
        
    }
    
    return res + res2
    
    
    };