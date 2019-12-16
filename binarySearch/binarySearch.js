//Another common algorith used to test a developers skills is the Binary Search Algorithm

// The general idea is that you will search a list or collection for a value
// The technique is used on a sorted list
// The function will look at the middle element of the list, and if the value at that middle =>
// element is either greater or less than the value, the function then looks only at the other half
// This process is repeated until the value is either found, or is not contained in the list

function binarySearchIteration(array, num) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let middle = array.length / 2;

        if (array[mid] === num) return true;

        else if (arr[mid] < num) {
            start = mid +1;
        } else {
            end = mid - 1;
        }
    }
    return false;
}