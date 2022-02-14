var majorityElement = function (nums) {
    // let map = new Map()
    // for (let i = 0; i < nums.length; i++) {
    //     if (map.has(nums[i])) {
    //         map.set(nums[i], map.get(nums[i]) + 1)
    //     } else {
    //         map.set(nums[i], 1)
    //     }
    // }
    // let value;
    // map.forEach((val, key) => {
    //     if (val >= (nums.length) / 2) {
    //         value = key;
    //     }
    // })
    // return value;
    let count = 0;
    let currentNum = 0;
    nums.forEach(num => {
        if (count < 1) {
            currentNum = num;
        }
        num === currentNum ? count++ : count--
    })
    return currentNum
};

// console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]));


// 1    2   3   4    5
// 120  60  40  30  24

var constructArr = function (a) {
    if (!a.length) return [];
    let arr = [1]
    for (let i = 1; i < a.length; i++) {
        arr[i] = arr[i - 1] * a[i - 1]
    }
    console.log(arr);
    let temp = 1;
    for (let i = a.length - 1; i >= 0; i--) {
        arr[i] = arr[i] * temp;
        temp *= a[i]
    }
    return arr;
};
// console.log(constructArr([1, 2, 3, 4, 5]));


