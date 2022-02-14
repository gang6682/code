

// 求中位数
// function towNum(num1, num2) {
//     const length = num1.length + num2.length;
//     const median = Math.floor(length / 2);
//     const currentMedian = [...num1, ...num2].sort();
//     const isEven = (length % 2) === 0
//     return isEven ? (currentMedian[median] + currentMedian[median - 1]) / 2 : currentMedian[median]
// }

// 如果为奇数,则比较Math.floor(length/2)+1次 取较小的
// 如果为偶数
// function towNum(nums1, nums2) {
//     const length = nums1.length + nums2.length;
//     const compareCount = Math.floor(length / 2) + 1;
//     const isEven = length % 2 === 0;
//     let num1Index = 0;
//     let num2Index = 0;
//     let num;
//     let num1;
//     for (let i = 0; i < compareCount; i++) {
//         num1 = num < num1 ? num1 : num;
//         // 如果nums1为空,只需计算nums2
//         if (!nums1.length) {
//             num = nums2[num2Index]
//             num2Index++;
//             continue
//         }
//         // 如果nums2为空,只需计算nums1
//         if (!nums2.length) {
//             num = nums1[num1Index]
//             num1Index++;
//             continue
//         }
//         // nums1,nums2都不为空,nums1还有数据,且nums1[num1Index]<= nums2[num2Index]，数小向后加一
//         if (num1Index < nums1.length && nums1[num1Index] <= nums2[num2Index]) {
//             num = nums1[num1Index]
//             num1Index++;
//             continue;
//         }
//         // nums2后面还有数据
//         if (num2Index < nums2.length) {
//             num = nums2[num2Index]
//             num2Index++;
//             continue
//         }
//         // nums1后面还有数据
//         if (num1Index < nums1.length){
//             num = nums1[num1Index]
//             num1Index++;
//         }
//     }
//     if (!isEven) {
//         return num
//     }
//     return (num + num1) / 2 || 0

// }

// function towNum(nums1, nums2) {
//     const length = nums1.length + nums2.length;
//     const compareCount = Math.floor(length / 2);

// }
// console.log(towNum([1, 2], [3, 4]));
// console.log(towNum([1, 2, 3, 4], []));
// console.log(towNum([], [2, 3]));
// console.log(towNum([1], [1]));
// console.log(towNum([100001], [100000]));


// console.log(towNum([1, 2], [3]));
// console.log(towNum([], [3]));
// console.log(towNum([2], []));
// console.log(towNum([3], [-2, -1]));
// console.log(towNum([1, 2, 3, 4], [8]));
// console.log(towNum([1, 2], [3, 4, 8]));

// [1,2,3,4,5,6,7,8,9] 2 6
// function binarySearch(nums, target) {
//     // const length = nums.length;
//     // if (!length) {
//     //     return -1
//     // }
//     let left = 0;
//     let right = nums.length - 1;
//     while (left <= right) {
//         const medianIndex = (left + right) / 2 | 0
//         console.log(medianIndex);
//         if (target === nums[medianIndex]) {
//             return medianIndex
//         }
//         if (nums[medianIndex] < target) {
//             left = medianIndex + 1;
//         } else {
//             right = medianIndex - 1;
//         }
//     }
//     return -1
// }
// // 3   left   right  medianIndex  target
// // 1    0        2       1           10
// // 2    1        2       
// console.log('--', binarySearch([-1, 0, 3, 5, 9, 12], 9));

// function pow(x) {
//     if(x===1 || x===0){
//         return x
//     }
//     let left = 0;
//     let right = x;
//     while (left <= right) {
//         const mif = (left + right) / 2 | 0
//         if(mif * mif === x){
//             return mif;
//         }
//         if (mif * mif < x) {
//             left = mif + 1;
//         } else {
//             right = mif - 1;
//         }
//         if(left>right){
//             return right
//         }
//     }
//     return "失败"
// }
// console.log(pow(9));

