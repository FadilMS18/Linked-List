// console.clear();
class LinkedList {
  // Method if the List is still empty then add head
  addHead(value) {
    let obj = new Node(value);
    this.value = obj.value;
    this.next = obj.next;
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
console.log(list);
