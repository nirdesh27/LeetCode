class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
function  printLinkList(node){
    while(node){
        console.log("___ ",node.val);
        node = node.next;
    }
}
function addTwoNumbers(l1, l2) {
    let node = new ListNode(0);
    let current = node;
    let carry = 0;

    while (l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return node.next;
}
