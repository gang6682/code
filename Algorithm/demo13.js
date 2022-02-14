function exchange(nums) {
    // const arr = []
    // nums.forEach(item => {
    //     console.log( item % 2 ===0 );
    //     if (item % 2 === 0) {
    //         arr.push(item)
    //     }else{
    //         arr.unshift(item)
    //     }
    // })
    // return arr


    // const arr1 = nums.filter(item=>item%2===1)
    // const arr2 = nums.filter(item=>item%2===0)
    // return [...arr1,arr2]

    let l = 0, r = nums.length - 1;
    while (l < r) {
        while (l < r && (nums[l] % 2 === 1)) {
            l++
        }
        while (l < r && (nums[l] % 2 === 0)) {
            r--
        }
        [nums[l], nums[r]] = [nums[r], nums[l]]
    }
    return nums
}

// console.log(exchange([1, 2, 3, 4]));


function twoSum(nums, target) {
    // 暴力
    // for (let i = 0; i < nums.length; i++) {
    //     const current = target - nums[i]
    //     if (nums.lastIndexOf(current)!==-1  && nums.lastIndexOf(current) !== i) {
    //         return [nums[i], current]
    //     }
    // }
    // return []

    // Map
    // let map = new Map()
    // for (let i = 0; i < nums.length; i++) {
    //     map.set(nums[i], i)
    // }
    // for (let i = 0; i < nums.length; i++) {
    //     if(map.has(nums[i]) && map.has(target - nums[i])){
    //         return [nums[i],target - nums[i]]
    //     }
    // }
    // return []

    let l = 0, r = nums.length - 1;
    while (l < r) {
        if (nums[l] + nums[r] === target) {
            return [nums[l], nums[r]]
        } else if (target < nums[l] + nums[r]) {
            r--
        } else {
            l++
        }
    }
    return []
}

// 输入: "the sky is    blue"
// 输出: "blue is sky the"

// 00  pp
function reverseWords(s) {
    // s = s.trim();
    // let l = r = s.length - 1
    // let arr = "";
    // while (r >= 0) {
    //     while (l >= 0 && s[l] !== " ") {
    //         l--;
    //     }
    //     arr += " " + s.slice(l + 1, r + 1)
    //     while (s[l] === " ") {
    //         l--
    //     }
    //     r = l;
    // }
    // return arr.trim()

    s = s.trim();
    let right = s.length - 1;
    let str = ""
    while (right >= 0) {
        let wordLength = 0;
        while (right >= 0 && s[right] !== " ") {
            wordLength++;
            right--;
        }
        str += " " + s.substr(right + 1, wordLength)
        while (right >= 0 && s[right] === " ") {
            right--;
        }
    }

    return str.trim()
}
console.log(reverseWords("the sky is    blue"));


// 请实现一个函数用来匹配包含'. '和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（含0次）。
// 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但与"aa.a"和"ab*a"均不匹配。

function isMatch(s, p) {
    for (let i = 0; i < s.length; i++) {
        while (p) {
            
        }
        s[i]

    }
}
