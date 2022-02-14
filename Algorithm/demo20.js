//                      中左右      左中右
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }
    const root = new TreeNode(preorder[0])
    const stack = [];
    stack.push(root);
    let rightIndex = 0;
    for (let i = 1; i < preorder.length; i++) {
        const pre = new TreeNode(preorder[i])
        let node = stack[stack.length - 1];
        if (node.val !== inorder[rightIndex]) {
            node.left = pre;
            stack.push(node.left)
        } else {
            while (stack.length && stack[stack.length - 1].val === inorder[rightIndex]) {
                node = stack.pop();
                rightIndex++;
            }
            node.right = pre;
            stack.push(pre)
        }
    }
    return root;
};

// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
//   i  pre   node    index         stack
//   1   9       3        0           3 9
//   2   20      9        2           20
//   3   15      20       2           20 15
//   4   7       15       5           7
//   5                     


var myPow = function (x, n) {
    // if (x === 0) return 0;
    // if (n === 0) return 1;
    // if (n >= 2147483648) return 0
    // let b = n;
    // let res = 1.0;
    // if (b < 0) {
    //     x = 1 / x;
    //     b = -b;
    // }
    // while (b > 0) {
    //     if ((b & 1) == 1) res *= x;
    //     x *= x;
    //     b >>= 1;
    // }
    // return res;

    // 不友好
    // if (x === 0) return 0;
    // if (n === 1) return x;
    // if(x !== 1 && n === -2147483648){
    //     return 0
    // }
    // let b = Math.abs(n);
    // let res = 1;
    // while (b > 0) {
    //     if ((b & 1) == 1) res *= x;
    //     x *= x;
    //     b >>= 1;
    // }
    // return b > 0 ? res : 1 / res;
    if (x === 0) return 0;
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n === -1) return 1 / x;
    if (n % 2 === 0) {
        let a = myPow(x, n / 2);
        return a * a
    } else {
        let b = myPow(x, (n - 1) / 2);
        return b * b * x
    }
};
// console.log(myPow(2, -2147483647));

// 1 3  2
// 1 2 1
// 2 3 2

//  [1,6,3,2,5]
// [1,3,2,6,5]
// 左 右 中 左小于根,右大于根
var verifyPostorder = function (postorder) {
    // const stack = [];
    // let root = Number.MAX_VALUE;
    // for (let i = postorder.length - 1; i >= 0; i--) {
    //     if (postorder[i] > root) return false;
    //     while (stack.length && stack[stack.length - 1] > postorder[i]) {
    //         root = stack.pop();
    //     }
    //     stack.push(postorder[i]);
    // }
    // return true;

    // const stack = [];
    // let root = Number.MAX_VALUE;
    // for (let i = postorder.length - 1; i >= 0; i--) {
    //     if (postorder[i] > root) return false;
    //     while (stack.length && stack[stack.length - 1] > postorder[i]) {
    //         root = stack.pop();
    //     }
    //     stack.push(postorder[i]);
    // }
    // return true;

    //    5
    //  2   6
    // 1  3   50
    //       8   51
    
    // [1 3 2 8 51 50 6 5]

    function recur(postorder, l, r) {
        if (l >= r) return true;
        let left = l;
        while (postorder[left] < postorder[r]) {
            left++;
        }
        let m = left;
        while (postorder[left] > postorder[r]) {
            left++;
        }
        return p == r && recur(postorder, l, m - 1) && recur(postorder, m, r - 1);
    }
    return recur(postorder, 0, postorder.length-1)
};