class Node {
    constructor() {
        this.data = null;
        this.next = null;
    }
}

class Fila {
    //Cria os atributos do objeto Fila
    constructor() {
        this.head = null;
        this.tail = null;
        this.numberOfElements = 0;
    }

    //Função para validar se a fila está vazia
    isEmpty() {
        return this.numberOfElements === 0;
    }

    //Função para inserir um novo nó na fila
    insertElement(data) {
        const newNode = new Node(data);

        //Se a fila está vazia, a head e a tail recebem o valor do parâmetro
        if(this.isEmpty()) {
            this.head = newNode;
            this.head.data = data;
            this.tail = newNode;
            this.tail.data = data;
        } else {
            //Se a fila não está vazia, faz com que a nova tail seja o elemento inserido
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.data = data;
        }

        this.numberOfElements++;
    }

    //Função para remover um nó da fila
    removeElement() {
        if(this.isEmpty()) {
            console.log("A fila está vazia.");
            return;
        } else {
            //Se o nó é igual a tail, só existe um elemento para ser removido
            //Senão a head recebe o próximo nó da head que vai ser removida
            if(this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
            }
            this.numberOfElements--;
        }
    }

    //Função que exibe os itens da fila
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