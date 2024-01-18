/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head || !head.next) {
        return 0;
    }

    let slow = head; // using slow and fast pointers
    let fast = head.next;
    while(slow !== fast){
        if(!fast || !fast.next){
            return 0
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return 1;

};