// A common, and efficient sorting method is known as "Quick Sort"
// It is known as being a "divide and conquer" style sorting method

// This method splits an array or list by a certain point, its "pivot" =>
// breaking the list into 2 halves, with one half being less than the pivot, =>
// and one half being greater than the pivot
// It then recursively applies the same process to the halves

// Quick sort's average time complexity is O(nlogn) (with n items)
// Code for quicksort would look as follows:

function quickSort(array) {
    if (array.length <= 1) return array
    // this will be the base case for our function, as if the array is either empty or only =>
    // one element, we will return it

    let pivot = array[0]
    // here, we will choose the first element as the pivot
    let remainingArray = array.splice(1)
    // we will then use the remainder of the array by splicing it to not include our pivot
    let left = remainingArray.filter((element) => pivot >= element)
    let right = remainingArray.filter((element) => pivot < element)
    // we then make 2 halves of the array by filtering into 2 sides, one being less than our pivot, =>
    // and one being greater than our pivot

    return quickSort(left) + [pivot] + quickSort(right)
    // we then recursively call quick sort on each half, making sure to include our pivot as the middle point
}