// const numbers = 10;
// function num(n) {
//     let left = 0;
//     let right = n;
//     while (true) {
//         const mif = (left + right) / 2 | 0;
//         const isTrue = guess(mif);
//         if (isTrue === 1) {
//             left = mif + 1;
//         } else if (isTrue === -1) {
//             right = mif - 1;
//         }else{
//             return  mif
//         }
//     }
// }

// function guess(m) {
//     if (m < numbers) {
//         return 1
//     } else if (m > numbers) {
//         return -1
//     }
//     return 0
// }
// console.log(num(13));
// 搜索旋转排序数组 方法一
// function searchTree(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
//     if (!right) {
//         return -1
//     }
//     while (left <= right) {
//         const mif = (left + right) / 2 | 0
//         if (nums[mif] === target) {
//             return mif
//         }
//         if (nums[left] === target) {
//             return left
//         }
//         if (nums[right] === target) {
//             return right
//         }
//         if (nums[left] < nums[mif] ) {
//             if(nums[left] < target && target < nums[mif]){
//                 right = mif - 1
//             }else{
//                 left = mif + 1
//             }
//         } else {
//             if(nums[left] > target && target < nums[mif] || nums[left] < target && target > nums[mif]){
//                 right = mif - 1
//             }else{
//                 left = mif + 1
//             }
//         }
//     }
//     return -1
// }
// 方法二
// function searchTree(nums, target) {
//     if (!nums.length) {
//         return -1
//     }
//     let left = 0;
//     let right = nums.length - 1;
//     while (left <= right) {
//         const mid = (left + right) / 2 | 0;
//         if(nums[mid] === target){
//             return mid
//         }
//         if (nums[left] <= nums[mid]) {
//             if (nums[left] <= target && target < nums[mid]) {
//                 right = mid - 1
//             } else {
//                 left = mid + 1
//             }
//         } else{
//             if (nums[mid] < target && target <= nums[right]) {
//                 left = mid + 1
//             } else {
//                 right = mid - 1
//             }
//         }
//     }
//     return -1
// }
// console.log(searchTree([3, 5, 1], 3));
// console.log(searchTree([1], 3));
// console.log(searchTree([4, 5, 6, 7, 0, 1, 2], 3));
// console.log(searchTree([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(searchTree([5, 1, 3], 3));
// console.log(searchTree([4, 5, 6, 7, 0, 1, 2], 5));
// console.log(searchTree([5, 1, 2, 3, 4], 1));
// console.log(searchTree([8, 9, 2, 3, 4], 9));
// console.log(searchTree([1,3], 3));

// 方法二 慢
// function searchTree(nums, target) {
//     if (!nums.length) {
//         return -1
//     }
//     const index = getIndex(nums);
//     let left = 0;
//     let right = nums.length - 1;
//     if (nums[0] < target) {
//         right = index
//     } else if (nums[0] === target) {
//         return 0
//     } else {
//         left = index + 1
//     }
//     while (left <= right) {
//         const mid = (left + (right - left) / 2) | 0;
//         if(nums[mid]===target){
//             return mid
//         }else if(nums[mid]<target){
//             left = mid + 1
//         }else{
//             right = mid -1
//         }
//     }
//     return -1
// }

// function getIndex(nums) {
//     if (nums.length <= 1) {
//         return 0
//     }
//     let left = 0, right = nums.length - 1;
//     if(nums[0]<nums[right]){
//         return right
//     }
//     while (left <= right) {
//         const mid = (left + (right - left) / 2) | 0
//         if (nums[mid] > nums[mid + 1]) {
//             return mid
//         } else if (nums[mid] < nums[mid + 1] && nums[mid] > nums[nums.length - 1]) {
//             left = mid + 1
//         } else if (nums[mid] < nums[mid + 1] && nums[mid] < nums[nums.length - 1]) {
//             right = mid - 1
//         }
//     }
//     return -1 
// }
// console.log(getIndex([1,3]));



// 查找和最小的 K 对数字
// 给定两个以升序排列的整数数组 nums1 和 nums2,以及一个整数 k。
// 定义一对值(u,v)，其中第一个元素来nums1，第二个元素来自 nums2。
// 请找到和最小的 k个数对(u1,v1), (u2,v2) ... (uk,vk)。

