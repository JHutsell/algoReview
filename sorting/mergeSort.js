// Another sorting method is known as "Merge Sort"
// Merge sort is known by using a divide and conquer style sort

// It is a comparison based sorting algorithm
// The list is split into n sublists, where n is the number of elements
// The sublists are repeatedly merged to produce new, sorted sublists

// First, we will create a function that will merge 2 lists

function merge(arrOne, arrTwo) {
    if(arrOne.length === 0) return arrTwo
    if(arrTwo.length === 0) return arrOne

    if(arrOne[0] < arrTwo[0]) {
        // let remainingOne = arrOne.splice(1)
        let remainingOne = arrOne.shift()
        return [arrOne[0]] + merge(remainingOne, arrTwo)
    } else {
        // let remainingTwo = arrTwo.splice(1)
        let remainingTwo = arrTwo.shift()
        return [arrTwo[0]] + merge(arrOne, remainingTwo)
    }
}

function mergeSort(array) {
    if(array.length === 0) return null
    if(array.length === 1) return array

    let midIndex = array.length / 2
    let left = array.slice(0, midIndex)
    let right = array.slice(midIndex)
    return merge(mergeSort(left), mergeSort(right))
}