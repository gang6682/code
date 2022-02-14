function pathSum(root, target) {
    let sum = 0;
    const res = [];
    const current = [];
    function dfs(root) {
        if (!root) return;
        current.push(root.val)
        sum += root.val;
        if (!root.left && !root.right && target === sum) {
            res.push([...current])
        }
        dfs(root.left)
        dfs(root.right)
        current.pop()
        sum -= root.val;
    }
    dfs(root)
    return res;
}


function treeToDoublyList(root) {
    if (root === null) return null;
    let head = null, pre = null;
    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        if (pre) {
            pre.right = root;
        } else {
            head = root;
        }
        root.left = pre;
        pre = root;
        dfs(root.right)
    }
    dfs(root);
    head.left = pre;
    pre.right = head;
    return head;
}

function kthLargest(root, k) {
    if (root === null) return null;
    let i = 1;
    let num = 0;
    function dfs(root) {
        if (!root) return;
        dfs(root.right)
        if (i === k) {
            num = root.val
        }
        i++
        if(i<k) return;
        dfs(root.left);
    }
    dfs(root);
    return num
}