class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function preorderTraversal(root) {
    if (!root) {
        return [];
    }

    const result = [];

    function traverse(node) {
        if (!node) {
            return;
        }

        result.push(node.val); // Process the node before its children
        traverse(node.left);
        traverse(node.right);
    }

    traverse(root);

    return result;
}

// Example usage:
let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);

let result = preorderTraversal(tree);
console.log(result); // Output: [1, 2, 4, 5, 3]
