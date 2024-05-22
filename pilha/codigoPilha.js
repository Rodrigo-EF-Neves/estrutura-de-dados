class Node {
    constructor() {
        this.data = null;
        this.next = null;
    }
}

class Pilha {
    //Cria os atributos do objeto Pilha
    constructor() {
        this.head = null;
        this.tail = null;
        this.numberOfElements = 0;
    }

    //Função para validar se a pilha está vazia
    isEmpty() {
        return this.numberOfElements === 0;
    }

    //Função que adiciona um nó na pilha
    insertElement(data) {
        const newNode = new Node(data);

        //Se a pilha está vazia, a head e a tail recebem o valor do parâmetro
        if(this.isEmpty()) {
            this.head = newNode;
            this.head.data = data;
            this.tail = newNode;
            this.tail.data = data;
        } else {
            //Se a pilha não está vazia, faz com que a nova tail seja o elemento inserido
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.data = data;
        }

        this.numberOfElements++;
    }

    //Função que remove um nó da pilha
    removeElement() {
        if(this.isEmpty()) {
            console.log("A pilha está vazia.");
            return;
        } else {
            //Se o nó da head é igual a tail, só existe um elemento para ser removido
            //Senão o nó é percorrido e o penúltimo nó se torna a tail e a referência para o próximo nó é nula
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

    //Função que exibe os itens da pilha
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