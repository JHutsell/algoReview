// Hash Tables/Hash Maps/Objects

// A Hash, or Hash Table, Hash Map, Object(JS), is an abstract array, wherein =>
// Data is related in 'key': 'value' pairs
// Each key is a unique bucket, making it easier to find a specific data point
// On average, the cost of each lookup in the hash is independent of the number of elemenets stored
// A well known, very efficient data type for lookups
// As a larger set of data will take O(N) in other data structures and a larger N will increase time complexity
// examples:  associative arrays, database indexing, caches, and sets

// Keys are assigned using a 'hash function' =>
// The idea of hashing is to distribute the entries (key/value pairs) across an array of buckets => 
// Given a key, the algorithm computes an index that suggests where the entry can be found
// index = f(key, array_size)
// hash = hashfunc(key)
// index = hash % array_size
// Perfect hashing allows for constant time lookups in all cases

// An example of algorithm that can be better solved using a hash, is Fibonacci
// In this case we are using memoization, which is "Is an optimization technique used primarily to speed up =>
// computer programs by storing the results of expensive function calls."


function fibonacci(num, memo) {
    // If we store the value of each index in a hash, we can avoid the computational =>
    // time of that value for the next N times; "caching" each value accordingly
    memo = memo || {}
    if (memo[num]) return memo[num];
    // if the memo "object"(hash) contains a key equal to n, we return that related value
    if (num <= 1) return num;
    // since the fibonacci sequence is [0, 1, 1, 2, 3, 5...], if the number is 0 or 1, we will be returning that number

    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo)
    // If the memo hash doesn't contain a key equal to n, we calculate the fib number for the nth key and store it =>
    // as the value for that nth key; Also return that value
}

// This method also utilizes recursion, which will be covered in another file


// *** Make Grid example

