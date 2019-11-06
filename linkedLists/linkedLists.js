// Linked Lists and their traversal

// The linked list is a linear data structure, a collection of data elements(nodes), =>
// in which each node points to the next 
// Each node contains data, and a reference to the next node(only the next node in a singly linked list)
// The benefits over something like an array, list elements can be easily inserted or removed => 
// without reallocation of the entire structure, as the elements aren't physically stored in memory
// Inherently accessed sequentially 

// to build a linked list, one must create classes for both a node, and the linked list itself

class Node {
    constructor(element) {
        this.element = element;
        // element holds the data contained within the node
        this.next = null;
        // next holds the pointer to the next node, which is instantiated as empty to begin
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        // head stores the first node in the list
        this.size = 0;
        // size stores the number of nodes in the list
    }

    add(element) {
        let node = new Node(element);
        // instantiate a new node
        let current;
        // holds reference to current node
        if(this.head == null) {
            this.head = node;
            // if the list is empty, add the element and make it the head of the list
        } else {
            current = this.head;
            // if the list isn't empty, iterate to the end of the list
            while(current.next) {
                // we will continue this iteration until the element has no next element
                current = current.next;
                // we will make the node the next of the current node, as to ensure when we finish =>
                // the loop, current will hold the value of the final node
            }
            current.next = node
            // once we exit the while loop, reaching the end of the list, we can add =>
            // the element as the next node to the final node
        }
        this.size++;
    }

}