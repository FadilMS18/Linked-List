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

  //   Method to add list to the head
  prepend(newValue) {
    if (!this.value) {
      this.addHead(newValue);
    } else {
      let body = { ...this };
      this.value = newValue;
      this.next = body;
    }
  }

  //   Method to determine how much data that we have in the list
  size() {
    let list = this;
    let size = 1;
    do {
      size++;
      list = list.next;
    } while (list.next !== null);
    console.log(size);
  }

  //   Method to see what is the head of the list
  head() {
    if (!this.checkHead) {
      console.log("The List is Empty");
    }
    console.log(this);
  }

  // Method to return the tail of the list
  tail() {}
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
list.size();

// Head Method to see what is the head of the list
list.head();

let ken = null;
