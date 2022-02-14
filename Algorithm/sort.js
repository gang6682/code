function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([4, 5, 6, 12, 3, 1, 2, 6, 7, 8]));

function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let temp = i
        for (let j = i + 1; j < len; j++) {
            if (arr[temp] > arr[j]) {
                temp = j
            }
        }
        [arr[i], arr[temp]] = [arr[temp], arr[i]]
    }
    return arr;
}
// console.log(selectionSort([4, 5, 6, 12, 3, 1, 2, 6, 7, 8]));

function insertionSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let temp = i - 1;
        while (temp >= 0 && arr[temp + 1] > arr[temp]) {
            [arr[temp], arr[temp + 1]] = [arr[temp + 1], arr[temp]]
            temp--;
        }
    }
    return arr;
}
// console.log(insertionSort([4, 5, 6, 12, 3, 1, 2, 6, 7, 8]));

function shellSort(arr) {
    const segmentation = 3;
    const len = arr.length;
    let gap = 1;
    while (gap < len / segmentation) {
        gap = segmentation * gap + 1;
    }
    for (; gap > 0; gap = Math.floor(gap / 3)) {
        for (let i = gap; i < len; i++) {
            const temp = arr[i];
            let j = i - gap
            for (; j < len && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j]
            }
            arr[j + gap] = temp;
        }
    }
    return arr
}
13
// console.log(shellSort([4, 5, 8, 12, 3, 16, 2, 6, 7, 8]));

function mergeSort(arr) {
    const len = arr.length;
    if (len < 2) return arr;
    let mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    while (left.length) {
        result.push(left.shift())
    }
    while (right.length) {
        result.push(right.shift())
    }
    return result
}
// console.log(mergeSort([4, 5, 8, 12, 3, 16, 2, 6, 7, 8]));


function quickSort(arr, left, right) {
    if (left < right) {
        const partitionIndex = partition(arr, left, right)
        partition(arr, left, partitionIndex - 1)
        partition(arr, partitionIndex + 1, right)
    }
    return arr;
}
// 分区并返回基准位置
function partition(arr, left, right) {
    let index = left + 1;
    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[left]) {
            swap(arr, i, index)
            index++;
        }
    }
    swap(arr, left, index - 1)
    return index - 1;
}
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}
// console.log(quickSort([4, 5, 8, 12, 3, 16, 2, 6, 7, 8], 0, 9));

// 初始为大根堆,及根节点大于等于子节点
function buildMaxHeap(arr, len) {
    for (let i = Math.floor(len / 2); i >= 0; i--) {
        heapify(arr, i, len)
    }
}
function heapify(arr, i, len) {
    const left = i * 2 + 1;
    const right = i * 2 + 2;
    let largest = i;
    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }
    console.log('---', left, right, len, i, largest, arr);
    if (largest !== i) {
        console.log('换位置', i + 1, largest + 1);
        swap(arr, i, largest)
        heapify(arr, largest, len)
    }
}
function heapSort(arr) {
    let len = arr.length;
    buildMaxHeap(arr, len)
    console.log("初始化结束");
    console.log(arr);
    for (var i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        len--;
        heapify(arr, 0, len);
    }
    console.log(arr);
    return arr;
}


// console.log(heapSort([4, 5, 8, 12, 3, 16, 2, 6, 7, 8], 0, 9));


function countingSort(arr) {
    const result = [];
    let index = 0;
    let maxValue = 0;
    let minValue = Number.MIN_VALUE;
    for (let i = 0; i <= arr.length; i++) {
        maxValue = Math.max(maxValue, arr[i])
        minValue = Math.MIN(minValue, arr[i])
        if (!result[arr[i]]) {
            result[arr[i]] = 1;
        } else {
            result[arr[i]] += 1;
        }
    }
    for (let i = minValue; i <= maxValue; i++) {
        while (result[i]) {
            arr[index++] = i;
            result[i] -= 1
        }
    }
    return arr
}
// console.log(countingSort([4, 5, 8, 12, 3, 16, 2, 6, 7, 8], 16));

function bucketSort(arr) {

    
}
console.log(bucketSort([4, 5, 8, 12, 3, 16, 2, 6, 7, 8], 16));


