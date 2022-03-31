function maxSubArraySum(arr) {
    let maxSum = arr[0]
    let currentSum = 0
    let currentArr = []
    let maxArr = []

    for (const el of arr) {
        const sum = currentSum + el
        if (sum > el) {
            currentSum = sum
            currentArr.push(el)
        } else {
            currentSum = el
            currentArr = [el]
        }

        if (maxSum < currentSum) {
            maxSum = currentSum
            maxArr = Object.assign([], currentArr)
        }
    }

    return { maxSum, maxArr }
}

var a = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArraySum(a))