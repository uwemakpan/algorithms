// Implementaion of an insertion sort algorithm

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i]
    let j
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentValue
  }
  return arr
}
console.log(insertionSort([2, 1, 3, 7, 5])) // [1, 2, 3, 5, 7]
console.log(insertionSort([5, 45, 35, 8, 2, 34, 75, 98, 34, 63]))
