class Node {
    
    constructor(element){
        this.element = element; //To store the value
        this.next = null; //To store the address of the next node
    }
}

class LinkedList {
    constructor(){
        this.head = null; //To store the address of the first node of the Linked List
    }

    addElement(element){
      
        // Each unit in a linked List is a node, so let us initiallise a node with the value which is to be added
        let node = new Node(element);
        // If the linked list is empty , the head is pointed to this node
        if(this.head == null){
            this.head = node;
        }else{
            //if the liked list already has nodes, we need to this node as the last node, so 
            //let us initialize a pointer to the head node
            let current = this.head; 
            //the loop conitunes untill the node which the pointer is pointing to has no next node ( which means the last node of the linkedlist )
            while(current.next){
                //make the pointer to point to the next node
                current = current.next;
            }
            //so now the pointer is pointing to the last node, now in the last node, we need to add the address of the new node, making the new node the last node of the linked List
            current.next = node;
        }    
    }

    removeElement(element){
        //We need to remove an element by its value, so lets iterate through the linked list and find the node with this value
        //For removing a node in a linked list, we need to replace the address in its previous node with the address of the next node, so let us have a pointer current to sort through and a pointer to point the previous node
        let current = this.head;
        let prev = null;
        while(current.next){
            if(current.element === element){
                if(prev == null){//the head is pointing to the node which has our value so lets make head point to the next Node, so the linkedlist will start from the next node
                    this.head = current.next;
                }else{//if it is in the middle node, we need to point the next elements next(address of next element) to previouse elements next , so that our node is now not linked to any nodes in our linked list
                    //basically removing this node from the list
                    prev.next = current.next;
                }
                //since we removed our node let us return this method with the removed value
                return current.element;

            }
            //before moving the pointer to next node, let us point this node as previous
            prev = current;
            //moving our current pointer to the next node
            current = current.next;
        } 
    }

    printElements(){
        //iterate through the linked list with a  pointer and print the values
        let current = this.head; //point the pointer to the first node
        while(current.next){
            console.log(current.element); // this line will not be reached for the  last element ,  as last node would not have a next, so add this line outside the loop to print last nodes value
            current = current.next; //point the pointer to the next node
        }
        console.log(current.element);
    }
}

module.exports = LinkedList;