
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
        this.next = null;
    }
}

function breadthFirstTraversal(root) {
    if (!root) {
        return [];
    }

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift(); // Dequeue the front node

        result.push(node.next); // Process the node

        // Enqueue left and right children if they exist
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }

    return result;
}

//console.log(result);

function breadthFirstTraversalModification(root) {
    if (!root) {
        return null;
    }

    //const result = [];
    let queueMain = [root];
    let queueNext = [];
    while(queueMain.length >0){
        console.log(queueMain.length);
        while (queueMain.length > 1) {
            let temp = queueMain.shift();
            
            if(temp.left) queueNext.push(temp.left);
            if(temp.right) queueNext.push(temp.right);
            temp.next = queueMain[0];
            console.log("without null pointers ",temp.val,queueMain[0].val);
        }
        let temp2 = queueMain.shift();
        temp2.next = null;
        if(temp2.left) queueNext.push(temp2.left);
        if(temp2.right) queueNext.push(temp2.right);
        console.log("with null only",temp2.val);
        queueMain = queueNext;
        queueNext = []
    }


    return root;
}

// Example usage:
let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);

let result = breadthFirstTraversalModification(tree);
console.log(breadthFirstTraversal(result));
