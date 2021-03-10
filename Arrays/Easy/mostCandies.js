/*

Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

let candies = [2, 4, 6, 9]

let extraCandies = 7 


Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.

Input: candies = [2,3,5,1,3], 
extraCandies = 3
Output: [true,true,true,false,true] 
          5  , 6, 8 , 4, 6
the ask: check to see how much candy each child would have when given extraCadndies --> check to see who has the greatest num of candies 
then return that child.

i: array of int, and a single int 
o: array of booleans corresponding to if they have th greatest num of candies
c: check zeros. 

the how: iterate --> curr val + extra --> compare to the greatest val within the arr 

Input: candies = [4,2,1,1,2], 
extraCandies = 1
Output: [true,false,false,false,false] 

Input: candies = [12,1,12], extraCandies = 10
Output: [true,false,true]

*/

let kidsWithCandies = function (candies, extraCandies) {
  maxResult = Math.max(...candies);

  return candies.map((candy) => candy + extraCandies >= maxResult);
};

function findGreatestCandies(candies, extraCandies) {
  let greatest = 0;
  //let res = []

  //find greatest val in candies
  for (let val of candies) {
    if (val > greatest) greatest = val;
  }
  //check if curr candy stash is greater than greatest --> if so add true to index in candy arr, else add false
  for (let i = 0; i < candies.length; i++) {
    candies[i] + extraCandies >= greatest
      ? (candies[i] = true)
      : (candies[i] = false);
  }

  return candies;
}

console.log(findGreatestCandies([12, 1, 12], 10));
