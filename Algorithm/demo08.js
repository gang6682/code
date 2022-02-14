function fib(n) {
    // 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
    // 动态规划
    const MOD = 1000000007;
    if (n < 2) return n;
    let left = 0, right = 1, sum = 0;
    for (let i = 1; i < n; i++) {
        sum = (left + right) % MOD;
        left = right
        right = sum
    }
    return sum;


    // 递归超时
    // if (n === 0) return 0;
    // if (n === 1) return 1;
    // if (n > 1) return fib(n-2) + fib(n - 1);

}

// console.log(fib(2));
// console.log(fib(5));

// 0 1 1 2 3 5
// 0 1
// 1 2
// 2 3
// 3 5

// 0 1 2 3 4 5
// 1
// 1
// 2
// 3
// 10
function numWays(n) {
    if (n <= 1) return 1;
    const MOD = 1000000007;
    let left = 1, right = 1, sum = 0;
    for (let i = 1; i < n; i++) {
        sum = (left + right) % MOD;
        left = right
        right = sum
    }
    return sum;
}

// [7, 1, 5, 3, 6, 4]
function maxProfit(prices) {
    // if (prices.length < 2) return 0;
    // let sum = 0;
    // for (let i = 0; i < prices.length - 1; i++) {
    //     for (let j = i + 1; j < prices.length; j++) {
    //         if (prices[j] - prices[i] > sum) {
    //             sum = prices[j] - prices[i]
    //         }
    //     }
    // }
    // return sum

    let minprice = Number.MAX_VALUE;
    let maxprofit = 0;
    for (const price of prices) {
        maxprofit = Math.max(price - minprice, maxprofit);
        minprice = Math.min(price, minprice);
        console.log(price, maxprofit, minprice);
    }
    return maxprofit;

}
console.log(maxProfit([7,2,8,1,8]));