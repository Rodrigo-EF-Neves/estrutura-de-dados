class Node {
    constructor() {
        this.data = null;
        this.next = null;
    }
}

class Pilha {
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
            console.log("A pilha está vazia.");
            return;
        } else {
            if(this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                let current = this.head;
                while(current.next !== this.tail) {
                    current = current.next;
                }
                current.next = null;
                this.tail = current;
            }
        }
        this.numberOfElements--;
    }

    displayItems() {
        if(this.isEmpty()) {
            console.log("A pilha está vazia.");
        } else {
            let current = this.head;
            let count = 1;
            while(current !== null) {
                console.log(count + "º elemento: " + current.data);
                current = current.next;
                count++;
            }

            console.log("A pilha possui " +  this.numberOfElements + " elemento(s).");
        }
    }

    peek() {
        if(this.isEmpty()) {
            console.log("A pilha está vazia.");
        } else {
            console.log("O elemento no topo da pilha é: " + this.tail.data);
        }
    }
}
//Exemplo de funcionamento do código
const pilha = new Pilha();
pilha.insertElement(1);
pilha.insertElement(2);
pilha.insertElement(3);
pilha.peek();
pilha.displayItems();

pilha.removeElement();
console.log("=============");
pilha.peek();
pilha.displayItems();