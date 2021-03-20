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
      public int Count { get; set; }

      public SinglyLinkedList(int val)
      {
          Head.Val = val;
          Count = 1;
      }

      public SinglyLinkedList()
      {
          Count = 0;
      }    
      
      public void AddFirst(int val)
      {
          Count++;
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

class LinkedList {
  constructor(head = null, count = 0) {
    (this.head = head), (this.count = count);
  }

  addFirst(val) {
    //check if head === null --> if true set head to node --> else set pointer for node to head --> set val for head to node...
    let nuNode = new Node(val);
    this.count++;
    if (this.head) {
      //let nuNode = Node.new(node)
      nuNode.next = this.head;
      // same as  let nuNode = Node.new(node, this.head)
      this.head = nuNode;
    } else {
      this.head = nuNode;
    }
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
