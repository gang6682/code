const arr = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]
function findNumberIn2DArray(matrix, target) {
    if (!matrix || !matrix.length || !matrix[0].length) {
        return false
    }
    // const length = matrix.length;
    // const length1 = matrix[0].length;
    // for (let i = 0; i < length; i++) {
    //     for (let j = 0; j < length1; j++) {
    //         console.log(i,j);
    //         if (matrix[i][j] === target) {
    //             return true
    //         }
    //     }
    // }
    // return false
    const rowLength = matrix.length;
    const columnLength = matrix[0].length;

    // let row = rowLength-1;
    // let column = 0;
    // while (column < columnLength && row >= 0) {
    //     if (matrix[row][column] === target) {
    //         return true
    //     }
    //     if (matrix[row][column] > target) {
    //         row--;
    //     } else {
    //         column++
    //     }
    // }

    let row = 0;
    let column = columnLength - 1;
    while (row < rowLength && column >= 0) {
        console.log(row, column, matrix[row][column]);
        if (matrix[row][column] === target) {
            return true
        }
        if (matrix[row][column] > target) {
            column--;
        } else {
            row++
        }
    }
    return false
}
// console.log(findNumberIn2DArray([[-1, 3]], 3));
// console.log(findNumberIn2DArray(arr, 5));



// 输入：[3,4,5,1,2]
// 输出：1

// 给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。
// 请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为1。  

// 输入：[2,2,2,0,1]
// 输出：0
function minArray(numbers) {
    const length = numbers.length;
    let left = 0;
    let right = length - 1;
    if (numbers[left] < numbers[right]) {
        return numbers[left]
    }
    // for (let i = 0; i < length - 1; i++) {
    //     if(numbers[i]>numbers[i+1]){
    //         return numbers[i+1]
    //     }
    // }
    // return numbers[0]
    // [5,6,7,8,0,1,2,3,4,]
    // [2,3,4,5,6,7,8,9,1]
    while (left < right) {
        let mid = left + ((right - left) >> 1);
        if (numbers[mid] < numbers[right]) {
            right = mid;
        } else if (numbers[mid] > numbers[right]) {
            left = mid + 1;
        } else {
            right -= 1;
        }

    }
    return numbers[left]
}
// console.log(minArray([2, 2, 2, 0, 1]));
// console.log(minArray([3,1,1]));
// console.log(minArray([3,1,3]));
// console.log(minArray([10,1,10,10,10]));
// console.log(minArray([4,4,4,4,4,4,4,4,5,6]));


function firstUniqChar(s) {
    // const length = s.length;
    // for (let i = 0; i < length; i++) {
    //     if(s.indexOf(s[i])===s.lastIndexOf(s[i])){
    //         return s[i]
    //     }
    // }
    // return " "
    const length = s.length;
    let map = new Map()
    for (let i = 0; i < length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], 1)
        } else {
            map.set(s[i], -1)
        }
    }
    for (let i = 0; i < length; i++) {
        if (map.get(s[i])=== -1) {
            return s[i]
        }
    }
    return " "
}
console.log(firstUniqChar("abaccdeff"));
console.log(firstUniqChar(""));