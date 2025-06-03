class Node { // Clase para representar un nodo en la lista doblemente enlazada
  // Cada nodo tiene un dato, una referencia al nodo anterior y una referencia al siguiente nodo

  constructor(data) {
    this.data = data; // Dato almacenado en el nodo
    this.prev = null; // Referencia al nodo anterior
    this.next = null; // Referencia al nodo siguiente
  }
}

class DoublyLinkedList { // Clase para representar una lista doblemente enlazada
  // La lista tiene una referencia al primer nodo (cabeza), al último nodo (cola) y su longitud
  constructor() {
    this.head = null; // Apunta al primer nodo de la lista
    this.tail = null; // Apunta al último nodo de la lista
    this.length = 0; // Número de nodos en la lista
  }

  // Add a node to the end of the list
  // Añade un nodo al final de la lista

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      // Si la lista está vacía, el nuevo nodo es tanto la cabeza como la cola
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Enlaza el nuevo nodo a la cola actual
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode; // Actualiza la cola al nuevo nodo
    }
    this.length++;
    return this;
  }

  // Add a node to the beginning of the list
  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Insert a node at a specific index
  insert(index, data) {
    if (index < 0 || index > this.length) {
      console.error("Index out of bounds for insertion."); // Índice fuera de los límites para la inserción
      return false;
    }
    if (index === 0) {
      return this.prepend(data);
    }
    if (index === this.length) {
      return this.append(data);
    }

    const newNode = new Node(data);
    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }

    newNode.next = currentNode.next;
    newNode.prev = currentNode;
    currentNode.next.prev = newNode;
    currentNode.next = newNode;
    this.length++;
    return true;
  }

  // Remove a node at a specific index
  remove(index) {
    if (index < 0 || index >= this.length) {
      console.error("Index out of bounds for removal."); // Índice fuera de los límites para la eliminación
      return null;
    }

    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        // Si la lista queda vacía
        this.tail = null;
      }
    } else if (index === this.length - 1) {
      removedNode = this.tail;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        // Si la lista queda vacía
        this.head = null;
      }
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      removedNode = currentNode;
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
    }
    this.length--;
    return removedNode.data;
  }

  // Get the data of a node at a specific index
  get(index) {
    if (index < 0 || index >= this.length) {
      console.error("Index out of bounds."); // Índice fuera de los límites
      return null;
    }

    let currentNode;
    if (index <= this.length / 2) {
      // Recorre desde la cabeza si está más cerca
      currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
    } else {
      // Recorre desde la cola si está más cerca
      currentNode = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        currentNode = currentNode.prev;
      }
    }
    return currentNode.data;
  }

  // Update the data of a node at a specific index
  set(index, data) {
    if (index < 0 || index >= this.length) {
      console.error("Index out of bounds."); // Índice fuera de los límites
      return false;
    }

    let currentNode;
    if (index <= this.length / 2) {
      currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
    } else {
      currentNode = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        currentNode = currentNode.prev;
      }
    }
    currentNode.data = data;
    return true;
  }

  // Check if the list is empty
  isEmpty() {
    return this.length === 0;
  }

  // Print the list (forward traversal)
  printListForward() {
    let current = this.head;
    const elements = [];
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    console.log("Forward:", elements.join(" <-> ")); // Hacia adelante
  }

  // Print the list (backward traversal)
  printListBackward() {
    let current = this.tail;
    const elements = [];
    while (current) {
      elements.push(current.data);
      current = current.prev;
    }
    console.log("Backward:", elements.join(" <-> ")); // Hacia atrás
  }
}
/*
// --- Example Usage ---
const dll = new DoublyLinkedList();

console.log("--- Appending elements ---"); // Añadiendo elementos
dll.append(10);
dll.append(20);
dll.append(30);
dll.printListForward();
dll.printListBackward();
console.log("Length:", dll.length); // Longitud

console.log("\n--- Prepending elements ---"); // Prependiendo elementos
dll.prepend(5);
dll.printListForward();
console.log("Length:", dll.length); // Longitud

console.log("\n--- Inserting elements ---"); // Insertando elementos
dll.insert(2, 15); // Insertar 15 en el índice 2
dll.printListForward();
dll.insert(0, 1); // Insertar 1 al principio
dll.printListForward();
dll.insert(6, 40); // Insertar 40 al final
dll.printListForward();
console.log("Length:", dll.length); // Longitud

console.log("\n--- Getting elements ---"); // Obteniendo elementos
console.log("Element at index 3:", dll.get(3)); // Elemento en el índice 3
console.log("Element at index 0:", dll.get(0)); // Elemento en el índice 0
console.log("Element at index 6:", dll.get(6)); // Elemento en el índice 6

console.log("\n--- Setting elements ---"); // Estableciendo elementos UPDATE
dll.set(3, 16);
dll.printListForward();

console.log("\n--- Removing elements ---"); // Eliminando elementos
dll.remove(0); // Eliminar el primer elemento
dll.printListForward();
dll.remove(5); // Eliminar el último elemento
dll.printListForward();
dll.remove(2); // Eliminar elemento en el índice 2 (16)
dll.printListForward();
dll.printListBackward();
console.log("Length:", dll.length); // Longitud

console.log("\n--- Emptying the list ---"); // Vaciando la lista
dll.remove(0);
dll.remove(0);
dll.remove(0);
dll.remove(0);
console.log("Is empty?", dll.isEmpty()); // ¿Está vacía?
dll.printListForward();
*/


let letras = new DoublyLinkedList();

letras.append("C");
letras.append("A");
letras.append("S");
letras.prepend("U")
letras.prepend("L")

letras.set(3, "a")

letras.insert(1, " U")


console.log(letras.printListForward());
console.log(letras.printListBackward());