// 输入: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
// 输出: [1,2],[1,4],[1,6]
// 返回前三对 [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
// function kSmallestPairs(nums1, nums2, k) {
//     if (nums1 === null || nums1.length === 0 || nums2 === null || nums2.length === 0) return null;
//     let smallestPairs=[]
//     let n = nums1.length;
//     let m = nums2.length;

//     // 二分查找第 k 小的数对和的大小
//     let left = nums1[0] + nums2[0];
//     let right = nums1[n - 1] + nums2[m - 1];
//     while (left < right) {
//         let mid = left + ((right - left) >> 1);
//         let count = 0; // mid之前的元素的个数
//         let start = 0;
//         let end = m - 1;
//         // 双指针查找当前比 mid 小的元素个数，用来确定二分的方向
//         while (start < n && end >= 0) {
//             if (count >= k) break;
//             if (nums1[start] + nums2[end] > mid) {
//                 end--;
//             } else {
//                 count += end + 1;
//                 start++;
//             }
//         }
//         // mid前的元素超过k个，向左二分，没超过向右
//         if (count < k) {
//             left = mid + 1;
//         } else {
//             right = mid;
//         }
//     }

//     // 分界点的值
//     let divideNum = left;
//     // 找到小于分界点的值的数对，并添加到TopK中

//     for (let num1 in nums1) {
//         for (let num2  in nums2) {
//             if (k > 0 && nums1[num1] + nums2[num2] < divideNum) {
//                 smallestPairs.push([nums1[num1],nums2[num2]]);
//                 k--;
//             } else break;
//         }
//     }

//     // 找到等于分界点的值的数对
//     let index = m - 1;
//     for (let i = 0; i < n && k > 0; i++) {
//         // 找到第一个不大于分界点值的数对
//         while (index >= 0 && nums1[i] + nums2[index] > divideNum) {
//             index--;
//         }
//         for (let j = i; j >= 0; j--) {
//             if (k > 0 && nums1[j] + nums2[index] == divideNum) {
//                 smallestPairs.push([nums1[j],nums2[index]]);
//                 k--;
//             } else break;
//         }
//     }
//     return smallestPairs;
// }
// console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3));
// console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2));
// console.log(kSmallestPairs([1, 2], [3], 3));
console.log(kSmallestPairs([1, 2, 4, 5, 6], [3, 5, 7, 9], 3));
// 最小值 4 最大值15


var kSmallestPairs = function(nums1, nums2, k) {
    m = nums1.length
    n = nums2.length
    /*二分查找第 k 小的数对和的大小*/
    let left = nums1[0] + nums2[0];  // 最小值
    let right = nums1[m - 1] + nums2[n - 1]; // 最大值
    let pairSum = right;
    // 用于找到第k个数的和
    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        let cnt = 0;
        let start = 0; // nums1 开始增
        let end = n - 1; // nums2 开始减
        while (start < m && end >= 0) {
            if (nums1[start] + nums2[end] > mid) {
                end--;
            } else {
                cnt += end + 1;
                start++;
            }
        }
        if (cnt < k) {
            left = mid + 1;
        } else {
            pairSum = mid;
            right = mid - 1;
        }
    }

    const ans = [];
    let pos = n - 1;
    /*找到小于目标值 pairSum 的数对*/
    for (let i = 0; i < m; i++) {
        while (pos >= 0 && nums1[i] + nums2[pos] >= pairSum) {
            pos--;
        }
        for (let j = 0; j <= pos && k > 0; j++, k--) {
            const list = [];
            list.push(nums1[i]);
            list.push(nums2[j]);
            ans.push(list);
        }
    }

    /*找到等于目标值 pairSum 的数对*/
    pos = n - 1;
    for (let i = 0; i < m && k > 0; i++) {
        while (pos >= 0 && nums1[i] + nums2[pos] > pairSum) {
            pos--;
        }
        for (let j = i; k > 0 && j >= 0 && nums1[j] + nums2[pos] == pairSum; j--, k--) {
            const list = [];
            list.push(nums1[i]);
            list.push(nums2[pos]);
            ans.push(list);
        }
    }
    return ans;
}

































