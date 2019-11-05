//  Variable/Pointer Manipulation

// Given many algorithms, it is often the case that a variable/pointer =>
// manipulation will be key to solving the problem 
// Often, it is very useful to establish two or more of there pointers, in order =>
// to solve the problem. 
// It is often a more optimal space/time complexity to utilize multiple variables or =>
// "pointers" rather than say, using a nested loop 
// A simple example of this is the common question of finding two values in a sorted array that sum to a certain value

// The first example is using a nested loop, and as such is done in a much slower time complexity of O(N^2)
function twoSumIteration(array, target) {
    for( let i = 0; i < array.length; i++) {
        for( let j = 0; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return [arr[i], arr[j]]
            }
        }
    }
    return false
}

// A more optimal solution would use two pointers in order to decrease time complexity to O(N)
function twoSumMultiPointer(array, target) {
    // We will take each end of the array, index 0 and whatever the last index is
    let left = 0
    let right = array.length - 1

    // Using a while loop to test if the left value is less than the right will ensure =>
    // the entire array is traversed
    while (left < right) {
        let sum = array[left] + array[right]
        // if we find the target, we return it
        if ( sum === target) {
            return [arr[i], arr[j]]
        } else if (sum > target) {
            // if the target is less than the sum we move the right pointer to the left, as the array is sorted least to greatest
            right --;
        } else {
            // if the target is greater than the sum, we move the left pointer to the right
            left ++;
        }
    }
    // if we make it through the loop and we don't find our target, we can return false
    return false
}

// Another example is the problem of finding the amount of unique values in a sorted array
// Note, the dual pointer method in this case only will work on a sorted array 

function countUnique(array) {
    if (array.length === 0) return 0;
    // since we need to add 1 to the value of our first pointer to find our answer, we need to set this =>
    // conditional to catch this odd case
    let i = 0
    // i will point to our first value, j our second to begin
    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            // as we iterate we compare the values of array[i] and array[j]
            i++;
            // if the values are not equal, we've reached another unique value, hence increasing i 
            array[i] = array[j];
            // we also need to reassign i to the value of j in order to check that value against the remaining values
            // in doing so, accounting for each unique value
        }
        // if the values are equal, we will only increment our value for j
    }
    return i + 1;
    // in the end we will return our value for i + 1, as i was not only a pointer for an index in our array, =>
    // but also a running count of the unique values, adding 1 to account for the index beggining at 0
}

// Another example of an algorithm that benefits from this technique is the longest palindrome =>
// in a string problem 
// A palindrome is a word, number, or sequence that reads the same from the front as it does the back
// ex. "madam", 121