class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
    return this;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, data) {
    if (index < 0 || index > this.length) {
      console.error("Index out of bounds for insertion.");
      return false;
    }
    if (index === 0) return this.prepend(data);

    const newNode = new Node(data);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      console.error("Index out of bounds for removal.");
      return null;
    }

    let removed;
    if (index === 0) {
      removed = this.head;
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      removed = current.next;
      current.next = removed.next;
    }

    this.length--;
    return removed.data;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      console.error("Index out of bounds.");
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.data;
  }

  set(index, data) {
    if (index < 0 || index >= this.length) {
      console.error("Index out of bounds.");
      return false;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.data = data;
    return true;
  }

  isEmpty() {
    return this.length === 0;
  }

  printList() {
    let current = this.head;
    const elements = [];
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    console.log("List:", elements.join(" -> "));
  }
}



const list = new SinglyLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.insert(1, 99); // Inserta 99 entre 1 y 2
list.printList(); // Output: List: 1 -> 99 -> 2 -> 3
console.log(list.remove(2)); // Elimina el nodo con valor 2
list.printList(); // Output: List: 1 -> 99 -> 3
