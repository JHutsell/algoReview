// Another useful technique in solving algorithms is the use of recursion
// Recursion can be thought of as a procedure that occurs within itself
// In terms of development, this can be thought of as a function that calls =>
// itself within another function call 

// The basic idea is that there are two properties, the base case and the recursive step
// The base case is the scenario where the function will terminate, and will stop the recursion
// The recursive step is the set of rules or processes that reduce each case towards the base case

// An often used example is the problem of finding the nth fibonacci number

function fibonacci(num) {
    if (num <= 1) return 1;
    // fibonacci is a sequence where the perevious 2 numbers add to the next
    // as such, our base case will be that if the desired fibonacci number is 1 or less, we =>
    // can just return 1

    return fibonacci(num - 1) + fibonacci(num - 2)
    // the recursive step is calling the function on the previous 2 numbers in the sequence
    // this will be done until the function reaches its base case
}

// This technique of recursion is very slow, as the time complexity soars to O(2^n)
// In fact, running this function in your browsers console with a high number will most likely =>
// crash your broswer tab(s)
// This can be solved recursively, and much better time complexity, using a technique called memoization
// Memoization is the technique of storing data so as to not have to make the extensive function calls multiple times

function fibonacciMemo(num, memo) {
    memo = memo || {};
    // here we are either using the memo passed as an argument, or if there isn't one, creating an empty object 
    if (memo[num]) return memo[num];
    // This is the base case we are looking to reach using the memoization
    if (num <= 1) return 1;
    // This is our previous base case, which is still valid

    return memo[num] = fibonacciMemo(num - 1, memo) + fibonacciMemo(num - 2, memo)
    // This is the recursive step, which calculates the value of the number, and stores it in our object
    // It is only having to do the calculations for each value once, as the values are being stored in our =>
    // object, instead of being calculated each time
}