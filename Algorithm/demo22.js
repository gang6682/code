const res = require("express/lib/response");

var singleNumbers = function (nums) {
    let ret = 0;
    nums.forEach((n) => {
        ret ^= n;
    })
    let div = 1;
    while ((div & ret) == 0) {
        div <<= 1;
    }
    let a = 0, b = 0;
    console.log(ret, div);
    nums.forEach((n) => {
        if ((div & n) != 0) {
            a ^= n;
        } else {
            b ^= n;
        }
    })
    return [a, b];
};
// 110 1000  10
// 110 1      1   
// 11  101    1
// console.log(singleNumbers( [4,3,4,5]));

var singleNumber = function (nums) {
    let a = 0, b = 0;
    for (let i = 0; i < nums.length; i++) {
        a = a ^ nums[i] & ~b;
        b = b ^ nums[i] & ~a;
        console.log(nums[i] & ~b,"a为:", a, nums[i] & ~a,"b为:",  b);
    }
    return a

    // let arr = [];
    // for (let i = 0; i < 32; i++) {
    //     arr[i]= 0;
    // }
    // nums.forEach(item => {
    //     for (let i = 0; i < 32; i++) {
    //         arr[i] += item & 1;
    //         item >>>= 1
    //     }
    // })
    // let res = 0;
    // for (let i = 0; i < 32; i++) {
    //     res <<= 1
    //     res |= arr[31 - i] % 3;
    // }
    // return res;
};

console.log(singleNumber([4, 4, 4, 7]));