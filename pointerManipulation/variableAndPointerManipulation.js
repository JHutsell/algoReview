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
    // the entire array is transversed
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

// Another example of an algorithm that benefits from this technique is the longest palindrome =>
// in a string problem 
// A palindrome is a word, number, or sequence that reads the same from the front as it does the back
// ex. "madam", 121