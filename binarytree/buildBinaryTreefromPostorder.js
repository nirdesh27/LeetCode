 // this is different approach than preorder
 // infact In my opinion more sofisticated one
var buildTree1 = function(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) {
        return null;
    }

    const rootVal = postorder.pop();
    const root = new TreeNode(rootVal);

    const rootIndex = inorder.indexOf(rootVal);

    root.right = buildTree1(inorder.slice(rootIndex + 1), postorder);
    root.left = buildTree1(inorder.slice(0, rootIndex), postorder);

    return root;
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    return buildTree1(inorder, postorder);
};