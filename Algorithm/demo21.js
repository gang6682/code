var hammingWeight = function (n) {
    let res = 0;
    while (n) {
        res++;
        n &= n - 1
    }
    return res;
};

1
1



var add = function (a, b) {
    while (b != 0) {
        console.log(a,b);
        let c = (a & b) << 1;
        a ^= b;
        b = c;
        console.log(a,b);
    }
    return a;
};
// add(1, 1)
add(3, 7)
//  11
// 111

// 100
// 110

//   10
// 1000