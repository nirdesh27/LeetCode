 // this is different approach than preorder
 // infact In my opinion more sofisticated one
 var buildTree1 = function(inorder, preorder) {
    if (inorder.length === 0 || preorder.length === 0) {
        return null;
    }

    const rootVal = preorder.shift();
    const root = new TreeNode(rootVal);
    //preorder = preorder.slice(1,preorder.length-1);

    const rootIndex = inorder.indexOf(rootVal);

    root.right = buildTree1(inorder.slice(rootIndex + 1), preorder);
    root.left = buildTree1(inorder.slice(0, rootIndex), preorder);

    return root;
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, preorder) {
    return buildTree1(inorder, preorder);
};