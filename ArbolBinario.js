class NodoArbol {
    constructor(valor) {
        this.valor = valor;
        this.left = null;
        this.right = null;
    }
}

class ArbolBinario {

    constructor() {
    this.root = null;

    }

    insertar(valor){

        const nuevoNodo = new NodoArbol(valor);
        if (this.root === null) {
            this.root = nuevoNodo;
        } else {
            this._insertarRecursivo(this.root, valor);
        }

        
    }

     _insertarRecursivo(valor, nodoActual) {
        if (valor < nodoActual.valor) {
            if (nodoActual.izquierda === null) {
                nodoActual.izquierda = new NodoArbol(valor);
            } else {
                this._insertarRecursivo(valor, nodoActual.izquierda);
            }
        } else {
            if (nodoActual.derecha === null) {
                nodoActual.derecha = new NodoArbol(valor);
            } else {
                this._insertarRecursivo(valor, nodoActual.derecha);
            }
        }
    }

    // Buscar un valor en el árbol
    buscar(valor) {
        return this._buscarRecursivo(valor, this.raiz);
    }
    
    _buscarRecursivo(valor, nodoActual) {
        if (nodoActual === null) {
            return false;
        }
        if (valor === nodoActual.valor) {
            return true;
        } else if (valor < nodoActual.valor) {
            return this._buscarRecursivo(valor, nodoActual.izquierda);
        } else {
            return this._buscarRecursivo(valor, nodoActual.derecha);
        }
    }



      // Recorrido in-order (izquierda, raíz, derecha)
    inOrder() {
        const resultado = [];
        this._inOrderRecursivo(this.raiz, resultado);
        return resultado;
    }
    
    _inOrderRecursivo(nodo, resultado) {
        if (nodo !== null) {
            this._inOrderRecursivo(nodo.izquierda, resultado);
            resultado.push(nodo.valor);
            this._inOrderRecursivo(nodo.derecha, resultado);
        }
    }
}


const arbol = new ArbolBinario();

// Insertar valores
arbol.insertar(10);
arbol.insertar(5);
arbol.insertar(15);
arbol.insertar(3);
arbol.insertar(7);

// Buscar valores
console.log(arbol.buscar(7));  // true
console.log(arbol.buscar(99)); // false

// Recorrer in-order
console.log(arbol.inOrder());  // [3, 5, 7, 10, 15]


