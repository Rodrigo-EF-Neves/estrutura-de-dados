class Node {
    constructor() {
        this.data = null;
        this.next = null;
    }
}

class Fila {
    constructor() {
        this.head = null;
        this.tail = null;
        this.numberOfElements = 0;
    }

    isEmpty() {
        return this.numberOfElements === 0;
    }

    insertElement(data) {
        const newNode = new Node(data);

        if(this.isEmpty()) {
            this.head = newNode;
            this.head.data = data;
            this.tail = newNode;
            this.tail.data = data;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.data = data;
        }

        this.numberOfElements++;
    }

    removeElement() {
        if(this.isEmpty()) {
            console.log("A fila está vazia.");
            return;
        } else {
            if(this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
            }
            this.numberOfElements--;
        }
    }

    displayItems() {
        if(this.isEmpty()) {
            console.log("A fila está vazia.");
            return;
        } else {
            let current = this.head;
            let count = 1;
            while(current !== null) {
                console.log(count + "º elemento: " + current.data);
                current = current.next;
                count++;
            }
            console.log("A fila possui " +  this.numberOfElements + " elemento(s).");
        }
    }
}
// Exemplo de funcionamento do código
const fila = new Fila();
fila.insertElement(1);
fila.displayItems();
console.log("=============")
fila.insertElement(2);
fila.displayItems();
console.log("=============")
fila.insertElement(3);
fila.displayItems();
console.log("=============")

fila.removeElement();
fila.displayItems();