/*singley: only point to the next.  doubley: points to prev and next.  
when dealing with linked list --> any node after the Head --> use a while loop to traverse it ---> LL think While Loop

[5] -> [10] -> [7] -> [4] -> null

[5] <-> [10] <-> [7] <-> [4] <-> null



 public class SLLNode
{
    public SLLNode Next { get; set; }
    public int Val { get; set; }
    public SLLNode(int val)
    {
        Val = val;
    }
}


 class SinglyLinkedList
  {
      public SLLNode Head { get; set; }
      public int length { get; set; }

      public SinglyLinkedList(int val)
      {
          Head.Val = val;
          length = 1;
      }

      public SinglyLinkedList()
      {
          length = 0;
      }    
      
      public void AddFirst(int val)
      {
          length++;
          var newNode = new SLLNode(val);

          if (Head == null)
          {
              Head = newNode;
              return;
          }

          newNode.Next = Head;
          Head = newNode;
      }
      
      public void Print()
      {
          if (Head == null) return;

          var current = Head;
          while (current != null)
          {
              Console.Write(current.Val + " - ");
              current = current.Next;
          }

          Console.WriteLine();
      }
      
      
  }




class Node{
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
}

DO: make a linked list --> operations: unshift, delete, print 


write a function for singley ll to remove all duplicates of the linked list... make all unique values
1. do it in place --> harder but more space efficiency 
2. build a new LL with unique values
** gets confusing when you're reconnecting diff nodes 

*/

//you can implement a linked list with a starting head value or a null head.

class LinkedList {
  constructor(head = null, length = 0) {
    (this.head = head), (this.length = length);
  }

  addFirst(val) {
    //check if head === null --> if true set head to node --> else set pointer for node to head --> set val for head to node...
    let nuNode = new Node(val);

    if (this.head) {
      nuNode.next = this.head;
      this.head = nuNode;
    } else {
      this.head = nuNode;
    }
    this.length++;
  }

  append(value) {
    let nuNode = new Node(value);
    this.tail.next = nuNode;
    //reset tail to nuNode so reference is accurate.
    this.tail = nuNode;
    this.length++;
  }

  //insert before a given value
  insertWithValues(value, locationValue) {
    let nuNode = new Node(value);
    let current = this.head;
    let prev;
    while (current.value != locationValue) {
      prev = current;
      current = current.next;
    }
    prev.next = nuNode;
    nuNode.next = current;
    this.length++;
  }
  //inserting with a given index
  insertWithIndex(index, value) {
    let nuNode = new Node(value);
    let i = 0;
    let current = this.head;
    let prev;
    // let next
    if (index === 0) {
      return this.prepend(value);
    } else if (index >= this.length) {
      return this.append(value);
    }
    while (i < index) {
      prev = current;
      current = current.next;
      i++;
      // next = current.next
    }
    prev.next = nuNode;
    nuNode.next = current;
  }
  //with helper method traverseToIndexMinus1 ---> cleanest way since we can use the traverseToIndex method for delete and doubley lists
  insertWithIndex2(index, value) {
    //insert before a given value
    let nuNode = new Node(value);

    if (index === 0) {
      return this.prepend(value);
    } else if (index >= this.length) {
      return this.append(value);
    }
    let nodeBeforeIndex = this.traverseToIndex(index - 1);
    let nuNext = nodeBeforeIndex.next;
    nodeBeforeIndex.next = nuNode;
    nuNode.next = nuNext;
  }

  traverseToIndex(index) {
    let counter = 0;
    let leader = this.head;
    //could also write (counter !== index)
    while (counter < index) {
      leader = leader.next;
      counter++;
    }
    return leader;
  }

  replace(newValue, oldValue) {
    this.insertWithValues(newValue, oldValue);
    this.delete(oldValue);
  }

  delete(value) {
    //use while loop to find node with next === null --> reassign
    //this works but the remove method is cleaner

    let current = this.head;
    let prev;
    let next;
    while (current.value != value) {
      prev = current;
      current = current.next;
      next = current.next;
    }
    prev.next = next;
    this.length--;
  }

  remove(index) {
    let nodeBeforeIndex = this.traverseToIndex(index - 1);
    // let nodeAfterIndex = this.traverseToIndex(index + 1);
    // nodeBeforeIndex.next = nodeAfterIndex; -------> this code would add a 2nd loop to O(2n)
    let unwantedNode = nodeBeforeIndex.next;
    nodeBeforeIndex.next = unwantedNode.next;
    this.length--;
  }

  printList() {
    let curr = this.head;

    while (curr != null) {
      console.log(curr.data, " -> ");
      curr = curr.next;
    }
  }
}

class Node {
  constructor(data, next = null) {
    (this.data = data), (this.next = next);
  }
}

let list = new LinkedList();

list.addFirst("hi");
list.addFirst("there");
list.addFirst("Bernie");
list.printList();

// https://www.geeksforgeeks.org/top-20-linked-list-interview-question/

// DOUBLEY LINKED LIST CLASS DEFINITION

class LinkedListDoubley {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prior: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prior: null,
    };
    this.tail.next = newNode;
    newNode.prior = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prior: null,
    };
    newNode.next = this.head;
    this.head.prior = newNode;
    this.head = newNode;
    //OR
    //this.head.next.prior = this.head ???
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      console.log("yes");
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
      prior: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.prior = leader;
    newNode.next = holdingPointer;
    holdingPointer.prior = newNode;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    unwantedNode.next.prior = leader;
    this.length--;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(2);

// 5 --> 10 --> 15 --> null
let linkedListStructure = {
  //first node --> bucket of data
  //--> bucket contains two things: value and next
  //next will be a bucket containing the same elements
  head: {
    value: 5,
    next: {
      value: 10,
      next: {
        value: 15,
        next: null,
      },
    },
  },
};
