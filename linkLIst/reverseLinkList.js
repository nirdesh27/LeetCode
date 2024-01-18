/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(!head) return null;
    // find leftnode
    let current = head;
    while(left>1){
        current = current.next;
        left--;
    }
    let leftNode = current;
    //find rightNode;
    current = head;
    while(right > 1){
        current = current.next;
        right--;
    }
    let rightNode = current;
    let leftNodePin = leftNode;
    let tempArray = [];
    while(rightNode.next != leftNode){
        tempArray.push(leftNode.val);
        leftNode = leftNode.next;
    }
    let count = tempArray.length-1;
    while(count>=0){
        leftNodePin.val = tempArray[count];
        leftNodePin = leftNodePin.next;
        count --;
    }
    return head;
};