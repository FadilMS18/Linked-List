// console.clear();
class LinkedList {
  // Method if the List is still empty then add head
  addHead(value) {
    let obj = new Node(value);
    this.value = obj.value;
    this.next = obj.next;
  }

  checkHead() {
    if (!this.value) {
      return false;
    } else {
      return true;
    }
  }

  // Method to add list to the tail
  append(nextValue) {
    if (!this.value) {
      this.addHead(nextValue);
    } else {
      let current = this;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node(nextValue);
    }
  }

  // Method to add list to the head
  prepend(newValue) {
    if (!this.value) {
      this.addHead(newValue);
    } else {
      let body = { ...this };
      this.value = newValue;
      this.next = body;
    }
  }

  //   Method to determine how much Node that we have in the list
  size() {
    if (!this.checkHead()) {
      return "The List is empty, size of the LinkedList is null";
    }
    let list = this;
    let index = 0;
    while (list.next !== null) {
      index++;
      list = list.next;
    }
    return index + 1;
  }

  //   Method to see what is the head of the list
  head() {
    if (!this.checkHead()) {
      return "The List is Empty";
    }
    return this;
  }

  // Method to return the tail of the list
  tail() {
    if (!this.checkHead()) {
      return "The List is Empty";
    } else {
      let current = this;
      while (current.next !== null) {
        current = current.next;
      }
      return current;
    }
  }

  // Method to return list on given index
  at(index) {
    if (!this.checkHead()) {
      return "The List is Empty";
    } else if (index > this.size()) {
      return null;
    } else {
      let list = { ...this };
      for (let i = 0; i !== index; i++) {
        list = list.next;
      }
      return list;
    }
  }

  // Method to remove last Node from the list
  pop() {
    if (!this.checkHead()) {
      return "The list is empty";
    } else if (this.next == null) {
      delete this.value
      delete this.next
    } else {
      let current = this;
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
    }
  }
  
  // Method to see if a value is in the linkedList
  contains(value){
    if(!this.checkHead()){
      return('The List is empty')
    }else{
      let current = {...this}
      while(current.next !== null){
        if(current.value == value) return true;
        current = current.next;
      }
      return false
    }
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

let list = new LinkedList();

// Append Method to add list to the tail
list.append("Cat");
list.append("Dog");
list.append("Ghidorah");
list.append("Godzilla");
list.append("Kaiju");

// Prepend Method to add data to the head
list.prepend("Mammoth");

// Size Method to count how much data do we have in the list
console.log(list.size());

// Head Method to see what is the head of the list
console.log(list.head());

// Tail Method to see what is the tail of the list
console.log(list.tail());

// At(index) method to return list on given index
console.log(list.at(2));

// Pop Method to remove last node from linkedList
list.pop()
console.log(list)

// Contains(value) method to check if the value given is in the list or not
console.log(list.contains('Cat'))