// Depth First Search 

// Type of Tree Traversal, which is a form of graph traversal; =>
// Usually to check or update each node in a tree, without repeats
// DFS travels through each child of a given node, going "deeper" =>
// before reaching a node on the same level but opposite side
<img src="https://1.bp.blogspot.com/-Tp1gf91ND18/VGOcBcrpN-I/AAAAAAAAADE/xnDmuVWTIP8/s1600/DepthFirst.gif"></img>
// "In depth-first search, once we start down a path, we don’t stop until we get to the end. In other words, 
//  we traverse through one branch of a tree until we get to a leaf, and then we work our way back to the trunk of the tree."
// Implements a Stack, which is to say, Last in First out order. 
// ** GOES DEEP
// Time Complexity O(V + E) ~~~ V = Vertices E = Edges; As it visits every vertex & edge in the worst case
// Space Complexity(Of Balanced Tree) O(H) ~~~ H = Height

// To print every node in a graph
function DFS(node) {
    // create stack and add initial node
    let stack = new Stack(this.nodes.length);
    let explored = new Set();
    stack.push(node);

    explored.add(node);

    // continue until stack is empty
    while (!stack.isEmpty()) {
        let temp = stack.pop();
        // log every element
        console.log(temp)

        // in the edges object, we search for nodes this node is directly connected to
        // filter out nodes that have already been explored
        // then mark each unexplored node as explored and add it to stack
        this.edges[temp]
            .filter(num => !explored.has(num))
            .forEach(num => {
                explored.add(num);
                stack.push(num);
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

g.DFS("A"); // => A D E F B G C

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
function dfSearch(value) {
    let collection = [this.root]

    while (collection.length) {
        let node = collection.shift()

        if (node.data === value) {
            return true
        } else {
            collection.unshift(...node.children)
        }
    }
    return false
}