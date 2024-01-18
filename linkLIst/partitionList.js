class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function partition(head, x) {
    let before = new ListNode(0);
    let after = new ListNode(0);
    let beforePointer = before;
    let afterPointer = after;

    while (head) {
        if (head.val < x) {
            beforePointer.next = head;
            beforePointer = beforePointer.next;
        } else {
            afterPointer.next = head;
            afterPointer = afterPointer.next;
        }

        head = head.next;
    }

    // Connect the two partitions and set the last node of "after" partition to null
    beforePointer.next = after.next;
    afterPointer.next = null;

    return before.next;
}

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(4);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(2);

let x = 3;

let result = partition(head, x);
console.log(result);
