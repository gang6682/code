var cuttingRope = function (n) {
    if (n <= 3) return n - 1;
    let m = Math.floor(n / 3), num = n % 3;
    if (num === 0) return Math.pow(3, m);
    if (num === 1) return Math.pow(3, m - 1) * 4;
    return num * Math.pow(3, m)
};
// console.log(cuttingRope(2));

var findContinuousSequence = function (target) {
    let currentNum = 0;
    const arr = [];
    let list = [];
    let i = 1;
    while (i <= target) {
        if (currentNum === target) {
            arr.push([...list])
            list.push(i)
            const deleteNum = list.shift()
            currentNum += i;
            currentNum -= deleteNum;
            i++
        } else if (currentNum < target) {
            list.push(i)
            currentNum += i;
            i++
        } else {
            const deleteNum = list.shift()
            currentNum -= deleteNum;
        }
    }
    return arr;
};
// console.log(findContinuousSequence(15));

// [0,1,2] 3
var lastRemaining = function (n, m) {
    // function f(n, m) {
    //     console.log(n,m);
    //     if (n === 1) return 0;
    //     const x=f(n - 1, m);
    //     console.log('-',x);
    //     return (m + x) % n;
    // }
    // return f(n, m)


    let x = 0;
    for (let i = 2; i <= n; i++) {
        x = (x + m) % i;
    }
    return x
};

console.log(lastRemaining(10, 3));

// 0 1 2 3 4                    3
// 0 1 3 4                      3
// 1 3 4       
// 1 3          
// 3