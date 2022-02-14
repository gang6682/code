function isSubStructure(A, B) {
    if (!B || !A) return false;
    let currentA = [A]
    const valueB = B.val
    while (currentA.length) {
        let arr = [];
        for (let i = 0; i < currentA.length; i++) {
            if (currentA[i].val === valueB) {
                let ccA = [currentA[i]];
                let cB = [B]
                while (cB.length) {
                    for (let j = 0; j < cB.length; j++) {
                        let a = [];
                        let b = [];
                        if (!ccA[j]) {
                            break;
                        }
                        if (cB[j] && !ccA[j]) {
                            break;
                        }
                        if (cB[j].left && !ccA[j].left) {
                            break;
                        }
                        if (cB[j].right && !ccA[j].right) {
                            break;
                        }
                        if (cB[j].left && ccA[j].left && cB[j].left.val !== ccA[j].left.val) {
                            break;
                        }
                        if (cB[j].right && ccA[j].right && cB[j].right.val !== ccA[j].right.val) {
                            break;
                        }
                        if (cB[j].left && ccA[j].left && cB[j].left.val === ccA[j].left.val) {
                            a.push(ccA[j].left)
                        }
                        if (cB[j].right && ccA[j].right && cB[j].right.val === ccA[j].right.val) {
                            a.push(ccA[j].right)
                        }
                        cB[j] && cB[j].left && b.push(cB[j].left)
                        cB[j] && cB[j].right && b.push(cB[j].right)
                        cB = b;
                        ccA = a;
                    }
                }
                if (!cB.length || cB.length === ccA.length) {
                    return true
                }
            }
            currentA[i] && currentA[i].left && arr.push(currentA[i].left)
            currentA[i] && currentA[i].right && arr.push(currentA[i].right)

        }
        currentA = arr;
    }
    return false
};

// function isSubStructure(A, B) {
//     if (!A || !B) return false;
//     const valueB = B.valueB;
//     let a = [A]
//     function rec(ca, cb) {
//         if (!cb || !ca) return
//         if (cb.left && !ca.left || cb.right && !ca.right) return
//         if (cb.val !== ca.val) return
//         if (cb.left) {
//             rec(ca.left, cb.left)
//         }
//         if (cb.left) {
//             rec(ca.right, cb.right)
//         }
//     }
//     while (a.length) {
//         let row = []
//         for (let i = 0; i < a.length; i++) {
//             if (a[i].val === valueB) {
//                 rec(a[i], valueB)
//             }
//             a[i] && a[i].left && row.push(a[i].left)
//             a[i] && a[i].right && row.push(a[i].right)
//         }

//     }
//     return false
// }
//    3
//   / \
//  4   5
// / \
//1   2

// 4
// /
// 1

function mirrorTree(root) {
    if (!root) {
        return null;
    }
    const left = mirrorTree(root.left);
    const right = mirrorTree(root.right);
    root.left = right;
    root.right = left;
    return root;

}
// const obj = { val: 1, left: { val: 2, left: 3 }, right: 4 }
// console.log(obj);
// console.log(mirrorTree(obj));


function isSymmetric(root) {
    if (!root) return true;
    function dfs(left, right) {
        if (!left && !right) return true;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;
        return dfs(left.left, right.right) && dfs(left.right, right.left);
    }
    return dfs(root.left, root.right);
}

function isSubStructure(A, B) {
    if (!A || !B) {
        return false;
    }
    function isSameTree(a, b) {
        if (!b) {
            return true;
        }
        if (!a) {
            return false;
        }
        if (a.val !== b.val) {
            return false;
        }
        return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
    };
    return (isSameTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B));
}