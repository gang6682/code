function deleteNode(head, val) {
    if (head?.val === val) {
        return head.next
    }
    let currentNode = head
    while (currentNode?.next) {
        if (currentNode.next.val === val) {
            currentNode.next = currentNode.next.next || null
            break
        }
        currentNode = currentNode.next
    }
    return head
}

// 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
// 例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

// 示例：
// 给定一个链表: 1->2->3->4->5, 和 k = 2.
// 返回链表 4->5.

function getKthFromEnd(head, k) {
    let currentNode = head;
    let count = 1;
    while (currentNode?.next) {
        count++;
        currentNode = currentNode.next
    }
    if (k >= count) {
        return head
    }
    currentNode = head;
    while (count > k) {
        count--;
        currentNode = currentNode.next
    }
    return currentNode
}