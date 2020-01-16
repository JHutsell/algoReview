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
        // this function will iteratively go through the list with a while loop
        // it will iterate from the start point to the end point
        let middle = array.length / 2;
        // we first find the middle point then check if thats our target
        if (array[middle] === num) return true;

        else if (arr[middle] < num) {
            start = middle +1;
            // if the middle point is less than the target, we move the start to the index after the middle index
        } else {
            end = middle - 1;
            // if the middle point is greater than the target, we move the end to the index before the middle index
        }
        // this process is repeated until the middle index value is equal to our target
    }
    return false;
    // if we don't find the value in our list, we will return false, as it isnt't present in our list
}

function binarySearchRecursion(array, num) {
    if (array.length === 0 && array[0] === num) return true

    let midIndex = array.length / 2
    let midValue = array[midIndex]

    if (midValue > num) {
        return binarySearchRecursion(array.slice(0, midIndex), num)
        // in this case, we are using recursion to call the function within itself, doing the same checks on our middle value
    } else if (midValue < num) {
        return binarySearchRecursion(array.slice(midIndex, array.length - 1), num)
    } else {
        return midIndex
    }
}