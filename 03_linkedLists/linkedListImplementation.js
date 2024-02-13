class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null
      }
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
      const newNode = {
        value: value,
        next: null
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
      }
      return array;
    }
    insert(index, value){
      //Check for proper parameters;
      if(index >= this.length) {
        console.log('yes')
        return this.append(value);
      }
      
      const newNode = {
        value: value,
        next: null
      }
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList();
    }
    traverseToIndex(index) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index) {
      // Check Parameters      
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
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
  
  //comments 

  class LinkedListWithComments {
    constructor(value) {
      // Initialize the head node with the provided value
      this.head = {
        value: value,
        next: null
      };
      // Set the tail to the head node since it's the only node in the list
      this.tail = this.head;
      // Initialize the length of the list to 1
      this.length = 1;
    }
    // Method to add a new node to the end of the list
    append(value) {
      // Create a new node with the provided value
      const newNode = {
        value: value,
        next: null
      }
      // Point the next property of the current tail node to the new node
      this.tail.next = newNode;
      // Update the tail to point to the new node, since it's now the last node in the list
      this.tail = newNode;
      // Increment the length of the list
      this.length++;
      // Return the updated LinkedList
      return this;
    }
    // Method to add a new node to the beginning of the list
    prepend(value) {
      // Create a new node with the provided value
      const newNode = {
        value: value,
        next: null
      }
      // Point the next property of the new node to the current head node
      newNode.next = this.head;
      // Update the head to point to the new node, since it's now the first node in the list
      this.head = newNode;
      // Increment the length of the list
      this.length++;
      // Return the updated LinkedList
      return this;
    }
    // Method to print the values of all nodes in the list
    printList() {
      // Initialize an array to store the values of the nodes
      const array = [];
      // Start with the head node
      let currentNode = this.head;
      // Iterate through the list until currentNode is null
      while(currentNode !== null){
          // Push the value of the current node into the array
          array.push(currentNode.value)
          // Move to the next node
          currentNode = currentNode.next
      }
      // Return the array of node values
      return array;
    }
    // Method to insert a new node at a specified index in the list
    insert(index, value){
      // Check if the index is out of bounds (greater than or equal to the length of the list)
      if(index >= this.length) {
        // If so, append the new node to the end of the list
        return this.append(value);
      }
      // Create a new node with the provided value
      const newNode = {
        value: value,
        next: null
      }
      // Find the node before the specified index
      const leader = this.traverseToIndex(index-1);
      // Store a reference to the node currently at the specified index
      const holdingPointer = leader.next;
      // Update the next property of the node before the specified index to point to the new node
      leader.next = newNode;
      // Update the next property of the new node to point to the node that was previously at the specified index
      newNode.next = holdingPointer;
      // Increment the length of the list
      this.length++;
      // Return the updated LinkedList
      return this.printList();
    }
    // Method to traverse the list to find the node at a specified index
    traverseToIndex(index) {
      // Initialize a counter variable to 0
      let counter = 0;
      // Start with the head node
      let currentNode = this.head;
      // Iterate through the list until the counter equals the specified index
      while(counter !== index){
        // Move to the next node
        currentNode = currentNode.next;
        // Increment the counter
        counter++;
      }
      // Return the node at the specified index
      return currentNode;
    }
    // Method to remove the node at a specified index from the list
    remove(index) {
      // Find the node before the specified index
      const leader = this.traverseToIndex(index-1);
      // Store a reference to the node to be removed
      const unwantedNode = leader.next;
      // Update the next property of the node before the specified index to point to the node after the unwanted node
      leader.next = unwantedNode.next;
      // Decrement the length of the list
      this.length--;
      // Return the updated LinkedList
      return this.printList();
    }
}


  