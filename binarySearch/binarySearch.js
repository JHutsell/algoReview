//Another common algorith used to test a developers skills is the Binary Search Algorithm

// The general idea is that you will search a list or collection for a value
// The technique is used on a sorted list, and is considered a "divide and conquer" approach
// The function will look at the middle element of the list, and if the value at that middle =>
// element is either greater or less than the value, the function then looks only at the other half
// This process is repeated until the value is either found, or is not contained in the list

// This is done by holding values of both the first value in the list, and the final 

function binarySearchIteration(array, num) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let middle = array.length / 2;

        if (array[middle] === num) return true;

        else if (arr[middle] < num) {
            start = middle +1;
        } else {
            end = middle - 1;
        }
    }
    return false;
}

function binarySearchRecursion(array, num) {
    if (array.length === 0 && array[0] === num) return true

    let midIndex = array.length / 2
    let midValue = array[midIndex]

    if (midValue > num) {
        return binarySearchRecursion(array.slice(0, midIndex), num)
    } else if (midValue < num) {
        return binarySearchRecursion(array.slice(midIndex, array.length - 1), num)
    } else {
        return midIndex
    }
}