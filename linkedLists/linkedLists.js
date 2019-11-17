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
        this.tail = null;
        // tail stores the final node in the list
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

    indexOf(element) {
        var count = 0;
        // count will be what we return as the index the element we are looking for
        var current = this.head;
        // begin with the head node

        while(current != null) {
            // iterate through each element of the list, as when we reach null, the list is done
            if(current.element === element) {
                // if the current element is the one we are looking for, we can return the count
                return count;
            }
            count++;
            current = current.next
            // if we dont find the target at the current node, we increase the count as well as reassign =>
            // the current node to be the next node, as to move through the entire list
        }
        // if we don't find the target element, we can return false, as it is not contained in the linked list
        return false
    }

    insertAtIndex(element, index) {
        // this function will insert a given element at a given "index" of the list
        if (index > 0 && index > this.size)
            return false
            // if the desired index is not the first, and greater than the size of the list, it cannot be added
        else {
            let node = new Node(element);
            let current, previous;
            // node will store the given element to be added to the list
            //current and previous will reference pointer nodes in the list

            current = this.head;
            if (index === 0) {
                node.next = head 
                this.head = node
                // if the desired index is 0, or the start, we can assign the head to be the 'next' node to the =>
                // node we will add, in doing so, the added node will now be the head
            } else {
                current = this.head;
                let idx = 0;
                // idx will represent the temporary index pointer, used to iterate through our list

                while(idx < index) {
                    idx++;
                    previous = current;
                    current = current.next;
                    // if the index isnt 0, we will iterate through the list until we reach the desired index =>
                    // moving through the list by increasing the temporary 'idx' and reassigning the current reference
                }

                node.next = current;
                previous.next = node;
                // once we find the desired index, we will insert it into that position by assigning the current node to =?
                // follow the node we are adding, and making the previous point to the added node in that position
            }
            this.size++;
            // adding a node to our list will incease it in size by 1
        }
    }

    // another common algorithm used to test skills, is to reverse a linked list

    reverse() {
        let head = this.head;
        let previous, temp;
        // we must keep reference to the head, previous node, and a temporary node 
        // in order to reverse the list

        while(head) {
            temp = head.next;
            head.next = previous;
            previous = head;
            head = temp;
        }
        return previous
    }
}