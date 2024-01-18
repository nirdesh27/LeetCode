/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let current = head;
    if(!head) return null;
    let length = 1;
    while(current.next){
        length++;
        current = current.next;
    }
    //console.log("___ sotped at : ", current.val);
    // case1 
    let remainingLength = length -n +1;
    if(remainingLength==1) return head.next;
    if(remainingLength == length){
        current.next = null;
    }
    current = head;
    while(remainingLength-1 >1){
        current = current.next;
        remainingLength --;
    };
    //console.log("___ after traversing ___ :",current.val);
    // exchange previous pointer to next pointer
    if(current.next){
        current.next = current.next.next;
    }else{
        current.next = null;
    }
    //console.log("__",current.val);
    return head;
};