function copyRandomList(head) {
    // if (!head) {
    //     return null
    // }
    // const cachedNode = new Map();
    // if (!cachedNode.has(head)) {
    //     cachedNode.set(head, { val: head.val })
    //     Object.assign(cachedNode.get(head),
    //         {
    //             next: copyRandomList(head.next, cachedNode),
    //             random: copyRandomList(head.random, cachedNode)
    //         }
    //     )
    // }
    // return cachedNode.get(head);

    if (!head) {
        return null
    }
    let copyNode = head;
    while (copyNode) {
        const newNode = new Node(copyNode.val, copyNode.next, null)
        copyNode.next = newNode;
        copyNode = newNode.next;
    }
    copyNode = head;
    while (copyNode) {
        if (copyNode.random) {
            copyNode.next.random = copyNode.random.next
        }
        copyNode = copyNode.next.next;
    }
    copyNode = copyNode.head;
    while (copyNode) {
        copyNode.next = newNode?.next?.next || null;
    }
    return copyNode
}