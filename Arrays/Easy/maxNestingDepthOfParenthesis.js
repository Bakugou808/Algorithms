/*
A string is a valid parentheses string (denoted VPS) if it meets one of the following:

It is an empty string "", or a single character not equal to "(" or ")",
It can be written as AB (A concatenated with B), where A and B are VPS's, or
It can be written as (A), where A is a VPS.
We can similarly define the nesting depth depth(S) of any VPS S as follows:

depth("") = 0
depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

Given a VPS represented as string s, return the nesting depth of s.



Input: s = "(1+(2*3)+((8)/4))+1"
Output: 3
Explanation: Digit 8 is inside of 3 nested parentheses in the string.


Input: s = "(1)+((2))+(((3)))"
Output: 3


Input: s = "1+(2*3)/(2-1)"
Output: 1

i: string of chars 
0: integer --> # of levels of nesting 
E: *will be given valid closed parenthesis/string --> two parenthesis enclosed within the same parenthesis still counts as 1 level

ask: how deep is the most nested parenthesis ?

how: 
track the open parenths first --> as you hit the close increase the nest count --> as you continue --> check to see if the leading open parenths is greater 1 --> if so then start the nest count at zero(?) 

tracking opens --> stack --> if open --> push to stack --> if next is close --> increase nest by one ---> if open again --> push to stack --> if close --> increase temp nest count --> push to array --> select the highest value from array. 
https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/


    public int MaxDepth(string s) {
        int count = 0, tmp = 0;
        foreach(char ch in s) 
        {
            if(ch == '(') tmp++;
            if(tmp > count) count = tmp;
            if(ch == ')') tmp--;
        }
        
        return count;
    }

*/

/**
 * @param {string} s
 * @return {number}
 */

//let count = 0
//let max = 2
let s = "(1)+((2))+(((3)))";

//if count is greater than max --> reassign max to equal count
// cont is following open and closed.

var maxDepth = function (s) {
  let count = 0;
  let nestVal = 0;
  // let map = {'(': 0,')': 0}

  for (let i = 0; i < s.length; i++) {
    //let tempNestVal = 0
    let char = s[i];

    if (char == "(") {
      count++;
      //nestVal ++
    } else if (char == ")") {
      count--;
    }
    if (count > nestVal) nestVal = count;
  }

  return nestVal;

  // else if (char ==')' && map['(']){
  //   map['('] = map['('] -1
  //  }
};

console.log(maxDepth(s));
