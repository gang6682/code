function mergeTwoLists(l1, l2) {
    let currentNode = new ListNode(0, null);
    let newList = currentNode;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            currentNode.next = new ListNode(l1.val, l1.next);
            l1 = l1.next;
            currentNode = currentNode.next
        } else {
            currentNode.next = new ListNode(l2.val, l2.next);
            l2 = l2.next;
            currentNode = currentNode.next
        }
    }
    while (l1) {
        currentNode.next = new ListNode(l1.val, l1.next);
        l1 = l1.next;
        currentNode = currentNode.next
    }
    while (l2) {
        currentNode.next = new ListNode(l2.val, l2.next);
        l2 = l2.next;
        currentNode = currentNode.next
    }
    return newList.next
}

// [4,1,8,4,5]   [5,0,1,8,4,5]

function getIntersectionNode(headA, headB) {
    if (!headA || !headB) {
        return null;
    }
    let currentA = headA;
    let currentB = headB;

    while (currentA !== currentB) {
        currentA = currentA ? currentA.next : headB
        currentB = currentB ? currentB.next : headA
    }
    return currentA

    // if (!headA || !headB) {
    //     return null;
    // }
    // let currentNode = headA;
    // const setA = new Set();
    // while (currentNode) {
    //     setA.add(currentNode.val);
    //     currentNode = currentNode.next
    // }
    // currentNode = headB;
    // while (currentNode) {
    //     if (setA.has(currentNode.val)) {
    //         return currentNode.val
    //     }
    //     currentNode = currentNode.next
    // }
    // return null;
}