// function translateNum(num) {
//     const str = String(num);
//     let count = 1, p = 0, q = 0;
//     for (let i = 0; i < str.length; i++) {
//         p = q;
//         q = count;
//         count = 0;
//         count += q;
//         if (i === 0) {
//             continue;
//         }
//         const cStr = str[i - 1] + str[i];
//         if (cStr <= "25" && cStr >= "10") {
//             count += p
//         }
//     }
//     return count
// }
function translateNum(num) {
    let count = 1, p = 1, pre = num % 10, next = num % 10;
    while (num) {
        num = Math.floor(num / 10);
        pre = num % 10;
        let currentNum = pre * 10 + next
        let currentCount = (currentNum >= 10 && currentNum <= 25) ? p + count : count
        p = count;
        count = currentCount;
        next = pre;
        console.log(p, count);
    }
    return count
}
// console.log(translateNum(1));
// console.log(translateNum(11));
// console.log(translateNum(112));
// console.log(translateNum(1192));
// console.log(translateNum(119921));


function lengthOfLongestSubstring(s) {
    // const map = new Map()
    // let maxLength = 0;
    // let tmp = 0;
    // for (let i = 0; i < s.length; i++) {
    //     const currentIndex = map.get(s[i]) || 0
    //     map.set(s[i], i + 1)
    //     tmp = tmp < i + 1 - currentIndex ? tmp + 1 : i + 1 - currentIndex;
    //     console.log(s[i],i + 1, currentIndex,tmp);
    //     maxLength = Math.max(maxLength, tmp)
    // }
    // return maxLength
    let maxLength = 0;
    let tmp = 0;
    for (let i = 0; i < s.length; i++) {
        let currentIndex = i - 1;
        while (currentIndex >= 0 && s.charAt(i) !== s.charAt(currentIndex)) {
            currentIndex--;
        }
        tmp = tmp < i - currentIndex ? tmp + 1 : i - currentIndex;
        console.log(s[i], i + 1, currentIndex, tmp);
        maxLength = Math.max(maxLength, tmp)
    }
    return maxLength
}
console.log(lengthOfLongestSubstring("abc"));
console.log(lengthOfLongestSubstring("abcabcab"));
console.log(lengthOfLongestSubstring("abb"));
console.log(lengthOfLongestSubstring("aabbbbba"));