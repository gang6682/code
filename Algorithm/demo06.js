

function levelOrder(root) {
    if (!root) {
        return []
    }
    // 队列
    // let out = [];
    // let tree = [root];
    // while (tree.length) {
    //     const current = tree.shift();
    //     out.push(current.val)
    //     current.left && tree.push(current.left)
    //     current.right && tree.push(current.right)
    // }
    // return out;

    let out = [];
    let count = 0;
    let row = 1;
    function recursion(tree) {
        count++;
        if (tree) {
            out.push(tree.val)
        }
        if (count > (2 ** row - 1)) {
            row++
        }
        if (tree.left) {

        }
    }
    recursion(root)
    return out;
}

//      3
//    /    \
//   5       7
//  /  \    /  \
//         8    9
//        / \  / \

//  2   3  8    9
// / \  /\ /\   /\
//        1  2  3 6

// function levelOrder(root) {
//     if (!root) {
//         return [];
//     }
//     let output = [];
//     let currentRow = [root];
//     while (currentRow.length) {
//         let row = [];
//         for (let i = 0; i < currentRow.length; i++) {
//             output.push(currentRow[i].val)
//             currentRow[i].left && row.push(currentRow[i].left)
//             currentRow[i].right && row.push(currentRow[i].right)
//         }
//         currentRow = row;
//     }
//     return output;
// }


function levelOrder(root) {
    if (!root) {
        return [];
    }
    let output = [];
    let currentRow = [root];
    let isPositive = true;
    while (currentRow.length) {
        const row = [];
        const value = [];
        for (let i = 0; i < currentRow.length; i++) {
            isPositive ? value.push(currentRow[i].val) : value.unshift(currentRow[i].val)
            currentRow[i].left && row.push(currentRow[i].left)
            currentRow[i].right && row.push(currentRow[i].right)
        }
        isPositive = !isPositive;
        currentRow = row;
        output.push(value)
    }
    return output;
}