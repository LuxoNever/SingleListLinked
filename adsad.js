class NodoArbol {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;  
        this.derecha = null;    
    }
}

class ArbolBinario {
    constructor() {
        this.raiz = null;
    }
    
    // Insertar un valor en el árbol
    insertar(valor) {
        if (this.raiz === null) {
            this.raiz = new NodoArbol(valor);
        } else {
            this._insertarRecursivo(valor, this.raiz);
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



        tamaño() {
        return this._tamañoRecursivo(this.raiz);
    }

        _tamañoRecursivo(nodo) {
        if (nodo === null) {
            return 0;
        }
        return 1 + this._tamañoRecursivo(nodo.izquierda) 
               + this._tamañoRecursivo(nodo.derecha);
    }

}


const arbol = new ArbolBinario();

// Insertar valores
arbol.insertar(1);
arbol.insertar(2);
arbol.insertar(3);
arbol.insertar(4);
arbol.insertar(5);
arbol.insertar(6);
arbol.insertar(7);
arbol.insertar(8);
arbol.insertar(9);
arbol.insertar(10);
// Buscar valores
console.log(arbol.buscar(7));  // true
console.log(arbol.buscar(99)); // false

// Recorrer in-order
console.log(arbol.inOrder());  // [3, 5, 7, 10, 15]

console.log(arbol.tamaño()); // Tamaño del árbol





