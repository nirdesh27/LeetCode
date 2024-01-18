class LinkList {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

function addNodeToLst(node,val){
    let current = node;
    while(current.next){
        current = current.next;
    }
    let newNode = new LinkList(val);
    current.next = newNode;
}
function addNodeToStart(node,val){
    if(!node) return null;
    let newNode = new LinkList(val);
    newNode.next = node;
    return newNode;
}
function printLinkList(head){
    let current = head;
    while(current){
        console.log("__",current.value);
        current = current.next;
    }
}

function linkList(){
    let node = new LinkList(0);
    let current = node;
    addNodeToLst(current,1);
    addNodeToLst(current,2);
    addNodeToLst(current,3);
    current = addNodeToStart(current,0);
    current = addNodeToStart(current,-1);
    printLinkList(current);
}
linkList();