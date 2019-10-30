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