// 栈实现队列
// var CQueue = function() {
//     this.stack1=[]
//     this.stack2=[]
// };

// /**
//  * @param {number} value
//  * @return {void}
//  */
// CQueue.prototype.appendTail = function(value) {
//     this.stack1.push(value)
// };

// /**
//  * @return {number}
//  */
// CQueue.prototype.deleteHead = function() {
//     if(!this.stack1.length && !this.stack2.length){
//         return -1;
//     }
//     if(!this.stack2.length){
//         while (this.stack1.length) {
//             this.stack2.push(this.stack1.pop())
//         }
//     }
//     return this.stack2.pop();
// };
// const a = new CQueue()
// const arr=["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
// const arr1=[[],[],[5],[2],[],[]]
// const output=[];

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]==="CQueue"){
//         output.push(null)
//     }else if(arr[i]==="appendTail"){
//         a.appendTail(arr1[i])
//         output.push(null)
//     }else if(arr[i]==="deleteHead"){
//         const num=a.deleteHead();
//         output.push(Array.isArray(num)?num[0]:num)
//     }
// }
// console.log(output);


// 输入：
// ["CQueue","appendTail","deleteHead","deleteHead"]
// [[],[3],[],[]]
// 输出：[null,null,3,-1]

// 栈实现计算最小值
/**
 * initialize your data structure here.
 */
// var MinStack = function () {
//     this.stack = []
//     this.minStack = []
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function (x) {
//     this.stack.push(x)
//     if(this.minStack.length){
//         this.minStack.push(Math.min(this.minStack[this.minStack.length-1],x))
//         return
//     }
//     this.minStack.push(x)
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//     this.stack.pop()
//     this.minStack.pop()
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {
//     return this.stack[this.stack.length - 1]
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.min = function () {
//     if(!this.minStack.length){
//         return -1
//     }
//     return this.minStack[this.minStack.length-1]
// };

// const obj = new MinStack()
// obj.push(2)
// obj.push(5)
// console.log(obj.top());
// console.log(obj.min());
// obj.push(1)
// console.log(obj.top());
// console.log(obj.min());
// obj.pop()
// console.log(obj.min());
// obj.pop()
// console.log(obj.min());


















// console.log('1');

// setTimeout(function() {
//     console.log('2');
//     process.nextTick(function() {
//         console.log('3');
//     })
//     new Promise(function(resolve) {
//         console.log('4');
//         resolve();
//     }).then(function() {
//         console.log('5')
//     })
// })
// process.nextTick(function() {
//     console.log('6');
// })
// new Promise(function(resolve) {
//     console.log('7');
//     resolve();
// }).then(function() {
//     console.log('8')
//     process.nextTick(function() {
//         console.log('23');
//     })
//     new Promise(function(resolve1) {
//         console.log('24');
//         resolve1();
//     }).then(function() {
//         console.log('25')
//     })
// })

// setTimeout(function() {
//     console.log('9');
//     process.nextTick(function() {
//         console.log('10');
//     })
//     new Promise(function(resolve) {
//         console.log('11');
//         resolve();
//     }).then(function() {
//         console.log('12')
//     })
// })
// function jsonStringify(obj) {
//     let type = typeof obj;
//     if (type !== "object") {
//         if (/string|undefined|function/.test(type)) {
//             obj = '"' + obj + '"';
//         }
//         return String(obj);
//     } else {
//         let json = []
//         let arr = Array.isArray(obj)
//         for (let k in obj) {
//             let v = obj[k];
//             let type = typeof v;
//             if (/string|undefined|function/.test(type)) {
//                 v = '"' + v + '"';
//             } else if (type === "object") {
//                 v = jsonStringify(v);
//             }
//             json.push((arr ? "" : '"' + k + '":') + String(v));
//         }
//         return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")
//     }
// }


// var twoSum = function (nums, target) {
// for (let i = 0; i < nums.length - 1; i++) {
//     const diff = target - nums[i]
//     const num = nums.slice(i + 1)
//     if (num.includes(diff)) {
//         console.log(num);
//         console.log(num.indexOf(diff));
//         return ([i, num.indexOf(diff) + i + 1])
//     }
// }

// for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i+1; j < nums.length; j++) {
//         if(nums[i]+nums[j]===target){
//             return [i,j]
//         }
//     }

// }
// return []


// let map = new Map();
// for(let i = 0, len = nums.length; i < len; i++){
//     if(map.has(target - nums[i])){
//         return [map.get(target - nums[i]), i];
//     }else{
//         map.set(nums[i], i);
//     }
// }
// return [];
// const arr = []
// for (let i = 0; i < nums.length; i++) {
//     if (arr.indexOf(target - nums[i])>=0) {
//         return [nums.indexOf(target - nums[i]), i]
//     } else {
//         arr.push(nums[i])
//     }

// }
// for (let i = 0; i < nums.length; i++) {
//     const left = nums.lastIndexOf(nums[i])
//     const right = nums.indexOf(target - nums[i])
//     if (left >= 0 && right >= 0 && right !== left) {
//         return [left, right]
//     }

// }
// return []
// };

// console.log(twoSum([-1, -2, -3, -4, -5], -8));


// function add(num1, num2) {
//     const num1 = Number(num1.join(''))
//     const num2 = Number(num2.join(''))
//     const num = num1 + num2;
//     const str = String(num).split("").reverse()
//     return str
// }
// add([9,9,9,9,9,9,9], [9,9,9,9])

// abcsadabc

// function langLength(s) {
//     const length = s.length;
//     // let pro = ""
//     // for (let i = 0; i < length; i++) {
//     //     let sliceStr = "";
//     //     let tag = true;
//     //     for (let j = i + 1; j <= length; j++) {
//     //         const cStr = s.slice(i, j)
//     //         sliceStr = cStr
//     //         console.log('--',sliceStr);
//     //         for (let k = 0; k < cStr.length; k++) {
//     //             if (cStr.indexOf(cStr[k]) !== cStr.lastIndexOf(cStr[k])) {
//     //                 tag = false;
//     //                 sliceStr = s.slice(i, j - 1)
//     //                 break
//     //             }
//     //         }
//     //         if (!tag) {
//     //             break
//     //         }
//     //     }
//     //     if (pro.length <= sliceStr.length) {
//     //         pro = sliceStr
//     //     }
//     // }
//     // return pro.length || s.length;
//     // const occ = new Set();
//     // // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
//     // let rk = -1, ans = 0;
//     // for (let i = 0; i < length; ++i) {
//     //     if (i !== 0) {
//     //         // 左指针向右移动一格，移除一个字符
//     //         occ.delete(s.charAt(i - 1));
//     //     }
//     //     while (rk + 1 < length && !occ.has(s.charAt(rk + 1))) {
//     //         // 不断地移动右指针
//     //         occ.add(s.charAt(rk + 1));
//     //         ++rk;
//     //     }
//     //     // 第 i 到 rk 个字符是一个极长的无重复字符子串
//     //     ans = Math.max(ans, rk - i + 1);
//     // }
//     // return ans;

//     const arr = [];
//     let longLength = 0;
//     let cLength = 0;
//     for (let i = 0; i < length; i++) {
//         if (i !== 0) {
//             arr.shift()
//         }
//         while (cLength < length && !arr.includes(s.charAt(cLength))) {
//             arr.push(s.charAt(cLength))
//             cLength++;
//         }
//         longLength = Math.max(longLength, arr.length)

//     }
//     return longLength;
// }
// console.log(langLength("au"));

// 技术选型
// 项目用户主要为国外用户，并且采用的第三方库多为国外库，国外react 使用比vue多，所以采用react前端框架，实际项目开发中集成stripe第三方支付