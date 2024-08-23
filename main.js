import { LinkedList } from "./linked-list.js";
console.clear();


let list = new LinkedList();

// Append Method to add list to the tail
list.append("Cat");
list.append("Dog");
list.append("Ghidorah");
list.append("Godzilla");
list.append("Kaiju");

// Prepend Method to add data to the head
list.prepend("Mammoth");
console.log(list)

// Size Method to count how much data do we have in the list
console.log(list.size());

// Head Method to see what is the head of the list
console.log(list.head());

// Tail Method to see what is the tail of the list
console.log(list.tail());

// At(index) method to return list on given index
console.log(list.at(2));

// Pop Method to remove last node from linkedList
list.pop();
console.log(list);

// Contains(value) method to check if the value given is in the list or not
console.log(list.contains("Cat"));

// Find(value) method to search for index for given value
console.log(list.find("Godzilla"));

// toString method to print all the list in string type
console.log(list.toString());

