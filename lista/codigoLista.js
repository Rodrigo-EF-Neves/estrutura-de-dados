class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Lista {
    constructor() {
        this.head = null;
        this.numberOfElements = 0;
    }

    isEmpty() {
        return this.numberOfElements === 0;
    }

    insertElement(data) {
        const newNode = new Node(data);

        if(this.isEmpty()) {
            this.head = new Node();
            this.head.data = data;
        } else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.numberOfElements++;
    }

    displayItems() {
        if(this.isEmpty()) {
            console.log("Não existem elementos na lista.");
        } else {
            let current = this.head;
            let count = 1;
            while (current !== null) {
                console.log(count + "º elemento: " + current.data);
                current = current.next;
                count++;
            }
            console.log("A lista possui " + this.numberOfElements + " elemento(s).");
        }
    }

    removeElement(data) {
        if(!this.head) return;

        if(this.head.data === data) {
            this.head = this.head.next;
            this.numberOfElements--;
            return;
        }

        let current = this.head;
        let prev = null;

        while (current && current.data !== data) {
            prev = current;
            current = current.next;
        }

        if(!current) return;

        prev.next = current.next;
        this.numberOfElements--;
    }
}

const lista = new Lista();
lista.insertElement(1);
lista.displayItems();
lista.insertElement(2);
lista.displayItems();