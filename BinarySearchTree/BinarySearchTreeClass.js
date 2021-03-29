//Trees use nodes like linked lists except instead of a single path of next and previous they have branches of left or right
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (currentNode) {
      //console.log('current node is', currentNode)
      if (currentNode.value === value) {
        return currentNode;
      } else if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else if (currentNode.value < value) {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
  // remove
}
