function findRepeatNumber(nums) {
    if (!nums || !nums.length) {
        return -1
    }
    // 暴力枚举
    // let newNums = [];
    // for (let i = 0; i < nums.length; i++) {
    //     if(!newNums.includes(nums[i])){
    //         newNums.push(nums[i])
    //         continue
    //     }
    //     return nums[i]
    // }

    // let map = new Map();
    // for (let i = 0; i < nums.length; i++) {
    //     if (map.has(nums[i])) {
    //         return nums[i]
    //     }
    //     map.set(nums[i], 1)
    // }

    // let newNums = [];
    // for (let i = 0; i < nums.length; i++) {
    //     if (newNums[nums[i]] === nums[i]) {
    //         return nums[i]
    //     }
    //     newNums[nums[i]] = nums[i]
    // }

    // let newNums = new Set();
    // for (let i = 0; i < nums.length; i++) {
    //     if (newNums.has(nums[i])) {
    //         return nums[i]
    //     }
    //     newNums.add(nums[i])
    // }

    let cur
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] != i) {
            cur = nums[i]
            if (nums[i] == nums[cur]) {
                return nums[i];
            } else {
                nums[i] = nums[cur];
                nums[cur] = cur;
            }
        }
    }
    // [3, 4, 2, 1, 2, 1]
    // [1, 4, 2, 3, 2, 1]
    // [4, 1, 2, 3, 2, 1]
    // [2, 1, 2, 3, 4, 1]


    // [3, 4, 2, 0, 0, 1]
    // [0, 4, 2, 3, 0, 1]
    // [0, 0, 2, 3, 4, 1]

    // for (let i = 0; i < nums.length; i++) {
    //     console.log(nums[i],nums.indexOf(nums[i]),nums.lastIndexOf(nums[i]));
    //     if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])) {
    //         console.log(1);
    //         continue;
    //     }
    //     return nums[i]
    // }


}
// console.log(findRepeatNumber([3, 4, 2, 1, 2, 1]));

function search(nums, target) {
    const startIndex = nums.indexOf(target)
    const endIndex = nums.lastIndexOf(target)
    if (startIndex === -1) {
        return 0
    }
    return endIndex - startIndex + 1
}
// console.log(search([5, 7, 7, 8, 8, 10], 9));

function missingNumber(nums) {
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] !== i) {
    //         return i
    //     }
    // }
    // return nums.length

    // 二分查找
    // const length = nums.length;
    // if (!length) {
    //     return 0
    // }
    // let left = nums[0];
    // let right = nums[length - 1];
    // if (right === length - 1) {
    //     return length
    // }
    // if (left !== 0) {
    //     return 0
    // }
    // while (left <= right) {
    //     let mid = (left + right) / 2 | 0;
    //     if (mid === nums[mid]) {
    //         left = mid + 1
    //     } else {
    //         right = mid - 1
    //     }
    // }
    // return left

    // 递归加二分
    const length = nums.length;
    if (!length) {
        return 0
    }
    let left = nums[0];
    let right = length - 1;
    // 处理边界
    if (nums[right] === right) {
        return length
    }
    if (left !== 0) {
        return 0
    }
    function rec(num1, num2) {
        let mid = (num1 + num2) / 2 | 0;
        if (num1 > num2) {
            return num1;
        }
        if (nums[mid] === mid) {
            return rec(mid + 1, num2)
        }
        if (nums[mid] > mid) {
            return rec(num1, mid - 1)
        }
    }
    const res = rec(left, right)
    return res;
}
// console.log(missingNumber([0, 1, 2, 3, 5]));
// console.log(missingNumber([0, 1, 2, 4, 5]));
// console.log(missingNumber([0, 1, 3, 4, 5]));
// console.log(missingNumber([0, 2, 3, 4, 5]));
// console.log(missingNumber([1, 2, 3, 4, 5]));
//  left  right  mid
//    0     5     2
//    3     5     4

// function binarySearch(nums, target) {
//     if (nums.size() == 0)
//         return -1;

//     let left = 0, right = nums.length;
//     while (left < right) {
//         // Prevent (left + right) overflow
//         let mid = left + ((right - left) >> 1);
//         if (nums[mid] == target) { return mid; }
//         else if (nums[mid] < target) { left = mid + 1; }
//         else { right = mid; }
//     }

//     // Post-processing:
//     // End Condition: left == right
//     if (left != nums.length && nums[left] == target) return left;
//     return -1;
// }

// console.log(binarySearch([1, 2, 3, 4, 5], 2));


var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 1;
        let right = n;
        while (left < right) {
            let mid = left + ((right - left) >> 1);
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left
    };
};

const findPeakElement = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = left + ((right - left) >> 1);
        if (nums[left] < nums[mid]) {

        }
    }

}
// [1,2,1,3,5,6,4]
// [1,2,1,3,5,6,7]
// [1,2,3,1]
// [1,2,3,1,2,3,4]