// Matching Brackets Problem 

// Given an expression string , write a program to examine =>
// whether the pairs and the orders of =>
// “{“,”}”,”(“,”)”,”[“,”]” are correct
// "Last unclosed, first closed"
// ")(" => NO   "[()]" => YES   "[(])" => NO

// Scan left to right; Add each opening symbol to a list(PUSH); =>
// if next symbol is a closing symbol for the most recent symbol, => 
// The opening symbol can be removed from list(POP); If the following symbol =>
// is one that is not either a new opening or a correct closing, return false
// Goal is to have empty list

// In this way, we are implementing a stack, which is to say, a list whose =>
// values follow "Last in First Out"

function matchingBrackets(string) {
    let openings = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    let closings = [")", "}", "]"];
    let bracketStack = [];

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (openings[char]) {
            bracketStack.push(char)
        } else if (closings.includes(char)) {
            if (bracketStack.length === 0 || (openings[bracketStack.pop()] !== char)) {
                return false
            } 
        }
    }

    return bracketStack.length === 0;
}