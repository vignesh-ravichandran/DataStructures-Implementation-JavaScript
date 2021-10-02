const LinkedList = require("../Implementations/LinkedList/LinkedList");

//let us initialize a linked list

let ll = new LinkedList();

//adding elements to  the linked list
ll.addElement("john");
ll.addElement("May");
ll.addElement("peter parker");

//lets pring the elements of the linked list
console.log("LinkedList after Adding the elements ===============>");
ll.printElements();
//the above should print john may and peterparker

//now lets remove an element
ll.removeElement("May");
console.log("Linked List After removing the element ==========>");
ll.printElements();
