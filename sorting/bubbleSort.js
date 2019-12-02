// The most rudimentary sorting technique is bubble sort
// The method repeatedly transverses the list and swaps elements if they =>
// are in the incorrect order
// It is names for the way elements "bubble" to the top of the list
// Bubble sort is in most cases, slow and impractical 

// Each element is compared to it's neighboring element, and swapped if the criteria is not met, =>
// in most cases this criteria being the list is ordered in ascending order
// Each comparison happens, and if the list is not sorted by one transversal, the iteration happens again 

// Take for example, this array [5, 4, 1, 2, 8]
//[5, 1, 4, 2, 8] => compare 5 and 1, as 5 is greater, these elements will swap
//[1, 5, 4, 2, 8] => compare 5 and 4, as 5 is greater, these elements will swap
//[1, 4, 5, 2, 8] => compare 5 and 2, as 5 is greater, these elements will swap
//[1, 4, 2, 5, 8] => compare 5 and 8, no swap, as these elements are in correct order

// This would be the first iteration, which does not fully sort the list, meaning another iteration would be necessary

//The code for bubble sort is as follows, with the helper method to perform the swapping of elements

function swap(arr, i, j) {  
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 1; j < arr.length; j++) {
            if(arr[j - 1] > arr[j]) {
                swap(arr, arr[j - 1], arr[j])
            }
        }
    }
    return arr
}

// In an ideal case, that being an already sorted list, the algorithm would run at O(n) time complexity, 
// with the entire list still needing to be transversed. On average, bubble sort would operate at => 
// O(n^2) time complexity, proving to be a rather slow and impractical approach to sorting

// Space complexity would be O(1)