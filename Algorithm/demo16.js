function minNumber(nums) {
    // 输入: [3,30,34,5,9]
    // 输出: "3033459"
    const cUnms = nums.sort((a, b) => `${a}${b}` - `${b}${a}`).join('');
    return cUnms;
}


function isStraight(nums) {
    let min = 0;
    let max = 0;
    let tar = true;
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
            return false;
        }
        if (tar && nums[i] !== 0) {
            tar = false
            min = nums[i];
            min = nums[i];
        }
        if (nums[i] !== 0) {
            min = Math.min(min, nums[i])
            max = Math.max(max, nums[i])
        }
    }
    if (max - min + 1 <= 5) {
        return true
    }
    return false
}