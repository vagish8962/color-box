class Node {
    constructor(data) { 
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor(data) { 

    }

    addFirst(data) {
        const node = new Node(data);
    }
}

const linkedlist = new LinkedList();

linkedlist.addFirst(5);

console.log(linkedlist)