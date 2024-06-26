class Node {
    //Cria os atributos do objeto Node da árvore
    constructor() {
        this.data = null;
        this.left = null;
        this.right = null;
    }
}

class Arvore {
    //Cria o atributo root da árvore
    constructor() {
        this.root = null;
    }

    //Insere o valor no nó
    insert(data) {
        const newNode = new Node(data);

        if(this.root === null) {
            this.root = newNode;
            this.root.data = data;
        }
        else
            this.insertNode(this.root, newNode)
    }

    //Insere o nó
    insertNode(node, newNode) {
        if(newNode.data < node.data) {
            if(node.left === null){
                node.left = newNode;
                node.left.data = newNode.data;
            }
            else
                this.insertNode(node.left, newNode);
        } else {
            if(node.right === null) {
                node.right = newNode;
                node.right.data = newNode.data;
            }
            else 
                this.insertNode(node.right, newNode);
        }
        
    }

    //Remove o valor no nó
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    //Remove o nó
    removeNode(node, data) {
        if(node === null)
            return null;
        
        if(data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        } else {
            // O nó tem não tem filhos
            if(node.left === null && node.right === null) {
                node = null;
                return node;
            }

            //nó tem um filho
            if(node.left === null) {
                node = node.right;
                return node;
            } else if(node.right === null) {
                node = node.right;
                return node;
            }

            //nó tem dois filhos
            let aux = this.findMinimumNode(node.right);
            node.data = aux.data;
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    findMinimumNode(node) {
        if(node.left === null)
            return node;
        else
            return this.findMinimumNode(node.left);
    }

    //Apresenta todos os nós
    showNodes() {
        if(this.root === null)
            console.log("A árvore está vazia.");
        else 
            this.inOrder(this.root);
    }

    //Apresenta os nós em ordem(nó esquerdo, nó principal, nó direito)
    inOrder(node) {
        if(node !== null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }
}
//Exemplo de funcionamento do código
const arvore = new Arvore();
arvore.insert(10);
arvore.insert(5);
arvore.insert(20);
arvore.insert(2);
arvore.remove(2);
arvore.showNodes();