class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Lista {
    //Cria os atributos do objeto Lista
    constructor() {
        this.head = null;
        this.numberOfElements = 0;
    }

    //Valida se a lista está vazia
    isEmpty() {
        return this.numberOfElements === 0;
    }

    //Insere um novo nó na lista
    insertElement(data) {
        const newNode = new Node(data);

        //Se a lista está vazia, define a head como um novo Node e a head recebe o valor do parâmetro data
        if(this.isEmpty()) {
            this.head = new Node();
            this.head.data = data;
        } else {
            //Percorre todos os nós existentes na lista e adiciona o novo nó ao final dela
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.numberOfElements++;
    }

    //Exibe todos os itens da lista
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

    //Remove o nó da lista
    removeElement(data) {
        //Se head é nula faz o early return da função
        if(!this.head) return;

        //Se a head da lista é igual a data, a head se torna o próximo nó após a lista
        if(this.head.data === data) {
            this.head = this.head.next;
            this.numberOfElements--;
            return;
        }

        let current = this.head;
        let prev = null;

        //Enquanto o nó atual tem um valor diferente do parâmetro, preenche uma variável com o nó prévio
        //e passa pelo nó atual até que o nó atual chegue no último elemento da lista. 
        while (current && current.data !== data) {
            prev = current;
            current = current.next;
        }

        if(!current) return;
        
        //O nó prévio recebe a referência do próximo nó do nó atual o que faz com que o último nó seja removido
        //e mova o ponteiro.
        prev.next = current.next;
        this.numberOfElements--;
    }
}
//Exemplo de execução do código
const lista = new Lista();
lista.insertElement(1);
lista.displayItems();
lista.insertElement(2);
lista.displayItems();