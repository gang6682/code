// function getLeastNumbers(arr, k) {
//     // return arr.sort((a,b)=>a-b).slice(0,k)
//     randomizedSelected(arr, 0, arr.length - 1, k);
//     const res = [];
//     for (let i = 0; i < k; i++) {
//         res[i] = arr[i]
//     }
//     return res;
// }
// function randomizedSelected(arr, l, r, k) {
//     if (l > r) return;
//     const pos = randomizedPartition(arr, l, r)
//     const num = pos - l + 1;
//     if (k === num) {
//         return;
//     } else if (k < num) {
//         randomizedSelected(arr, l, pos - 1, k);
//     } else {
//         randomizedSelected(arr, pos - 1, r, k);
//     }
// }

// function randomizedPartition(nums, l, r) {
//     return partition(nums, l, r)
// }

// function partition(nums, l, r) {
//     const pivot = nums[l];
//     let i = l + 1;
//     for (let j = i; j <= r; j++) {
//         if (nums[j] <= pivot) {
//             swap(nums, i, j);
//             i += 1;
//         }
//     }
//     swap(nums, i + 1, r)
//     return i + 1;
// }

// function swap(nums, i, j) {
//     let temp = nums[i];
//     nums[i] = nums[j];
//     nums[j] = temp;
// }

function getLeastNumbers(arr, k) {
    if (arr.length === k) {
        return arr;
    }
    function quickSort(arr, left, right) {
        if (left < right) {
            const partitionIndex = partition(arr, left, right);
            if (partitionIndex === k) {
                return
            } else if (partitionIndex < k) {
                quickSort(arr, partitionIndex + 1, right);
            } else {
                quickSort(arr, left, partitionIndex - 1);
            }
        }
    }

    function partition(arr, left, right) {
        let pivot = left,
            index = pivot + 1;
        for (let i = index; i <= right; i++) {
            if (arr[i] < arr[pivot]) {
                swap(arr, i, index);
                index++;
            }
        }
        swap(arr, pivot, index - 1);
        return index - 1;
    }

    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    quickSort(arr, 0, arr.length - 1)
    const res = [];
    for (let i = 0; i < k; i++) {
        res[i] = arr[i]
    }
    return res;
}
// console.log(getLeastNumbers([3, 4, 1, 2, 1, 1, 2], 4));


var MedianFinder = function () {
    this.arr = [];
    this.median = null;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    let arr = this.arr;
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (num > arr[i]) {
            index = i;
        }
    }
    if (index===-1) {
        this.arr = [num, ...arr.slice(index + 1)];
    } else {
        this.arr = [...arr.slice(0, index+1), num, ...arr.slice(index + 1)];
    }
    const length = this.arr.length;
    if (length % 2 === 1) {
        this.median = this.arr[Math.floor(length / 2)]
    } else {
        this.median = (this.arr[length / 2 - 1] + this.arr[length / 2]) / 2
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    return this.median
};

// [[],[6],[],[10],[],[2],[],[6],[],[5],[],[0],[],[6],[],[3],[],[1],[],[0],[],[0],[]]
// 5 8 6 6 5