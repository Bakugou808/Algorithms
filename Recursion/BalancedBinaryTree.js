// 110. Balanced Binary Tree
// Easy

// 3040

// 202

// Add to List

// Share
// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

var isBalanced = function (root) {
  if (!root) return true;
  const depth = (node) => {
    if (!node) {
      return 0;
    } else {
      return 1 + Math.max(depth(node.left), depth(node.right));
    }
  };
  return (
    Math.abs(depth(root.right) - depth(root.left)) < 2 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};
