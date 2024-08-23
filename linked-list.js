// console.clear();
class LinkedList {
  // Method if the List is still empty then add head
  addHead(value) {
    let obj = new Node(value);
    this.value = obj.value;
    this.next = obj.next;
  }

  isHeadEmpty() {
    if (!this.value) {
      return true;
    } else {
      return false;
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
    if (this.isHeadEmpty()) {
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
    if (this.isHeadEmpty()) {
      return "The List is Empty";
    }
    return this;
  }

  // Method to return the tail of the list
  tail() {
    if (this.isHeadEmpty()) {
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
    if (this.isHeadEmpty()) {
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
    if (this.isHeadEmpty()) {
      return "The list is empty";
    } else if (this.next == null) {
      delete this.value;
      delete this.next;
    } else {
      let current = this;
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
    }
  }

  // Method to see if a value is in the linkedList
  contains(value) {
    if (this.isHeadEmpty()) {
      return "The List is empty";
    } else {
      let current = { ...this };
      while (current.next !== null) {
        if (current.value == value) return true;
        current = current.next;
      }
      return false;
    }
  }

  // Method to search index for given value on the list
  find(value) {
    if (this.isHeadEmpty()) {
      return "The list is Empty";
    } else {
      let index = 0;
      let copyObj = { ...this };
      do {
        if (copyObj.value == value) {
          return index;
        }
        index += 1;
        copyObj = copyObj.next;
      } while (index < this.size());
      return "There is no such a value in the List";
    }
  }

  // method to represent the list as a string
  toString() {
    if (this.isHeadEmpty()) {
      return "The List is empty";
    } else {
      let copyObj = { ...this };
      let dumArray = [];
      for (let i = 0; i < this.size(); i++) {
        dumArray.push(`( ${copyObj.value} )`);
        if (copyObj.next == null) {
          dumArray.push(`null`);
        } else {
          copyObj = copyObj.next;
        }
      }
      return dumArray.join(' -> ');
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
list.pop();
console.log(list);

// Contains(value) method to check if the value given is in the list or not
console.log(list.contains("Cat"));

// Find(value) method to search for index for given value
console.log(list.find("Godzilla"));

// toString method to print all the list in string type
console.log(list.toString());
