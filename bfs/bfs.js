// Breadth First Search

// Type of Tree Traversal, which is a form of graph traversal; =>
// Usually to check or update each node in a tree, without repeats
// BFS travels through each child of a node on a given level going "wider" => 
// before traversing through the grandchildren nodes "Level order traversal"
<img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fhe-s3.s3.amazonaws.com%2Fmedia%2Fuploads%2Ffdec3c2.jpg&imgrefurl=https%3A%2F%2Fwww.hackerearth.com%2Fpractice%2Falgorithms%2Fgraphs%2Fbreadth-first-search%2Ftutorial%2F&docid=gyS3PlRuUG0xGM&tbnid=wjKh40ZuVO1wUM%3A&vet=10ahUKEwjB3Mj7g7jlAhVtw1kKHceqDE0QMwh8KAIwAg..i&w=648&h=384&bih=736&biw=1440&q=breadth%20first%20search&ved=0ahUKEwjB3Mj7g7jlAhVtw1kKHceqDE0QMwh8KAIwAg&iact=mrc&uact=8"></img>
// "explores all of the neighbor nodes at the present depth =>
//  prior to moving on to the nodes at the next depth level."
// "It uses the opposite strategy as depth-first search, which instead explores the node branch as far as possible =>
//  before being forced to backtrack and expand other nodes"
// Implements a Queue, which is to say, First In First Out order
// ** GOES WIDE
// Time Complexity O(V + E) ~~~ V = Vertices E = Edges; As it visits every vertex & edge in the worst case
// Space Complexity(Of Balanced Tree) O(H) ~~~ H = Height

// To print every node in a Graph 
function BFS(node) {
    // create queue and add initial node
    let queue = new Queue(this.nodes.length);
    let explored = new Set();
    queue.enqueue(node);

    explored.add(node);

    // Continue until queue is empty
    while (!queue.isEmpty()) {
        let temp = queue.dequeue();
        // log every element
        console.log(temp)

        // in the edges object, we search for nodes this node is directly connected to
        // filter out nodes that have already been explored
        // then mark each unexplored node as explored and add it to queue
        this.edges[temp]
            .filter(num => !explored.has(num))
            .forEach(num => {
                explored.add(num);
                queue.enqueue(num);
            })
    }
}

let g = new Graph();
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
g.addNode("F");
g.addNode("G");

g.addEdge("A", "C");
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("B", "G");

g.BFS("A"); // => A C B D G E F

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class Node {
    constructor(data) {
        this.data = data
        this.children = []
    }

    add(data) {
        this.children.push(new Node(data))
    }

    remove(data) {
        this.children = this.children.filter(child => child.data !== data)
    }
}

class Tree {
    constructor() {
        this.root = null
    }
}

// To search for a value in a graph 
function bfSearch(value) {
    let collection = [this.root]

    while (collection.length) {
        let node = collection.shift();

        if (node.data === data) {
            return true
        } else {
            collection.push(...node.children)
        }
    }
    return false
}