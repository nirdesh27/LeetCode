/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    node = new ListNode(0);
    current = node;
    while (list1 && list2) {
        if(list1.val<=list2.val){
            current.next = new ListNode(list1.val);
            current = current.next;
            list1 = list1.next;
        }else{
            current.next = new ListNode(list2.val);
            current = current.next;
            list2 = list2.next;
        }

    }
    current.next = list1 || list2;
    return node.next;
};